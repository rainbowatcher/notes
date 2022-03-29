import { defineUserConfig } from "vuepress";
import plugins from "./plugins";
import theme from "./theme";

export default defineUserConfig({
  // 站点配置
  base: "/notes/",
  lang: "zh-CN",
  title: "CS 笔记",
  description: "个人笔记项目",
  head: [
    ["meta", { name: "robots", content: "noindex" }],
    ["meta", { name: "robots", content: "nofollow" }],
    ["link", { rel: "icon", href: "logo.ico" }],
  ],
  themeConfig: theme,
  markdown: {
    code: {
      // lineNumbers: false,
    },
  },
  plugins: plugins,
});
