import { mkdir, writeFile } from "node:fs/promises";

const siteUrl = "https://stackpackers.com";
const outputDir = "out";

await mkdir(outputDir, { recursive: true });

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
  </url>
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await writeFile(`${outputDir}/sitemap.xml`, sitemap);
await writeFile(`${outputDir}/robots.txt`, robots);

console.log("Sitemap and robots.txt generated in out/");
