import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
import ProjectModal from "./ProjectModal";
import AllProjectsModal from "./AllProjectsModal";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
  images: string[];
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAllProjectsModalOpen, setIsAllProjectsModalOpen] = useState(false);

  const projects: Array<Project> = [
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
      featured: true,
      images: [
        "/assets/projects/prepstation/lms-1.png",
        "/assets/projects/prepstation/lms-2.png",
      ],
    },
    {
      title: "Enterprise Resource Planning System",
      description:
        "A minimal enterprise resource planning system built with Angular on the frontend and handled by me. Features include a role based access control (RBAC) on the backend, which was used on the frontend to control the access to the different modules of the system, and further used to control the workflows of the system for the different roles.",
      technologies: ["Angular", "RxJs", "Bootstrap", "SASS"],
      image: "/assets/projects/asl/erp-1.png",
      github: "https://github.com/adedamolacoal",
      live: "https://asl-test.vercel.app",
      featured: true,
      images: [
        "/assets/projects/asl/erp-1.png",
        "/assets/projects/asl/erp-2.png",
      ],
    },
    {
      title: "Movies Trend",
      description:
        "A static movies website built with just HTML, CSS and JavaScript. It uses the TMDB API to fetch the movies data.",
      technologies: ["JavaScript", "HTML", "CSS"],
      image: "/assets/projects/mt/mt-1.png",
      github: "https://github.com/adedamolacoal/movies-trend",
      live: "https://movies-trend.vercel.app/",
      featured: true,
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
      github: "https://github.com/adedamolacoal/portfolio",
      live: "https://adedamola-portfolio.vercel.app/",
      featured: true,
      images: [
        "/assets/projects/pw/pw-1.png",
        "/assets/projects/pw/pw-2.png",
        "/assets/projects/pw/pw-3.png",
        "/assets/projects/pw/pw-4.png",
      ],
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  // const otherProjects = projects.filter((project) => !project.featured);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const openAllProjectsModal = () => {
    setIsAllProjectsModalOpen(true);
  };

  const closeAllProjectsModal = () => {
    setIsAllProjectsModalOpen(false);
  };

  return (
    <>
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">My Projects</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto">
              Here are some of the projects I've worked on. Each one represents
              a unique challenge and learning opportunity.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Featured Projects
            </h3>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="professional-card rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center relative group">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-sm opacity-80">Project Preview</p>
                    </div>

                    {/* Overlay with view button */}
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-lg"
                      >
                        <Eye size={20} />
                        <span className="font-medium">View Project</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 text-primary text-sm rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-secondary hover:text-white transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-secondary hover:text-white transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                  whileHover={{ y: -5 }}
                  className="professional-card rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="h-32 bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center relative group">
                    <div className="text-white text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg font-bold">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                      <p className="text-xs opacity-80">Preview</p>
                    </div>

                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center space-x-2 bg-white text-gray-900 px-3 py-1 rounded-lg text-sm"
                      >
                        <Eye size={16} />
                        <span className="font-medium">View</span>
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-secondary text-sm mb-3 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 text-primary text-xs rounded-full border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-white/10 text-secondary text-xs rounded-full border border-white/20">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        <motion.a
                          href={project.github}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-secondary hover:text-white transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-secondary hover:text-white transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                        </motion.a>
                      </div>
                      <motion.div whileHover={{ x: 5 }} className="text-white">
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openAllProjectsModal}
              className="btn-primary px-8 py-3 rounded-lg font-semibold"
            >
              View All Projects
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />

      {/* All Projects Modal */}
      <AllProjectsModal
        isOpen={isAllProjectsModalOpen}
        onClose={closeAllProjectsModal}
        projects={projects}
      />
    </>
  );
};

export default Projects;
