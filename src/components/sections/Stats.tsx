import { Fragment } from "react";
import { useT } from "@/i18n";
import CountUp from "@/components/ui/CountUp";

export default function Stats() {
  const { t } = useT();
  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {t.stats.map((s, i) => (
            <Fragment key={i}>
              {i > 0 && <div className="stats-divider" />}
              <div className="stats-item">
                <div className="stats-num">
                  <CountUp end={s.num} suffix={s.suffix} />
                </div>
                <div className="stats-label">{s.label}</div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
