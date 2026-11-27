import type MarkdownIt from "markdown-it";
import { imagePlugin } from "@ver5/markdown-it-image";

export function imageCaptionPlugin(md: MarkdownIt) {
  md.use(imagePlugin, { caption: false });
  md.core.ruler.after("inline", "image_caption", (state) => {
    const tokens = state.tokens;
    for (let i = 1; i < tokens.length - 1; i++) {
      const inline = tokens[i];
      if (
        tokens[i - 1].type !== "paragraph_open" ||
        inline.type !== "inline" ||
        tokens[i + 1].type !== "paragraph_close" ||
        inline.children?.length !== 1
      ) continue;

      const image = inline.children[0];
      const title = image.type === "image" && image.attrGet("title");
      if (!title) continue;
      const size = /\s*=(\s*\d+(?:\s*[*xX]\s*\d+)?\s*)$/.exec(title);
      const caption = (size ? title.slice(0, size.index) : title).trim();
      if (!caption) continue;

      const open = tokens[i - 1];
      const close = tokens[i + 1];
      open.tag = close.tag = "figure";
      open.hidden = close.hidden = false;
      image.attrSet("title", size ? `=${size[1].trim()}` : "");

      const label = new state.Token("html_inline", "", 0);
      label.content = `<figcaption><em>${md.utils.escapeHtml(caption)}</em></figcaption>`;
      inline.children.push(label);
    }
  });
}
