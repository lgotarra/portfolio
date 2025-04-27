import * as cheerio from "cheerio";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

/**
 * Fetches the page content and splits it into smaller text chunks.
 */
export async function processPage(url: string): Promise<string[]> {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const text = $("body").text();

  const textSplitter = new RecursiveCharacterTextSplitter();
  return await textSplitter.splitText(text);
}
