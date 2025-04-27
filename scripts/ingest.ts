import { getSitemap } from "./lib/sitemap.ts";
import { processPage } from "./lib/pages.ts";
import { storeEmbeddings, cleanOldDocuments } from "./lib/embeddings.ts";
import "dotenv/config";

async function main() {
  const siteUrl = process.env.SITE_URL || "https://www.lgotarra.com";
  const sitemapUrls = await getSitemap(siteUrl);

  for (const pageUrl of sitemapUrls) {
    const pageTexts = await processPage(pageUrl);
    await storeEmbeddings(pageTexts, { url: pageUrl });
  }

  await cleanOldDocuments();
}

main().catch(console.error);
