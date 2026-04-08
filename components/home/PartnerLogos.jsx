const partners = [
  { name: "Global Aid Partners", initial: "G" },
  { name: "Youth Forward", initial: "Y" },
  { name: "HealthBridge", initial: "H" },
  { name: "Community First", initial: "C" },
  { name: "Bright Future Fund", initial: "B" },
];

export function PartnerLogos() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-muted">
          Our partners
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-lg font-bold text-slate-400 shadow-sm"
              title={p.name}
            >
              {p.initial}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
