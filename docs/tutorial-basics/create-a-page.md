---
sidebar_position: 1
---

# 创建页面

将**Markdown或React**文件添加到`src/pages`以创建一个**独立页面**：

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 创建你的第一个React页面

在`src/pages/my-react-page.js`创建一个文件：

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>我的React页面</h1>
      <p>这是一个React页面</p>
    </Layout>
  );
}
```

现在，一个新的页面已经在[http://localhost:3000/my-react-page](http://localhost:3000/my-react-page)上可用。

## 创建你的第一个Markdown页面

在`src/pages/my-markdown-page.md`创建一个文件：

```mdx title="src/pages/my-markdown-page.md"
# 我的Markdown页面

这是一个Markdown页面
```

现在，一个新的页面已经在[http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page)上可用。
