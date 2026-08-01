import test from 'node:test';
import assert from 'node:assert/strict';
import { getPaymentSummary, validatePaymentDetails } from './payment.mjs';

test('builds a total that includes package and method pricing', () => {
  const summary = getPaymentSummary({ tier: 'Plus', method: 'onsite' });

  assert.equal(summary.packagePrice, 350);
  assert.equal(summary.methodPrice, 450);
  assert.equal(summary.subtotal, 800);
  assert.equal(summary.serviceFee, 24);
  assert.equal(summary.total, 824);
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
