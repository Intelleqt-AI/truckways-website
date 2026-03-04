import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact TruckWys | Fleet Profitability Support',
  description:
    'Get in touch with TruckWys. Contact our team for demo requests, support, or partnership inquiries. We help African fleet operators improve profitability.',
  alternates: {
    canonical: 'https://truckwys.com/contact',
  },
  openGraph: {
    title: 'Contact TruckWys | Fleet Profitability Support',
    description: 'Get in touch with TruckWys for demo requests, support, or partnership inquiries.',
    url: 'https://truckwys.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-12 sm:pt-32 sm:pb-16">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Ready to boost your fleet's profitability? Fill in your details below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form - Takes up 3 columns */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Sidebar - Contact Info - Takes up 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: 'rgba(60, 131, 246, 0.1)' }}
              >
                <Mail className="w-5 h-5" style={{ color: 'rgb(60, 131, 246)' }} />
              </div>
              <h2 className="text-lg font-semibold text-black mb-1">Email Us</h2>
              <a
                href="mailto:grant@truckwys.com"
                className="text-base font-medium hover:underline"
                style={{ color: 'rgb(60, 131, 246)' }}
              >
                grant@truckwys.com
              </a>
            </div>

            {/* Phone */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: 'rgba(60, 131, 246, 0.1)' }}
              >
                <Phone className="w-5 h-5" style={{ color: 'rgb(60, 131, 246)' }} />
              </div>
              <h2 className="text-lg font-semibold text-black mb-1">Call Us</h2>
              <p className="text-gray-400 text-base">Coming soon</p>
            </div>

            {/* Location */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: 'rgba(60, 131, 246, 0.1)' }}
              >
                <MapPin className="w-5 h-5" style={{ color: 'rgb(60, 131, 246)' }} />
              </div>
              <h2 className="text-lg font-semibold text-black mb-1">Location</h2>
              <p className="text-gray-600 text-base">South Africa</p>
            </div>

            {/* Business Hours */}
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                style={{ backgroundColor: 'rgba(60, 131, 246, 0.1)' }}
              >
                <Clock className="w-5 h-5" style={{ color: 'rgb(60, 131, 246)' }} />
              </div>
              <h2 className="text-lg font-semibold text-black mb-1">Business Hours</h2>
              <p className="text-gray-600 text-base">
                Mon – Fri: 8:00 AM – 6:00 PM (SAST)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
