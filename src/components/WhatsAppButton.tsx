import { waLink } from "../data/content";

/** The single WhatsApp contact point for the whole site — one floating button. */
export default function WhatsAppButton() {
  return (
    <a
      href={waLink("Hello Grace and Hope Children's Home, I would like to help.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp: +254 718 572 537"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-0 rounded-full bg-[#25D366] p-4 text-white shadow-[0_16px_40px_-10px_rgba(37,211,102,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_48px_-10px_rgba(37,211,102,0.75)]"
    >
      <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-pulse-ring" />
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M16.04 3C9.42 3 4.06 8.36 4.06 14.97c0 2.63.86 5.06 2.3 7.03L4 29l7.18-2.29a11.9 11.9 0 0 0 4.86 1.03h.01c6.61 0 11.97-5.36 11.97-11.97C28.02 8.36 22.65 3 16.04 3zm0 21.86h-.01a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.75 1.2 1.2-3.66-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.47 4.46-9.91 9.93-9.91a9.86 9.86 0 0 1 9.91 9.92c0 5.47-4.45 9.68-9.12 9.68zm5.44-7.34c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.28-.2-.58-.35z" />
      </svg>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:ml-2 group-hover:max-w-[220px]">
        +254 718 572 537
      </span>
    </a>
  );
}
