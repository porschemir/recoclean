import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

const CTA_URL = "https://www.google.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RecoSocial — Claim Your Welcome Bonus" },
      { name: "description", content: "Join RecoSocial and claim your new-member welcome bonus. Earn rewards from games, offers and everyday phone time." },
      { property: "og:title", content: "RecoSocial — Claim Your Welcome Bonus" },
      { property: "og:description", content: "Join RecoSocial and claim your new-member welcome bonus." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Cta() {
  return (
    <a href={CTA_URL} className="animate-cta shadow-cta flex w-full items-center justify-center gap-2 rounded-2xl bg-primary py-4 text-lg font-bold text-primary-foreground">
      Claim My Welcome Bonus Now <span>→</span>
    </a>
  );
}

const MODALS = {
  privacy: ["Privacy Policy", "We respect your privacy. We collect only the information needed to operate this page and route you to our partner offers, such as basic device and analytics data. We use cookies and third-party analytics to improve performance. We do not sell your personal information. When you proceed to an offer, you may be subject to the privacy practices of the partner you are directed to."],
  terms: ["Terms of Service", "This site is provided for informational and promotional purposes. Bonuses, rewards, and earnings shown are illustrative and are not guaranteed. They depend on eligibility, offer availability, task completion, and individual effort, and may vary by region. You must meet all age and eligibility requirements shown by RecoSocial. Void where prohibited."],
  affiliate: ["Affiliate Disclosure", "This page contains affiliate links. If you join RecoSocial through this page, we may earn a commission at no additional cost to you. Results vary."],
} as const;

function Index() {
  const [modal, setModal] = useState<keyof typeof MODALS | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-md">
        <header className="bg-hero rounded-b-[2rem] px-6 pb-10 pt-8 text-center text-primary-foreground">
          <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-card text-3xl font-black text-primary">R</div>
          <p className="text-sm font-semibold opacity-90">RecoSocial</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight">Get paid to play games</h1>
          <p className="mt-3 text-sm opacity-90">Join thousands earning rewards from games, offers and everyday phone time.</p>
          <div className="mt-5 flex justify-center gap-6 text-sm">
            <div><div className="text-gold">★★★★★</div><div className="opacity-80">25K+ ratings · 4.7</div></div>
            <div><div className="font-bold">Your account</div><div className="opacity-80">is pre-qualified</div></div>
          </div>
        </header>

        <main className="space-y-6 px-5 py-6">
          <div className="rounded-2xl bg-primary-soft p-4 text-center text-sm font-semibold text-primary-deep">🎁 New-member rewards are available now</div>

          <div className="rounded-2xl bg-card p-5 shadow-sm">
            <span className="rounded-full bg-success/15 px-3 py-1 text-xs font-bold text-success">✓ Welcome bonus</span>
            <p className="mt-3 text-sm text-muted-foreground">New members can <b className="text-foreground">claim a welcome bonus</b> when they join RecoSocial and unlock full access.</p>
            <div className="mt-4"><Cta /></div>
          </div>

          <div className="bg-hero rounded-2xl p-6 text-primary-foreground">
            <div className="flex justify-between text-sm opacity-90"><span className="font-bold">RecoSocial</span><span>Projected Earnings</span></div>
            <div className="mt-4 text-5xl font-extrabold">$500</div>
            <div className="mt-4 flex justify-between text-sm opacity-90"><span>Your Account</span><span className="text-gold">Available</span></div>
          </div>
          <Cta />

          <section className="rounded-2xl bg-card p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-extrabold">How It Works</h2>
            {[["📥", "Join & Claim Your Welcome Bonus", "Quick sign-up — takes under a minute"], ["🎯", "Complete Daily Offers", "Play games, watch videos or complete tasks"], ["💰", "Cash Out Your Earnings", "Choose from the payout options available to you"]].map(([i, t, d], n) => (
              <div key={t} className="flex items-center gap-4 border-b py-3 last:border-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft text-2xl">{i}</div>
                <div className="flex-1"><div className="font-bold">{t}</div><div className="text-xs text-muted-foreground">{d}</div></div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">{n + 1}</div>
              </div>
            ))}
            <p className="mt-3 text-center text-sm text-muted-foreground">Complete offers to start building your rewards balance.</p>
          </section>
          <Cta />

          <div className="grid grid-cols-3 gap-2 text-center text-sm font-semibold">
            {["PayPal", "Cash App", "Venmo", "Apple Pay", "Visa", "Crypto"].map((p) => <div key={p} className="rounded-xl bg-card py-3 shadow-sm">{p}</div>)}
          </div>
          <p className="text-center text-xs text-muted-foreground">Payout options vary by account and region</p>
        </main>

        <footer className="flex justify-center gap-4 pb-8 text-xs text-muted-foreground">
          <button onClick={() => setModal("privacy")}>Privacy Policy</button>
          <button onClick={() => setModal("terms")}>Terms of Service</button>
          <button onClick={() => setModal("affiliate")}>Affiliate Disclosure</button>
        </footer>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 p-5" onClick={() => setModal(null)}>
          <div className="max-w-sm rounded-2xl bg-card p-6" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between"><h3 className="font-bold">{MODALS[modal][0]}</h3><button onClick={() => setModal(null)}>×</button></div>
            <p className="mt-3 text-sm text-muted-foreground">{MODALS[modal][1]}</p>
          </div>
        </div>
      )}
    </div>
  );
}
