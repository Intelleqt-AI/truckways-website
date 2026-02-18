'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Clock,
  AlertCircle,
  CheckCircle2,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  Building2,
  Download,
  Fuel,
  Wrench,
  Users,
  Receipt,
  Bell,
  ChevronRight,
  Calendar,
  Send,
  X,
} from 'lucide-react';
import { toast } from 'sonner';

// Invoice status types
type InvoiceStatus = 'paid' | 'pending' | 'overdue';

interface Invoice {
  id: string;
  customer: string;
  route: string;
  amount: number;
  margin: number;
  status: InvoiceStatus;
  dueDate: string;
  issueDate: string;
  daysOverdue?: number;
}

// Aging bucket type
type AgingBucket = 'current' | 'days30' | 'days60' | 'days90';

// Mock invoice data with aging bucket
const invoices: Invoice[] = [
  { id: 'INV-001', customer: 'Shoprite', route: 'JHB → DBN', amount: 45000, margin: 18.5, status: 'paid', dueDate: '2026-01-15', issueDate: '2026-01-01' },
  { id: 'INV-002', customer: 'Woolworths', route: 'CPT → PE', amount: 52000, margin: 15.3, status: 'paid', dueDate: '2026-01-18', issueDate: '2026-01-04' },
  { id: 'INV-003', customer: 'Pick n Pay', route: 'JHB → CPT', amount: 85000, margin: 12.5, status: 'pending', dueDate: '2026-02-10', issueDate: '2026-01-27' },
  { id: 'INV-004', customer: 'Checkers', route: 'DBN → JHB', amount: 38000, margin: 19.8, status: 'overdue', dueDate: '2026-01-25', issueDate: '2026-01-11', daysOverdue: 8 },
  { id: 'INV-005', customer: 'Makro', route: 'PTA → CPT', amount: 112000, margin: 16.5, status: 'pending', dueDate: '2026-02-15', issueDate: '2026-02-01' },
  { id: 'INV-006', customer: 'Coca-Cola', route: 'JHB → DBN', amount: 89000, margin: 21.3, status: 'paid', dueDate: '2026-01-20', issueDate: '2026-01-06' },
  { id: 'INV-007', customer: 'SAB Miller', route: 'PTA → CPT', amount: 145000, margin: 18.9, status: 'overdue', dueDate: '2026-01-28', issueDate: '2026-01-14', daysOverdue: 5 },
  { id: 'INV-008', customer: 'Unilever', route: 'DBN → JHB', amount: 67000, margin: 17.4, status: 'paid', dueDate: '2026-01-22', issueDate: '2026-01-08' },
  { id: 'INV-009', customer: 'Nestle', route: 'JHB → CPT', amount: 92000, margin: 19.2, status: 'pending', dueDate: '2026-02-08', issueDate: '2026-01-25' },
  { id: 'INV-010', customer: 'Tiger Brands', route: 'PTA → EL', amount: 68000, margin: 8.5, status: 'overdue', dueDate: '2026-01-20', issueDate: '2026-01-06', daysOverdue: 13 },
];

// Aging bucket labels
const agingBucketLabels: Record<AgingBucket, string> = {
  current: 'Current (0-30 days)',
  days30: '30-60 days',
  days60: '60-90 days',
  days90: '90+ days',
};

// Get invoices by aging bucket (mock data for each bucket)
const getInvoicesByBucket = (bucket: AgingBucket): Invoice[] => {
  switch (bucket) {
    case 'current':
      return [
        { id: 'INV-003', customer: 'Pick n Pay', route: 'JHB → CPT', amount: 85000, margin: 12.5, status: 'pending', dueDate: '2026-02-10', issueDate: '2026-01-27', daysOverdue: 0 },
        { id: 'INV-005', customer: 'Makro', route: 'PTA → CPT', amount: 112000, margin: 16.5, status: 'pending', dueDate: '2026-02-15', issueDate: '2026-02-01', daysOverdue: 0 },
        { id: 'INV-009', customer: 'Nestle', route: 'JHB → CPT', amount: 92000, margin: 19.2, status: 'pending', dueDate: '2026-02-08', issueDate: '2026-01-25', daysOverdue: 0 },
      ];
    case 'days30':
      return [
        { id: 'INV-004', customer: 'Checkers', route: 'DBN → JHB', amount: 38000, margin: 19.8, status: 'overdue', dueDate: '2026-01-25', issueDate: '2026-01-11', daysOverdue: 38 },
        { id: 'INV-007', customer: 'SAB Miller', route: 'PTA → CPT', amount: 145000, margin: 18.9, status: 'overdue', dueDate: '2026-01-28', issueDate: '2026-01-14', daysOverdue: 35 },
      ];
    case 'days60':
      return [
        { id: 'INV-010', customer: 'Tiger Brands', route: 'PTA → EL', amount: 68000, margin: 8.5, status: 'overdue', dueDate: '2026-01-20', issueDate: '2026-01-06', daysOverdue: 73 },
      ];
    case 'days90':
      return [];
    default:
      return [];
  }
};

