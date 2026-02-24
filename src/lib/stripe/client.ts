import { loadStripe } from "@stripe/stripe-js";

/**
 * Lazy-loaded Stripe.js instance for client-side payment forms.
 */
let stripePromise: ReturnType<typeof loadStripe>;

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
}
