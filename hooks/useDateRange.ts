'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

export type DatePeriod = 'this-week' | 'this-month' | 'last-30-days' | 'custom';

export interface DateRange {
  startDate: Date;
  endDate: Date;
}

export interface UseDateRangeReturn {
  selectedPeriod: DatePeriod;
  dateRange: DateRange;
  comparisonEnabled: boolean;
  comparisonRange: DateRange | null;
  displayLabel: string;
  comparisonLabel: string | null;

  setPeriod: (period: DatePeriod) => void;
  setCustomRange: (range: DateRange) => void;
  toggleComparison: () => void;
}

const STORAGE_KEY = 'truckwys-date-range';

interface StoredDateRange {
  selectedPeriod: DatePeriod;
  customRange?: { start: string; end: string };
  comparisonEnabled: boolean;
}

// Date calculation helpers
function getThisWeek(): DateRange {
  const now = new Date();
  const day = now.getDay();
  const diffToMonday = day === 0 ? -6 : 1 - day;

  const start = new Date(now);
  start.setDate(now.getDate() + diffToMonday);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return { startDate: start, endDate: end };
}

function getThisMonth(): DateRange {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  start.setHours(0, 0, 0, 0);
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  end.setHours(23, 59, 59, 999);
  return { startDate: start, endDate: end };
}

function getLast30Days(): DateRange {
  const end = new Date();
  end.setHours(23, 59, 59, 999);
  const start = new Date(end);
  start.setDate(end.getDate() - 29);
  start.setHours(0, 0, 0, 0);
  return { startDate: start, endDate: end };
}

function getPreviousPeriod(range: DateRange): DateRange {
  const duration = range.endDate.getTime() - range.startDate.getTime();
  const prevEnd = new Date(range.startDate.getTime() - 1);
  prevEnd.setHours(23, 59, 59, 999);
  const prevStart = new Date(prevEnd.getTime() - duration);
  prevStart.setHours(0, 0, 0, 0);
  return { startDate: prevStart, endDate: prevEnd };
}

function getDateRangeForPeriod(period: DatePeriod, customRange: DateRange | null): DateRange {
  switch (period) {
    case 'this-week':
      return getThisWeek();
    case 'this-month':
      return getThisMonth();
    case 'last-30-days':
      return getLast30Days();
    case 'custom':
      return customRange || getThisMonth();
    default:
      return getThisMonth();
  }
}

function formatDateRangeLabel(range: DateRange): string {
  const opts: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
  const start = range.startDate.toLocaleDateString('en-ZA', opts);
  const end = range.endDate.toLocaleDateString('en-ZA', opts);

  // Same month: "Jan 1 - 31"
  if (range.startDate.getMonth() === range.endDate.getMonth()) {
    return `${start} - ${range.endDate.getDate()}`;
  }
  // Different months: "Jan 15 - Feb 14"
  return `${start} - ${end}`;
}

export function useDateRange(): UseDateRangeReturn {
  const [selectedPeriod, setSelectedPeriod] = useState<DatePeriod>('this-month');
  const [customRange, setCustomRangeState] = useState<DateRange | null>(null);
  const [comparisonEnabled, setComparisonEnabled] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed: StoredDateRange = JSON.parse(saved);
        setSelectedPeriod(parsed.selectedPeriod);
        setComparisonEnabled(parsed.comparisonEnabled);
        if (parsed.customRange) {
          setCustomRangeState({
            startDate: new Date(parsed.customRange.start),
            endDate: new Date(parsed.customRange.end),
          });
        }
      } catch {
        // Use defaults if parsing fails
      }
    }
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    const toStore: StoredDateRange = {
      selectedPeriod,
      comparisonEnabled,
      customRange: customRange ? {
        start: customRange.startDate.toISOString(),
        end: customRange.endDate.toISOString(),
      } : undefined,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toStore));
  }, [selectedPeriod, customRange, comparisonEnabled]);

  const dateRange = useMemo(() => {
    return getDateRangeForPeriod(selectedPeriod, customRange);
  }, [selectedPeriod, customRange]);

  const comparisonRange = useMemo(() => {
    if (!comparisonEnabled) return null;
    return getPreviousPeriod(dateRange);
  }, [comparisonEnabled, dateRange]);

  const displayLabel = useMemo(() => {
    return formatDateRangeLabel(dateRange);
  }, [dateRange]);

  const comparisonLabel = useMemo(() => {
    if (!comparisonRange) return null;
    return `vs ${formatDateRangeLabel(comparisonRange)}`;
  }, [comparisonRange]);

  const setPeriod = useCallback((period: DatePeriod) => {
    setSelectedPeriod(period);
  }, []);

  const setCustomRange = useCallback((range: DateRange) => {
    setCustomRangeState(range);
    setSelectedPeriod('custom');
  }, []);

  const toggleComparison = useCallback(() => {
    setComparisonEnabled(prev => !prev);
  }, []);

  return {
    selectedPeriod,
    dateRange,
    comparisonEnabled,
    comparisonRange,
    displayLabel,
    comparisonLabel,
    setPeriod,
    setCustomRange,
    toggleComparison,
  };
}
