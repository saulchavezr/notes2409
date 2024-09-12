import Stripe from "stripe";
import { Resource } from "sst";
import { Util } from "@notes2409/core/util";
import { Billing } from "@notes2409/core/billing";

export const main = Util.handler(async (event) => {
  const { storage, source } = JSON.parse(event.body || "{}");
  const amount = Billing.compute(storage);
  const description = "Scratch charge";

  const stripe = new Stripe(
    // Load our secret key
    Resource.StripeSecretKey.value,
    { apiVersion: "2024-06-20" }
  );

  console.log('Saul amount: ', amount)

  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "mxn",
  });

  return JSON.stringify({ status: true });
});