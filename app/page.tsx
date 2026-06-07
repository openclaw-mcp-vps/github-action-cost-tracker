export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Developer Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track GitHub Actions{" "}
          <span className="text-[#58a6ff]">Compute Costs</span>{" "}
          by Repo
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect to GitHub&apos;s API, calculate costs per repository and workflow,
          and instantly identify your most expensive CI runs — all in one dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Get Started — $14/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card lock-in.</p>

        {/* Feature highlights */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-left">
          {[
            { title: "Per-Repo Cost Breakdown", desc: "See exactly which repositories are burning your Actions budget." },
            { title: "Workflow-Level Analytics", desc: "Drill into individual workflows to find the expensive culprits." },
            { title: "Historical Tracking", desc: "Trend data over time so you can measure the impact of optimizations." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              "Unlimited repositories",
              "Real-time cost calculations",
              "Workflow-level drill-down",
              "90-day historical data",
              "GitHub OAuth integration",
              "Email cost alerts"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-150"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: "How does it connect to GitHub?",
              a: "You authenticate via GitHub OAuth. We request read-only access to your Actions usage data — we never write to your repositories."
            },
            {
              q: "Which GitHub plans are supported?",
              a: "All plans are supported, including GitHub Free, Pro, Team, and Enterprise Cloud. Costs are calculated using GitHub's published per-minute pricing."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} GitHub Action Cost Tracker. All rights reserved.
      </footer>
    </main>
  );
}
