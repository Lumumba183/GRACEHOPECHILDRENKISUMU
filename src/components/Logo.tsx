export default function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "#fbf7ef" : "#143c24";
  const sub = variant === "light" ? "#f6a73a" : "#267341";
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="h-10 w-10 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="14" fill="#1e5b34" />
        <circle cx="47" cy="16" r="6" fill="#f6a73a" />
        <path d="M10 34 L32 16 L54 34" fill="none" stroke="#fbf7ef" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 34 V52 H49 V34" fill="none" stroke="#fbf7ef" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="36" r="4" fill="#f6a73a" />
        <path d="M26 40 C21 46 21 48 21 52 M26 40 C26 46 29 48 31 52" fill="none" stroke="#f6a73a" strokeWidth="4" strokeLinecap="round" />
        <circle cx="39" cy="34" r="4.5" fill="#8fd3a6" />
        <path d="M39 38.5 C34 45 34 48 34 52 M39 38.5 C39 45 42 48 44 52" fill="none" stroke="#8fd3a6" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <span className="leading-tight">
        <span className="block font-display text-[17px] font-semibold tracking-tight" style={{ color: text }}>
          Grace <span style={{ color: sub }}>&amp;</span> Hope
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: sub }}>
          Children's Home
        </span>
      </span>
    </span>
  );
}
