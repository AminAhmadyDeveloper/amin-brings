import { wrap } from 'optimism';

import { use } from 'react';

export function getEncryptionKey(envVarName: string): Promise<CryptoKey> {
  if (envVarName == undefined) {
    throw new Error(
      'You need to specify the name for a secret-holding environment variable.',
    );
  }
  if (envVarName.startsWith('NEXT_PUBLIC_')) {
    throw new Error(
      'You cannot use NEXT_PUBLIC_ environment variables for secrets, as they would be transported to the browser.',
    );
  }
  const encryption_key = process.env[envVarName];
  if (!encryption_key) {
    throw new Error(
      'There is no environment variable named ' + envVarName + '.',
    );
  }
  let parsed: JsonWebKey;
  try {
    parsed = JSON.parse(encryption_key);
  } catch {
    throw new Error(
      'The environment variable ' +
        envVarName +
        ' does not contain a valid JSON string.',
    );
  }
  return crypto.subtle.importKey('jwk', parsed, 'AES-CBC', false, [
    'encrypt',
    'decrypt',
  ]);
}

export function serialize(crypt: ArrayBuffer, iv: Uint8Array) {
  return (
    Buffer.from(crypt).toString('base64') +
    ':' +
    Buffer.from(iv).toString('base64')
  );
}

export function deserialize(serialized: string) {
  const [crypt, iv] = serialized.split(':');
  return [
    Buffer.from(crypt, 'base64'),
    Uint8Array.from(Buffer.from(iv, 'base64')),
  ] as const;
}

export async function readSSROnlySecret(
  cloakedSecret: string | undefined,
  encryptionEnvVarName: string,
): Promise<string | undefined> {
  if (cloakedSecret == undefined) {
    return undefined;
  }
  const key = await getEncryptionKey(encryptionEnvVarName);
  const [crypt, iv] = deserialize(cloakedSecret);

  const decrypted = await crypto.subtle.decrypt(
    {
      name: 'AES-CBC',
      iv: iv,
    },
    key,
    crypt,
  );

  return new TextDecoder().decode(decrypted);
}

const memoizedReadSSROnlySecret = wrap(readSSROnlySecret, {
  max: 10000,
}) as unknown as typeof readSSROnlySecret;

export function useSSROnlySecret(
  cloakedSecret: string | undefined,
  encryptionEnvVarName: string,
): string | undefined {
  const promise = memoizedReadSSROnlySecret(
    cloakedSecret,
    encryptionEnvVarName,
  );
  return use(promise);
}

export async function cloakSSROnlySecret(
  secret: string,
  encryptionEnvVarName: string,
) {
  const key = await getEncryptionKey(encryptionEnvVarName);
  const encoded = new TextEncoder().encode(secret);

  const iv = crypto.getRandomValues(new Uint8Array(16));
  const crypt = crypto.subtle.encrypt(
    {
      name: 'AES-CBC',
      iv: iv,
    },
    key,
    encoded,
  );

  return serialize(await crypt, iv);
}
