import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { DonateBanner, IconByName, PageHero, SectionHead } from "../components/Shared";
import { TEAM, VALUES } from "../data/content";

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A trusted refuge for the most vulnerable children in our region"
        intro="Grace and Hope Children's Home was founded with a simple but powerful belief — every child deserves to feel safe, loved, and valued."
        image="/images/compound-1.jpg"
      />

      {/* Who we are + how it works */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Who we are</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-leaf-900 text-balance sm:text-4xl">
                We don't just rescue children. <span className="text-sun-600">We walk with them.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/70">
                Located in Nyabera Got Village, Kenya, we have become a trusted refuge for some of
                the most vulnerable children in our region. When a child is found without a safe
                home, local police officers and the children's office reach out to us directly.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">
                We respond immediately — providing shelter, food, clothing, medical attention, and
                enrolling the child in school. Then we stay: ongoing guidance, emotional support,
                stable routines, and quality education, so that every child in our care can grow
                into a confident, capable adult.
              </p>
              <div className="mt-8 rounded-3xl border-l-4 border-sun-500 bg-sun-50 p-6">
                <p className="font-display text-lg italic leading-relaxed text-leaf-900">
                  "Religion that God our Father accepts as pure and faultless is this: to look after
                  orphans and widows in their distress."
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-ink/50">James 1:27</p>
              </div>
            </Reveal>

            <div className="grid gap-5">
              <Reveal delay={100}>
                <div className="img-frame">
                  <img src="/images/director-vision-wall.jpg" alt="Director Stephen Wabuko at the home's vision, mission and values wall" className="h-72 w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                <Reveal delay={180}>
                  <div className="card-soft h-full bg-leaf-800 p-6 !border-leaf-800">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-sun-300">Our Vision</p>
                    <p className="mt-3 font-display text-lg leading-snug text-cream">
                      A Kenya where no child sleeps without shelter, goes to bed hungry, or misses
                      school because they have no one to care for them.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={260}>
                  <div className="card-soft h-full bg-sun-500 p-6 !border-sun-500">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-leaf-950">Our Mission</p>
                    <p className="mt-3 font-display text-lg leading-snug text-leaf-950">
                      To rescue, shelter, feed, clothe, heal, and educate abandoned, orphaned and
                      vulnerable children — restoring hope and building futures, one child at a time.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem statement */}
      <section className="relative overflow-hidden bg-leaf-950 py-20 sm:py-28">
        <div className="absolute inset-0 texture-dots" />
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
        <div className="container-site relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow !text-sun-300">Problem statement</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-cream text-balance sm:text-4xl lg:text-[2.75rem]">
                A rising economy that <span className="text-sun-400">left too many behind</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-cream/80">
                Kenya is one of the fastest growing economies in Africa, with an economic growth
                rate of 5.7% between 2016 and 2020 according to the World Bank. That growth attracts
                investors across every sector — agriculture, healthcare, finance, technology — and
                opportunities seem many and varied.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-cream/80">
                Yet even with such promise, a part of our society lies forgotten and desolate. Walk
                through downtown Awendo town early in the morning and the streets are filled with
                homeless men, women and children — sleeping on cardboard boxes and covering
                themselves with potato sacks. In almost every Kenyan neighbourhood, the divide
                between the elite and the poverty-stricken is impossible to miss.
              </p>
              <p className="mt-4 leading-relaxed text-cream/70">
                Factors such as HIV/AIDS, environmental hygiene, lack of education and the absence
                of consistent, substantial income keep pushing more families into vulnerability.
                This section of society needs every positive aid it can be given if it is to rise.
              </p>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={100}>
                <div className="rounded-3xl border border-cream/15 bg-cream/5 p-8 backdrop-blur">
                  <p className="font-display text-6xl font-semibold text-sun-400">5.7%</p>
                  <p className="mt-2 text-cream/75">
                    Kenya's economic growth rate between 2016 and 2020 — among Africa's fastest
                    (World Bank).
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="rounded-3xl border-2 border-sun-400/60 bg-sun-500/10 p-8 backdrop-blur">
                  <p className="font-display text-6xl font-semibold text-sun-300">&lt;0.1%</p>
                  <p className="mt-2 text-cream/80">
                    of the population — about 8,300 people — own more wealth than the bottom 99.9%
                    combined.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="flex flex-wrap gap-2.5">
                  {["HIV / AIDS", "Environmental hygiene", "Lack of education", "No consistent income"].map((f) => (
                    <span key={f} className="rounded-full border border-cream/20 bg-cream/5 px-4 py-2 text-sm font-semibold text-cream/80">
                      {f}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Our story / founding timeline */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <p className="eyebrow">Our story</p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-leaf-900 text-balance sm:text-4xl">
                  Born out of the gap — <span className="text-sun-600">built by faith</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-ink/70">
                  Grace and Hope Children's Home was founded in 2017 by Stephen Wabuko and his wife
                  Viola, a mother of six, to answer exactly this reality. Both had spent years in
                  the community counselling orphans and women, teaching home-based care, feeding
                  needy children and linking them to schools and hospitals around Nyabera Got
                  Village in Awendo.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-ink/70">
                  Stephen himself was orphaned as a child and grew up in Migori County, witnessing
                  first-hand the suffering and vulnerability of children in the area. What began as
                  a small self-help fellowship — training women and youth to make bead-work,
                  detergents and food items to sell, using the proceeds to feed street children in
                  Awendo town, Mariwa market and Ng'ong'a centre — grew into a calling that could
                  no longer stay informal.
                </p>
              </Reveal>
              <div className="mt-10 space-y-0">
                {[
                  ["2016", "The community group is formalized", "Registered as a Community Based Organization (CBO) — women and youth producing bead-work, detergents and food items, with proceeds feeding street children."],
                  ["2017", "Grace and Hope Children's Home is founded", "Stephen and Viola open their doors as a safe haven where vulnerable children receive shelter, food, schooling and love."],
                  ["2018", "Registered as a Faith Based Organization", "Formal registration with the Ministry of Labour, Social Security and Services of the Republic of Kenya."],
                ].map(([year, title, text], i) => (
                  <Reveal key={year} delay={i * 120}>
                    <div className="relative flex gap-6 border-l-2 border-leaf-200 pb-10 pl-8 last:pb-0">
                      <span className="absolute -left-[13px] top-0 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sun-500 ring-4 ring-cream" />
                      <div>
                        <p className="font-display text-2xl font-semibold text-sun-600">{year}</p>
                        <h3 className="mt-1 font-display text-xl font-semibold text-leaf-900">{title}</h3>
                        <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-ink/65">{text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <div className="space-y-5 lg:sticky lg:top-28">
              <Reveal delay={150}>
                <div className="img-frame relative">
                  <img src="/images/wabuko-family.jpg" alt="Stephen and Viola Wabuko with their family at the home" className="h-[460px] w-full object-cover object-top" loading="lazy" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-950/85 to-transparent p-6 pt-16">
                    <p className="text-sm font-semibold text-cream">
                      Founders Stephen and Viola Wabuko — a mother of six who became a mother to many more.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={250}>
                <div className="rounded-3xl border-l-4 border-sun-500 bg-sun-50 p-6">
                  <p className="font-display text-lg italic leading-relaxed text-leaf-900">
                    "He grew up an orphan — so no child who comes to us is ever turned away."
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-sand/60 py-20 sm:py-24">
        <div className="container-site">
          <SectionHead
            eyebrow="What we live by"
            title="Our core values"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="card-soft h-full p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-leaf-700 text-cream">
                    <IconByName name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-leaf-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHead
            eyebrow="The family behind the family"
            title="Meet our team"
            text="A small team with an enormous calling — serving the children of Grace and Hope every single day."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="group card-soft h-full overflow-hidden text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  {member.image ? (
                    <img src={member.image} alt={member.name} loading="lazy" className="h-56 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  ) : (
                    <div className="flex h-56 w-full items-center justify-center bg-gradient-to-br from-leaf-700 to-leaf-900">
                      <span className="font-display text-5xl font-semibold text-sun-400">
                        {member.name.split(" ").map((n) => n[0]).join("")}
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-leaf-900">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold text-sun-600">{member.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <div className="card-soft grid items-center gap-8 overflow-hidden p-0 lg:grid-cols-2">
              <img src="/images/wabuko-family.jpg" alt="The Wabuko family at the gates of the home" className="h-full max-h-[420px] w-full object-cover object-top" loading="lazy" />
              <div className="p-8 lg:p-10">
                <p className="eyebrow">A family affair</p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-leaf-900 sm:text-3xl">
                  "These children are our children."
                </h3>
                <p className="mt-4 leading-relaxed text-ink/70">
                  Director Stephen Wabuko and his family have opened not just a facility, but a home.
                  Alongside Manager Joseph Omondi, cooks Sarah Beatrice and Cyprose Ochieng, and staff
                  member Viola Wabuko, the team raises dozens of children as their own — with
                  discipline, laughter, prayer, and love.
                </p>
                <Link to="/contact" className="btn-leaf mt-6">
                  Meet us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <DonateBanner
        title="Stand with this family — and every child they care for"
        text="Your gift keeps the doors open, the kitchen running, and the school fees paid. Join the story."
      />
    </>
  );
}
