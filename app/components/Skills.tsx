"use client";

import { useI18n } from "../i18n";
import Reveal from "./Reveal";

export default function Skills() {
  const { t } = useI18n();
  const { skills, ui } = t;

  return (
    <section id="skills" className="section section--tight">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">§02</span>
          <h2 className="sec-title">{ui.sections.skills.title}</h2>
          <span className="label">{ui.sections.skills.label}</span>
        </div>

        <div>
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 60}>
              <div className="skill-row">
                <div className="grp">{group.label}</div>
                <div className="chips">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
