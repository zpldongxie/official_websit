# 网站

本网站使用 [Docusaurus](https://docusaurus.io/) 构建，这是一个现代的静态网站生成器。

### 安装

```bash
$ yarn
```

### 本地开发

```bash
$ yarn start
```

此命令启动本地开发服务器，并打开浏览器窗口。大多数更改都可以实时反映，不需要重启服务器。

### 构建

```bash
$ yarn build
```

此命令将静态内容生成到 `build` 目录中，并且可以使用任何静态内容托管服务进行服务。

### 部署

使用 SSH：

```bash
$ USE_SSH=true yarn deploy
```

不使用 SSH：

```bash
$ GIT_USER=<您的 GitHub 用户名> yarn deploy
# windows执行
$env:GIT_USER="zpldongxie"; yarn deploy
```

如果您使用 GitHub 页作为托管， 此命令是一个方便的方式来构建网站并推送到 `gh-pages` 分支。
