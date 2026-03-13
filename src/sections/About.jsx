import { SectionShell } from "./SectionShell.jsx";
import { ABOUT } from "../constants/about.constants.js";
import styles from "./about.module.css";

export function About() {
  return (
    <SectionShell id="about" title="About" kicker="Summary">
      <div className={styles.card}>
        {ABOUT.map((p, idx) => (
          <p key={idx} className={styles.p}>
            {p}
          </p>
        ))}
      </div>
    </SectionShell>
  );
}
