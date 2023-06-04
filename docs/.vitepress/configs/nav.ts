import type { DefaultTheme } from 'vitepress/theme'

const navbarConfig: DefaultTheme.NavItem[] = [
  {
    text: '计算机',
    items: [
      {
        text: '计算机基础',
        link: '/computer/basic/',
      },
      {
        text: '软件工程',
        link: '/computer/engineering/',
      },
    ],
  },
  {
    text: '系统',
    items: [
      {
        text: 'Linux',
        link: '/system/linux/',
      },
    ],
  },
  {
    text: '语言',
    items: [
      {
        text: '标记语言',
        items: [
          {
            text: 'HTML',
            link: '/language/markup-lang/html/',
          },
          {
            text: 'CSS',
            link: '/language/markup-lang/css/',
          },
          {
            text: 'Markdown',
            link: '/language/markup-lang/markdown/',
          },
        ],
      },
      {
        text: '静态语言',
        items: [
          {
            text: 'C',
            link: '/language/static/c-lang/',
          },
          {
            text: 'C++',
            link: '/language/static/cpp/',
          },
          {
            text: 'Java',
            link: '/language/static/java/',
          },
          {
            text: 'Kotlin',
            link: '/language/static/kotlin/',
          },
          {
            text: 'Rust',
            link: '/language/static/rust/',
          },
        ],
      },
      {
        text: '动态语言',
        items: [
          {
            text: 'Javascript',
            link: '/language/dynamic/javascript/',
          },
          {
            text: 'Typescript',
            link: '/language/dynamic/typescript/',
          },
          {
            text: 'Python',
            link: '/language/dynamic/python/',
          },
        ],
      },
    ],
  },
  {
    text: '生态',
    items: [
      {
        text: 'Vue',
        items: [
          {
            text: 'Vue',
            link: '/zoology/vue/vue/',
          },
          {
            text: 'Vite',
            link: '/zoology/vue/vite/',
          },
          {
            text: 'Vitepress',
            link: '/zoology/vue/vitepress/',
          },
        ],
      },
      {
        text: 'Java',
        items: [
          {
            text: 'Spring boot',
            link: '/zoology/java/spring-boot/',
          },
        ],
      },
      {
        text: 'Hadoop',
        items: [
          {
            text: 'Hive',
            link: '/zoology/hadoop/hive/',
          },
        ],
      },
    ],
  },
  {
    text: '算法',
    link: '/algorithm/',
  },
  {
    text: '开发工具',
    items: [
      {
        text: 'Docker',
        link: '/tools/docker/',
      },
      {
        text: 'Git',
        link: '/tools/git/',
      },
    ],
  },
]

// const navbarConfig: DefaultTheme.NavItem[] = [
//   {
//     text: '博客',
//     link: '/posts',
//   },
//   {
//     text: '笔记',
//     link: '/notes',
//   },
//   {
//     text: '标签',
//     link: '/tags',
//   },
//   {
//     text: '链接',
//     link: '/links',
//   },
// ]

export default navbarConfig
