"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "../../components/PageHero";
import FadeIn from "../../components/FadeIn";
import BookCallWidget from "../../components/BookCallWidget";

const inputClass =
  "rounded-lg border border-surface-line bg-white px-3.5 py-3 text-sm text-ink-900 transition-colors focus:border-brand-500 focus:outline-none";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // NOTE: this currently just confirms locally. To actually receive these
    // requests, wire this up to an email service (e.g. Resend, Formspree)
    // or a Supabase table + API route, same pattern as the inspector app.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="Have a question, or a property that doesn't fit the usual mold?">
        Book a free 15-minute call below, or send a general question with the
        form. If you&rsquo;re ready for a package recommendation and a quote,
        the{" "}
        <Link href="/get-started" className="font-semibold text-brand-400 hover:text-brand-300">
          Get Started
        </Link>{" "}
        flow is faster.
      </PageHero>

      <section className="bg-white py-16 md:py-20">
        <div className="wrap">
          <FadeIn delay={0}>
            <div className="mb-16 md:mb-20">
              <span className="mb-2 block font-mono text-xs uppercase tracking-wide text-ink-600">
                Talk it through first
              </span>
              <h2 className="mb-4 text-2xl font-extrabold text-ink-900">
                Book a free 15-minute call
              </h2>
              <p className="mb-6 max-w-[60ch] text-sm text-ink-600">
                We don&rsquo;t take cold calls, but we&rsquo;re happy to talk — pick a time
                that works and we&rsquo;ll call you.
              </p>
              <BookCallWidget />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1.3fr] md:gap-12">
            <FadeIn delay={0}>
              <div>
                <div className="mb-6 flex gap-3.5">
                  <div>
                    <span className="mb-1 block font-mono text-xs uppercase tracking-wide text-ink-600">Email</span>
                    <a href="mailto:hello@charredguard.com" className="text-ink-900 no-underline hover:text-brand-600">
                      hello@charredguard.com
                    </a>
                  </div>
                </div>
                <div className="mb-6 flex gap-3.5">
                  <div>
                    <span className="mb-1 block font-mono text-xs uppercase tracking-wide text-ink-600">Service area</span>
                    <p className="text-sm text-ink-600">Southern California, primarily North San Diego County and Orange County.</p>
                  </div>
                </div>
                <div className="mb-6 flex gap-3.5">
                  <div>
                    <span className="mb-1 block font-mono text-xs uppercase tracking-wide text-ink-600">Response time</span>
                    <p className="text-sm text-ink-600">Within 1 business day.</p>
                  </div>
                </div>
                <div className="flex gap-3.5">
                  <div>
                    <span className="mb-1 block font-mono text-xs uppercase tracking-wide text-ink-600">Real estate agents</span>
                    <p className="text-sm text-ink-600">
                      Working with clients in a high fire-hazard zone? Happy
                      to help them get ahead of California&rsquo;s AB-38
                      disclosure requirement — reach out anytime.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div>
                {submitted ? (
                  <div className="rounded-xl border-2 border-emerald-500 bg-white p-8 text-center">
                    <h3 className="text-lg font-bold text-emerald-600">Request received</h3>
                    <p className="mt-2 text-sm text-ink-600">
                      Thanks, that&rsquo;s in. We&rsquo;ll reach out within one business
                      day to schedule your inspection.
                    </p>
                  </div>
                ) : (
                  <form className="rounded-2xl border border-surface-line bg-white p-10 shadow-sm" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-sm font-semibold text-ink-900">Full name</label>
                        <input id="name" name="name" type="text" required className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-semibold text-ink-900">Email</label>
                        <input id="email" name="email" type="email" required className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-sm font-semibold text-ink-900">Phone</label>
                        <input id="phone" name="phone" type="tel" className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="address" className="text-sm font-semibold text-ink-900">Property address</label>
                        <input id="address" name="address" type="text" required className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-1.5 md:col-span-2">
                        <label htmlFor="message" className="text-sm font-semibold text-ink-900">Anything we should know?</label>
                        <textarea id="message" name="message" rows={4} className={inputClass} />
                      </div>
                    </div>
                    <div className="mt-5">
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-500 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-600 disabled:pointer-events-none disabled:opacity-50"
                      >
                        {loading ? "Sending…" : "Send Request"}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
