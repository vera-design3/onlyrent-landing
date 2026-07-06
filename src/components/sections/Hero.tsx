import { useT } from "@/i18n";
import Typewriter from "@/components/ui/Typewriter";
import DownloadButtons from "@/components/ui/DownloadButtons";
import heroMockup from "@/assets/hero-mockup.webp";

export default function Hero() {
  const { t, lang } = useT();
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-left">
          <span className="hero-eyebrow" style={{ animation: "vcr-up 0.6s both" }}>
            <span className="dot" />
            {t.hero.badge}
          </span>
          <h1 className="hero-title-tw" style={{ animation: "vcr-up 0.6s 0.1s both" }}>
            <Typewriter key={lang} prefix={t.hero.prefix} texts={t.hero.typewriter} />
          </h1>
          <p className="hero-sub" style={{ animation: "vcr-up 0.6s 0.22s both", whiteSpace: "pre-line" }}>
            {t.hero.subtitle}
          </p>
          <div className="hero-dl-row" style={{ animation: "vcr-up 0.6s 0.34s both" }}>
            <DownloadButtons />
          </div>
        </div>
        <div className="hero-media" style={{ animation: "vcr-up 0.7s 0.2s both" }}>
          <img src={heroMockup} alt="Only Rent App 畫面" />
        </div>
      </div>
    </section>
  );
}
