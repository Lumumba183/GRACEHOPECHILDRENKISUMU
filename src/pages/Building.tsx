import { Link } from "react-router";
import { BedDouble, BookOpen, Heart, UtensilsCrossed } from "lucide-react";
import Reveal from "../components/Reveal";
import { DonateBanner, PageHero, SectionHead } from "../components/Shared";
import PaymentMethods from "../components/PaymentMethods";

const WILL_PROVIDE = [
  { icon: BedDouble, title: "66 children housed", text: "Safe, comfortable dormitory space for 66 orphaned and vulnerable children." },
  { icon: BookOpen, title: "Study & learning spaces", text: "Dedicated rooms where homework, reading and mentorship happen every day." },
  { icon: UtensilsCrossed, title: "Bigger kitchen & dining", text: "Expanded facilities so no meal is ever crowded out or delayed." },
  { icon: Heart, title: "Room to say yes", text: "The space to welcome every child who needs us — without turning anyone away." },
];

const PROGRESS_PHOTOS = [
  { src: "/images/construction-bricks.jpg", caption: "Walls rising on Plot 361" },
  { src: "/images/construction-roof.jpg", caption: "Framing the roof" },
  { src: "/images/construction-walls.jpg", caption: "Plastering the new wing" },
  { src: "/images/painting-walls.jpg", caption: "Fresh paint, fresh hope" },
];

export default function Building() {
  return (
    <>
      <PageHero
        eyebrow="The Building Campaign"
        title="Help us build a home — the Storey Building Fundraiser"
        intro="We are raising $200,000 to build a new storey building on Plot Number 361 — a permanent, safe, and spacious home for 66 orphaned children."
        image="/images/construction-bricks.jpg"
      />

      {/* Goal band */}
      <section className="bg-leaf-900 py-16">
        <div className="container-site">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-sun-300">Our faith goal</p>
              <p className="mt-2 font-display text-6xl font-semibold text-cream sm:text-7xl">$200,000</p>
              <p className="mt-4 max-w-lg text-lg leading-relaxed text-cream/80">
                A permanent, safe and spacious home for <strong className="text-sun-300">66 children</strong> on
                Plot Number 361. We are believing God will open every door — and we are stepping out
                in faith.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-3xl border-2 border-sun-400/60 bg-sun-500/10 p-8 backdrop-blur">
                <p className="font-display text-2xl font-semibold text-sun-300">
                  Right now, every gift is matched dollar-for-dollar.
                </p>
                <p className="mt-3 leading-relaxed text-cream/80">
                  Your donation today is <strong>DOUBLED</strong>. If you have already given — thank you:
                  your gift is a seed of faith, and it is already at work. If you have been praying
                  about whether to give — we invite you to take the next step and trust God in it.
                </p>
                <a href="#give" className="btn-primary mt-6">
                  <Heart className="h-5 w-5 fill-current" /> Give &amp; Double It
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why we need to build */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHead
            eyebrow="Why we must build"
            title="More children need rescue than we have room for"
            text="Today, we are housing more children than our current facility was designed to hold. Every week, local police and child welfare officers contact us with more children who desperately need rescue — and we are running out of space."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WILL_PROVIDE.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="card-soft h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sun-500 text-leaf-950">
                    <item.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-leaf-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Progress photos */}
      <section className="bg-sand/60 py-20 sm:py-24">
        <div className="container-site">
          <SectionHead
            eyebrow="It has already begun"
            title="Every brick tells a story of hope"
            text="This is not a dream on paper. Foundations are in, walls are rising — carried by local builders, faithful friends, and the prayers of our children."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PROGRESS_PHOTOS.map((p, i) => (
              <Reveal key={p.src} delay={i * 90}>
                <figure className="group relative h-72 overflow-hidden rounded-3xl shadow-soft">
                  <img src={p.src} alt={p.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-950/90 to-transparent px-5 pb-4 pt-14 text-sm font-bold text-cream">
                    {p.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mx-auto mt-12 max-w-3xl text-center">
            <p className="font-display text-2xl italic leading-relaxed text-leaf-800">
              "This building is not just concrete and iron — it is a future for 66 children who have
              nowhere else to go. Help us build it."
            </p>
          </Reveal>
        </div>
      </section>

      {/* How to give */}
      <section className="py-20 sm:py-24" id="give">
        <div className="container-site">
          <SectionHead
            eyebrow="How to donate to the Building Fund"
            title="Lay a brick today"
            text="Give through any of these channels and mention 'Building Fund' — or simply give, and tell us where your heart is."
          />
          <div className="mt-12">
            <PaymentMethods />
          </div>
          <Reveal className="mt-10 text-center">
            <p className="text-sm text-ink/60">
              Prefer to talk first? Visit our <Link to="/contact" className="font-bold text-leaf-700 underline decoration-sun-400 decoration-2 underline-offset-2">contact page</Link> — we would love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <DonateBanner
        title="Be part of the miracle on Plot 361"
        text="Every brick you fund is a life changed. Join us — give today."
      />
    </>
  );
}
