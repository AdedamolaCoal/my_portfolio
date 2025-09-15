import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Star, Calendar, Code } from "lucide-react";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState("all");

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "Learning Management System",
      description:
        "A full-stack role based learning management system built with Angular, Node.js, and MongoDB. Features include user authentication, payment processing, admin dashboard, and more.",
      technologies: [
        "Angular",
        "Node.js",
        "MongoDB",
        "Stripe",
        "RxJs",
        "Bootstrap",
      ],
      image: "/assets/projects/prepstation/lms-1.png",
      github: "https://github.com/adedamolacoal",
      live: "https://prepstation-fe.vercel.app/",
      images: [
        "/assets/projects/prepstation/lms-1.png",
        "/assets/projects/prepstation/lms-2.png",
      ],
    },
    {
      title: "Enterprise Resource Planning System",
      description:
        "A minimal enterprise resource planning system built with Angular on the frontend and handled by me. Features include a role based access control (RBAC) on the backend.",
      technologies: ["Angular", "RxJs", "Bootstrap", "SASS", "TypeScript"],
      image: "/assets/projects/asl/erp-1.png",
      github: "https://github.com/adedamolacoal",
      live: "https://asl-test.vercel.app",
      images: [
        "/assets/projects/asl/erp-1.png",
        "/assets/projects/asl/erp-2.png",
      ],
    },
    {
      title: "Movies Trend",
      description:
        "A static movies website built with just HTML, CSS and JavaScript. It uses the TMDB API to fetch the movies data.",
      technologies: ["JavaScript", "HTML", "CSS", "TMDB API"],
      image: "/assets/projects/mt/mt-1.png",
      github: "https://github.com/adedamolacoal/movies-trend",
      live: "https://movies-trend.vercel.app/",
      images: [
        "/assets/projects/mt/mt-1.png",
        "/assets/projects/mt/mt-2.png",
        "/assets/projects/mt/mt-3.png",
        "/assets/projects/mt/mt-4.png",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with smooth animations and professional design. Using the React framework, Framer Motion for animations, TypeScript for type safety, and Tailwind CSS for styling.",
      technologies: ["React", "Framer Motion", "TypeScript", "Tailwind CSS"],
      image: "/assets/projects/pw/pw-1.png",
      github: "https://github.com/AdedamolaCoal/my_portfolio",
      live: "https://adedamola-portfolio-ten.vercel.app",
      images: [
        "/assets/projects/pw/pw-1.png",
        "/assets/projects/pw/pw-2.png",
        "/assets/projects/pw/pw-3.png",
        "/assets/projects/pw/pw-4.png",
        "/assets/projects/pw/pw-5.png",
        "/assets/projects/pw/pw-6.png",
      ],
    },
  ];

  const getProjectType = (title: string) => {
    if (
      title.includes("Learning Management") ||
      title.includes("Enterprise Resource")
    ) {
      return "enterprise";
    } else if (title.includes("Movies")) {
      return "frontend";
    } else if (title.includes("Portfolio")) {
      return "personal";
    }
    return "other";
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return getProjectType(project.title) === filter;
  });

  return (
    <section
      id="projects"
      className="container pl-10 p-2 project-page px-4 pb-12 pt-4 sm:py-14"
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

      <div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          <span className="text-6xl sm:text-7xl font-bold text-glow">
            <span className="string-animate-hover _15 text-yellow-400">P</span>
            <span className="string-animate-hover _16 text-yellow-400">r</span>
            <span className="string-animate-hover _17 text-yellow-400">o</span>
            <span className="string-animate-hover _18 text-yellow-400">j</span>
            <span className="string-animate-hover _19 text-yellow-400">e</span>
            <span className="string-animate-hover _20 text-yellow-400">c</span>
            <span className="string-animate-hover _21 text-yellow-400">t</span>
            <span className="string-animate-hover _22 text-yellow-400">s</span>
          </span>
        </motion.h1>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-4 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {projects.length}
            </div>
            <div className="text-sm text-gray-300">Total Projects</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-xl border border-blue-400/20">
            <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
            <div className="text-sm text-gray-300">Technologies</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-400/10 to-green-500/10 rounded-xl border border-green-400/20">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-400/10 to-purple-500/10 rounded-xl border border-purple-400/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
            <div className="text-sm text-gray-300">Creativity</div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8 flex flex-wrap gap-4 justify-center"
        >
          {[
            { key: "all", label: "All Projects", count: projects.length },
            {
              key: "enterprise",
              label: "Enterprise",
              count: projects.filter(
                (p) => getProjectType(p.title) === "enterprise"
              ).length,
            },
            {
              key: "frontend",
              label: "Frontend",
              count: projects.filter(
                (p) => getProjectType(p.title) === "frontend"
              ).length,
            },
            {
              key: "personal",
              label: "Personal",
              count: projects.filter(
                (p) => getProjectType(p.title) === "personal"
              ).length,
            },
          ].map((filterOption) => (
            <motion.button
              key={filterOption.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterOption.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                filter === filterOption.key
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
              }`}
            >
              {filterOption.label} ({filterOption.count})
            </motion.button>
          ))}
        </motion.div>
      </div>

      <div className="card-container gap-8 w-full grid grid-cols-1 md:grid-cols-2 lg:pl-8 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="project-card cursor-pointer animate-card flex flex-col gap-2 bg-white shadow-lg hover:shadow-2xl mx-auto transition-all duration-300 rounded-lg overflow-hidden relative group"
            onClick={() => openModal(project)}
          >
            {/* Project Type Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  getProjectType(project.title) === "enterprise"
                    ? "bg-blue-500 text-white"
                    : getProjectType(project.title) === "frontend"
                    ? "bg-green-500 text-white"
                    : "bg-purple-500 text-white"
                }`}
              >
                {getProjectType(project.title).charAt(0).toUpperCase() +
                  getProjectType(project.title).slice(1)}
              </span>
            </div>

            {/* Featured Badge */}
            <div className="absolute top-4 right-4 z-10">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
            </div>

            <div className="relative overflow-hidden">
              <img
                alt={project.title}
                className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                src={project.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-black font-medium">
                  Click to view details
                </div>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold text-black flex-1">
                  {project.title}
                </h2>
                <div className="flex items-center text-yellow-500 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>2024</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium rounded-full border border-gray-200 hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="bg-gray-100 text-gray-500 px-3 py-1 text-xs font-medium rounded-full border border-gray-200">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-4">
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={16} />
                    Live
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Code className="w-4 h-4 mr-1" />
                  <span>{project.technologies.length} techs</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full text-center py-16"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              No projects found
            </h3>
            <p className="text-gray-500 mb-6">
              Try selecting a different filter to see more projects.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter("all")}
              className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Show All Projects
            </motion.button>
          </motion.div>
        )}
      </div>

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

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
