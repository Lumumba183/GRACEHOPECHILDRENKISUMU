import { Link } from "react-router";
import { ArticleCard, DonateBanner, PageHero } from "../components/Shared";
import { ARTICLES } from "../data/content";

export default function Stories() {
  const [featured, ...rest] = ARTICLES;
  return (
    <>
      <PageHero
        eyebrow="Stories & news"
        title="Stories from the home"
        intro="Real moments from Nyabera Got Village — the rescues, the milestones, the ordinary miracles of a childhood restored."
        image="/images/study-night.jpg"
      />

      <section className="py-20 sm:py-24">
        <div className="container-site">
          {/* Featured */}
          <Link to={`/stories/${featured.slug}`} className="group card-soft mb-12 grid overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden">
              <img src={featured.image} alt={featured.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="absolute left-5 top-5 rounded-full bg-sun-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-leaf-950">
                Featured story
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <p className="text-xs font-bold uppercase tracking-wider text-ink/45">
                {featured.category} · {featured.date} · {featured.readTime}
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-leaf-900 group-hover:text-leaf-600">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-ink/65">{featured.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-bold text-sun-600">
                Read the story →
              </span>
            </div>
          </Link>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
          </div>
        </div>
      </section>

      <DonateBanner
        title="Behind every story is someone who gave"
        text="These stories are still being written. Your gift writes the next chapter."
      />
    </>
  );
}
