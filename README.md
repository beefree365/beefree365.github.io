# My Supabase Blog

基于 Jekyll Themes + Supabase + GitHub Pages 的动态博客框架。

- 主题：Jekyll Themes（minima，可自定义）
- 后端：Supabase
- 部署：GitHub Pages

### 地址

[beefree365.github.io](https://beefree365.github.io/)


### 后期架构改进

+----------------------+
|   AWS DynamoDB 表    |
|   表名: blog_post    |
+----------------------+
            │
            │（启用 Stream）
            ▼
+-------------------------+
|    AWS Lambda 函数     |
|  Node.js 监听新增数据   |
|  ⬇                    |
|  生成 .md 内容字符串    |
|  提交至 GitHub 仓库     |
+-------------------------+
            │
            ▼
+------------------------------+
|     GitHub 仓库 (markdown)   |
|   posts/xxx.md 被添加或更新  |
+------------------------------+
            │
            │（自动触发 GitHub Actions）
            ▼
+-------------------------------------------+
|      GitHub Actions 自动构建部署流程     |
|  - 安装 Hexo / Astro / Hugo 等工具        |
|  - 将 Markdown 渲染成 HTML                |
|  - 部署到 gh-pages 分支或 Vercel          |
+-------------------------------------------+
            │
            ▼
+-------------------------------+
|    博客网站上线（静态托管）   |
|  - GitHub Pages                |
+-------------------------------+


此时对于文档型的内容，直接可以生成静态页面，同时对于基于api的动态数据页面，有DynamoDB+AWS Lambda 函数动态渲染，动静结合，同时对seo友好，兼顾多方优点。
