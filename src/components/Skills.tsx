import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Cloud, Zap, Code2, Database } from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "Angular", level: 90, color: "from-blue-400 to-cyan-400" },
        { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-600" },
        { name: "Ionic", level: 80, color: "from-gray-600 to-gray-800" },
        { name: "Tailwind CSS", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "Bootstrap", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "SASS", level: 90, color: "from-cyan-400 to-blue-500" },
        { name: "NgRx", level: 75, color: "from-purple-500 to-purple-600" },
        { name: "Ngx-Charts", level: 80, color: "from-pink-500 to-purple-500" },
        { name: "RxJS", level: 85, color: "from-purple-600 to-purple-800" },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      description: "Creating robust server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
        { name: "Express.js", level: 80, color: "from-gray-600 to-gray-700" },
        { name: "Nest.js", level: 75, color: "from-blue-600 to-blue-700" },
        { name: "PostgreSQL", level: 70, color: "from-green-600 to-green-700" },
        { name: "MongoDB", level: 70, color: "from-green-600 to-green-700" },
        {
          name: "REST APIs",
          level: 90,
          color: "from-indigo-500 to-indigo-600",
        },
        { name: "OAuth 2.0", level: 85, color: "from-green-500 to-green-600" },
        { name: "WebSockets", level: 80, color: "from-gray-600 to-gray-700" },
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      description: "Deployment, version control, and development tools",
      skills: [
        { name: "Git", level: 85, color: "from-orange-500 to-red-500" },
        { name: "Docker", level: 75, color: "from-blue-500 to-blue-600" },
        { name: "Azure", level: 55, color: "from-orange-600 to-orange-700" },
        { name: "Firebase", level: 65, color: "from-green-500 to-green-600" },
        { name: "Linux", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "Nginx", level: 75, color: "from-green-600 to-green-700" },
        { name: "Vercel", level: 80, color: "from-purple-600 to-purple-700" },
        { name: "Render", level: 85, color: "from-pink-600 to-pink-700" },
      ],
    },
  ];

  const additionalTechnologies = [
    { name: "Kotlin", icon: "⚡" },
    { name: "React", icon: "🌐" },
    { name: "Socket.io", icon: "🔌" },
    { name: "Passport.js", icon: "🔑" },
    { name: "Jest", icon: "🧪" },
    { name: "Webpack", icon: "�" },
    { name: "Prisma ORM", icon: "🗄️" },
    { name: "Stripe", icon: "💳" },
    { name: "Twilio", icon: "📞" },
    { name: "Oracle Cloud", icon: "☁️" },
    { name: "Mailgun", icon: "📧" },
    { name: "QoreID", icon: "🔑" },
    { name: "Figma", icon: "🎨" },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.2, duration: 0.8 }}
              className="professional-card p-6 rounded-xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <category.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                  <p className="text-secondary text-sm">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.4 + categoryIndex * 0.2 + skillIndex * 0.1,
                      duration: 0.5,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-primary font-medium">
                        {skill.name}
                      </span>
                      <span className="text-secondary text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 0.6 + categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 1,
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="professional-card p-8 rounded-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Additional Technologies
            </h3>
            <p className="text-secondary">
              Tools and technologies I use to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {additionalTechnologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="professional-card p-4 rounded-lg text-center hover:bg-white/20 transition-all duration-200"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-primary text-sm font-medium">
                  {tech.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          <div className="professional-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Clean Code
            </h4>
            <p className="text-secondary text-sm">
              Writing maintainable, scalable, and well-documented code
            </p>
          </div>

          <div className="professional-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              Performance
            </h4>
            <p className="text-secondary text-sm">
              Optimizing applications for speed and efficiency
            </p>
          </div>

          <div className="professional-card p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">
              User Experience
            </h4>
            <p className="text-secondary text-sm">
              Creating intuitive and engaging user interfaces
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
