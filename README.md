# My Supabase Blog

基于 Jekyll Themes + Supabase + GitHub Pages 的动态博客框架。

- 主题：Jekyll Themes（minima，可自定义）
- 后端：Supabase
- 部署：GitHub Pages

### 地址

[beefree365.github.io](https://beefree365.github.io/)


### 架构改进

+----------------+      DynamoDB Stream       +------------------+        GitHub Push        +--------------------------+
|  DynamoDB 表   |  ───────────────────────▶  |   AWS Lambda 函数 |  ─────────────────────▶  |   GitHub 仓库 (markdown) |
| blog_post      |     监听新增文章事件       |   执行 JS 生成 .md |                          |                          |
+----------------+                            +------------------+                          +--------------------------+
                                                                                                  │
                                                                                                  ▼
                                                                                       GitHub Actions 自动构建 HTML
                                                                                                  │
                                                                                                  ▼
                                                                                          博客上线（GitHub Pages）

此时对于文档型的内容，直接可以生成静态页面，同时对于基于api的动态数据页面，有DynamoDB+AWS Lambda 函数动态渲染，动静结合，同时对seo友好，兼顾多方优点。
