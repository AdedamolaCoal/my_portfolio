import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Home,
  Wrench,
  User,
  Mail,
  FolderOpen,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const navItems = [
  { icon: Home, href: "#home", label: "Home" },
  { icon: User, href: "#about", label: "About" },
  { icon: Wrench, href: "#skills", label: "Skills" },
  { icon: FolderOpen, href: "#projects", label: "Projects" },
  { icon: Mail, href: "#contact", label: "Contact" },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: import.meta.env.VITE_LINKEDIN_URL,
    label: "LinkedIn",
  },
  { icon: Github, href: import.meta.env.VITE_GITHUB_URL, label: "GitHub" },
  { icon: Twitter, href: import.meta.env.VITE_TWITTER_URL, label: "Twitter" },
  {
    icon: Instagram,
    href: import.meta.env.VITE_INSTAGRAM_URL,
    label: "Instagram",
  },
];

const Sidebar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""));
    const onScroll = () => {
      const pos = window.scrollY + 120;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  const iconStyle = (isActive: boolean): React.CSSProperties => ({
    color: isActive ? "var(--accent)" : "var(--text-muted)",
    transition: "color 0.2s",
  });

  return (
    <>
      {/* ── Desktop sidebar ── */}
      <aside className="sidebar fixed left-0 top-0 bottom-0 w-16 hidden sm:flex flex-col items-center py-8 z-40">
        {/* Wordmark */}
        <a
          href="#home"
          onClick={() => scrollTo("#home")}
          aria-label="Home"
          className="font-mono text-sm font-bold mb-10 transition-colors duration-200"
          style={{ color: "var(--accent)" }}
        >
          DA
        </a>

        {/* Nav */}
        <nav className="flex flex-col items-center gap-7 flex-1">
          {navItems.map(({ icon: Icon, href, label }) => {
            const isActive = active === href.replace("#", "");
            return (
              <motion.a
                key={label}
                onClick={() => scrollTo(href)}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                title={label}
                aria-label={label}
                className="relative flex items-center justify-center cursor-pointer"
                style={iconStyle(isActive)}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text-secondary)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                <Icon size={18} />
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute -right-4 w-0.5 h-6 rounded-full"
                    style={{ background: "var(--accent)" }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Socials */}
        <ul className="flex flex-col items-center gap-5">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                <Icon size={15} />
              </a>
            </li>
          ))}
          <li>
            <span
              className="block w-px h-8 mt-1"
              style={{ background: "var(--border-subtle)" }}
            />
          </li>
        </ul>
      </aside>

      {/* ── Mobile bottom nav ── */}
      <nav className="mobile-nav sm:hidden fixed bottom-0 left-0 right-0 flex items-center justify-around py-3 px-4 z-40 backdrop-blur-sm">
        {navItems.map(({ icon: Icon, href, label }) => {
          const isActive = active === href.replace("#", "");
          return (
            <a
              key={label}
              onClick={() => scrollTo(href)}
              aria-label={label}
              className="relative flex flex-col items-center cursor-pointer transition-colors duration-200"
              style={iconStyle(isActive)}
            >
              <Icon size={18} />
              {isActive && (
                <span
                  className="absolute -bottom-1.5 w-1 h-1 rounded-full"
                  style={{ background: "var(--accent)" }}
                />
              )}
            </a>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;
