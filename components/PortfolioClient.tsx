"use client";

import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  Code2,
  Copy,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Music2,
  Rocket,
  Send,
  Sparkles,
  Sun,
  Trophy,
  X,
  Youtube,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  achievements,
  education,
  experience,
  hackathons,
  leadership,
  profile,
  projects,
  skills,
  socials,
} from "@/data/portfolio";

const navItems = [
  ["home", "Home"],
  ["about", "About"],
  ["projects", "Work"],
  ["experience", "Experience"],
  ["skills", "Skills"],
  ["achievements", "Wins"],
  ["leadership", "Leadership"],
  ["links", "Links"],
] as const;

const focusWords = ["software", "AI agents", "products", "interfaces", "systems"];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 1, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  const props = { size: 20, strokeWidth: 1.8 };
  switch (icon) {
    case "github":
      return <Github {...props} />;
    case "linkedin":
      return <Linkedin {...props} />;
    case "instagram":
      return <Instagram {...props} />;
    case "youtube":
      return <Youtube {...props} />;
    case "send":
      return <Send {...props} />;
    case "message":
      return <MessageCircle {...props} />;
    case "book":
      return <BookOpen {...props} />;
    case "mail":
      return <Mail {...props} />;
    case "file":
      return <FileText {...props} />;
    case "music":
      return <Music2 {...props} />;
    default:
      return <span className="x-mark">X</span>;
  }
}

function SectionHeading({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy?: string;
}) {
  return (
    <Reveal>
      <div className="section-heading">
        <span className="kicker">{kicker}</span>
        <h2>{title}</h2>
        {copy ? <p>{copy}</p> : null}
      </div>
    </Reveal>
  );
}

