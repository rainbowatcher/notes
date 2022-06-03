export default [
  {
    text: "计算机",
    children: [
      {
        text: "计算机基础",
        link: "/computer/basic",
      },
      {
        text: "软件工程",
        link: "/computer/engineering",
      },
    ],
  },
  {
    text: "系统",
    children: [
      {
        text: "Linux",
        link: "/system/linux",
      },
    ],
  },
  {
    text: "语言",
    children: [
      {
        text: "标记语言",
        children: [
          {
            text: "HTML",
            link: "/language/markup-lang/html",
          },
          {
            text: "CSS",
            link: "/language/markup-lang/css",
          },
          {
            text: "Markdown",
            link: "/language/markup-lang/markdown",
          },
          // {
          //   text: "Tex",
          //   link: "/language/markup-lang/tex"
          // },
        ],
      },
      {
        text: "静态类型语言",
        children: [
          {
            text: "C",
            link: "/language/static/c-lang",
          },
          {
            text: "C++",
            link: "/language/static/cpp",
          },
          {
            text: "Java",
            link: "/language/static/java",
          },
          {
            text: "Kotlin",
            link: "/language/static/kotlin",
          },
          {
            text: "Rust",
            link: "/language/static/rust",
          },
        ],
      },
      {
        text: "动态类型语言",
        children: [
          {
            text: "Javascript",
            link: "/language/dynamic/javascript",
          },
          {
            text: "Typescript",
            link: "/language/dynamic/typescript",
          },
          {
            text: "Python",
            link: "/language/dynamic/python",
          },
        ],
      },
    ],
  },
  {
    text: "开发框架",
    children: [
      {
        text: "前端",
        children: [
          {
            text: "Vue",
            link: "/framework/front-end/vue",
          },
        ],
      },
      {
        text: "后端",
        children: [],
      },
    ],
  },
  {
    text: "算法",
    children: [
      {
        text: "数据结构",
        link: "/algorithm/data-structure",
      },
    ],
  },
  {
    text: "开发工具",
    children: [
      {
        text: "Docker",
        link: "/tools/docker",
      },
      {
        text: "Git",
        link: "/tools/git",
      },
    ],
  },
];
