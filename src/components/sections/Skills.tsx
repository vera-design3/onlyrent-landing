import { useT } from "@/i18n";
import Reveal from "@/components/ui/Reveal";

export default function Skills() {
  const { t } = useT();
  const renderRow = (arr: string[], accent = false) => (
    <>
      {[...arr, ...arr].map((s, i) => (
        <span key={i} className={`skill-tag ${accent && i % 4 === 0 ? "accent" : ""}`}>
          <span className="hash">#</span>
          {s}
        </span>
      ))}
    </>
  );
  return (
    <section className="section section-light skills-section" id="skills">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.skills.eyebrow}</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="h2" style={{ margin: "0px 0px 20px" }}>
              {t.skills.title1}
              <br />
              {t.skills.title2}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="body lg muted" style={{ marginTop: 20 }}>
              {t.skills.lead}
            </p>
          </Reveal>
        </div>
      </div>
      <div className="skills-rows">
        <div className="skills-row-wrap">
          <div className="skills-row">{renderRow(t.skills.rowA, true)}</div>
        </div>
        <div className="skills-row-wrap">
          <div className="skills-row reverse">{renderRow(t.skills.rowB, false)}</div>
        </div>
      </div>
      <p style={{ textAlign: "center", marginTop: 40, fontSize: 13, color: "var(--muted-2)" }}>
        {t.skills.footnote}
      </p>
    </section>
  );
}
