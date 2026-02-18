'use client';

import { useState } from 'react';
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
import { Switch } from '@/components/ui/switch';
import {
  Settings2,
  GripVertical,
  Save,
  RotateCcw,
  Trash2,
  LayoutDashboard,
  Eye,
  EyeOff,
  Plus,
  Check,
} from 'lucide-react';
import type { DashboardLayout, Widget, WidgetId } from '@/hooks/useDashboardLayout';
import { toast } from 'sonner';

interface DashboardCustomizerProps {
  currentLayout: DashboardLayout;
  layouts: DashboardLayout[];
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onToggleWidget: (widgetId: WidgetId) => void;
  onReorderWidgets: (startIndex: number, endIndex: number) => void;
  onSelectLayout: (layoutId: string) => void;
  onSaveLayout: (name: string) => void;
  onDeleteLayout: (layoutId: string) => void;
  onResetToDefault: () => void;
}

// Widget icons mapping
const widgetIcons: Record<WidgetId, string> = {
  'health-score': '💚',
  'revenue-mtd': '📈',
  'gross-margin': '📊',
  'cash-position': '💰',
  'active-jobs': '🚛',
  'smart-insights': '✨',
  'revenue-chart': '📉',
  'alerts-feed': '🔔',
  'roi-card': '🎯',
};

export default function DashboardCustomizer({
  currentLayout,
  layouts,
  isOpen,
  onOpenChange,
  onToggleWidget,
  onReorderWidgets,
  onSelectLayout,
  onSaveLayout,
  onDeleteLayout,
  onResetToDefault,
}: DashboardCustomizerProps) {
  const [saveDialogOpen, setSaveDialogOpen] = useState(false);
  const [newLayoutName, setNewLayoutName] = useState('');
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const visibleWidgets = currentLayout.widgets
    .filter(w => w.visible)
    .sort((a, b) => a.order - b.order);

  const hiddenWidgets = currentLayout.widgets
    .filter(w => !w.visible)
    .sort((a, b) => a.order - b.order);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDrop = (index: number) => {
    if (draggedIndex !== null && draggedIndex !== index) {
      onReorderWidgets(draggedIndex, index);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleSaveLayout = () => {
    if (newLayoutName.trim()) {
      onSaveLayout(newLayoutName.trim());
      toast.success('Layout saved', {
        description: `"${newLayoutName}" has been saved`,
      });
      setNewLayoutName('');
      setSaveDialogOpen(false);
    }
  };

  const handleDeleteLayout = (layoutId: string) => {
    const layout = layouts.find(l => l.id === layoutId);
    if (layout && !layout.isDefault) {
      onDeleteLayout(layoutId);
      toast.success('Layout deleted', {
        description: `"${layout.name}" has been removed`,
      });
    }
  };

  const handleReset = () => {
    onResetToDefault();
    toast.success('Dashboard reset', {
      description: 'Restored to default layout',
    });
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-sky-600" />
              Customize Dashboard
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 pt-2">
            {/* Layout Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">Dashboard Layout</Label>
              <div className="flex gap-2">
                <Select value={currentLayout.id} onValueChange={onSelectLayout}>
                  <SelectTrigger className="flex-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {layouts.map(layout => (
                      <SelectItem key={layout.id} value={layout.id}>
                        <div className="flex items-center gap-2">
                          <LayoutDashboard className="w-4 h-4 text-gray-400" />
                          {layout.name}
                          {layout.isDefault && (
                            <span className="text-xs text-gray-400">(preset)</span>
                          )}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setSaveDialogOpen(true)}
                  title="Save current layout"
                >
                  <Save className="w-4 h-4" />
                </Button>
                {!currentLayout.isDefault && (
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDeleteLayout(currentLayout.id)}
                    className="text-rose-500 hover:text-rose-600 hover:bg-rose-50"
                    title="Delete layout"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Visible Widgets - Draggable */}
            <div className="space-y-3">
              <Label className="text-sm font-medium flex items-center gap-2">
                <Eye className="w-4 h-4 text-emerald-500" />
                Visible Widgets
                <span className="text-xs text-gray-400">Drag to reorder</span>
              </Label>
              <div className="space-y-2">
                {visibleWidgets.map((widget, index) => (
                  <div
                    key={widget.id}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={() => handleDrop(index)}
                    onDragEnd={handleDragEnd}
                    className={`flex items-center justify-between p-3 rounded-lg border transition-all cursor-grab active:cursor-grabbing ${
                      dragOverIndex === index
                        ? 'border-sky-400 bg-sky-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    } ${draggedIndex === index ? 'opacity-50' : ''}`}
                  >
                    <div className="flex items-center gap-3">
                      <GripVertical className="w-4 h-4 text-gray-300" />
                      <span className="text-lg">{widgetIcons[widget.id]}</span>
                      <span className="text-sm font-medium text-gray-700">{widget.label}</span>
                    </div>
                    <Switch
                      checked={widget.visible}
                      onCheckedChange={() => onToggleWidget(widget.id)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Hidden Widgets */}
            {hiddenWidgets.length > 0 && (
              <div className="space-y-3">
                <Label className="text-sm font-medium flex items-center gap-2">
                  <EyeOff className="w-4 h-4 text-gray-400" />
                  Hidden Widgets
                </Label>
                <div className="space-y-2">
                  {hiddenWidgets.map((widget) => (
                    <div
                      key={widget.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-gray-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-4" />
                        <span className="text-lg opacity-50">{widgetIcons[widget.id]}</span>
                        <span className="text-sm text-gray-500">{widget.label}</span>
                      </div>
                      <Switch
                        checked={widget.visible}
                        onCheckedChange={() => onToggleWidget(widget.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-between pt-2 border-t border-gray-100">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleReset}
                className="text-gray-500"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Reset to Default
              </Button>
              <Button
                onClick={() => onOpenChange(false)}
                className="bg-sky-600 hover:bg-sky-700 text-white"
              >
                <Check className="w-4 h-4 mr-1" />
                Done
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Save Layout Dialog */}
      <Dialog open={saveDialogOpen} onOpenChange={setSaveDialogOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Save className="w-5 h-5 text-sky-600" />
              Save Layout
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="layout-name">Layout Name</Label>
              <Input
                id="layout-name"
                placeholder="e.g., My Custom View"
                value={newLayoutName}
                onChange={(e) => setNewLayoutName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSaveLayout()}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setSaveDialogOpen(false)}>
                Cancel
              </Button>
              <Button
                onClick={handleSaveLayout}
                disabled={!newLayoutName.trim()}
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <Plus className="w-4 h-4 mr-1" />
                Save Layout
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
