import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  eslint: { dirs: ["."] },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
