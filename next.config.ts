import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: true,
    scrollRestoration: true,
  },
};

export default nextConfig;
