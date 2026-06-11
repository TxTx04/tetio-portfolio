import { experiences } from "../data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">§04</span>
          <h2 className="sec-title">Experience</h2>
          <span className="label">On the job</span>
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
                  {x.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
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
