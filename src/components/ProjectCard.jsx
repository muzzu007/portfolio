import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaTimes,
} from "react-icons/fa";

function ProjectCard({ project }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // ----- Slider controls (inside card) -----
  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  // ----- Lightbox controls (modal) -----
  const openLightbox = (index) => { // Debug
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    
    setLightboxOpen(false);
  };

  const nextLightbox = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevLightbox = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  // ----- Keyboard shortcuts for lightbox -----
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox(e);
      if (e.key === "ArrowLeft") prevLightbox(e);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]); // dependencies: only lightboxOpen

  return (
    <>
      <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
        {/* Image Slider */}
        <div className="relative overflow-hidden h-52 bg-slate-900 flex-shrink-0 group">
          {/* Click on image opens lightbox */}
          <img
            src={project.images[currentImage]}
            alt={project.title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105 cursor-pointer"
            onClick={() => openLightbox(currentImage)}
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
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImage ? "bg-blue-500 scale-125" : "bg-white/40"
                }`}
              />
            ))}
          </div>
          {/* Click hint */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 pointer-events-none">
            <span className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
              Click to Preview
            </span>
          </div>
        </div>

        {/* Content (unchanged) */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
          <h4 className="text-blue-400 text-sm mb-3">{project.subtitle}</h4>
          <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-700 rounded-full text-xs">
                {tech}
              </span>
            ))}
          </div>
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

      {/* Video Modal (unchanged) */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white text-3xl z-10 hover:text-red-400 transition"
              >
                &times;
              </button>
              {project.video.includes("youtube.com/embed") ? (
                <iframe
                  src={project.video}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Demo Video"
                />
              ) : (
                <video controls className="w-full h-full" src={project.video} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-red-400 transition"
              >
                <FaTimes />
              </button>

              {/* Image container */}
              <div className="flex items-center justify-center p-4 bg-slate-950 min-h-[60vh]">
                <img
                  src={project.images[lightboxIndex]}
                  alt={`${project.title} - ${lightboxIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Navigation arrows */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevLightbox}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-blue-500 transition"
                  >
                    <FaChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextLightbox}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-blue-500 transition"
                  >
                    <FaChevronRight size={24} />
                  </button>

                  {/* Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                          idx === lightboxIndex ? "bg-blue-500 scale-125" : "bg-white/40"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setLightboxIndex(idx);
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Image counter */}
              <div className="absolute top-4 left-4 text-white/60 text-sm bg-black/40 px-3 py-1 rounded-full">
                {lightboxIndex + 1} / {project.images.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectCard;