import { EXPERIENCE } from "../constants/experience.constants.js";
import { formatDuration, formatRange } from "../utils/date.js";
import { SectionShell } from "./SectionShell.jsx";
import styles from "./experience.module.css";

export function Experience() {
  return (
    <SectionShell id="experience" title="Experience" kicker="Work">
      <div className={styles.list}>
        {EXPERIENCE.map((job) => (
          <article key={`${job.company}-${job.title}-${job.start}`} className={styles.card}>
            <div className={styles.topRow}>
              <div>
                <div className={styles.titleRow}>
                  <h3 className={styles.role}>{job.title}</h3>
                  <div className={styles.company}>{job.company}</div>
                </div>
                <div className={styles.meta}>
                  {job.location ? <span>{job.location}</span> : null}
                  {job.employmentType ? <span>{job.employmentType}</span> : null}
                  {job.start || job.end ? <span>{formatRange(job.start, job.end)}</span> : null}
                  {job.start ? <span>{formatDuration(job.start, job.end)}</span> : null}
                </div>
              </div>
              {job.tech?.length ? (
                <div className={styles.tech} aria-label="Technologies">
                  {job.tech.slice(0, 6).map((t) => (
                    <span className={styles.tag} key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

            {job.summary ? <p className={styles.summary}>{job.summary}</p> : null}

            {job.bullets?.length ? (
              <ul className={styles.bullets}>
                {job.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

