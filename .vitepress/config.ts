import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "🦀 Dive into Rust",
  description: "documents my learning journey of Rust.",
  srcDir: "docs",
  vite: {
    plugins: []
  },
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChandlerVer5/dive_into_rust' }
    ]
  }
})
