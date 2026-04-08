export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
  align = "center",
  className = "",
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";
  return (
    <div className={`max-w-3xl ${alignClass} ${align === "center" ? "mx-auto" : ""} ${className}`}>
      {eyebrow ? (
        <p
          className={`mb-2 text-base font-semibold uppercase tracking-widest ${
            light ? "text-accent" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`heading-font uppercase text-3xl line-height-10 leading-tight font-bold sm:text-3xl lg:text-4xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/85" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
