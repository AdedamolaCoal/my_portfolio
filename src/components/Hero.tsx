import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Download,
  ArrowDown,
} from "lucide-react";
import { downloadCV } from "../utils/cvDownload";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const socialLinks = [
    { icon: Github, href: import.meta.env.VITE_GITHUB_URL, label: "GitHub" },
    {
      icon: Linkedin,
      href: import.meta.env.VITE_LINKEDIN_URL,
      label: "LinkedIn",
    },
    { icon: Twitter, href: import.meta.env.VITE_TWITTER_URL, label: "Twitter" },
    {
      icon: Instagram,
      href: import.meta.env.VITE_INSTAGRAM_URL,
      label: "Instagram",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Professional Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-300/3 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Subtle geometric elements */}
        <div className="absolute top-10 right-10 w-32 h-32 border border-white/5 rounded-full animate-rotate-slow"></div>
        <div
          className="absolute bottom-10 left-10 w-24 h-24 border border-white/5 rounded-full animate-rotate-slow"
          style={{ animationDirection: "reverse" }}
        ></div>

        {/* Minimal accent elements */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse-slow"></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/20 rounded-full animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-400/20 rounded-full animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Professional gradient shapes */}
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full animate-morph"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-pink-400/10 to-yellow-600/10 rounded-full animate-morph"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Professional greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-primary text-lg font-medium">Hello, I'm</span>
          </motion.div>

          {/* Professional name display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Damola</span>
            <span className="gradient-text"> Akinyomi</span>
          </motion.h1>

          {/* Professional title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl text-secondary mb-8"
          >
            <span>Full Stack Developer</span>
          </motion.h2>

          {/* Professional description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg text-muted max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            I build scalable, user-focused applications for fintech, healthcare,
            and enterprise systems—turning complex problems into clean,
            impactful digital solutions.
          </motion.p>

          {/* Professional CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadCV}
              className="btn-primary px-8 py-3 rounded-lg font-semibold text-lg flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="professional-card px-8 py-3 rounded-lg font-semibold text-lg text-primary hover:text-white transition-all duration-200 flex items-center space-x-2"
            >
              <span>View My Work</span>
              <ArrowDown size={20} />
            </motion.a>
          </motion.div>

          {/* Professional social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                className="professional-card p-3 rounded-full text-primary hover:text-white transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Professional scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary flex items-center space-x-2"
        >
          <ArrowDown size={24} />
          <span className="text-sm">Scroll Down</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
