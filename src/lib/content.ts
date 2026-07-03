import profileRaw from "../../content/profile.md?raw";
import { rawProfile } from "virtual:profile-data";

export type Stat = {
  value: string;
  label: string;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  where: string;
  lines: string[];
  note?: string;
};

export type SystemEntry = {
  title: string;
  desc: string;
  nodes: string[];
};

export type StackEntry = {
  group: string;
  items: string;
};

export type CraftEntry = {
  title: string;
  desc: string;
};

export type Hobby = {
  name: string;
  line: string;
  icon: "Network" | "Mountain" | "Plane" | "ShieldCheck";
};

export type Education = {
  degree: string;
  school: string;
  years: string;
  campusLabel: string;
  campusUrl: string;
  blurb: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavAction = {
  label: string;
  kind: "github" | "linkedin" | "whatsapp" | "resume" | "phone";
  href: string;
};

export type Profile = {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroIntro: string;
  heroKicker: string;
  heroKickerHighlight: string;
  heroSub: string;
  location: string;
  availability: string;
  email: string;
  phone: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  resume: string;
  portrait: string;
  nav: {
    links: NavLink[];
    actions: NavAction[];
  };
  actions: {
    contact: string;
    details: string;
    downloadResume: string;
  };
  sections: {
    about: string;
    skills: string;
    craft: string;
    work: string;
    education: string;
    contact: string;
  };
  marquee: {
    row1: string[];
    row2: string[];
  };
  stats: Stat[];
  experience: ExperienceEntry[];
  systems: SystemEntry[];
  craft: CraftEntry[];
  stack: StackEntry[];
  howIWork: string;
  hobbies: Hobby[];
  education: Education;
  contactHeadline: string;
  contactSub: string;
};

type RawProfile = Omit<Profile, "hobbies" | "nav"> & {
  nav: {
    links: NavLink[];
    actions: Array<Omit<NavAction, "href">>;
  };
  hobbies: Array<Omit<Hobby, "icon">>;
};

const raw = rawProfile as RawProfile;
const sourceIsFrontmatter = profileRaw.startsWith("---");

if (!sourceIsFrontmatter) {
  throw new Error("profile.md must start with frontmatter delimiters");
}

const hobbyIcons = ["Network", "Mountain", "Plane", "ShieldCheck"] satisfies Hobby["icon"][];

const actionHref = (kind: NavAction["kind"]) => {
  switch (kind) {
    case "github":
      return raw.github;
    case "linkedin":
      return raw.linkedin;
    case "whatsapp":
      return `https://wa.me/${raw.whatsapp}`;
    case "resume":
      return raw.resume;
    case "phone":
      return `tel:${raw.phone.replace(/[^\d+]/g, "")}`;
  }
};

export const profile: Profile = {
  ...raw,
  nav: {
    ...raw.nav,
    actions: raw.nav.actions.map((action) => ({
      ...action,
      href: actionHref(action.kind),
    })),
  },
  hobbies: raw.hobbies.map((hobby, index) => ({
    ...hobby,
    icon: hobbyIcons[index] ?? "ShieldCheck",
  })),
};

export const ui = {
  meta: {
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.heroSub,
  },
  contact: {
    buttons: [
      { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}` },
      { label: "LinkedIn", href: profile.linkedin },
      { label: "GitHub", href: profile.github },
      { label: "Resume", href: profile.resume },
    ],
    emailAria: `Email ${profile.name}`,
  },
};
