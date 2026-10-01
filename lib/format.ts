/**
 * Number and date formatting that matches the dashboard (formatters.ts):
 * "R 4 499", "R 20 505,65", "0,25%", "5 Apr 2026".
 * Thousands are grouped with a space and money uses a non-breaking space
 * (U+00A0) after the "R" so the symbol never wraps away from its number.
 */

const NBSP = ' ';

function group(intPart: string): string {
  // Non-breaking thin grouping would be nicer, but the dashboard uses a
  // plain non-breaking space so figures copy-paste identically.
  return intPart.replace(/\B(?=(\d{3})+(?!\d))/g, NBSP);
}

/** 4499 -> "R 4 499"; 20505.65 -> "R 20 505,65" (cents only when asked or present). */
export function rand(value: number, opts: { cents?: boolean } = {}): string {
  const neg = value < 0;
  const abs = Math.abs(value);
  const showCents = opts.cents ?? !Number.isInteger(Math.round(abs * 100) / 100);
  const fixed = showCents ? abs.toFixed(2) : Math.round(abs).toString();
  const [i, d] = fixed.split('.');
  return `${neg ? '−' : ''}R${NBSP}${group(i)}${d ? `,${d}` : ''}`;
}

/** 0.25 -> "0,25%" */
export function pct(value: number, digits = 2): string {
  const s = value.toFixed(digits).replace(/0+$/, '').replace(/\.$/, '');
  return `${s.replace('.', ',')}%`;
}

/** Plain grouped number: 1274 -> "1 274"; 11.4 -> "11,4" */
export function num(value: number, digits = 0): string {
  const [i, d] = value.toFixed(digits).split('.');
  return `${group(i)}${d ? `,${d}` : ''}`;
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-04-05" -> "5 Apr 2026" */
export function date(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d}${NBSP}${MONTHS[m - 1]}${NBSP}${y}`;
}

/** Whole days between two ISO dates (b - a). */
export function daysBetween(a: string, b: string): number {
  return Math.round((Date.parse(b) - Date.parse(a)) / 86_400_000);
}

/** ISO date plus n days. */
export function addDays(iso: string, n: number): string {
  return new Date(Date.parse(iso) + n * 86_400_000).toISOString().slice(0, 10);
}
