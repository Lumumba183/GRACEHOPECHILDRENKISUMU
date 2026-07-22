import { useState, type FormEvent } from "react";
import { Facebook, Mail, MapPin, Send } from "lucide-react";
import Reveal from "../components/Reveal";
import { DonateBanner, PageHero } from "../components/Shared";
import { SITE } from "../data/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message for Grace & Hope — from ${name || "a friend"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We would love to hear from you"
        intro="Whether you want to give, volunteer, visit the home, or simply encourage our team — the door is always open."
        image="/images/gate-entrance.jpg"
      />

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Info cards */}
            <div className="space-y-5">
              <Reveal>
                <a href={`mailto:${SITE.email}`} className="card-soft group flex items-start gap-5 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-leaf-700 p-3.5 text-cream">
                    <Mail className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-wider text-ink/45">Email us</span>
                    <span className="mt-1 block font-display text-xl font-semibold text-leaf-900 group-hover:text-leaf-600">{SITE.email}</span>
                    <span className="mt-1 block text-sm text-ink/60">We reply personally — usually within a day or two.</span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={100}>
                <a href={SITE.facebookUrl} target="_blank" rel="noreferrer" className="card-soft group flex items-start gap-5 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-leaf-700 p-3.5 text-cream">
                    <Facebook className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-wider text-ink/45">Facebook</span>
                    <span className="mt-1 block font-display text-xl font-semibold text-leaf-900 group-hover:text-leaf-600">{SITE.facebook}</span>
                    <span className="mt-1 block text-sm text-ink/60">Follow daily life at the home, photos and updates.</span>
                  </span>
                </a>
              </Reveal>
              <Reveal delay={200}>
                <div className="card-soft flex items-start gap-5 p-7">
                  <span className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-leaf-700 p-3.5 text-cream">
                    <MapPin className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold uppercase tracking-wider text-ink/45">Visit us</span>
                    <span className="mt-1 block font-display text-xl font-semibold text-leaf-900">{SITE.location}</span>
                    <span className="mt-2 block rounded-2xl bg-leaf-50 px-4 py-3 text-sm leading-relaxed text-ink/75">
                      <strong className="text-leaf-800">Directions:</strong> Located in the beautiful
                      environment of the Awendo–Oyani road, along Nyabera road to Uriri — right next
                      to Ngong'a Comprehensive School.
                    </span>
                    <span className="mt-2 block text-sm text-ink/60">
                      Visitors are welcome by arrangement — please email ahead so we can prepare the children.
                    </span>
                  </span>
                </div>
              </Reveal>
              <Reveal delay={280}>
                <div className="overflow-hidden rounded-3xl shadow-soft">
                  <img src="/images/compound-3.jpg" alt="The Grace and Hope compound" className="h-64 w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
            </div>

            {/* Form */}
            <Reveal delay={120}>
              <form onSubmit={submit} className="card-soft p-8 sm:p-10">
                <h2 className="font-display text-2xl font-semibold text-leaf-900">Send us a message</h2>
                <p className="mt-2 text-sm text-ink/60">
                  This opens your email app with everything pre-filled — just press send.
                </p>
                <label className="mt-7 block">
                  <span className="text-sm font-bold text-leaf-900">Your name</span>
                  <input
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="mt-2 w-full rounded-2xl border border-leaf-900/15 bg-cream px-5 py-3.5 text-[15px] outline-none transition-all placeholder:text-ink/35 focus:border-sun-500 focus:ring-2 focus:ring-sun-300"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="text-sm font-bold text-leaf-900">Your email</span>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="mt-2 w-full rounded-2xl border border-leaf-900/15 bg-cream px-5 py-3.5 text-[15px] outline-none transition-all placeholder:text-ink/35 focus:border-sun-500 focus:ring-2 focus:ring-sun-300"
                  />
                </label>
                <label className="mt-5 block">
                  <span className="text-sm font-bold text-leaf-900">Message</span>
                  <textarea
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Grace and Hope team…"
                    className="mt-2 w-full resize-none rounded-2xl border border-leaf-900/15 bg-cream px-5 py-3.5 text-[15px] outline-none transition-all placeholder:text-ink/35 focus:border-sun-500 focus:ring-2 focus:ring-sun-300"
                  />
                </label>
                <button type="submit" className="btn-leaf mt-7 w-full text-base">
                  <Send className="h-5 w-5" /> Send message
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
