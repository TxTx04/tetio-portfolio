import { education } from "../data/content";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="section section--tight">
      <div className="wrap">
        <div className="sec-head">
          <span className="idx">§05</span>
          <h2 className="sec-title">Education</h2>
          <span className="label">Academic path</span>
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
