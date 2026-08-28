import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-28 px-[8%] text-center">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl text-white mb-6">Let's Connect</h2>
        <p className="max-w-[650px] mx-auto text-slate-400 text-lg leading-relaxed mb-12">
          I'm currently open to entry-level roles, project collaborations, or just connecting with other developers. Feel free to reach out!
        </p>

        {/* Clickable Tiles: GitHub & LinkedIn (with hover animation) */}
        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto mb-8">
          <a
            href="https://github.com/muzzu007"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-8 rounded-2xl flex flex-col items-center gap-4 text-xl hover:-translate-y-2 hover:bg-blue-500 transition-all duration-300 w-48"
          >
            <FaGithub className="text-4xl" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/orgmuzzu"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-8 rounded-2xl flex flex-col items-center gap-4 text-xl hover:-translate-y-2 hover:bg-blue-500 transition-all duration-300 w-48"
          >
            <FaLinkedin className="text-4xl" />
            LinkedIn
          </a>
        </div>

        {/* Static Contact Info: Email & Phone (no click) with WhatsApp icon prefix */}
        <div className="flex flex-wrap justify-center gap-8 text-slate-300 text-base">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400 text-xl" />
            <span>muzammil.dev.in@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhone className="text-blue-400 text-xl" />
            <span>+91 9108331904 </span>
            
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;