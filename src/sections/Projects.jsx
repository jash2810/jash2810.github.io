import { SectionShell } from "./SectionShell.jsx";
import { PROJECTS } from "../constants/projects.constants.js";
import { formatDuration, formatRange } from "../utils/date.js";
import styles from "./projects.module.css";

function ProjectLink({ href, label }) {
  if (!href) return null;
  return (
    <a className={styles.link} href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
}

export function Projects() {
  return (
    <SectionShell id="projects" title="Projects" kicker="Selected work">
      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <article key={p.name} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.titleBlock}>
                <h3 className={styles.name}>{p.name}</h3>
                {p.start || p.end ? (
                  <div className={styles.meta}>
                    {formatRange(p.start, p.end)}
                    {p.start ? <span className={styles.sep}>·</span> : null}
                    {p.start ? formatDuration(p.start, p.end) : null}
                  </div>
                ) : null}
              </div>
              <div className={styles.links}>
                <ProjectLink href={p.links?.live} label="Live" />
                <ProjectLink href={p.links?.repo} label="Code" />
              </div>
            </div>
            {p.bullets?.length ? (
              <ul className={styles.bullets}>
                {p.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            ) : null}
            {p.technologies?.length ? (
              <div className={styles.tech} aria-label="Tech used">
                {p.technologies.slice(0, 10).map((t) => (
                  <span className={styles.tag} key={t}>
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
