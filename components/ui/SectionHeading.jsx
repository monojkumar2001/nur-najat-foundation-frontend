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
          className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
            light ? "text-accent" : "text-primary"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`heading-font text-3xl font-bold sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-white/85" : "text-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
