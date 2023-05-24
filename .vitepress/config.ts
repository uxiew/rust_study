import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dive into Rust",
  description: "documents my learning journey of Rust.",
  srcDir: "docs",
  vite: {
    plugins: []
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ChandlerVer5/dive_into_rust.git' }
    ]
  }
})
