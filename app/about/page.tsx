import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Target, Globe, TrendingUp, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About TruckWys | AI-Powered Fleet Profitability Platform',
  description: 'TruckWys is an AI-powered financial intelligence platform helping African transport operators increase margins by 15%, reduce costs, and accelerate cash flow. Founded in 2024, based in South Africa.',
  keywords: 'about TruckWys, fleet management South Africa, transport technology Africa, AI logistics platform, fleet profitability software, African transport innovation',
  openGraph: {
    title: 'About TruckWys | AI-Powered Fleet Profitability Platform',
    description: 'Helping African transport operators increase margins by 15% with AI-powered pricing, automated invoicing, and instant cash flow visibility.',
    url: 'https://truckwys.com/about',
    siteName: 'TruckWys',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TruckWys - Fleet Profitability Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About TruckWys | AI-Powered Fleet Profitability Platform',
    description: 'Helping African transport operators increase margins by 15% with AI-powered pricing and instant cash flow visibility.',
    images: ['/og-image.png'],
    creator: '@truckwys',
    site: '@truckwys',
  },
  alternates: {
    canonical: 'https://truckwys.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 sm:pt-32 sm:pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to home</span>
          </Link>

          <h1 className="text-4xl sm:text-5xl font-semibold text-black mb-6">
            About TruckWys
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
            We're building the financial intelligence platform that helps African transport operators unlock profitability,
            one trip at a time.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-black mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower African transport operators with AI-powered financial intelligence that transforms
              fleet operations from guesswork to precision. We believe every fleet operator deserves to know
              their true profit per trip and access the capital they need to grow.
            </p>
          </div>

          <div>
            <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-semibold text-black mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              A future where every transport operator in Africa has the tools to run a profitable,
              sustainable business. Where pricing is data-driven, cash flow is predictable, and growth
              is accessible to operators of all sizes.
            </p>
          </div>
        </div>

        {/* The Problem We're Solving */}
        <div className="bg-gray-50 rounded-2xl p-8 sm:p-12 mb-20">
          <h2 className="text-2xl font-semibold text-black mb-6">The Problem We're Solving</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Through conversations with hundreds of fleet operators across Africa, we discovered a critical blind spot:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 text-sm font-semibold">×</span>
              </div>
              <p className="text-gray-700">
                <strong>23% of trips</strong> are priced below true cost — operators are losing money without knowing it
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 text-sm font-semibold">×</span>
              </div>
              <p className="text-gray-700">
                <strong>31% of "best customers"</strong> are actually margin-negative when you account for payment delays
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-600 text-sm font-semibold">×</span>
              </div>
              <p className="text-gray-700">
                <strong>47-day average payment cycles</strong> (vs. 30-day terms) create constant cash flow crises
              </p>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <div className="mb-20">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-black mb-6">Our Solution</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            TruckWys is not another TMS or tracking system. We're a financial intelligence platform purpose-built
            for African transport operators.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-2">AI-Powered Quoting</h3>
              <p className="text-sm text-gray-600">
                Quote with confidence. Our AI accounts for real costs, route conditions, and customer behavior
                to recommend profitable pricing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-2">Automated Invoicing</h3>
              <p className="text-sm text-gray-600">
                Generate professional invoices instantly. Track payments, send reminders, and reduce payment
                cycles by an average of 10 days.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-2">Trip-Level Profitability</h3>
              <p className="text-sm text-gray-600">
                See exactly which trips and customers make you money. No more flying blind on the numbers
                that matter most.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-2">Instant Capital Access</h3>
              <p className="text-sm text-gray-600">
                Turn unpaid invoices into working capital. Get paid today, not in 47 days. Keep your fleet
                moving without cash flow gaps.
              </p>
            </div>
          </div>
        </div>

        {/* Impact */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 sm:p-12 text-white mb-20">
          <h2 className="text-2xl font-semibold mb-6">Our Impact</h2>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">15%</div>
              <p className="text-blue-100">Average margin improvement</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10 days</div>
              <p className="text-blue-100">Faster payment cycles</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5M+</div>
              <p className="text-blue-100">Trips analyzed</p>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="mb-20">
          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-2xl font-semibold text-black mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Founded in <strong>2024</strong> and based in <strong>South Africa</strong>, TruckWys was born from
              a simple observation: transport operators across Africa are running sophisticated operations but often
              lack the financial tools to truly understand and optimize their profitability.
            </p>
            <p>
              After analyzing over 50,000 trips across 12 fleets, we saw the same patterns emerge:
              margin-negative customers being treated as "best clients," quotes based on intuition rather than data,
              and cash flow crises caused by payment delays.
            </p>
            <p>
              We built TruckWys to change that. To give operators the same level of financial intelligence that
              large logistics companies have, but designed for the unique challenges of African transport operations.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-gray-200 pt-12 text-center">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Ready to transform your fleet profitability?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join leading operators across Africa who are using TruckWys to increase margins,
            reduce costs, and accelerate cash flow.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-blue-600 text-white font-medium px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Free Trial
          </Link>
        </div>
      </div>
    </div>
  );
}
