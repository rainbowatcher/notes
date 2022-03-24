import { SidebarConfigObject } from "@vuepress/theme-default";

const sidebarConfig: SidebarConfigObject = {
//   "/start": ["structure"],
//   "/language/": ["structure"],
//   "/system": ["structure"],
  "/start": [{ text: "概述" }],
  "/language/": [
    {
      text: "计算机语言",
      link: "/language/",
      children: [
        {
          text: "HTML",
          link: "/language/html/",
        },
      ],
    },
  ],
  "/system": [{ text: "系统", link: "/system" }],
};

export default sidebarConfig;
