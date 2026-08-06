// Package tier (Essential/Enhanced) determines report scope only — pricing
// is flat by method, so both tiers price the same.
export const PACKAGE_PRICES = {
  Base: 0,
  Plus: 0,
};

export const METHOD_PRICES = {
  photo: 200,
  onsite: 500,
};

export const SERVICE_FEE_RATE = 0.03;

export function getPaymentSummary({ tier = "Base", method = "photo" }) {
  const packagePrice = PACKAGE_PRICES[tier] ?? PACKAGE_PRICES.Base;
  const methodPrice = METHOD_PRICES[method] ?? METHOD_PRICES.photo;
  const subtotal = packagePrice + methodPrice;
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);

  return {
    tier,
    packageName: tier === "Plus" ? "Enhanced" : "Essential",
    packagePrice,
    methodName: method === "onsite" ? "On-Site Inspection" : "Guided Photo Assessment",
    methodPrice,
    subtotal,
    serviceFee,
    total: subtotal + serviceFee,
  };
}

export function validatePaymentDetails({ payNow, cardName, cardNumber, expiry, cvc }) {
  const errors = {};

  if (!payNow) {
    return { valid: true, errors };
  }

  if (!cardName?.trim()) {
    errors.cardName = "Name on card is required.";
  }

  const normalizedCard = (cardNumber || "").replace(/\s+/g, "");
  if (!/^\d{16}$/.test(normalizedCard)) {
    errors.cardNumber = "Card number must be 16 digits.";
  }

  if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test((expiry || "").trim())) {
    errors.expiry = "Use MM/YY format.";
  }

  if (!/^\d{3,4}$/.test((cvc || "").trim())) {
    errors.cvc = "CVC must be 3 or 4 digits.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
