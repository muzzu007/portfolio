import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaFileExcel, FaPython, FaLinux,
  FaCode, FaLink
} from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";
import { SiExpress, SiMongodb, SiMysql, SiSqlite } from "react-icons/si";

const skillCategories = [
  {
    name: "Programming Languages & Libraries",
    skills: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaCode />, name: "Pandas" },
      { icon: <FaCode />, name: "MumPy" },
      { icon: <SiSqlite/>, name: "SQLite"}

    ],
  },
  {
    name: "Web Technologies",
    skills: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "SQL" },
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3Alt />, name: "CSS" },
      { icon: <FaLink />, name: "REST APIs" },
      
    ],
  },
  {
    name: "Tools & Others",
    skills: [
      { icon: <FaGitAlt />, name: "Git & GitHub" },
      { icon: <LuGlobe />, name: "Networking" },
      { icon: <FaFileExcel />, name: "Excel" },
      { icon: <FaLinux />, name: "Linux" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="py-28 px-[8%]">
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-4xl md:text-5xl text-white mb-16">Skills</h2>

        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-semibold text-blue-400 mb-6 text-center md:text-left">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08 }}
                    className="bg-slate-800 rounded-2xl p-6 text-center border border-transparent hover:border-blue-500 hover:shadow-[0_20px_35px_rgba(59,130,246,0.18)] transition-all duration-300 cursor-pointer"
                  >
                    <div className="text-5xl text-blue-500 mb-4">{skill.icon}</div>
                    <h3 className="text-white text-xl font-medium">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;