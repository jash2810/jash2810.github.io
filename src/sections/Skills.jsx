import { SectionShell } from "./SectionShell.jsx";
import { SKILLS } from "../constants/skills.constants.js";
import styles from "./skills.module.css";

function SkillGroup({ title, items }) {
  if (!items?.length) return null;
  return (
    <div className={styles.group}>
      <div className={styles.groupTitle}>{title}</div>
      <div className={styles.tags}>
        {items.map((s) => (
          <span key={s} className={styles.tag}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <SectionShell id="skills" title="Skills" kicker="Toolkit">
      <div className={styles.card}>
        <SkillGroup title="Security" items={SKILLS.security} />
        <SkillGroup title="Programming" items={SKILLS.programming} />
        <SkillGroup title="Web Development" items={SKILLS.webDevelopment} />
        <SkillGroup title="Tools & Platforms" items={SKILLS.toolsPlatforms} />
        <SkillGroup title="Soft Skills" items={SKILLS.softSkills} />
      </div>
    </SectionShell>
  );
}
