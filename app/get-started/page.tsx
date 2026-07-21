'use client';

import type React from 'react';

import Link from 'next/link';
import { useState } from 'react';

const inputClass =
  'w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-3 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20 leading-6';

const labelClass = 'mb-1.5 block text-[13px] font-medium text-ink-2';

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    fleetSize: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);
    try {
      const response = await fetch('https://formsubmit.co/ajax/grant@truckwys.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New TruckWys Trial Request from ${formData.firstName} ${formData.lastName} at ${formData.company}`,
          'First Name': formData.firstName,
          'Last Name': formData.lastName,
          'Email': formData.email,
          'Company': formData.company,
          'Phone': formData.phone,
          'Fleet Size': formData.fleetSize,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <section className="bg-page">
        <div className="mx-auto max-w-lg px-5 py-24 md:py-32">
          <div role="status" aria-live="polite" className="card p-8 text-center sm:p-10">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft">
              <svg aria-hidden="true" className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="mt-6 text-[24px] font-semibold text-ink">Request received</h1>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-2">
              We will contact you within one working day to get your fleet set up on TruckWys.
            </p>
            <div className="mt-6 rounded-md border border-line bg-accent-soft p-4 text-left">
              <div className="eyebrow eyebrow-accent mb-1.5">FastPay</div>
              <p className="text-[13px] leading-relaxed text-ink-2">
                Once you are set up, go to Settings, then Billing, add your payment
                details and switch on FastPay from day one.
              </p>
            </div>
            <Link href="/" className="btn-secondary mt-8 w-full">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-page">
      <div className="mx-auto max-w-lg px-5 py-24 md:py-28">
        <div className="text-center">
          <div className="eyebrow eyebrow-accent mb-4">Get started</div>
          <h1 className="text-display text-ink">Start your free trial</h1>
          <p className="mt-4 text-[15px] text-ink-2">
            R4,500 per month after your trial. No setup fees. Cancel any time.
          </p>
        </div>

        <div className="card mt-10 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Sipho"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Mthembu"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.co.za"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                Company name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="Your transport company"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="phone" className={labelClass}>
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+27 82 123 4567"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="fleetSize" className={labelClass}>
                Fleet size
              </label>
              <select
                id="fleetSize"
                name="fleetSize"
                required
                value={formData.fleetSize}
                onChange={handleChange}
                className={inputClass}
              >
                <option value="">Select fleet size</option>
                <option value="1-10">1 to 10 vehicles</option>
                <option value="11-50">11 to 50 vehicles</option>
                <option value="51-100">51 to 100 vehicles</option>
                <option value="101-200">101 to 200 vehicles</option>
                <option value="200+">200+ vehicles</option>
              </select>
            </div>

            <button type="submit" disabled={submitting} className="btn-primary w-full disabled:opacity-60">
              {submitting ? 'Sending' : 'Start your free trial'}
            </button>

            {error && (
              <p role="alert" className="text-[13px] text-warning">
                Something went wrong. Please try again or email us directly at grant@truckwys.com.
              </p>
            )}

            <p className="text-center text-[12px] leading-relaxed text-ink-3">
              By submitting this form you agree to our{' '}
              <Link href="/terms" className="underline underline-offset-2 hover:text-ink-2">
                terms of service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-ink-2">
                privacy policy
              </Link>
              .
            </p>
          </form>
        </div>

        <p className="mt-6 text-center text-[13px] text-ink-3">
          Questions first? Email{' '}
          <a href="mailto:grant@truckwys.com" className="text-accent underline-offset-2 hover:underline">
            grant@truckwys.com
          </a>
        </p>
      </div>
    </section>
  );
}
