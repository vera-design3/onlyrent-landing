import { useT } from "@/i18n";
import Reveal from "@/components/ui/Reveal";
import DownloadButtons from "@/components/ui/DownloadButtons";

export default function CTA() {
  const { t } = useT();
  return (
    <section className="cta-section" id="waitlist">
      <div className="container">
        <Reveal>
          <div className="cta-card">
            <div className="cta-inner" style={{ textAlign: "center" }}>
              <h2>{t.cta.title}</h2>
              <p className="cta-note">{t.cta.note}</p>
              <div className="cta-dl-row" style={{ textAlign: "justify" }}>
                <DownloadButtons />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
