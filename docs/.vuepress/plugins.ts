import { PluginConfig } from "vuepress"
import mdEnhance from "vuepress-plugin-md-enhance"
// import copyCode from "vuepress-plugin-copy-code2"
// import { backToTopPlugin  } from "@vuepress/plugin-back-to-top"
import searchPlugin from '@vuepress/plugin-search'

let pluginConfig: PluginConfig = [
  // backToTopPlugin(),
  searchPlugin(),
  // copyCode({}),
  // https://vuepress-theme-hope.gitee.io/v2/md-enhance/zh/guide/
  mdEnhance({
    enableAll: false,
    container: true,
    // codetabs: true,
    mermaid: true,
    tasklist: true,
    mark: true,
    linkCheck: "dev",
    footnote: true,
    demo: true,
    sub: true,
    sup: true,
    tex: {
      strict: "ignore",
    },
  }),
]

export default pluginConfig
