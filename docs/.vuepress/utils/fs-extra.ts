export * from "fs";
import { fs, path } from "@vuepress/utils";

export const isDirectory = (dir: string): boolean => {
  if (fs.pathExistsSync(dir)) {
    return fs.statSync(dir).isDirectory();
  }
  return false;
};

export const hasSubDirectory = (dir: string): boolean => {
  if (fs.pathExistsSync(dir) && isDirectory(dir)) {
    return fs.readdirSync(dir).some((file) => {
      return isDirectory(dir + "/" + file);
    });
  }
  return false;
};

/**
 * 获取目录下的所有文件夹
 * @param dir 目录
 * @param exclude 排除的目录
 * @returns 子目录的绝对路径
 */
export const getSubDirectories = (
  dir: string,
  exclude?: string[],
  parent?: string,
  relative?: boolean
): string[] => {
  if (isDirectory(dir)) {
    let result = fs.readdirSync(dir);

    if (exclude) {
      result = result.filter((item) => !exclude.includes(item));
    }

    result = result.filter((item) => isDirectory(path.resolve(dir, item)));

    if (parent && (relative ?? true)) {
      result = result.map((item) => path.join(parent, item));
    }

    return result;
  }
};

export const isFile = (dir: string): boolean => {
  if (fs.existsSync(dir)) {
    return fs.statSync(dir).isFile();
  }
  return false;
};

export const isSymbolicLink = (dir: string): boolean => {
  if (fs.existsSync(dir)) {
    return fs.statSync(dir).isSymbolicLink();
  }
  return false;
};

export const getAllSubDirectories = (
  dir: string,
  exclude?: string[],
  parent?: string
): string[] => {
  if (isDirectory(dir)) {
    let result = getSubDirectories(dir, exclude, parent);
    result.map((item) => {
      const basename = path.basename(item);
      const ps = path.resolve(dir, basename);
      if (isDirectory(ps)) {
        const subdir = getAllSubDirectories(ps, exclude, item);
        result = result.concat(subdir);
      }
    });
    return result;
  }
};

export const getFiles = (dir: string, exclude?: string[]) => {
  return fs.readdirSync(dir).filter((item) => !exclude?.includes(item));
};
