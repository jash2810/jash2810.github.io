import { CREDENTIALS } from "../constants/credentials.constants.js";
import { formatDateLabel } from "../utils/date.js";
import { SectionShell } from "./SectionShell.jsx";
import styles from "./credentials.module.css";

function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      {children}
    </div>
  );
}

export function Credentials() {
  const { certifications, honorsAwards, languages } = CREDENTIALS;
  return (
    <SectionShell id="credentials" title="Credentials" kicker="Proof points">
      <div className={styles.grid}>
        <Card title="Certifications">
          {certifications?.length ? (
            <ul className={styles.list}>
              {certifications.map((c) => (
                <li key={`${c.name}-${c.credentialId ?? ""}`} className={styles.item}>
                  <div className={styles.itemTop}>
                    <div className={styles.itemName}>{c.name}</div>
                    {c.issueDate ? <div className={styles.itemMeta}>{formatDateLabel(c.issueDate)}</div> : null}
                  </div>
                  <div className={styles.itemSub}>
                    {c.issuer ? <span>{c.issuer}</span> : null}
                    {c.credentialId ? <span className={styles.sep}>·</span> : null}
                    {c.credentialId ? <span>Credential: {c.credentialId}</span> : null}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.empty}>Add certifications in `src/constants/credentials.constants.js`.</div>
          )}
        </Card>

        <Card title="Honors & Awards">
          {honorsAwards?.length ? (
            <ul className={styles.list}>
              {honorsAwards.map((a) => (
                <li key={`${a.title}-${a.date ?? ""}`} className={styles.item}>
                  <div className={styles.itemTop}>
                    <div className={styles.itemName}>{a.title}</div>
                    {a.date ? <div className={styles.itemMeta}>{formatDateLabel(a.date)}</div> : null}
                  </div>
                  <div className={styles.itemSub}>{a.issuer}</div>
                  {a.description ? <div className={styles.itemDesc}>{a.description}</div> : null}
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.empty}>Add awards in `src/constants/credentials.constants.js`.</div>
          )}
        </Card>

        <Card title="Languages">
          {languages?.length ? (
            <div className={styles.tags}>
              {languages.map((l) => (
                <span key={l} className={styles.tag}>
                  {l}
                </span>
              ))}
            </div>
          ) : (
            <div className={styles.empty}>Add languages in `src/constants/credentials.constants.js`.</div>
          )}
        </Card>
      </div>
    </SectionShell>
  );
}

