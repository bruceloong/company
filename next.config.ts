import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n.ts");

// 获取仓库名称，用于 GitHub Pages 部署
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // 启用静态导出
  // 如果是 GitHub Pages 部署，设置 basePath 和 assetPrefix
  basePath: isGitHubPages ? `/${repo}` : "",
  assetPrefix: isGitHubPages ? `/${repo}/` : "",
  // 关闭类型检查
  typescript: {
    // !! 警告: 这会跳过类型检查
    ignoreBuildErrors: true,
  },
  // 添加实验性配置
  experimental: {
    // 如果有其他实验性配置，可以在这里添加
  },
  images: {
    unoptimized: true, // 对于静态导出，需要禁用图片优化
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
