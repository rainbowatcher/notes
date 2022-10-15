import type { Config } from '@rainbowatcher/theme-sika/src/vitepress'
import { defineConfigWithTheme } from 'vitepress'
import autoSidebarConfig from '@rainbowatcher/vitepress-plugin-auto-sidebar'
import katex from '@rainbowatcher/markdown-it-katex'
import taskList from 'markdown-it-task-lists'
import sup from 'markdown-it-sup'
import sub from 'markdown-it-sub'
import footnote from 'markdown-it-footnote'
import mark from 'markdown-it-mark'
import ins from 'markdown-it-ins'
import deflist from 'markdown-it-deflist'
import type { SidebarConfig } from '@rainbowatcher/theme-sika/src/vitepress/config'
import UnoConfig from './configs/uno'
import { navbarConfig } from './configs'
import { customKatexElements } from './types/katex'

export default defineConfigWithTheme<Config>({
  lang: 'zh-CN',
  title: 'Rainbow Tree Hole',
  titleTemplate: 'Rainbow Watcher\'s Tree Hole',
  description: 'Note for Rainbow Watcher',
  // locales: {
  //   '/zh-cn': {
  //     lang: 'zh-CN',
  //     title: '彩虹树洞',
  //     titleTemplate: '看彩虹的人的小树洞',
  //   },
  // },
  head: [
    ['meta', { name: 'robots', content: 'noindex' }],
    ['meta', { name: 'robots', content: 'nofollow' }],
    ['meta', { name: 'twitter:site', content: '@_rainbowatcher' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    // TODO set custom logo
    ['meta', { name: 'twitter:image', content: 'https://vuejs.org/images/logo.png' }],
    ['link', { rel: 'icon', href: '/logo.ico' }],
  ],
  appearance: true,
  lastUpdated: true,
  themeConfig: {
    // logo: '/logo.ico',
    editLink: {
      // pattern: ':repo/edit/:branch/:path',
      text: '编辑页面',
    },
    // lastUpdatedText: '最后更新',
    footer: {
      // message: '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>',
      license: {
        text: 'CC BY-NC-SA 4.0',
        link: 'http://creativecommons.org/licenses/by-nc-sa/4.0/',
      },
      copyright: '2022-PRESENT &copy; <a href="https://github.com/rainbowatcher" target="_blank">rainbowatcher</a><br />Powered by <a href="https://vitepress.vuejs.org" target="_blank">VitePress</a>',
    },
    // outlineTitle: '章节导航',
    // docFooter: {
    //   prev: '上一篇',
    //   next: '下一篇',
    // },
    nav: navbarConfig,
    sidebar: autoSidebarConfig() as SidebarConfig,
    // outline: 2,
    // localeLinks: {
    //   text: '',
    //   items: [
    //     {
    //       text: '中文',
    //       link: '/',
    //     },
    //     {
    //       text: 'English',
    //       link: '/en/',
    //     },
    //   ],
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rainbowatcher/' },
      { icon: 'twitter', link: 'https://twitter.com/_rainbowatcher' },
      // { icon: 'discord', link: 'https://discord.com/invite/HBherRA' },
    ],
  },
  cleanUrls: 'with-subfolders',
  ignoreDeadLinks: false,
  markdown: {
    lineNumbers: true,
    externalLinks: {
      rel: 'noopener noreferrer',
    },
    config: (md) => {
      md.use(katex)
        .use(taskList, { label: true })
        .use(sub)
        .use(sup)
        .use(footnote)
        .use(mark)
        .use(ins)
        .use(deflist)
    },
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => customKatexElements.includes(tag),
      },
    },
  },
  vite: {
    plugins: [
      UnoConfig,
    ],
  },
})
