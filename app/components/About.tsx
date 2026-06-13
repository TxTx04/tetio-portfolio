"use client";

import { useI18n } from "../i18n";
import Reveal from "./Reveal";

export default function About() {
  const { t } = useI18n();
  const { about, ui } = t;

  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">§01</span>
          <h2 className="sec-title">{ui.sections.about.title}</h2>
          <span className="label">{ui.sections.about.label}</span>
        </div>

        <div className="about-grid">
          <Reveal className="about-copy">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>

          <Reveal className="facts" delay={120}>
            {about.facts.map((f) => (
              <div className="fact" key={f.k}>
                <span className="k">{f.k}</span>
                <span className="v">{f.v}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
