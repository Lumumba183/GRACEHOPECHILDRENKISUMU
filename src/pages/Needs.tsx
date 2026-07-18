import { Link } from "react-router";
import { Heart } from "lucide-react";
import Reveal from "../components/Reveal";
import { DonateBanner, IconByName, PageHero, SectionHead } from "../components/Shared";
import { URGENT_NEEDS } from "../data/content";

export default function Needs() {
  return (
    <>
      <PageHero
        eyebrow="Urgent needs"
        title="How you can help right now"
        intro="Beyond school fees and the building project, Grace and Hope has ongoing daily needs. Your donation today — in any amount — directly meets one of them."
        image="/images/books-donation.jpg"
      />

      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHead
            eyebrow="Right now, today"
            title="Five urgent needs you can meet"
            text="These are not abstract line items — they are dinner tonight, medicine this week, a uniform before Monday."
          />
          <div className="mt-14 space-y-6">
            {URGENT_NEEDS.map((need, i) => (
              <Reveal key={need.title} delay={i * 60}>
                <div className={`card-soft grid items-stretch gap-0 overflow-hidden md:grid-cols-[260px_1fr] ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                  <img src={need.image} alt={need.title} loading="lazy" className="h-52 w-full object-cover md:h-full md:[direction:ltr]" />
                  <div className="flex flex-col justify-center p-7 md:p-9 md:[direction:ltr]">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-leaf-700 text-cream">
                        <IconByName name={need.icon} className="h-6 w-6" />
                      </span>
                      <h2 className="font-display text-2xl font-semibold text-leaf-900">{need.title}</h2>
                    </div>
                    <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">{need.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
              You don't need to choose which need matters most — they all arrive at the same door.
              Give, and we will put your gift exactly where it is needed first.
            </p>
            <Link to="/donate" className="btn-primary mt-7">
              <Heart className="h-5 w-5 fill-current" /> Donate Now
            </Link>
          </Reveal>
        </div>
      </section>

      <DonateBanner
        title="A meal. A book. A bed. A future."
        text="Your donation today — in any amount — directly meets one of these needs."
      />
    </>
  );
}
