import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "SWABox 文档",
  description: "为电教委提供白班常用软件下载的工具",
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '快速上手', link: '/quick-start/' },
      { text: '应用帮助', link: '/help/' },
      { text: '开发文档', link: '/dev-doc/' }
    ],

    sidebar: [
      {
        text: '快速上手',
        items: [
          { text: '快速上手', link: '/quick-start/' },
          { text: '下载与安装', link: '/quick-start/setup.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SWABox/SWABox-wiki-site' }
    ]
  }
})
