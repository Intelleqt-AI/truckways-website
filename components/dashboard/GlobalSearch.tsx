'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Search,
  Building2,
  FileText,
  ClipboardList,
  User,
  Truck,
  MapPin,
  Clock,
  ArrowRight,
  X,
  Command,
} from 'lucide-react';
import {
  searchAll,
  getRecentSearches,
  saveRecentSearch,
  typeLabels,
  typeColors,
  type SearchResult,
  type SearchResultType,
} from '@/lib/search-data';

interface GlobalSearchProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

// Icon mapping for result types
const typeIcons: Record<SearchResultType, typeof Building2> = {
  customer: Building2,
  invoice: FileText,
  quote: ClipboardList,
  driver: User,
  vehicle: Truck,
  route: MapPin,
};

// Filter options
const filterOptions: { id: SearchResultType; label: string }[] = [
  { id: 'customer', label: 'Customers' },
  { id: 'invoice', label: 'Invoices' },
  { id: 'quote', label: 'Quotes' },
  { id: 'driver', label: 'Drivers' },
  { id: 'vehicle', label: 'Vehicles' },
  { id: 'route', label: 'Routes' },
];

export default function GlobalSearch({ isOpen, onOpenChange }: GlobalSearchProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeFilters, setActiveFilters] = useState<SearchResultType[]>([]);

  // Load recent searches on mount
  useEffect(() => {
    if (isOpen) {
      setRecentSearches(getRecentSearches());
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
      // Focus input after dialog opens
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  // Search when query changes
  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchAll(query, {
        types: activeFilters.length > 0 ? activeFilters : undefined,
      });
      setResults(searchResults);
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query, activeFilters]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const items = query ? results : recentSearches;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, 0));
        break;
      case 'Enter':
        e.preventDefault();
        if (items[selectedIndex]) {
          handleSelect(items[selectedIndex]);
        }
        break;
      case 'Escape':
        onOpenChange(false);
        break;
    }
  }, [query, results, recentSearches, selectedIndex, onOpenChange]);

  // Handle result selection
  const handleSelect = (result: SearchResult) => {
    saveRecentSearch(result);
    onOpenChange(false);
    router.push(result.url);
  };

  // Toggle filter
  const toggleFilter = (filter: SearchResultType) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters([]);
  };

  const displayItems = query ? results : recentSearches;
  const showRecent = !query && recentSearches.length > 0;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center border-b border-gray-200 px-4">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <Input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search customers, invoices, quotes, drivers..."
            className="border-0 shadow-none focus-visible:ring-0 text-base py-4 px-0"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-gray-100 bg-gray-50">
          <span className="text-xs text-gray-500">Filter:</span>
          <div className="flex flex-wrap gap-1.5">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
                  activeFilters.includes(filter.id)
                    ? typeColors[filter.id]
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
            {activeFilters.length > 0 && (
              <button
                onClick={clearFilters}
                className="px-2 py-0.5 text-xs text-gray-500 hover:text-gray-700"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[400px] overflow-y-auto">
          {showRecent && (
            <div className="px-4 py-2">
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                <Clock className="w-3.5 h-3.5" />
                Recent Searches
              </div>
            </div>
          )}

          {displayItems.length > 0 ? (
            <div className="py-2">
              {displayItems.map((item, index) => {
                const Icon = typeIcons[item.type];
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                      selectedIndex === index ? 'bg-sky-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${typeColors[item.type]}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 truncate">
                          {item.title}
                        </span>
                        <span className={`px-1.5 py-0.5 text-[10px] rounded ${typeColors[item.type]}`}>
                          {typeLabels[item.type]}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                    <ArrowRight className={`w-4 h-4 text-gray-300 ${
                      selectedIndex === index ? 'text-sky-500' : ''
                    }`} />
                  </button>
                );
              })}
            </div>
          ) : query ? (
            <div className="py-12 text-center">
              <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No results found for "{query}"</p>
              <p className="text-sm text-gray-400 mt-1">
                Try a different search term or adjust filters
              </p>
            </div>
          ) : !showRecent ? (
            <div className="py-12 text-center">
              <Search className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Search across your dashboard</p>
              <p className="text-sm text-gray-400 mt-1">
                Find customers, invoices, quotes, drivers, and more
              </p>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px]">↓</kbd>
              to navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px]">↵</kbd>
              to select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[10px]">esc</kbd>
              to close
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Command className="w-3 h-3" />
            <span>K to open</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Search trigger button component
export function SearchTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
    >
      <Search className="w-4 h-4" />
      <span className="hidden sm:inline">Search...</span>
      <kbd className="hidden sm:flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] bg-white border border-gray-200 rounded">
        <Command className="w-3 h-3" />K
      </kbd>
    </button>
  );
}
