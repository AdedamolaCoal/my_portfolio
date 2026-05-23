import { motion, type Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDownRight, Github, Linkedin, Mail, Download } from "lucide-react";
import { downloadCV } from "../utils/cvDownload";

const roles = [
  "Senior Full-Stack Engineer",
  "Angular Specialist",
  "DevOps & Cloud Engineer",
  "NestJS / Node.js Engineer",
  "Mobile Developer (Ionic)",
];

const stats = [
  { value: "6+", label: "Years experience" },
  { value: "9", label: "Companies shipped" },
  { value: "5", label: "Certifications" },
  { value: "8", label: "Microservices built" },
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          55,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="hero-section min-h-screen flex items-center relative"
    >
      {/* Subtle left accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-amber-500/20 hidden sm:block" />

      <div className="w-full max-w-6xl mx-auto pl-10 sm:pl-16 pr-6 py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Availability chip */}
          <motion.div variants={item} className="mb-8">
            <span
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] uppercase border px-3 py-1.5 rounded-sm"
              style={{ color: "var(--accent)", borderColor: "var(--accent-dim)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--green)" }}
              />
              Available for new roles
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl sm:text-7xl font-bold leading-[1.05] tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Adedamola
            <br />
            <span style={{ color: "var(--accent)" }}>Akinyomi</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div variants={item} className="flex items-center mb-8 h-10">
            <span
              className="text-xl sm:text-2xl font-mono"
              style={{ color: "var(--text-secondary)" }}
            >
              {displayed}
              <span className="animate-pulse" style={{ color: "var(--accent)" }}>
                |
              </span>
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={item}
            className="text-lg leading-relaxed mb-10 max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Senior Full-Stack Engineer with 6+ years delivering enterprise ERP
            systems, healthcare platforms, fintech dashboards, and
            cross-platform mobile apps. Angular specialist with deep NestJS,
            AWS, and DevOps experience.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 mb-16">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3 text-sm transition-colors duration-200"
              style={{ background: "var(--accent)", color: "var(--text-inverse)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "var(--accent-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "var(--accent)")
              }
            >
              View my work <ArrowDownRight size={16} />
            </a>
            <button
              onClick={downloadCV}
              className="inline-flex items-center gap-2 font-medium px-6 py-3 text-sm border transition-colors duration-200"
              style={{
                borderColor: "var(--border-default)",
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-default)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
            >
              <Download size={16} /> Download CV
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-2 sm:grid-cols-4"
            style={{
              border: "1px solid var(--border-subtle)",
              gap: "1px",
              background: "var(--border-default)",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col gap-1 px-5 py-4"
                style={{ background: "var(--bg-raised)" }}
              >
                <span
                  className="text-3xl font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  {s.value}
                </span>
                <span
                  className="text-xs font-mono uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Socials */}
          <motion.div variants={item} className="flex items-center gap-6 mt-10">
            {[
              {
                icon: Github,
                href: "https://github.com/adedamolacoal",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/adedamola-akinyomi",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:dammy0075@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <Icon size={20} />
              </a>
            ))}
            <span
              className="flex-1 h-px"
              style={{ background: "var(--border-subtle)" }}
            />
            <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              Lagos, Nigeria
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="font-mono text-xs tracking-widest rotate-90 origin-center mb-6">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12"
          style={{ background: "rgba(245,158,11,0.35)" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
