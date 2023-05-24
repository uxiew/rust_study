import { getSideBar } from 'vitepress-plugin-autobar'

export default getSideBar("./docs", {
  ignoreMDFiles: ['index'],
  ignoreDirectory: ['node_modules'],
})

// [
//   {
//     text: '第1章 与君初相见',
//     items: [
//       { text: '1.1 版本和发布策略', link: '/1.1 版本和发布策略' },
//       { text: '1.2 安装开发环境', link: '/1.2 安装开发环境' },
//       { text: '1.3 Hello World', link: '/1.3 Hello World' },
//       { text: '1.4 Prelude', link: '/1.4 Prelude.md' },
//       { text: '1.5 Format格式详细说明', link: '/1.5 Format格式详细说明.md' },
//     ]
//   },
