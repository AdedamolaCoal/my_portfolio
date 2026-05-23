import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

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

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
}

const AllProjectsModal = ({
  isOpen,
  onClose,
  projects,
}: AllProjectsModalProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "featured" | "other">("all");

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "featured") return project.featured;
    if (filter === "other") return !project.featured;
    return true;
  });

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={onClose}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-card-dark rounded-xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-white/10">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    All Projects
                  </h2>
                  <p className="text-secondary mt-1">
                    Explore my complete portfolio of work
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                >
                  <X size={24} className="text-white" />
                </motion.button>
              </div>

              {/* Filter Tabs */}
              <div className="px-6 py-4 border-b border-white/10">
                <div className="flex space-x-4">
                  {[
                    {
                      key: "all",
                      label: "All Projects",
                      count: projects.length,
                    },
                    {
                      key: "featured",
                      label: "Featured",
                      count: projects.filter((p) => p.featured).length,
                    },
                    {
                      key: "other",
                      label: "Other Projects",
                      count: projects.filter((p) => !p.featured).length,
                    },
                  ].map((tab) => (
                    <motion.button
                      key={tab.key}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        setFilter(tab.key as "all" | "featured" | "other")
                      }
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        filter === tab.key
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-white/10 text-secondary hover:bg-white/20"
                      }`}
                    >
                      {tab.label} ({tab.count})
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                      className="professional-card rounded-lg overflow-hidden cursor-pointer"
                      onClick={() => openProjectModal(project)}
                    >
                      {/* Project Image */}
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

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-3 left-3">
                            <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className="p-4">
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {project.title}
                        </h3>
                        <p className="text-secondary text-sm mb-3 line-clamp-3">
                          {project.description}
                        </p>

                        {/* Technologies */}
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

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center">
                          <div className="flex space-x-2">
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
                          <span className="text-blue-400 text-sm font-medium">
                            View Details →
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl text-secondary">📁</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      No projects found
                    </h3>
                    <p className="text-secondary">
                      Try selecting a different filter or check back later.
                    </p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-secondary">
                    Showing {filteredProjects.length} of {projects.length}{" "}
                    projects
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="btn-primary px-6 py-2 rounded-lg font-medium"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Project Modal */}
      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={closeProjectModal}
        project={selectedProject}
      />
    </>
  );
};

export default AllProjectsModal;
