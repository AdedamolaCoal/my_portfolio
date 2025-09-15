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

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");
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

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <section className="sidebar min-h-screen hidden sm:flex w-20 px-8 py-4 fixed left-0 top-0 bottom-0 bg-black items-center gap-16 flex-col">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => scrollToSection("#home")}
          className="flex flex-col items-center"
        >
          <div className="text-yellow-400 text-2xl font-bold">D</div>
          {/* <p className="text-white text-sm">Damola</p> */}
        </a>

        {/* Navigation */}
        <nav className="flex-1 flex gap-8 flex-col">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <motion.a
                key={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(item.href)}
                className={`flex flex-col items-center transition-all duration-200 relative ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
                aria-label={item.label}
              >
                <item.icon size={24} />
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -right-2 w-1 h-8 bg-yellow-400 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>

        {/* Social Links */}
        <ul className="list-none flex flex-1 flex-col gap-6">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-yellow-400 transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            </li>
          ))}
        </ul>
      </section>

      {/* Mobile Navigation */}
      <section className="mobile-nav sm:hidden flex gap-3 items-center justify-between p-4 w-full bg-black">
        <a
          href="#home"
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-2"
        >
          <div className="text-yellow-400 text-xl font-bold">D</div>
          {/* <p className="text-white text-xs">Damola</p> */}
        </a>

        <nav className="flex-1 flex gap-2 justify-between items-center p-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <motion.a
                key={item.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => scrollToSection(item.href)}
                className={`flex flex-col items-center transition-all duration-200 relative ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
                aria-label={item.label}
              >
                <item.icon size={20} />
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveIndicator"
                    className="absolute -bottom-1 w-6 h-1 bg-yellow-400 rounded-full"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.a>
            );
          })}
        </nav>
      </section>
    </>
  );
};

export default Sidebar;
