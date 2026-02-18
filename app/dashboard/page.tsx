'use client';

import { TrendingUp, Percent, Wallet, Truck, RefreshCw, Settings2, BarChart3, Bell, Target } from 'lucide-react';
import KPICard from '@/components/dashboard/KPICard';
import HealthScoreCard from '@/components/dashboard/HealthScoreCard';
import AlertsFeed from '@/components/dashboard/AlertsFeed';
import RevenueTrendChart from '@/components/dashboard/RevenueTrendChart';
import ROICard from '@/components/dashboard/ROICard';
import SmartInsightsCard from '@/components/dashboard/SmartInsightsCard';
import DashboardCustomizer from '@/components/dashboard/DashboardCustomizer';
import DateRangeSelector from '@/components/dashboard/DateRangeSelector';
import SwipeableCard from '@/components/dashboard/SwipeableCard';
import CollapsibleSection from '@/components/dashboard/CollapsibleSection';
import { generate7DayTrend } from '@/components/dashboard/Sparkline';
import { formatCurrency, formatPercentage } from '@/lib/dashboard-data';
import { useDashboardData } from '@/hooks/useDashboardData';
import { useAlertNotifications } from '@/hooks/useAlertNotifications';
import { useDashboardLayout } from '@/hooks/useDashboardLayout';
import { useDateRange } from '@/hooks/useDateRange';
import { useIsMobile } from '@/hooks/useIsMobile';

// Helper to format "seconds ago" / "minutes ago"
function getLastUpdatedText(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSeconds = Math.floor(diffMs / 1000);

  if (diffSeconds < 5) {
    return 'Just now';
  }
  if (diffSeconds < 60) {
    return `${diffSeconds}s ago`;
  }
  const diffMinutes = Math.floor(diffSeconds / 60);
  return `${diffMinutes}m ago`;
}

