import { useState } from "react";
import { useT } from "@/i18n";
import Reveal from "@/components/ui/Reveal";
import f1 from "@/assets/app/feature-1.webp";
import f2 from "@/assets/app/feature-2.webp";
import f3 from "@/assets/app/feature-3.webp";
import f4 from "@/assets/app/feature-4.webp";
import f5 from "@/assets/app/feature-5.webp";
import f6 from "@/assets/app/feature-6.webp";
import f7 from "@/assets/app/feature-7.webp";
import f8 from "@/assets/app/feature-8.webp";
import f9 from "@/assets/app/feature-9.webp";

const featureImages = [f1, f2, f3, f4, f5, f6, f7, f8, f9];

export default function AppFeatures() {
  const { t } = useT();
  const [active, setActive] = useState(0);
  const heading = (
    <>
      <Reveal>
        <span className="eyebrow">{t.features.eyebrow}</span>
      </Reveal>
      <Reveal delay={100}>
        <h2 className="h2" style={{ margin: "0px 0px 20px" }}>
          {t.features.title1}
          <br />
          {t.features.title2}
        </h2>
      </Reveal>
    </>
  );
  return (
    <section className="section app-features" id="features">
      <div className="container">
        {/* 桌機：左手機 ｜ 右（標題＋可點清單） */}
        <div className="appfeat-2col">
          <div className="appfeat-phone">
            <img key={active} src={featureImages[active]} alt={t.features.items[active].title} />
          </div>
          <div className="appfeat-panel">
            <div className="appfeat-head">{heading}</div>
            <div className="appfeat-list">
              {t.features.items.map((f, i) => (
                <button
                  type="button"
                  key={i}
                  className={`feat-item ${active === i ? "active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                >
                  <span className="feat-dot" />
                  <span className="feat-text">
                    <span className="feat-title">{f.title}</span>
                    <span className="feat-sub">{f.sub}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 手機：置中標題 ＋ 橫向滾動截圖 */}
        <div className="appfeat-mobile">
          <div className="section-head">{heading}</div>
          <div className="appfeat-scroll">
            {t.features.items.map((f, i) => (
              <div className="appfeat-card" key={i}>
                <img className="appfeat-img" src={featureImages[i]} alt={f.title} loading="lazy" />
                <div className="appfeat-meta">
                  <div className="appfeat-title">{f.title}</div>
                  <div className="appfeat-sub">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
