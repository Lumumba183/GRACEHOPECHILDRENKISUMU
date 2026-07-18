import { useEffect } from "react";
import { Link, useLocation } from "react-router";
import {
  Award, BadgeCheck, BookOpen, Building2, Flame, GraduationCap, Heart,
  HeartHandshake, HeartPulse, Shield, Shirt, Sparkles, Users, UtensilsCrossed,
  ArrowRight, type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  Award, BadgeCheck, BookOpen, Building2, Flame, GraduationCap, Heart,
  HeartHandshake, HeartPulse, Shield, Shirt, Sparkles, Users, UtensilsCrossed,
};

export function IconByName({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const Icon = ICONS[name] ?? Heart;
  return <Icon className={className} />;
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export function PageHero({
  eyebrow, title, intro, image,
}: { eyebrow: string; title: string; intro: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-leaf-950">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-b from-leaf-950/70 via-leaf-950/60 to-leaf-950/90" />
      <div className="absolute inset-0 texture-dots" />
      <div className="container-site relative pb-20 pt-40 sm:pb-24">
        <Reveal>
          <p className="eyebrow !text-sun-300">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] text-cream text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">{intro}</p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-sun-400/40 bg-sun-400/10 px-4 py-2 text-sm font-semibold italic text-sun-300">
            "We make a life by what we give."
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function DonateBanner({
  title = "Your support today. Their better tomorrow.",
  text = "Every day we delay is another day a child spends without safety, food, or education. Please give today — every gift matters, every child matters.",
}: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-leaf-800">
      <div className="absolute inset-0 texture-dots" />
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sun-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sun-500/10 blur-3xl" />
      <div className="container-site relative py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-semibold leading-tight text-cream text-balance sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/75">{text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/donate" className="btn-primary">
              <Heart className="h-5 w-5 fill-current" /> Donate Now
            </Link>
            <Link to="/stories" className="btn-outline-light">
              Read Our Stories <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHead({
  eyebrow, title, text, align = "center",
}: { eyebrow: string; title: string; text?: string; align?: "center" | "left" }) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-leaf-900 text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {text && (
        <p className={`mt-4 max-w-2xl text-lg leading-relaxed text-ink/70 ${align === "center" ? "mx-auto" : ""}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}

export function ArticleCard({ article, index = 0 }: { article: import("../data/content").Article; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 90}>
      <Link
        to={`/stories/${article.slug}`}
        className="group card-soft block overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-leaf-950/85 px-3 py-1 text-xs font-bold uppercase tracking-wider text-sun-300 backdrop-blur">
            {article.category}
          </span>
        </div>
        <div className="p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink/45">
            {article.date} · {article.readTime}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-leaf-900 transition-colors group-hover:text-leaf-600">
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink/65">{article.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-sun-600">
            Read story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
