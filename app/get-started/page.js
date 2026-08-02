"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import BookCallWidget from "../../components/BookCallWidget";
import { CAL_COM_INSPECTION_URL } from "../../lib/calcom";
import { getPaymentSummary, validatePaymentDetails } from "../../lib/payment.mjs";

const PHASES = ["Goals", "Package & call", "Request", "Done"];

const PACKAGES = {
  Base: {
    name: "Essential",
    desc: "Built on Wildfire Prepared Home's Base-level criteria — essential protection against wind-blown embers, the leading cause of home ignitions.",
  },
  Plus: {
    name: "Enhanced",
    desc: "Built on Wildfire Prepared Home's Plus-level criteria — adds structural hardening for siding, windows, doors, decks, and eaves. Best fit if you're renovating or building new.",
  },
};

const METHODS = {
  photo: {
    name: "Guided Photo Assessment",
    price: 200,
    blurb: "A guided walkthrough you complete yourself with your phone. Start today — no waiting on a scheduled visit.",
  },
  onsite: {
    name: "On-Site Inspection",
    price: 450,
    blurb: "A full in-person walkthrough, scheduled within about a week.",
  },
};

const inputClass =
  "rounded-lg border border-surface-line bg-white px-3.5 py-3 text-sm text-ink-900 transition-colors focus:border-brand-500 focus:outline-none";

function computeTier(goals) {
  if (goals.renovating === "Yes, within 2 years" || goals.age === "Newer (0-10 yrs)") return "Plus";
  return "Base";
}

