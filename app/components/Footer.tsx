import { profile } from "../data/content";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="section contact">
      <div className="wrap">
        <div className="contact-kicker">§06 — Get in touch</div>
        <h2>
          Let&apos;s build something <em>dependable.</em>
        </h2>

        <a className="contact-mail" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>

        <div className="contact-links">
          <a
            className="clink"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github /> GitHub <ArrowUpRight />
          </a>
          <a
            className="clink"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin /> LinkedIn <ArrowUpRight />
          </a>
          <a className="clink" href={`mailto:${profile.email}`}>
            <Mail /> Email
          </a>
          <a
            className="clink"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download /> Download CV
          </a>
        </div>

        <div className="contact-foot">
          <span>
            © {year} Tetio Tsague · {profile.location}
          </span>
          <span>Designed &amp; built by Tetio Tsague · Next.js</span>
        </div>
      </div>
    </footer>
  );
}
