/**
 * Layout blocks for the phase B pages. Built on the shell's primitives
 * (components/ui.tsx, components/Blocks.tsx) and tokens; local styles in
 * ./pages-b.css. Nothing here changes a shared component.
 */
import type { ReactNode } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { ButtonLink, TextLink, TwoTone } from '../ui';
import { Breadcrumbs } from '../Blocks';
import { demoUrl, signupUrl } from '../../lib/site';
import Backdrop, { type BackdropPhoto } from '../Backdrop';
import { getPost } from '../../content/blog';

type Crumb = { name: string; path: string };

/** Flott calm hero: breadcrumbs, eyebrow, two-tone H1, lead, two buttons, price line, then one large product frame. */
export function FeatureHero({
  crumbs, eyebrow, a, b, lead, page, frame, aside, primary = 'signup', actions, note,
}: {
  crumbs: Crumb[];
  eyebrow: ReactNode;
  a: ReactNode;
  b?: ReactNode;
  lead: ReactNode;
  page: string;
  frame?: ReactNode;
  /** Optional visual in the right half of the hero (text keeps columns 1 to 7). */
  aside?: ReactNode;
  primary?: 'signup' | 'none';
  /** With primary="none": the page's own action row (e.g. "Get notified" on a coming-soon page). */
  actions?: ReactNode;
  /** Optional small line under the actions (e.g. what "Capital" means). */
  note?: ReactNode;
}) {
  return (
    <section className="b-hero" aria-labelledby="page-h1">
      <div className="wrap">
        <Breadcrumbs trail={crumbs} />
        <div className={aside ? 'b-hero__split' : undefined}>
        <div>
        <div className="label b-hero__eyebrow">{eyebrow}</div>
        <TwoTone as="h1" className="h1" id="page-h1" a={a} b={b} />
        <p className="lead b-hero__lead">{lead}</p>
        {primary === 'signup' ? (
          <>
            <div className="cta-pair">
              <ButtonLink href={signupUrl(`${page}-hero`)} cta="get_started" loc="hero">
                Get started
              </ButtonLink>
              <TextLink href={demoUrl(`${page}-hero`)} cta="open_demo" loc="hero">
                Open the demo
              </TextLink>
            </div>
            {/* Owner, 1 Oct 2026: no price line in any hero. The price lives on /pricing, the Home pricing section and Closing. */}
          </>
        ) : actions ? (
          <div className="b-hero__actions">{actions}</div>
        ) : null}
        {note ? <p className="small b-hero__note">{note}</p> : null}
        </div>
        {aside ? <div className="b-hero__aside">{aside}</div> : null}
        </div>
        {frame ? <div className="b-hero__frame">{frame}</div> : null}
      </div>
    </section>
  );
}

/** One rebuilt product screen on the dashboard's grey surface. */
/**
 * Motion: the frame opens from a clip-path inset as it enters (.clipin, SiteScripts). With `photo`, the screen
 * sits on a blurred South African road photo (components/Backdrop.tsx) that drifts slightly on scroll.
 */
export function Stage({ label, children, flush, photo }: { label: string; children: ReactNode; flush?: boolean; photo?: BackdropPhoto }) {
  return (
    <figure className="clipin">
      <div className={`b-stage${flush ? ' b-stage--flush' : ''}${photo ? ' b-stage--photo' : ''}`} role="img" aria-label={label}>
        {photo ? (
          <>
            <Backdrop photo={photo} />
            <div className="b-stage__screen">{children}</div>
          </>
        ) : (
          children
        )}
      </div>
    </figure>
  );
}

/**
 * "What it answers": three questions, each led by the figure the product shows for it (from the demo
 * company's data), then the question and a one-line answer.
 */
export function Answers({ items }: { items: { q: string; a: string; fig?: string; note?: string }[] }) {
  return (
    <ul className="b-answers list-reset">
      {items.map((i) => (
        <li key={i.q} className="reveal">
          {i.fig ? (
            <p className="b-answers__fig">
              <span>{i.fig}</span>
              {i.note ? <small>{i.note}</small> : null}
            </p>
          ) : null}
          <h3>{i.q}</h3>
          <p>{i.a}</p>
        </li>
      ))}
    </ul>
  );
}

