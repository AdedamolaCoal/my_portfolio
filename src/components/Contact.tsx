import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email:
          import.meta.env.VITE_CONTACT_EMAIL || "adedamolacoal@gmail.com",
      };
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID || ""
      );
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setError(
        "Failed to send message. Please try again or contact me directly."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="contact-page w-full container sm:pt-12 pt-4 pl-8 p-4 flex flex-col lg:flex-row lg:gap-20 lg:justify-between mb-20"
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

      <div className="mb-14 lg:w-1/2">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12 ml-6"
        >
          <span className="text-6xl sm:text-7xl font-bold text-glow">
            <span className="string-animate-hover _15 text-yellow-400">C</span>
            <span className="string-animate-hover _16 text-yellow-400">o</span>
            <span className="string-animate-hover _17 text-yellow-400">n</span>
            <span className="string-animate-hover _18 text-yellow-400">t</span>
            <span className="string-animate-hover _19 text-yellow-400">a</span>
            <span className="string-animate-hover _20 text-yellow-400">c</span>
            <span className="string-animate-hover _21 text-yellow-400">t</span>
            <span className="string-animate-hover _22 text-yellow-400"> </span>
            <span className="string-animate-hover _23 text-yellow-400">M</span>
            <span className="string-animate-hover _24 text-yellow-400">e</span>
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative">
            {/* Animated Background Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500"></div>

            {/* Main Content Card */}
            <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl font-bold text-white">A</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Damola Akinyomi
                </h3>
                <p className="text-yellow-400 text-lg font-medium mb-4">
                  Full Stack Developer
                </p>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="contact-text pl-6 pr-2 mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'd love to collaborate or chat about exciting opportunities. Feel
            free to reach out through the form below or connect with me
            directly.
          </p>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="text-yellow-400" size={20} />
              <a
                href="mailto:adedamolacoal@gmail.com"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                adedamolacoal@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-yellow-400" size={20} />
              <span className="text-gray-300">Lagos, Nigeria</span>
            </div>
            <div className="flex items-center space-x-3">
              <Github className="text-yellow-400" size={20} />
              <a
                href="https://github.com/adedamolacoal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                github.com/adedamolacoal
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="text-yellow-400" size={20} />
              <a
                href="https://www.linkedin.com/in/adedamola-akinyomi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition-colors"
              >
                linkedin.com/in/adedamola-akinyomi
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="contact-form mt-8 pb-8"
        >
          <form className="grid gap-6 p-2" onSubmit={handleSubmit}>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center space-x-2"
              >
                <CheckCircle size={20} className="text-green-400" />
                <span className="text-green-400">
                  Message sent successfully! I'll get back to you soon.
                </span>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-2"
              >
                <AlertCircle size={20} className="text-red-400" />
                <span className="text-red-400">{error}</span>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              <label htmlFor="name" className="block text-white font-medium">
                Name
                <input
                  id="name"
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="Your name"
                />
              </label>

              <label htmlFor="email" className="block text-white font-medium">
                Email
                <input
                  id="email"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </label>
            </div>

            <label htmlFor="message" className="block text-white font-medium">
              Message
              <textarea
                name="message"
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full mt-2 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200 resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </label>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="place-self-start shadow-lg bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Right Side - Additional Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="w-full lg:w-1/2 p-2 space-y-6"
      >
        {/* Skills Showcase */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            What I Bring to the Table
          </h3>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center p-4 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
              <div className="text-2xl mb-2">⚡</div>
              <h4 className="text-sm font-semibold text-white">
                Fast Delivery
              </h4>
              <p className="text-xs text-gray-300">Quick turnaround times</p>
            </div>
            <div className="text-center p-4 bg-blue-400/10 rounded-lg border border-blue-400/20">
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="text-sm font-semibold text-white">Precision</h4>
              <p className="text-xs text-gray-300">Pixel-perfect designs</p>
            </div>
            <div className="text-center p-4 bg-green-400/10 rounded-lg border border-green-400/20">
              <div className="text-2xl mb-2">🔧</div>
              <h4 className="text-sm font-semibold text-white">Clean Code</h4>
              <p className="text-xs text-gray-300">Maintainable solutions</p>
            </div>
            <div className="text-center p-4 bg-purple-400/10 rounded-lg border border-purple-400/20">
              <div className="text-2xl mb-2">🚀</div>
              <h4 className="text-sm font-semibold text-white">Innovation</h4>
              <p className="text-xs text-gray-300">Modern technologies</p>
            </div>
          </div>
        </div>

        {/* Availability Status */}
        <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 shadow-2xl">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <h3 className="text-xl font-bold text-white">
              Currently Available
            </h3>
          </div>
          <p className="text-gray-300 mb-4">
            I'm open to new opportunities and exciting projects. Let's discuss
            how I can help bring your ideas to life!
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
              Angular Development
            </span>
            <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
              React Projects
            </span>
            <span className="px-3 py-1 bg-green-400/20 text-green-400 text-sm rounded-full border border-green-400/30">
              Full Stack
            </span>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            Fun Facts About Me
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p className="text-gray-300 text-sm">
                Graduated from ALX Full-Stack Software Engineering Program
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p className="text-gray-300 text-sm">
                Microsoft Azure certified professional
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p className="text-gray-300 text-sm">
                Passionate about creating user-friendly experiences
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <p className="text-gray-300 text-sm">
                Always learning new technologies and frameworks
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/20 shadow-2xl text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-300 mb-4">
            Let's discuss your ideas and create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="mailto:adedamolacoal@gmail.com"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://github.com/adedamolacoal"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              View GitHub
            </a>
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

export default Contact;
