import { defineConfig } from 'vitepress'
import { REPO_URL } from './const'
import nav from './nav'
import { books, sidebar, SRC_DOC } from './sidebar'
import { linkPlugin } from './plugins/linkPlugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "🦀 Dive into Rust",
  description: "Documents my learning journey of Rust.",
  srcDir: SRC_DOC,

  lastUpdated: true,
  cleanUrls: false,
  markdown: {
    lineNumbers: true,
    config(md) {
      linkPlugin(md, { books })
    }
  },
  themeConfig: {
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
