'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  TrendingUp,
  Target,
  Percent,
  FileText,
  Clock,
  MapPin,
  Building2,
  GripVertical,
  Plus,
} from 'lucide-react';
import { toast } from 'sonner';

// Quote status types
type QuoteStatus = 'draft' | 'quoted' | 'negotiating' | 'accepted' | 'booked';

interface Quote {
  id: string;
  customer: string;
  route: string;
  amount: number;
  margin: number;
  status: QuoteStatus;
  createdAt: string;
  priority: 'high' | 'medium' | 'low';
}

// Initial mock quotes data
const initialQuotes: Quote[] = [
  // Draft
  { id: 'Q-001', customer: 'Pick n Pay', route: 'JHB → CPT', amount: 85000, margin: 12.5, status: 'draft', createdAt: '2026-02-01', priority: 'medium' },
  { id: 'Q-002', customer: 'Massmart', route: 'DBN → JHB', amount: 42000, margin: 16.2, status: 'draft', createdAt: '2026-02-02', priority: 'low' },
  { id: 'Q-003', customer: 'Tiger Brands', route: 'PTA → EL', amount: 68000, margin: 8.5, status: 'draft', createdAt: '2026-01-31', priority: 'high' },

  // Quoted
  { id: 'Q-004', customer: 'Shoprite', route: 'JHB → DBN', amount: 45000, margin: 18.5, status: 'quoted', createdAt: '2026-01-30', priority: 'high' },
  { id: 'Q-005', customer: 'Woolworths', route: 'CPT → PE', amount: 52000, margin: 15.3, status: 'quoted', createdAt: '2026-01-29', priority: 'medium' },
  { id: 'Q-006', customer: 'Clicks', route: 'JHB → BFN', amount: 38000, margin: 19.8, status: 'quoted', createdAt: '2026-01-28', priority: 'low' },
  { id: 'Q-007', customer: 'Dischem', route: 'PTA → DBN', amount: 61000, margin: 14.2, status: 'quoted', createdAt: '2026-01-27', priority: 'medium' },
  { id: 'Q-008', customer: 'Makro', route: 'JHB → CPT', amount: 95000, margin: 11.5, status: 'quoted', createdAt: '2026-01-26', priority: 'high' },

  // Negotiating
  { id: 'Q-009', customer: 'Spar Group', route: 'DBN → JHB', amount: 48000, margin: 17.1, status: 'negotiating', createdAt: '2026-01-25', priority: 'high' },
  { id: 'Q-010', customer: 'Checkers', route: 'CPT → JHB', amount: 78000, margin: 13.8, status: 'negotiating', createdAt: '2026-01-24', priority: 'medium' },
  { id: 'Q-011', customer: 'Game', route: 'PTA → CPT', amount: 112000, margin: 16.5, status: 'negotiating', createdAt: '2026-01-23', priority: 'high' },
  { id: 'Q-012', customer: 'Builders', route: 'JHB → PE', amount: 55000, margin: 9.2, status: 'negotiating', createdAt: '2026-01-22', priority: 'low' },

  // Accepted
  { id: 'Q-013', customer: 'Coca-Cola', route: 'JHB → DBN', amount: 89000, margin: 21.3, status: 'accepted', createdAt: '2026-01-20', priority: 'high' },
  { id: 'Q-014', customer: 'SAB Miller', route: 'PTA → CPT', amount: 145000, margin: 18.9, status: 'accepted', createdAt: '2026-01-19', priority: 'high' },

  // Booked
  { id: 'Q-015', customer: 'Unilever', route: 'DBN → JHB', amount: 67000, margin: 17.4, status: 'booked', createdAt: '2026-01-18', priority: 'medium' },
  { id: 'Q-016', customer: 'Nestle', route: 'JHB → CPT', amount: 92000, margin: 19.2, status: 'booked', createdAt: '2026-01-17', priority: 'low' },
  { id: 'Q-017', customer: 'Pioneer Foods', route: 'CPT → PE', amount: 43000, margin: 15.8, status: 'booked', createdAt: '2026-01-16', priority: 'medium' },
  { id: 'Q-018', customer: 'RCL Foods', route: 'DBN → BFN', amount: 58000, margin: 14.6, status: 'booked', createdAt: '2026-01-15', priority: 'low' },
  { id: 'Q-019', customer: 'AVI Limited', route: 'JHB → DBN', amount: 71000, margin: 20.1, status: 'booked', createdAt: '2026-01-14', priority: 'high' },
  { id: 'Q-020', customer: 'Clover', route: 'PTA → JHB', amount: 36000, margin: 16.7, status: 'booked', createdAt: '2026-01-13', priority: 'low' },
  { id: 'Q-021', customer: 'Distell', route: 'CPT → JHB', amount: 125000, margin: 22.4, status: 'booked', createdAt: '2026-01-12', priority: 'high' },
  { id: 'Q-022', customer: 'Famous Brands', route: 'JHB → EL', amount: 49000, margin: 13.9, status: 'booked', createdAt: '2026-01-11', priority: 'medium' },
];

