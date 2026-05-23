import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "Angular 12–21",
      "React 17–19",
      "Vue.js 2–3",
      "TypeScript / JS ES6+",
      "Ionic 6–8",
      "RxJS",
      "NgRx / Angular Signals",
      "Redux Toolkit / Zustand / Pinia",
      "Tailwind CSS",
      "SCSS / Bootstrap",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "RESTful APIs",
      "WebSockets",
      "RabbitMQ",
      "Event-Driven Systems",
      "Microservices",
      "Multi-Tenancy",
      "JWT / RBAC / MFA",
      "OAuth 2.0",
    ],
  },
  {
    category: "Data & AI",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "PrismaORM",
      "TypeORM",
      "pgvector",
      "LangChain",
      "OpenAI GPT-4o",
      "RAG Pipelines",
      "Semantic Search",
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      "AWS (ECS, ECR, RDS, CloudWatch)",
      "Azure",
      "Docker",
      "GitHub Actions CI/CD",
      "Nginx",
      "Prometheus",
      "Linux",
      "Vercel / Render / Amplify",
      "Git / Jira / Confluence",
    ],
  },
];

const practices = [
  "System Architecture",
  "Clean Code & Code Review",
  "Performance Optimisation",
  "Technical Documentation (Swagger/OpenAPI)",
  "Agile / Scrum",
  "Mentoring Junior Devs",
  "Cross-functional Collaboration",
  "Unit Testing (Jest, Jasmine, Vitest)",
];

const Skills = () => (
  <section
    id="skills"
    className="skills-section"
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
          02 / Skills
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
        className="max-w-5xl"
      >
        <h2
          className="text-4xl sm:text-5xl font-bold mb-4 leading-tight"
          style={{ color: "var(--text-primary)" }}
        >
          My toolkit
        </h2>
        <p
          className="max-w-xl mb-14 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          A full-spectrum engineer — from pixel-perfect Angular UIs to distributed
          NestJS microservices, AI pipelines, and AWS cloud infrastructure.
        </p>

        {/* Skill groups grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4"
          style={{
            border: "1px solid var(--border-subtle)",
            gap: "1px",
            background: "var(--border-default)",
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: gi * 0.1, duration: 0.5 }}
              className="p-6"
              style={{ background: "var(--bg-raised)" }}
            >
              <h3
                className="font-mono text-xs uppercase tracking-widest mb-5"
                style={{ color: "var(--accent)" }}
              >
                {group.category}
              </h3>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0"
                      style={{ background: "rgba(217,119,6,0.5)" }}
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Professional practices */}
        <div
          className="mt-px p-6"
          style={{
            border: "1px solid var(--border-subtle)",
            background: "var(--bg-surface)",
          }}
        >
          <h3
            className="font-mono text-xs uppercase tracking-widest mb-5"
            style={{ color: "var(--accent)" }}
          >
            Professional Practices
          </h3>
          <div className="flex flex-wrap gap-2">
            {practices.map((p) => (
              <span
                key={p}
                className="text-xs font-mono px-3 py-1.5 transition-colors duration-200 cursor-default"
                style={{
                  color: "var(--text-secondary)",
                  border: "1px solid var(--border-subtle)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-dim)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Resume CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="/public/assets/adedamolas_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono px-5 py-2.5 transition-colors duration-200"
            style={{ background: "var(--accent)", color: "var(--text-inverse)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-light)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            View full resume ↗
          </a>
          <span className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>
            PDF — Updated 2026
          </span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Skills;
