import * as fs from "../docs/.vuepress/utils/fs-extra";
import { describe, it, expect } from "vitest";

describe("isDirectory", () => {
  it("is not directory", () => {
    const path = "__test__/fs.test.ts";
    const result = fs.isDirectory(path);
    expect(result).toBe(false);
  });

  it("is directory", () => {
    const path = "__test__/directory";
    const result = fs.isDirectory(path);
    expect(result).toBe(true);
  });
});

describe("hasSubDirectory", () => {
  it("dont have sub dir", () => {
    const path = "__test__/directory/no-sub-directory";
    const result = fs.hasSubDirectory(path);
    expect(result).toBe(false);
  });

  it("has sub dir", () => {
    const path = "__test__/directory/has-sub-directory";
    const result = fs.hasSubDirectory(path);
    expect(result).toBe(true);
  });

  it("empty dir", () => {
    const path = "__test__/directory/empty-directory";
    const result = fs.hasSubDirectory(path);
    expect(result).toBe(false);
  });

  it("file to be false", () => {
    const path = "__test__/directory/no-sub-directory/file1";
    const result = fs.hasSubDirectory(path);
    expect(result).toEqual(false);
  });
});

describe("getSubDirectory", () => {
  it("get", () => {
    const path = "__test__/directory";
    const dirs = fs.getSubDirectories(path);
    console.log(dirs);
    // expect(dirs).toEqual([
    //   "empty-directory",
    //   "has-sub-directory",
    //   "no-sub-directory",
    // ]);
  });

  it("get exclude", () => {
    const path = "__test__/directory";
    const dirs = fs.getSubDirectories(path, ["empty-directory"]);
    expect(dirs).toEqual(["has-sub-directory", "no-sub-directory"]);
  });

  it("contain file", () => {
    const path = "__test__/directory/has-sub-directory";
    const dirs = fs.getSubDirectories(path);
    expect(dirs).toEqual(["sub-directory"]);
  });
});

describe("getAllSubDirectory", () => {
  it("get", () => {
    const path = "__test__/directory";
    const dirs = fs.getAllSubDirectories(path);
    console.log(dirs);
    expect(dirs).toEqual([
      "empty-directory",
      "has-sub-directory",
      "no-sub-directory",
      "has-sub-directory/sub-directory",
      "has-sub-directory/sub-directory/dir",
    ]);
  });

  it("exclude", () => {
    const path = "__test__/directory";
    const exclude = ["no-sub-directory"];
    const dirs = fs.getAllSubDirectories(path, exclude);

    expect(dirs).toEqual([
      "empty-directory",
      "has-sub-directory",
      "has-sub-directory/sub-directory",
    ]);
  });
});

describe("getFiles", () => {
  it("get", () => {
    const path = "__test__/directory/has-sub-directory/";
    const files = fs.getFiles(path);
    expect(files).toEqual(["file2", "sub-directory"]);
  });
});
