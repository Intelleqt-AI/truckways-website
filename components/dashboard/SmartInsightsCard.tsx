'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  Wallet,
  Route,
  ChevronRight,
  Lightbulb,
  Target,
} from 'lucide-react';
import type { KPIData, ROIData } from '@/lib/dashboard-data';

interface SmartInsightsCardProps {
  kpiData: KPIData;
  roiData: ROIData;
}

interface Insight {
  id: string;
  type: 'opportunity' | 'warning' | 'prediction' | 'trend';
  icon: React.ElementType;
  title: string;
  message: string;
  actionUrl: string;
  actionLabel: string;
}

// Generate insights based on current data
function generateInsights(kpiData: KPIData, roiData: ROIData): Insight[] {
  const insights: Insight[] = [];

  // Route optimization insight (always show - key value prop)
  insights.push({
    id: 'route-optimization',
    type: 'opportunity',
    icon: Route,
    title: 'Route Opportunity',
    message: 'Your JHB→DBN route has 22% higher margin than average — consider prioritizing more loads on this corridor.',
    actionUrl: '/dashboard/quotes',
    actionLabel: 'View Routes',
  });

  // Invoice risk insight based on data
  const pendingAmount = 251000; // Mock - would come from real data
  insights.push({
    id: 'invoice-risk',
    type: 'warning',
    icon: AlertTriangle,
    title: 'Invoice Alert',
    message: `3 invoices totaling R ${(pendingAmount / 1000).toFixed(0)}K are at risk of going overdue this week. Send reminders now.`,
    actionUrl: '/dashboard/finance',
    actionLabel: 'Review Invoices',
  });

  // Cash flow prediction
  const expectedInflow = kpiData.cashPosition.expectedInflow;
  insights.push({
    id: 'cash-prediction',
    type: 'prediction',
    icon: Wallet,
    title: 'Cash Forecast',
    message: `Based on payment patterns, expect R ${(expectedInflow / 1000).toFixed(0)}K inflow in the next 7 days. Current position is healthy.`,
    actionUrl: '/dashboard/finance',
    actionLabel: 'View Cash Flow',
  });

  // Performance trend based on revenue trend
  if (kpiData.revenue.trend > 0) {
    insights.push({
      id: 'performance-trend',
      type: 'trend',
      icon: TrendingUp,
      title: 'Growth Trend',
      message: `Revenue is up ${kpiData.revenue.trend}% this month — you're on track for your best quarter yet!`,
      actionUrl: '/dashboard',
      actionLabel: 'View Metrics',
    });
  }

  // ROI insight
  if (roiData.totalSavings > 100000) {
    insights.push({
      id: 'roi-insight',
      type: 'opportunity',
      icon: Target,
      title: 'Savings Milestone',
      message: `TruckWys has helped you save R ${(roiData.totalSavings / 1000).toFixed(0)}K this month through optimized pricing and faster payments.`,
      actionUrl: '/dashboard/capital',
      actionLabel: 'View Savings',
    });
  }

  // Health score insight
  if (kpiData.healthScore.value < 70) {
    insights.push({
      id: 'health-warning',
      type: 'warning',
      icon: Lightbulb,
      title: 'Health Check',
      message: 'Your fleet health score dropped below 70. Focus on improving cash flow and reducing delayed jobs.',
      actionUrl: '/dashboard',
      actionLabel: 'View Details',
    });
  }

  // Return top 4 insights
  return insights.slice(0, 4);
}

const insightStyles = {
  opportunity: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    badge: 'bg-emerald-100 text-emerald-700',
  },
  warning: {
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    badge: 'bg-rose-100 text-rose-700',
  },
  prediction: {
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    badge: 'bg-amber-100 text-amber-700',
  },
  trend: {
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    iconBg: 'bg-sky-100',
    iconColor: 'text-sky-600',
    badge: 'bg-sky-100 text-sky-700',
  },
};

export default function SmartInsightsCard({ kpiData, roiData }: SmartInsightsCardProps) {
  const insights = generateInsights(kpiData, roiData);

  return (
    <Card className="bg-gradient-to-r from-violet-50 via-purple-50 to-fuchsia-50 border border-purple-100 shadow-sm">
      <CardContent className="p-5">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Smart Insights</h3>
            <p className="text-xs text-gray-500">AI-powered recommendations</p>
          </div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {insights.map((insight) => {
            const styles = insightStyles[insight.type];
            const Icon = insight.icon;

            return (
              <Link
                key={insight.id}
                href={insight.actionUrl}
                className={`block p-3 rounded-lg border ${styles.bg} ${styles.border} hover:shadow-md transition-all group`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg ${styles.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${styles.iconColor}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${styles.badge}`}>
                        {insight.title}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 leading-snug">
                      {insight.message}
                    </p>
                    <div className="flex items-center gap-1 mt-2 text-xs font-medium text-gray-500 group-hover:text-gray-700 transition-colors">
                      {insight.actionLabel}
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
