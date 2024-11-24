import { resolve } from "node:path";
import { defineConfig } from "vitepress";
import { SearchPlugin } from "@ver5/vitepress-plugin-search";

import markIt from "markdown-it-mark";
import { REPO_URL, SRC_DOC, OUT_DIR, BASE_PATH, link_plugin_rules } from "./const";
import nav from "./nav";
import { books, sidebar } from "./sidebar";

import { InlineLinkPreviewElementTransform } from "@ver5/vitepress-plugin-link-preview/markdown";

import { type rustPlaygroundOptions, rustPlaygroundPlugin } from "@ver5/vitepress-plugin-rust-playground/markdown";
import { type ImageOptions, imagePlugin } from "@ver5/markdown-it-image";
import { type InternalLinkOptions, internalLinkPlugin } from "@ver5/markdown-it-internal-link";
import { alignPlugin } from "@ver5/markdown-it-align";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "🦀 Dive into Rust",
  description: "Documents my learning journey of Rust.",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }],
    ["meta", { property: "og:site_name", content: "Rust_Notes" }],
  ],
  srcDir: SRC_DOC,
  outDir: OUT_DIR,
  base: BASE_PATH,
  vite: {
    resolve: {
      alias: {
        "@vp": resolve(__dirname),
      },
    },
    plugins: [
      SearchPlugin({
        previewLength: 42,
        buttonLabel: "搜索",
        placeholder: "搜索文档",
        allow: [],
        ignore: [],
        tokenize: "forward",
        separator: " ", // fix search result link problems
      }),
    ],
  },
  lastUpdated: true,
  cleanUrls: false,
  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
    lineNumbers: true,
    config(md) {
      md
        .use<rustPlaygroundOptions>(rustPlaygroundPlugin)
        .use(markIt)
        .use(alignPlugin)
        .use<InternalLinkOptions>(internalLinkPlugin, {
          sidebar: books,
          base: BASE_PATH,
          rules: link_plugin_rules
        })
        .use<ImageOptions>(imagePlugin)
        .use(InlineLinkPreviewElementTransform);
    },
  },
  themeConfig: {
    // @ts-ignore
    outline: {
      level: [1, 6],
      label: "目录",
    },
    logo: "/logo.svg",
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    footer: {
      message: "Released under the MIT License",
      copyright: "Copyright © 2023-present ChandlerVer5",
    },
    editLink: {
      pattern: REPO_URL + "/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },
    // socialLinks: [
    //   { icon: 'github', link: REPO_URL }
    // ]
  },
});
