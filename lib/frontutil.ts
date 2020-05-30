export function processSlug(slug: string): { lang: string; slug: string } {
  let parts = slug.split(".");
  let lang = parts[1];
  slug = parts[0];
  return { lang: lang, slug: slug };
}
