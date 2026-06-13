"use client";

import { useI18n } from "../i18n";
import Reveal from "./Reveal";

export default function Education() {
  const { t } = useI18n();
  const { education, ui } = t;

  return (
    <section id="education" className="section section--tight">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">§05</span>
          <h2 className="sec-title">{ui.sections.education.title}</h2>
          <span className="label">{ui.sections.education.label}</span>
        </div>

        {education.map((e, i) => (
          <Reveal key={i} delay={i * 70}>
            <div className="edu">
              <h3>
                {e.degree}, <span className="school">{e.school}</span>
              </h3>
              <div className="meta">
                {e.period}
                <br />
                {e.place}
              </div>
              <p className="note">{e.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
