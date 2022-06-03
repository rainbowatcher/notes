import { path } from "@vuepress/utils";
import * as fs from "./fs-extra";
import { BarOptions } from "./types";
import { DEFAULT_IGNORED_DIRS, ROOT_DIR, VALID_HOME_PAGE_NAME } from "./const";
import { SidebarConfigArray } from "vuepress";

let excludeDirs: string[];
let sidebarConfig: Record<string, SidebarConfigArray> = {};

export const autoSidebarConfig = (options?: BarOptions) => {
  const docs_dir = path.resolve(ROOT_DIR, options?.base ?? "docs");
  excludeDirs = options?.exclude ?? DEFAULT_IGNORED_DIRS;
  const allFolders = fs.getAllSubDirectories(docs_dir, excludeDirs);
  const keys = allFolders.filter(
    (folder) => !fs.hasSubDirectory(path.resolve(docs_dir, folder))
  );
  keys.forEach((key) => {
    // const folderAbsPath = path.resolve(docs_dir, item);
    // const homePageName = getHomePageFileName(folderAbsPath);
    // const homePageFilePath = path.resolve(folderAbsPath, homePageName);
    // const title =
    //   homePageName.length > 0
    //     ? getMDFileTitle(homePageFilePath)
    //     : camelcase(path.basename(item));
    const keyFiles = path.resolve(docs_dir, key);
    const children = fs
      .getFiles(keyFiles, undefined)
      .map((t) => path.join(`/${key}`, t))
      .sort((a, b) => {
        const first = path.basename(a);
        const second = path.basename(b);
        const num = first.localeCompare(second);
        if (VALID_HOME_PAGE_NAME.includes(second)) {
          return 1;
        } else if (VALID_HOME_PAGE_NAME.includes(first)) {
          return -1;
        }
        return num;
      });
    // set text to empty, dont need to display
    sidebarConfig[`/${key}`] = [{ text: "", children }];
  });

  // console.log(JSON.stringify(sidebarConfig, null, 4));
  return sidebarConfig;
};

/**
 * 如果目录下存在主页文件，则返回主页文件名
 * eg: README.md
 * @param absDirPath 目录绝对路径
 * @returns 主页文件名
 */
const getHomePageFileName = (absDirPath: string): string => {
  let fileName = "";
  fs.readdirSync(absDirPath, { withFileTypes: true }).forEach((file) => {
    const upperFileName = file.name.toUpperCase();
    if (
      -1 !==
      VALID_HOME_PAGE_NAME.findIndex(
        (val) => val.toUpperCase() === upperFileName
      )
    ) {
      fileName = file.name;
    }
  });
  return fileName;
};
