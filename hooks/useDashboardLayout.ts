'use client';

import { useState, useEffect, useCallback } from 'react';

// Widget types available on dashboard
export type WidgetId =
  | 'health-score'
  | 'revenue-mtd'
  | 'gross-margin'
  | 'cash-position'
  | 'active-jobs'
  | 'smart-insights'
  | 'revenue-chart'
  | 'alerts-feed'
  | 'roi-card';

export interface Widget {
  id: WidgetId;
  label: string;
  visible: boolean;
  order: number;
}

export interface DashboardLayout {
  id: string;
  name: string;
  widgets: Widget[];
  isDefault?: boolean;
}

// Default widget configurations
const defaultWidgets: Widget[] = [
  { id: 'health-score', label: 'Health Score', visible: true, order: 0 },
  { id: 'revenue-mtd', label: 'Revenue MTD', visible: true, order: 1 },
  { id: 'gross-margin', label: 'Gross Margin', visible: true, order: 2 },
  { id: 'cash-position', label: 'Cash Position', visible: true, order: 3 },
  { id: 'active-jobs', label: 'Active Jobs', visible: true, order: 4 },
  { id: 'smart-insights', label: 'Smart Insights', visible: true, order: 5 },
  { id: 'revenue-chart', label: 'Revenue Chart', visible: true, order: 6 },
  { id: 'alerts-feed', label: 'Alerts Feed', visible: true, order: 7 },
  { id: 'roi-card', label: 'ROI Summary', visible: true, order: 8 },
];

// Preset layouts
const presetLayouts: DashboardLayout[] = [
  {
    id: 'default',
    name: 'Full Overview',
    isDefault: true,
    widgets: [...defaultWidgets],
  },
  {
    id: 'daily',
    name: 'Daily View',
    widgets: [
      { id: 'health-score', label: 'Health Score', visible: true, order: 0 },
      { id: 'revenue-mtd', label: 'Revenue MTD', visible: true, order: 1 },
      { id: 'active-jobs', label: 'Active Jobs', visible: true, order: 2 },
      { id: 'gross-margin', label: 'Gross Margin', visible: false, order: 3 },
      { id: 'cash-position', label: 'Cash Position', visible: false, order: 4 },
      { id: 'smart-insights', label: 'Smart Insights', visible: true, order: 5 },
      { id: 'revenue-chart', label: 'Revenue Chart', visible: false, order: 6 },
      { id: 'alerts-feed', label: 'Alerts Feed', visible: true, order: 7 },
      { id: 'roi-card', label: 'ROI Summary', visible: false, order: 8 },
    ],
  },
  {
    id: 'weekly',
    name: 'Weekly Review',
    widgets: [
      { id: 'health-score', label: 'Health Score', visible: true, order: 0 },
      { id: 'revenue-mtd', label: 'Revenue MTD', visible: true, order: 1 },
      { id: 'gross-margin', label: 'Gross Margin', visible: true, order: 2 },
      { id: 'cash-position', label: 'Cash Position', visible: true, order: 3 },
      { id: 'active-jobs', label: 'Active Jobs', visible: false, order: 4 },
      { id: 'smart-insights', label: 'Smart Insights', visible: false, order: 5 },
      { id: 'revenue-chart', label: 'Revenue Chart', visible: true, order: 6 },
      { id: 'alerts-feed', label: 'Alerts Feed', visible: false, order: 7 },
      { id: 'roi-card', label: 'ROI Summary', visible: true, order: 8 },
    ],
  },
  {
    id: 'financial',
    name: 'Financial Focus',
    widgets: [
      { id: 'health-score', label: 'Health Score', visible: false, order: 0 },
      { id: 'revenue-mtd', label: 'Revenue MTD', visible: true, order: 1 },
      { id: 'gross-margin', label: 'Gross Margin', visible: true, order: 2 },
      { id: 'cash-position', label: 'Cash Position', visible: true, order: 3 },
      { id: 'active-jobs', label: 'Active Jobs', visible: false, order: 4 },
      { id: 'smart-insights', label: 'Smart Insights', visible: true, order: 5 },
      { id: 'revenue-chart', label: 'Revenue Chart', visible: true, order: 6 },
      { id: 'alerts-feed', label: 'Alerts Feed', visible: false, order: 7 },
      { id: 'roi-card', label: 'ROI Summary', visible: true, order: 8 },
    ],
  },
];

