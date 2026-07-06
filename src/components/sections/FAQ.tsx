import { useState } from "react";
import { useT } from "@/i18n";
import Reveal from "@/components/ui/Reveal";

export default function FAQ() {
  const { t } = useT();
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="section section-light" id="faq">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="eyebrow">{t.faq.eyebrow}</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="h2">{t.faq.title}</h2>
          </Reveal>
        </div>
        <div className="faq-list">
          {t.faq.items.map((it, i) => (
            <Reveal key={i} delay={i * 40}>
              <div
                className={`faq-item ${open === i ? "open" : ""}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="faq-q">
                  <span>{it.q}</span>
                  <span className="ic">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M3 5L7 9L11 5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="faq-a">
                  <p>{it.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