/** Flott feature row: text in columns 1 to 4, one product frame in 6 to 12 (mirrored on alternate rows). */
export function FeatureRow({
  id, title, body, points, link, flip, textOnPhone, children,
}: {
  id?: string;
  title: string;
  body: ReactNode;
  points?: string[];
  link?: { href: string; label: string };
  flip?: boolean;
  /** Phones show the text only (critic R3: long stacked pages); the frame shows from 640px. */
  textOnPhone?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={`b-row${flip ? ' b-row--flip' : ''}${textOnPhone ? ' b-row--text-sm' : ''}`} id={id}>
      <div className="b-row__text reveal">
        <h3 className="h3">{title}</h3>
        <p>{body}</p>
        {points ? (
          <ul className="b-checks list-reset">
            {points.map((p) => (
              <li key={p}>
                <Check strokeWidth={1.75} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        ) : null}
        {link ? <TextLink href={link.href}>{link.label}</TextLink> : null}
      </div>
      <div className="b-row__vis">{children}</div>
    </div>
  );
}

/** Heading left, content right (Flott FAQ anatomy), for the specifics lists. */
export function Split({ id, a, b, line, children }: { id: string; a: ReactNode; b?: ReactNode; line?: ReactNode; children: ReactNode }) {
  return (
    <div className="b-split">
      <div className="b-split__head reveal">
        <TwoTone id={id} a={a} b={b} />
        {line ? <p className="body">{line}</p> : null}
      </div>
      <div className="b-split__body">{children}</div>
    </div>
  );
}

export function DL({ rows }: { rows: [ReactNode, ReactNode][] }) {
  return (
    <dl className="b-dl">
      {rows.map(([k, v], i) => (
        <div key={i}>
          <dt>{k}</dt>
          <dd>{v}</dd>
        </div>
      ))}
    </dl>
  );
}

/** The next feature page in load order. The whole row is one link. */
export function NextStep({ href, title, line }: { href: string; title: string; line: string }) {
  return (
    <a className="b-next" href={href}>
      <span>
        <span className="b-next__label">Next step</span>
        <span className="b-next__title">{title}</span>
        <span className="b-next__line">{line}</span>
      </span>
      <span className="b-next__arrow" aria-hidden="true">
        <ArrowRight strokeWidth={1.75} />
      </span>
    </a>
  );
}

/**
 * Fast Pay, compact (owner R7): /product and /pricing link to /capital instead of repeating the full band
 * (Home keeps the full FastPayBand; /capital is the full story). The whole card is one link. Honest copy
 * only: coming soon, opt-in, an independent finance provider, no rates.
 */
export function FastPayCard({ note, id = 'fastpay-h' }: { note?: ReactNode; id?: string }) {
  return (
    <section className="sec" style={{ paddingTop: 0 }} aria-labelledby={id}>
      <div className="wrap">
        <a className="b-fpcard reveal" href="/capital">
          <span className="b-fpcard__text">
            <span className="b-fpcard__eyebrow">
              <span className="chip">
                <span className="chip__dot" aria-hidden="true" />
                Coming soon
              </span>
              <span>Fast Pay</span>
            </span>
            <span className="b-fpcard__title" id={id} role="heading" aria-level={2}>
              Get paid on a delivered load&apos;s invoice, before your customer pays.
            </span>
            <span className="b-fpcard__line">
              Opt in, invoice by invoice. The money would come from an independent finance provider; TruckWys is not a lender. Not live
              yet.{note ? <> {note}</> : null}
            </span>
          </span>
          <span className="b-fpcard__more">
            How Fast Pay will work
            <ArrowRight strokeWidth={1.75} aria-hidden="true" />
          </span>
        </a>
      </div>
    </section>
  );
}

/**
 * R7: the end of a feature page, as two small matched cards: the next step in load order, and one blog post
 * that explains the same job in depth. Each card is one link. Replaces NextStep + FromTheBlog.
 */
export function NextCards({ next, read }: { next: { href: string; title: string; line: string }; read?: string }) {
  const post = read ? getPost(read) : undefined;
  return (
    <section className="sec" style={{ paddingTop: 0 }} aria-label="Keep reading">
      <div className="wrap">
        <ul className="b-nextcards list-reset">
          <li>
            <a className="b-nextcard" href={next.href}>
              <span className="b-nextcard__k">Next step</span>
              <span className="b-nextcard__t">{next.title}</span>
              <span className="b-nextcard__l">{next.line}</span>
              <ArrowRight className="b-nextcard__a" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </li>
          {post ? (
            <li>
              <a className="b-nextcard" href={`/blog/${post.slug}`}>
                <span className="b-nextcard__k">From the blog · {post.readingMinutes} min read</span>
                <span className="b-nextcard__t">{post.title}</span>
                <span className="b-nextcard__l">{post.summary}</span>
                <ArrowRight className="b-nextcard__a" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </li>
          ) : null}
        </ul>
      </div>
    </section>
  );
}

/**
 * R7 photo-led hero (/insurance, /about): the page's H1 on a blurred South African road photo
 * (components/Backdrop.tsx), in an inset rounded frame like the closing band. Dark in both themes;
 * a scrim keeps every line of text at 4.5:1 or better.
 */
export function PhotoHero({
  photo, eyebrow, a, b, lead, actions, note, place,
}: {
  photo: BackdropPhoto;
  eyebrow: ReactNode;
  a: ReactNode;
  b?: ReactNode;
  lead: ReactNode;
  actions?: ReactNode;
  note?: ReactNode;
  /** Where the photo was taken, shown small top right. */
  place?: string;
}) {
  return (
    <section className="b-phero" aria-labelledby="page-h1">
      <div className="b-phero__frame" data-theme="dark">
        <Backdrop photo={photo} sizes="100vw" priority />
        <div className="b-phero__scrim" aria-hidden="true" />
        <div className="b-phero__text">
          <div className="label b-hero__eyebrow">{eyebrow}</div>
          <TwoTone as="h1" className="h1" id="page-h1" a={a} b={b} />
          <p className="lead b-hero__lead">{lead}</p>
          {actions ? <div className="b-hero__actions">{actions}</div> : null}
          {note ? <p className="small b-hero__note">{note}</p> : null}
        </div>
        {place ? <p className="b-phero__place">{place}</p> : null}
      </div>
    </section>
  );
}
