import { useState } from "react";
import { useT } from "@/i18n";
import LegalModal, { type LegalKind } from "./LegalModal";
import logo from "@/assets/logo.png";

export default function Footer() {
  const { t, lang } = useT();
  const [modal, setModal] = useState<LegalKind>(null);

  return (
    <>
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo">
                <img src={logo} alt="Only Rent" className="logo-mark" />
                <span>Only Rent</span>
              </div>
              <p style={{ whiteSpace: "pre-line" }}>{t.footer.brand}</p>
              <div className="footer-contact">
                <h4>{t.footer.contact}</h4>
                <a href="https://line.me/R/ti/p/@701jocrx" target="_blank" rel="noopener noreferrer">
                  {t.footer.line}
                </a>
                <a href="mailto:support@onlyrent.tw">support@onlyrent.tw</a>
              </div>
            </div>
            <div className="footer-col">
              <h4>{t.footer.tw}</h4>
              <p className="meta" style={{ whiteSpace: "pre-line" }}>{t.footer.twBody}</p>
            </div>
            <div className="footer-col">
              <h4>{t.footer.sg}</h4>
              <p className="meta" style={{ whiteSpace: "pre-line" }}>{t.footer.sgBody}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t.footer.copyright}</span>
            <div className="links">
              <a href="#" onClick={(e) => { e.preventDefault(); setModal("terms"); }}>
                {t.footer.terms}
              </a>
              <a href="#" onClick={(e) => { e.preventDefault(); setModal("privacy"); }}>
                {t.footer.privacy}
              </a>
              <a
                href={import.meta.env.VITE_ZH_URL}
                className={lang === "zh" ? "lang-active" : ""}
              >
                中文
              </a>
              <a
                href={import.meta.env.VITE_EN_URL}
                className={lang === "en" ? "lang-active" : ""}
              >
                EN
              </a>
            </div>
          </div>
        </div>
      </footer>
      <LegalModal kind={modal} onClose={() => setModal(null)} />
    </>
  );
}
