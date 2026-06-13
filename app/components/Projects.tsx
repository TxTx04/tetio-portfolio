"use client";

import { useI18n } from "../i18n";
import { type Project } from "../data/content";
import Reveal from "./Reveal";
import { Lock } from "./icons";

function Card({ p, wide = false }: { p: Project; wide?: boolean }) {
  const { t } = useI18n();
  const meta = [t.ui.work.kind[p.kind], p.role, p.year]
    .filter(Boolean)
    .join(" · ");
  return (
    <article className={`card ${wide ? "span2" : ""}`}>
      <div className="card-top">
        <span className="card-focus">{p.focus}</span>
        <span className="card-meta">{meta}</span>
      </div>
      <h3>{p.name}</h3>
      <p className="blurb">{p.blurb}</p>
      <ul>
        {p.details.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
      <div className="card-foot">
        {p.stack.map((s) => (
          <span className="tag" key={s}>
            {s}
          </span>
        ))}
        {p.privateRepo && (
          <span className="lock">
            <Lock /> {t.ui.work.privateBadge}
          </span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useI18n();
  const { projects, ui } = t;
  const flagship = projects.find((p) => p.id === "radixa") ?? projects[0];
  const rest = projects.filter((p) => p.id !== flagship.id);

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">§03</span>
          <h2 className="sec-title">{ui.sections.work.title}</h2>
          <span className="label">
            {projects.length} {ui.work.countWord}
          </span>
        </div>

        <Reveal>
          <Card p={flagship} wide />
        </Reveal>

        <div className="proj-grid" style={{ marginTop: 22 }}>
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 90}>
              <Card p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
