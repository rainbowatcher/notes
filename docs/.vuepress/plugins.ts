import { PluginConfig } from "vuepress";
import path from 'path'

let pluginConfig: PluginConfig[] = [
  ["@vuepress/back-to-top"],
  [ path.resolve(__dirname, './plugins/vuepress-plugin-enhance') ],
  // [ '@vuepress/last-updated']
]

export default pluginConfig;
