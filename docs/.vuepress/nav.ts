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
    ],
  },
]