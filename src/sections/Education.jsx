import { EDUCATION } from "../constants/education.constants.js";
import { formatDuration, formatRange } from "../utils/date.js";
import { SectionShell } from "./SectionShell.jsx";
import styles from "./education.module.css";

export function Education() {
  return (
    <SectionShell id="education" title="Education" kicker="Background">
      <div className={styles.list}>
        {EDUCATION.map((e) => (
          <article key={`${e.institution}-${e.degree}-${e.start}`} className={styles.card}>
            <div className={styles.top}>
              <div>
                <h3 className={styles.program}>
                  {e.degree}
                  {e.field ? <span className={styles.field}> · {e.field}</span> : null}
                </h3>
                <div className={styles.school}>{e.institution}</div>
              </div>
              <div className={styles.meta}>
                {e.location ? <span>{e.location}</span> : null}
                {e.start || e.end ? <span>{formatRange(e.start, e.end)}</span> : null}
                {e.start ? <span>{formatDuration(e.start, e.end)}</span> : null}
              </div>
            </div>

            {e.grade ? <div className={styles.grade}>Grade: {e.grade}</div> : null}

            {e.notes?.length ? (
              <ul className={styles.notes}>
                {e.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

