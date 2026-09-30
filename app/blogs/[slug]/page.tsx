import { permanentRedirect } from 'next/navigation';
import { getGuide } from '../../../content/guides';

/**
 * Old /blogs/:slug URLs, 308 per the brief's per-post decisions (§2.3):
 * merged posts go to the guide that absorbed them, unpublished posts go to the
 * guides index, kept posts keep their slug under /guides.
 */
const MOVED: Record<string, string> = {
  // Merged
  'true-cost-running-truck-fleet-south-africa-2026': '/guides/sa-fleet-operators-real-cost-per-kilometre',
  'fleet-profitability-south-africa-ai-powered-pricing': '/guides/how-to-quote-freight-rates-south-africa-ai',
  // Unpublished: implied Fast Pay, telematics positioning, or hype with no search value
  'invoice-factoring-vs-ai-cash-advances-sa-transport': '/guides',
  'fleet-management-software-south-africa-2026': '/guides',
  'future-of-freight-africa-ai-transforming-transport': '/guides',
};

export function generateStaticParams() {
  return [
    ...Object.keys(MOVED),
    'sa-fleet-operators-real-cost-per-kilometre',
    'how-to-quote-freight-rates-south-africa-ai',
    'hidden-profit-leaks-south-african-fleet-operators',
    'fuel-cost-management-sa-fleets-strategies',
    'cross-border-trucking-southern-africa-multi-currency',
  ].map((slug) => ({ slug }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const to = MOVED[params.slug] ?? (getGuide(params.slug) ? `/guides/${params.slug}` : '/guides');
  permanentRedirect(to);
}