// Route profitability data
const routeProfitability = [
  { route: 'JHB → CPT', trips: 45, revenue: 892000, avgMargin: 17.2, trend: 'up' },
  { route: 'JHB → DBN', trips: 38, revenue: 645000, avgMargin: 19.1, trend: 'up' },
  { route: 'CPT → PE', trips: 22, revenue: 312000, avgMargin: 15.8, trend: 'down' },
  { route: 'PTA → CPT', trips: 18, revenue: 485000, avgMargin: 18.4, trend: 'up' },
  { route: 'DBN → JHB', trips: 32, revenue: 478000, avgMargin: 16.9, trend: 'stable' },
];

// Customer accounts data
const customerAccounts = [
  { customer: 'Shoprite', outstanding: 0, paid: 245000, avgPaymentDays: 12 },
  { customer: 'Woolworths', outstanding: 52000, paid: 180000, avgPaymentDays: 15 },
  { customer: 'Pick n Pay', outstanding: 85000, paid: 120000, avgPaymentDays: 22 },
  { customer: 'Makro', outstanding: 112000, paid: 95000, avgPaymentDays: 18 },
  { customer: 'Coca-Cola', outstanding: 0, paid: 320000, avgPaymentDays: 10 },
];

// Cash flow forecast data (next 4 weeks)
const cashFlowForecast = [
  { week: 'Week 1', inflow: 185000, outflow: 142000 },
  { week: 'Week 2', inflow: 210000, outflow: 158000 },
  { week: 'Week 3', inflow: 165000, outflow: 145000 },
  { week: 'Week 4', inflow: 195000, outflow: 160000 },
];

// Expense data - all use sky for neutral expense categories
const expenses = [
  { category: 'Fuel', amount: 285000, percentage: 45, icon: Fuel, color: 'bg-sky-50 text-sky-600', barColor: 'bg-sky-500' },
  { category: 'Maintenance', amount: 78000, percentage: 12, icon: Wrench, color: 'bg-sky-50 text-sky-600', barColor: 'bg-sky-400' },
  { category: 'Driver Wages', amount: 156000, percentage: 25, icon: Users, color: 'bg-sky-50 text-sky-600', barColor: 'bg-sky-500' },
  { category: 'Tolls & Fees', amount: 45000, percentage: 7, icon: Receipt, color: 'bg-sky-50 text-sky-600', barColor: 'bg-sky-400' },
  { category: 'Other', amount: 68000, percentage: 11, icon: FileText, color: 'bg-sky-50 text-sky-600', barColor: 'bg-sky-300' },
];

// P&L data
const profitLoss = {
  revenue: 793000,
  costOfSales: 632000,
  grossProfit: 161000,
  operatingExpenses: 85000,
  netProfit: 76000,
  grossMargin: 20.3,
  netMargin: 9.6,
};

// Payment reminders
const paymentReminders = [
  { customer: 'Pick n Pay', invoice: 'INV-003', amount: 85000, dueDate: '2026-02-10', daysUntil: 8, type: 'upcoming' },
  { customer: 'Makro', invoice: 'INV-005', amount: 112000, dueDate: '2026-02-15', daysUntil: 13, type: 'upcoming' },
  { customer: 'Checkers', invoice: 'INV-004', amount: 38000, dueDate: '2026-01-25', daysOverdue: 8, type: 'overdue' },
  { customer: 'SAB Miller', invoice: 'INV-007', amount: 145000, dueDate: '2026-01-28', daysOverdue: 5, type: 'overdue' },
  { customer: 'Tiger Brands', invoice: 'INV-010', amount: 68000, dueDate: '2026-01-20', daysOverdue: 13, type: 'overdue' },
];

