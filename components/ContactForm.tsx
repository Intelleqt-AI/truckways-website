'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { track } from '@vercel/analytics';

type Topic = { v: string; l: string };
type Status = 'idle' | 'sending' | 'error';

/** "Tell me when it's live" topics: a person, not a company, may ask, so Company is optional for them. */
const NOTIFY_TOPICS = new Set(['fast-pay', 'insurance']);

const FIELDS = ['name', 'email', 'company', 'fleet_size'] as const;
const MESSAGES: Record<(typeof FIELDS)[number], string> = {
  name: 'Enter your name.',
  email: 'Enter a work email address, like name@company.co.za.',
  company: 'Enter your company name.',
  fleet_size: 'Choose your fleet size.',
};

/**
 * "Talk to us" form. Delivery stays on FormSubmit to the same address (owner
 * decision), made robust:
 * - Without JavaScript it is a plain HTML form posting to FormSubmit, which
 *   redirects to /contact/sent (FormSubmit may show its own robot check).
 * - With JavaScript it validates in place (errors in text beside each field,
 *   summarised on submit, focus moved to the first problem), posts to
 *   FormSubmit's AJAX endpoint, waits for FormSubmit to confirm, and only then
 *   goes to /contact/sent. A failure or a 15 s timeout keeps what was typed and
 *   shows the email address instead. Never a silent success.
 * - Honeypot field (_honey) for bots; the button is disabled while sending.
 */
export default function ContactForm({ email, topics, next }: { email: string; topics: Topic[]; next: string }) {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<(typeof FIELDS)[number], string>>>({});
  const [topic, setTopic] = useState(topics[0]?.v ?? '');
  const companyOptional = NOTIFY_TOPICS.has(topic);

  // Preselect the topic from ?topic= (fleet-50, partner, fast-pay, insurance, other).
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get('topic');
    const sel = form.current?.elements.namedItem('topic') as HTMLSelectElement | null;
    if (t && sel && topics.some((x) => x.v === t)) {
      sel.value = t;
      setTopic(t);
    }
  }, [topics]);

  const validate = (f: HTMLFormElement) => {
    const e: typeof errors = {};
    const optional = NOTIFY_TOPICS.has((f.elements.namedItem('topic') as HTMLSelectElement | null)?.value ?? '');
    for (const k of FIELDS) {
      if (k === 'company' && optional) continue;
      const el = f.elements.namedItem(k) as HTMLInputElement | HTMLSelectElement | null;
      if (!el) continue;
      const v = el.value.trim();
      if (!v || (k === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v))) e[k] = MESSAGES[k];
    }
    return e;
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const f = ev.currentTarget;
    const e = validate(f);
    setErrors(e);
    const first = FIELDS.find((k) => e[k]);
    if (first) {
      (f.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }
    const data = Object.fromEntries(new FormData(f).entries());
    if (data._honey) return; // a bot filled the hidden field
    setStatus('sending');
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15_000);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
        signal: ctrl.signal,
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || String(body?.success) !== 'true') throw new Error('not delivered');
      const fleet = String(data.fleet_size || '');
      track('contact_submit', { topic: String(data.topic || ''), fleet_bucket: fleet });
      window.location.assign(next);
    } catch {
      setStatus('error');
    } finally {
      clearTimeout(timer);
    }
  };

  const err = (k: (typeof FIELDS)[number]) =>
    errors[k]
      ? { 'aria-invalid': true as const, 'aria-describedby': `${k}-err` }
      : {};
  const count = Object.keys(errors).length;

  return (
    <form ref={form} className="form" action={`https://formsubmit.co/${email}`} method="POST" noValidate onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="TruckWys website: Talk to us" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={next} />
      <div className="hp" aria-hidden="true">
        <label htmlFor="_honey">Leave this field empty</label>
        <input type="text" id="_honey" name="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      <div role="alert" className="form__summary" hidden={count === 0}>
        {count === 1 ? 'One field needs attention.' : `${count} fields need attention.`}
      </div>

      <div className="form__row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input className="input" id="name" name="name" type="text" autoComplete="name" required {...err('name')} />
          {errors.name ? <p className="field__err" id="name-err">{errors.name}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="email">Work email</label>
          <input className="input" id="email" name="email" type="email" autoComplete="email" inputMode="email" required {...err('email')} />
          {errors.email ? <p className="field__err" id="email-err">{errors.email}</p> : null}
        </div>
      </div>
      <div className="form__row">
        <div className="field">
          <label htmlFor="company">
            Company{companyOptional ? <span className="opt"> (optional)</span> : null}
          </label>
          <input className="input" id="company" name="company" type="text" autoComplete="organization" required={!companyOptional} {...err('company')} />
          {errors.company ? <p className="field__err" id="company-err">{errors.company}</p> : null}
        </div>
        <div className="field">
          <label htmlFor="fleet">Fleet size</label>
          <select className="input" id="fleet" name="fleet_size" required defaultValue="" {...err('fleet_size')}>
            <option value="" disabled>
              Choose
            </option>
            <option>1 to 4 trucks</option>
            <option>5 to 19 trucks</option>
            <option>20 to 49 trucks</option>
            <option>50 to 199 trucks</option>
            <option>200 or more trucks</option>
          </select>
          {errors.fleet_size ? <p className="field__err" id="fleet_size-err">{errors.fleet_size}</p> : null}
        </div>
      </div>
      <div className="field">
        <label htmlFor="topic">Topic</label>
        <select
          className="input"
          id="topic"
          name="topic"
          defaultValue={topics[0]?.v}
          onChange={(ev) => {
            setTopic(ev.target.value);
            if (NOTIFY_TOPICS.has(ev.target.value)) setErrors(({ company: _c, ...rest }) => rest); // eslint-disable-line @typescript-eslint/no-unused-vars
          }}
        >
          {topics.map((t) => (
            <option key={t.v} value={t.v}>
              {t.l}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">
          Message <span className="opt">(optional)</span>
        </label>
        <textarea className="input" id="message" name="message" rows={4} />
      </div>
      <button type="submit" className="btn btn--primary btn--block" data-cta="talk_to_us" data-loc="contact_form" disabled={status === 'sending'} aria-busy={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      <div aria-live="polite">
        {status === 'error' ? (
          <p className="form__error">
            That did not send, and nothing you typed was lost. Try again, or email us at{' '}
            <a className="ulink" href={`mailto:${email}`}>
              {email}
            </a>
            .
          </p>
        ) : null}
      </div>
    </form>
  );
}
