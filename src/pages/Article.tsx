import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, Heart } from "lucide-react";
import Reveal from "../components/Reveal";
import { ArticleCard } from "../components/Shared";
import { ARTICLES } from "../data/content";

export default function Article() {
  const { slug } = useParams();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <section className="container-site py-40 text-center">
        <h1 className="font-display text-4xl font-semibold text-leaf-900">Story not found</h1>
        <p className="mt-4 text-ink/60">The story you are looking for does not exist or has moved.</p>
        <Link to="/stories" className="btn-leaf mt-8">Back to stories</Link>
      </section>
    );
  }

  const others = ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Article hero */}
      <section className="relative overflow-hidden bg-leaf-950">
        <img src={article.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-leaf-950/70 to-leaf-950/95" />
        <div className="container-site relative pb-16 pt-36">
          <Reveal>
            <Link to="/stories" className="inline-flex items-center gap-2 text-sm font-semibold text-cream/70 transition-colors hover:text-sun-300">
              <ArrowLeft className="h-4 w-4" /> All stories
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
              <span className="rounded-full bg-sun-500 px-3 py-1 text-leaf-950">{article.category}</span>
              <span className="flex items-center gap-1.5 text-cream/70"><CalendarDays className="h-3.5 w-3.5" /> {article.date}</span>
              <span className="flex items-center gap-1.5 text-cream/70"><Clock className="h-3.5 w-3.5" /> {article.readTime}</span>
            </div>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-semibold leading-[1.12] text-cream text-balance sm:text-5xl">
              {article.title}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="py-14 sm:py-20">
        <div className="container-site">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <Reveal>
              <article className="mx-auto max-w-3xl">
                <img src={article.image} alt={article.title} className="mb-10 h-[380px] w-full rounded-3xl object-cover shadow-soft sm:h-[440px]" />
                <p className="mb-8 border-l-4 border-sun-500 pl-5 font-display text-xl italic leading-relaxed text-leaf-800">
                  {article.excerpt}
                </p>
                <div className="space-y-6 text-[17px] leading-[1.85] text-ink/80">
                  {article.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {article.quote && (
                  <blockquote className="my-10 rounded-3xl bg-leaf-900 p-8 text-center">
                    <p className="font-display text-2xl italic text-sun-300">"{article.quote.text}"</p>
                    <cite className="mt-3 block text-sm font-semibold not-italic text-cream/70">
                      — {article.quote.author}
                    </cite>
                  </blockquote>
                )}

                {/* In-article CTA */}
                <div className="mt-12 rounded-3xl border-2 border-dashed border-sun-400 bg-sun-50 p-8 text-center">
                  <h3 className="font-display text-2xl font-semibold text-leaf-900">
                    This story is still being written — help write the next page.
                  </h3>
                  <p className="mx-auto mt-3 max-w-lg text-ink/65">
                    Every gift keeps a child safe, fed and in school. 100% goes directly to the
                    children's care.
                  </p>
                  <Link to="/donate" className="btn-primary mt-6">
                    <Heart className="h-5 w-5 fill-current" /> Donate Now
                  </Link>
                </div>
              </article>
            </Reveal>

            {/* Sidebar */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={150}>
                <div className="card-soft p-7">
                  <h3 className="font-display text-xl font-semibold text-leaf-900">Make this possible</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    Grace and Hope Children's Home survives on gifts from people like you.
                  </p>
                  <Link to="/donate" className="btn-primary mt-5 w-full !px-4 !py-3 text-sm">
                    <Heart className="h-4 w-4 fill-current" /> Give today
                  </Link>
                  <Link to="/building" className="btn-outline-leaf mt-3 w-full !px-4 !py-2.5 text-sm">
                    Building campaign
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={250}>
                <div className="card-soft bg-leaf-900 p-7 !border-leaf-900">
                  <p className="font-display text-lg italic leading-relaxed text-cream">
                    "We don't just rescue children. We walk with them."
                  </p>
                  <p className="mt-3 text-sm font-semibold text-sun-300">Stephen Wabuko, Director</p>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* More stories */}
      <section className="bg-sand/60 py-16 sm:py-20">
        <div className="container-site">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-semibold text-leaf-900">More stories</h2>
            <Link to="/stories" className="inline-flex shrink-0 items-center gap-2 font-bold text-sun-600 hover:text-sun-500">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
