'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Database,
  Sparkles,
  TrendingUp,
  CheckCircle,
  FileText,
  Zap,
  Shield,
  RefreshCw,
  FileCheck,
  Star,
  BarChart,
  Users,
  AlertTriangle,
  Menu,
  X,
} from 'lucide-react';

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const modules = [
    {
      id: 1,
      title: 'Quote & Book AI',
      subtitle: 'Quote Smart. Book Profitable.',
      description:
        'Win more work without sacrificing margin. Our AI provides smart price bands and predicts your win probability on every quote, turning a guessing game into a science.',
      impact: '3-5% margin improvement per lane',
    },
    {
      id: 2,
      title: 'Fleet Performance',
      subtitle: 'Cut Costs on Every Trip.',
      description:
        'Go beyond tracking. Our AI analyses completed trips to find the root cause of high costs. Pinpoint inefficient vehicles, drivers, or routes to improve your cost-per-kilometre.',
      impact: '15% reduction in empty kilometers',
    },
    {
      id: 3,
      title: 'Invoice & Cashflow',
      subtitle: 'Automate Invoicing. Accelerate Cash.',
      description:
        'Transform your financial operations. AI scans PODs and receipts to auto-generate compliant invoices and syncs with your accounting software for a live view of your cash flow.',
      impact: '7-10 day improvement in cash cycle',
    },
    {
      id: 4,
      title: 'Capital',
      subtitle: 'Turn Jobs into Same-Day Cash.',
      description:
        'Stop waiting weeks to get paid. Our AI risk engine verifies your completed work, allowing you to get an instant advance on your invoices through our trusted lending partners.',
      impact: 'Same-day payment on completed loads',
    },
  ];

  const testimonials = [
    {
      name: 'Sipho Mthembu',
      title: 'Fleet Manager at Savanna Express',
      company: 'SAVANNA EXPRESS',
      quote:
        "TruckWys' AI pricing has been exceptional, fast, accurate, and built for scale. It has been foundational to building our profitability ecosystem. Their flexibility and precision have helped us push automation beyond logistics and into new territory for our customers.",
      metric: 'R240K',
      metricLabel: 'monthly savings',
      imageType: 'logo',
      logo: 'savanna',
    },
    {
      name: 'Maria Santos',
      title: 'Operations Director at Cape Freight Company',
      company: 'CAPE FREIGHT COMPANY',
      quote:
        "The route optimization capabilities have transformed our operations. We've reduced empty runs by 23% in the first month alone, and the AI recommendations for backhauls have opened up revenue streams we never knew existed.",
      metric: '23%',
      metricLabel: 'fewer empty runs',
      imageType: 'logo',
      logo: 'cape',
    },
    {
      name: 'Ahmed Hassan',
      title: 'CEO at Zambezi Transport',
      company: 'ZAMBEZI TRANSPORT',
      quote:
        'QuickCash has revolutionized our cash flow management. What used to be 45-day payment cycles are now same-day advances. The AI risk assessment gives us confidence while maintaining healthy margins on every load.',
      metric: 'Same-day',
      metricLabel: 'payment cycles',
      imageType: 'logo',
      logo: 'zambezi',
    },
    {
      name: 'Thabo Ndlovu',
      title: 'Transport Manager at TransAfrica Logistics',
      company: 'TRANSAFRICA LOGISTICS',
      quote: 'Cut our DSO from 42 to 12 days. The working capital improvement alone paid for TruckWys 10x over.',
      metric: '30 days',
      metricLabel: 'DSO reduction',
      imageType: 'logo',
      logo: 'transafrica',
    },
    {
      name: 'Linda Moyo',
      title: 'CFO at Atlas Haulage',
      company: 'ATLAS HAULAGE',
      quote:
        'Finally know which customers actually make us money after hidden costs. Dropped 3 unprofitable accounts, improved margins 8%.',
      metric: '8%',
      metricLabel: 'margin improvement',
      imageType: 'logo',
      logo: 'atlas',
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header - Made floating with transparent background initially */}

      {/* Hero - NO FRAME - Extends to top of page, nav floats over it */}
      <section className="relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center bg-gradient-to-b from-blue-100 via-blue-50 to-white pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 h-full flex flex-col justify-between py-8 sm:py-12 w-full">
          <div className="max-w-full flex flex-col justify-center items-center flex-1 text-center">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-semibold text-black text-balance leading-[1.1] text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px]">
                The financial platform for fleet profitability
              </h1>
              <p className="text-base sm:text-lg text-gray-600 text-pretty leading-relaxed max-w-full sm:max-w-[600px] mx-auto">
                Truckwys transforms your fleet's operational data into financial intelligence - helping you quote smarter, protect margins,
                and get paid faster. Built for African fleets, powered by real AI.
              </p>
              <div className="flex gap-4 justify-center pb-6 sm:pb-8">
                <Link href="/get-started">
                  <Button
                    size="lg"
                    className="h-12 px-6 sm:px-8 text-white hover:opacity-90 text-sm sm:text-base"
                    style={{ backgroundColor: 'rgb(60, 131, 246)' }}
                  >
                    Get started
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-4 sm:gap-12 justify-center max-w-full">
            <div className="flex flex-col gap-1 items-center">
              <div className="text-2xl sm:text-3xl font-bold text-black">5M+</div>
              <div className="text-xs sm:text-sm text-gray-600">trips analysed</div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="text-2xl sm:text-3xl font-bold text-black">15%</div>
              <div className="text-xs sm:text-sm text-gray-600">average margin uplift</div>
            </div>
            <div className="flex flex-col gap-1 items-center">
              <div className="text-2xl sm:text-3xl font-bold text-black">10 days</div>
              <div className="text-xs sm:text-sm text-gray-600">faster payments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Showcase Section - Outside frame, full width */}
      <section className="py-0 sm:py-1 lg:py-1 bg-gradient-to-b from-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-3 items-stretch">
            {/* Right side - 70% - Dashboard screenshot - FIRST on mobile */}
            <div className="lg:col-span-7 lg:order-2 flex items-stretch">
              <div className="rounded-lg overflow-hidden shadow-2xl border border-gray-200 relative w-full">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-27%20at%2013.15.47-BLzbrJLtqdXkw9H3kIKA1XfNzk8YC5.png"
                  alt="Truckwys dashboard showing business health metrics, revenue trends, and actionable insights"
                  className="w-full h-full object-cover object-left"
                />
                {/* White gradient overlay on bottom 20% */}
                <div className="absolute bottom-0 left-0 right-0 h-[20%] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Left side - 30% - Hand holding iPhone - SECOND on mobile */}
            <div className="lg:col-span-3 lg:order-1 flex items-stretch">
              <div className="relative w-full flex items-center justify-center bg-white rounded-lg overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="/hand-holding-modern-black-iphone-with-white-blank-.jpg"
                  alt="Mobile app on iPhone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logos Section - Moved inside framed wrapper */}
      <div className="max-w-[96%] mx-auto border-l border-r border-gray-300 relative">
        {/* Left border fade */}
        <div className="absolute top-0 left-0 w-px h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>
        {/* Right border fade */}
        <div className="absolute top-0 right-0 w-px h-24 bg-gradient-to-b from-white to-transparent z-20 pointer-events-none"></div>

        <section className="py-12 sm:py-16 bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-16">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-base sm:text-lg text-black font-medium">Trusted by leading transport operators across Africa</p>
            </div>

            <div className="flex items-center justify-center gap-6 sm:gap-12 flex-wrap opacity-60 grayscale">
              {/* TransAfrica Logistics */}
              <div className="h-12 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                      <path d="M18 18.5a1.5 1.5 0 0 1-1 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1 1.5zm1.5-9l1.96 2.5H17V11.5m-11 7a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 3 18.5 1.5 1.5 0 0 1 4.5 17 1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3 3 3 0 0 0 3-3h6a3 3 0 0 0 3 3 3 3 0 0 0 3-3h2v-5l-3-4z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-black tracking-tight">TransAfrica</span>
                </div>
              </div>

              {/* Savanna Express */}
              <div className="h-12 flex items-center justify-center">
                <div className="text-2xl font-bold text-black tracking-wider" style={{ fontFamily: 'serif' }}>
                  SAVANNA EXPRESS
                </div>
              </div>

              {/* Cape Freight Co. */}
              <div className="h-12 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="text-2xl font-bold text-black tracking-tight leading-none">CAPE FREIGHT</div>
                  <div className="text-xs text-black tracking-widest">COMPANY</div>
                </div>
              </div>

              {/* Zambezi Transport */}
              <div className="h-12 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-0.5">
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                    <div className="w-6 h-1 bg-black"></div>
                  </div>
                  <span className="text-xl font-bold text-black">ZAMBEZI</span>
                </div>
              </div>

              {/* Atlas Haulage */}
              <div className="h-12 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-lg font-bold text-black">ATLAS</span>
                    <span className="text-xs text-black tracking-wider">HAULAGE</span>
                  </div>
                </div>
              </div>

              {/* Kilimanjaro Logistics */}
              <div className="h-12 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                    <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />
                  </svg>
                  <span className="text-xl font-bold text-black">KILIMANJARO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Redesigned workflow-style features section */}
        <section className="pt-8 pb-16 sm:pb-20 lg:pb-24 bg-white relative overflow-hidden">
          <div className="flex justify-between items-center pb-6 mb-8 border-b border-dashed border-gray-200">
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16">[01] FEATURES</div>
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16 hidden sm:block">
              INTELLIGENT AUTOMATION
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-16">
            <div className="py-8 sm:py-12 mb-8 sm:mb-12">
              <h2 className="text-[32px] sm:text-[28px] lg:text-[32px] font-medium mb-4 text-black text-left leading-tight tracking-[-0.32px]">
                From quote to cash.
              </h2>
              <p className="text-[20px] sm:text-[24px] lg:text-[32px] text-gray-500 leading-tight sm:leading-[38px] tracking-[-0.32px] text-left">
                Your entire workflow, intelligently automated. TruckWys connects to your existing systems - telematics, accounting, TMS and
                our AI discovers the profit opportunities hiding in your operation.
              </p>
            </div>

            <div className="space-y-16 sm:space-y-24">
              {/* Feature 1: Quote Smarter */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center mb-4">
                      <span
                        className="text-sm font-medium px-4 py-1.5 rounded-full"
                        style={{
                          backgroundColor: 'rgba(60, 131, 246, 0.1)',
                          color: 'rgb(60, 131, 246)',
                        }}
                      >
                        AI-Powered
                      </span>
                    </div>
                    <h3 className="text-[18px] font-medium text-black mb-3">Quote Smarter - Win More, Earn More</h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      AI-powered pricing that protects your margins. Our pricing AI analyses historical wins and losses, live market rates,
                      and client behaviour to recommend profitable price bands before you quote. It shows your win probability and ensures
                      every deal earns what it should.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Smart pricing guardrails per lane and client.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Win rate predictions and real-time margin analysis.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Instant quote generation with route cost insights.</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-black">Impact:</span> Win more profitable jobs with confidence before the wheels
                    turn.
                  </p>
                </div>
                <div className="relative">
                  <div
                    className="rounded-lg pt-4 pl-4 sm:pt-6 sm:pl-6 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(60, 131, 246, 0.08), rgba(60, 131, 246, 0.02))',
                    }}
                  >
                    <img
                      src="/images/quote-book-ai-interface.png"
                      alt="Quote and booking AI interface"
                      className="w-full h-auto rounded shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 2: Deliver Efficiently */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 lg:order-2">
                  <div>
                    <div className="inline-flex items-center mb-4">
                      <span
                        className="text-sm font-medium px-4 py-1.5 rounded-full"
                        style={{
                          backgroundColor: 'rgba(60, 131, 246, 0.1)',
                          color: 'rgb(60, 131, 246)',
                        }}
                      >
                        Real-Time
                      </span>
                    </div>
                    <h3 className="text-[18px] font-medium text-black mb-3">Deliver Efficiently — Every Trip Optimised</h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      See where profit is made and where it's lost. Our AI analyses every completed trip to find operational leaks from fuel
                      inefficiencies to driver-route mismatches and provides actionable insights to improve cost per kilometre.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <BarChart className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Route and vehicle performance benchmarking.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Driver and load pairing recommendations.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">AI alerts for wasteful routes and idle vehicles.</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-black">Impact:</span> Reduce operational costs and improve overall fleet
                    utilisation.
                  </p>
                </div>
                <div className="relative lg:order-1">
                  <div
                    className="rounded-lg pt-4 pl-4 sm:pt-6 sm:pl-6 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(60, 131, 246, 0.08), rgba(60, 131, 246, 0.02))',
                    }}
                  >
                    <div className="w-full space-y-4">
                      {/* Top row - 2 alert cards side by side */}
                      <div className="grid grid-cols-2 gap-4">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-17%20at%2020.46.35-dH0BdNEPSYrO0FdMuUsTDzWasg67y8.png"
                          alt="Harsh braking events alert showing N3 Durban Approach with 12 events per week and R 800 savings potential"
                          className="w-full h-auto rounded"
                        />
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-17%20at%2020.46.46-b2PzxGoD4ptlJR2xIZuzdZpe1sIlfT.png"
                          alt="Speed variance alert showing N1 Cape Town-JHB route with high variance and R 1,200 savings potential"
                          className="w-full h-auto rounded"
                        />
                      </div>

                      {/* Bottom row - Performance heatmap full width */}
                      <div>
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-17%20at%2020.46.20-zvgKQ6K9jlEQV8il921oLJmTd1k8qs.png"
                          alt="Performance activity heatmap showing 12 months of daily performance scores with darker green indicating better performance"
                          className="w-full h-auto rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3: Invoice Automatically */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center mb-4">
                      <span
                        className="text-sm font-medium px-4 py-1.5 rounded-full"
                        style={{
                          backgroundColor: 'rgba(60, 131, 246, 0.1)',
                          color: 'rgb(60, 131, 246)',
                        }}
                      >
                        Automated
                      </span>
                    </div>
                    <h3 className="text-[18px] font-medium text-black mb-3">Invoice Automatically - Finance That Runs Itself</h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Automate the entire invoice lifecycle. When a delivery is verified, Truckwys generates compliant invoices
                      automatically, scores them for payment risk, and syncs them to your accounting system. AI predicts payment delays and
                      helps you take action before cashflow slows.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FileCheck className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Auto-invoice generation from verified trips.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Star className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">AI payment scoring by customer and lane.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <RefreshCw className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Real-time sync with Xero, Sage, QuickBooks.</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-black">Impact:</span> Cut admin hours, eliminate manual errors, and gain visibility
                    into cashflow.
                  </p>
                </div>
                <div className="relative">
                  <div
                    className="rounded-lg pt-4 pl-4 sm:pt-6 sm:pl-6 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(60, 131, 246, 0.08), rgba(60, 131, 246, 0.02))',
                    }}
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-17%20at%2016.27.31-pDSUEy8b52ssLL2WXOoQnyH27zWQci.png"
                      alt="Invoice pipeline dashboard showing outstanding invoices, overdue amounts, and AI-powered advance scoring with POD verification status"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>

              {/* Feature 4: Get Paid Instantly */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-12 sm:pb-16">
                <div className="space-y-6 lg:order-2">
                  <div>
                    <div className="inline-flex items-center mb-4">
                      <span
                        className="text-sm font-medium px-4 py-1.5 rounded-full"
                        style={{
                          backgroundColor: 'rgba(60, 131, 246, 0.1)',
                          color: 'rgb(60, 131, 246)',
                        }}
                      >
                        Instant Access
                      </span>
                    </div>
                    <h3 className="text-[18px] font-medium text-black mb-3">Get Paid Instantly - Cash When You Need It</h3>
                  </div>

                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      Turn completed trips into same-day cash. Our integrated Capital module verifies your invoices, scores risk instantly,
                      and unlocks same-day advances through our lending network - without paperwork or waiting weeks.
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Instant invoice verification and risk scoring.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Same-day cash advances through trusted partners.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(60, 131, 246)' }} />
                        <span className="text-base text-black leading-relaxed">Transparent fees and repayment schedules.</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 leading-relaxed">
                    <span className="font-semibold text-black">Impact:</span> Convert verified work into liquidity in hours, not weeks.
                  </p>
                </div>
                <div className="relative lg:order-1">
                  <div
                    className="rounded-lg pt-4 pl-4 sm:pt-6 sm:pl-6 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to bottom, rgba(60, 131, 246, 0.08), rgba(60, 131, 246, 0.02))',
                    }}
                  >
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-17%20at%2016.28.22-f5FPQxNu6OgiUmyPlGq7u79inL9Byi.png"
                      alt="Capital dashboard showing 39 eligible invoices ready for instant payment, available capital of R 500,000, outstanding advances, utilisation rate, and advance history with customer details and status"
                      className="w-full h-auto rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capital Section - Moved from [05] to [02] */}
        <section className="pt-8 pb-16 sm:pb-20 lg:pb-24 bg-gray-50">
          <div className="flex justify-between items-center pb-6 mb-8 border-b border-dashed border-gray-200">
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16">[02] CAPITAL</div>
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16 hidden sm:block">
              INSTANT CASH ADVANCES
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-12 mb-12">
              <div>
                <h2 className="text-[32px] font-medium leading-[38px] tracking-[-0.32px] text-black">
                  Turn completed loads into immediate cash
                </h2>
              </div>
              <div className="lg:pt-2">
                <p className="text-[20px] sm:text-[24px] lg:text-[32px] text-gray-600 leading-[38px] tracking-[-0.32px] mb-2">
                  AI-verified working capital for fleets. From POD to payment in hours.
                </p>
                <p className="text-[20px] sm:text-[24px] lg:text-[32px] text-gray-600 leading-[38px] tracking-[-0.32px]">
                  No paperwork. No waiting. Just cash.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-16">
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-semibold text-black mb-6">How It Works</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgb(60, 131, 246)' }}
                      >
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-black mb-1">Verify</h5>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Completed jobs are automatically checked and scored for risk.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgb(60, 131, 246)' }}
                      >
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-black mb-1">Approve</h5>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Your eligible invoices appear instantly in the Capital dashboard.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgb(60, 131, 246)' }}
                      >
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-semibold text-black mb-1">Advance</h5>
                        <p className="text-base text-gray-600 leading-relaxed">
                          Select invoices for same-day payout. Funds arrive within hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-50 rounded-md border border-gray-200 p-8 min-h-[400px] flex items-center justify-center">
                  <div className="w-full max-w-2xl">
                    {/* Workflow Steps */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between mb-8 gap-6 sm:gap-0">
                      {/* Step 1: Upload POD */}
                      <div className="flex flex-col items-center gap-3 flex-1 w-full sm:w-auto">
                        <div className="w-16 h-16 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center relative">
                          <FileText className="w-8 h-8 text-black" />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div className="text-center min-h-[48px] flex flex-col justify-start">
                          <div className="text-xs sm:text-sm font-semibold text-black">Upload POD</div>
                          <div className="text-xs text-gray-500">Completed trip</div>
                        </div>
                      </div>

                      {/* Arrow 1 - Hidden on mobile */}
                      <div className="hidden sm:flex flex-shrink-0 px-4 pt-6">
                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                          <path
                            d="M0 10 L30 10 M30 10 L25 5 M30 10 L25 15"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* Step 2: AI Verification - EMPHASIZED */}
                      <div className="flex flex-col items-center gap-3 flex-1 w-full sm:w-auto">
                        <div className="relative">
                          {/* Pulsing background effect */}
                          <div className="absolute inset-0 w-16 h-16 rounded-lg bg-gray-200 opacity-50 animate-pulse"></div>
                          <div className="w-16 h-16 rounded-lg bg-white border-2 border-gray-300 flex items-center justify-center relative">
                            <Sparkles className="w-8 h-8 text-black" />
                            {/* Scanning lines effect */}
                            <div className="absolute inset-0 overflow-hidden rounded-lg">
                              <div
                                className="absolute w-full h-0.5 bg-black opacity-20"
                                style={{
                                  animation: 'scan 2s ease-in-out infinite',
                                  top: '0',
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="text-center min-h-[48px] flex flex-col justify-start">
                          <div className="text-xs sm:text-sm font-semibold text-black">AI Verification</div>
                          <div className="text-xs text-gray-600">Analyzing...</div>
                        </div>
                      </div>

                      {/* Arrow 2 - Hidden on mobile */}
                      <div className="hidden sm:flex flex-shrink-0 px-4 pt-6">
                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                          <path
                            d="M0 10 L30 10 M30 10 L25 5 M30 10 L25 15"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* Step 3: Instant Approval */}
                      <div className="flex flex-col items-center gap-3 flex-1 w-full sm:w-auto">
                        <div className="w-16 h-16 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center">
                          <CheckCircle className="w-8 h-8 text-black" />
                        </div>
                        <div className="text-center min-h-[48px] flex flex-col justify-start">
                          <div className="text-xs sm:text-sm font-semibold text-black">Instant Approval</div>
                          <div className="text-xs text-gray-500">Risk scored</div>
                        </div>
                      </div>

                      {/* Arrow 3 - Hidden on mobile */}
                      <div className="hidden sm:flex flex-shrink-0 px-4 pt-6">
                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                          <path
                            d="M0 10 L30 10 M30 10 L25 5 M30 10 L25 15"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      {/* Step 4: Same-day Payment */}
                      <div className="flex flex-col items-center gap-3 flex-1 w-full sm:w-auto">
                        <div className="w-16 h-16 rounded-lg bg-white border-2 border-gray-200 flex items-center justify-center">
                          <Zap className="w-8 h-8 text-black" />
                        </div>
                        <div className="text-center min-h-[48px] flex flex-col justify-start">
                          <div className="text-xs sm:text-sm font-semibold text-black">Same-day Payment</div>
                          <div className="text-xs text-gray-500">Funds released</div>
                        </div>
                      </div>
                    </div>

                    {/* AI Analysis Details */}
                    <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-black mb-1">AI Risk Analysis</div>
                          <div className="text-xs text-gray-600 leading-relaxed">
                            Our AI verifies delivery proof, validates customer payment history, and scores invoice risk in real-time to
                            unlock instant funding.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CSS animations */}
                  <style jsx>{`
                    @keyframes scan {
                      0% {
                        top: 0;
                      }
                      50% {
                        top: 100%;
                      }
                      100% {
                        top: 0;
                      }
                    }
                    @keyframes progress {
                      0% {
                        width: 0%;
                      }
                      50% {
                        width: 75%;
                      }
                      100% {
                        width: 100%;
                      }
                    }
                  `}</style>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-md p-12 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="w-6 h-6" style={{ color: 'rgb(60, 131, 246)' }} />
                    <h5 className="text-lg font-semibold text-black">Same-day cash advance</h5>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">Get funds within hours of completing a job, not weeks.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6" style={{ color: 'rgb(60, 131, 246)' }} />
                    <h5 className="text-lg font-semibold text-black">Dynamic risk limits per customer</h5>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">
                    AI adjusts your available capital based on real-time performance.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h5 className="text-lg font-semibold text-black">22% improvement in working capital</h5>
                  </div>
                  <p className="text-base text-gray-600 leading-relaxed">Average increase in available cash flow for our customers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works - Redesigned */}
        <section className="overflow-hidden pt-8 pb-16 sm:pb-20 lg:pb-24 bg-white">
          <div className="flex justify-between items-center pb-6 mb-8 border-b border-dashed border-gray-200">
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16">[03] HOW IT WORKS</div>
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16 hidden sm:block">
              SIMPLE PROCESS
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-16">
            <div className="space-y-12">
              <div className="text-left lg:text-center mb-16">
                <h2 className="text-[32px] font-medium leading-[38px] tracking-[-0.32px] text-black mb-4">
                  From data to decision in four simple steps
                </h2>
                <p className="text-[20px] sm:text-[24px] lg:text-[32px] text-gray-500 leading-[38px] tracking-[-0.32px]">
                  Connect, analyse, act and watch your profitability grow.
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-8 sm:p-12 mb-16 border border-gray-200 relative min-h-[600px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
                  {/* Left side - Inputs */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-600 mb-6">Data In</h3>

                    {/* Invoice document */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 transform hover:scale-105 transition-transform">
                      <div className="flex items-start gap-4">
                        <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-black mb-2">Invoice #2847</div>
                          <div className="space-y-1">
                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spreadsheet */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 transform hover:scale-105 transition-transform">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center flex-shrink-0">
                          <div className="grid grid-cols-3 gap-0.5 w-5 h-5">
                            <div className="bg-white rounded-sm"></div>
                            <div className="bg-white rounded-sm"></div>
                            <div className="bg-white rounded-sm"></div>
                            <div className="bg-white rounded-sm"></div>
                            <div className="bg-white rounded-sm"></div>
                            <div className="bg-white rounded-sm"></div>
                            <div className="bg-white rounded-sm"></div>
                            <div className="bg-white rounded-sm"></div>
                            <div className="bg-white rounded-sm"></div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-black mb-2">Trip Data.xlsx</div>
                          <div className="grid grid-cols-4 gap-1">
                            {[...Array(12)].map((_, i) => (
                              <div key={i} className="h-2 bg-gray-200 rounded"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Document */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 transform hover:scale-105 transition-transform">
                      <div className="flex items-start gap-4">
                        <FileText className="w-8 h-8 text-gray-600 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-black mb-2">POD Document</div>
                          <div className="space-y-1">
                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center divider with AI processing */}
                  <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center justify-center z-10">
                    <div className="w-px h-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
                    <div className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg border-2 border-blue-500">
                      <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
                    </div>
                  </div>

                  {/* Right side - Outputs */}
                  <div className="space-y-6 lg:pl-8">
                    <h3 className="text-lg font-semibold text-gray-600 mb-6">Insights Out</h3>

                    {/* Dashboard chart */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-blue-200 transform hover:scale-105 transition-transform relative">
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-400 rounded-full"></div>
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 rounded px-3 py-1 flex-shrink-0">
                          <span className="text-xs font-bold text-purple-700">Figure</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-black mb-3">Margin Analysis</div>
                          <div className="flex items-end gap-2 h-20">
                            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '60%' }}></div>
                            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '80%' }}></div>
                            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '45%' }}></div>
                            <div className="flex-1 bg-blue-500 rounded-t" style={{ height: '90%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Data table */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-blue-200 transform hover:scale-105 transition-transform relative">
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-400 rounded-full"></div>
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 rounded px-3 py-1 flex-shrink-0">
                          <span className="text-xs font-bold text-purple-700">table</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-black mb-3">Route Performance</div>
                          <div className="space-y-2">
                            <div className="grid grid-cols-3 gap-2">
                              <div className="h-2 bg-gray-300 rounded"></div>
                              <div className="h-2 bg-gray-300 rounded"></div>
                              <div className="h-2 bg-gray-300 rounded"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="h-2 bg-gray-200 rounded"></div>
                              <div className="h-2 bg-gray-200 rounded"></div>
                              <div className="h-2 bg-gray-200 rounded"></div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              <div className="h-2 bg-gray-200 rounded"></div>
                              <div className="h-2 bg-gray-200 rounded"></div>
                              <div className="h-2 bg-gray-200 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action item */}
                    <div className="bg-white rounded-lg p-6 shadow-sm border-2 border-blue-200 transform hover:scale-105 transition-transform relative">
                      <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-400 rounded-full"></div>
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 rounded px-3 py-1 flex-shrink-0">
                          <span className="text-xs font-bold text-green-700">caption</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-black mb-2">Recommended Action</div>
                          <div className="space-y-1">
                            <div className="h-2 bg-gray-200 rounded w-full"></div>
                            <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 min-h-[64px]">
                    <Database className="w-6 h-6 text-black flex-shrink-0" />
                    <h3 className="text-[20px] font-medium text-black">Connect your data</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Securely link your telematics, accounting, and operational systems. Our AI builds a live digital twin of your fleet's
                    economics.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 min-h-[64px]">
                    <Sparkles className="w-6 h-6 text-black flex-shrink-0" />
                    <h3 className="text-[20px] font-medium text-black">AI finds your edge</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Truckwys benchmarks every trip, quote, and invoice to uncover hidden risks and margin opportunities.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 min-h-[64px]">
                    <TrendingUp className="w-6 h-6 text-black flex-shrink-0" />
                    <h3 className="text-[20px] font-medium text-black">Actionable intelligence</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Get proactive advice, not just reports — price adjustments, efficiency tweaks, and critical cash-flow alerts.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 min-h-[64px]">
                    <CheckCircle className="w-6 h-6 text-black flex-shrink-0" />
                    <h3 className="text-[20px] font-medium text-black">Execute with confidence</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Make AI-backed decisions that boost margin, reduce cost, and speed up payments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different - Moved from [03] to [04] */}
        <section className="pt-8 pb-16 sm:pb-20 lg:pb-24 bg-gray-50">
          <div className="flex justify-between items-center pb-6 mb-8 border-b border-dashed border-gray-200">
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16">
              [04] WHY WE'RE DIFFERENT
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16 hidden sm:block">
              COMPETITIVE ADVANTAGE
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-16">
            <div className="py-12 mb-16">
              <h2 className="text-[32px] font-medium leading-[38px] tracking-[-0.32px] text-black text-left lg:text-center">
                An Intelligence Layer, Not Just Another Dashboard
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1: Beyond Dashboards */}
              <div className="bg-white rounded-md p-8 shadow-sm border border-gray-200 flex flex-col">
                <h3 className="text-[20px] font-medium mb-3 text-black">Beyond dashboards</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  We don't just visualize data. Our AI agents actively find money in your operation - from margin leaks to cash
                  opportunities.
                </p>

                <div className="mt-auto bg-gray-50 rounded-md p-6 border border-gray-200">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-md border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div>
                          <div className="text-sm font-medium text-black">Margin opportunity found</div>
                          <div className="text-xs text-gray-500">JHB → CPT route</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-green-600">+R12,400</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-md border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                        <div>
                          <div className="text-sm font-medium text-black">Cash flow alert</div>
                          <div className="text-xs text-gray-500">Invoice #2847 overdue</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-amber-600">R8,200</div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-md border border-gray-200">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <div>
                          <div className="text-sm font-medium text-black">Route optimization</div>
                          <div className="text-xs text-gray-500">Reduce empty km by 18%</div>
                        </div>
                      </div>
                      <div className="text-lg font-bold text-blue-600">+R5,600</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2: True Financial Intelligence */}
              <div className="bg-white rounded-md p-8 shadow-sm border border-gray-200 flex flex-col">
                <h3 className="text-[20px] font-medium mb-3 text-black">True financial intelligence</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  While others track trucks, we track profit. Every metric ties to your bottom line.
                </p>

                <div className="mt-auto bg-gray-50 rounded-md p-6 border border-gray-200">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-10-06%20at%2017.57.51-lKldL5JZCSAsGxDvyTeBo6zOYnh7RQ.png"
                    alt="30-day cash flow forecast dashboard"
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>

              {/* Box 3: Built for African Reality */}
              <div className="bg-white rounded-md p-8 shadow-sm border border-gray-200 flex flex-col">
                <h3 className="text-[20px] font-medium mb-3 text-black">Built for African reality</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  Multi-currency, cross-border complexity, extended payment terms - we understand your challenges.
                </p>

                <div className="mt-auto bg-gray-50 rounded-md p-6 border border-gray-200">
                  <div className="space-y-3">
                    <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold">ZAR</div>
                        <div>
                          <div className="text-sm font-medium text-black">South African Rand</div>
                          <div className="text-xs text-gray-500">Primary currency</div>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-black">R 1.00</div>
                    </div>

                    <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold">USD</div>
                        <div>
                          <div className="text-sm font-medium text-black">US Dollar</div>
                          <div className="text-xs text-gray-500">Cross-border rates</div>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-black">$ 0.054</div>
                    </div>

                    <div className="bg-white rounded-md p-4 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold">EUR</div>
                        <div>
                          <div className="text-sm font-medium text-black">Euro</div>
                          <div className="text-xs text-gray-500">International loads</div>
                        </div>
                      </div>
                      <div className="text-sm font-bold text-black">€ 0.051</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 4: Real-Time Intelligence */}
              <div className="bg-white rounded-md p-8 shadow-sm border border-gray-200 flex flex-col">
                <h3 className="text-[20px] font-medium mb-3 text-black">Real-time intelligence</h3>
                <p className="text-base text-gray-600 leading-relaxed mb-8">
                  Instant alerts on margin risks, cash flow issues, and profit opportunities as they happen.
                </p>

                <div className="mt-auto bg-gray-50 rounded-md p-6 border border-gray-200">
                  <div className="bg-white rounded-md p-4 border border-gray-200 mb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-md bg-red-100 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-black mb-1">Critical Alert</div>
                        <div className="text-xs text-gray-600 leading-relaxed">Fuel costs 12% above forecast on DBN route</div>
                      </div>
                      <div className="text-xs text-gray-500">2m ago</div>
                    </div>
                    <button className="w-full bg-black text-white text-xs py-2 rounded-md hover:bg-gray-800">Review Now</button>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-white rounded-md p-3 border border-gray-200 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                      <div className="text-xs text-gray-600 flex-1">Payment received: R24,500</div>
                      <div className="text-xs text-gray-500">15m ago</div>
                    </div>

                    <div className="bg-white rounded-md p-3 border border-gray-200 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                      <div className="text-xs text-gray-600 flex-1">New quote opportunity: JHB → PE</div>
                      <div className="text-xs text-gray-500">1h ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="pt-8 pb-16 sm:pb-20 lg:pb-24 bg-white">
          <div className="flex justify-between items-center pb-6 mb-8 border-b border-dashed border-gray-200">
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16">[05] INTEGRATIONS</div>
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16 hidden sm:block">
              SEAMLESS CONNECTIVITY
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <h2 className="text-[32px] font-medium leading-tight text-black">Seamless integrations. Instant intelligence.</h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  Truckwys connects directly to your existing TMS, telematics, and accounting software — no rip-and-replace, no downtime.
                  Just plug in your data, and our AI starts finding profit within hours.
                </p>
                <Link href="/get-started">
                  <Button size="lg" className="h-12 px-8 text-white hover:opacity-90" style={{ backgroundColor: 'rgb(60, 131, 246)' }}>
                    Get started
                  </Button>
                </Link>
              </div>

              {/* Right side - Integration logos grid */}
              <div className="relative min-h-[400px] flex items-center justify-center">
                <div className="grid grid-cols-4 gap-4 w-full max-w-lg">
                  {/* Row 1 */}
                  <div className="aspect-square rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center p-6 transform translate-y-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12">
                        <path
                          d="M12 2L2 7L12 12L22 7L12 2Z"
                          fill="#FF6B6B"
                          stroke="#FF6B6B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M2 17L12 22L22 17" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Xero Logo */}
                  <div className="aspect-square rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center p-6 transform -translate-y-2">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-2xl font-bold text-[#13B5EA]">Xero</div>
                    </div>
                  </div>

                  <div className="aspect-square rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center p-6 transform translate-y-6">
                    <div className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-0.5 w-8 h-8">
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                        <div className="bg-white rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  <div className="aspect-square rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center p-6">
                    <div className="w-12 h-12 bg-purple-600 rounded flex items-center justify-center text-white font-bold text-2xl">M</div>
                  </div>

                  {/* Row 2 */}
                  {/* CtrlFleet Logo */}
                  <div className="aspect-square rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center p-6 transform -translate-y-4">
                    <div className="flex flex-col items-center justify-center">
                      <div className="text-lg font-bold text-black">Ctrl</div>
                      <div className="text-lg font-bold text-[#3C83F6]">Fleet</div>
                    </div>
                  </div>

                  <div className="aspect-square rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center p-6 transform translate-y-2">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      QB
                    </div>
                  </div>

                  <div className="aspect-square rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center p-6 transform -translate-y-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-sm"></div>
                      </div>
                    </div>
                  </div>

                  {/* Geotab Logo */}
                  <div className="aspect-square rounded-md bg-white border border-gray-200 shadow-sm flex items-center justify-center p-6 transform translate-y-4">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-10 h-10 bg-[#0066CC] rounded-full flex items-center justify-center mb-1">
                        <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                      </div>
                      <div className="text-xs font-bold text-[#0066CC]">GEOTAB</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="pt-8 pb-16 sm:pb-20 lg:pb-24 bg-white">
          <div className="flex justify-between items-center pb-6 mb-8 border-b border-dashed border-gray-200">
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16">[06] TESTIMONIALS</div>
            <div className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider px-4 sm:px-6 lg:px-16 hidden sm:block">
              PROVEN RESULTS
            </div>
          </div>

          <div className="px-4 sm:px-6 lg:px-16">
            <div className="py-12 mb-16">
              <h2 className="text-[32px] font-medium leading-[38px] tracking-[-0.32px] text-black text-left lg:text-center">
                Proven results for fleets like yours
              </h2>
            </div>

            <div>
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  {/* Left side - 2 stacked boxes */}
                  <div className="lg:col-span-3 flex flex-col gap-6">
                    {testimonials[activeTestimonial].imageType === 'logo' ? (
                      /* Logo display */
                      <div className="bg-white border-2 border-gray-200 rounded-md overflow-hidden flex items-center justify-center min-h-[200px] p-8">
                        {testimonials[activeTestimonial].logo === 'transafrica' && (
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-black rounded flex items-center justify-center">
                              <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8">
                                <path d="M18 18.5a1.5 1.5 0 0 1-1 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5 1.5 1.5 0 0 1 1 1.5zm1.5-9l1.96 2.5H17V11.5m-11 7a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 3 18.5 1.5 1.5 0 0 1 4.5 17 1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3 3 3 0 0 0 3-3h6a3 3 0 0 0 3 3 3 3 0 0 0 3-3h2v-5l-3-4z" />
                              </svg>
                            </div>
                            <span className="text-3xl font-bold text-black tracking-tight">TransAfrica</span>
                          </div>
                        )}
                        {testimonials[activeTestimonial].logo === 'savanna' && (
                          <div className="text-3xl font-bold text-black tracking-wider" style={{ fontFamily: 'serif' }}>
                            SAVANNA EXPRESS
                          </div>
                        )}
                        {testimonials[activeTestimonial].logo === 'cape' && (
                          <div className="flex flex-col items-center">
                            <div className="text-3xl font-bold text-black tracking-tight leading-none">CAPE FREIGHT</div>
                            <div className="text-sm text-black tracking-widest">COMPANY</div>
                          </div>
                        )}
                        {testimonials[activeTestimonial].logo === 'zambezi' && (
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col gap-1">
                              <div className="w-8 h-1.5 bg-black"></div>
                              <div className="w-8 h-1.5 bg-black"></div>
                              <div className="w-8 h-1.5 bg-black"></div>
                            </div>
                            <span className="text-3xl font-bold text-black">ZAMBEZI</span>
                          </div>
                        )}
                        {testimonials[activeTestimonial].logo === 'atlas' && (
                          <div className="flex items-center gap-3">
                            <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-2xl">A</span>
                            </div>
                            <div className="flex flex-col leading-none">
                              <span className="text-2xl font-bold text-black">ATLAS</span>
                              <span className="text-sm text-black tracking-wider">HAULAGE</span>
                            </div>
                          </div>
                        )}
                        {testimonials[activeTestimonial].logo === 'kilimanjaro' && (
                          <div className="flex items-center gap-2">
                            <svg viewBox="0 0 24 24" fill="black" className="w-12 h-12">
                              <path d="M14,6L10.25,11L13.1,14.8L11.5,16C9.81,13.75 7,10 7,10L1,18H23L14,6Z" />
                            </svg>
                            <span className="text-2xl font-bold text-black">KILIMANJARO</span>
                          </div>
                        )}
                      </div>
                    ) : (
                      /* Headshot display */
                      <div className="bg-gray-200 rounded-md overflow-hidden flex items-center justify-center max-h-[200px]">
                        <img
                          src={testimonials[activeTestimonial].image || '/placeholder.svg'}
                          alt={testimonials[activeTestimonial].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    {/* Name card */}
                    <div className="bg-black text-white rounded-md p-6 flex flex-col justify-center max-h-[140px]">
                      <h3 className="text-xl font-bold mb-2">{testimonials[activeTestimonial].name}</h3>
                      <p className="text-gray-300 text-sm">{testimonials[activeTestimonial].title}</p>
                    </div>
                  </div>

                  {/* Right side - Testimonial content */}
                  <div className="lg:col-span-9 bg-gray-50 rounded-md p-8 flex flex-col justify-between lg:max-h-[340px]">
                    <div>
                      <h3 className="text-xl font-bold mb-6 text-black">{testimonials[activeTestimonial].company}</h3>
                      <p className="text-lg text-gray-700 mb-8 leading-relaxed">{testimonials[activeTestimonial].quote}</p>
                    </div>

                    <div className="mt-auto">
                      <div className="text-xl font-bold mb-2 text-black">{testimonials[activeTestimonial].metric}</div>
                      <div className="text-gray-600 text-xl">{testimonials[activeTestimonial].metricLabel}</div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-center gap-6 mt-12">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-md border-2 border-gray-300 flex items-center justify-center hover:border-black transition-colors bg-white"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>

                  <div className="flex items-center gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-2 rounded-full transition-all ${index === activeTestimonial ? 'bg-black w-6' : 'bg-gray-300 w-2'}`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-md border-2 border-gray-300 flex items-center justify-center hover:border-black transition-colors bg-white"
                    aria-label="Next testimonial"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-8 pb-16 sm:pb-20 lg:pb-24 bg-white">
          <div
            className="relative overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgb(60, 131, 246) 0%, rgb(37, 99, 235) 100%)',
            }}
          >
            {/* Very light faded square blocks */}
            <div className="absolute inset-0 opacity-5">
              {/* Top left squares */}
              <div className="absolute top-10 left-10 w-24 h-24 bg-white rounded-lg"></div>
              <div className="absolute top-32 left-40 w-16 h-16 bg-white rounded-lg"></div>
              <div className="absolute top-20 left-72 w-20 h-20 bg-white rounded-lg"></div>

              {/* Top right squares */}
              <div className="absolute top-16 right-20 w-28 h-28 bg-white rounded-lg"></div>
              <div className="absolute top-40 right-56 w-16 h-16 bg-white rounded-lg"></div>
              <div className="absolute top-8 right-80 w-20 h-20 bg-white rounded-lg"></div>

              {/* Bottom left squares */}
              <div className="absolute bottom-20 left-16 w-20 h-20 bg-white rounded-lg"></div>
              <div className="absolute bottom-40 left-48 w-24 h-24 bg-white rounded-lg"></div>
              <div className="absolute bottom-12 left-80 w-16 h-16 bg-white rounded-lg"></div>

              {/* Bottom right squares */}
              <div className="absolute bottom-24 right-24 w-24 h-24 bg-white rounded-lg"></div>
              <div className="absolute bottom-48 right-60 w-20 h-20 bg-white rounded-lg"></div>
              <div className="absolute bottom-16 right-96 w-16 h-16 bg-white rounded-lg"></div>

              {/* Center squares */}
              <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white rounded-lg transform -translate-y-1/2"></div>
              <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white rounded-lg"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium mb-6 text-white leading-tight">
                  Redefining freight profitability
                </h2>
                <p className="text-base sm:text-lg text-white/90 mb-10 leading-relaxed">
                  See exactly how much profit you're leaving on the table with our free fleet analysis.
                </p>

                <div className="flex flex-wrap gap-4 text-white justify-center">
                  <Link href="/get-started">
                    <Button size="lg" className="bg-white text-black hover:bg-gray-100 h-12 px-8 shadow-lg hover:shadow-xl transition-all">
                      Get started
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-wrap gap-8 text-white justify-center mt-16">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <span className="text-base">No credit card required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <span className="text-base">Free 30-day trial</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    </div>
                    <span className="text-base">Cancel anytime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - NO FRAME */}
    </div>
  );
}
