import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { Heart, Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/building", label: "Building Campaign" },
  { to: "/needs", label: "Urgent Needs" },
  { to: "/stories", label: "Stories" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "bg-cream/95 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container-site">
        <div className="flex h-[76px] items-center justify-between gap-4">
          <Link to="/" aria-label="Grace and Hope Children's Home — home" className="shrink-0">
            <Logo variant={scrolled || open ? "dark" : "light"} />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors ${
                    scrolled
                      ? isActive
                        ? "bg-leaf-700 text-cream"
                        : "text-leaf-900 hover:bg-leaf-100"
                      : isActive
                        ? "bg-cream text-leaf-900"
                        : "text-cream hover:bg-cream/15"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/donate"
              className="btn bg-sun-500 px-5 py-2.5 text-sm font-bold text-leaf-950 shadow-[0_10px_24px_-8px_rgba(242,147,31,0.7)] transition-all hover:-translate-y-0.5 hover:bg-sun-400"
            >
              <Heart className="h-4 w-4 fill-current" />
              Donate Now
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors xl:hidden ${
                scrolled || open ? "bg-leaf-700 text-cream" : "bg-cream/15 text-cream backdrop-blur"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[76px] bottom-0 z-40 bg-cream transition-all duration-300 xl:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="container-site flex flex-col gap-1 overflow-y-auto py-6" aria-label="Mobile">
          {NAV.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={{ transitionDelay: `${i * 30}ms` }}
              className={({ isActive }) =>
                `rounded-2xl px-5 py-4 font-display text-2xl font-semibold transition-all ${
                  isActive ? "bg-leaf-700 text-cream" : "text-leaf-900 hover:bg-leaf-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/donate" className="btn-primary mt-4 w-full text-lg">
            <Heart className="h-5 w-5 fill-current" /> Donate Now
          </Link>
          <p className="mt-6 px-5 text-sm text-ink/60">
            "We make a life by what we give."
          </p>
        </nav>
      </div>
    </header>
  );
}
