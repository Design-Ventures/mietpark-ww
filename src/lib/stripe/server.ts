import Stripe from "stripe";

/**
 * Stripe server-side client.
 * Only use in API routes and server actions – never in client components.
 */
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
  typescript: true,
});

/**
 * Create a Payment Intent for the rental fee.
 * This is the actual charge for the rental period.
 */
export async function createRentalPayment(params: {
  amount: number;          // in cents
  customerEmail: string;
  metadata: {
    bookingId: string;
    productId: string;
    productName: string;
    rentalDays: number;
  };
}) {
  return stripe.paymentIntents.create({
    amount: params.amount,
    currency: "eur",
    receipt_email: params.customerEmail,
    metadata: params.metadata,
    automatic_payment_methods: { enabled: true },
  });
}

/**
 * Create an authorization hold for the deposit (Kaution).
 * The amount is reserved on the customer's card but NOT charged.
 * After return: release (cancel) or capture (if damage).
 */
export async function createDepositHold(params: {
  amount: number;          // in cents
  customerEmail: string;
  metadata: {
    bookingId: string;
    productId: string;
  };
}) {
  return stripe.paymentIntents.create({
    amount: params.amount,
    currency: "eur",
    capture_method: "manual", // Key: authorize only, don't capture
    receipt_email: params.customerEmail,
    metadata: {
      ...params.metadata,
      type: "deposit_hold",
    },
    automatic_payment_methods: { enabled: true },
  });
}

/**
 * Release the deposit hold after successful return.
 */
export async function releaseDeposit(paymentIntentId: string) {
  return stripe.paymentIntents.cancel(paymentIntentId);
}

/**
 * Capture (charge) the deposit partially or fully for damages.
 */
export async function captureDeposit(
  paymentIntentId: string,
  amountToCapture?: number // in cents, omit for full capture
) {
  return stripe.paymentIntents.capture(paymentIntentId, {
    ...(amountToCapture && { amount_to_capture: amountToCapture }),
  });
}
