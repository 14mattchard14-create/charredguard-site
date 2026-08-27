"use client";

import { useState } from "react";
import Link from "next/link";

const STEPS = [
  {
    meta: "~1 MIN",
    title: "Enter your property address",
    body: "That's all we need to start. We look up your California Fire Hazard Severity Zone — the risk category the state already assigns your area — so your assessment is scoped correctly before you answer anything else.",
  },
  {
    meta: "~3 MIN",
    title: "Answer a short questionnaire about your home",
    body: "What's driving the assessment, whether you're renovating, and roughly how old the home is. No wildfire jargon required.",
    list: [
      "Home insurance, selling, certification, or just peace of mind",
      "Any re-roof, re-siding, or renovation planned in the next 2 years",
    ],
  },
  {
    meta: "INSTANT",
    title: "Get a recommendation for your home",
    body: "Based on your answers, we recommend the right level of assessment for your property (more on what that means below) — you're never locked in, and can switch to the other option if you'd rather.",
  },
  {
    meta: "OPTIONAL · FREE",
    title: "Talk it through on a 15-minute call",
    body: "No pressure, no payment required to book it. Ask basic questions if this is all new to you, confirm scope, or skip straight to requesting your assessment.",
  },
  {
    meta: "START ANYTIME",
    title: "Complete your guided photo walkthrough",
    body: "A guided walkthrough you do yourself with your phone — no waiting on a scheduled visit. Every zone is checked against Wildfire Prepared Home (WPH) criteria — a published safety standard used by fire agencies and insurers, not just our own opinion of what's safe.",
  },
  {
    meta: "~48 HRS LATER",
    title: "Receive your written report",
    body: "An overall risk rating, a ranked action list, and photo-documented evidence for every finding, organized by zone — written in plain language, not inspector shorthand.",
  },
  {
    meta: "ON YOUR OWN TIMELINE",
    title: "Work through your action list",
    body: "Fix the highest-priority items first — things like adding ember-resistant mesh to vents or clearing vegetation near the house. Use any contractor you choose; there's no obligation to hire us, or anyone, for the work itself.",
  },
  {
    meta: "MAY BE AVAILABLE",
    title: "Ask about a follow-up report, if you need one",
    body: "Once your fixes are done, additional documentation support — certification readiness for the official Wildfire Prepared Home designation (issued separately by IBHS, not us), or something formatted for your insurance provider — may be available on a case-by-case basis. Reach out and ask.",
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ flip }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ProcessStepper() {
  const [step, setStep] = useState(0);
  const current = STEPS[step];
  const isFirst = step === 0;
  const isLast = step === STEPS.length - 1;

  return (
    <div className="process-stepper">
      <div className="mini-stepper">
        {STEPS.map((s, i) => (
          <div className="mseg" key={s.title} style={{ flex: i === STEPS.length - 1 ? 0 : 1 }}>
            <button
              type="button"
              className={`mdot ${i < step ? "done" : ""} ${i === step ? "current" : ""}`}
              onClick={() => setStep(i)}
              aria-label={`Step ${i + 1}: ${s.title}`}
            >
              {i < step ? <CheckIcon /> : i + 1}
            </button>
            {i < STEPS.length - 1 && <div className={`mline ${i < step ? "done" : ""}`} />}
          </div>
        ))}
      </div>

      <div className="process-step-row">
        <button
          type="button"
          className="process-arrow"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={isFirst}
          aria-label="Previous step"
        >
          <ChevronIcon flip />
        </button>

        <div className="process-step-card">
          <span className="meta">{current.meta}</span>
          <h3>{current.title}</h3>
          <p>{current.body}</p>
          {current.list && (
            <ul className="check-list">
              {current.list.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          type="button"
          className="process-arrow"
          onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
          disabled={isLast}
          aria-label="Next step"
        >
          <ChevronIcon />
        </button>
      </div>

      <div className="process-step-nav">
        <span className="process-step-count">
          Step {step + 1} of {STEPS.length}
        </span>
        {isLast && (
          <Link href="/get-started" className="btn btn-primary">
            Get Started
          </Link>
        )}
      </div>
    </div>
  );
}
