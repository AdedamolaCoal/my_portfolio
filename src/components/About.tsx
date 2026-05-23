import { motion, type Variants } from "framer-motion";

const experience = [
  {
    company: "The Oh-Res Ltd",
    role: "Senior Full-Stack Engineer & DevOps",
    period: "Oct 2025 — Mar 2026",
    location: "Canada (Remote)",
    tech: [
      "NestJS",
      "Angular 20",
      "AWS ECS/RDS",
      "RabbitMQ",
      "Docker",
      "LangChain",
      "pgvector",
    ],
  },
  {
    company: "Multilent LTD",
    role: "Senior Frontend Engineer",
    period: "Oct — Nov 2025",
    location: "Remote",
    tech: ["Angular 20", "Standalone Components", "Tailwind CSS", "RxJS"],
  },
  {
    company: "Bastion Health",
    role: "Backend Engineer",
    period: "Jun — Sept 2025",
    location: "Oyo, NG",
    tech: [
      "Node.js",
      "Express.js",
      "PrismaORM",
      "PostgreSQL",
      "Docker",
      "Nginx",
    ],
  },
  {
    company: "Technocrat IT",
    role: "Frontend Engineer",
    period: "Sept 2023 — Sept 2025",
    location: "Birmingham, UK (Remote)",
    tech: ["Angular 14–17", "RxJS", "WebSockets", "Jest", "Jira"],
  },
  {
    company: "Freelance",
    role: "Frontend Engineer (Ionic)",
    period: "May — Aug 2024",
    location: "Remote",
    tech: ["Ionic 8", "OAuth 2.0", "REST APIs"],
  },
  {
    company: "Thrively",
    role: "Ionic Mobile & Web Developer",
    period: "Oct 2023 — Jan 2024",
    location: "Remote",
    tech: ["Ionic 6", "Angular 16", "Vue 3", "Capacitor", "Pinia"],
  },
  {
    company: "ASL E-Admin",
    role: "Frontend Engineer",
    period: "Jul 2022 — Aug 2023",
    location: "Lagos, NG",
    tech: ["Angular 12–15", "Bootstrap", "HTTP Interceptors", "RxJS"],
  },
  {
    company: "Osmium LTD",
    role: "Frontend Engineer",
    period: "Nov 2019 — May 2022",
    location: "Remote",
    tech: ["Angular 10–12", "Angular Material", "WebSockets", "Vue 2"],
  },
];

const certifications = [
  "ALX Full-Stack Software Engineering",
  "Microsoft Azure Fundamentals (AZ-900)",
  "Azure Security, Compliance & Identity (SC-900)",
  "Oracle Cloud Foundations Associate",
  "Kibo School of Technology — Future Proof with Python",
];

const highlights = [
  { label: "Multi-tenant ERP", sub: "8 microservices, AWS ECS" },
  { label: "AI / RAG pipeline", sub: "LangChain, GPT-4o, pgvector" },
  { label: "Healthcare backend", sub: "Node.js, PrismaORM, WebSockets" },
  { label: "Cross-platform mobile", sub: "Ionic + Capacitor, biometrics" },
];

const About = () => {
  const sectionAnim: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const sectionAnimDelayed: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section
      id="about"
      className="about-section"
    >
      <div className="max-w-6xl mx-auto pl-10 sm:pl-16 pr-6 py-24">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-12"
      >
        <span
          className="font-mono text-xs uppercase tracking-[0.25em]"
          style={{ color: "var(--accent)" }}
        >
          01 / About
        </span>
        <span
          className="flex-1 h-px max-w-xs"
          style={{ background: "var(--border-subtle)" }}
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 max-w-5xl">
        {/* ── Left: bio ── */}
        <motion.div variants={sectionAnim} initial="hidden" animate="show">
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Building products
            <br />
            <span style={{ color: "var(--accent)" }}>people rely on</span>
          </h2>

          <div
            className="space-y-4 text-base leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              I'm Damola Akinyomi — a Senior Full-Stack Engineer with 6+ years
              delivering production-grade applications across healthcare,
              fintech, edtech, and enterprise.
            </p>
            <p>
              My core is Angular and TypeScript, backed by deep NestJS and
              Node.js expertise and hands-on AWS and DevOps experience. I've
              shipped everything from 8-microservice ERP platforms to AI-powered
              RAG pipelines and biometric mobile apps.
            </p>
            <p>
              Most recently I led full-stack architecture for a multi-tenant
              enterprise ERP — API Gateway over 8 services, 200+ RBAC
              permissions, an LLM assistant grounded in live company data, and
              AWS infrastructure built from scratch.
            </p>
          </div>

          {/* Highlight grid */}
          <div className="mt-8 grid grid-cols-2 gap-2">
            {highlights.map(({ label, sub }) => (
              <div
                key={label}
                className="px-4 py-3"
                style={{
                  border: "1px solid var(--border-subtle)",
                  background: "var(--bg-raised)",
                }}
              >
                <p
                  className="text-sm font-semibold mb-0.5"
                  style={{ color: "var(--text-primary)" }}
                >
                  {label}
                </p>
                <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
                  {sub}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-10">
            <h3
              className="font-mono text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li
                  key={cert}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span className="mt-1 shrink-0" style={{ color: "var(--accent)" }}>
                    —
                  </span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-5 mt-10">
            {[
              {
                label: "LinkedIn ↗",
                href: "https://www.linkedin.com/in/adedamola-akinyomi",
                external: true,
              },
              {
                label: "GitHub ↗",
                href: "https://github.com/adedamolacoal",
                external: true,
              },
              {
                label: "Email ↗",
                href: "mailto:dammy0075@gmail.com",
                external: false,
              },
            ].map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-sm font-mono pb-0.5 transition-colors duration-200"
                style={{
                  color: "var(--accent)",
                  borderBottom: "1px solid var(--accent-dim)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderBottomColor = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderBottomColor = "var(--accent-dim)")
                }
              >
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* ── Right: timeline ── */}
        <motion.div
          variants={sectionAnimDelayed}
          initial="hidden"
          animate="show"
        >
          <h3
            className="font-mono text-xs uppercase tracking-widest mb-8"
            style={{ color: "#f59e0b" }}
          >
            Experience
          </h3>
          <ol
            className="relative space-y-0"
            style={{ borderLeft: "1px solid var(--border-subtle)" }}
          >
            {experience.map((exp, i) => (
              <motion.li
                key={`${exp.company}-${i}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.45 }}
                className="relative pl-7 pb-7 last:pb-0"
              >
                {/* Timeline dot */}
                <span
                  className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full"
                  style={{ border: "2px solid var(--accent)", background: "var(--bg-base)" }}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-0.5">
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.company}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs mb-0.5" style={{ color: "var(--accent)" }}>
                  {exp.role}
                </p>
                <p
                  className="font-mono text-xs mb-2"
                  style={{ color: "var(--text-muted)" }}
                >
                  {exp.location}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-0.5"
                      style={{
                        color: "var(--text-muted)",
                        border: "1px solid var(--border-subtle)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </div>
    </section>
  );
};

export default About;
