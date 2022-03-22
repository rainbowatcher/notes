export default [
  {
    text: "操作系统",
    children: [{ text: "Linux", link: "/system/" }],
  },
  {
    text: "语言",
    link: "/language/",
    children: [
      {
        text: "前端",
        children: [
          { text: "HTML", link: "/language/html" },
          { text: "CSS", link: "/language/css" },
          { text: "JavaScript", link: "/language/javascript" },
          { text: "TypeScript", link: "/language/typescript" },
        ],
      },
      {
        text: "后端",
        children: [
          { text: "Java", link: "/language/java" },
          { text: "Rust", link: "/language/rust" },
        ],
      },
    ],
  },
  {
    text: "计算机",
    link: "/computer/",
  },
  // 可以在导航栏定义连接
  // { text: "Vue", link: "http://vuejs.org", collapsible: false },
];
