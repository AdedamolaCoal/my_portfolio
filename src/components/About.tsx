import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Passionate about creating innovative solutions and pushing the
            boundaries of web development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="professional-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Who I Am
              </h3>
              <p className="text-secondary leading-relaxed mb-6">
                I'm a dedicated full-stack software engineer with over 3 years
                of experience in creating web applications that solve real world
                problems. I have a strong focus on frontend development, with
                experience in building scalable and intuitive applications
                across the healthcare, fintech, and enterprise (ERP) sectors.
                I've led and contributed to projects that involve complex user
                workflows, API integrations, and real-time systems, using tools
                like Angular, Node.js, and PostgreSQL.
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                On the frontend, I've had the oppotunity to work on projects
                ranging from Angular 10+, Ionic 6+, and Tailwind CSS to develop
                responsive interfaces and interactive dashboards. I'm also
                conversant with libraries like NgRx and RxJs for state
                management, Ngx-Charts for data visualization, and both primeng
                andthe Angular Material UI library for building modern,
                responsive web applications. My backend work includes building
                RESTful APIs with Node.js and Express using Typescript,
                implementing authentication (OAuth 2.0), real-time communication
                with WebSockets, and integrating services like QoreID, Twilio,
                and Mailgun.
              </p>
              <p className="text-secondary leading-relaxed">
                I hold certifications in Microsoft Azure Fundamentals, Azure
                Security & Compliance, and Oracle Cloud Foundations, reflecting
                my commitment to continuous learning and delivering
                cloud-resilient software. I'm also a proud graduate of the ALX
                Full-Stack Software Engineering Program (Cohort 22) — an
                intensive, industry-aligned training program that sharpened my
                ability to design and build scalable web applications using
                modern technologies. Through the program, I gained deep
                experience in system design, DevOps practices, collaborative
                engineering, and problem-solving in real-world team settings. It
                strengthened my discipline, resilience, and ability to build
                end-to-end solutions under production-level standards.
              </p>
            </div>

            <div className="professional-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">
                What I Do
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary">
                    Develop responsive web applications using Angular,
                    TypeScript, and modern frameworks
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary">
                    Build robust backend systems with Node.js, Express, Nest.js,
                    and various databases and ORMs
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary">
                    Create seamless user experiences with intuitive UI/UX design
                    principles
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-secondary">
                    Implement DevOps practices and cloud deployment strategies
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-white p-2">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <img
                      src="/assets/adedamola2.jpg"
                      alt="Damola Akinyomi"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full"
              />
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
