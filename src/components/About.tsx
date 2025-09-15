import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="about-page container pl-10 sm:pt-12 pt-8 p-4 flex flex-col lg:flex-row items-center justify-around gap-10 mb-20"
    >
      {/* HTML Comment Elements */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-yellow-400 fixed sm:top-12 top-20 left-8 sm:left-28 font-Aurore -scroll-my-2.5"
      >
        &lt;body&gt;
      </motion.span>

      <div className="text-zone lg:w-2/3">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-6xl sm:text-7xl font-bold text-glow mb-6">
            <span className="string-animate-hover _18 text-yellow-400">A</span>
            <span className="string-animate-hover _19 text-yellow-400">b</span>
            <span className="string-animate-hover _20 text-yellow-400">o</span>
            <span className="string-animate-hover _21 text-yellow-400">u</span>
            <span className="string-animate-hover _22 text-yellow-400">t</span>
            <span className="string-animate-hover _23 text-yellow-400"> </span>
            <span className="string-animate-hover _24 text-yellow-400">M</span>
            <span className="string-animate-hover _25 text-yellow-400">e</span>
          </h1>

          {/* About Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="text-center p-4 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
              <div className="text-2xl font-bold text-yellow-400 mb-1">3+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-xl border border-blue-400/20">
              <div className="text-2xl font-bold text-blue-400 mb-1">25+</div>
              <div className="text-sm text-gray-300">Technologies</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-400/10 to-green-500/10 rounded-xl border border-green-400/20">
              <div className="text-2xl font-bold text-green-400 mb-1">4</div>
              <div className="text-sm text-gray-300">Certifications</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-purple-400/10 to-purple-500/10 rounded-xl border border-purple-400/20">
              <div className="text-2xl font-bold text-purple-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Passion</div>
            </div>
          </motion.div>

          {/* Quick Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl mb-8"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Adedamola Akinyomi
                </h2>
                <p className="text-yellow-400 text-lg font-medium">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Passionate about creating exceptional digital experiences through
              clean code, innovative solutions, and user-centered design.
              Specializing in Node.js, Angular, Ionic, TypeScript, and modern
              web technologies.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="about-text"
        >
          <h2 className="text-yellow-400 text-2xl mb-4 font-bold">
            Short Intro
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            Hi, I'm Damola Akinyomi, a passionate Full-Stack Developer focused
            on building clean, interactive, and user-friendly web experiences
            across healthcare, edutech, fintech, and enterprise sectors. I am a
            graduate of the ALX Full-Stack Software Engineering Program (Cohort
            22), which strengthened my discipline, resilience, and ability to
            build end-to-end solutions under production-level standards. I also
            hold certifications in Microsoft Azure Fundamentals, Azure Security
            & Compliance, and Oracle Cloud Foundations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="about-text"
        >
          <h2 className="text-yellow-400 text-2xl mb-4 font-bold">
            My Journey
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            I started my journey into web development with curiosity about how
            websites worked, and it has grown into a passion for creating
            modern, scalable applications. With over 3 years of experience, I've
            led and contributed to projects involving complex user workflows,
            API integrations, and real-time systems.
          </p>

          <h2 className="text-yellow-400 text-2xl mb-4 font-bold">
            What I Do Best
          </h2>
          <ul className="list-disc pl-6 text-white text-lg leading-relaxed space-y-2">
            <li>
              Building modern Angular applications with performance and
              scalability in mind
            </li>
            <li>
              Designing pixel-perfect, responsive layouts with Tailwind CSS and
              Ionic
            </li>
            <li>
              Writing clean, semantic code using TypeScript and modern
              frameworks
            </li>
            <li>
              Creating robust backend systems with Node.js, Express, and Nest.js
            </li>
            <li>
              Implementing real-time features with WebSockets and state
              management with NgRx and RxJS
            </li>
            <li>
              Building data visualization dashboards with Ngx-Charts and
              interactive UIs
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="about-text"
        >
          <h2 className="text-yellow-400 text-2xl mb-4 font-bold">Currently</h2>
          <p className="text-white text-lg leading-relaxed mb-4">
            I'm currently working on projects that showcase my skills in
            Angular, TypeScript, Node.js, and modern web technologies. I hold
            certifications in Microsoft Azure Fundamentals, Azure Security &
            Compliance, and Oracle Cloud Foundations.
          </p>
          <p className="text-white text-lg leading-relaxed mb-6">
            <span className="text-nowrap font-extrabold text-yellow-500">
              I'm also open to opportunities{" "}
            </span>
            where I can collaborate, learn, and grow as a developer, whether
            that's freelance work, consulting, or full-time roles.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="about-text"
        >
          <h2 className="text-yellow-400 text-2xl mb-4 font-bold">
            Beyond Code
          </h2>
          <p className="text-white text-lg leading-relaxed mb-6">
            When I'm not coding, I enjoy exploring new technologies, keeping up
            with tech trends, and connecting with other developers. I'm a proud
            graduate of the ALX Full-Stack Software Engineering Program (Cohort
            22), which strengthened my discipline, resilience, and ability to
            build end-to-end solutions under production-level standards.
          </p>

          <h2 className="text-yellow-400 text-2xl mb-4 font-bold">
            Let's Connect
          </h2>
          <p className="text-white text-lg leading-relaxed">
            I'd love to collaborate or chat about exciting opportunities. 👉
            <a
              className="text-yellow-400 mr-2 hover:text-yellow-300 transition-colors"
              href="https://www.linkedin.com/in/adedamola-akinyomi"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            |
            <a
              className="text-yellow-400 m-2 hover:text-yellow-300 transition-colors"
              href="https://github.com/adedamolacoal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            |
            <a
              className="text-yellow-400 m-2 hover:text-yellow-300 transition-colors"
              href="mailto:adedamolacoal@gmail.com"
              target="_blank"
              aria-label="Email:adedamolacoal@gmail.com"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </p>
        </motion.div>
      </div>

      {/* Animated Cube Spinner */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="stage-cube grid items-center relative"
      >
        <div className="cubespinner absolute top-32">
          <div className="face1">
            <div className="angular-logo">
              <span className="angular-text">A</span>
            </div>
          </div>
          <div className="face2">
            <div className="typescript-logo">
              <span className="ts-text">TS</span>
            </div>
          </div>
          <div className="face3">
            <div className="node-logo">
              <span className="node-text">Node</span>
            </div>
          </div>
          <div className="face4">
            <div className="ionic-logo">
              <span className="ionic-text">Ionic</span>
            </div>
          </div>
          <div className="face5">
            <div className="ngrx-logo">
              <span className="ngrx-text">NgRx</span>
            </div>
          </div>
          <div className="face6">
            <div className="docker-logo">
              <span className="docker-text">Docker</span>
            </div>
          </div>
          <div className="face7">
            <div className="azure-logo">
              <span className="azure-text">Azure</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* HTML Comment Elements */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-yellow-400 fixed bottom-12 left-8 sm:left-28 font-Aurore"
      >
        &lt;/body&gt;
      </motion.span>
      <br />
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 0.8 }}
        className="text-yellow-400 fixed bottom-5 sm:left-20 font-Aurore"
      >
        &lt;/html&gt;
      </motion.span>
    </section>
  );
};

export default About;
