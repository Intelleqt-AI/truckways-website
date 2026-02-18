'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Calendar as CalendarIcon,
  ChevronDown,
  ArrowLeftRight,
} from 'lucide-react';
import type { DatePeriod, DateRange } from '@/hooks/useDateRange';

interface DateRangeSelectorProps {
  selectedPeriod: DatePeriod;
  dateRange: DateRange;
  displayLabel: string;
  comparisonEnabled: boolean;
  comparisonLabel: string | null;
  onPeriodChange: (period: DatePeriod) => void;
  onCustomRangeChange: (range: DateRange) => void;
  onToggleComparison: () => void;
}

const periodPresets: { id: DatePeriod; label: string }[] = [
  { id: 'this-week', label: 'This Week' },
  { id: 'this-month', label: 'This Month' },
  { id: 'last-30-days', label: 'Last 30 Days' },
];

export default function DateRangeSelector({
  selectedPeriod,
  dateRange,
  displayLabel,
  comparisonEnabled,
  comparisonLabel,
  onPeriodChange,
  onCustomRangeChange,
  onToggleComparison,
}: DateRangeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCustomCalendar, setShowCustomCalendar] = useState(false);
  const [customStartDate, setCustomStartDate] = useState<Date | undefined>(dateRange.startDate);
  const [customEndDate, setCustomEndDate] = useState<Date | undefined>(dateRange.endDate);

  const handlePresetClick = (period: DatePeriod) => {
    onPeriodChange(period);
    setShowCustomCalendar(false);
    setIsOpen(false);
  };

  const handleCustomClick = () => {
    setShowCustomCalendar(true);
    setCustomStartDate(dateRange.startDate);
    setCustomEndDate(dateRange.endDate);
  };

  const handleApplyCustomRange = () => {
    if (customStartDate && customEndDate) {
      const start = new Date(customStartDate);
      start.setHours(0, 0, 0, 0);
      const end = new Date(customEndDate);
      end.setHours(23, 59, 59, 999);
      onCustomRangeChange({ startDate: start, endDate: end });
      setShowCustomCalendar(false);
      setIsOpen(false);
    }
  };

  const getPeriodLabel = () => {
    switch (selectedPeriod) {
      case 'this-week': return 'This Week';
      case 'this-month': return 'This Month';
      case 'last-30-days': return 'Last 30 Days';
      case 'custom': return 'Custom';
      default: return 'Select Period';
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button
          className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors border border-gray-200"
        >
          <CalendarIcon className="w-3.5 h-3.5" />
          <span>{getPeriodLabel()}</span>
          {comparisonEnabled && (
            <ArrowLeftRight className="w-3 h-3 text-emerald-600" />
          )}
          <ChevronDown className="w-3 h-3" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <div className="p-3 border-b border-gray-100">
          <div className="text-xs font-medium text-gray-500 mb-2">Quick Select</div>
          <div className="flex flex-wrap gap-2">
            {periodPresets.map((preset) => (
              <Button
                key={preset.id}
                variant="outline"
                size="sm"
                className={`h-7 text-xs ${
                  selectedPeriod === preset.id && !showCustomCalendar
                    ? 'bg-sky-100 text-sky-700 border-sky-200 hover:bg-sky-100'
                    : ''
                }`}
                onClick={() => handlePresetClick(preset.id)}
              >
                {preset.label}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className={`h-7 text-xs ${
                selectedPeriod === 'custom' || showCustomCalendar
                  ? 'bg-sky-100 text-sky-700 border-sky-200 hover:bg-sky-100'
                  : ''
              }`}
              onClick={handleCustomClick}
            >
              Custom
            </Button>
          </div>
        </div>

        {/* Custom Date Picker */}
        {showCustomCalendar && (
          <div className="p-3 border-b border-gray-100">
            <div className="text-xs font-medium text-gray-500 mb-2">Custom Range</div>
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <Label className="text-xs text-gray-500">Start Date</Label>
                <div className="text-sm font-medium text-gray-900">
                  {customStartDate?.toLocaleDateString('en-ZA', { month: 'short', day: 'numeric' }) || 'Select'}
                </div>
              </div>
              <div>
                <Label className="text-xs text-gray-500">End Date</Label>
                <div className="text-sm font-medium text-gray-900">
                  {customEndDate?.toLocaleDateString('en-ZA', { month: 'short', day: 'numeric' }) || 'Select'}
                </div>
              </div>
            </div>
            <Calendar
              mode="range"
              selected={{
                from: customStartDate,
                to: customEndDate,
              }}
              onSelect={(range) => {
                setCustomStartDate(range?.from);
                setCustomEndDate(range?.to);
              }}
              numberOfMonths={1}
              className="rounded-md border"
            />
            <div className="flex justify-end mt-3">
              <Button
                size="sm"
                className="h-7 bg-sky-600 hover:bg-sky-700 text-white"
                onClick={handleApplyCustomRange}
                disabled={!customStartDate || !customEndDate}
              >
                Apply Range
              </Button>
            </div>
          </div>
        )}

        {/* Selected Range Display */}
        {!showCustomCalendar && (
          <div className="px-3 py-2 bg-gray-50 border-b border-gray-100">
            <div className="text-xs text-gray-500">Selected Range</div>
            <div className="text-sm font-medium text-gray-900">{displayLabel}</div>
          </div>
        )}

        {/* Comparison Toggle */}
        <div className="p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowLeftRight className="w-4 h-4 text-gray-400" />
              <Label htmlFor="comparison-toggle" className="text-sm text-gray-700 cursor-pointer">
                Compare with previous period
              </Label>
            </div>
            <Switch
              id="comparison-toggle"
              checked={comparisonEnabled}
              onCheckedChange={onToggleComparison}
            />
          </div>
          {comparisonEnabled && comparisonLabel && (
            <div className="mt-2 text-xs text-emerald-600 pl-6">
              {comparisonLabel}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
