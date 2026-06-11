import { about } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">§01</span>
          <h2 className="sec-title">Profile</h2>
          <span className="label">Who I am</span>
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
