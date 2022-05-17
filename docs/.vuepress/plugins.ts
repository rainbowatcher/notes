import { PluginConfig } from "vuepress"
import mdEnhance from "vuepress-plugin-md-enhance"
// import copyCode from "vuepress-plugin-copy-code2"
// import { backToTopPlugin  } from "@vuepress/plugin-back-to-top"

let pluginConfig: PluginConfig = [
  // backToTopPlugin(),
  // searchPlugin(),
  // copyCode({}),
  // https://vuepress-theme-hope.gitee.io/v2/md-enhance/zh/guide/
  mdEnhance({
    enableAll: false,
    container: true,
    codegroup: true,
    mermaid: true,
    mdImport: () => true,
    tasklist: true,
    mark: true,
    linkCheck: "build",
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
