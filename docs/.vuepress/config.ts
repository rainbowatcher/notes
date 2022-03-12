import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import nav from './nav'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  base: '/notes/',
  lang: 'zh-CN',
  title: 'CS 笔记',
  description: 'Just playing around',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    // logo: 'https://vuejs.org/images/logo.png',
    displayAllHeaders: true,
    navbar: nav.path,
    repo: 'https://github.com/with-rainbow/learn-note',
    // repoLabel: '项目'
  },
  plugins:[
  ]
})