---
sidebar_position: 3
---

# 创建博客文章

Docusaurus为每个博客文章创建了一个**页面**，同时也创建了一个**博客索引页面**、一个**标签系统**和一个**RSS**订阅源...

## 创建你的第一个文章

在`blog/2021-02-28-greetings.md`创建一个文件：

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: 欢迎！
authors:
  - name: Joel Marcey
    title: Docusaurus 1的共同创造者
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus维护者
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

恭喜你，已经创建了你的第一个文章！

随意修改和编辑这篇文章。

```

现在，一个新的博客文章已经在[http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings)上可用。
