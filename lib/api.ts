import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
const postDir = join(process.cwd(), "_posts");

export interface PostMetadata {
  date?: string | Date;
  slug?: string;
  content?: string | {};
  tags?: Array<string>;
  title?: string;
  description?: string;
}

export function getPostSlugs() {
  return fs.readdirSync(postDir);
}

export function getPostBySlug(
  slug: string | { lang: string; slug: string },
  fields = []
) {
  slug = typeof slug === "string" ? slug : `${slug.slug}.${slug.lang}.md`;
  const fullPath = join(postDir, slug);
  const realSlug = slug.replace(/\.md$/, "");
  const fileContents = fs.readFileSync(fullPath, { encoding: "utf-8" });
  const { data, content } = matter(fileContents);
  const items: PostMetadata = {};

  fields.forEach((field) => {
    switch (field) {
      case "slug":
        items[field] = realSlug;
        break;
      case "content":
        items[field] = content;
        break;
      default:
        if (data[field]) {
          items[field] = data[field];
        }
    }
  });
  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
