import { sidebarConfig, navbarConfig } from "../scripts/setup"
import { DefaultThemeOptions } from "@vuepress/theme-default"

const folders = [
  "computer",
  "system",
  "language",
  "tools",
  "framework",
  "algorithm",
]

const themeConfig: DefaultThemeOptions = {
  logoDark: "",
  // logo: '/logo.ico',
  repo: "https://github.com/with-rainbow/notes",
  // repoLabel: '项目'
  // 编辑页面配置
  docsRepo: "https://github.com/with-rainbow/notes",
  // 只编辑开发分支
  docsBranch: "dev",
  docsDir: "docs",
  editLinkPattern: ":repo/edit/:branch/:path",
  editLinkText: "编辑页面",
  lastUpdated: true,
  lastUpdatedText: "最后更新",
  contributors: true,
  contributorsText: "作者",
  backToHome: "返回主页",
  toggleDarkMode: "切换主题",
  toggleSidebar: "switch",
  notFound: ["页面走丢了", "没发现你要的页面", "没找到呢"],
  navbar: navbarConfig(folders),
  sidebar: sidebarConfig(folders),
  sidebarDepth: 1,
}

export default themeConfig
