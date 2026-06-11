"use client";

import { useEffect, useState } from "react";
import { profile } from "../data/content";

export default function Nav() {
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
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#case">Case&nbsp;study</a>
          <a href="#contact">Contact</a>
          <a
            className="nav-cv"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV&nbsp;↗
          </a>
        </nav>
      </div>
    </header>
  );
}
