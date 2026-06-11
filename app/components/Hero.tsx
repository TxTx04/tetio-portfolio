import Image from "next/image";
import { profile } from "../data/content";
import { ArrowDown, Download } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <div className="hero-kicker fu d1">{profile.kicker}</div>

          <h1>
            <span className="ln fu d1">Tetio</span>
            <span className="ln ln-2 fu d2">Tsague</span>
          </h1>

          <p className="hero-headline fu d3">{profile.headline}</p>
          <p className="hero-intro fu d4">{profile.intro}</p>

          <div className="hero-cta fu d5">
            <a className="btn btn-primary" href="#work">
              View work <ArrowDown />
            </a>
            <a
              className="btn btn-ghost"
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV <Download />
            </a>
          </div>

          <div className="hero-meta fu d6">
            <div className="item">
              <span className="k">Status</span>
              <span className="v">
                <span className="status-dot" aria-hidden />
                Available Jul 2026
              </span>
            </div>
            <div className="item">
              <span className="k">Based in</span>
              <span className="v">{profile.location}</span>
            </div>
            <div className="item">
              <span className="k">Core stack</span>
              <span className="v">Java · Python · TypeScript</span>
            </div>
            <div className="item">
              <span className="k">Contact</span>
              <span className="v">{profile.email}</span>
            </div>
          </div>
        </div>

        <div className="hero-vis fu d3">
          <div className="id-card">
            <div className="frame">
              <span className="corner tl" aria-hidden />
              <span className="corner tr" aria-hidden />
              <span className="corner bl" aria-hidden />
              <span className="corner br" aria-hidden />
              <Image
                src="/tetio.jpg"
                alt="Portrait of Tetio Tsague"
                fill
                priority
                sizes="(max-width: 920px) 300px, 420px"
              />
            </div>
            <div className="cap">
              <span>Tetio Tsague</span>
              <span className="accent">REF · SWE-2026</span>
            </div>
            <div className="cap" style={{ marginTop: 6 }}>
              <span>{profile.coordinates}</span>
              <span>BE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
