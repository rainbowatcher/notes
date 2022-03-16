// var mk = require("./math");
import { App } from "@vuepress/core";
import { KatexOptions } from "katex";
import MarkdownIt from "markdown-it";
import math_plugin from "./lib";

const defaultLatexOptions = {
  output: "htmlAndMathml",
  strict: false,
};

interface EnhanceOptions {
  latexOptions: KatexOptions;
}

const enhancePlugin = (options: EnhanceOptions, app: App) => {
  let latexOptions = Object.assign(defaultLatexOptions, options.latexOptions);
  return {
    name: "vuepress-plugin-enhance",
    extendsMarkdown: (md: MarkdownIt) => {
      md.use(math_plugin, latexOptions);
    },
  };
};

export default enhancePlugin;
