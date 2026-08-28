import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));

  return (
    <>
      <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image Slider */}
        <div className="relative overflow-hidden h-52 bg-slate-900 flex-shrink-0">
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-full object-cover transition duration-500"
          />
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white border-none w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white border-none w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
              >
                <FaChevronRight />
              </button>
            </>
          )}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {project.images.map((_, idx) => (
              <span
                key={idx}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentImage ? "bg-blue-500 scale-125" : "bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
          <h4 className="text-blue-400 text-sm mb-3">{project.subtitle}</h4>
          <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-700 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons: Live, Demo, GitHub */}
          <div className="flex flex-wrap gap-3 mt-auto">
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 min-w-[80px]">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition">
                  <FaExternalLinkAlt /> Live
                </button>
              </a>
            )}
            {project.video && (
              <button
                onClick={() => setShowVideo(true)}
                className="flex-1 min-w-[80px] flex items-center justify-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition"
              >
                <FaPlay /> Demo
              </button>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 min-w-[80px]">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-600 text-white rounded-full text-sm hover:bg-slate-500 transition">
                  <FaGithub /> GitHub
                </button>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {/* Video Modal */}
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-white text-4xl z-10 hover:text-red-400 transition"
              >
                &times;
              </button>
              {/* Use <video> tag for local file */}
              <video
                controls
                autoPlay
                muted // optional: autoplay with sound may be blocked; mute to ensure autoplay
                className="w-full h-full"
                src={project.video}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectCard;