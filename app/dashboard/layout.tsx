'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/sonner';
import GlobalSearch, { SearchTrigger } from '@/components/dashboard/GlobalSearch';
import MobileBottomNav from '@/components/dashboard/MobileBottomNav';
import {
  LayoutDashboard,
  FileText,
  Wallet,
  Building2,
  Menu,
  X,
  ChevronLeft,
  Bell,
  User,
  LogOut,
  Settings,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const navigationItems = [
  {
    name: 'Executive Overview',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Quotes & Bookings',
    href: '/dashboard/quotes',
    icon: FileText,
  },
  {
    name: 'Finance HQ',
    href: '/dashboard/finance',
    icon: Wallet,
  },
  {
    name: 'Capital',
    href: '/dashboard/capital',
    icon: Building2,
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  // Keyboard shortcut for search (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 px-4 h-14 flex items-center justify-between">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <Link href="/dashboard" className="flex items-center">
          <img
            src="/images/truckwys-logo-transparent.png"
            alt="TruckWys"
            className="h-8"
          />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="w-4 h-4 mr-2" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <Link href="/dashboard" className="flex items-center">
            <img
              src="/images/truckwys-logo-transparent.png"
              alt="TruckWys"
              className="h-8"
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        <nav className="p-4 space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Desktop sidebar */}
      <div
        className={`hidden lg:flex flex-col fixed inset-y-0 left-0 z-40 bg-white border-r border-gray-200 transition-all duration-200 ${
          sidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          {sidebarOpen ? (
            <Link href="/dashboard" className="flex items-center">
              <img
                src="/images/truckwys-logo-transparent.png"
                alt="TruckWys"
                className="h-8"
              />
            </Link>
          ) : (
            <Link href="/dashboard" className="flex items-center justify-center w-full">
              <img
                src="/images/truckwys-icon.png"
                alt="TruckWys"
                className="h-8 w-8"
                onError={(e) => {
                  // Fallback if icon doesn't exist
                  e.currentTarget.src = '/images/truckwys-logo-transparent.png';
                  e.currentTarget.className = 'h-6';
                }}
              />
            </Link>
          )}
          <Button
            variant="ghost"
            size="icon"
            className={sidebarOpen ? '' : 'hidden'}
            onClick={() => setSidebarOpen(false)}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                } ${!sidebarOpen ? 'justify-center' : ''}`}
                title={!sidebarOpen ? item.name : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Expand button when collapsed */}
        {!sidebarOpen && (
          <div className="p-3 border-t border-gray-200">
            <Button
              variant="ghost"
              size="icon"
              className="w-full"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* User section */}
        {sidebarOpen && (
          <div className="p-3 border-t border-gray-200">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium text-sm">
                    SM
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium text-gray-900">Sipho M.</p>
                    <p className="text-xs text-gray-500">Fleet Owner</p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="w-4 h-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>

      {/* Main content */}
      <div
        className={`min-h-screen transition-all duration-200 ${
          sidebarOpen ? 'lg:pl-64' : 'lg:pl-16'
        }`}
      >
        {/* Desktop header */}
        <header className="hidden lg:flex h-16 items-center justify-between px-6 bg-white border-b border-gray-200">
          <div className="flex items-center gap-4">
            {/* Global Search Trigger */}
            <SearchTrigger onClick={() => setSearchOpen(true)} />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </Button>
          </div>
        </header>

        {/* Page content - add padding for mobile bottom nav */}
        <main className="pt-14 lg:pt-0 pb-20 lg:pb-0">{children}</main>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />

      {/* Toast notifications */}
      <Toaster position="top-right" richColors closeButton />

      {/* Global Search Dialog */}
      <GlobalSearch isOpen={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
