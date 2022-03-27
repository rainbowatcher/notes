import { SidebarConfigObject } from "@vuepress/theme-default";

const sidebarConfig: SidebarConfigObject = {
  "/start": [
    {
      "text": "概述"
    }
  ],
  "/language": [
    {
      "text": "语言",
      "children": [
        {
          "text": "Html",
          "link": "/language/html"
        },
        {
          "text": "Typescript",
          "link": "/language/typescript"
        }
      ]
    }
  ],
  "/computer": [
    {
      "text": "计算机",
      "children": [
        "/computer/numbers.md"
      ]
    }
  ],
  "/system": [
    {
      "text": "系统",
      "children": [
        {
          "text": "Linux",
          "link": "/system/linux"
        }
      ]
    }
  ]
};

export default sidebarConfig;
