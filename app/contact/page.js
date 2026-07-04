"use client";

import { useState } from "react";

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
      <section className="page-hero">
        <div className="wrap">
          <span className="hero-eyebrow">Contact</span>
          <h1>Request an inspection.</h1>
          <p>
            Tell us about the property and we'll follow up to schedule a
            walkthrough, usually within a week.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-row">
                <div>
                  <span className="label">Email</span>
                  <a href="mailto:hello@charredguard.com">hello@charredguard.com</a>
                </div>
              </div>
              <div className="info-row">
                <div>
                  <span className="label">Phone</span>
                  <a href="tel:+18005550123">(800) 555-0123</a>
                </div>
              </div>
              <div className="info-row">
                <div>
                  <span className="label">Service area</span>
                  <p>Statewide, focused on Fire Hazard Severity Zones.</p>
                </div>
              </div>
              <div className="info-row">
                <div>
                  <span className="label">Response time</span>
                  <p>Within 1 business day.</p>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="form-success">
                  <h3>Request received</h3>
                  <p>
                    Thanks, that's in. We'll reach out within one business
                    day to schedule your inspection.
                  </p>
                </div>
              ) : (
                <form className="form-card" onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="name">Full name</label>
                      <input id="name" name="name" type="text" required />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" type="email" required />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" />
                    </div>
                    <div className="field">
                      <label htmlFor="address">Property address</label>
                      <input id="address" name="address" type="text" required />
                    </div>
                    <div className="field full">
                      <label htmlFor="message">Anything we should know?</label>
                      <textarea id="message" name="message" rows={4} />
                    </div>
                  </div>
                  <div style={{ marginTop: 22 }}>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? "Sending…" : "Send Request"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
