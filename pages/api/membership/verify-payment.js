export default async function handler(req, res) {
  const { reference } = req.query;
  try {
    const verifyRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: { Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}` }
    });
    const data = await verifyRes.json();

    if (data.status && data.data.status === "success") {
      res.status(200).json({ status: "success", data: data.data });
    } else {
      res.status(400).json({ status: "failed", data });
    }
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
}
