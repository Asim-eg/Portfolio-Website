import { FileText, Github, Linkedin, Menu, MessageCircle, Phone, X, type LucideIcon } from "lucide-react";
import { type CSSProperties, useEffect, useState } from "react";
import { profile, type NavAction } from "../lib/content";

const actionIcons: Record<NavAction["kind"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
  resume: FileText,
  phone: Phone,
};

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-5 pt-5 text-[#D7E2EA] md:px-10 md:pt-8">
          <a className="font-mono text-sm uppercase tracking-[0.22em] transition-opacity hover:opacity-70" href="#top">
            {profile.name}
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {profile.nav.links.map((link) => (
              <a
                className="font-mono text-sm uppercase tracking-wider text-[#D7E2EA]/75 transition-opacity hover:opacity-70"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {profile.nav.actions.map((action) => {
              const Icon = actionIcons[action.kind];

              return (
                <a
                  aria-label={action.label}
                  className="nav-action"
                  href={action.href}
                  key={action.kind}
                  rel={action.kind === "resume" || action.kind === "phone" ? undefined : "noreferrer"}
                  target={action.kind === "resume" || action.kind === "phone" ? undefined : "_blank"}
                  title={action.label}
                >
                  <Icon aria-hidden="true" size={18} />
                  <span className="hidden xl:inline">{action.label}</span>
                </a>
              );
            })}
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D7E2EA]/35 bg-[#0C0C0C]/50 text-[#D7E2EA] backdrop-blur md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </nav>
      </header>

      {menuOpen ? (
        <div className="fixed inset-0 z-40 bg-black/95 pt-20 backdrop-blur md:hidden">
          <div className="flex h-[calc(100svh-5rem)] flex-col justify-center gap-7 px-8">
            {[...profile.nav.links, ...profile.nav.actions].map((link, index) => (
              <a
                className="menu-link font-display text-4xl font-black uppercase leading-none text-[#D7E2EA]"
                href={link.href}
                key={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ "--menu-stagger": index } as CSSProperties}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
