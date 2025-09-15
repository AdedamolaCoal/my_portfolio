import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const technicalSkills = [
    {
      name: "Angular",
      color: "from-red-500 to-red-600",
    },
    {
      name: "TypeScript",
      color: "from-blue-500 to-blue-600",
    },
    { name: "Ionic", color: "from-blue-400 to-blue-500" },
    {
      name: "Tailwind CSS",
      color: "from-teal-400 to-teal-500",
    },
    {
      name: "Bootstrap",
      color: "from-purple-500 to-purple-600",
    },
    { name: "SASS", color: "from-pink-500 to-pink-600" },
    { name: "NgRx", color: "from-green-500 to-green-600" },
    {
      name: "Ngx-Charts",
      color: "from-indigo-500 to-indigo-600",
    },
    { name: "RxJS", color: "from-pink-600 to-purple-600" },
    {
      name: "Node.js",
      color: "from-green-600 to-green-700",
    },
    {
      name: "Express.js",
      color: "from-gray-600 to-gray-700",
    },
    { name: "Nest.js", color: "from-red-600 to-red-700" },
    {
      name: "PostgreSQL",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "MongoDB",
      color: "from-green-500 to-green-600",
    },
    {
      name: "REST APIs",
      color: "from-indigo-400 to-indigo-500",
    },
    {
      name: "OAuth 2.0",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "WebSockets",
      color: "from-yellow-500 to-orange-500",
    },
    { name: "Git", color: "from-orange-500 to-red-500" },
    { name: "Docker", color: "from-blue-500 to-blue-600" },
    { name: "Azure", color: "from-blue-400 to-blue-500" },
    {
      name: "Firebase",
      color: "from-yellow-500 to-orange-500",
    },
    {
      name: "Linux",
      color: "from-yellow-500 to-orange-500",
    },
    { name: "Nginx", color: "from-green-600 to-green-700" },
    { name: "Vercel", color: "from-gray-600 to-gray-700" },
    { name: "Render", color: "from-pink-600 to-pink-700" },
  ];

  const softSkills = [
    { name: "Clean Code", color: "from-green-400 to-green-500" },
    { name: "Performance Optimization", color: "from-blue-400 to-blue-500" },
    { name: "User Experience", color: "from-purple-400 to-purple-500" },
    { name: "Team Collaboration", color: "from-pink-400 to-pink-500" },
    { name: "Problem-Solving", color: "from-orange-400 to-orange-500" },
    { name: "Project Management", color: "from-indigo-400 to-indigo-500" },
    { name: "Code Review", color: "from-teal-400 to-teal-500" },
    { name: "Documentation", color: "from-cyan-400 to-cyan-500" },
  ];

  return (
    <section
      id="skills"
      className="skills-page container pl-8 p-2 px-4 pb-12 pt-4 sm:pt-12 lg:flex gap-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* HTML Comment Elements */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-yellow-400 fixed sm:top-12 top-20 left-8 sm:left-28 font-Aurore -scroll-my-2.5"
      >
        &lt;body&gt;
      </motion.span>

      <div className="text-container pl-1 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <span className="text-6xl sm:text-7xl font-bold text-glow">
            <span className="string-animate-hover _18 text-yellow-400">M</span>
            <span className="string-animate-hover _19 text-yellow-400">y</span>
            <span className="string-animate-hover _20 text-yellow-400"> </span>
            <span className="string-animate-hover _21 text-yellow-400">T</span>
            <span className="string-animate-hover _22 text-yellow-400">o</span>
            <span className="string-animate-hover _23 text-yellow-400">o</span>
            <span className="string-animate-hover _24 text-yellow-400">l</span>
            <span className="string-animate-hover _25 text-yellow-400">k</span>
            <span className="string-animate-hover _26 text-yellow-400">i</span>
            <span className="string-animate-hover _27 text-yellow-400">t</span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-zone grid gap-6 mb-10"
        >
          <h2 className="text-center text-2xl sm:text-4xl text-white mb-6 leading-relaxed">
            Below is a collection of technologies
            <br />
            and tools{" "}
            <span className="text-slate-300 bg-gradient-to-r from-slate-300 to-slate-400 bg-clip-text text-transparent">
              I use to build
            </span>{" "}
            amazing full-stack applications.
          </h2>
          <p className="text-center text-yellow-400 text-lg sm:text-xl leading-relaxed">
            From frontend frameworks to backend services and DevOps tools,
            <br />I bring comprehensive expertise to every project I work on.
          </p>
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="place-self-center"
            href="/public/assets/adedamolas_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="cta-btn bg-gradient-to-r from-slate-100 to-slate-200 text-black py-3 px-6 text-xl shadow-2xl mt-6 max-w-max place-self-center hover:scale-105 transition-all duration-300 hover:shadow-yellow-400/25 hover:shadow-2xl rounded-lg border border-yellow-400/20">
              <span className="cta-text bg-gradient-to-r from-slate-50 to-slate-100 rounded-full text-black text-xl font-semibold px-4 py-2">
                📄 View Resume
              </span>
            </button>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="soft-skill text-white bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-xl mr-4 border border-yellow-400/20 shadow-2xl"
        >
          <h2 className="text-yellow-400 text-2xl mb-4 font-bold">
            🚀 Beyond Code
          </h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            I thrive in collaborative environments and understand that building
            great products requires more than just technical execution.
          </p>
          <strong className="text-white text-lg">I actively practice:</strong>
          <div className="flex gap-3 mt-4 flex-wrap">
            {softSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className={`bg-gradient-to-r ${skill.color} text-white px-4 py-2 text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-default border border-white/20`}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="skills-icons grid pr-4 justify-center items-center grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 m-auto gap-4 max-w-4xl min-w-80 relative z-10"
      >
        {technicalSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 1 + index * 0.1,
              duration: 0.6,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.1,
              y: -5,
              rotate: 5,
            }}
            className="flex flex-col items-center group cursor-pointer skill-card"
          >
            {skill.learning && (
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                className="next-text text-xs font-Aurore absolute -top-6 text-yellow-400 bg-black/80 px-2 py-1 rounded-full border border-yellow-400/30 learning-badge"
              >
                Learning
              </motion.span>
            )}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`flex items-center justify-center mb-3 p-4 rounded-xl bg-gradient-to-br ${skill.color} shadow-lg group-hover:shadow-2xl transition-all duration-300 min-h-[60px] min-w-[80px]`}
            >
              <span className="text-white text-sm font-bold text-center leading-tight group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          </motion.div>
        ))}
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

export default Skills;
