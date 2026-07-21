'use client';

import { useState } from 'react';

const inputClass =
  'w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-3 outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20';

const labelClass = 'mb-1.5 block text-[13px] font-medium text-ink-2';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    fleetSize: '',
    area: '',
    address: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/grant@truckwys.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New TruckWys Enquiry from ${formData.name} at ${formData.company}`,
          'Full Name': formData.name,
          'Company': formData.company,
          'Email': formData.email,
          'Phone': formData.phone,
          'Fleet Size': formData.fleetSize,
          'Area / Province': formData.area,
          'Business Address': formData.address || 'Not provided',
          'Message': formData.message,
          _replyto: formData.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', fleetSize: '', area: '', address: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft">
          <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-[20px] font-semibold text-ink">Message received</h3>
        <p className="mt-2 text-[15px] text-ink-2">
          We have your details and will reply within one working day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-5 text-[14px] font-medium text-accent underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name & Company */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Sipho Mthembu"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder="Your transport company"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email & Phone */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.co.za"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+27 82 123 4567"
            className={inputClass}
          />
        </div>
      </div>

      {/* Fleet Size & Area */}
      <div className="grid gap-4 sm:grid-cols-2">
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
            <option value="11-25">11 to 25 vehicles</option>
            <option value="26-50">26 to 50 vehicles</option>
            <option value="51-100">51 to 100 vehicles</option>
            <option value="101-250">101 to 250 vehicles</option>
            <option value="250+">250+ vehicles</option>
          </select>
        </div>
        <div>
          <label htmlFor="area" className={labelClass}>
            Area or province
          </label>
          <select
            id="area"
            name="area"
            required
            value={formData.area}
            onChange={handleChange}
            className={inputClass}
          >
            <option value="">Select your province</option>
            <option value="Gauteng">Gauteng</option>
            <option value="Western Cape">Western Cape</option>
            <option value="KwaZulu-Natal">KwaZulu-Natal</option>
            <option value="Eastern Cape">Eastern Cape</option>
            <option value="Free State">Free State</option>
            <option value="Limpopo">Limpopo</option>
            <option value="Mpumalanga">Mpumalanga</option>
            <option value="North West">North West</option>
            <option value="Northern Cape">Northern Cape</option>
            <option value="Other African country">Other African country</option>
            <option value="International">International</option>
          </select>
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className={labelClass}>
          Business address (optional)
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Street address, city"
          className={inputClass}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your fleet and what you want to fix"
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-primary w-full disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending' : 'Send message'}
      </button>

      {status === 'error' && (
        <p className="text-[13px] text-warning">
          Something went wrong. Please try again or email us directly at grant@truckwys.com.
        </p>
      )}

      <p className="text-[12px] leading-relaxed text-ink-3">
        By submitting this form you agree to our{' '}
        <a href="/privacy" className="underline underline-offset-2 hover:text-ink-2">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
