// Mock data for TruckWys Executive Dashboard
// This will be replaced with real API data in production

export interface KPIData {
  healthScore: {
    value: number;
    trend: number;
    breakdown: {
      cashFlow: number;
      margin: number;
      efficiency: number;
    };
  };
  revenue: {
    value: number;
    trend: number;
    currency: string;
  };
  margin: {
    value: number;
    trend: number;
  };
  cashPosition: {
    value: number;
    expectedInflow: number;
    currency: string;
  };
  activeJobs: {
    value: number;
    delayed: number;
  };
}

export interface Alert {
  id: string;
  type: 'overdue_invoice' | 'margin_erosion' | 'cash_warning' | 'driver_idle' | 'quote_aging' | 'vehicle_due';
  severity: 'critical' | 'high' | 'medium' | 'info';
  title: string;
  description: string;
  actionUrl: string;
  createdAt: Date;
}

export interface RevenueTrendData {
  month: string;
  revenue: number;
  margin: number;
}

export interface ROIData {
  totalSavings: number;
  currency: string;
  breakdown: {
    pricingOptimization: number;
    fasterPayments: number;
    reducedEmptyKm: number;
  };
}

// Mock KPI Data
export const mockKPIData: KPIData = {
  healthScore: {
    value: 78,
    trend: 3,
    breakdown: {
      cashFlow: 82,
      margin: 75,
      efficiency: 77,
    },
  },
  revenue: {
    value: 2450000,
    trend: 12,
    currency: 'R',
  },
  margin: {
    value: 18.2,
    trend: 2.1,
  },
  cashPosition: {
    value: 847000,
    expectedInflow: 120000,
    currency: 'R',
  },
  activeJobs: {
    value: 23,
    delayed: 5,
  },
};

// Mock Alerts Data
export const mockAlerts: Alert[] = [
  {
    id: '1',
    type: 'overdue_invoice',
    severity: 'critical',
    title: 'Invoice #4521 overdue',
    description: 'Savanna Express - R 45,000 overdue by 12 days',
    actionUrl: '/dashboard/finance',
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
  },
  {
    id: '2',
    type: 'margin_erosion',
    severity: 'high',
    title: 'Low margin on JHB-CT route',
    description: 'Current margin 8.2% vs 15% target',
    actionUrl: '/dashboard/quotes',
    createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
  },
  {
    id: '3',
    type: 'driver_idle',
    severity: 'medium',
    title: 'Driver T. Moyo idle',
    description: 'No assignment for 36 hours',
    actionUrl: '/dashboard/quotes',
    createdAt: new Date(Date.now() - 8 * 60 * 60 * 1000), // 8 hours ago
  },
  {
    id: '4',
    type: 'cash_warning',
    severity: 'high',
    title: 'Cash flow projection',
    description: 'Balance may drop below R50K in 10 days',
    actionUrl: '/dashboard/finance',
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
  },
  {
    id: '5',
    type: 'quote_aging',
    severity: 'medium',
    title: '3 quotes need follow-up',
    description: 'Sent over 7 days ago with no response',
    actionUrl: '/dashboard/quotes',
    createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
  },
];

// Mock Revenue Trend Data (12 months)
export const mockRevenueTrend: RevenueTrendData[] = [
  { month: 'Mar', revenue: 1850000, margin: 15.2 },
  { month: 'Apr', revenue: 1920000, margin: 14.8 },
  { month: 'May', revenue: 2100000, margin: 16.1 },
  { month: 'Jun', revenue: 1980000, margin: 15.5 },
  { month: 'Jul', revenue: 2250000, margin: 17.2 },
  { month: 'Aug', revenue: 2180000, margin: 16.8 },
  { month: 'Sep', revenue: 2320000, margin: 17.5 },
  { month: 'Oct', revenue: 2280000, margin: 17.1 },
  { month: 'Nov', revenue: 2400000, margin: 18.0 },
  { month: 'Dec', revenue: 2180000, margin: 16.4 },
  { month: 'Jan', revenue: 2350000, margin: 17.8 },
  { month: 'Feb', revenue: 2450000, margin: 18.2 },
];

// Mock ROI Data
export const mockROIData: ROIData = {
  totalSavings: 142000,
  currency: 'R',
  breakdown: {
    pricingOptimization: 68000,
    fasterPayments: 52000,
    reducedEmptyKm: 22000,
  },
};

// Helper function to format currency
export function formatCurrency(value: number, currency: string = 'R'): string {
  if (value >= 1000000) {
    return `${currency} ${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `${currency} ${(value / 1000).toFixed(0)}K`;
  }
  return `${currency} ${value.toFixed(0)}`;
}

// Helper function to format percentage
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

// Helper function to get time ago string
export function getTimeAgo(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffHours / 24);

  if (diffDays > 0) {
    return `${diffDays}d ago`;
  }
  if (diffHours > 0) {
    return `${diffHours}h ago`;
  }
  return 'Just now';
}

// Helper function to get alert severity color
export function getAlertSeverityColor(severity: Alert['severity']): string {
  switch (severity) {
    case 'critical':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'high':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'medium':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'info':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}

// Helper function to get alert icon name
export function getAlertIcon(type: Alert['type']): string {
  switch (type) {
    case 'overdue_invoice':
      return 'FileWarning';
    case 'margin_erosion':
      return 'TrendingDown';
    case 'cash_warning':
      return 'AlertTriangle';
    case 'driver_idle':
      return 'User';
    case 'quote_aging':
      return 'Clock';
    case 'vehicle_due':
      return 'Truck';
    default:
      return 'AlertCircle';
  }
}
