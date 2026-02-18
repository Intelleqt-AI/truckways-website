'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Wallet,
  PiggyBank,
  FileText,
  ArrowRight,
  CheckCircle,
  Building2,
  Clock,
  Shield,
  Zap,
} from 'lucide-react';

// Mock capital data
const capitalData = {
  availableCapital: 500000,
  capitalUtilised: 150000,
  eligibleInvoices: 12,
  totalEligibleValue: 380000,
  utilisationRate: 30,
};

function formatCurrency(value: number): string {
  if (value >= 1000000) {
    return `R ${(value / 1000000).toFixed(1)}M`;
  }
  if (value >= 1000) {
    return `R ${(value / 1000).toFixed(0)}K`;
  }
  return `R ${value.toFixed(0)}`;
}

export default function CapitalPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Capital</h1>
        <p className="text-sm text-gray-500 mt-1">
          Unlock cash from your outstanding invoices
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Available Capital */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Available Capital</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {formatCurrency(capitalData.availableCapital)}
            </p>
            <p className="text-xs text-gray-400 mt-1">Credit facility limit</p>
          </CardContent>
        </Card>

        {/* Capital Utilised */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                <PiggyBank className="w-5 h-5 text-sky-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Capital Utilised</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {formatCurrency(capitalData.capitalUtilised)}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {capitalData.utilisationRate}% of facility
            </p>
          </CardContent>
        </Card>

        {/* Eligible Invoices */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center">
                <FileText className="w-5 h-5 text-sky-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Eligible Invoices</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {capitalData.eligibleInvoices}
            </p>
            <p className="text-xs text-gray-400 mt-1">Ready for early payment</p>
          </CardContent>
        </Card>

        {/* Eligible Value */}
        <Card className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center">
                <Zap className="w-5 h-5 text-amber-600" />
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium">Eligible Value</p>
            <p className="text-2xl font-bold text-gray-900 mt-1">
              {formatCurrency(capitalData.totalEligibleValue)}
            </p>
            <p className="text-xs text-gray-400 mt-1">Available to unlock</p>
          </CardContent>
        </Card>
      </div>

      {/* Merchant Capital CTA Card */}
      <Card className="bg-gradient-to-br from-sky-50 via-emerald-50 to-sky-50 border border-sky-100 shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Header with partner badge */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center shadow-lg">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Instant Invoice Financing
                  </h2>
                </div>
                <p className="text-sm text-gray-600">
                  In partnership with{' '}
                  <span className="font-semibold text-sky-600">Merchant Capital</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg mb-6 max-w-2xl">
              Get paid today on your outstanding invoices. Turn your unpaid invoices into
              immediate working capital without waiting 30, 60, or 90 days for customer
              payments.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3 border border-white">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Same-Day Funding</p>
                  <p className="text-xs text-gray-500">Get cash within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3 border border-white">
                <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">No Collateral</p>
                  <p className="text-xs text-gray-500">Your invoices are the security</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/60 rounded-xl px-4 py-3 border border-white">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Simple Process</p>
                  <p className="text-xs text-gray-500">Quick online application</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://www.merchantcapital.co.za/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="h-14 px-8 text-base font-semibold text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, rgb(60, 131, 246) 0%, rgb(37, 99, 235) 100%)',
                }}
              >
                Check If You Qualify for Instant Financing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>

            {/* Trust note */}
            <p className="text-xs text-gray-500 mt-4">
              You'll be redirected to Merchant Capital's secure website. TruckWys has
              partnered with Merchant Capital to offer invoice financing to our fleet
              operators.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* How It Works Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white border border-gray-200">
            <CardContent className="p-5">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-sm mb-3">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Submit Your Invoices</h4>
              <p className="text-sm text-gray-600">
                Upload your outstanding invoices through the TruckWys platform or Merchant
                Capital's portal.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-5">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-sm mb-3">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Get Approved</h4>
              <p className="text-sm text-gray-600">
                Quick credit assessment based on your invoice quality and customer
                creditworthiness.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white border border-gray-200">
            <CardContent className="p-5">
              <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-sm mb-3">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Receive Funds</h4>
              <p className="text-sm text-gray-600">
                Get up to 80% of invoice value within 24 hours. Balance paid when customer
                settles.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
