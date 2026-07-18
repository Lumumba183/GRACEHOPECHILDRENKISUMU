import { Link } from "react-router";
import { ArrowRight, Heart } from "lucide-react";
import Reveal from "../components/Reveal";
import { DonateBanner, IconByName, PageHero } from "../components/Shared";
import { PROGRAMS } from "../data/content";

export default function Programs() {
  return (
    <>
      <PageHero
        eyebrow="Our programs"
        title="Six ways we rebuild a childhood"
        intro="From the first night of safety to the first day of school — every program exists to give a child back their future."
        image="/images/study-group.jpg"
      />

      <section className="py-20 sm:py-28">
        <div className="container-site space-y-20">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.id}>
              <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-leaf-700 text-cream shadow-soft">
                    <IconByName name={p.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-leaf-900 text-balance">
                    {p.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink/70">{p.text}</p>
                  <Link to="/donate" className="mt-6 inline-flex items-center gap-2 font-bold text-sun-600 transition-colors hover:text-sun-500">
                    <Heart className="h-4 w-4 fill-current" />
                    Support this program <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="img-frame">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-[340px] w-full object-cover sm:h-[400px]" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Facilities strip */}
      <section className="bg-leaf-900 py-20">
        <div className="container-site">
          <Reveal className="text-center">
            <p className="eyebrow justify-center !text-sun-300">Our growing campus</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-cream text-balance sm:text-4xl">
              Built by love, one project at a time
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-cream/70">
              Dormitories with real beds, the God Is Gracious Kitchen, The Tommie Dees Library, a
              10,000-litre water tank, and classrooms buzzing every evening — every corner of our
              compound was a gift someone gave.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["/images/dormitory-beds.jpg", "The dormitories"],
              ["/images/kitchen-children.jpg", "God Is Gracious Kitchen"],
              ["/images/library.jpg", "The Tommie Dees Library"],
              ["/images/water-tank.jpg", "Rain harvesting tank"],
            ].map(([src, caption], i) => (
              <Reveal key={caption} delay={i * 90}>
                <figure className="group relative h-64 overflow-hidden rounded-3xl">
                  <img src={src} alt={caption} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-leaf-950/90 to-transparent px-5 pb-4 pt-12 text-sm font-bold text-cream">
                    {caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <DonateBanner />
    </>
  );
}