// Aging report data
const agingReport = {
  current: { count: 3, amount: 289000 },
  days30: { count: 2, amount: 183000 },
  days60: { count: 1, amount: 68000 },
  days90: { count: 0, amount: 0 },
};

// Calculate summary metrics
const totalRevenue = invoices.reduce((sum, inv) => sum + inv.amount, 0);
const paidInvoices = invoices.filter(inv => inv.status === 'paid');
const pendingInvoices = invoices.filter(inv => inv.status === 'pending');
const overdueInvoices = invoices.filter(inv => inv.status === 'overdue');
const totalPaid = paidInvoices.reduce((sum, inv) => sum + inv.amount, 0);
const totalPending = pendingInvoices.reduce((sum, inv) => sum + inv.amount, 0);
const totalOverdue = overdueInvoices.reduce((sum, inv) => sum + inv.amount, 0);
const avgMargin = invoices.reduce((sum, inv) => sum + inv.margin, 0) / invoices.length;

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `R ${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `R ${(value / 1000).toFixed(0)}K`;
  }
  return `R ${value.toFixed(0)}`;
}

function getStatusColor(status: InvoiceStatus): string {
  switch (status) {
    case 'paid':
      return 'bg-emerald-100 text-emerald-700';
    case 'pending':
      return 'bg-amber-100 text-amber-700';
    case 'overdue':
      return 'bg-rose-100 text-rose-700';
  }
}

function getStatusIcon(status: InvoiceStatus) {
  switch (status) {
    case 'paid':
      return <CheckCircle2 className="w-4 h-4" />;
    case 'pending':
      return <Clock className="w-4 h-4" />;
    case 'overdue':
      return <AlertCircle className="w-4 h-4" />;
  }
}

function getMarginColor(margin: number): string {
  if (margin >= 15) return 'text-green-600';
  if (margin >= 10) return 'text-yellow-600';
  return 'text-red-600';
}

export default function FinancePage() {
  const [selectedBucket, setSelectedBucket] = useState<AgingBucket | null>(null);
  const [selectedInvoices, setSelectedInvoices] = useState<string[]>([]);
  const bucketInvoices = selectedBucket ? getInvoicesByBucket(selectedBucket) : [];

  // Get displayable invoices (first 6)
  const displayedInvoices = invoices.slice(0, 6);

  // Handle select all checkbox
  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedInvoices(displayedInvoices.map(inv => inv.id));
    } else {
      setSelectedInvoices([]);
    }
  };

  // Handle individual checkbox
  const handleSelectInvoice = (invoiceId: string, checked: boolean) => {
    if (checked) {
      setSelectedInvoices(prev => [...prev, invoiceId]);
    } else {
      setSelectedInvoices(prev => prev.filter(id => id !== invoiceId));
    }
  };

  // Send single reminder
  const handleSendReminder = (invoice: Invoice) => {
    toast.success(`Reminder sent to ${invoice.customer}`, {
      description: `${invoice.id} - ${formatCurrency(invoice.amount)}`,
    });
  };

  // Send bulk reminders
  const handleBulkReminder = () => {
    const count = selectedInvoices.length;
    const totalAmount = invoices
      .filter(inv => selectedInvoices.includes(inv.id))
      .reduce((sum, inv) => sum + inv.amount, 0);

    toast.success(`Sent ${count} reminder${count > 1 ? 's' : ''}`, {
      description: `Total outstanding: ${formatCurrency(totalAmount)}`,
    });
    setSelectedInvoices([]);
  };

  // Clear selection
  const clearSelection = () => {
    setSelectedInvoices([]);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Finance HQ</h1>
          <p className="text-sm text-gray-500 mt-1">
            Track invoices, revenue, and customer payments
          </p>
        </div>
        <Button
          className="mt-4 sm:mt-0 text-white"
          style={{ background: 'linear-gradient(135deg, rgb(60, 131, 246) 0%, rgb(37, 99, 235) 100%)' }}
        >
          <Download className="w-4 h-4 mr-2" />
          Export Report
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Revenue */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-sky-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {formatCurrency(totalRevenue)}
            </p>
            <p className="text-xs text-gray-400 mt-1">This month</p>
          </CardContent>
        </Card>

        {/* Collected */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Collected</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {formatCurrency(totalPaid)}
            </p>
            <p className="text-xs text-emerald-600 mt-1">{paidInvoices.length} invoices paid</p>
          </CardContent>
        </Card>

        {/* Pending */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Pending</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {formatCurrency(totalPending)}
            </p>
            <p className="text-xs text-amber-600 mt-1">{pendingInvoices.length} awaiting payment</p>
          </CardContent>
        </Card>

        {/* Overdue */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-rose-500" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Overdue</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {formatCurrency(totalOverdue)}
            </p>
            <p className="text-xs text-rose-500 mt-1">{overdueInvoices.length} need follow-up</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Invoices */}
        <Card className="lg:col-span-2 bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">Recent Invoices</CardTitle>
              <Button variant="ghost" size="sm" className="text-blue-600">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left text-xs font-medium text-gray-500 pb-3 w-10">
                      <Checkbox
                        checked={selectedInvoices.length === displayedInvoices.length && displayedInvoices.length > 0}
                        onCheckedChange={handleSelectAll}
                      />
                    </th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Invoice</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Customer</th>
                    <th className="text-left text-xs font-medium text-gray-500 pb-3">Route</th>
                    <th className="text-right text-xs font-medium text-gray-500 pb-3">Amount</th>
                    <th className="text-right text-xs font-medium text-gray-500 pb-3">Margin</th>
                    <th className="text-center text-xs font-medium text-gray-500 pb-3">Status</th>
                    <th className="text-center text-xs font-medium text-gray-500 pb-3 w-20">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedInvoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b border-gray-50 hover:bg-gray-50">
                      <td className="py-3 w-10">
                        <Checkbox
                          checked={selectedInvoices.includes(invoice.id)}
                          onCheckedChange={(checked) => handleSelectInvoice(invoice.id, checked as boolean)}
                        />
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-900">{invoice.id}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <span className="text-sm text-gray-700">{invoice.customer}</span>
                      </td>
                      <td className="py-3">
                        <span className="text-sm text-gray-500">{invoice.route}</span>
                      </td>
                      <td className="py-3 text-right">
                        <span className="text-sm font-medium text-gray-900">{formatCurrency(invoice.amount)}</span>
                      </td>
                      <td className="py-3 text-right">
                        <span className={`text-sm font-medium ${getMarginColor(invoice.margin)}`}>
                          {invoice.margin.toFixed(1)}%
                        </span>
                      </td>
                      <td className="py-3">
                        <div className="flex justify-center">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(invoice.status)}`}>
                            {getStatusIcon(invoice.status)}
                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 w-20">
                        <div className="flex justify-center">
                          {(invoice.status === 'overdue' || invoice.status === 'pending') && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-7 px-2 text-xs text-sky-600 hover:text-sky-700 hover:bg-sky-50"
                              onClick={() => handleSendReminder(invoice)}
                            >
                              <Bell className="w-3.5 h-3.5 mr-1" />
                              Remind
                            </Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Margin Analysis */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900">Margin Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <p className="text-4xl font-bold text-gray-900">{avgMargin.toFixed(1)}%</p>
              <p className="text-sm text-gray-500 mt-1">Average Margin</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                <ArrowUpRight className="w-4 h-4 text-green-600" />
                <span className="text-sm text-green-600">+2.3% vs last month</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Above 15%</span>
                <span className="text-sm font-medium text-green-600">
                  {invoices.filter(i => i.margin >= 15).length} invoices
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(invoices.filter(i => i.margin >= 15).length / invoices.length) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-600">10-15%</span>
                <span className="text-sm font-medium text-yellow-600">
                  {invoices.filter(i => i.margin >= 10 && i.margin < 15).length} invoices
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-yellow-500 h-2 rounded-full"
                  style={{ width: `${(invoices.filter(i => i.margin >= 10 && i.margin < 15).length / invoices.length) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <span className="text-sm text-gray-600">Below 10%</span>
                <span className="text-sm font-medium text-red-600">
                  {invoices.filter(i => i.margin < 10).length} invoices
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="bg-red-500 h-2 rounded-full"
                  style={{ width: `${(invoices.filter(i => i.margin < 10).length / invoices.length) * 100}%` }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Route Profitability */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900">Route Profitability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {routeProfitability.map((route, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{route.route}</p>
                      <p className="text-xs text-gray-500">{route.trips} trips</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{formatCurrency(route.revenue)}</p>
                    <div className="flex items-center justify-end gap-1">
                      {route.trend === 'up' && <ArrowUpRight className="w-3 h-3 text-green-600" />}
                      {route.trend === 'down' && <ArrowDownRight className="w-3 h-3 text-red-600" />}
                      <span className={`text-xs font-medium ${
                        route.trend === 'up' ? 'text-green-600' :
                        route.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                      }`}>
                        {route.avgMargin.toFixed(1)}% margin
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Accounts */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold text-gray-900">Customer Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {customerAccounts.map((account, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{account.customer}</p>
                      <p className="text-xs text-gray-500">Avg {account.avgPaymentDays} days to pay</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {account.outstanding > 0 ? (
                      <>
                        <p className="text-sm font-bold text-orange-600">{formatCurrency(account.outstanding)}</p>
                        <p className="text-xs text-gray-500">outstanding</p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm font-bold text-green-600">Paid up</p>
                        <p className="text-xs text-gray-500">{formatCurrency(account.paid)} total</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Cash Flow Forecast & Expense Tracking Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Cash Flow Forecast */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">Cash Flow Forecast</CardTitle>
              <span className="text-xs text-gray-500">Next 4 weeks</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cashFlowForecast.map((week, index) => {
                const netFlow = week.inflow - week.outflow;
                const maxValue = Math.max(...cashFlowForecast.map(w => Math.max(w.inflow, w.outflow)));
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{week.week}</span>
                      <span className={`text-sm font-bold ${netFlow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {netFlow >= 0 ? '+' : ''}{formatCurrency(netFlow)}
                      </span>
                    </div>
                    <div className="flex gap-2 h-6">
                      <div className="flex-1 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full"
                          style={{ width: `${(week.inflow / maxValue) * 100}%` }}
                        />
                      </div>
                      <div className="flex-1 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-rose-400 rounded-full"
                          style={{ width: `${(week.outflow / maxValue) * 100}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>In: {formatCurrency(week.inflow)}</span>
                      <span>Out: {formatCurrency(week.outflow)}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <span className="text-xs text-gray-600">Inflows</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="text-xs text-gray-600">Outflows</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Expense Tracking */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">Expense Breakdown</CardTitle>
              <span className="text-xs text-gray-500">This month</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <p className="text-3xl font-bold text-gray-900">
                {formatCurrency(expenses.reduce((sum, e) => sum + e.amount, 0))}
              </p>
              <p className="text-sm text-gray-500">Total Expenses</p>
            </div>
            <div className="space-y-3">
              {expenses.map((expense, index) => {
                const Icon = expense.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${expense.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{expense.category}</span>
                        <span className="text-sm font-bold text-gray-900">{formatCurrency(expense.amount)}</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div
                          className={`${expense.barColor} h-1.5 rounded-full`}
                          style={{ width: `${expense.percentage}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 w-8 text-right">{expense.percentage}%</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Profit & Loss Summary */}
      <Card className="bg-white border border-gray-200 shadow-sm mb-8">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-gray-900">Profit & Loss Summary</CardTitle>
            <span className="text-xs text-gray-500">This month</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* P&L Breakdown */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm font-medium text-gray-700">Revenue</span>
                </div>
                <span className="text-lg font-bold text-emerald-600">{formatCurrency(profitLoss.revenue)}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-rose-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-rose-500" />
                  <span className="text-sm font-medium text-gray-700">Cost of Sales</span>
                </div>
                <span className="text-lg font-bold text-rose-500">-{formatCurrency(profitLoss.costOfSales)}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-sky-50 rounded-lg border-2 border-sky-200">
                <span className="text-sm font-semibold text-gray-700">Gross Profit</span>
                <span className="text-lg font-bold text-sky-600">{formatCurrency(profitLoss.grossProfit)}</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-medium text-gray-700">Operating Expenses</span>
                </div>
                <span className="text-lg font-bold text-amber-600">-{formatCurrency(profitLoss.operatingExpenses)}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg border-2 border-emerald-300">
                <span className="text-base font-bold text-gray-900">Net Profit</span>
                <span className="text-xl font-bold text-emerald-600">{formatCurrency(profitLoss.netProfit)}</span>
              </div>
            </div>

            {/* Margin Summary */}
            <div className="space-y-4">
              <div className="text-center p-4 bg-sky-50 rounded-lg border border-sky-100">
                <p className="text-3xl font-bold text-sky-600">{profitLoss.grossMargin}%</p>
                <p className="text-sm text-gray-500">Gross Margin</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  <span className="text-xs text-emerald-600">+1.2% vs last month</span>
                </div>
              </div>
              <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <p className="text-3xl font-bold text-emerald-600">{profitLoss.netMargin}%</p>
                <p className="text-sm text-gray-500">Net Margin</p>
                <div className="flex items-center justify-center gap-1 mt-1">
                  <ArrowUpRight className="w-3 h-3 text-emerald-600" />
                  <span className="text-xs text-emerald-600">+0.8% vs last month</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Reminders & Aging Report Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Payment Reminders */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-amber-500" />
                <CardTitle className="text-lg font-semibold text-gray-900">Payment Reminders</CardTitle>
              </div>
              <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full">
                {paymentReminders.filter(r => r.type === 'overdue').length} overdue
              </span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {paymentReminders.map((reminder, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    reminder.type === 'overdue' ? 'bg-rose-50 border border-rose-200' : 'bg-amber-50 border border-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      reminder.type === 'overdue' ? 'bg-rose-100' : 'bg-amber-100'
                    }`}>
                      {reminder.type === 'overdue' ? (
                        <AlertCircle className="w-4 h-4 text-rose-600" />
                      ) : (
                        <Clock className="w-4 h-4 text-amber-600" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{reminder.customer}</p>
                      <p className="text-xs text-gray-500">{reminder.invoice}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">{formatCurrency(reminder.amount)}</p>
                    <p className={`text-xs font-medium ${reminder.type === 'overdue' ? 'text-rose-600' : 'text-amber-600'}`}>
                      {reminder.type === 'overdue' ? `${reminder.daysOverdue} days overdue` : `Due in ${reminder.daysUntil} days`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-sky-600 hover:text-sky-700 hover:bg-sky-50">
              Send Reminders
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </CardContent>
        </Card>

        {/* Aging Report */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900">Aging Report</CardTitle>
              <span className="text-xs text-gray-500">Click bucket for details</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Current */}
              <button
                onClick={() => setSelectedBucket('current')}
                className="w-full p-4 bg-emerald-50 rounded-lg border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300 transition-all cursor-pointer text-left group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-700">Current (0-30 days)</span>
                  <span className="text-lg font-bold text-emerald-600">{formatCurrency(agingReport.current.amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{agingReport.current.count} invoices</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '100%' }} />
                  </div>
                </div>
              </button>

              {/* 30-60 days */}
              <button
                onClick={() => setSelectedBucket('days30')}
                className="w-full p-4 bg-amber-50 rounded-lg border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition-all cursor-pointer text-left group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700">30-60 days</span>
                  <span className="text-lg font-bold text-amber-600">{formatCurrency(agingReport.days30.amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{agingReport.days30.count} invoices</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: `${(agingReport.days30.amount / agingReport.current.amount) * 100}%` }} />
                  </div>
                </div>
              </button>

              {/* 60-90 days */}
              <button
                onClick={() => setSelectedBucket('days60')}
                className="w-full p-4 bg-amber-50 rounded-lg border border-amber-200 hover:bg-amber-100 hover:border-amber-300 transition-all cursor-pointer text-left group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-amber-700">60-90 days</span>
                  <span className="text-lg font-bold text-amber-600">{formatCurrency(agingReport.days60.amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{agingReport.days60.count} invoices</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: `${(agingReport.days60.amount / agingReport.current.amount) * 100}%` }} />
                  </div>
                </div>
              </button>

              {/* 90+ days */}
              <button
                onClick={() => setSelectedBucket('days90')}
                className="w-full p-4 bg-rose-50 rounded-lg border border-rose-200 hover:bg-rose-100 hover:border-rose-300 transition-all cursor-pointer text-left group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-rose-700">90+ days</span>
                  <span className="text-lg font-bold text-rose-500">{formatCurrency(agingReport.days90.amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{agingReport.days90.count} invoices</span>
                  <div className="w-24 bg-gray-200 rounded-full h-2">
                    <div className="bg-rose-500 h-2 rounded-full" style={{ width: '0%' }} />
                  </div>
                </div>
              </button>
            </div>

            {/* Total Outstanding */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Total Outstanding</span>
                <span className="text-xl font-bold text-gray-900">
                  {formatCurrency(agingReport.current.amount + agingReport.days30.amount + agingReport.days60.amount + agingReport.days90.amount)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Aging Bucket Drill-down Dialog */}
      <Dialog open={!!selectedBucket} onOpenChange={() => setSelectedBucket(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-gray-500" />
              {selectedBucket && agingBucketLabels[selectedBucket]} - Invoices
            </DialogTitle>
          </DialogHeader>

          {selectedBucket && (
            <div className="space-y-4">
              {/* Summary */}
              <div className="grid grid-cols-2 gap-4">
                <div className={`rounded-lg p-4 border ${
                  selectedBucket === 'current' ? 'bg-emerald-50 border-emerald-200' :
                  selectedBucket === 'days90' ? 'bg-rose-50 border-rose-200' :
                  'bg-amber-50 border-amber-200'
                }`}>
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <p className={`text-xl font-bold ${
                    selectedBucket === 'current' ? 'text-emerald-600' :
                    selectedBucket === 'days90' ? 'text-rose-600' :
                    'text-amber-600'
                  }`}>
                    {formatCurrency(bucketInvoices.reduce((sum, inv) => sum + inv.amount, 0))}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500">Invoice Count</p>
                  <p className="text-xl font-bold text-gray-900">{bucketInvoices.length}</p>
                </div>
              </div>

              {/* Invoice List */}
              {bucketInvoices.length > 0 ? (
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-2 font-medium text-gray-600">Invoice</th>
                        <th className="text-left px-4 py-2 font-medium text-gray-600">Customer</th>
                        <th className="text-right px-4 py-2 font-medium text-gray-600">Amount</th>
                        <th className="text-right px-4 py-2 font-medium text-gray-600">Due Date</th>
                        <th className="text-right px-4 py-2 font-medium text-gray-600">Days</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {bucketInvoices.map((invoice) => (
                        <tr key={invoice.id} className="hover:bg-gray-50 group">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <FileText className="w-4 h-4 text-gray-400" />
                              <span className="font-medium text-gray-900">{invoice.id}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <Building2 className="w-4 h-4 text-gray-400" />
                              <span className="text-gray-700">{invoice.customer}</span>
                            </div>
                          </td>
                          <td className="text-right px-4 py-3 font-medium text-gray-900">
                            {formatCurrency(invoice.amount)}
                          </td>
                          <td className="text-right px-4 py-3 text-gray-600">
                            <div className="flex items-center justify-end gap-1">
                              <Calendar className="w-3 h-3 text-gray-400" />
                              {invoice.dueDate}
                            </div>
                          </td>
                          <td className="text-right px-4 py-3">
                            <span className={`font-medium ${
                              (invoice.daysOverdue || 0) > 60 ? 'text-rose-600' :
                              (invoice.daysOverdue || 0) > 30 ? 'text-amber-600' :
                              'text-emerald-600'
                            }`}>
                              {invoice.daysOverdue || 0}d
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                  <p className="text-gray-600 font-medium">No invoices in this bucket</p>
                  <p className="text-sm text-gray-400 mt-1">All invoices have been collected</p>
                </div>
              )}

              {/* Action Buttons */}
              {bucketInvoices.length > 0 && (
                <div className="flex justify-end gap-3 pt-2">
                  <Button variant="outline" className="text-gray-600">
                    <Download className="w-4 h-4 mr-2" />
                    Export List
                  </Button>
                  <Button className="bg-sky-600 hover:bg-sky-700 text-white">
                    <Bell className="w-4 h-4 mr-2" />
                    Send Reminders
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Floating Bulk Action Bar */}
      {selectedInvoices.length > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-4">
            <span className="text-sm font-medium">
              {selectedInvoices.length} invoice{selectedInvoices.length > 1 ? 's' : ''} selected
            </span>
            <div className="w-px h-5 bg-gray-600" />
            <Button
              size="sm"
              className="bg-sky-500 hover:bg-sky-600 text-white h-8"
              onClick={handleBulkReminder}
            >
              <Send className="w-3.5 h-3.5 mr-1.5" />
              Send Reminders
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-gray-700 h-8"
              onClick={clearSelection}
            >
              <X className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
