import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  type: string;
  year: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  images: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Enterprise ERP System",
    description:
      "Led full-stack architecture of a multi-tenant, production ERP serving thousands of daily users. 8 NestJS microservices behind an API Gateway, Angular 20 frontend with Signals-based state, 200+ RBAC permissions, RabbitMQ event-driven messaging, AWS ECS/RDS infrastructure, CI/CD via GitHub Actions, and an AI assistant powered by LangChain + GPT-4o + pgvector.",
    type: "Enterprise",
    year: "2026",
    technologies: [
      "NestJS",
      "Angular 20",
      "AWS ECS/RDS",
      "RabbitMQ",
      "Docker",
      "LangChain",
      "pgvector",
      "TypeScript",
    ],
    image: "/assets/projects/erp/erp-1.png",
    github: "https://github.com/adedamolacoal",
    live: "https://asl-test.vercel.app",
    images: [
      "/assets/projects/erp/erp-1.png",
      "/assets/projects/erp/erp-2.png",
    ],
    featured: true,
  },
  {
    title: "Online Examination Platform",
    description:
      "Angular 20 exam platform with standalone components and tree-shakeable modular architecture. Includes a full question bank manager with bulk import, an exam interface with real-time timer, auto-save, and answer submission, and route guards for exam access control.",
    type: "EdTech",
    year: "2025",
    technologies: [
      "Angular 20",
      "Tailwind CSS",
      "RxJS",
      "Reactive Forms",
      "Vue Router",
    ],
    image: "/assets/projects/exam/exam-1.png",
    github: "https://github.com/adedamolacoal",
    live: "#",
    images: ["/assets/projects/exam/exam-1.png"],
    featured: true,
  },
  {
    title: "Healthcare Emergency Backend",
    description:
      "Node.js / Express backend for an emergency healthcare platform. RESTful APIs for appointments, patients, treatments, and prescriptions. Integrated Brevo and Termii for real-time email/SMS, WebSockets for live doctor–patient comms, PrismaORM with PostgreSQL, containerised with Docker, reverse-proxied through Nginx.",
    type: "Healthcare",
    year: "2025",
    technologies: [
      "Node.js",
      "Express.js",
      "PrismaORM",
      "PostgreSQL",
      "WebSockets",
      "Docker",
      "Nginx",
    ],
    image: "/assets/projects/health/health-1.png",
    github: "https://github.com/adedamolacoal",
    live: "#",
    images: ["/assets/projects/health/health-1.png"],
  },
  {
    title: "Learning Management System",
    description:
      "Full-stack role-based LMS with multiple learner tiers, Stripe payment processing, real-time progress tracking, and a comprehensive admin dashboard. Angular frontend with Node.js/Express backend and MongoDB.",
    type: "EdTech",
    year: "2024",
    technologies: [
      "Angular",
      "Node.js",
      "MongoDB",
      "Stripe",
      "RxJS",
      "Bootstrap",
    ],
    image: "/assets/projects/prepstation/lms-1.png",
    github: "https://github.com/adedamolacoal",
    live: "https://prepstation-fe.vercel.app/",
    images: [
      "/assets/projects/prepstation/lms-1.png",
      "/assets/projects/prepstation/lms-2.png",
    ],
    featured: true,
  },
  {
    title: "Fintech Mobile & Web App",
    description:
      "Hybrid fintech app built with Ionic 6 and Angular 16. Financial dashboard with real-time balance and analytics, money-saving and beneficiary management, biometric login (fingerprint/Face ID) via Capacitor, push notifications, secure data storage, and full responsive web + mobile support.",
    type: "Fintech",
    year: "2024",
    technologies: [
      "Ionic 6",
      "Angular 16",
      "Capacitor",
      "Vue 3",
      "Pinia",
      "JWT",
    ],
    image: "/assets/projects/thrively/th-1.png",
    github: "https://github.com/adedamolacoal",
    live: "#",
    images: ["/assets/projects/thrively/th-1.png"],
  },
  {
    title: "Movies Trend",
    description:
      "Vanilla JS movie discovery app consuming the TMDB API. Clean DOM architecture, async data fetching, and responsive CSS — no framework overhead.",
    type: "Frontend",
    year: "2022",
    technologies: ["JavaScript", "HTML", "CSS3", "TMDB API"],
    image: "/assets/projects/mt/mt-1.png",
    github: "https://github.com/adedamolacoal/movies-trend",
    live: "https://movies-trend.vercel.app/",
    images: ["/assets/projects/mt/mt-1.png", "/assets/projects/mt/mt-2.png"],
  },
];

