import test from 'node:test';
import assert from 'node:assert/strict';
import { getPaymentSummary, validatePaymentDetails } from './payment.mjs';

test('builds a total based on the flat guided-assessment price — tier does not affect price', () => {
  const summary = getPaymentSummary({ tier: 'Plus' });

  assert.equal(summary.packagePrice, 0);
  assert.equal(summary.methodPrice, 200);
  assert.equal(summary.subtotal, 200);
  assert.equal(summary.serviceFee, 6);
  assert.equal(summary.total, 206);
});

test('requires card fields when choosing to pay now', () => {
  const result = validatePaymentDetails({
    payNow: true,
    cardName: '',
    cardNumber: '4111',
    expiry: '12/30',
    cvc: '123',
  });

  assert.equal(result.valid, false);
  assert.match(result.errors.cardName, /required/i);
  assert.match(result.errors.cardNumber, /16/i);
});
