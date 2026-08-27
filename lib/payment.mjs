// Package tier (Essential/Enhanced) determines report scope only — both
// tiers price the same flat Guided Photo Assessment rate.
export const PACKAGE_PRICES = {
  Base: 0,
  Plus: 0,
};

export const METHOD_NAME = "Guided Photo Assessment";
export const METHOD_PRICE = 200;

export const SERVICE_FEE_RATE = 0.03;

export function getPaymentSummary({ tier = "Base" }) {
  const packagePrice = PACKAGE_PRICES[tier] ?? PACKAGE_PRICES.Base;
  const subtotal = packagePrice + METHOD_PRICE;
  const serviceFee = Math.round(subtotal * SERVICE_FEE_RATE);

  return {
    tier,
    packageName: tier === "Plus" ? "Enhanced" : "Essential",
    packagePrice,
    methodName: METHOD_NAME,
    methodPrice: METHOD_PRICE,
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
