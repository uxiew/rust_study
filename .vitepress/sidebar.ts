import { join } from "node:path";
import { getSideBar } from "@ver5/vitepress-plugin-sidebar";
import { SRC_DOC } from "./const";

export const notes = getSideBar(join(SRC_DOC, "notes"), {
  hierarchy: false,
  ignoreFiles: ["index"],
});

export const codes = getSideBar(join(SRC_DOC, "codes"), {
  hierarchy: false,
  ignoreFiles: ["index"],
});

export const books = getSideBar(SRC_DOC, {
  ignoreDirs: ["notes", "codes", "images", "public"],
  indexLink: "index",
  ignoreFiles: ["index"],
  collapsed: true,
  sortBy(path) {
    const res = /(\d+).+?\/(\d+)\.(\d+)?/.exec(path);
    return res ? Number(res[2]) + Number(res[3]) : 0;
  },
  handle(item) {
    // 自定义处理显示名称
    if (item.text.endsWith("I_O")) item.text = item.text.replace("I_O", "I/O");
    return item;
  },
});

export const sidebar = {
  "/notes/": notes,
  "/code/": codes,
  "/": books,
};
