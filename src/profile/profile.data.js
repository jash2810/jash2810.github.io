import { ABOUT } from "../constants/about.constants.js";
import { CONTACT } from "../constants/contact.constants.js";
import { EDUCATION } from "../constants/education.constants.js";
import { EXPERIENCE } from "../constants/experience.constants.js";
import { HERO } from "../constants/hero.constants.js";
import { PROJECTS } from "../constants/projects.constants.js";
import { SITE } from "../constants/site.constants.js";
import { SKILLS } from "../constants/skills.constants.js";

export const profile = {
  ...SITE,
  heroBlurb: HERO.blurb,
  highlights: HERO.highlights,
  about: ABOUT,
  experience: EXPERIENCE,
  projects: PROJECTS.map((p) => ({
    name: p.name,
    description: p.bullets?.[0] ?? "",
    bullets: p.bullets?.slice(1) ?? [],
    tech: p.technologies ?? [],
    links: p.links ?? {}
  })),
  skills: {
    primary: [...SKILLS.security, ...SKILLS.programming].slice(0, 10),
    secondary: SKILLS.webDevelopment,
    tools: SKILLS.toolsPlatforms
  },
  education: EDUCATION.map((e) => ({
    school: e.institution,
    program: `${e.degree}${e.field ? ` · ${e.field}` : ""}`,
    location: e.location,
    start: e.start,
    end: e.end,
    notes: [e.grade ? `Grade: ${e.grade}` : null, ...(e.notes ?? [])].filter(Boolean)
  })),
  certifications: [],
  contact: CONTACT
};

