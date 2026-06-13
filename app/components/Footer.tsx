"use client";

import { useI18n } from "../i18n";
import { Github, Linkedin, Mail, Download, ArrowUpRight } from "./icons";

export default function Footer() {
  const { t } = useI18n();
  const { profile, ui } = t;
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="section contact">
      <div className="wrap">
        <div className="contact-kicker">{ui.footer.kicker}</div>
        <h2>
          {ui.footer.headPre}
          <em>{ui.footer.headEm}</em>
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
            <Github /> {ui.footer.github} <ArrowUpRight />
          </a>
          <a
            className="clink"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin /> {ui.footer.linkedin} <ArrowUpRight />
          </a>
          <a className="clink" href={`mailto:${profile.email}`}>
            <Mail /> {ui.footer.email}
          </a>
          <a
            className="clink"
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download /> {ui.footer.downloadCv}
          </a>
        </div>

        <div className="contact-foot">
          <span>
            © {year} Tetio Tsague · {profile.location}
          </span>
          <span>{ui.footer.built}</span>
        </div>
      </div>
    </footer>
  );
}
