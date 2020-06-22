import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(html, {
      sanitize: true,
    })
    .use(highlight)
    .process(markdown);

  return result.toString();
}
