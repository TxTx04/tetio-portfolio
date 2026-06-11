import { caseStudy } from "../data/content";
import Reveal from "./Reveal";
import { Lock } from "./icons";

export default function CaseStudy() {
  const c = caseStudy;
  return (
    <section id="case" className="section case">
      <div className="wrap">
        <Reveal className="case-head">
          <div>
            <div className="tag-lg">{c.tag}</div>
            <h2>{c.name}</h2>
            <div className="sub">{c.subtitle}</div>
          </div>
          <p className="case-context">{c.context}</p>
        </Reveal>

        <Reveal>
          <div className="pipeline">
            {c.pipeline.map((s) => (
              <div className="pstep" key={s.step}>
                <div className="pnum">STEP {s.step}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 18,
            alignItems: "center",
            marginTop: 36,
          }}
        >
          <div
            className="card-foot"
            style={{ border: 0, padding: 0, gap: 7, marginTop: 0 }}
          >
            {c.stack.map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </div>
          <span className="case-note">
            <Lock /> {c.note}
          </span>
        </div>
      </div>
    </section>
  );
}
