import { useState } from "react";
import { Check, Copy, Landmark, Smartphone, Globe, Send } from "lucide-react";
import { DONATE_METHODS, SITE } from "../data/content";
import Reveal from "./Reveal";

const METHOD_ICONS: Record<string, typeof Smartphone> = {
  mpesa: Smartphone,
  bank: Landmark,
  coop: Landmark,
  paypal: Globe,
  remittance: Send,
};

const BUILDING_METHOD = {
  id: "coop",
  name: "Co-op Bank — Building Fund",
  badge: "Building Fund",
  detail: "ACC: 01101451820001",
  copyValue: "01101451820001",
  note: "Dedicated account for the Storey Building Fund. Account name: Grace and Hope Children's Home.",
};

function MethodCard({ method, index }: { method: (typeof DONATE_METHODS)[number]; index: number }) {
  const [copied, setCopied] = useState(false);
  const Icon = METHOD_ICONS[method.id] ?? Globe;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(method.copyValue);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = method.copyValue;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Reveal delay={index * 80}>
      <div className="card-soft flex h-full flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-100 text-leaf-700">
            <Icon className="h-6 w-6" />
          </span>
          <span className="rounded-full bg-sun-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-sun-800">
            {method.badge}
          </span>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-leaf-900">{method.name}</h3>
        <p className="mt-1 break-all font-mono text-[15px] font-semibold tracking-tight text-ink/85">
          {method.detail}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60">{method.note}</p>
        <button
          onClick={copy}
          className={`btn mt-5 w-full px-4 py-2.5 text-sm font-bold transition-colors ${
            copied ? "bg-leaf-600 text-cream" : "bg-leaf-800 text-cream hover:bg-leaf-700"
          }`}
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copied!" : "Copy details"}
        </button>
      </div>
    </Reveal>
  );
}

export default function PaymentMethods({ buildingAccount = false }: { buildingAccount?: boolean }) {
  const methods = buildingAccount ? [BUILDING_METHOD, ...DONATE_METHODS] : DONATE_METHODS;
  return (
    <div>
      {buildingAccount && (
        <Reveal>
          <div className="mb-8 rounded-3xl border-2 border-leaf-700 bg-leaf-900 p-6 text-center shadow-lift sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sun-300">
              Preferred for the Building Fund
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-cream sm:text-3xl">
              Co-op Bank &nbsp;·&nbsp; ACC: 01101451820001
            </p>
            <p className="mt-2 text-sm text-cream/70">
              A separate account dedicated 100% to the Storey Building Fund on Plot 361.
            </p>
          </div>
        </Reveal>
      )}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {methods.map((m, i) => (
          <MethodCard key={m.id} method={m} index={i} />
        ))}
      </div>
      <Reveal delay={120}>
        <div className="mt-8 rounded-3xl border border-sun-300/60 bg-sun-50 p-6 text-center">
          <p className="text-sm leading-relaxed text-ink/75">
            <strong className="text-leaf-800">Need help giving, or want bank transfer details confirmed?</strong>{" "}
            Email us at{" "}
            <a href={`mailto:${SITE.email}`} className="font-bold text-leaf-700 underline decoration-sun-400 decoration-2 underline-offset-2">
              {SITE.email}
            </a>{" "}
            or find us on Facebook — <strong>{SITE.facebook}</strong>. We will gladly walk you through it.
          </p>
        </div>
      </Reveal>
    </div>
  );
}
