import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section className="min-h-screen flex justify-center items-center px-[8%] pt-[90px] relative overflow-hidden bg-slate-900 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),_transparent_35%),_radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.12),_transparent_35%)]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[800px] text-center z-10"
      >
        <p className="text-slate-400 text-xl mb-4">👋 Hello, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-tight">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Muzammil
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            "Python", 2000,
            "SQL", 2000,
            "React.js", 2000,
            "JavaScript", 2000,
            "Node.js", 2000,
            "Express.js", 2000,
            "MongoDB", 2000,
            "SQLite", 2000,
            "REST APIs", 2000,
            "AI-Assisted Coding", 2000,
            "Git & Github", 2000,
            "HTML & CSS", 2000,
            "Networking", 2000,
            "Linux", 2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-white text-2xl md:text-4xl font-semibold min-h-[50px] mb-8"
        />

        <p className="text-slate-400 text-lg leading-relaxed max-w-[650px] mx-auto mb-12">
          Interested in building modern applications, solving problems, and learning new technologies.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 flex-wrap">
          <a href="#projects">
            <button className="px-8 py-3.5 rounded-full font-semibold bg-blue-500 text-white hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(59,130,246,0.35)] transition-all duration-300 border-none">
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button className="px-8 py-3.5 rounded-full font-semibold bg-transparent border-2 border-blue-500 text-white hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300">
              Contact Me
            </button>
          </a>
        </div>
      </motion.div>

      {/* Decorative floating blobs */}
      <div className="absolute -top-32 -left-32 w-[350px] h-[350px] rounded-full bg-blue-500 blur-[160px] opacity-25 animate-[float1_8s_ease-in-out_infinite]"></div>
      <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] rounded-full bg-purple-500 blur-[160px] opacity-25 animate-[float2_10s_ease-in-out_infinite]"></div>

      <style>{`
        @keyframes float1 { 50% { transform: translateY(30px); } }
        @keyframes float2 { 50% { transform: translateY(-40px); } }
      `}</style>
    </section>
  );
}

export default Hero;