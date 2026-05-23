import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { downloadCV } from "../utils/cvDownload";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13,15,20,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.07)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <a
            href="#home"
            onClick={() => scrollTo("#home")}
            className="font-mono text-sm font-bold tracking-wider transition-colors duration-200"
            style={{ color: "#e8eaf0" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#e8eaf0")}
          >
            DA<span style={{ color: "#f59e0b" }}>.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollTo(item.href)}
                className="font-mono text-xs uppercase tracking-widest transition-colors duration-200"
                style={{ color: "#52566a" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8eaf0")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#52566a")}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={downloadCV}
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest px-4 py-2 transition-colors duration-200"
              style={{ background: "#f59e0b", color: "#0d0f14" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#fcd34d")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "#f59e0b")
              }
            >
              <Download size={12} /> Resume
            </button>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="md:hidden transition-colors duration-200"
            style={{ color: "#9499a8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f59e0b")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9499a8")}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(13,15,20,0.97)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="text-left font-mono text-xs uppercase tracking-widest transition-colors"
                  style={{ color: "#52566a" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#e8eaf0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "#52566a")
                  }
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  downloadCV();
                  setIsOpen(false);
                }}
                className="self-start inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest px-4 py-2"
                style={{ background: "#f59e0b", color: "#0d0f14" }}
              >
                <Download size={12} /> Resume
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
