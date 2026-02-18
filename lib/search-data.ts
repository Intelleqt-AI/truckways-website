// Search data index for global search functionality

export type SearchResultType = 'customer' | 'invoice' | 'quote' | 'driver' | 'vehicle' | 'route';

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle: string;
  url: string;
  metadata?: Record<string, string | number>;
}

// Mock customer data
const customers: SearchResult[] = [
  { id: 'cust-001', type: 'customer', title: 'Shoprite', subtitle: 'Retail • JHB', url: '/dashboard/customers/shoprite', metadata: { revenue: 'R 2.4M', jobs: 156 } },
  { id: 'cust-002', type: 'customer', title: 'Woolworths', subtitle: 'Retail • CPT', url: '/dashboard/customers/woolworths', metadata: { revenue: 'R 1.8M', jobs: 98 } },
  { id: 'cust-003', type: 'customer', title: 'Pick n Pay', subtitle: 'Retail • National', url: '/dashboard/customers/picknpay', metadata: { revenue: 'R 3.1M', jobs: 234 } },
  { id: 'cust-004', type: 'customer', title: 'Checkers', subtitle: 'Retail • DBN', url: '/dashboard/customers/checkers', metadata: { revenue: 'R 1.2M', jobs: 87 } },
  { id: 'cust-005', type: 'customer', title: 'Makro', subtitle: 'Wholesale • PTA', url: '/dashboard/customers/makro', metadata: { revenue: 'R 2.8M', jobs: 145 } },
  { id: 'cust-006', type: 'customer', title: 'Coca-Cola', subtitle: 'Beverages • JHB', url: '/dashboard/customers/cocacola', metadata: { revenue: 'R 4.2M', jobs: 312 } },
  { id: 'cust-007', type: 'customer', title: 'SAB Miller', subtitle: 'Beverages • National', url: '/dashboard/customers/sabmiller', metadata: { revenue: 'R 3.6M', jobs: 267 } },
  { id: 'cust-008', type: 'customer', title: 'Tiger Brands', subtitle: 'FMCG • JHB', url: '/dashboard/customers/tigerbrands', metadata: { revenue: 'R 2.1M', jobs: 178 } },
];

// Mock invoice data
const invoices: SearchResult[] = [
  { id: 'INV-001', type: 'invoice', title: 'INV-001', subtitle: 'Shoprite • R 45,000 • Paid', url: '/dashboard/finance', metadata: { status: 'paid', amount: 45000 } },
  { id: 'INV-002', type: 'invoice', title: 'INV-002', subtitle: 'Woolworths • R 52,000 • Paid', url: '/dashboard/finance', metadata: { status: 'paid', amount: 52000 } },
  { id: 'INV-003', type: 'invoice', title: 'INV-003', subtitle: 'Pick n Pay • R 38,000 • Pending', url: '/dashboard/finance', metadata: { status: 'pending', amount: 38000 } },
  { id: 'INV-004', type: 'invoice', title: 'INV-004', subtitle: 'Checkers • R 28,500 • Overdue', url: '/dashboard/finance', metadata: { status: 'overdue', amount: 28500 } },
  { id: 'INV-005', type: 'invoice', title: 'INV-005', subtitle: 'Makro • R 112,000 • Pending', url: '/dashboard/finance', metadata: { status: 'pending', amount: 112000 } },
  { id: 'INV-006', type: 'invoice', title: 'INV-006', subtitle: 'Coca-Cola • R 89,000 • Paid', url: '/dashboard/finance', metadata: { status: 'paid', amount: 89000 } },
  { id: 'INV-007', type: 'invoice', title: 'INV-007', subtitle: 'SAB Miller • R 156,000 • Overdue', url: '/dashboard/finance', metadata: { status: 'overdue', amount: 156000 } },
  { id: 'INV-008', type: 'invoice', title: 'INV-008', subtitle: 'Tiger Brands • R 67,000 • Pending', url: '/dashboard/finance', metadata: { status: 'pending', amount: 67000 } },
];

// Mock quote data
const quotes: SearchResult[] = [
  { id: 'Q-001', type: 'quote', title: 'Q-001', subtitle: 'Shoprite • JHB → DBN • R 45K', url: '/dashboard/quotes', metadata: { status: 'booked', amount: 45000 } },
  { id: 'Q-002', type: 'quote', title: 'Q-002', subtitle: 'Woolworths • CPT → PE • R 52K', url: '/dashboard/quotes', metadata: { status: 'accepted', amount: 52000 } },
  { id: 'Q-003', type: 'quote', title: 'Q-003', subtitle: 'Pick n Pay • JHB → CPT • R 85K', url: '/dashboard/quotes', metadata: { status: 'negotiating', amount: 85000 } },
  { id: 'Q-004', type: 'quote', title: 'Q-004', subtitle: 'Checkers • DBN → JHB • R 38K', url: '/dashboard/quotes', metadata: { status: 'quoted', amount: 38000 } },
  { id: 'Q-005', type: 'quote', title: 'Q-005', subtitle: 'Makro • PTA → CPT • R 112K', url: '/dashboard/quotes', metadata: { status: 'draft', amount: 112000 } },
  { id: 'Q-006', type: 'quote', title: 'Q-006', subtitle: 'Coca-Cola • JHB → DBN • R 89K', url: '/dashboard/quotes', metadata: { status: 'booked', amount: 89000 } },
];

