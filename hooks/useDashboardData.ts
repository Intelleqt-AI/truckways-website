'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import {
  mockKPIData,
  mockAlerts,
  mockRevenueTrend,
  mockROIData,
  type KPIData,
  type Alert,
  type RevenueTrendData,
  type ROIData,
} from '@/lib/dashboard-data';

interface UseDashboardDataReturn {
  kpiData: KPIData;
  alerts: Alert[];
  revenueTrend: RevenueTrendData[];
  roiData: ROIData;
  isRefreshing: boolean;
  lastUpdated: Date;
  refresh: () => void;
}

// Helper to add small random variations to simulate real-time changes
function addVariation(value: number, maxPercent: number = 2): number {
  const variation = (Math.random() - 0.5) * 2 * (maxPercent / 100);
  return Math.round(value * (1 + variation));
}

// Simulate fetching new data (in production, this would be an API call)
function simulateDataFetch(baseKPI: KPIData, baseROI: ROIData): { kpi: KPIData; roi: ROIData } {
  return {
    kpi: {
      healthScore: {
        value: Math.min(100, Math.max(0, baseKPI.healthScore.value + Math.round((Math.random() - 0.5) * 4))),
        trend: baseKPI.healthScore.trend,
        breakdown: {
          cashFlow: Math.min(100, Math.max(0, baseKPI.healthScore.breakdown.cashFlow + Math.round((Math.random() - 0.5) * 3))),
          margin: Math.min(100, Math.max(0, baseKPI.healthScore.breakdown.margin + Math.round((Math.random() - 0.5) * 3))),
          efficiency: Math.min(100, Math.max(0, baseKPI.healthScore.breakdown.efficiency + Math.round((Math.random() - 0.5) * 3))),
        },
      },
      revenue: {
        value: addVariation(baseKPI.revenue.value, 1),
        trend: baseKPI.revenue.trend,
        currency: baseKPI.revenue.currency,
      },
      margin: {
        value: Math.round((baseKPI.margin.value + (Math.random() - 0.5) * 0.5) * 10) / 10,
        trend: baseKPI.margin.trend,
      },
      cashPosition: {
        value: addVariation(baseKPI.cashPosition.value, 1),
        expectedInflow: baseKPI.cashPosition.expectedInflow,
        currency: baseKPI.cashPosition.currency,
      },
      activeJobs: {
        value: baseKPI.activeJobs.value + Math.round((Math.random() - 0.5) * 2),
        delayed: Math.max(0, baseKPI.activeJobs.delayed + Math.round((Math.random() - 0.5) * 2)),
      },
    },
    roi: {
      totalSavings: addVariation(baseROI.totalSavings, 1),
      currency: baseROI.currency,
      breakdown: {
        pricingOptimization: addVariation(baseROI.breakdown.pricingOptimization, 1),
        fasterPayments: addVariation(baseROI.breakdown.fasterPayments, 1),
        reducedEmptyKm: addVariation(baseROI.breakdown.reducedEmptyKm, 1),
      },
    },
  };
}

// Randomly generate a new alert occasionally
function maybeGenerateNewAlert(existingAlerts: Alert[]): Alert[] {
  // 20% chance to generate a new alert on each refresh
  if (Math.random() > 0.2) {
    return existingAlerts;
  }

  const severities: Alert['severity'][] = ['critical', 'high', 'medium', 'info'];

  const newAlertTemplates = [
    { type: 'overdue_invoice' as const, title: 'New overdue invoice', description: 'Invoice needs attention', actionUrl: '/dashboard/finance' },
    { type: 'margin_erosion' as const, title: 'Margin alert on route', description: 'Margin below target threshold', actionUrl: '/dashboard/quotes' },
    { type: 'driver_idle' as const, title: 'Driver waiting', description: 'No assignment for extended period', actionUrl: '/dashboard/quotes' },
    { type: 'quote_aging' as const, title: 'Quote needs follow-up', description: 'Pending response from customer', actionUrl: '/dashboard/quotes' },
    { type: 'cash_warning' as const, title: 'Cash flow alert', description: 'Review your cash position', actionUrl: '/dashboard/finance' },
  ];

  const template = newAlertTemplates[Math.floor(Math.random() * newAlertTemplates.length)];
  const severity = severities[Math.floor(Math.random() * 3)]; // Bias toward more severe

  const newAlert: Alert = {
    id: `new-${Date.now()}`,
    type: template.type,
    severity,
    title: template.title,
    description: template.description,
    actionUrl: template.actionUrl,
    createdAt: new Date(),
  };

  // Add new alert at the beginning, keep max 6 alerts
  return [newAlert, ...existingAlerts].slice(0, 6);
}

export function useDashboardData(refreshInterval: number = 30000): UseDashboardDataReturn {
  const [kpiData, setKpiData] = useState<KPIData>(mockKPIData);
  const [alerts, setAlerts] = useState<Alert[]>(mockAlerts);
  const [revenueTrend] = useState<RevenueTrendData[]>(mockRevenueTrend);
  const [roiData, setRoiData] = useState<ROIData>(mockROIData);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const refresh = useCallback(() => {
    setIsRefreshing(true);

    // Simulate API delay
    setTimeout(() => {
      const { kpi, roi } = simulateDataFetch(kpiData, roiData);
      setKpiData(kpi);
      setRoiData(roi);
      setAlerts(prevAlerts => maybeGenerateNewAlert(prevAlerts));
      setLastUpdated(new Date());
      setIsRefreshing(false);
    }, 500);
  }, [kpiData, roiData]);

  useEffect(() => {
    // Set up auto-refresh interval
    intervalRef.current = setInterval(refresh, refreshInterval);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [refresh, refreshInterval]);

  return {
    kpiData,
    alerts,
    revenueTrend,
    roiData,
    isRefreshing,
    lastUpdated,
    refresh,
  };
}
