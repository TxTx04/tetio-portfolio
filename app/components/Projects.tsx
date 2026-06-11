import { projects, type Project } from "../data/content";
import Reveal from "./Reveal";
import { Lock } from "./icons";

function Card({ p, wide = false }: { p: Project; wide?: boolean }) {
  const meta = [p.kind, p.role, p.year].filter(Boolean).join(" · ");
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
            <Lock /> Private · on request
          </span>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const flagship = projects.find((p) => p.id === "radixa") ?? projects[0];
  const rest = projects.filter((p) => p.id !== flagship.id);

  return (
    <section id="work" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">§03</span>
          <h2 className="sec-title">Selected work</h2>
          <span className="label">{projects.length} projects</span>
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
