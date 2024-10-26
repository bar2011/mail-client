/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

const isMobile = process.env.NEXT_PUBLIC_IS_MOBILE === "true";

/** @type {import("next").NextConfig} */
const config = {
  ...(isMobile
    ? { output: "export", reactStrictMode: true, images: { unoptimized: true } }
    : {}),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  useFileSystemPublicRoutes: true,
};

export default config;
