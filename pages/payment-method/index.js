import Head from "next/head";
import { useState } from "react";
import Link from "next/link";

export default function PaymentMethodPage() {
  
 

  // Replace the placeholders below with your real bank details and official payments email
  const bankDetails = {
    bank: "Fidelity Bank",
    accountName: "Prettygigs Hub Limited",
    accountNumber: "5601592199",
    branch: "Uyo Branch",
  };



  return (
    <div className="container min-h-screen bg-gray-50 py-12 px-4">
      <Head>
        <title>Prettygigs Hub — Payment Methods</title>
      </Head>

      <main className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        <header className="mb-6">
          <h1 className="text-2xl ">Payment methods & how to notify us</h1>
          <p className="mt-2 text-sm text-gray-600">
            Choose a method below, complete payment, then send your payment
            details so we can confirm and upgrade your account.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-6">
          {/* Bank transfer card */}
          <div className="p-6 border rounded-lg bg-gray-50">
            <h2 className="font-medium m-3">Bank transfer</h2>
            <p className="text-sm text-gray-700 m-3">
              Make a transfer to the account below. After transferring, use the
              form on the right (or email us) to send your payment details so we
              can verify and credit your account.
            </p>

            <div className="mt-4 bg-white p-4 rounded-md border">
              <p className="text-sm">
                <span className="font-bold">Bank:</span> {bankDetails.bank}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Account name:</span>{" "}
                {bankDetails.accountName}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Account number:</span>{" "}
                {bankDetails.accountNumber}
              </p>
              <p className="text-sm">
                <span className="font-semibold">Branch:</span>{" "}
                {bankDetails.branch}
              </p>
            </div>

            <ol className="mt-4 text-sm space-y-2 list-decimal pl-5 text-gray-700">
              <li>Transfer the exact amount from your bank or mobile app.</li>
              <li>Save a screenshot or note the transaction reference / ID.</li>
              <li>
                Submit the transaction details using the 
                email us (link below).
              </li>
              <li>
                We will confirm within 24 hours and upgrade your account.
              </li>
            </ol>

            <div className="mt-4">
              <p className="inline-block text-sm underline m-3" >
                Email us your payment details at <Link href="mailto:admin@prettygigs.ng">admin@prettygigs.ng</Link>
              </p>
            </div>
          </div>

        </section>

        <section className="mt-8 border-t pt-6">
          <h3 className="font-medium">Pay by card (instant)</h3>
          <p className="text-sm text-gray-700 mt-2">
            Prefer to pay by card? Use our secure checkout to pay instantly and
            upgrade your account without waiting for manual confirmation.
          </p>

          <div className="mt-4">
            <Link style={{textDecoration: "none", backgroundColor: "#0c2cbdff",
            }}
              href="/upgrade/membership"
              className="inline-block px-5 py-3 text-white rounded hover:bg-success "
            >
              Card payment (Paystack)
            </Link>
          </div>

          <p className="text-xs text-gray-500 mt-3">
            Note: The card checkout handles card details securely via our
            payment provider (Paystack Gateway) — Prettygigs Hub does not store raw card numbers on our servers.
            Payment are in NGN (Nigerian Naira). To pay using other currencies, please use bank transfer.
          </p>
        </section>

        <footer className="mt-8 text-sm text-gray-600">
          <p className="mb-1">
            Questions? Email{" "}
            <Link className="underline" href="mailto:support@prettygigshub.com">
              admin@prettygigshub.ng
            </Link>{" "}
            or contact our support team in the dashboard.
          </p>
         
        </footer>
      </main>
    </div>
  );
}
