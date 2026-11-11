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

  // ----- Slider controls -----
  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };
  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImage((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  // ----- Lightbox -----
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const nextLightbox = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % project.images.length);
  };
  const prevLightbox = (e) => {
    if (e) e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? project.images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox(e);
      if (e.key === "ArrowLeft") prevLightbox(e);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  // ----- Video type detection -----
  const isYouTube = project.video?.includes("youtube.com/embed");
  const isLinkedIn = project.video?.includes("linkedin.com/embed");

  return (
    <>
      {/* ========== CARD ========== */}
      <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-slate-700/60 via-slate-800 to-slate-900 hover:from-blue-500/60 hover:via-purple-500/40 hover:to-blue-500/60 transition-all duration-500 h-full">
        <div className="bg-slate-800 rounded-3xl overflow-hidden h-full flex flex-col relative">
          {/* Subtle glow behind card on hover */}
          <div className="absolute -inset-1 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 rounded-3xl blur-xl transition-all duration-500 pointer-events-none" />

          {/* Framed Thumbnail */}
          <div className="p-4 pb-2 relative">
            <div className="relative rounded-2xl bg-slate-950/70 border border-white/5 p-2 shadow-inner group-hover:border-blue-500/30 transition-colors duration-300">
              <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-slate-950 to-slate-900 aspect-[16/10]">
                <img
                  src={project.images[currentImage]}
                  alt={project.title}
                  className="w-full h-full object-contain p-1 cursor-pointer"
                  onClick={() => openLightbox(currentImage)}
                />

                {/* Arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/60 backdrop-blur text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-500 transition opacity-0 group-hover:opacity-100"
                    >
                      <FaChevronLeft size={12} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/60 backdrop-blur text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-500 transition opacity-0 group-hover:opacity-100"
                    >
                      <FaChevronRight size={12} />
                    </button>
                  </>
                )}

                {/* Dots */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {project.images.map((_, idx) => (
                    <span
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${idx === currentImage
                        ? "bg-blue-500 w-4"
                        : "bg-white/40 w-1.5"
                        }`}
                    />
                  ))}
                </div>

                {/* Hover hint - bottom center */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  <span className="text-white text-xs bg-black/70 backdrop-blur px-3 py-1 rounded-full border border-white/10">
                    🔍 Click to preview
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 pb-5 pt-2 flex flex-col flex-1">
            <h3 className="text-xl font-bold mb-1 text-white">{project.title}</h3>
            <h4 className="text-blue-400 text-xs mb-3 font-medium">{project.subtitle}</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-slate-700/60 text-slate-300 rounded-md text-[11px] border border-white/5"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 min-w-[70px]">
                  <button className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-blue-500 text-white rounded-xl text-xs font-medium hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                    <FaExternalLinkAlt size={10} /> Live
                  </button>
                </a>
              )}
              {project.video && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="flex-1 min-w-[70px] flex items-center justify-center gap-1.5 px-3 py-2 bg-purple-500 text-white rounded-xl text-xs font-medium hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  <FaPlay size={10} /> Demo
                </button>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 min-w-[70px]">
                  <button className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-700 text-white rounded-xl text-xs font-medium hover:bg-slate-600 transition-all">
                    <FaGithub size={10} /> GitHub
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ========== VIDEO MODAL ========== */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setShowVideo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl ${project.videoOrientation === "portrait"
                  ? "max-w-sm h-[80vh]"
                  : "max-w-4xl aspect-video"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-3 right-3 text-white text-3xl z-10 bg-black/50 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                <FaTimes size={18} />
              </button>

              {isYouTube && (
                <iframe
                  src={project.video}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="Demo Video"
                />
              )}

              {isLinkedIn && (
                <iframe
                  src={project.video}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  title="LinkedIn Demo Video"
                />
              )}

              {!isYouTube && !isLinkedIn && (
                <video controls autoPlay className="w-full h-full" src={project.video} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========== LIGHTBOX ========== */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-2xl z-10 bg-black/60 w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-500 transition"
              >
                <FaTimes size={16} />
              </button>

              <div className="flex items-center justify-center p-4 bg-slate-950 min-h-[60vh]">
                <img
                  src={project.images[lightboxIndex]}
                  alt={`${project.title} - ${lightboxIndex + 1}`}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
              </div>

              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevLightbox}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-blue-500 transition"
                  >
                    <FaChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextLightbox}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-blue-500 transition"
                  >
                    <FaChevronRight size={20} />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-2 rounded-full transition-all cursor-pointer ${idx === lightboxIndex
                          ? "bg-blue-500 w-6"
                          : "bg-white/40 w-2"
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

              <div className="absolute top-4 left-4 text-white/70 text-xs bg-black/50 backdrop-blur px-3 py-1 rounded-full">
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