export default function DashboardPage() {
  const { kpiData, alerts, revenueTrend, roiData, isRefreshing, lastUpdated, refresh } =
    useDashboardData(30000); // Refresh every 30 seconds

  // Dashboard layout customization
  const {
    currentLayout,
    layouts,
    isCustomizing,
    setIsCustomizing,
    toggleWidget,
    reorderWidgets,
    selectLayout,
    saveCurrentLayout,
    deleteLayout,
    resetToDefault,
    isWidgetVisible,
  } = useDashboardLayout();

  // Enable toast notifications for new alerts
  useAlertNotifications(alerts);

  // Date range filtering
  const {
    selectedPeriod,
    dateRange,
    comparisonEnabled,
    comparisonLabel,
    displayLabel,
    setPeriod,
    setCustomRange,
    toggleComparison,
  } = useDateRange();

  // Mobile detection
  const isMobile = useIsMobile();

  const currentDate = new Date().toLocaleDateString('en-ZA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h1 className="text-2xl font-bold text-gray-900">Executive Overview</h1>

          {/* Live Indicator */}
          <div className="flex items-center gap-2 px-2.5 py-1 bg-emerald-50 rounded-full border border-emerald-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-emerald-700">Live</span>
          </div>

          {/* Refresh Button */}
          <button
            onClick={refresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            Refresh
          </button>

          {/* Customize Button */}
          <button
            onClick={() => setIsCustomizing(true)}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Settings2 className="w-3.5 h-3.5" />
            Customize
          </button>

          {/* Date Range Selector */}
          <DateRangeSelector
            selectedPeriod={selectedPeriod}
            dateRange={dateRange}
            displayLabel={displayLabel}
            comparisonEnabled={comparisonEnabled}
            comparisonLabel={comparisonLabel}
            onPeriodChange={setPeriod}
            onCustomRangeChange={setCustomRange}
            onToggleComparison={toggleComparison}
          />
        </div>

        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm text-gray-500">{currentDate}</p>
          <span className="text-gray-300">•</span>
          <p className="text-xs text-gray-400">
            Updated {getLastUpdatedText(lastUpdated)}
          </p>
        </div>
      </div>

      {/* KPI Cards - Mobile: Swipeable, Desktop: Grid */}
      <div className={`mb-6 transition-opacity duration-300 ${isRefreshing ? 'opacity-70' : 'opacity-100'}`}>
        {/* Mobile Swipeable View */}
        {isMobile ? (
          <SwipeableCard showIndicators={true}>
            {isWidgetVisible('health-score') && (
              <HealthScoreCard
                score={kpiData.healthScore.value}
                trend={kpiData.healthScore.trend}
                breakdown={kpiData.healthScore.breakdown}
              />
            )}
            {isWidgetVisible('revenue-mtd') && (
              <KPICard
                title="Revenue MTD"
                value={formatCurrency(kpiData.revenue.value, kpiData.revenue.currency)}
                trend={kpiData.revenue.trend}
                icon={TrendingUp}
                isRefreshing={isRefreshing}
                sparklineData={generate7DayTrend(kpiData.revenue.value, 0.08)}
              />
            )}
            {isWidgetVisible('gross-margin') && (
              <KPICard
                title="Gross Margin"
                value={formatPercentage(kpiData.margin.value)}
                trend={kpiData.margin.trend}
                trendLabel=" pts"
                icon={Percent}
                isRefreshing={isRefreshing}
                sparklineData={generate7DayTrend(kpiData.margin.value, 0.05)}
              />
            )}
            {isWidgetVisible('cash-position') && (
              <KPICard
                title="Cash Position"
                value={formatCurrency(kpiData.cashPosition.value, kpiData.cashPosition.currency)}
                icon={Wallet}
                subtitle={`+${formatCurrency(kpiData.cashPosition.expectedInflow, kpiData.cashPosition.currency)} expected (7d)`}
                isRefreshing={isRefreshing}
                sparklineData={generate7DayTrend(kpiData.cashPosition.value, 0.1)}
              />
            )}
            {isWidgetVisible('active-jobs') && (
              <KPICard
                title="Active Jobs"
                value={kpiData.activeJobs.value.toString()}
                icon={Truck}
                subtitle={kpiData.activeJobs.delayed > 0 ? `${kpiData.activeJobs.delayed} delayed` : 'All on track'}
                isRefreshing={isRefreshing}
                sparklineData={generate7DayTrend(kpiData.activeJobs.value, 0.15)}
                target={20}
                current={kpiData.activeJobs.value}
              />
            )}
          </SwipeableCard>
        ) : (
          /* Desktop Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {isWidgetVisible('health-score') && (
              <div className="sm:col-span-2 lg:col-span-1">
                <HealthScoreCard
                  score={kpiData.healthScore.value}
                  trend={kpiData.healthScore.trend}
                  breakdown={kpiData.healthScore.breakdown}
                />
              </div>
            )}
            {isWidgetVisible('revenue-mtd') && (
              <KPICard
                title="Revenue MTD"
                value={formatCurrency(kpiData.revenue.value, kpiData.revenue.currency)}
                trend={kpiData.revenue.trend}
                icon={TrendingUp}
                isRefreshing={isRefreshing}
                sparklineData={generate7DayTrend(kpiData.revenue.value, 0.08)}
              />
            )}
            {isWidgetVisible('gross-margin') && (
              <KPICard
                title="Gross Margin"
                value={formatPercentage(kpiData.margin.value)}
                trend={kpiData.margin.trend}
                trendLabel=" pts"
                icon={Percent}
                isRefreshing={isRefreshing}
                sparklineData={generate7DayTrend(kpiData.margin.value, 0.05)}
              />
            )}
            {isWidgetVisible('cash-position') && (
              <KPICard
                title="Cash Position"
                value={formatCurrency(kpiData.cashPosition.value, kpiData.cashPosition.currency)}
                icon={Wallet}
                subtitle={`+${formatCurrency(kpiData.cashPosition.expectedInflow, kpiData.cashPosition.currency)} expected (7d)`}
                isRefreshing={isRefreshing}
                sparklineData={generate7DayTrend(kpiData.cashPosition.value, 0.1)}
              />
            )}
            {isWidgetVisible('active-jobs') && (
              <KPICard
                title="Active Jobs"
                value={kpiData.activeJobs.value.toString()}
                icon={Truck}
                subtitle={kpiData.activeJobs.delayed > 0 ? `${kpiData.activeJobs.delayed} delayed` : 'All on track'}
                isRefreshing={isRefreshing}
                sparklineData={generate7DayTrend(kpiData.activeJobs.value, 0.15)}
                target={20}
                current={kpiData.activeJobs.value}
              />
            )}
          </div>
        )}
      </div>

      {/* Smart Insights Card - Collapsible on Mobile */}
      {isWidgetVisible('smart-insights') && (
        <CollapsibleSection
          title="Smart Insights"
          icon={<Target className="w-4 h-4" />}
          defaultExpanded={true}
          className={`mb-6 transition-opacity duration-300 ${isRefreshing ? 'opacity-70' : 'opacity-100'}`}
        >
          <SmartInsightsCard kpiData={kpiData} roiData={roiData} />
        </CollapsibleSection>
      )}

      {/* Main Content Row - Chart and Alerts */}
      {(isWidgetVisible('revenue-chart') || isWidgetVisible('alerts-feed')) && (
        <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6 mb-6">
          {/* Revenue Trend Chart - Collapsible on Mobile */}
          {isWidgetVisible('revenue-chart') && (
            <CollapsibleSection
              title="Revenue Trend"
              icon={<BarChart3 className="w-4 h-4" />}
              defaultExpanded={true}
              className={isWidgetVisible('alerts-feed') ? 'lg:col-span-2' : 'lg:col-span-3'}
            >
              <RevenueTrendChart data={revenueTrend} />
            </CollapsibleSection>
          )}

          {/* Alerts Feed - Collapsible on Mobile */}
          {isWidgetVisible('alerts-feed') && (
            <CollapsibleSection
              title="Alerts"
              icon={<Bell className="w-4 h-4" />}
              badge={alerts.length}
              defaultExpanded={false}
              className={isWidgetVisible('revenue-chart') ? 'lg:col-span-1' : 'lg:col-span-3'}
            >
              <AlertsFeed alerts={alerts} maxAlerts={4} />
            </CollapsibleSection>
          )}
        </div>
      )}

      {/* ROI Card - Collapsible on Mobile */}
      {isWidgetVisible('roi-card') && (
        <CollapsibleSection
          title="ROI Summary"
          icon={<TrendingUp className="w-4 h-4" />}
          defaultExpanded={false}
        >
          <ROICard data={roiData} />
        </CollapsibleSection>
      )}

      {/* Dashboard Customizer Dialog */}
      <DashboardCustomizer
        currentLayout={currentLayout}
        layouts={layouts}
        isOpen={isCustomizing}
        onOpenChange={setIsCustomizing}
        onToggleWidget={toggleWidget}
        onReorderWidgets={reorderWidgets}
        onSelectLayout={selectLayout}
        onSaveLayout={saveCurrentLayout}
        onDeleteLayout={deleteLayout}
        onResetToDefault={resetToDefault}
      />
    </div>
  );
}
