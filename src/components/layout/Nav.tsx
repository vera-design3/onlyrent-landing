import { useEffect, useState } from "react";
import { useT } from "@/i18n";
import logo from "@/assets/logo.png";

export default function Nav() {
  const { t } = useT();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 固定白底 header（不隨捲動在白／黑之間切換）
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""} nav-light`} aria-label="主要導覽">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">
          <img src={logo} alt="Only Rent" className="logo-mark" />
          <span>Only Rent</span>
        </a>
        <div className="nav-pill">
          <a href="#skills">{t.nav.skills}</a>
          <a href="#features">{t.nav.app}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#faq">{t.nav.faq}</a>
        </div>
        <a href="#waitlist" className="nav-cta">
          {t.nav.download}
        </a>
      </div>
    </nav>
  );
}
