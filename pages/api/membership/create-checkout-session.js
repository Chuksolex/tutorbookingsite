// // pages/api/membership/create-checkout-session.js
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export default async function handler(req, res) {
//   if (req.method !== "POST") return res.status(405).json({ message: "Method not allowed" });

//   try {
//     const { email } = req.body;

//     // Create Stripe Checkout session
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ["card"],
//       mode: "subscription", // monthly subscription
//       customer_email: email,
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: { name: "Premium Membership" },
//             unit_amount: 1000, // $10 in cents
//             recurring: { interval: "month" },
//           },
//           quantity: 1,
//         },
//       ],
//       success_url: `${req.headers.origin}/upgrade/success`,
//       cancel_url: `${req.headers.origin}/upgrade/cancel`,
//     });

//     return res.status(200).json({ url: session.url });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error creating checkout session" });
//   }
// }


export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { email } = req.body;

  try {
    const amount = 10750 * 100; // Paystack expects amount in kobo
    const callback_url = `${req.headers.origin}/upgrade/success`;

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount,
        currency: "NGN",
        callback_url,
        metadata: { purpose: "Premium Membership Subscription" },
      }),
    });

    const result = await response.json();

    if (result.status && result.data.authorization_url) {
      return res.status(200).json(result.data);
    } else {
      console.error("Paystack error:", result);
      return res.status(400).json({ message: "Error creating Paystack session" });
    }
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ message: "Server error creating Paystack session" });
  }
}
