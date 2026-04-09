import Link from "next/link";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm border border-transparent",
  accent:
    "bg-accent text-navy hover:bg-accent-dark shadow-sm border border-transparent font-semibold",
  outline:
    "border-2 border-white text-white hover:bg-white/10 bg-transparent",
  outlineDark:
    "border-2 border-primary text-primary-dark hover:bg-primary hover:text-white bg-transparent",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center uppercase justify-center rounded-[8px] px-12 py-3.5 text-base font-medium transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-colors hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-sm motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none";
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
