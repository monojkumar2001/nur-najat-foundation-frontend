const stats = [
  { value: "5,000+", label: "Students supported" },
  { value: "1,000+", label: "Families reached" },
  { value: "24+", label: "Active projects" },
];

export function StatsBar() {
  return (
    <section className="bg-primary py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 text-center sm:grid-cols-3 sm:gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="heading-font text-4xl font-bold text-white sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-white/90">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
