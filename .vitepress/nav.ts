export default [
  { text: 'Home', link: '/', activeMatch: '/' },
  {
    text: '初学备忘录📕',
    link: '/notes/',
    activeMatch: '/notes/'
  },
  {
    text: 'Rust 官方',
    items: [
      { text: 'Rust 官网', link: 'https://www.rust-lang.org/' },
      { text: 'Rust 标准库', link: 'https://doc.rust-lang.org/std/' },
      { text: 'Rust Playground', link: 'https://play.rust-lang.org/' },
      { text: 'Rust 参考', link: 'https://doc.rust-lang.org/reference/' },
      { text: 'Rust 版本指南', link: 'https://doc.rust-lang.org/nightly/edition-guide/' },
      { text: 'Rust RFCs', link: 'https://rust-lang.github.io/rfcs/' },
      { text: 'Rust 社区', link: 'https://users.rust-lang.org/' },
      { text: 'cargo 文档', link: 'https://doc.rust-lang.org/cargo/' },
      { text: 'rustc 文档', link: 'https://doc.rust-lang.org/rustc/' },
      { text: 'rustdoc 文档', link: 'https://doc.rust-lang.org/rustdoc/' },
      { text: 'clippy 文档', link: 'https://doc.rust-lang.org/clippy/' },
      { text: 'Rust 编译错误索引', link: 'https://doc.rust-lang.org/error-index.html' },
      { text: 'This Week in Rust', link: 'https://this-week-in-rust.org' },
      { text: 'Asynchronous Book', link: 'https://rust-lang.github.io/async-book/' },
      { text: 'Rust 编译器开发', link: 'https://rustcrustc.github.io/rustc-dev-guide-zh/' },
      { text: 'Rust Forge', link: 'https://forge.rust-lang.org/' },
      { text: 'Rust bindgen', link: 'https://rust-lang.github.io/rust-bindgen/' },
      { text: 'Rust 书籍📚', link: 'https://www.rust-lang.org/learn' },
    ]
  },
  {
    text: 'Rust 开源书籍',
    items: [
      { text: 'RustPrimer 初级', link: 'https://rustcc.gitbooks.io/rustprimer' },
      { text: 'Rust 宏小册', link: 'https://danielkeep.github.io/tlborm/book/' },
      { text: 'Rust By Practice', link: 'https://zh.practice.rs/why-exercise.html' },
      { text: 'Rusty Book', link: 'https://rusty.course.rs/' },
      { text: 'Rust 语言圣经', link: 'https://course.rs/' },
      { text: 'Rust Cookbook', link: 'https://rust-lang-nursery.github.io/rust-cookbook/' },
      { text: 'Comprehensive Rust', link: 'https://google.github.io/comprehensive-rust/' },
    ]
  }
]
