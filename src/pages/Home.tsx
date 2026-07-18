import { Link } from "react-router";
import {
  ArrowRight, BedDouble, Building2, GraduationCap, Heart, HeartPulse,
  MapPin, Shirt, UtensilsCrossed,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { ArticleCard, DonateBanner, IconByName, SectionHead } from "../components/Shared";
import { ARTICLES, ARRIVAL_STEPS, GALLERY, PROGRAMS } from "../data/content";

const PROVIDES = [
  { icon: BedDouble, label: "Safe shelter" },
  { icon: UtensilsCrossed, label: "Daily nutritious meals" },
  { icon: Shirt, label: "Clothing" },
  { icon: HeartPulse, label: "Medical care" },
  { icon: GraduationCap, label: "School enrollment & support" },
];

const STATS = [
  { value: "24/7", label: "Emergency response with local police & children's office" },
  { value: "3", label: "Nutritious meals served every child, every day" },
  { value: "66", label: "Children the new home on Plot 361 will shelter" },
  { value: "100%", label: "Of every gift goes directly to the care of children" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-leaf-950">
        <img
          src="/images/children-group-home.jpg"
          alt="The children of Grace and Hope Children's Home in front of their home"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-950/95 via-leaf-950/75 to-leaf-950/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/90 via-transparent to-leaf-950/40" />
        <div className="absolute inset-0 texture-dots" />

        <div className="container-site relative pb-28 pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cream backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-sun-400" />
                Nyabera Got Village · Kenya
              </p>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="mt-6 font-display text-[2.85rem] font-semibold leading-[1.04] text-cream text-balance sm:text-6xl lg:text-7xl">
                Every child deserves a <em className="not-italic text-sun-400">second chance</em> at life.
              </h1>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl">
                Grace and Hope Children's Home rescues, shelters, nurtures and educates abandoned,
                orphaned and vulnerable children — because a child's future cannot wait.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link to="/donate" className="btn-primary text-base">
                  <Heart className="h-5 w-5 fill-current" /> Donate Now
                </Link>
                <Link to="/about" className="btn-outline-light text-base">
                  Our Story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={480}>
              <p className="mt-10 font-display text-xl italic text-sun-300/90">
                "We make a life by what we give."
              </p>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/60 md:flex">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-10 w-px animate-pulse bg-gradient-to-b from-sun-400 to-transparent" />
        </div>
      </section>

      {/* ── WELCOME / MISSION ────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 texture-dots-dark" />
        <div className="container-site relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <p className="eyebrow">Welcome to Grace &amp; Hope</p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-leaf-900 text-balance sm:text-4xl lg:text-[2.75rem]">
                  When a child has no safe place to stay, <span className="text-sun-600">we open the door.</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-lg leading-relaxed text-ink/70">
                  Grace and Hope Children's Home is a registered children's home located in Nyabera
                  Got Village, Kenya. Our local police officers and children's office contact us when
                  a child has nowhere safe to go — and we respond immediately.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink/70">
                  Today, the need is greater than ever. We receive more children needing rescue than
                  we can comfortably accommodate. Your support makes it possible for us to say{" "}
                  <strong className="text-leaf-800">YES</strong> to every child who needs us.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {PROVIDES.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 rounded-2xl border border-leaf-900/10 bg-white px-4 py-3 shadow-xs">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-leaf-700 text-cream">
                        <item.icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-semibold text-leaf-900">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <div className="relative">
              <Reveal delay={150}>
                <div className="img-frame relative">
                  <img src="/images/director-children.jpg" alt="Director Stephen Wabuko welcoming children at the door of the home" className="h-[520px] w-full object-cover" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-950/85 to-transparent p-6 pt-16">
                    <p className="text-sm font-semibold text-cream">
                      Director Stephen Wabuko welcoming some of our youngest children home.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={300} className="absolute -bottom-8 -left-4 sm:-left-8">
                <div className="card-soft flex items-center gap-4 p-5">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sun-500 text-leaf-950">
                    <Heart className="h-6 w-6 fill-current" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-leaf-900">Say yes to a child</p>
                    <Link to="/donate" className="text-sm font-bold text-sun-600 hover:text-sun-500">
                      Give today →
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────── */}
      <section className="bg-leaf-900 py-14">
        <div className="container-site">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 100} className="text-center">
                <p className="font-display text-5xl font-semibold text-sun-400">{s.value}</p>
                <p className="mx-auto mt-3 max-w-[240px] text-sm leading-relaxed text-cream/75">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW A CHILD ARRIVES ──────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHead
            eyebrow="Rescue in action"
            title="The first 24 hours — from crisis to care"
            text="When the phone rings, the clock starts. Here is the journey every child takes from the moment we get the call."
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ARRIVAL_STEPS.map((step, i) => (
              <Reveal as="li" key={i} delay={i * 90}>
                <div className="card-soft group relative h-full overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="absolute -right-3 -top-6 font-display text-[92px] font-semibold leading-none text-leaf-100 transition-colors group-hover:text-sun-200">
                    {i + 1}
                  </span>
                  <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-leaf-700 font-display text-lg font-semibold text-cream">
                    {i + 1}
                  </span>
                  <h3 className="relative mt-4 font-display text-xl font-semibold text-leaf-900">{step.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink/65">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
          <Reveal className="mt-10 text-center">
            <Link to="/stories/the-first-24-hours" className="btn-outline-leaf">
              Read the full story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── PROGRAMS PREVIEW ─────────────────────────────────── */}
      <section className="bg-sand/60 py-20 sm:py-28">
        <div className="container-site">
          <SectionHead
            eyebrow="What we do"
            title="Six promises to every child"
            text="Rescue is only the beginning. We walk with each child — body, mind and heart — until they can stand on their own."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 100}>
                <Link
                  to="/programs"
                  className="group card-soft block h-full overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-leaf-950/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sun-500 text-leaf-950 shadow-lg">
                      <IconByName name={p.icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-leaf-900 group-hover:text-leaf-600">{p.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink/65">{p.text}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUILDING CAMPAIGN BAND ───────────────────────────── */}
      <section className="relative overflow-hidden bg-leaf-950 py-20 sm:py-28">
        <img src="/images/construction-walls.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-950/95 via-leaf-950/85 to-leaf-950/60" />
        <div className="container-site relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow !text-sun-300">The Building Campaign</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-cream text-balance sm:text-4xl lg:text-5xl">
                Help us build a home for <span className="text-sun-400">66 children</span> on Plot 361.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/80">
                Every week, police and child welfare officers call us with more children who need
                rescue — and we are running out of space. Our $200,000 storey building will give 66
                children a permanent, safe and spacious home. Right now, every gift is matched
                dollar-for-dollar — your donation is <strong className="text-sun-300">doubled</strong>.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/building" className="btn-primary">
                  <Building2 className="h-5 w-5" /> Join the Campaign
                </Link>
                <Link to="/stories/building-more-than-walls" className="btn-outline-light">
                  Read the story
                </Link>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sun-300">Campaign goal</p>
                <p className="mt-2 font-display text-6xl font-semibold text-cream">$200,000</p>
                <div className="mt-6 space-y-4">
                  {[
                    ["House 66 children safely and comfortably", "🏠"],
                    ["Dedicated study & learning spaces", "📚"],
                    ["Expanded kitchen and dining facilities", "🍽️"],
                    ["Never turn a child away again", "❤️"],
                  ].map(([label, emoji]) => (
                    <div key={label} className="flex items-center gap-3 text-cream/85">
                      <span className="text-xl">{emoji}</span>
                      <span className="text-[15px]">{label}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 border-t border-cream/10 pt-5 text-sm italic text-cream/60">
                  "Every brick tells a story of hope. This building is not just concrete and iron —
                  it is a future for 66 children who have nowhere else to go."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── STORIES PREVIEW ──────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead
              align="left"
              eyebrow="Stories & news"
              title="Lives being rewritten"
              text="Dispatches from the home — the children, the milestones, and the miracles your giving makes possible."
            />
            <Reveal>
              <Link to="/stories" className="btn-outline-leaf shrink-0">
                All stories <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ARTICLES.slice(0, 3).map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY MARQUEE ──────────────────────────────────── */}
      <section className="overflow-hidden bg-leaf-900 py-16">
        <div className="container-site">
          <SectionHead
            eyebrow="Life at the home"
            title="Moments of grace"
          />
        </div>
        <div className="relative mt-12">
          <div className="flex w-max animate-marquee gap-5 pr-5">
            {[...GALLERY, ...GALLERY].map((g, i) => (
              <figure key={i} className="group relative h-64 w-80 shrink-0 overflow-hidden rounded-3xl">
                <img src={g.src} alt={g.caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-950/85 to-transparent px-5 pb-4 pt-12 text-sm font-semibold text-cream">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
