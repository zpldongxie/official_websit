---
sidebar_position: 5
---

# 部署你的网站

Docusaurus 是一个 **静态站点生成器**（也称为 **[Jamstack](https://jamstack.org/)**）。

它将你的网站构建为简单的 **静态HTML、JavaScript和CSS文件**。

## 构建你的网站

为 **生产环境** 构建你的网站：

```bash
npm run build
```

静态文件将生成在 `build` 文件夹中。

## 部署你的网站

本地测试你的生产环境构建：

```bash
npm run serve
```

`build` 文件夹现在在 [http://localhost:3000/](http://localhost:3000/) 上提供服务。

你现在可以轻松地将 `build` 文件夹部署到 **几乎任何地方**，**免费** 或以很小的成本（阅读 **[部署指南](https://docusaurus.io/docs/deployment)**）。
