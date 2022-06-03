import { defineUserConfig } from "vuepress"
import plugins from "./plugins"
import theme from "./theme"

export default defineUserConfig({
  // base: "/docs/",
  lang: "zh-CN",
  title: "Rainbow Notes",
  description: "看彩虹的人的个人笔记",
  head: [
    ["meta", { name: "robots", content: "noindex" }],
    ["meta", { name: "robots", content: "nofollow" }],
    ["link", { rel: "icon", href: "logo.ico" }],
  ],
  // theme: defaultTheme({...theme}),
  theme: theme,
  markdown: {
    code: {
      lineNumbers: true,
    },
  },
  plugins: plugins,
})
