// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";
import "./style.scss";

import "@nolebase/vitepress-plugin-enhanced-mark/client/style.css";

import { NolebaseInlineLinkPreviewPlugin } from "@ver5/vitepress-plugin-link-preview/client";

import { RustPlaygroundPlugin } from '@ver5/vitepress-plugin-rust-playground'

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.use(NolebaseInlineLinkPreviewPlugin, {
      previewHostNamesAllowed: ["doc.rust-lang.org", "localhost:5173"],
    });
    app.use(RustPlaygroundPlugin)
  },
  setup() {
    // 
  },
};
