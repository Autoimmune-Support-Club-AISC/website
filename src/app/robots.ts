import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      // --- AI Search-Augmented Crawlers (allow — these drive citations) ---
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // --- AI Training Crawlers ---
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        allow: '/',
      },
      // --- Aggressive/Unwanted Scrapers (block) ---
      {
        userAgent: 'Bytespider',
        disallow: '/',
      },
    ],
    sitemap: 'https://aisc.care/sitemap.xml',
  };
}
