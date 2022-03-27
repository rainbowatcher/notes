import fs from "fs";
import path from "path";

import {
  SidebarConfigObject,
  SidebarConfigArray,
  SidebarGroupCollapsible,
  SidebarItem,
  SidebarGroup,
} from "@vuepress/theme-default";

interface SideRoute {
  [k: string]: string;
}

const include: SideRoute = {
  start: "概述",
  language: "语言",
  computer: "计算机",
  system: "系统",
};

const log = (...msg: any) => {
  console.log(...msg);
};

const SIDE_CONFIG_PATH = path.resolve(__dirname, "docs/.vuepress/sidebar.ts");
const DOCS_PATH = path.resolve(__dirname, "docs");
const DEFAULT_IGNORED_DIRS = [".vuepress"];
const DEFAULT_IGNORED_FILES = [".DS_Store"];

// log(initSidebarConfigObject());

let config_object: SidebarConfigObject = initSidebarConfigObject();
console.debug("Init: " + JSON.stringify(config_object, null, 2));
let keys = Object.keys(config_object);
keys.forEach((val) => {
  getConfigArray(val, config_object[val]);
});
console.debug("Result: " + JSON.stringify(config_object, null, 4));
const content = `import { SidebarConfigObject } from "@vuepress/theme-default";

const sidebarConfig: SidebarConfigObject = ${JSON.stringify(config_object, null, 2)};

export default sidebarConfig;
`;
fs.writeFileSync(SIDE_CONFIG_PATH, content);
log("sidebar file generated success!")

function initSidebarConfigObject(): SidebarConfigObject {
  let obj: { [k: string]: SidebarConfigArray } = {};
  Object.entries(include).map((entry: [string, string]) => {
    let [key, value] = entry;
    if (!key.startsWith("/")) {
      key = "/".concat(key);
    }

    obj[key] = [{ text: value }];
  });
  return obj;
}

function getConfigArray(
  dir: string,
  arr: SidebarConfigArray
): SidebarConfigArray {
  const parentDirName = dir;
  let absFilePath = path.join(DOCS_PATH, parentDirName);
  absFilePath = tryGetMDFileName(absFilePath);

  const stat = fs.statSync(absFilePath);
  if (stat.isDirectory()) {
    (arr[0] as SidebarGroupCollapsible).children = getChildren(parentDirName);
  }
  return arr;
}

function getChildren(
  parentDirName: string
): (string | SidebarItem | SidebarGroup)[] {
  let files = fs.readdirSync(path.join(DOCS_PATH, parentDirName), {
    withFileTypes: true,
  });
  return files
    .filter(
      (file) => !DEFAULT_IGNORED_FILES.concat("index.md").includes(file.name)
    )
    .map((file) => {
      if (file.isDirectory()) {
        return {
          text: camelize(file.name),
          link: path.resolve(parentDirName, file.name),
        };
      } else {
        return path.join(parentDirName, file.name);
      }
    });
}

function tryGetMDFileName(filePath: string): string {
  let condition1 = fs.existsSync(filePath);
  let condition2 = fs.existsSync(filePath + ".md");
  if (!condition1 && condition2) {
    return filePath + ".md";
  } else if (condition1) {
    return filePath;
  } else {
    throw `${filePath} is not exists.`;
  }
}

function camelize(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, _index) {
      return word.toUpperCase();
    })
    .replace(/\s+/g, "");
}
