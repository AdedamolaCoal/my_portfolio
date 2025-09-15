import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Code,
  Coffee,
  Rocket,
} from "lucide-react";

const Hero = () => {
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = [
    "Angular",
    "TypeScript",
    "Node.js",
    "Ionic",
    "NgRx",
    "Docker",
    "Azure",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [technologies.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center gap-4 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-green-400/10 rounded-full blur-xl animate-pulse delay-700"></div>
      </div>

      {/* HTML Comment Elements */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-yellow-400 fixed sm:top-5 top-20 left-8 sm:left-20 font-Aurore -scroll-my-2.5"
      >
        &lt;html&gt;
      </motion.span>
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-yellow-400 fixed sm:top-12 top-20 left-8 sm:left-28 font-Aurore -scroll-my-2.5"
      >
        &lt;body&gt;
      </motion.span>

      <div className="home-page flex items-center gap-4 relative z-10">
        <div className="container w-full pl-10 transition-all duration-500">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-4xl sm:text-5xl mb-6"
          >
            <span className="string-animate-hover">H</span>
            <span className="string-animate-hover _12">i,</span>
            <span className="string-animate-hover _13">&nbsp;</span>
            <span className="string-animate-hover _14">I</span>
            <span className="string-animate-hover _15">'m</span>
            <span className="string-animate-hover _16">&nbsp;</span>
            <span className="string-animate-hover _17">D</span>
            <span className="string-animate-hover _18">a</span>
            <span className="string-animate-hover _19">m</span>
            <span className="string-animate-hover _20">o</span>
            <span className="string-animate-hover _21">l</span>
            <span className="string-animate-hover _22">a</span>
            <br />
            <span className="string-animate-hover _23">A</span>
            <span className="string-animate-hover _24">&nbsp;</span>
            <span className="string-animate-hover _25">F</span>
            <span className="string-animate-hover _26">u</span>
            <span className="string-animate-hover _27">l</span>
            <span className="string-animate-hover _28">l</span>
            <span className="string-animate-hover _29">S</span>
            <span className="string-animate-hover _30">t</span>
            <span className="string-animate-hover _31">a</span>
            <span className="string-animate-hover _32">c</span>
            <span className="string-animate-hover _33">k</span>
            <span className="string-animate-hover _34">&nbsp;</span>
            <span className="string-animate-hover _35">D</span>
            <span className="string-animate-hover _36">e</span>
            <span className="string-animate-hover _37">v</span>
            <span className="string-animate-hover _38">e</span>
            <span className="string-animate-hover _39">l</span>
            <span className="string-animate-hover _40">o</span>
            <span className="string-animate-hover _41">p</span>
            <span className="string-animate-hover _42">e</span>
            <span className="string-animate-hover _43">r</span>
          </motion.h1>

          {/* Dynamic Technology Display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-6"
          >
            <div className="flex items-center space-x-2 mb-2">
              <Code className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300 text-lg">Specializing in:</span>
            </div>
            <motion.div
              key={currentTech}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-yellow-400"
            >
              {technologies[currentTech]}
            </motion.div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="text-center p-3 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-lg border border-yellow-400/20">
              <div className="text-xl font-bold text-yellow-400">3+</div>
              <div className="text-xs text-gray-300">Years Exp</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-lg border border-blue-400/20">
              <div className="text-xl font-bold text-blue-400">25+</div>
              <div className="text-xs text-gray-300">Technologies</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-green-400/10 to-green-500/10 rounded-lg border border-green-400/20">
              <div className="text-xl font-bold text-green-400">4</div>
              <div className="text-xs text-gray-300">Certifications</div>
            </div>
            <div className="text-center p-3 bg-gradient-to-br from-purple-400/10 to-purple-500/10 rounded-lg border border-purple-400/20">
              <div className="text-xl font-bold text-purple-400">∞</div>
              <div className="text-xs text-gray-300">Passion</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-btn text-yellow-400 hover:bg-yellow-400 hover:text-slate-700 px-6 py-3 border-2 border-yellow-400 hover:transition-all whitespace-nowrap rounded-lg font-medium flex items-center gap-2"
              href="#contact"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cta-btn bg-yellow-400 text-slate-700 hover:bg-yellow-500 px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-all"
              href="/public/assets/adedamolas_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={20} />
              Download CV
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center space-x-4"
          >
            <span className="text-gray-300 text-sm">Connect with me:</span>
            <div className="flex space-x-3">
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://github.com/adedamolacoal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="https://www.linkedin.com/in/adedamola-akinyomi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -2 }}
                href="mailto:adedamolacoal@gmail.com"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Profile Image Container - Hidden on smaller screens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="hidden profile-img-container lg:flex items-center justify-around w-full"
        >
          <div className="relative">
            <motion.img
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="rounded-full border-8 border-yellow-400 profile-img shadow-2xl"
              alt="profile pic"
              width="350"
              height="350"
              src="/public/assets/adedamola2.jpg"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <Coffee className="w-5 h-5 text-black" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Animated SVG Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="logo-container absolute transition-all duration-500 top-20 right-2 sm:left-1/3 sm:mt-16 md:top-5 max flex items-center justify-center"
        >
          <svg
            className="w-56 h-80"
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            viewBox="0 0 659 697"
            preserveAspectRatio="xMidYMid meet"
          >
            <metadata>Created by Damola Akinyomi</metadata>
            <g
              className="svg-container"
              transform="translate(0,897) scale(0.7,-0.7)"
              fill="none"
              stroke="2"
            >
              <path
                d="m149.8 141.866 2.796-.007q4.665-.007 9.33-.004l6.666-.01q9.073-.013 18.148-.012 7.564-.002 15.128-.008a45119 45119 0 0 1 35.676-.01h2.042q16.39-.002 32.779-.023 16.816-.023 33.633-.02 9.445.001 18.892-.014 8.88-.014 17.76-.003 3.267.003 6.532-.007c2.964-.008 5.927-.003 8.89.005l2.635-.016c5.95.035 5.95.035 9.293 2.263.385 1.865.385 1.865.399 4.179l.038 2.659-.005 2.928.031 3.082c.03 3.396.04 6.791.049 10.187q.026 3.582.054 7.163c.048 6.335.077 12.67.104 19.005.029 6.278.076 12.556.121 18.834.135 19.81.216 39.617.204 59.427-.014 24.27.09 48.54.207 72.81q.043 9.106.084 18.213l.214 46.076.231 49.809.1 21.434.092 19.842a4540 4540 0 0 1 .05 36.172q-.014 6.62-.05 13.24l-.013 4.616-.018 2.091c-.004 3.23.118 6.144 1.108 9.233a2812 2812 0 0 0 16.375-23.812 5838 5838 0 0 1 17.336-25.315q1.927-2.8 3.848-5.603a3730 3730 0 0 1 16.191-23.395 2335 2335 0 0 0 16-23.25 1293 1293 0 0 1 14.976-21.58c6.251-8.817 12.342-17.744 18.43-26.674 5.752-8.432 11.55-16.826 17.454-25.152 3.876-5.471 7.69-10.982 11.474-16.517q3.615-5.283 7.295-10.522c3.628-5.175 7.192-10.391 10.746-15.617l3.957-5.81q2.857-4.194 5.712-8.39c5.789-8.504 11.608-16.973 17.623-25.318 2.825-3.938 5.539-7.938 8.208-11.982 4.918-7.451 10.02-14.768 15.13-22.087 4.711-6.753 9.37-13.54 13.995-20.351 4.332-6.38 8.71-12.72 13.187-19 5.558-7.799 10.844-15.769 16.134-23.75a732 732 0 0 1 13.564-19.72 962 962 0 0 0 10.802-15.53l1.62-2.369q4.26-6.238 8.478-12.506l1.758-2.6q1.661-2.455 3.306-4.921l1.526-2.252 1.32-1.967L661 147l1.975-2.587c4.29-3.422 7.642-3.102 12.983-3.028l3.063-.017c3.391-.013 6.782.01 10.173.033q3.645-.003 7.288-.012c5.915-.01 11.83.005 17.746.03 6.886.028 13.773.03 20.66.03 12.284 0 24.57.025 36.854.064q17.889.057 35.777.061l2.226.001h2.223l4.43.002h2.207c11.36.004 22.72.022 34.08.042q6.178.01 12.358.015 10.714.008 21.428.048 3.564.012 7.127.012 4.849.005 9.698.032l2.875-.007 2.616.02 2.262.007C913 142 913 142 916 144c.915 4.708-1.38 7.848-3.875 11.625l-1.313 2.046c-5.206 8.055-10.58 16.003-15.917 23.97-6.606 9.868-12.996 19.864-19.338 29.904a1323 1323 0 0 1-7.245 11.268l-1.352 2.086L863 231q-2.596 4-5.188 8l-1.338 2.066a2350 2350 0 0 0-8.302 12.93c-6.56 10.286-13.145 20.547-19.943 30.677-5.173 7.714-10.202 15.518-15.229 23.327-5.242 8.138-10.488 16.27-15.875 24.313-7.953 11.88-15.778 23.848-23.313 36a461 461 0 0 1-9.437 14.625c-4.459 6.62-8.77 13.332-13.063 20.062a3464 3464 0 0 1-21.436 33.13q-4.818 7.37-9.626 14.745l-1.896 2.905a4480 4480 0 0 0-12.501 19.29 911 911 0 0 1-8.916 13.493A499 499 0 0 0 687 502a544 544 0 0 1-10.9 16.868c-3.896 5.803-7.721 11.651-11.538 17.507l-1.77 2.715a3378 3378 0 0 0-8.213 12.662c-6.915 10.718-13.916 21.376-20.945 32.02-9.401 14.237-18.786 28.485-28.091 42.787a8118 8118 0 0 1-14.608 22.354c-4.344 6.633-8.698 13.258-13.123 19.837-4.864 7.237-9.524 14.605-14.187 21.973a606 606 0 0 1-12.172 18.382l-2.807 4.106a550 550 0 0 1-4.163 6.019 486 486 0 0 0-3.866 5.598l-2.262 3.247c-1.661 2.798-1.661 2.798-.756 5.475L539 736l1.306 2.59 1.495 2.777 1.691 3.147 1.82 3.361 1.893 3.505c4.551 8.411 9.226 16.748 13.96 25.057 4.526 7.965 8.896 16.01 13.241 24.075 2.98 5.526 5.994 11.028 9.094 16.488 3.651 6.432 7.178 12.927 10.687 19.438 4.507 8.357 9.09 16.664 13.75 24.937 4.888 8.68 9.67 17.408 14.375 26.188 6.582 12.272 13.376 24.397 20.291 36.484l4.128 7.215c10.017 17.514 19.88 35.104 29.45 52.867 4.173 7.727 8.465 15.38 12.804 23.016A2431 2431 0 0 1 701.5 1029.5a3386 3386 0 0 0 15.654 27.933c3.994 7.05 7.956 14.118 11.908 21.192 4.31 7.714 8.66 15.402 13.063 23.063 4.574 7.962 8.997 16 13.371 24.073 3.95 7.272 8.03 14.463 12.151 21.639 4.37 7.611 8.643 15.274 12.89 22.954q4.537 8.202 9.088 16.396l.997 1.796c4.035 7.266 8.1 14.511 12.245 21.716 3.603 6.287 7.115 12.625 10.651 18.95q5.93 10.599 11.92 21.163a2863 2863 0 0 1 13.874 24.813 2328 2328 0 0 0 17.031 30.172c4.383 7.645 8.729 15.307 12.987 23.022 4.038 7.31 8.162 14.572 12.294 21.83 7.474 13.17 7.474 13.17 6.938 16.538-2.171 3.127-3.879 3.322-7.562 4.25-3.068.278-6.12.279-9.199.267l-2.778.014c-3.068.013-6.135.011-9.203.01q-3.302.008-6.604.02c-5.975.018-11.95.022-17.925.024q-7.477.004-14.956.016-16.629.022-33.257.02h-4.031c-10.796-.001-21.592.018-32.388.046q-16.631.043-33.263.04c-6.224 0-12.448.006-18.673.027q-8.773.029-17.546.005a980 980 0 0 0-6.449.015c-2.928.015-5.855.006-8.783-.01l-2.594.032c-5.747-.068-5.747-.068-8.817-2.398-1.751-2.43-3.108-4.842-4.417-7.538l-1.58-3.217-1.662-3.435q-1.761-3.584-3.527-7.165l-1.742-3.54a475 475 0 0 0-6.294-12.17c-4.838-9.101-9.544-18.268-14.25-27.438-5.024-9.791-10.06-19.575-15.187-29.312-4.41-8.381-8.673-16.827-12.875-25.313q-2.495-5.034-5-10.062l-1.267-2.547a499 499 0 0 0-9.397-17.9C575 1215.21 575 1215.21 575 1213l-2-1a170 170 0 0 1-3.5-7.375 340 340 0 0 0-9.188-18.562c-4.067-7.625-7.967-15.324-11.812-23.063-4.024-8.09-8.107-16.139-12.346-24.119-4.398-8.296-8.678-16.653-12.967-25.006-11.376-22.155-22.81-44.282-34.523-66.262l-1.167-2.193q-1.05-1.97-2.103-3.938c-2.434-4.57-4.757-9.192-7.066-13.826-4.58-9.192-9.26-18.333-13.953-27.468l-1.318-2.568q-3.93-7.654-7.867-15.307l-3.283-6.385c-6.21-12.082-12.508-24.1-19.073-35.993-5.753-10.492-11.166-21.161-16.605-31.818C412.6 901.01 408.945 893.94 405 887c-2.371 2.204-4.033 4.458-5.715 7.219l-1.563 2.548-1.66 2.733-3.492 5.695c-.591.965-1.182 1.93-1.792 2.923-3.223 5.223-6.519 10.4-9.819 15.575l-1.4 2.205-1.21 1.896L377 930l-2.05 3.104c-2.357 4.162-2.527 7.723-2.498 12.431-.01.841-.02 1.682-.032 2.548-.03 2.83-.032 5.658-.034 8.488a3184 3184 0 0 0-.132 23.348c-.016 4.944-.047 9.888-.077 14.832-.361 59.356-.2 118.716-.118 178.073l.003 2.666q.046 32.706.115 65.41.049 22.93.065 45.861.01 13.988.052 27.977.029 9.465.027 18.928-.002 5.446.023 10.892c.02 3.923.016 7.846.01 11.77l.029 3.489-.017 3.163.005 2.738c-.448 2.757-1.142 3.642-3.371 5.282-2.741.43-2.741.43-6.134.506l-3.906.105q-2.154.034-4.31.066l-4.56.1c-19.122.396-38.252.388-57.378.39l-9.453.006q-16.531.014-33.063.012-15.363.001-30.727.026-13.275.019-26.552.018-7.896-.002-15.79.013-7.38.014-14.761.003-2.707-.003-5.413.007c-2.458.008-4.916.003-7.374-.005l-2.17.016c-3.665-.026-6.365-.155-9.409-2.263-.605-2.066-.605-2.066-.742-4.562l-.168-2.727L137 1360l-.079-2.27a275 275 0 0 1-.047-6.738l-.005-2.587c-.004-2.85 0-5.7.002-8.55l-.005-6.231q-.006-8.58 0-17.162 0-9.328-.007-18.656-.007-16.355-.005-32.71.002-17.547-.004-35.094v-2.24l-.003-9.03a309409 309409 0 0 1-.014-104.32v-2.54q-.001-27.865-.005-55.732l-.003-22.945v-2.561a1037351 1037351 0 0 1-.01-191.675 686786 686786 0 0 0-.031-216.99v-2.718q-.01-41.429-.012-82.857V451.19q0-40.512-.015-81.024a145415 145415 0 0 1-.002-92.826l.001-2.23a43018 43018 0 0 0-.01-35.012q-.01-17.196.002-34.39.007-9.207-.003-18.412-.011-8.363.003-16.724.003-3.018-.005-6.037c-.007-2.718-.001-5.437.007-8.155l-.014-2.38c.027-4.083.293-7.38 2.264-11.001 3.347-1.674 7.12-1.14 10.8-1.134M146 152v1210h217l-.035-61.125a352166 352166 0 0 1-.02-60.018v-2.624q-.006-17.95-.019-35.903l-.017-27.422a20271 20271 0 0 1 .038-59.564l.005-2.467.035-17.163c.04-19.15.004-38.295-.17-57.444-.108-12-.17-24-.197-36.001-.018-6.935-.061-13.867-.176-20.801-.83-52.764-.83-52.764 14.829-69.551 2.467-2.738 4.162-5.668 5.973-8.87l1.645-2.728 1.546-2.569q2.535-4.16 5.078-8.315 1.396-2.286 2.77-4.58a375 375 0 0 1 3.215-5.23l1.656-2.71c2.446-2.54 4.402-2.654 7.844-2.915 3.898 6.042 7.286 12.229 10.562 18.625a985 985 0 0 0 12.313 23.125c5.151 9.365 10.078 18.836 14.97 28.338a755 755 0 0 0 11.03 20.6c3.385 6.092 6.643 12.216 9.72 18.47 3.669 7.432 7.476 14.791 11.28 22.155l1.063 2.057c6.315 12.22 12.654 24.43 19.164 36.548 4.804 8.946 9.391 17.983 13.898 27.082 5.217 10.525 10.488 21.01 15.984 31.393 5.421 10.246 10.744 20.544 16.068 30.84q1.987 3.844 3.978 7.685c8.259 15.944 16.426 31.926 24.425 48.002 4.266 8.571 8.6 17.097 13.101 25.548 3.349 6.3 6.531 12.677 9.702 19.068a695 695 0 0 0 8.554 16.589c4.02 7.565 7.875 15.204 11.688 22.875a1246 1246 0 0 0 15.212 29.562c1.396 2.642 2.775 5.293 4.151 7.946 5.531 10.663 11.138 21.273 16.953 31.784 3.58 6.5 6.857 13.054 10.184 19.708h216c-1.787-5.363-1.787-5.363-4.258-10.195l-1.37-2.374-1.497-2.556-3.27-5.656-1.768-3.047a3492 3492 0 0 1-9.65-16.797l-1.019-1.781c-5.657-9.89-11.216-19.831-16.734-29.8A2384 2384 0 0 0 825.5 1268.5a2954 2954 0 0 1-14-25 3369 3369 0 0 0-15.643-27.913 3968 3968 0 0 1-13.926-24.814 793 793 0 0 0-8.47-14.824 475 475 0 0 1-7.898-14.06c-3.032-5.604-6.113-11.183-9.188-16.764l-1.06-1.922a1662 1662 0 0 0-14.808-26.314c-4.705-8.194-9.282-16.457-13.86-24.721a3004 3004 0 0 0-14.09-25.108 1766 1766 0 0 1-9.37-16.747c-3.86-6.986-7.813-13.915-11.786-20.837-7.948-13.854-15.704-27.807-23.388-41.809a11898 11898 0 0 0-11.214-20.382 2535 2535 0 0 0-14.936-26.687c-8.99-15.861-17.838-31.8-26.488-47.848-4.66-8.646-9.437-17.217-14.29-25.757A2214 2214 0 0 1 588 843.563l-1.027-1.862a3361 3361 0 0 1-15.226-27.981c-4.432-8.197-8.998-16.316-13.611-24.413l-1.554-2.729-1.368-2.393c-1.132-2.038-2.178-4.098-3.214-6.185-2-3.761-4.033-7.504-6.063-11.25l-1.757-3.245a1182 1182 0 0 0-11.463-20.682A907 907 0 0 1 530 738l-1.238-2.047c-1.128-2.89-1.149-4.864-.762-7.953a65 65 0 0 1 4.375-6.937l2.79-4.024 1.441-2.05c2.093-2.987 4.122-6.016 6.144-9.051l1.216-1.819c3.764-5.652 7.4-11.383 11.034-17.119a1035 1035 0 0 1 15.579-23.886C588.645 636.247 606.333 609.13 624 582a9506 9506 0 0 1 20.297-31.07l1.395-2.125q3.404-5.184 6.812-10.365a2163 2163 0 0 0 13.308-20.475c3.41-5.318 6.857-10.613 10.313-15.902l3.93-6.02 1.99-3.05q2.797-4.281 5.588-8.567a7937 7937 0 0 1 15.972-24.442c8.233-12.535 16.416-25.095 24.477-37.741 5.45-8.54 10.99-17.019 16.548-25.49a2211 2211 0 0 0 14.807-22.94c4.615-7.236 9.264-14.44 14.051-21.562 4.464-6.646 8.793-13.378 13.13-20.107 9.973-15.468 19.973-30.92 30.081-46.3l4.988-7.594 1.25-1.904c5.06-7.71 10.066-15.446 14.914-23.29 2.914-4.711 5.96-9.32 9.051-13.915 5.793-8.673 11.397-17.472 17.008-26.262 12.496-19.575 12.496-19.575 18.42-28.393 3.56-5.3 7.059-10.638 10.545-15.986l1.66-2.538 1.582-2.43 1.394-2.14c1.24-1.993 2.42-4.001 3.582-6.042L903 152a19569 19569 0 0 0-89.022-.562q-5.258-.02-10.514-.042l-2.114-.009a7179 7179 0 0 1-33.875-.236q-17.385-.153-34.769-.186c-6.508-.014-13.016-.048-19.524-.128-6.127-.075-12.252-.098-18.38-.081a387 387 0 0 1-6.743-.067c-11.716-.666-11.716-.666-22.085 3.66-2.08 2.811-3.522 5.48-4.974 8.651a175 175 0 0 1-3.605 5.219q-1.794 2.639-3.583 5.281l-3.953 5.816-1.97 2.903c-9.626 14.172-19.374 28.255-29.168 42.31a2500 2500 0 0 0-16.074 23.34c-5.116 7.523-10.247 15.03-15.522 22.444-7.23 10.165-14.19 20.514-21.19 30.837-7.223 10.638-14.567 21.187-21.955 31.71-3.046 4.347-6.057 8.709-8.98 13.14-4.003 6.068-8.19 12-12.37 17.947a1507 1507 0 0 0-13.255 19.24 1249 1249 0 0 1-14.962 21.559c-4.212 5.94-8.322 11.947-12.422 17.964a1495 1495 0 0 1-11.866 17.103c-6.9 9.823-13.66 19.74-20.41 29.667-6.08 8.935-12.212 17.83-18.465 26.645-5.224 7.366-10.318 14.816-15.393 22.286-5.328 7.835-10.728 15.619-16.148 23.39a2387 2387 0 0 0-11.459 16.574 1578 1578 0 0 1-11.875 17.063l-1.581 2.245-1.458 2.063-1.295 1.834C371 583 371 583 370 584c-1.666.04-3.334.043-5 0-1.712-3.423-1.172-7.354-1.19-11.123l-.025-2.952q-.039-5.036-.066-10.073l-.055-7.479q-.068-9.476-.123-18.952-.048-7.935-.1-15.87c-.548-83.333-.78-166.669-1.136-271.943l-.008-2.21Q362.146 197.699 362 152z"
                style={{
                  strokeDashoffset: "0px",
                  strokeDasharray: "11100.3px, 0.1px",
                }}
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </g>
          </svg>
        </motion.div>
      </div>

      {/* HTML Comment Elements */}
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        className="text-yellow-400 fixed bottom-12 left-8 sm:left-28 font-Aurore"
      >
        &lt;/body&gt;
      </motion.span>
      <br />
      <motion.span
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="text-yellow-400 fixed bottom-5 sm:left-20 font-Aurore"
      >
        &lt;/html&gt;
      </motion.span>
    </section>
  );
};

export default Hero;
