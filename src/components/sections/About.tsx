import { useT } from "@/i18n";
import Reveal from "@/components/ui/Reveal";
import aboutBg from "@/assets/about-bg.jpg";

export default function About() {
  const { t } = useT();
  return (
    <section className="about-section" id="about">
      <div className="about-bg" style={{ backgroundImage: `url(${aboutBg})` }} />
      <div className="container">
        <div className="about-inner">
          <Reveal>
            <span className="eyebrow on-dark">{t.about.eyebrow}</span>
          </Reveal>
          <Reveal delay={100}>
            <h2>
              {t.about.title1}
              {t.about.title2 && <br />}
              {t.about.title2}
              <span style={{ color: "var(--accent)" }}>{t.about.title3}</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="about-body">
              {[t.about.p1, t.about.p2]
                .flatMap((block) => block.split("\n\n"))
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
