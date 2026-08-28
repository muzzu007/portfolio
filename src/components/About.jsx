import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCode, FaFilePdf, FaTimes, FaDownload } from "react-icons/fa";

function About() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [fitScale, setFitScale] = useState(1);

  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const resetZoom = () => setScale(1);

  const computeFitScale = () => {
    if (!containerRef.current || !imgRef.current) return 1;
    const containerWidth = containerRef.current.clientWidth - 32;
    const imgNaturalWidth = imgRef.current.naturalWidth;
    if (imgNaturalWidth === 0) return 1;
    const fit = Math.min(1, containerWidth / imgNaturalWidth);
    return Math.max(fit, 0.3);
  };

  const toggleZoom = () => {
    if (scale === 1) {
      const newFit = computeFitScale();
      setFitScale(newFit);
      setScale(newFit);
    } else {
      setScale(1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (scale === fitScale && scale !== 1) {
        const newFit = computeFitScale();
        setFitScale(newFit);
        setScale(newFit);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [scale, fitScale]);

  return (
    <section id="about" className="py-28 px-[8%]">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto"
      >
        <h2 className="text-center text-4xl md:text-5xl text-white mb-16">About Me</h2>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 md:gap-16 items-center mb-16">
          <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex justify-center items-center text-7xl md:text-9xl text-white shadow-2xl shadow-blue-500/25 mx-auto">
            <FaCode />
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl mb-6">Hi, I'm Muzammil 👋</h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-4">
              BCA graduate with a focus on full-stack web development and software logic.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Experienced in building hands-on projects using Python, SQL, JavaScript, React, Node.js, and MongoDB. <br />I like solving practical tech problems, working with databases, and building clear, user-friendly applications.
              Currently looking for entry-level opportunities in software development.
            </p>

            {/* Resume Buttons */}
            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
              <button
                onClick={() => setIsResumeOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition hover:-translate-y-1"
              >
                <FaFilePdf /> Preview Resume
              </button>
              <a
                href="resume/Muzammil_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition hover:-translate-y-1"
              >
                <FaDownload /> Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-4xl text-blue-500 font-bold mb-3">1+</h3>
            <p className="text-slate-300">Years Learning</p>
          </div>
          <div className="bg-slate-800 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-4xl text-blue-500 font-bold mb-3">3+</h3>
            <p className="text-slate-300">Projects</p>
          </div>
          <div className="bg-slate-800 rounded-2xl p-8 text-center hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-4xl text-blue-500 font-bold mb-3">10+</h3>
            <p className="text-slate-300">Technologies</p>
          </div>
        </div>
      </motion.div>

      {/* Resume Modal */}
      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => {
              setIsResumeOpen(false);
              resetZoom();
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl h-[90vh] bg-slate-900 rounded-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-slate-800/50 backdrop-blur-sm border-b border-white/10">
                <h3 className="text-white font-semibold">Resume Preview</h3>
                <div className="flex items-center gap-3">
                  <span className="text-slate-300 text-sm min-w-[40px] text-center">
                    {Math.round(scale * 100)}%
                  </span>
                  <button
                    onClick={resetZoom}
                    className="text-slate-400 text-xs px-2 py-1 border border-slate-600 rounded hover:bg-slate-700 transition"
                  >
                    Reset
                  </button>
                  <div className="w-px h-6 bg-white/20 mx-1" />
                  <a
                    href="resume/Muzammil_Resume.pdf"
                    download
                    className="text-white hover:text-blue-400 transition flex items-center gap-1 text-sm px-2 py-1 border border-slate-600 rounded hover:border-blue-400"
                  >
                    <FaDownload /> PDF
                  </a>
                  <button
                    onClick={() => {
                      setIsResumeOpen(false);
                      resetZoom();
                    }}
                    className="text-white text-3xl hover:text-red-400 transition ml-2"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              {/* Scrollable image with hint */}
              <div
                ref={containerRef}
                className="flex-1 overflow-y-auto p-4 bg-slate-950 flex flex-col items-center"
              >
                <div className="text-slate-500 text-xs mb-2 select-none">
                  Double‑click image to toggle zoom
                </div>
                <div
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "top center",
                    transition: "transform 0.25s ease-out",
                    display: "inline-block",
                  }}
                >
                  <img
                    ref={imgRef}
                    src="resume/Muzammil_resume.png"
                    alt="Resume Preview"
                    className="shadow-2xl rounded-lg select-none"
                    onDoubleClick={toggleZoom}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default About;