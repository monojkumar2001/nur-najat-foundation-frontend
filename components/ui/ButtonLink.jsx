import Link from "next/link";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm border border-transparent",
  accent:
    "bg-accent text-navy hover:bg-accent-dark shadow-sm border border-transparent font-semibold",
  outline:
    "border-2 border-white text-white hover:bg-white/10 bg-transparent",
  outlineDark:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white bg-transparent",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center uppercase text-white justify-center rounded-[8px] px-12 py-3.5 text-base font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