function whyText(tier) {
  return tier === "Plus"
    ? "Recommended for you — you mentioned renovating soon or a newer home, which typically lines up with Enhanced."
    : "Recommended for you — no renovations planned, so Essential covers what matters most right now.";
}

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function GetStarted() {
  const [step, setStep] = useState(0);
  const [address, setAddress] = useState("");
  const [goals, setGoals] = useState({});
  const [tier, setTier] = useState(null);
  const [recommendedTier, setRecommendedTier] = useState(null);
  const [method, setMethod] = useState("photo");
  const [consultChoice, setConsultChoice] = useState(null);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [paymentMode, setPaymentMode] = useState("payLater");
  const [cardDetails, setCardDetails] = useState({ cardName: "", cardNumber: "", expiry: "", cvc: "" });
  const [paymentErrors, setPaymentErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const phaseIndex = step <= 1 ? 0 : step === 2 ? 1 : step === 3 ? 2 : 3;
  const paymentSummary = getPaymentSummary({ tier: tier || "Base", method });

  // Booking itself happens inside the embedded Cal.com widget (its own
  // confirmation flow, independent of this form) — we only need to know
  // whether the person chose to book or explicitly skipped it.
  const consultReady = consultChoice === "skipped" || consultChoice === "booked";

  function handleGoalsContinue() {
    const rec = computeTier(goals);
    setRecommendedTier(rec);
    setTier(rec);
    setStep(2);
  }

  function handleRequestSubmit(e) {
    e.preventDefault();
    const validation = validatePaymentDetails({
      payNow: paymentMode === "payNow",
      cardName: cardDetails.cardName,
      cardNumber: cardDetails.cardNumber,
      expiry: cardDetails.expiry,
      cvc: cardDetails.cvc,
    });

    setPaymentErrors(validation.errors);

    if (!validation.valid) {
      return;
    }

    setSubmitting(true);
    // NOTE: this currently confirms locally, same as the /contact form.
    // Wire this up to an email service (e.g. Resend, Formspree) or a real gateway
    // such as Stripe once the backend exists — send address, goals, tier,
    // method, consultChoice, payment mode, and contact info as one lead record.
    setTimeout(() => {
      setSubmitting(false);
      setStep(4);
    }, 800);
  }

  return (
    <div className="min-h-[60vh] bg-surface-muted py-12 pb-24">
      <div className="mx-auto max-w-[720px] px-6">
        <Stepper phaseIndex={phaseIndex} />

        {step === 0 && (
          <div className="rounded-2xl border border-surface-line bg-white p-6 shadow-sm md:p-9">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">Step 1</span>
            <h2 className="mt-2 text-2xl font-extrabold text-ink-900">Let&rsquo;s start with your address</h2>
            <p className="mb-4 mt-1 text-sm text-ink-600">
              We&rsquo;ll use this to confirm your Fire Hazard Severity Zone and scope your
              assessment.
            </p>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="address" className="text-sm font-semibold text-ink-900">Property address</label>
              <input
                id="address"
                type="text"
                placeholder="123 Main St, Santa Rosa, CA"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={inputClass}
              />
            </div>
            <div className="mt-5 text-right">
              <Button disabled={!address.trim()} onClick={() => setStep(1)}>
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 1 && (
          <GoalsStep goals={goals} setGoals={setGoals} onBack={() => setStep(0)} onContinue={handleGoalsContinue} />
        )}

        {step === 2 && (
          <PackageCallStep
            tier={tier}
            setTier={setTier}
            recommendedTier={recommendedTier}
            goals={goals}
            method={method}
            setMethod={setMethod}
            consultChoice={consultChoice}
            setConsultChoice={setConsultChoice}
            consultReady={consultReady}
            onBack={() => setStep(1)}
            onContinue={() => setStep(3)}
          />
        )}

        {step === 3 && (
          <div className="rounded-2xl border border-surface-line bg-white p-6 shadow-sm md:p-9">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">Last step</span>
            <h2 className="mt-2 text-2xl font-extrabold text-ink-900">How should we reach you?</h2>
            <p className="mb-4 mt-1 text-sm text-ink-600">
              We&rsquo;ll confirm your {PACKAGES[tier].name} assessment via{" "}
              {METHODS[method].name} (${METHODS[method].price})
              {consultChoice === "booked" ? " and your booked call" : ""}, usually
              within one business day.
            </p>
            <form onSubmit={handleRequestSubmit}>
              <div className="rounded-xl border border-surface-line bg-surface-muted p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-ink-900">Deposit &amp; payment</p>
                    <p className="text-sm text-ink-600">{paymentSummary.packageName} package + {paymentSummary.methodName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-extrabold text-ink-900">${paymentSummary.total}</p>
                    <p className="text-xs text-ink-600">Includes ${paymentSummary.serviceFee} service fee</p>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <button
                    type="button"
                    className={`rounded-lg border px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                      paymentMode === "payNow"
                        ? "border-brand-500 bg-brand-50 text-brand-700"
                        : "border-surface-line bg-white text-ink-900"
                    }`}
                    onClick={() => setPaymentMode("payNow")}
                  >
                    Pay now
                  </button>
                  <button
                    type="button"
                    className={`rounded-lg border px-3 py-2.5 text-left text-sm font-semibold transition-colors ${
                      paymentMode === "payLater"
                        ? "border-brand-500 bg-brand-50 text-brand-700"
                        : "border-surface-line bg-white text-ink-900"
                    }`}
                    onClick={() => setPaymentMode("payLater")}
                  >
                    Pay later
                  </button>
                </div>

                {paymentMode === "payNow" && (
                  <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label htmlFor="cardName" className="text-sm font-semibold text-ink-900">Name on card</label>
                      <input
                        id="cardName"
                        type="text"
                        value={cardDetails.cardName}
                        onChange={(e) => {
                          setCardDetails({ ...cardDetails, cardName: e.target.value });
                          setPaymentErrors({ ...paymentErrors, cardName: undefined });
                        }}
                        className={inputClass}
                      />
                      {paymentErrors.cardName && <p className="text-xs text-red-600">{paymentErrors.cardName}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5 md:col-span-2">
                      <label htmlFor="cardNumber" className="text-sm font-semibold text-ink-900">Card number</label>
                      <input
                        id="cardNumber"
                        type="text"
                        inputMode="numeric"
                        value={cardDetails.cardNumber}
                        onChange={(e) => {
                          setCardDetails({ ...cardDetails, cardNumber: e.target.value.replace(/\D/g, "").slice(0, 16) });
                          setPaymentErrors({ ...paymentErrors, cardNumber: undefined });
                        }}
                        className={inputClass}
                        placeholder="4242 4242 4242 4242"
                      />
                      {paymentErrors.cardNumber && <p className="text-xs text-red-600">{paymentErrors.cardNumber}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="expiry" className="text-sm font-semibold text-ink-900">Expiry</label>
                      <input
                        id="expiry"
                        type="text"
                        value={cardDetails.expiry}
                        onChange={(e) => {
                          setCardDetails({ ...cardDetails, expiry: e.target.value.replace(/\D/g, "").slice(0, 4) });
                          setPaymentErrors({ ...paymentErrors, expiry: undefined });
                        }}
                        className={inputClass}
                        placeholder="MM/YY"
                      />
                      {paymentErrors.expiry && <p className="text-xs text-red-600">{paymentErrors.expiry}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="cvc" className="text-sm font-semibold text-ink-900">CVC</label>
                      <input
                        id="cvc"
                        type="text"
                        inputMode="numeric"
                        value={cardDetails.cvc}
                        onChange={(e) => {
                          setCardDetails({ ...cardDetails, cvc: e.target.value.replace(/\D/g, "").slice(0, 4) });
                          setPaymentErrors({ ...paymentErrors, cvc: undefined });
                        }}
                        className={inputClass}
                        placeholder="123"
                      />
                      {paymentErrors.cvc && <p className="text-xs text-red-600">{paymentErrors.cvc}</p>}
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-ink-900">Full name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={contact.name}
                    onChange={(e) => setContact({ ...contact, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-semibold text-ink-900">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={contact.email}
                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-ink-900">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <button type="button" className="text-sm font-semibold text-ink-900 hover:underline" onClick={() => setStep(2)}>
                  &larr; Back
                </button>
                <Button type="submit" disabled={submitting}>
                  {submitting ? "Submitting…" : paymentMode === "payNow" ? "Pay & send request" : "Send request"}
                </Button>
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="rounded-2xl border border-surface-line bg-white p-6 text-center shadow-sm md:p-9">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <IconCheck />
            </div>
            <h2 className="text-2xl font-extrabold text-ink-900">Request received</h2>
            <p className="mx-auto mt-2 max-w-[42ch] text-sm text-ink-600">
              Thanks — we&rsquo;ll reach out within one business day to confirm your{" "}
              {PACKAGES[tier].name} assessment via {METHODS[method].name}
              {consultChoice === "booked" ? " and your booked call" : ""}
              {method !== "onsite" ? ", and get everything scheduled." : "."}{" "}
              {paymentMode === "payNow" ? "Your payment was accepted in this demo checkout." : "You can pay the deposit later once we confirm the appointment."}
            </p>

            {method === "onsite" && (
              <div className="mt-6 text-left">
                <div className="rounded-xl border border-surface-line bg-surface-muted p-4">
                  <p className="text-sm font-bold text-ink-900">Pick a time for your on-site inspection</p>
                  <p className="mt-1 text-sm text-ink-600">
                    Grab a slot below — no need to wait for us to reach out first.
                  </p>
                </div>
                <div className="mt-3.5">
                  <BookCallWidget
                    height={480}
                    link={CAL_COM_INSPECTION_URL}
                    prefill={{ name: contact.name, email: contact.email }}
                  />
                </div>
              </div>
            )}

            <div className="mt-6">
              <Button asChild variant="outline">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Stepper({ phaseIndex }) {
  return (
    <div className="mb-8 flex items-center">
      {PHASES.map((p, i) => {
        const done = i < phaseIndex;
        const current = i === phaseIndex;
        return (
          <div className="flex items-center" key={p} style={{ flex: i === PHASES.length - 1 ? 0 : 1 }}>
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full border-2 font-mono text-xs font-bold ${
                done
                  ? "border-brand-500 bg-brand-500 text-white"
                  : current
                    ? "border-ink-900 text-ink-900"
                    : "border-surface-line text-ink-600"
              }`}
            >
              {done ? <IconCheck /> : i + 1}
            </div>
            <span
              className={`ml-2 hidden whitespace-nowrap font-mono text-[11px] font-semibold md:inline ${
                current || done ? "text-ink-900" : "text-ink-600"
              }`}
            >
              {p}
            </span>
            {i < PHASES.length - 1 && (
              <div className={`mx-2 h-0.5 flex-1 ${done ? "bg-brand-500" : "bg-surface-line"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function GoalsStep({ goals, setGoals, onBack, onContinue }) {
  const drivers = ["Home insurance", "Selling my home", "Pursuing WPH certification", "Peace of mind"];
  const renov = ["Yes, within 2 years", "No plans right now"];
  const age = ["Newer (0-10 yrs)", "15-25 years", "25+ years, no major updates"];
  const ready = goals.driver && goals.renovating && goals.age;

  function setGoal(field, val) {
    setGoals({ ...goals, [field]: val });
  }

  function Chip({ label, selected, onClick }) {
    return (
      <div
        className={`cursor-pointer rounded-full border-[1.5px] px-4 py-2.5 text-sm font-medium transition-colors ${
          selected
            ? "border-brand-500 bg-brand-50 font-bold text-brand-600"
            : "border-surface-line bg-white text-ink-900 hover:border-brand-500"
        }`}
        onClick={onClick}
      >
        {label}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-surface-line bg-white p-6 shadow-sm md:p-9">
      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">Understand your goals</span>
      <h2 className="mt-2 text-2xl font-extrabold text-ink-900">A few quick questions</h2>
      <p className="mb-1.5 mt-1 text-sm text-ink-600">
        This helps us scope the right package for your home — no technical wildfire terms
        needed.
      </p>

      <div className="mt-5">
        <label className="text-sm font-semibold text-ink-900">What&rsquo;s mainly driving this for you?</label>
        <div className="mt-2.5 flex flex-wrap gap-2.5">
          {drivers.map((d) => (
            <Chip key={d} label={d} selected={goals.driver === d} onClick={() => setGoal("driver", d)} />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-semibold text-ink-900">Any renovation, re-roof, or re-siding planned soon?</label>
        <div className="mt-2.5 flex flex-wrap gap-2.5">
          {renov.map((d) => (
            <Chip key={d} label={d} selected={goals.renovating === d} onClick={() => setGoal("renovating", d)} />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <label className="text-sm font-semibold text-ink-900">Roughly how old is the home / last major update?</label>
        <div className="mt-2.5 flex flex-wrap gap-2.5">
          {age.map((d) => (
            <Chip key={d} label={d} selected={goals.age === d} onClick={() => setGoal("age", d)} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button type="button" className="text-sm font-semibold text-ink-900 hover:underline" onClick={onBack}>
          &larr; Back
        </button>
        <Button disabled={!ready} onClick={onContinue}>
          See my recommendation
        </Button>
      </div>
    </div>
  );
}

function PackageCallStep({
  tier,
  setTier,
  recommendedTier,
  goals,
  method,
  setMethod,
  consultChoice,
  setConsultChoice,
  consultReady,
  onBack,
  onContinue,
}) {
  return (
    <div className="rounded-2xl border border-surface-line bg-white p-6 shadow-sm md:p-9">
      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">Choose your package</span>
      <h2 className="mt-2 text-2xl font-extrabold text-ink-900">Essential and Enhanced — each built on a different WPH criteria level</h2>
      <p className="mb-4 mt-1 text-sm text-ink-600">
        Pick either — the recommended one is based on your answers, but you can choose the
        other if you&rsquo;d rather.
      </p>

      <div className="my-4 grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {["Base", "Plus"].map((key) => (
          <div
            key={key}
            className={`relative cursor-pointer rounded-xl border-[1.5px] p-5 transition-all ${
              tier === key
                ? "border-ink-900 shadow-[0_0_0_3px_rgba(21,31,40,0.08)]"
                : "border-surface-line hover:border-brand-500"
            }`}
            onClick={() => setTier(key)}
          >
            {recommendedTier === key && (
              <div className="absolute -top-2.5 left-4 rounded-full bg-brand-500 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white">
                Recommended
              </div>
            )}
            <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-600">
              {PACKAGES[key].name}
            </span>
            <div className="mt-2 text-[1.02rem] font-bold text-ink-900">{PACKAGES[key].name} assessment</div>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{PACKAGES[key].desc}</p>
            {recommendedTier === key && (
              <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-brand-50 px-2.5 py-2 text-xs font-semibold text-brand-600">
                <IconCheck /> {whyText(key)}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="rounded-lg bg-surface-muted p-3.5 text-sm leading-relaxed text-ink-600">
        These are Charred Guard packages, not the official Wildfire Prepared Home
        certification — we&rsquo;re not certifying your home, just evaluating it against the
        same criteria IBHS uses. Your assessment covers the same ground either way; the
        package just determines which criteria your report is written against and its price.
        {(goals?.driver === "Home insurance" || goals?.driver === "Pursuing WPH certification") && (
          <>
            {" "}Since you mentioned {goals.driver === "Home insurance" ? "insurance" : "certification"}
            {" "}as what&rsquo;s driving this, keep in mind that certification eligibility and
            any insurance discount are specific to your property and your carrier&rsquo;s own
            policy — we&rsquo;ll show you exactly where you stand, but neither outcome is
            guaranteed.
          </>
        )}
      </div>

      <div className="my-7 border-t border-surface-line" />

      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">How you complete it</span>
      <h2 className="mt-2 text-lg font-bold text-ink-900">Guided photos, or an on-site visit?</h2>
      <p className="mb-4 mt-1 text-sm text-ink-600">
        Same criteria checked either way — this just determines who takes the photos.
      </p>
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
        {Object.keys(METHODS).map((key) => (
          <div
            key={key}
            className={`relative cursor-pointer rounded-xl border-[1.5px] p-5 transition-all ${
              method === key
                ? "border-ink-900 shadow-[0_0_0_3px_rgba(21,31,40,0.08)]"
                : "border-surface-line hover:border-brand-500"
            }`}
            onClick={() => setMethod(key)}
          >
            {key === "photo" && (
              <div className="absolute -top-2.5 left-4 rounded-full bg-brand-500 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wide text-white">
                Recommended
              </div>
            )}
            <span className="inline-block rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-600">
              ${METHODS[key].price}
            </span>
            <div className="mt-2 text-[1.02rem] font-bold text-ink-900">{METHODS[key].name}</div>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{METHODS[key].blurb}</p>
          </div>
        ))}
      </div>

      <div className="my-7 border-t border-surface-line" />

      <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-600">Optional</span>
      <h2 className="mt-2 text-lg font-bold text-ink-900">Want to talk it through first?</h2>
      <p className="mb-4 mt-1 text-sm text-ink-600">
        A free 15-minute call to confirm your package and answer questions — completely
        optional, never required to book.
      </p>

      <div
        className={`mb-3 cursor-pointer rounded-xl border-[1.5px] px-5 py-4 transition-all ${
          consultChoice === "booked"
            ? "border-ink-900 shadow-[0_0_0_3px_rgba(21,31,40,0.08)]"
            : "border-surface-line hover:border-brand-500"
        }`}
        onClick={() => setConsultChoice("booked")}
      >
        <div className="flex items-center gap-2 text-sm font-bold text-ink-900">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Book my free 15-min call
        </div>
        {consultChoice === "booked" && (
          <div className="mt-3.5" onClick={(e) => e.stopPropagation()}>
            <BookCallWidget height={480} />
          </div>
        )}
      </div>

      <div
        className={`cursor-pointer rounded-xl border-[1.5px] px-5 py-4 transition-all ${
          consultChoice === "skipped"
            ? "border-ink-900 shadow-[0_0_0_3px_rgba(21,31,40,0.08)]"
            : "border-surface-line hover:border-brand-500"
        }`}
        onClick={() => setConsultChoice("skipped")}
      >
        <div className="flex items-center gap-2 text-sm font-bold text-ink-900">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
          Skip — I&rsquo;m ready to request my assessment
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button type="button" className="text-sm font-semibold text-ink-900 hover:underline" onClick={onBack}>
          &larr; Back
        </button>
        <Button disabled={!consultReady} onClick={onContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
}