const STORAGE_KEY = 'truckwys-dashboard-layout';

interface UseDashboardLayoutReturn {
  currentLayout: DashboardLayout;
  layouts: DashboardLayout[];
  isCustomizing: boolean;
  setIsCustomizing: (value: boolean) => void;
  toggleWidget: (widgetId: WidgetId) => void;
  reorderWidgets: (startIndex: number, endIndex: number) => void;
  selectLayout: (layoutId: string) => void;
  saveCurrentLayout: (name: string) => void;
  deleteLayout: (layoutId: string) => void;
  resetToDefault: () => void;
  isWidgetVisible: (widgetId: WidgetId) => boolean;
  getVisibleKpiWidgets: () => Widget[];
}

export function useDashboardLayout(): UseDashboardLayoutReturn {
  const [layouts, setLayouts] = useState<DashboardLayout[]>(presetLayouts);
  const [currentLayoutId, setCurrentLayoutId] = useState<string>('default');
  const [isCustomizing, setIsCustomizing] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.layouts && parsed.currentLayoutId) {
          setLayouts(parsed.layouts);
          setCurrentLayoutId(parsed.currentLayoutId);
        }
      } catch {
        // Use defaults if parsing fails
      }
    }
  }, []);

  // Save to localStorage when layouts change
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ layouts, currentLayoutId })
    );
  }, [layouts, currentLayoutId]);

  const currentLayout = layouts.find(l => l.id === currentLayoutId) || layouts[0];

  const toggleWidget = useCallback((widgetId: WidgetId) => {
    setLayouts(prev => prev.map(layout => {
      if (layout.id !== currentLayoutId) return layout;
      return {
        ...layout,
        widgets: layout.widgets.map(w =>
          w.id === widgetId ? { ...w, visible: !w.visible } : w
        ),
      };
    }));
  }, [currentLayoutId]);

  const reorderWidgets = useCallback((startIndex: number, endIndex: number) => {
    setLayouts(prev => prev.map(layout => {
      if (layout.id !== currentLayoutId) return layout;

      const visibleWidgets = layout.widgets.filter(w => w.visible);
      const hiddenWidgets = layout.widgets.filter(w => !w.visible);

      const [removed] = visibleWidgets.splice(startIndex, 1);
      visibleWidgets.splice(endIndex, 0, removed);

      // Recalculate order
      const reorderedVisible = visibleWidgets.map((w, i) => ({ ...w, order: i }));
      const reorderedHidden = hiddenWidgets.map((w, i) => ({ ...w, order: reorderedVisible.length + i }));

      return {
        ...layout,
        widgets: [...reorderedVisible, ...reorderedHidden],
      };
    }));
  }, [currentLayoutId]);

  const selectLayout = useCallback((layoutId: string) => {
    setCurrentLayoutId(layoutId);
  }, []);

  const saveCurrentLayout = useCallback((name: string) => {
    const newLayout: DashboardLayout = {
      id: `custom-${Date.now()}`,
      name,
      widgets: [...currentLayout.widgets],
    };
    setLayouts(prev => [...prev, newLayout]);
    setCurrentLayoutId(newLayout.id);
  }, [currentLayout]);

  const deleteLayout = useCallback((layoutId: string) => {
    const layout = layouts.find(l => l.id === layoutId);
    if (layout?.isDefault) return; // Can't delete preset layouts

    setLayouts(prev => prev.filter(l => l.id !== layoutId));
    if (currentLayoutId === layoutId) {
      setCurrentLayoutId('default');
    }
  }, [layouts, currentLayoutId]);

  const resetToDefault = useCallback(() => {
    setLayouts(presetLayouts);
    setCurrentLayoutId('default');
  }, []);

  const isWidgetVisible = useCallback((widgetId: WidgetId) => {
    const widget = currentLayout.widgets.find(w => w.id === widgetId);
    return widget?.visible ?? true;
  }, [currentLayout]);

  const getVisibleKpiWidgets = useCallback(() => {
    const kpiWidgetIds: WidgetId[] = ['health-score', 'revenue-mtd', 'gross-margin', 'cash-position', 'active-jobs'];
    return currentLayout.widgets
      .filter(w => kpiWidgetIds.includes(w.id) && w.visible)
      .sort((a, b) => a.order - b.order);
  }, [currentLayout]);

  return {
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
    getVisibleKpiWidgets,
  };
}
