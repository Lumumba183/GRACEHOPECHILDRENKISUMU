import { Link } from "react-router";
import { AlertTriangle, BadgeCheck, BookOpen, Building2, GraduationCap, Heart } from "lucide-react";
import Reveal from "../components/Reveal";
import { PageHero, SectionHead } from "../components/Shared";
import PaymentMethods from "../components/PaymentMethods";
import { IMPACT_LEVELS } from "../data/content";

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="Help a child stay safe, fed, and in school"
        intro="Your donation — no matter the size — directly changes a child's life. 100% of your gift goes toward the direct care of orphaned and vulnerable children in Nyabera Got Village, Kenya."
        image="/images/children-joy-cups.jpg"
      />

      {/* Impact table */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHead
            eyebrow="What your donation does"
            title="Every gift has a name and a face"
            text="There is no 'too small'. Here is what your generosity becomes when it reaches Nyabera Got Village."
          />
          <div className="mx-auto mt-12 max-w-4xl">
            {IMPACT_LEVELS.map((row, i) => (
              <Reveal key={row.amount} delay={i * 70}>
                <div className="group mb-3 flex items-center gap-4 rounded-2xl border border-leaf-900/10 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-sun-400 hover:shadow-soft">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-leaf-100 text-leaf-700 transition-colors group-hover:bg-sun-400 group-hover:text-leaf-950">
                    <Heart className="h-5 w-5 fill-current" />
                  </span>
                  <p className="w-32 shrink-0 font-display text-lg font-semibold text-leaf-900 sm:w-40">{row.amount}</p>
                  <p className="text-[15px] text-ink/70">{row.impact}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Why now */}
          <Reveal className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-3xl border border-sun-400/50 bg-sun-50 p-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sun-500 text-leaf-950">
                  <AlertTriangle className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-leaf-900">Why your help matters now</h3>
                  <p className="mt-2 leading-relaxed text-ink/70">
                    Today, the need is greater than our current space and resources. We receive more
                    children needing rescue than we can comfortably accommodate. Without your support:
                  </p>
                  <ul className="mt-4 space-y-2 text-[15px] text-ink/75">
                    <li className="flex gap-2.5"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sun-500" /> Children may miss school due to unpaid fees</li>
                    <li className="flex gap-2.5"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sun-500" /> Rescued children may go without urgent medical treatment</li>
                    <li className="flex gap-2.5"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sun-500" /> We may be unable to accept more children in need of rescue</li>
                  </ul>
                  <p className="mt-4 font-semibold text-leaf-800">
                    Every day we delay is another day a child spends without safety, food, or education.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Payment methods */}
      <section className="bg-sand/60 py-20 sm:py-24" id="give">
        <div className="container-site">
          <SectionHead
            eyebrow="How to give"
            title="Choose the way that works for you"
            text="M-Pesa, bank transfer, PayPal, Sendwave, Remitly or Wise — every shilling and every dollar brings a child one step closer to their future."
          />
          <div className="mt-12">
            <PaymentMethods />
          </div>
          <Reveal className="mt-10 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-5 py-2.5 text-sm font-semibold text-leaf-800">
              <BadgeCheck className="h-4 w-4" />
              Integrity promise: every donation is used transparently and purposefully.
            </p>
          </Reveal>
        </div>
      </section>

      {/* School fees fund */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="img-frame relative">
                <img src="/images/school-girl.jpg" alt="One of our girls ready for school in her uniform" className="h-[480px] w-full object-cover object-top" loading="lazy" />
                <div className="absolute left-5 top-5 rounded-full bg-sun-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-leaf-950 shadow-lg">
                  School Fees Fund
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="eyebrow">Keep a child in class</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-leaf-900 text-balance sm:text-4xl">
                A child's education cannot wait.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                Education is a child's greatest hope for the future. But right now, some of our
                children are at risk of missing school because of unpaid fees. Children who have
                already overcome abandonment, loss and poverty should not be forced to stay home
                while others go to class.
              </p>
              <p className="mt-4 font-semibold text-leaf-800">Your gift directly pays for:</p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {["School fees", "Learning materials & textbooks", "School uniforms", "All required school costs"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 rounded-xl bg-leaf-50 px-4 py-3 text-sm font-semibold text-leaf-900">
                    <GraduationCap className="h-4 w-4 shrink-0 text-sun-600" /> {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#give" className="btn-primary">
                  <BookOpen className="h-5 w-5" /> Give to School Fees
                </a>
                <Link to="/stories/from-the-streets-to-the-classroom" className="btn-outline-leaf">
                  Read why it matters
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Building fund cross-link */}
      <section className="pb-20 sm:pb-24">
        <div className="container-site">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-leaf-900 p-10 sm:p-14">
              <img src="/images/building-render-2.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" loading="lazy" />
              <div className="relative flex flex-wrap items-center justify-between gap-8">
                <div className="max-w-xl">
                  <p className="eyebrow !text-sun-300">Also open: the Building Fund</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-cream text-balance">
                    $200,000 to house 66 children — every gift currently doubled.
                  </h3>
                  <p className="mt-3 text-cream/75">
                    Our storey building on Plot 361 is rising. Join the campaign and your donation
                    will be matched dollar-for-dollar.
                  </p>
                </div>
                <Link to="/building" className="btn-primary shrink-0">
                  <Building2 className="h-5 w-5" /> Building Campaign
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
