export default {
  path: [
    {
      text: "笔记",
      link: "/notes/",
    },
    {
      text: "Group",
      children: ["/group/foo.md", "/group/bar.md"],
    },
    // 可以在导航栏定义连接
    // '/index.md',
  ],
};
