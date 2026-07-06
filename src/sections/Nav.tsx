import { FileText, Github, Linkedin, Menu, MessageCircle, Phone, X, type LucideIcon } from "lucide-react";
import { type CSSProperties, type MouseEvent, useEffect, useState } from "react";
import { profile, type NavAction, type NavLink } from "../lib/content";

const actionIcons: Record<NavAction["kind"], LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  whatsapp: MessageCircle,
  resume: FileText,
  phone: Phone,
};

type NavProps = {
  activeHref: string;
  onNavigate: (href: string) => void;
};

function isAction(link: NavAction | NavLink): link is NavAction {
  return "kind" in link;
}

export function Nav({ activeHref, onNavigate }: NavProps) {
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

  const handleNav = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      onNavigate(href);
    }

    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between px-5 pt-5 text-[#D7E2EA] md:px-10 md:pt-8">
          <a
            aria-current={activeHref === "#top" ? "page" : undefined}
            className="brand-link font-mono text-sm uppercase"
            href="#top"
            onClick={handleNav("#top")}
          >
            {profile.name}
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {profile.nav.links.map((link) => (
              <a
                aria-current={activeHref === link.href ? "page" : undefined}
                className="nav-link font-mono text-sm uppercase text-[#D7E2EA]/75 transition-opacity hover:opacity-70"
                href={link.href}
                key={link.href}
                onClick={handleNav(link.href)}
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
                  className={`nav-action ${action.kind === "phone" ? "nav-action-phone" : ""}`}
                  href={action.href}
                  key={action.kind}
                  rel={action.kind === "phone" ? undefined : "noreferrer"}
                  target={action.kind === "phone" ? undefined : "_blank"}
                  title={action.label}
                >
                  <Icon aria-hidden="true" size={18} />
                  {action.kind === "phone" ? <span className="phone-flag" aria-hidden="true">🇵🇰</span> : null}
                  <span className={action.kind === "phone" ? "phone-label" : "hidden xl:inline"}>{action.label}</span>
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
        <div className="mobile-menu fixed inset-0 z-40 bg-black/95 pt-20 backdrop-blur md:hidden">
          <div className="mobile-menu-inner flex h-[calc(100svh-5rem)] flex-col justify-center gap-7 px-8">
            {[...profile.nav.links, ...profile.nav.actions].map((link, index) => (
              <a
                className="menu-link font-display text-4xl font-black uppercase leading-none text-[#D7E2EA]"
                href={link.href}
                key={link.href}
                onClick={handleNav(link.href)}
                rel={isAction(link) && link.kind !== "phone" ? "noreferrer" : undefined}
                style={{ "--menu-stagger": index } as CSSProperties}
                target={isAction(link) && link.kind !== "phone" ? "_blank" : undefined}
                title={isAction(link) && link.kind === "resume" ? "Open Asim's resume" : link.label}
              >
                {isAction(link) && link.kind === "phone" ? <span className="menu-phone-flag" aria-hidden="true">🇵🇰</span> : null}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
