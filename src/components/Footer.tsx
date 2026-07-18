import { Link } from "react-router";
import { Facebook, Heart, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { SITE } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-leaf-950 text-cream">
      <div className="container-site py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
              A registered children's home in Nyabera Got Village, Kenya — rescuing, sheltering,
              feeding, clothing, healing and educating abandoned, orphaned and vulnerable children.
            </p>
            <p className="mt-4 font-display text-lg italic text-sun-300">
              "We make a life by what we give."
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-sun-400">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                ["/about", "About Us"],
                ["/programs", "Our Programs"],
                ["/building", "Building Campaign"],
                ["/needs", "Urgent Needs"],
                ["/stories", "Stories & News"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-cream/75 transition-colors hover:text-sun-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-sun-400">Give</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/donate" className="text-cream/75 transition-colors hover:text-sun-300">Donate — General Care</Link></li>
              <li><Link to="/donate" className="text-cream/75 transition-colors hover:text-sun-300">School Fees Fund</Link></li>
              <li><Link to="/building" className="text-cream/75 transition-colors hover:text-sun-300">Storey Building Fund</Link></li>
              <li><Link to="/needs" className="text-cream/75 transition-colors hover:text-sun-300">Meet an Urgent Need</Link></li>
            </ul>
            <Link to="/donate" className="btn mt-6 bg-sun-500 px-5 py-2.5 text-sm font-bold text-leaf-950 hover:bg-sun-400">
              <Heart className="h-4 w-4 fill-current" /> Donate Now
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-sun-400">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" />
                <span className="text-cream/75">{SITE.location}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" />
                <a href={`mailto:${SITE.email}`} className="text-cream/75 transition-colors hover:text-sun-300">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Facebook className="mt-0.5 h-4 w-4 shrink-0 text-sun-400" />
                <a href={SITE.facebookUrl} target="_blank" rel="noreferrer" className="text-cream/75 transition-colors hover:text-sun-300">
                  {SITE.facebook}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Every gift matters. Every child matters.</p>
          <p>{SITE.website}</p>
        </div>
      </div>
    </footer>
  );
}
