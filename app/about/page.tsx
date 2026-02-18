import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Target, Users, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About TruckWys | AI-Powered Fleet Profitability Platform',
  description:
    'Learn about TruckWys, the AI-powered fleet profitability platform built for African transport operators. Our mission is to help fleets quote smarter, cut costs, and get paid faster.',
  alternates: {
    canonical: 'https://truckwys.com/about',
  },
  openGraph: {
    title: 'About TruckWys | AI-Powered Fleet Profitability Platform',
    description: 'Learn about TruckWys and our mission to transform fleet profitability across Africa.',
    url: 'https://truckwys.com/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Profit-First Thinking',
      description: 'Every feature we build is designed to improve your bottom line. We measure success in Rands saved.',
    },
    {
      icon: Zap,
      title: 'AI That Actually Works',
      description:
        "No gimmicks. Our AI is trained on real African transport data to deliver recommendations you can trust.",
    },
    {
      icon: Globe,
      title: 'Built for Africa',
      description:
        'Multi-currency, cross-border complexity, and local payment realities - we understand the African transport market.',
    },
    {
      icon: Users,
      title: 'Partnership, Not Software',
      description:
        "We succeed when you succeed. That's why we charge success fees - our incentives are aligned with yours.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-4">About TruckWys</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're building the financial intelligence layer for African fleet operations.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">Our Mission</h2>
          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              Transport operators across Africa lose millions in margin every year - through underpriced quotes,
              inefficient routes, and slow-paying customers. Most don't even know it's happening.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mt-4">
              TruckWys exists to change that. We use AI to find the profit leaks hiding in your operational data and
              give you the tools to fix them - automatically.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">Our Impact</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-black mb-2">5M+</div>
              <div className="text-gray-600">Trips analysed</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-black mb-2">15%</div>
              <div className="text-gray-600">Average margin uplift</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-4xl font-bold text-black mb-2">10 days</div>
              <div className="text-gray-600">Faster payments</div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">What We Believe</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg border border-gray-200">
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(60, 131, 246, 0.1)' }}
                >
                  <value.icon className="w-6 h-6" style={{ color: 'rgb(60, 131, 246)' }} />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section - Placeholder */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">Our Team</h2>
          <div className="p-8 bg-gray-50 rounded-lg border border-gray-200 text-center">
            <p className="text-gray-600 mb-4">
              TruckWys is built by a team with deep experience in African logistics, fintech, and AI.
            </p>
            <p className="text-gray-500 text-sm">Team profiles coming soon.</p>
            {/*
            When you have team info, replace with:
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="font-semibold text-black">{member.name}</h3>
                  <p className="text-gray-600 text-sm">{member.title}</p>
                </div>
              ))}
            </div>
            */}
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">Where We're Based</h2>
          <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-gray-700">
              <strong>Headquarters:</strong> South Africa
            </p>
            <p className="text-gray-600 mt-2">
              Serving fleet operators across the African continent.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <div
          className="p-8 rounded-lg text-center"
          style={{ background: 'linear-gradient(135deg, rgb(60, 131, 246) 0%, rgb(37, 99, 235) 100%)' }}
        >
          <h2 className="text-2xl font-semibold text-white mb-4">Ready to improve your fleet profitability?</h2>
          <p className="text-white/90 mb-6 max-w-lg mx-auto">
            Join leading transport operators across Africa who use TruckWys to protect margins and accelerate cash flow.
          </p>
          <Link href="/get-started">
            <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-gray-100 font-medium">
              Get Started Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
