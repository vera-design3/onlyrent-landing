import { useEffect } from "react";
import { useT } from "@/i18n";
import { LEGAL } from "@/data/legal";

export type LegalKind = "terms" | "privacy" | null;

interface LegalModalProps {
  kind: LegalKind;
  onClose: () => void;
}

export default function LegalModal({ kind, onClose }: LegalModalProps) {
  const { lang } = useT();

  useEffect(() => {
    if (!kind) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [kind, onClose]);

  if (!kind) return null;
  const doc = LEGAL[lang][kind];

  return (
    <div className="legal-modal" onClick={onClose}>
      <div className="legal-sheet" onClick={(e) => e.stopPropagation()}>
        <button className="legal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="legal-body">
          <h2 className="legal-title">{doc.title}</h2>
          <p className="legal-effective">{doc.effective}</p>
          {doc.sections.map((s, i) => (
            <section key={i} className="legal-section">
              <h3>{s.h}</h3>
              <p style={{ whiteSpace: "pre-line" }}>{s.body}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
