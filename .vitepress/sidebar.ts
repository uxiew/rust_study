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
    const section = /^第 (\d+) 章[^/]+\/(\d+)\.(\d+)/.exec(path);
    if (section) return Number(section[1]) * 1000 + Number(section[3]);
    return path === "前言" ? 0 : Number.MAX_SAFE_INTEGER;
  },
  handle(item) {
    // 自定义处理显示名称
    if (item.text.endsWith("I_O")) item.text = item.text.replace("I_O", "I/O");
    return item;
  },
});

export const sidebar = {
  "/notes/": notes,
  "/codes/": codes,
  "/": books,
};
