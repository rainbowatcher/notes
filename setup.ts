import fs from "fs";
import path from "path";
import markdownIt from "markdown-it";

import {
  SidebarConfigObject,
  SidebarConfigArray,
  SidebarGroupCollapsible,
  SidebarItem,
  SidebarGroup,
} from "@vuepress/theme-default";

const include = ["language", "computer", "system", "tools", "framework"];

const log = (...msg: any) => {
  console.log(...msg);
};

const SIDE_CONFIG_PATH = path.resolve(__dirname, "docs/.vuepress/sidebar.ts");
const DOCS_PATH = path.resolve(__dirname, "docs");
const DEFAULT_IGNORED_DIRS = [".vuepress"];
const HOME_PAGE_NAME = ["index.md", "README.md"];
const DEFAULT_IGNORED_FILES = [".DS_Store", ...HOME_PAGE_NAME];

const main = () => {
  let config_object: SidebarConfigObject = initSidebarConfigObject();
  let keys = Object.keys(config_object);
  keys.forEach((val) => {
    Object.assign(config_object[val], getConfigArray(val));
  });
  const content = `export default ${JSON.stringify(config_object, null, 2)};`;
  log(content);
  fs.writeFileSync(SIDE_CONFIG_PATH, content);
  log("sidebar file generated success!");
};

/**
 * 根据给定配置初始化配置对象
 */
function initSidebarConfigObject(): SidebarConfigObject {
  let obj: { [k: string]: SidebarConfigArray } = {};
  Object.entries(include).map((entry: [string, string]) => {
    let key: string,
      value: string = "";

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
      const relativePath = path.join(parentDirName, file.name);
      const absolutePath = path.join(DOCS_PATH, parentDirName, file.name);
      if (file.isDirectory()) {
        const contains = containsHomePage(absolutePath);
        const homePage = getHomePageName(absolutePath);
        return {
          text: homePage
            ? getMDFileTitle(path.resolve(absolutePath, homePage))
            : camelize(file.name),
          link: contains ? path.resolve(parentDirName, file.name) : undefined,
          collapsible: contains ? true : false,
          children: getChildren(relativePath),
        };
      } else {
        return relativePath;
      }
    })
    .sort((a, b) => {
      if (a.link) {
        return 1;
      } else {
        return (a as string).localeCompare(b as string);
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
    .replace(/[\s-_]+/g, "");
}

function containsHomePage(dir: string): boolean {
  let contains: boolean = false;
  fs.readdirSync(dir).forEach((file) => {
    if (
      -1 !==
      HOME_PAGE_NAME.findIndex(
        (name) => name.toUpperCase() === file.toUpperCase()
      )
    ) {
      contains = true;
    }
  });
  return contains;
}

function getMDFileTitle(file: string): string {
  let md_file = fs.readFileSync(file);
  let m = markdownIt().parse(md_file.toString(), {});
  let h1_index = m.findIndex((val) => val.tag === "h1");
  if (h1_index !== -1) {
    let h1 = m.at(h1_index + 1);
    return h1!.content;
  }
  return "";
}

function getHomePageName(dir: string) {
  let _fileName: string = "";
  fs.readdirSync(dir).forEach((fileName) => {
    if (
      -1 !==
      HOME_PAGE_NAME.findIndex(
        (val) => val.toUpperCase() === fileName.toUpperCase()
      )
    ) {
      _fileName = fileName;
    }
  });
  return _fileName;
}

main();
