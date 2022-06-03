import * as fs from "./../docs/.vuepress/utils/fs-extra";
import { it, describe } from "vitest";
import { autoSidebarConfig } from "../docs/.vuepress/utils/autoSidebarConfig";
import { log } from "console";

describe("sidebar", () => {
  it("input none", () => {
    const t = autoSidebarConfig();
    log(JSON.stringify(t,null,2));
  });

  it("input include", () => {
    const include = [
      "computer",
      "system",
      "language",
      "tools",
      "framework",
      "algorithm",
    ];
    const t = autoSidebarConfig({ include });
  });

  it("input base and include", () => {
    const include = [
      "computer",
      "system",
      "language",
      "tools",
      "framework",
      "algorithm",
    ];
    const t = autoSidebarConfig({ include });
  });

  it("input all", () => {
    const include = [
      "computer",
      "system",
      "language",
      "tools",
      "framework",
      "algorithm",
    ];
    const t = autoSidebarConfig({ include });
  });
});