// Mock driver data
const drivers: SearchResult[] = [
  { id: 'drv-001', type: 'driver', title: 'Thabo Moyo', subtitle: 'Class EC • Active • 4.8★', url: '/dashboard/fleet', metadata: { status: 'active', rating: 4.8 } },
  { id: 'drv-002', type: 'driver', title: 'Johannes van der Berg', subtitle: 'Class EC • Active • 4.9★', url: '/dashboard/fleet', metadata: { status: 'active', rating: 4.9 } },
  { id: 'drv-003', type: 'driver', title: 'Sipho Nkosi', subtitle: 'Class EC • On Leave • 4.7★', url: '/dashboard/fleet', metadata: { status: 'leave', rating: 4.7 } },
  { id: 'drv-004', type: 'driver', title: 'Pieter Botha', subtitle: 'Class EC • Active • 4.6★', url: '/dashboard/fleet', metadata: { status: 'active', rating: 4.6 } },
  { id: 'drv-005', type: 'driver', title: 'Mandla Dlamini', subtitle: 'Class C1 • Active • 4.5★', url: '/dashboard/fleet', metadata: { status: 'active', rating: 4.5 } },
];

// Mock vehicle data
const vehicles: SearchResult[] = [
  { id: 'veh-001', type: 'vehicle', title: 'TW-001-GP', subtitle: 'Scania R500 • Active', url: '/dashboard/fleet', metadata: { status: 'active', type: 'truck' } },
  { id: 'veh-002', type: 'vehicle', title: 'TW-002-GP', subtitle: 'Volvo FH16 • Active', url: '/dashboard/fleet', metadata: { status: 'active', type: 'truck' } },
  { id: 'veh-003', type: 'vehicle', title: 'TW-003-WC', subtitle: 'MAN TGX • Maintenance', url: '/dashboard/fleet', metadata: { status: 'maintenance', type: 'truck' } },
  { id: 'veh-004', type: 'vehicle', title: 'TW-004-KZN', subtitle: 'Mercedes Actros • Active', url: '/dashboard/fleet', metadata: { status: 'active', type: 'truck' } },
  { id: 'veh-005', type: 'vehicle', title: 'TW-005-GP', subtitle: 'Isuzu FTR • Active', url: '/dashboard/fleet', metadata: { status: 'active', type: 'truck' } },
];

// Mock route data
const routes: SearchResult[] = [
  { id: 'route-001', type: 'route', title: 'JHB → DBN', subtitle: 'Johannesburg to Durban • 568km', url: '/dashboard/quotes', metadata: { distance: 568 } },
  { id: 'route-002', type: 'route', title: 'CPT → PE', subtitle: 'Cape Town to Port Elizabeth • 769km', url: '/dashboard/quotes', metadata: { distance: 769 } },
  { id: 'route-003', type: 'route', title: 'JHB → CPT', subtitle: 'Johannesburg to Cape Town • 1,398km', url: '/dashboard/quotes', metadata: { distance: 1398 } },
  { id: 'route-004', type: 'route', title: 'DBN → JHB', subtitle: 'Durban to Johannesburg • 568km', url: '/dashboard/quotes', metadata: { distance: 568 } },
  { id: 'route-005', type: 'route', title: 'PTA → CPT', subtitle: 'Pretoria to Cape Town • 1,460km', url: '/dashboard/quotes', metadata: { distance: 1460 } },
];

// All searchable items
export const searchIndex: SearchResult[] = [
  ...customers,
  ...invoices,
  ...quotes,
  ...drivers,
  ...vehicles,
  ...routes,
];

// Search function
export function searchAll(query: string, filters?: { types?: SearchResultType[] }): SearchResult[] {
  if (!query.trim()) return [];

  const normalizedQuery = query.toLowerCase().trim();
  const typeFilter = filters?.types;

  return searchIndex
    .filter((item) => {
      // Type filter
      if (typeFilter && typeFilter.length > 0 && !typeFilter.includes(item.type)) {
        return false;
      }

      // Search in title and subtitle
      const matchesTitle = item.title.toLowerCase().includes(normalizedQuery);
      const matchesSubtitle = item.subtitle.toLowerCase().includes(normalizedQuery);

      return matchesTitle || matchesSubtitle;
    })
    .slice(0, 10); // Limit results
}

// Get recent searches from localStorage
export function getRecentSearches(): SearchResult[] {
  if (typeof window === 'undefined') return [];

  try {
    const saved = localStorage.getItem('truckwys-recent-searches');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // Ignore errors
  }
  return [];
}

// Save a search to recent
export function saveRecentSearch(result: SearchResult): void {
  if (typeof window === 'undefined') return;

  try {
    const recent = getRecentSearches();
    const filtered = recent.filter(r => r.id !== result.id);
    const updated = [result, ...filtered].slice(0, 5);
    localStorage.setItem('truckwys-recent-searches', JSON.stringify(updated));
  } catch {
    // Ignore errors
  }
}

// Type labels for display
export const typeLabels: Record<SearchResultType, string> = {
  customer: 'Customer',
  invoice: 'Invoice',
  quote: 'Quote',
  driver: 'Driver',
  vehicle: 'Vehicle',
  route: 'Route',
};

// Type colors for badges
export const typeColors: Record<SearchResultType, string> = {
  customer: 'bg-sky-100 text-sky-700',
  invoice: 'bg-emerald-100 text-emerald-700',
  quote: 'bg-amber-100 text-amber-700',
  driver: 'bg-purple-100 text-purple-700',
  vehicle: 'bg-rose-100 text-rose-700',
  route: 'bg-gray-100 text-gray-700',
};
