import { defineConfig } from 'vitepress'
import { SearchPlugin } from "@ver5/vitepress-plugin-search";

import markIt from 'markdown-it-mark'
import { REPO_URL } from './const'
import nav from './nav'
import { books, sidebar, SRC_DOC } from './sidebar'
import { linkPlugin } from './plugins/linkPlugin'
import { rustCodePlugin } from './plugins/rustcode/runCodePlugin'
import { imageSizePlugin } from './plugins/imagePlugin'
import { alignPlugin } from './plugins/alignPlugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "🦀 Dive into Rust",
  description: "Documents my learning journey of Rust.",
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { property: 'og:site_name', content: 'Rust_Notes' }],
  ],
  srcDir: SRC_DOC,
  vite: {
    plugins: [SearchPlugin({
      previewLength: 42,
      buttonLabel: "搜索",
      placeholder: "搜索文档",
      allow: [],
      ignore: [],
      tokenize: "forward"
    })]
  },

  lastUpdated: true,
  cleanUrls: false,
  markdown: {
    lineNumbers: true,
    config(md) {
      alignPlugin(md)
      markIt(md)
      linkPlugin(md, { books })
      rustCodePlugin(md)
      imageSizePlugin(md)
    }
  },
  themeConfig: {
    // @ts-ignore
    outline: {
      level: [1, 6],
      label: '目录'
    },
    logo: '/logo.svg',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2023-present ChandlerVer5',
    },
    editLink: {
      pattern: REPO_URL + 'edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // socialLinks: [
    //   { icon: 'github', link: REPO_URL }
    // ]
  }
})
