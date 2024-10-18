import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

function gitXJYLoginUrl() {
  const href = window.location.href;
  if (!href.includes('localhost')) {
    const str = href.slice(href.indexOf('.') + 1);
    const newstr = str.slice(0, str.indexOf('/'));

    return '//platform.' + newstr + '/?enterprise_code=01001';
  }
  return 'http://platform.test.xingjiaoyun.com/sso/login';
}

const config: Config = {
  title: '兴教云',
  favicon: 'img/icon.png',

  // 设置你的网站的生产环境URL
  url: 'https://www.xingjiaoyun.com/',
  // 设置你的网站在/<baseUrl>/路径下被服务的路径
  // 对于GitHub Pages部署，这通常是'/<projectName>/'
  baseUrl: '/official_websit/',

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
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 请将这改为你的仓库。
          // 移除这来移除"编辑此页面"链接。
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
    metadata: [
      {
        name: 'keywords',
        content: '兴教云,教育云,教育平台,教育云平台,智慧校园,智慧教育,数字校园,教育软件,教育软件官网',
      },
    ],
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: '兴教云Logo',
        src: 'img/logo.png',
        srcDark: 'img/logo_dark.png',
      },
      items: [
        {
          href: 'http://platform.xingjiaoyun.com/sso/login',
          label: '登录',
          position: 'right',
          target: '_blank',
        },
        {
          type: 'html',
          position: 'right',
          value:
            '<a href="#register" style="padding: 6px 16px; color: #fff; background-color: #0177fb; border: none; border-radius: 4px; cursor: pointer;">申请入驻</a>',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `
      <p>咨询电话：029-8757 5351&nbsp;&nbsp;联系地址：陕西省西安市雁塔区丈八一路汇鑫IBC-B座</p>
      <p>Copyright © 2015-2024 Education Promotion Cloud. All Rights Reserved &nbsp;&nbsp;由<a href="//platform.xingjiaoyun.com/sso/login" target="_1" style="text-decoration:none; color: currentColor;">兴教云</a>提供技术支持</p>
      <p>网站备案：<a href="https://beian.miit.gov.cn/" target="_1" style="text-decoration:none; color: currentColor;">陕ICP备17016975号-2</a>&nbsp&nbsp&nbsp陕公网安备 61019002002271号</p>
    `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
