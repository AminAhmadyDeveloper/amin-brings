import { Suspense, use } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

type AwaitProps<TResult> = {
  promise: Promise<TResult>;
  children: (data: TResult) => React.ReactNode;
  fallback?: React.ReactNode;
  errorFallback?: (error: unknown) => React.ReactNode;
};

function AwaitComponent<TResult>({
  promise,
  children,
}: {
  promise: Promise<TResult>;
  children: (data: TResult) => React.ReactNode;
}) {
  const data = use(promise);
  return <>{children(data)}</>;
}

export function Await<TResult>({
  promise,
  children,
  fallback = 'Loading...',
  errorFallback,
}: AwaitProps<TResult>) {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) =>
        errorFallback ? errorFallback(error) : <p>Something went wrong.</p>
      }
    >
      <Suspense fallback={fallback}>
        <AwaitComponent promise={promise}>{children}</AwaitComponent>
      </Suspense>
    </ErrorBoundary>
  );
}
