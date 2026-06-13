"use client";

import { useEffect, useState } from "react";
import { useI18n } from "../i18n";

export default function Nav() {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand" aria-label="Back to top">
          <span className="dot" aria-hidden />
          TETIO&nbsp;TSAGUE
        </a>
        <nav className="nav-links">
          <a href="#about">{t.ui.nav.about}</a>
          <a href="#work">{t.ui.nav.work}</a>
          <a href="#case">{t.ui.nav.caseStudy}</a>
          <a href="#contact">{t.ui.nav.contact}</a>
          <a
            className="nav-cv"
            href={t.profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.ui.nav.cv}
          </a>
          <button
            type="button"
            className="lang-toggle"
            onClick={toggle}
            aria-label={t.ui.lang.switchAria}
          >
            <span className={lang === "en" ? "on" : ""}>{t.ui.lang.en}</span>
            <span className={lang === "fr" ? "on" : ""}>{t.ui.lang.fr}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
