import { resolve } from "node:path";
import { defineConfig } from "vitepress";
import { SearchPlugin } from "@ver5/vitepress-plugin-search";

import markIt from "markdown-it-mark";
import { REPO_URL, SRC_DOC, OUT_DIR, BASE_PATH, link_plugin_rules } from "./const";
import nav from "./nav";
import { books, sidebar } from "./sidebar";

import { InlineLinkPreviewElementTransform } from "@ver5/vitepress-plugin-link-preview/markdown";

import { type rustPlaygroundOptions, rustPlaygroundPlugin } from "@ver5/vitepress-plugin-rust-playground/markdown";
import { imageCaptionPlugin } from "./plugins/imageCaption";
import { type InternalLinkOptions, internalLinkPlugin } from "@ver5/markdown-it-internal-link";
import { alignPlugin } from "@ver5/markdown-it-align";
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid(
  defineConfig({
    lang: "zh-CN",
    title: "深入 Rust",
    description: "从第一个 Rust 程序开始，循序渐进理解所有权、并发与工程实践。",
    head: [
      ["link", { rel: "icon", href: BASE_PATH + "/logo.svg" }],
      ["meta", { property: "og:site_name", content: "深入 Rust" }],
    ],
    srcDir: SRC_DOC,
    outDir: OUT_DIR,
    base: BASE_PATH + "/",
    vite: {
      optimizeDeps: {
        include: [
          'mermaid'
        ]
      },
      // 添加到 vite 配置中
      css: {
        preprocessorOptions: {
          scss: {
            api: 'modern-compiler'
          }
        }
      },
      ssr: {
        noExternal: [
          '@ver5/vitepress-plugin-link-preview',
          '@ver5/vitepress-plugin-rust-playground'
        ]
      },
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
    // optionally, you can pass MermaidConfig
    // mermaid: {
    //   // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
    // },
    // optionally set additional config for plugin itself with MermaidPluginConfig
    // mermaidPlugin: {
    //   class: "mermaid my-class", // set additional css classes for parent container
    // },
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
          .use<rustPlaygroundOptions>(rustPlaygroundPlugin, {
            channel: 'stable',
            edition: "2024"
          })
          .use(imageCaptionPlugin)
          .use(markIt)
          .use(alignPlugin)
          .use<InternalLinkOptions>(internalLinkPlugin, {
            sidebar: books,
            base: BASE_PATH,
            rules: link_plugin_rules
          })
          .use(InlineLinkPreviewElementTransform)
      },
    },
    themeConfig: {
      outline: {
        level: [2, 3],
        label: "本页目录",
      },
      logo: "/logo.svg",
      search: {
        provider: "local",
      },
      // https://vitepress.dev/reference/default-theme-config
      nav,
      sidebar,
      footer: {
        message: "以 MIT 许可证发布",
        copyright: "版权所有 © 2023 至今 ChandlerVer5",
      },
      editLink: {
        pattern: REPO_URL + "/edit/main/docs/:path",
        text: "在 GitHub 上编辑此页",
      },
      lastUpdated: { text: "最后更新" },
      docFooter: { prev: "上一节", next: "下一节" },
      returnToTopLabel: "返回顶部",
      sidebarMenuLabel: "章节目录",
      darkModeSwitchLabel: "切换主题",
      outlineMenuLabel: "本页目录",
      socialLinks: [{ icon: "github", link: REPO_URL }],
    },
  })
);
