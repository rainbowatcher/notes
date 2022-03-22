import { PluginConfig } from "vuepress";
import path from "path";
import { mdEnhance } from "vuepress-plugin-md-enhance";


let pluginConfig: PluginConfig[] = [
  ["@vuepress/back-to-top"],
  // ["@with-rainbow/vuepress-plugin-enhance"],
  ['@vuepress/plugin-search'],
  mdEnhance({
    // @ts-ignore
    mermaid: {
      'theme': 'base'
    },
    tex: {
      strict: false,
    },
    
  })
];

export default pluginConfig;