const filters = [
  "All",
  "Enterprise",
  "EdTech",
  "Healthcare",
  "Fintech",
  "Frontend",
];

const typeColors: Record<string, { text: string; border: string }> = {
  Enterprise: { text: "#a78bfa", border: "rgba(167,139,250,0.3)" },
  EdTech: { text: "#60a5fa", border: "rgba(96,165,250,0.3)" },
  Healthcare: { text: "#34d399", border: "rgba(52,211,153,0.3)" },
  Fintech: { text: "#f59e0b", border: "rgba(245,158,11,0.3)" },
  Frontend: { text: "#fb923c", border: "rgba(251,146,60,0.3)" },
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.type === filter);

  return (
    <section
      id="projects"
      className="projects-section"
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
          03 / Projects
        </span>
        <span
          className="flex-1 h-px max-w-xs"
          style={{ background: "var(--border-subtle)" }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header + controls */}
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-3 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Selected work
            </h2>
            <p className="max-w-md" style={{ color: "var(--text-secondary)" }}>
              Enterprise, healthcare, fintech, edtech — shipped end-to-end.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Filters */}
            <div className="flex gap-1 flex-wrap">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="font-mono text-xs px-3 py-1.5 uppercase tracking-widest transition-colors duration-200"
                  style={
                    filter === f
                      ? { background: "var(--accent)", color: "var(--text-inverse)" }
                      : {
                          color: "var(--text-muted)",
                          border: "1px solid var(--border-subtle)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (filter !== f) {
                      e.currentTarget.style.color = "var(--text-primary)";
                      e.currentTarget.style.borderColor = "var(--border-default)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (filter !== f) {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.borderColor = "var(--border-subtle)";
                    }
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* View toggle */}
            <div
              className="flex"
              style={{ border: "1px solid var(--border-subtle)" }}
            >
              {(["grid", "list"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className="px-3 py-1.5 font-mono text-xs capitalize transition-colors"
                  style={
                    view === v
                      ? {
                          background: "var(--bg-raised)",
                          color: "var(--text-primary)",
                        }
                      : { color: "var(--text-muted)" }
                  }
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Views */}
        <AnimatePresence mode="wait">
          {view === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3"
              style={{
                border: "1px solid var(--border-subtle)",
                gap: "1px",
                background: "var(--border-subtle)",
              }}
            >
              {filtered.map((project, i) => {
                const tc = typeColors[project.type] ?? {
                  text: "#9499a8",
                  border: "rgba(255,255,255,0.2)",
                };
                return (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                    className="relative p-6 cursor-pointer transition-colors duration-200"
                    style={{ background: "var(--bg-surface)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--bg-raised)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "var(--bg-surface)")
                    }
                  >
                    {project.featured && (
                      <span
                        className="absolute top-5 right-5 font-mono text-xs px-2 py-0.5"
                        style={{
                          color: "var(--accent)",
                          border: "1px solid var(--accent-dim)",
                        }}
                      >
                        Featured
                      </span>
                    )}

                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="font-mono text-xs px-2 py-0.5"
                        style={{
                          color: tc.text,
                          border: `1px solid ${tc.border}`,
                        }}
                      >
                        {project.type}
                      </span>
                      <span
                        className="font-mono text-xs"
                        style={{ color: "#52566a" }}
                      >
                        {project.year}
                      </span>
                    </div>

                    <h3
                      className="text-base font-semibold mb-2 transition-colors duration-200"
                      style={{ color: "var(--text-primary)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-primary)")
                      }
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed mb-5 line-clamp-3"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2 py-0.5"
                          style={{
                            color: "#52566a",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span
                          className="font-mono text-xs px-2 py-0.5"
                          style={{
                            color: "#52566a",
                            border: "1px solid rgba(255,255,255,0.08)",
                          }}
                        >
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-4">
                        {[
                          {
                            href: project.live,
                            Icon: ExternalLink,
                            label: "Live",
                          },
                          { href: project.github, Icon: Github, label: "Code" },
                        ].map(({ href, Icon, label }) => (
                          <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1 text-xs font-mono transition-colors"
                            style={{ color: "var(--text-muted)" }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.color = "var(--accent)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.color = "var(--text-muted)")
                            }
                          >
                            <Icon size={12} /> {label}
                          </a>
                        ))}
                      </div>
                      <span
                        className="flex items-center gap-1 text-xs font-mono"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Details <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ border: "1px solid var(--border-subtle)" }}
            >
              {/* Table head */}
              <div
                className="grid grid-cols-12 gap-4 px-6 py-3"
                style={{ borderBottom: "1px solid var(--border-subtle)" }}
              >
                {["#", "Project", "Type", "Stack", "Year", "Links"].map(
                  (h, idx) => (
                    <span
                      key={h}
                      className={`font-mono text-xs uppercase tracking-widest ${
                        idx === 0
                          ? "col-span-1"
                          : idx === 1
                            ? "col-span-4"
                            : idx === 2
                              ? "col-span-2 hidden md:block"
                              : idx === 3
                                ? "col-span-3 hidden lg:block"
                                : idx === 4
                                  ? "col-span-1 hidden md:block"
                                  : "col-span-1"
                      }`}
                      style={{ color: "var(--text-muted)" }}
                    >
                      {h}
                    </span>
                  ),
                )}
              </div>

              {filtered.map((project, i) => {
                const tc = typeColors[project.type] ?? {
                  text: "#9499a8",
                  border: "",
                };
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => {
                      setSelectedProject(project);
                      setIsModalOpen(true);
                    }}
                    className="grid grid-cols-12 gap-4 px-6 py-5 items-center cursor-pointer transition-colors duration-200"
                    style={{
                      borderBottom: "1px solid var(--border-subtle)",
                      background: "transparent",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.03)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <span
                      className="col-span-1 font-mono text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      0{i + 1}
                    </span>
                    <div className="col-span-4">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {project.title}
                      </p>
                      <p
                        className="text-xs mt-0.5 hidden sm:block line-clamp-1"
                        style={{ color: "#52566a" }}
                      >
                        {project.description}
                      </p>
                    </div>
                    <span
                      className="col-span-2 font-mono text-xs hidden md:block"
                      style={{ color: tc.text }}
                    >
                      {project.type}
                    </span>
                    <div className="col-span-3 hidden lg:flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((t, ti) => (
                        <span
                          key={t}
                          className="font-mono text-xs"
                          style={{ color: "#52566a" }}
                        >
                          {t}
                          {ti < 2 && ti < project.technologies.length - 1
                            ? ","
                            : ""}
                        </span>
                      ))}
                    </div>
                    <span
                      className="col-span-1 font-mono text-xs hidden md:block"
                      style={{ color: "#52566a" }}
                    >
                      {project.year}
                    </span>
                    <div className="col-span-1 flex gap-3">
                      {[
                        {
                          href: project.live,
                          Icon: ExternalLink,
                          label: "Live",
                        },
                        { href: project.github, Icon: Github, label: "Code" },
                      ].map(({ href, Icon, label }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={label}
                          style={{ color: "var(--text-muted)" }}
                          onMouseEnter={(e) =>
                            (e.currentTarget.style.color = "var(--accent)")
                          }
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.color = "var(--text-muted)")
                          }
                        >
                          <Icon size={14} />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div
            className="py-16 text-center"
            style={{ border: "1px solid var(--border-subtle)" }}
          >
            <p className="font-mono text-sm" style={{ color: "var(--text-muted)" }}>
              No projects match this filter.
            </p>
            <button
              onClick={() => setFilter("All")}
              className="mt-4 font-mono text-xs underline"
              style={{ color: "var(--accent)" }}
            >
              Clear filter
            </button>
          </div>
        )}
      </motion.div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
        project={selectedProject}
      />
    </div>
    </section>
  );
};

export default Projects;
