// lib/loadMarkdown.ts
import fs from "fs/promises";
import path from "path";

export async function loadMarkdownContent(slug: string): Promise<string> {
  const fullPath = path.join(
    process.cwd(),
    "src",
    "data",
    "experience",
    `${slug}.md`
  );
  const fileContents = await fs.readFile(fullPath, "utf8");
  return fileContents;
}
