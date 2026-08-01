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
    meta: "SCHEDULED WITHIN A WEEK",
    title: "Complete your assessment",
    body: "Either a guided photo walkthrough you do yourself with your phone, or a full on-site visit, depending on your package and preference. Every zone is checked against Wildfire Prepared Home (WPH) criteria — a published safety standard used by fire agencies and insurers, not just our own opinion of what's safe.",
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
    meta: "OPTIONAL · CASE BY CASE",
    title: "Get a tailored follow-up report, if you need one",
    body: "Once your fixes are done, this is entirely optional. We can prepare a report scoped to what you actually need — certification readiness for the official Wildfire Prepared Home designation (issued separately by IBHS, not us), documentation for your insurance provider, or both. Whether either one pans out depends on your specific property and, for insurance, your carrier's own policy.",
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FORMATS = [
  { id: "stepper", label: "1 · Single-step stepper" },
  { id: "timeline", label: "2 · Two-column timeline" },
  { id: "accordion", label: "3 · Accordion list" },
  { id: "grid", label: "4 · Card grid" },
  { id: "compact", label: "5 · Compact list" },
];

function Stepper() {
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
      <div className="process-step-nav">
        <button type="button" className="flow-back" onClick={() => setStep((s) => Math.max(0, s - 1))} style={{ visibility: isFirst ? "hidden" : "visible" }}>
          &larr; Back
        </button>
        <span className="process-step-count">Step {step + 1} of {STEPS.length}</span>
        {isLast ? (
          <Link href="/get-started" className="btn btn-primary">Get Started</Link>
        ) : (
          <button type="button" className="btn btn-primary" onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}>Next</button>
        )}
      </div>
    </div>
  );
}

function Timeline() {
  const left = STEPS.slice(0, 4);
  const right = STEPS.slice(4);
  const renderCol = (items, offset) => (
    <div className="vtimeline">
      {items.map((s, i) => (
        <div className="vtimeline-item" key={s.title}>
          <div className="vtimeline-node">{i + offset + 1}</div>
          <div className="vtimeline-content">
            <span className="meta">{s.meta}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            {s.list && (
              <ul>
                {s.list.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="vtimeline-cols">
      {renderCol(left, 0)}
      {renderCol(right, 4)}
    </div>
  );
}

function Accordion() {
  return (
    <div className="faq-list">
      {STEPS.map((s, i) => (
        <details className="faq-item" key={s.title}>
          <summary>
            <span><span className="accordion-num">{i + 1}.</span> {s.title}</span>
            <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <div className="faq-answer">
            <span className="meta" style={{ marginBottom: 8, display: "inline-block" }}>{s.meta}</span>
            <p>{s.body}</p>
            {s.list && (
              <ul className="check-list">
                {s.list.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}

function Grid() {
  return (
    <div className="steps steps-4" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
      {STEPS.map((s, i) => (
        <div className="step" key={s.title}>
          <span className="num">{String(i + 1).padStart(2, "0")} · {s.meta}</span>
          <h3>{s.title}</h3>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
}

function Compact() {
  return (
    <ol className="compact-steps">
      {STEPS.map((s, i) => (
        <li key={s.title}>
          <span className="compact-num">{i + 1}</span>
          <div>
            <h3>{s.title} <span className="compact-meta">— {s.meta}</span></h3>
            <p>{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function ProcessFormats() {
  const [format, setFormat] = useState("stepper");

  return (
    <div>
      <div className="format-switcher">
        {FORMATS.map((f) => (
          <button
            key={f.id}
            type="button"
            className={`format-tab ${format === f.id ? "active" : ""}`}
            onClick={() => setFormat(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {format === "stepper" && <Stepper />}
      {format === "timeline" && <Timeline />}
      {format === "accordion" && <Accordion />}
      {format === "grid" && <Grid />}
      {format === "compact" && <Compact />}
    </div>
  );
}
