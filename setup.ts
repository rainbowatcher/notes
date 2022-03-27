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

// const include: SideRoute = {
//   language: "语言",
//   computer: "计算机",
//   system: "系统",
// };

const include = ["language", "computer", "system"];

const log = (...msg: any) => {
  console.log(...msg);
};

const SIDE_CONFIG_PATH = path.resolve(__dirname, "docs/.vuepress/sidebar.ts");
const DOCS_PATH = path.resolve(__dirname, "docs");
const DEFAULT_IGNORED_DIRS = [".vuepress"];
const DEFAULT_IGNORED_FILES = [".DS_Store", "index.md", "README.md"];


let config_object: SidebarConfigObject = initSidebarConfigObject();
let keys = Object.keys(config_object);
keys.forEach((val) => {
  Object.assign(config_object[val], getConfigArray(val));
});
const content = `export default ${JSON.stringify(config_object, null, 2)};
`;
log(content);
fs.writeFileSync(SIDE_CONFIG_PATH, content);
log("sidebar file generated success!");

/**
 * 根据给定配置初始化配置对象
 */
function initSidebarConfigObject(): SidebarConfigObject {
  let obj: { [k: string]: SidebarConfigArray } = {};
  Object.entries(include).map((entry: [string, string]) => {
    let key: string, value: string = "";

    if (include instanceof Array) {
      key = entry[1];
    } else {
      [key, value] = entry;
    }

    if (!key.startsWith("/")) {
      key = "/".concat(key);
    }

    obj[key] = [value];
  });
  return obj;
}

function getConfigArray(dir: string): SidebarConfigArray {
  let arr: SidebarConfigArray = [];
  const parentDirName = dir;
  let absFilePath = path.join(DOCS_PATH, parentDirName);
  absFilePath = tryGetMDFileName(absFilePath);

  const stat = fs.statSync(absFilePath);
  if (stat.isDirectory()) {
    arr = getChildren(parentDirName);
    // (arr[0] as SidebarGroupCollapsible).children = getChildren(parentDirName);
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
      (file) =>
        !DEFAULT_IGNORED_FILES.find(
          (val) => val.toLowerCase() === file.name.toLowerCase()
        )
    )
    .map((file) => {
      if (file.isDirectory()) {
        return {
          text: camelize(file.name),
          link: path.resolve(parentDirName, file.name),
          collapsible: true,
          children: getChildren(path.join(parentDirName, file.name)),
        };
      } else {
        return path.join(parentDirName, file.name);
      }
      // TODO 排序问题
    })
    .sort((a, b) => 1);
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
