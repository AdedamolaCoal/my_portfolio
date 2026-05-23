import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    live: string;
    images: string[];
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) =>
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!project) return null;

  const getProjectFeatures = (title: string) => {
    switch (title) {
      case "Learning Management System":
        return [
          "User authentication and role-based access control",
          "Payment processing with Stripe integration",
          "Admin dashboard for course management",
          "Student progress tracking and analytics",
          "Real-time notifications and updates",
          "Responsive design for all devices",
        ];
      case "Enterprise Resource Planning System":
        return [
          "Role-based access control (RBAC) system",
          "Comprehensive module management",
          "Workflow control for different user roles",
          "Modern Angular frontend architecture",
          "Responsive Bootstrap UI components",
          "SASS styling for maintainable CSS",
        ];
      case "Movies Trend":
        return [
          "TMDB API integration for movie data",
          "Dynamic movie browsing and filtering",
          "Responsive design for all screen sizes",
          "Clean vanilla JavaScript implementation",
          "Modern CSS3 styling and animations",
          "Fast loading and optimized performance",
        ];
      case "Portfolio Website":
        return [
          "Smooth animations with Framer Motion",
          "TypeScript for type safety and reliability",
          "Responsive design with Tailwind CSS",
          "Modern React functional components",
          "Professional UI/UX design",
          "Optimized performance and SEO",
        ];
      default:
        return [];
    }
  };

  const getProjectChallenges = (title: string) => {
    switch (title) {
      case "Learning Management System":
        return [
          "Implementing secure payment processing with Stripe",
          "Managing complex user roles and permissions",
          "Optimizing database queries for large datasets",
        ];
      case "Enterprise Resource Planning System":
        return [
          "Designing scalable RBAC architecture",
          "Managing state across multiple modules",
          "Ensuring data consistency across workflows",
        ];
      case "Movies Trend":
        return [
          "Handling API rate limits and data caching",
          "Creating smooth animations with vanilla CSS",
          "Optimizing performance for large movie datasets",
        ];
      case "Portfolio Website":
        return [
          "Creating smooth animations without performance issues",
          "Ensuring cross-browser compatibility",
          "Optimizing bundle size and loading times",
        ];
      default:
        return [];
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-1">Project Details</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
              >
                <X size={24} className="text-gray-600" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Project Image Carousel */}
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    {project.images.length > 0 ? (
                      <>
                        {/* Main Image */}
                        <motion.img
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          src={project.images[currentImageIndex]}
                          alt={`${project.title} - Image ${
                            currentImageIndex + 1
                          }`}
                          className="w-full h-80 object-cover"
                        />

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={prevImage}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg transition-all duration-200"
                            >
                              <ChevronLeft size={24} />
                            </motion.button>

                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={nextImage}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full shadow-lg transition-all duration-200"
                            >
                              <ChevronRight size={24} />
                            </motion.button>
                          </>
                        )}

                        {/* Image Counter */}
                        {project.images.length > 1 && (
                          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {project.images.length}
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </>
                    ) : (
                      <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <span className="text-white text-4xl font-bold">
                              {project.title.charAt(0)}
                            </span>
                          </div>
                          <p className="text-gray-600">No images available</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Navigation */}
                  {project.images.length > 1 && (
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex justify-center space-x-2 overflow-x-auto">
                        {project.images.map((image, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => goToImage(index)}
                            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0 ${
                              index === currentImageIndex
                                ? "border-blue-500 scale-110"
                                : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            <img
                              src={image}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex-1 justify-center"
                    >
                      <ExternalLink size={20} />
                      View Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex-1 justify-center"
                    >
                      <Github size={20} />
                      View Code
                    </motion.a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Features
                    </h3>
                    <ul className="space-y-2">
                      {getProjectFeatures(project.title).map(
                        (feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2 mt-1">•</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Challenges */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Challenges
                    </h3>
                    <ul className="space-y-2">
                      {getProjectChallenges(project.title).map(
                        (challenge, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">•</span>
                            <span className="text-gray-600">{challenge}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
