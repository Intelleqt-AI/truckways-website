'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  ComposedChart,
} from 'recharts';
import { TrendingUp, TrendingDown, Truck } from 'lucide-react';
import type { RevenueTrendData } from '@/lib/dashboard-data';

interface RevenueTrendChartProps {
  data: RevenueTrendData[];
}

interface RouteBreakdown {
  route: string;
  revenue: number;
  trips: number;
  margin: number;
}

// Mock route breakdown data for drill-down
const getRouteBreakdown = (month: string, totalRevenue: number): RouteBreakdown[] => {
  // Generate consistent mock data based on month
  const routes = [
    { route: 'JHB → CT', share: 0.35, marginBase: 16 },
    { route: 'JHB → DBN', share: 0.25, marginBase: 18 },
    { route: 'CT → PE', share: 0.18, marginBase: 14 },
    { route: 'DBN → JHB', share: 0.12, marginBase: 17 },
    { route: 'Other Routes', share: 0.10, marginBase: 15 },
  ];

  return routes.map(r => ({
    route: r.route,
    revenue: Math.round(totalRevenue * r.share),
    trips: Math.round((totalRevenue * r.share) / 45000), // Avg R45K per trip
    margin: r.marginBase + (Math.random() - 0.5) * 4,
  }));
};

const chartConfig = {
  revenue: {
    label: 'Revenue',
    color: 'rgb(14, 165, 233)', // sky-500
  },
  margin: {
    label: 'Margin %',
    color: 'rgb(16, 185, 129)', // emerald-500
  },
};

export default function RevenueTrendChart({ data }: RevenueTrendChartProps) {
  const [selectedMonth, setSelectedMonth] = useState<RevenueTrendData | null>(null);
  const [routeBreakdown, setRouteBreakdown] = useState<RouteBreakdown[]>([]);

  // Format revenue for display (in millions)
  const formatRevenue = (value: number) => {
    return `R ${(value / 1000000).toFixed(1)}M`;
  };

  const formatMargin = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `R ${(value / 1000000).toFixed(2)}M`;
    }
    return `R ${(value / 1000).toFixed(0)}K`;
  };

  const handleChartClick = (data: { activePayload?: Array<{ payload: RevenueTrendData }> }) => {
    if (data.activePayload && data.activePayload.length > 0) {
      const monthData = data.activePayload[0].payload;
      setSelectedMonth(monthData);
      setRouteBreakdown(getRouteBreakdown(monthData.month, monthData.revenue));
    }
  };

  // Find previous month for comparison
  const getPreviousMonth = () => {
    if (!selectedMonth) return null;
    const currentIndex = data.findIndex(d => d.month === selectedMonth.month);
    if (currentIndex > 0) {
      return data[currentIndex - 1];
    }
    return null;
  };

  const previousMonth = getPreviousMonth();
  const revenueChange = previousMonth
    ? ((selectedMonth!.revenue - previousMonth.revenue) / previousMonth.revenue) * 100
    : 0;

  return (
    <>
      <Card className="bg-white border border-gray-200 shadow-sm h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-semibold text-gray-900">
            Revenue Trend
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            Last 12 months with margin overlay • Click for details
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-2">
          <ChartContainer config={chartConfig} className="h-[280px] w-full cursor-pointer">
            <ComposedChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              onClick={handleChartClick}
            >
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="rgb(14, 165, 233)" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="rgb(14, 165, 233)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e5e7eb"
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                dy={10}
              />
              <YAxis
                yAxisId="revenue"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
                width={50}
              />
              <YAxis
                yAxisId="margin"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => `${value}%`}
                width={40}
                domain={[0, 25]}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    formatter={(value, name) => {
                      if (name === 'revenue') {
                        return formatRevenue(value as number);
                      }
                      return formatMargin(value as number);
                    }}
                  />
                }
              />
              <Area
                yAxisId="revenue"
                type="monotone"
                dataKey="revenue"
                stroke="rgb(14, 165, 233)"
                strokeWidth={2}
                fill="url(#revenueGradient)"
                dot={false}
                activeDot={{ r: 6, strokeWidth: 2, fill: 'white', cursor: 'pointer' }}
              />
              <Line
                yAxisId="margin"
                type="monotone"
                dataKey="margin"
                stroke="rgb(16, 185, 129)"
                strokeWidth={2}
                dot={false}
                strokeDasharray="5 5"
                activeDot={{ r: 6, strokeWidth: 2, fill: 'white', cursor: 'pointer' }}
              />
            </ComposedChart>
          </ChartContainer>
          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-sky-500 rounded" />
              <span>Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-0.5 bg-emerald-500 rounded" style={{ borderStyle: 'dashed', borderWidth: '1px', borderColor: 'rgb(16, 185, 129)', backgroundColor: 'transparent' }} />
              <span>Margin %</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Drill-down Dialog */}
      <Dialog open={!!selectedMonth} onOpenChange={() => setSelectedMonth(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <span>Revenue Breakdown - {selectedMonth?.month}</span>
              {previousMonth && (
                <span className={`flex items-center gap-1 text-sm font-normal ${revenueChange >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {revenueChange >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  {revenueChange >= 0 ? '+' : ''}{revenueChange.toFixed(1)}% vs {previousMonth.month}
                </span>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedMonth && (
            <div className="space-y-6">
              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-sky-50 rounded-lg p-4 border border-sky-100">
                  <p className="text-sm text-gray-500">Total Revenue</p>
                  <p className="text-xl font-bold text-gray-900">{formatCurrency(selectedMonth.revenue)}</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                  <p className="text-sm text-gray-500">Gross Margin</p>
                  <p className="text-xl font-bold text-gray-900">{selectedMonth.margin.toFixed(1)}%</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-500">Total Trips</p>
                  <p className="text-xl font-bold text-gray-900">
                    {routeBreakdown.reduce((sum, r) => sum + r.trips, 0)}
                  </p>
                </div>
              </div>

              {/* Route Breakdown Table */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Revenue by Route</h4>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left px-4 py-2 font-medium text-gray-600">Route</th>
                        <th className="text-right px-4 py-2 font-medium text-gray-600">Revenue</th>
                        <th className="text-right px-4 py-2 font-medium text-gray-600">Trips</th>
                        <th className="text-right px-4 py-2 font-medium text-gray-600">Margin</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {routeBreakdown.map((route, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <Truck className="w-4 h-4 text-gray-400" />
                              <span className="font-medium text-gray-900">{route.route}</span>
                            </div>
                          </td>
                          <td className="text-right px-4 py-3 text-gray-900">
                            {formatCurrency(route.revenue)}
                          </td>
                          <td className="text-right px-4 py-3 text-gray-600">
                            {route.trips}
                          </td>
                          <td className="text-right px-4 py-3">
                            <span className={route.margin >= 15 ? 'text-emerald-600' : route.margin >= 10 ? 'text-amber-600' : 'text-rose-600'}>
                              {route.margin.toFixed(1)}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