// Pipeline columns config
const columns: { key: QuoteStatus; label: string; color: string }[] = [
  { key: 'draft', label: 'Draft', color: 'bg-gray-100' },
  { key: 'quoted', label: 'Quoted', color: 'bg-sky-50' },
  { key: 'negotiating', label: 'Negotiating', color: 'bg-amber-50' },
  { key: 'accepted', label: 'Accepted', color: 'bg-emerald-50' },
  { key: 'booked', label: 'Booked', color: 'bg-emerald-100' },
];

// Recent jobs for quick quote creation
interface RecentJob {
  id: string;
  customer: string;
  route: string;
  lastAmount: number;
  lastMargin: number;
  completedDate: string;
}

const recentJobs: RecentJob[] = [
  { id: 'JOB-101', customer: 'Shoprite', route: 'JHB → DBN', lastAmount: 45000, lastMargin: 18.5, completedDate: '2026-01-28' },
  { id: 'JOB-102', customer: 'Woolworths', route: 'CPT → PE', lastAmount: 52000, lastMargin: 15.3, completedDate: '2026-01-26' },
  { id: 'JOB-103', customer: 'Pick n Pay', route: 'JHB → CPT', lastAmount: 85000, lastMargin: 12.5, completedDate: '2026-01-24' },
  { id: 'JOB-104', customer: 'Checkers', route: 'DBN → JHB', lastAmount: 38000, lastMargin: 19.8, completedDate: '2026-01-22' },
  { id: 'JOB-105', customer: 'Makro', route: 'PTA → CPT', lastAmount: 112000, lastMargin: 16.5, completedDate: '2026-01-20' },
  { id: 'JOB-106', customer: 'Coca-Cola', route: 'JHB → DBN', lastAmount: 89000, lastMargin: 21.3, completedDate: '2026-01-18' },
];

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `R ${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `R ${(value / 1000).toFixed(0)}K`;
  }
  return `R ${value.toFixed(0)}`;
}

function getMarginColor(margin: number): string {
  if (margin >= 15) return 'bg-emerald-100 text-emerald-700';
  if (margin >= 10) return 'bg-amber-100 text-amber-700';
  return 'bg-rose-100 text-rose-700';
}

function getDaysAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return '1 day ago';
  return `${diffDays} days ago`;
}

interface QuoteCardProps {
  quote: Quote;
  onDragStart: (e: React.DragEvent, quoteId: string) => void;
}

function QuoteCard({ quote, onDragStart }: QuoteCardProps) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, quote.id)}
      className={`bg-white rounded-lg border border-gray-200 p-3 shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing active:shadow-lg active:scale-[1.02] ${
        quote.priority === 'high' ? 'border-l-4 border-l-amber-400' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <GripVertical className="w-4 h-4 text-gray-300" />
          <Building2 className="w-4 h-4 text-gray-400" />
          <span className="font-semibold text-sm text-gray-900">{quote.customer}</span>
        </div>
        <span className="text-xs text-gray-400">{quote.id}</span>
      </div>

      <div className="flex items-center gap-1 text-xs text-gray-500 mb-2 ml-6">
        <MapPin className="w-3 h-3" />
        <span>{quote.route}</span>
      </div>

      <div className="flex items-center justify-between ml-6">
        <span className="font-bold text-gray-900">{formatCurrency(quote.amount)}</span>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getMarginColor(quote.margin)}`}>
          {quote.margin.toFixed(1)}%
        </span>
      </div>

      <div className="flex items-center gap-1 text-xs text-gray-400 mt-2 ml-6">
        <Clock className="w-3 h-3" />
        <span>{getDaysAgo(quote.createdAt)}</span>
      </div>
    </div>
  );
}

interface KanbanColumnProps {
  column: typeof columns[0];
  columnQuotes: Quote[];
  onDragStart: (e: React.DragEvent, quoteId: string) => void;
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, status: QuoteStatus) => void;
  isDragOver: boolean;
}

function KanbanColumn({ column, columnQuotes, onDragStart, onDragOver, onDrop, isDragOver }: KanbanColumnProps) {
  const columnValue = columnQuotes.reduce((sum, q) => sum + q.amount, 0);

  return (
    <div className="flex-1 min-w-[220px]">
      <div className={`${column.color} rounded-t-lg px-3 py-2 border border-gray-200 border-b-0`}>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-sm text-gray-700">{column.label}</h3>
          <span className="bg-white px-2 py-0.5 rounded-full text-xs font-medium text-gray-600">
            {columnQuotes.length}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1">{formatCurrency(columnValue)}</p>
      </div>
      <div
        onDragOver={onDragOver}
        onDrop={(e) => onDrop(e, column.key)}
        className={`rounded-b-lg border border-gray-200 border-t-0 p-2 min-h-[400px] space-y-2 transition-colors ${
          isDragOver ? 'bg-sky-50 border-sky-300 border-2 border-dashed' : 'bg-gray-50'
        }`}
      >
        {columnQuotes.map(quote => (
          <QuoteCard key={quote.id} quote={quote} onDragStart={onDragStart} />
        ))}
        {columnQuotes.length === 0 && (
          <div className="flex items-center justify-center h-20 text-xs text-gray-400">
            Drop quotes here
          </div>
        )}
      </div>
    </div>
  );
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes);
  const [draggedQuoteId, setDraggedQuoteId] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<QuoteStatus | null>(null);
  const [showCreateQuote, setShowCreateQuote] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState<string>('');
  const [quoteAmount, setQuoteAmount] = useState<string>('');
  const [quoteMargin, setQuoteMargin] = useState<string>('');

  // Get selected job details
  const selectedJob = recentJobs.find(j => j.id === selectedJobId);

  // Handle job selection - pre-fill form
  const handleJobSelect = (jobId: string) => {
    setSelectedJobId(jobId);
    const job = recentJobs.find(j => j.id === jobId);
    if (job) {
      setQuoteAmount(job.lastAmount.toString());
      setQuoteMargin(job.lastMargin.toString());
    }
  };

  // Create new quote
  const handleCreateQuote = () => {
    if (!selectedJob) return;

    const newQuote: Quote = {
      id: `Q-${String(quotes.length + 1).padStart(3, '0')}`,
      customer: selectedJob.customer,
      route: selectedJob.route,
      amount: parseFloat(quoteAmount) || selectedJob.lastAmount,
      margin: parseFloat(quoteMargin) || selectedJob.lastMargin,
      status: 'draft',
      createdAt: new Date().toISOString().split('T')[0],
      priority: 'medium',
    };

    setQuotes(prev => [newQuote, ...prev]);

    toast.success('Quote created', {
      description: `${newQuote.id} for ${selectedJob.customer} - ${selectedJob.route}`,
    });

    // Reset form
    setShowCreateQuote(false);
    setSelectedJobId('');
    setQuoteAmount('');
    setQuoteMargin('');
  };

  // Calculate metrics from current quotes state
  const pipelineValue = quotes.reduce((sum, q) => sum + q.amount, 0);
  const bookedQuotes = quotes.filter(q => q.status === 'booked');
  const conversionRate = Math.round((bookedQuotes.length / quotes.length) * 100);
  const avgMargin = quotes.reduce((sum, q) => sum + q.margin, 0) / quotes.length;
  const quotesThisWeek = quotes.filter(q => {
    const created = new Date(q.createdAt);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return created >= weekAgo;
  }).length;

  const handleDragStart = (e: React.DragEvent, quoteId: string) => {
    setDraggedQuoteId(quoteId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent, status: QuoteStatus) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setDragOverColumn(status);
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  };

  const handleDrop = (e: React.DragEvent, newStatus: QuoteStatus) => {
    e.preventDefault();

    if (draggedQuoteId) {
      setQuotes(prevQuotes =>
        prevQuotes.map(quote =>
          quote.id === draggedQuoteId
            ? { ...quote, status: newStatus }
            : quote
        )
      );
    }

    setDraggedQuoteId(null);
    setDragOverColumn(null);
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-full mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quotes & Bookings</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your quote pipeline from inquiry to confirmed booking
          </p>
        </div>
        <Button
          className="mt-4 sm:mt-0 text-white"
          style={{ background: 'linear-gradient(135deg, rgb(16, 185, 129) 0%, rgb(5, 150, 105) 100%)' }}
          onClick={() => setShowCreateQuote(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Quote
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Pipeline Value */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-sky-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Pipeline Value</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {formatCurrency(pipelineValue)}
            </p>
            <p className="text-xs text-gray-400 mt-1">Total value of all quotes</p>
          </CardContent>
        </Card>

        {/* Conversion Rate */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Conversion Rate</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{conversionRate}%</p>
            <p className="text-xs text-gray-400 mt-1">Quotes to bookings</p>
          </CardContent>
        </Card>

        {/* Average Margin */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                <Percent className="w-5 h-5 text-sky-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Average Margin</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{avgMargin.toFixed(1)}%</p>
            <p className="text-xs text-gray-400 mt-1">Across all quotes</p>
          </CardContent>
        </Card>

        {/* Quotes This Week */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                <FileText className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Quotes This Week</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">{quotesThisWeek}</p>
            <p className="text-xs text-gray-400 mt-1">New quotes created</p>
          </CardContent>
        </Card>
      </div>

      {/* Kanban Pipeline */}
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quote Pipeline</h2>
        <p className="text-xs text-gray-500 mb-4">Drag and drop cards to move quotes between stages</p>
      </div>

      <div className="overflow-x-auto pb-4" onDragLeave={handleDragLeave}>
        <div className="flex gap-4 min-w-max">
          {columns.map(column => {
            const columnQuotes = quotes.filter(q => q.status === column.key);
            return (
              <KanbanColumn
                key={column.key}
                column={column}
                columnQuotes={columnQuotes}
                onDragStart={handleDragStart}
                onDragOver={(e) => handleDragOver(e, column.key)}
                onDrop={handleDrop}
                isDragOver={dragOverColumn === column.key}
              />
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 border-l-4 border-l-amber-400 bg-white rounded"></div>
          <span>High Priority</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-emerald-100"></div>
          <span>Margin &gt; 15%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-amber-100"></div>
          <span>Margin 10-15%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-rose-100"></div>
          <span>Margin &lt; 10%</span>
        </div>
      </div>

      {/* Create Quote Dialog */}
      <Dialog open={showCreateQuote} onOpenChange={setShowCreateQuote}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Plus className="w-5 h-5 text-emerald-600" />
              Create New Quote
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 pt-2">
            {/* Job Selection */}
            <div className="space-y-2">
              <Label htmlFor="job-select">Select from recent jobs</Label>
              <Select value={selectedJobId} onValueChange={handleJobSelect}>
                <SelectTrigger id="job-select" className="w-full">
                  <SelectValue placeholder="Choose a recent job to pre-fill..." />
                </SelectTrigger>
                <SelectContent>
                  {recentJobs.map(job => (
                    <SelectItem key={job.id} value={job.id}>
                      {job.customer} - {job.route}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Pre-filled details */}
            {selectedJob && (
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Customer</span>
                  <span className="font-medium text-gray-900">{selectedJob.customer}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Route</span>
                  <span className="font-medium text-gray-900">{selectedJob.route}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Last Job</span>
                  <span className="text-xs text-gray-400">{selectedJob.completedDate}</span>
                </div>
              </div>
            )}

            {/* Editable fields */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Quote Amount (R)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0"
                  value={quoteAmount}
                  onChange={(e) => setQuoteAmount(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="margin">Target Margin (%)</Label>
                <Input
                  id="margin"
                  type="number"
                  step="0.1"
                  placeholder="0"
                  value={quoteMargin}
                  onChange={(e) => setQuoteMargin(e.target.value)}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowCreateQuote(false);
                  setSelectedJobId('');
                  setQuoteAmount('');
                  setQuoteMargin('');
                }}
              >
                Cancel
              </Button>
              <Button
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
                onClick={handleCreateQuote}
                disabled={!selectedJob}
              >
                <Plus className="w-4 h-4 mr-1" />
                Create Quote
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
