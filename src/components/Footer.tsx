import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      style={{
        background: "var(--bg-raised)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          {/* Brand + tagline */}
          <div>
            <p
              className="font-bold text-base mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              Adedamola Akinyomi
            </p>
            <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              Senior Full-Stack Engineer — Lagos, Nigeria
            </p>
          </div>

          {/* Nav */}
          <nav className="flex gap-6 flex-wrap">
            {["About", "Skills", "Projects", "Contact"].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase()}`}
                className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
            className="w-9 h-9 flex items-center justify-center transition-colors duration-200"
            style={{
              border: "1px solid var(--border-default)",
              color: "var(--text-muted)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-default)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>

        {/* Divider */}
        <div
          style={{ borderTop: "1px solid var(--border-subtle)" }}
          className="pt-6"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              © 2026 Adedamola Akinyomi. All rights reserved.
            </p>
            <div className="flex gap-5">
              {[
                { label: "GitHub", href: "https://github.com/AdedamolaCoal" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/adedamola-akinyomi",
                },
                { label: "Twitter", href: "https://x.com/adedamola_dev" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs transition-colors duration-200"
                  style={{ color: "var(--text-muted)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--accent)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
