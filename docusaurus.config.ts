import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '兴教云',
  favicon: 'img/favicon.ico',

  // 设置你的网站的生产环境URL
  url: 'https://www.xingjiaoyun.com/',
  // 设置你的网站在/<baseUrl>/路径下被服务的路径
  // 对于GitHub Pages部署，这通常是'/<projectName>/'
  baseUrl: '/',

  // GitHub Pages部署配置。
  // 如果你不使用GitHub Pages，你不需要这些。
  organizationName: 'zpldongxie', // 通常是你的GitHub组织/用户名。
  projectName: 'official_websit', // 通常是你的仓库名。

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 即使你不使用国际化，你也可以使用这个字段来设置
  // 有用的元数据，如html lang。例如，如果你的网站是中文的，你
  // 可能想将"en"替换为"zh-Hans"。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // 请将这改为你的仓库。
          // 移除这来移除"编辑此页面"链接。
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 请将这改为你的仓库。
          // 移除这来移除"编辑此页面"链接。
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // 有用的选项来强制博客最佳实践
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 用你的项目的社交卡替换
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '我的网站',
      logo: {
        alt: '我的网站Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '教程',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '教程',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 我的项目，Inc. 使用 Docusaurus 构建。`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