export default function PortfolioClient() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 26, mass: 0.25 });

  const sections = useMemo(() => navItems.map(([id]) => id), []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % focusWords.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-24% 0px -58%", threshold: [0.05, 0.25, 0.55] },
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [sections]);

  const copyDiscord = async () => {
    await navigator.clipboard.writeText("@ecstacee_of_mx");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className={`site ${lightMode ? "theme-light" : ""}`}>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grain" aria-hidden="true" />

      <header className="nav-shell">
        <a href="#home" className="brand" aria-label="Ecstacee home">
          <span className="brand-avatar">
            <Image src="/images/avatar.webp" alt="Ecstacee avatar artwork" fill sizes="44px" />
          </span>
          <span>ECSTACEE</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={activeSection === id ? "active" : ""}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={() => setLightMode((value) => !value)}
            aria-label={lightMode ? "Switch to dark theme" : "Switch to light theme"}
          >
            {lightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a className="contact-pill desktop-only" href={`mailto:${profile.email}`}>
            Let&apos;s talk <ArrowUpRight size={16} />
          </a>
          <button
            className="icon-button mobile-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen ? (
        <motion.nav
          className="mobile-nav"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          aria-label="Mobile navigation"
        >
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}<ArrowUpRight size={16} />
            </a>
          ))}
        </motion.nav>
      ) : null}

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-grid container">
            <div className="hero-copy">
              <motion.div
                className="availability"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <span className="pulse-dot" /> Lagos, Nigeria · Building now
              </motion.div>
              <motion.p
                className="hero-kicker"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.23 }}
              >
                Hi, I&apos;m {profile.sobriquet}.
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                I build <span className="gradient-word">useful</span> things with{" "}
                <span className="rotating-word" key={focusWords[wordIndex]}>{focusWords[wordIndex]}</span>.
              </motion.h1>
              <motion.p
                className="hero-tagline"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42 }}
              >
                {profile.tagline}
              </motion.p>
              <motion.div
                className="hero-meta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
              >
                <span>{profile.role}</span>
                <span className="dot-separator" />
                <span><MapPin size={15} /> {profile.location}</span>
              </motion.div>
              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.62 }}
              >
                <a className="button primary" href="#projects">Explore my work <ArrowDown size={17} /></a>
                <a className="button secondary" href="https://github.com/EcstaceeLOR" target="_blank" rel="noreferrer">
                  <Github size={17} /> GitHub
                </a>
              </motion.div>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.28 }}
            >
              <div className="portrait-frame">
                <Image
                  src="/images/hero.webp"
                  alt="Portrait of Abdulmuiz Ademola Abdulkabir"
                  fill
                  priority
                  sizes="(max-width: 800px) 88vw, 42vw"
                />
                <div className="portrait-shine" />
              </div>
              <div className="floating-card card-code"><Code2 size={18} /><span>builder.mode</span><strong>ON</strong></div>
              <div className="floating-card card-product"><Sparkles size={18} /><span>Product first</span></div>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
            </motion.div>
          </div>
          <div className="container hero-bottom-line">
            <span>Scroll to explore</span><ArrowDown size={15} />
          </div>
        </section>

        <section id="about" className="about section-pad section-tint-blue">
          <div className="container">
            <SectionHeading
              kicker="01 · About"
              title="Builder mindset. Human perspective."
              copy="Engineering is the tool. Useful products are the goal."
            />
            <div className="about-grid">
              <Reveal>
                <div className="about-image-stack">
                  <div className="about-photo large-photo">
                    <Image src="/images/about.webp" alt="Abdulmuiz outdoors" fill sizes="(max-width: 800px) 90vw, 38vw" />
                  </div>
                  <div className="about-photo mini-photo">
                    <Image src="/images/working.webp" alt="Working on a laptop" fill sizes="220px" />
                  </div>
                </div>
              </Reveal>
              <div className="about-copy">
                {profile.about.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={index * 0.08}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
                <Reveal delay={0.22}>
                  <div className="about-stats">
                    <div><strong>6</strong><span>Featured builds</span></div>
                    <div><strong>3</strong><span>Recognized wins</span></div>
                    <div><strong>500+</strong><span>Students reached</span></div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects section-pad section-tint-purple">
          <div className="container">
            <SectionHeading
              kicker="02 · Featured work"
              title="Projects built beyond the idea stage."
              copy="A selection of products spanning AI-agent infrastructure, developer tooling, payments, cross-chain access, and consumer experiences."
            />
            <div className="project-grid">
              {projects.map((project, index) => (
                <Reveal key={project.name} delay={(index % 3) * 0.07}>
                  <article className={`project-card accent-${project.accent} ${index === 0 ? "featured-project" : ""}`}>
                    <div className="project-glow" />
                    <div className="project-topline">
                      <span>{project.eyebrow}</span><span>{project.year}</span>
                    </div>
                    <div className="project-monogram">{project.name.slice(0, 2).toUpperCase()}</div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <div className="tag-row">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <div className="project-links">
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noreferrer">Live product <ExternalLink size={15} /></a>
                      ) : null}
                      {project.repo ? (
                        <a href={project.repo} target="_blank" rel="noreferrer">Source <Github size={15} /></a>
                      ) : (
                        <span className="project-note">Case study only</span>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="experience section-pad section-tint-warm">
          <div className="container">
            <SectionHeading
              kicker="03 · Experience"
              title="Learning by shipping. Leading by doing."
              copy="Work experience and environments that shaped how I build, collaborate, and solve problems."
            />
            <div className="experience-layout">
              <div className="timeline">
                {experience.map((item, index) => (
                  <Reveal key={`${item.company}-${item.role}`} delay={index * 0.08}>
                    <article className="timeline-item">
                      <div className="timeline-dot" />
                      <span className="timeline-period">{item.period}</span>
                      <h3>{item.role}</h3>
                      <h4>{item.company}</h4>
                      <p>{item.description}</p>
                    </article>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.12}>
                <div className="experience-collage">
                  <div className="collage-main">
                    <Image src="/images/working.webp" alt="Abdulmuiz working on a laptop at Web3Bridge" fill sizes="(max-width: 800px) 92vw, 40vw" />
                  </div>
                  <div className="collage-small">
                    <Image src="/images/about.webp" alt="Abdulmuiz at Web3Bridge" fill sizes="240px" />
                  </div>
                  <span className="collage-caption">Web3Bridge · 2026</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="skills" className="skills section-pad section-tint-green">
          <div className="container">
            <SectionHeading
              kicker="04 · Skills"
              title="A practical stack for product engineering."
              copy="Organized by how I use the tools—not as a wall of logos."
            />
            <div className="skills-grid">
              {skills.map((group, index) => (
                <Reveal key={group.category} delay={(index % 4) * 0.05}>
                  <div className="skill-card">
                    <span className="skill-index">0{index + 1}</span>
                    <h3>{group.category}</h3>
                    <div className="skill-list">
                      {group.items.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="achievements section-pad section-tint-gold">
          <div className="container">
            <SectionHeading
              kicker="05 · Achievements"
              title="Recognition is nice. Building is better."
              copy="A few moments where the work, teamwork, or leadership stood out."
            />
            <div className="achievement-grid">
              {achievements.map((item, index) => (
                <Reveal key={`${item.event}-${item.project}`} delay={index * 0.08}>
                  <article className="achievement-card">
                    <div className="achievement-icon"><Trophy size={22} /></div>
                    <span className="achievement-date">{item.date}</span>
                    <h3>{item.title}</h3>
                    <h4>{item.event}</h4>
                    <strong>{item.project}</strong>
                    <p>{item.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="hackathon-block">
              <Reveal>
                <div className="subsection-title">
                  <Rocket size={22} />
                  <div><span>Hackathon builds</span><h3>Built under pressure. Designed to last longer.</h3></div>
                </div>
              </Reveal>
              <div className="hackathon-list">
                {hackathons.map((item, index) => (
                  <Reveal key={`${item.project}-${item.event}`} delay={(index % 3) * 0.04}>
                    <div className="hackathon-row">
                      <span className="hackathon-number">0{index + 1}</span>
                      <strong>{item.project}</strong>
                      <span>{item.event}</span>
                      <span>{item.track}</span>
                      <span>{item.year}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="leadership" className="leadership section-pad section-tint-red">
          <div className="container">
            <SectionHeading
              kicker="06 · Leadership & Education"
              title="Technology is also about people."
              copy="Community, communication, organization, and the discipline to move a team from intention to execution."
            />
            <div className="leadership-layout">
              <div className="leadership-list">
                {leadership.map((item, index) => (
                  <Reveal key={`${item.role}-${item.org}`} delay={index * 0.07}>
                    <article className="leadership-item">
                      <span>{item.period}</span>
                      <div>
                        <h3>{item.role}</h3>
                        <h4>{item.org}</h4>
                        <p>{item.detail}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
              <div className="leadership-side">
                <Reveal>
                  <div className="speaking-photo">
                    <Image src="/images/speaking.webp" alt="Abdulmuiz speaking at a student event" fill sizes="(max-width: 800px) 92vw, 35vw" />
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <div className="education-card">
                    <GraduationCap size={26} />
                    <span>{education.period}</span>
                    <h3>{education.degree}</h3>
                    <h4>{education.school}</h4>
                    <p>{education.status}</p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="moments section-pad section-tint-blue" aria-label="Community moments">
          <div className="container">
            <SectionHeading kicker="07 · In the room" title="Code, community, conversations." />
            <div className="moments-grid">
              <Reveal><div className="moment moment-a"><Image src="/images/speaking.webp" alt="Abdulmuiz at a student event" fill sizes="(max-width: 700px) 90vw, 32vw" /></div></Reveal>
              <Reveal delay={0.08}><div className="moment moment-b"><Image src="/images/working.webp" alt="Abdulmuiz coding" fill sizes="(max-width: 700px) 90vw, 32vw" /></div></Reveal>
              <Reveal delay={0.14}><div className="moment moment-c"><Image src="/images/about.webp" alt="Abdulmuiz outdoors" fill sizes="(max-width: 700px) 90vw, 32vw" /></div></Reveal>
            </div>
          </div>
        </section>

        <section id="links" className="links section-pad section-tint-purple">
          <div className="container">
            <SectionHeading
              kicker="08 · Link hub"
              title="Find me around the internet."
              copy="One place for code, writing, social profiles, and my résumé."
            />
            <div className="link-hub-shell">
              <Reveal>
                <div className="link-profile">
                  <div className="link-avatar">
                    <Image src="/images/avatar.webp" alt="Ecstacee avatar" fill sizes="110px" />
                  </div>
                  <span>@Ecstacee</span>
                  <h3>{profile.name}</h3>
                  <p>{profile.role}</p>
                </div>
              </Reveal>
              <div className="social-grid">
                {socials.map((social, index) => {
                  const isDiscord = social.label === "Discord";
                  const content = (
                    <>
                      <span className="social-icon"><SocialIcon icon={social.icon} /></span>
                      <span className="social-copy"><strong>{social.label}</strong><small>{social.handle}</small></span>
                      {isDiscord ? (copied ? <Check size={17} /> : <Copy size={17} />) : <ArrowUpRight size={17} />}
                    </>
                  );

                  return (
                    <Reveal key={social.label} delay={(index % 4) * 0.035}>
                      {isDiscord ? (
                        <button className="social-card" onClick={copyDiscord}>{content}</button>
                      ) : (
                        <a className="social-card" href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{content}</a>
                      )}
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="contact section-pad">
          <div className="container contact-inner">
            <Reveal>
              <span className="kicker">09 · Contact</span>
              <h2>Have an idea worth building?</h2>
              <p>I&apos;m interested in ambitious software, product engineering, AI-agent systems, and teams solving real problems.</p>
              <div className="contact-actions">
                <a className="button primary" href={`mailto:${profile.email}`}><Mail size={18} /> Start a conversation</a>
                <a className="button secondary" href="https://drive.google.com/drive/folders/15t37yIj0kk313PTxtiR2GnG4tjV1sGKo" target="_blank" rel="noreferrer"><FileText size={18} /> View résumé</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div>
            <strong>ECSTACEE</strong>
            <span>Software Engineer · Fluid Developer</span>
          </div>
          <p>Built with intention. Updated as the work evolves.</p>
          <a href="#home">Back to top <ArrowUpRight size={15} /></a>
        </div>
      </footer>
    </div>
  );
}
