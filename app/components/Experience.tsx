"use client";

import { useI18n } from "../i18n";
import Reveal from "./Reveal";

export default function Experience() {
  const { t } = useI18n();
  const { experiences, ui } = t;

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">§04</span>
          <h2 className="sec-title">{ui.sections.experience.title}</h2>
          <span className="label">{ui.sections.experience.label}</span>
        </div>

        {experiences.map((x, i) => (
          <Reveal key={x.org + i} delay={i * 80}>
            <div className="xp">
              <div className="xp-side">
                <div className="period">{x.period}</div>
                <div className="place">{x.place}</div>
              </div>
              <div className="xp-main">
                <h3>{x.role}</h3>
                <div className="org">
                  {x.org}
                  {x.note && <span className="note"> — {x.note}</span>}
                </div>
                <ul>
                  {x.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="xp-tags">
                  {x.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
