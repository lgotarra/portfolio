import * as cheerio from "cheerio";

/**
 * Fetches all URLs listed in the site's main sitemap.
 */
export async function getSitemap(url: string): Promise<string[]> {
  const response = await fetch(`${url}/sitemap.xml`);
  const body = await response.text();
  const $ = cheerio.load(body, { xmlMode: true });

  const urls: string[] = [];

  const sitemapLocs = $("sitemap loc")
    .map((_, elem) => $(elem).text())
    .get();

  if (sitemapLocs.length > 0) {
    // If there are sub-sitemaps, fetch URLs from all of them
    for (const sitemapUrl of sitemapLocs) {
      const subUrls = await getUrlsFromSitemap(sitemapUrl);
      urls.push(...subUrls);
    }
  } else {
    // If it's a direct URL sitemap
    $("url loc").each((_, elem) => {
      urls.push($(elem).text());
    });
  }

  return urls;
}

/**
 * Fetches URLs listed in a sub-sitemap.
 */
async function getUrlsFromSitemap(sitemapUrl: string): Promise<string[]> {
  const response = await fetch(sitemapUrl);
  const body = await response.text();
  const $ = cheerio.load(body, { xmlMode: true });

  const urls: string[] = [];

  $("url loc").each((_, elem) => {
    urls.push($(elem).text());
  });

  return urls;
}
