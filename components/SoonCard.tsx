import { Zap, ShieldCheck } from 'lucide-react';
import { StatusChip, TextLink } from './ui';

/**
 * The one "Coming soon" card (Home, Pricing, Product): icon on a quiet tile, chip
 * top right, name, one line, "Get notified" in the footer. Copy lives here so the
 * three pages can never drift.
 */
export const SOON = [
  { topic: 'fast-pay', icon: Zap, name: 'Fast Pay', line: 'Get paid on an invoice before your customer pays. Pricing is published when it goes live.' },
  // Q12: no product detail until the owner confirms it; one honest line meanwhile.
  { topic: 'insurance', icon: ShieldCheck, name: 'Insurance', line: 'Being built. What it covers is published before it goes live.' },
] as const;

export function SoonCard({ item, loc }: { item: (typeof SOON)[number]; loc: string }) {
  const { icon: Icon, name, line, topic } = item;
  return (
    <div className="pcard pcard--soon">
      <span className="pcard__top">
        <span className="pcard__tile" aria-hidden="true">
          <Icon className="pcard__icon" strokeWidth={1.75} />
        </span>
        <StatusChip />
      </span>
      <span className="pcard__name">{name}</span>
      <span className="pcard__line">{line}</span>
      <span className="pcard__foot">
        <TextLink href={`/contact?topic=${topic}`} cta="notify" loc={loc} quiet>
          Get notified<span className="sr-only"> about {name}</span>
        </TextLink>
      </span>
    </div>
  );
}
