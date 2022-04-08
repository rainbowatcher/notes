import { PluginConfig } from "vuepress";
import { mdEnhance } from "vuepress-plugin-md-enhance";
import { copyCode } from "vuepress-plugin-copy-code2";

let pluginConfig: PluginConfig[] = [
  ["@vuepress/back-to-top"],
  // ["@with-rainbow/vuepress-plugin-enhance"],
  ["@vuepress/plugin-search"],
  // ['@vuepress/active-header-links'],
  copyCode({}),
  mdEnhance({
    enableAll: false,
    // @ts-ignore
    container: true,
    codegroup: true,
    mermaid: true,
    footnote: true,
    tex: {
      strict: "ignore",
    },
  }),
];

export default pluginConfig;
