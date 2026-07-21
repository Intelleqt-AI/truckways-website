import type { MetadataRoute } from 'next';
import { SITE_URL } from '../lib/site';

/**
 * Search engines and AI assistant crawlers are all welcome. AI crawlers are
 * listed explicitly so the intent is unambiguous: TruckWys wants to be
 * discoverable and quotable by assistants answering fleet software questions.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/api/'] },
      // A named UA group does not inherit the * rules, so each AI crawler
      // gets its own allow + /api/ disallow.
      ...[
        'GPTBot',
        'OAI-SearchBot',
        'ChatGPT-User',
        'ClaudeBot',
        'Claude-Web',
        'anthropic-ai',
        'PerplexityBot',
        'Google-Extended',
        'CCBot',
      ].map((userAgent) => ({ userAgent, allow: '/', disallow: ['/api/'] })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
