# 响应式企业官网

这是一个使用 Next.js 和 Tailwind CSS 构建的现代化响应式企业官网，具有多语言支持、动画效果和联系表单功能。

## 技术栈

- **Next.js 14** - React 框架
- **Tailwind CSS** - 用于样式设计
- **GSAP & ScrollTrigger** - 用于高级动画效果
- **next-intl** - 用于国际化支持
- **EmailJS** - 用于处理联系表单提交
- **React Icons** - 用于图标

## 功能特点

- 🌐 多语言支持 (英文和中文)
- 📱 完全响应式设计，适配所有设备尺寸
- ✨ 使用 GSAP 和 ScrollTrigger 的平滑滚动动画
- 📝 集成 EmailJS 的联系表单
- 🔍 SEO 优化
- 🌓 支持暗色模式

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境运行

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 运行生产版本

```bash
npm start
```

## 部署到 GitHub Pages

### 自动部署（GitHub Actions）

项目已配置 GitHub Actions 工作流，当你推送到 `main` 分支时，会自动构建并部署到 GitHub Pages。

1. 在 GitHub 仓库设置中启用 GitHub Pages
2. 选择 "GitHub Actions" 作为构建和部署的来源
3. 推送代码到 `main` 分支，自动触发部署

### 手动部署

你也可以使用以下命令手动部署：

```bash
npm run deploy
```

这将构建项目并使用 gh-pages 包部署到 GitHub Pages。

### 自定义域名

项目已配置使用 `office.yss520.online` 作为自定义域名。如需更改：

1. 修改 `public/CNAME` 文件
2. 在你的 DNS 提供商处添加相应的 CNAME 记录，指向 `<username>.github.io`

## 自定义

### 邮件服务配置

要使联系表单正常工作，您需要在 `src/components/ContactSection.tsx` 文件中更新 EmailJS 配置：

1. 注册 [EmailJS](https://www.emailjs.com/) 账户
2. 创建一个服务和模板
3. 获取您的公钥、服务 ID 和模板 ID
4. 更新以下代码：

```typescript
// 初始化 EmailJS
emailjs.init("YOUR_PUBLIC_KEY");

// 发送邮件
await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
  from_name: formData.name,
  from_email: formData.email,
  from_phone: formData.phone,
  message: formData.message,
});
```

### 多语言支持

语言文件位于 `src/messages/` 目录中。您可以编辑这些文件以更新网站内容。

## 项目结构

- `src/app/[locale]` - 国际化路由
- `src/components` - 所有组件
- `src/messages` - 语言文件
- `src/middleware.ts` - 国际化中间件
- `src/i18n.ts` - 国际化配置

## 贡献

欢迎提交 Pull Requests 和 Issues！

## 许可证

MIT
