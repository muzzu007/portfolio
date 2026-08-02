import "../css/Skills.css";

import { motion } from "framer-motion";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaFileExcel,
    FaPython,
    FaLinux
} from "react-icons/fa";
import { LuGlobe } from "react-icons/lu";

import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";


const skills = [
    {
        icon:<SiExpress/>,
        name:"Express"
    },

    {
        icon:<FaNodeJs/>,
        name:"Node.js"
    },

    {
        icon:<FaPython/>,
        name:"Python"
    },

    {
        icon:<FaReact/>,
        name:"React"
    },

    {
        icon:<FaHtml5/>,
        name:"HTML"
    },

    {
        icon:<FaCss3Alt/>,
        name:"CSS"
    },

    {
        icon:<FaJs/>,
        name:"JavaScript"
    },


    {
        icon:<SiMongodb/>,
        name:"MongoDB"
    },

    
    {
        icon:<SiMysql/>,
        name:"SQL"
    },

    {
        icon:<FaGitAlt/>,
        name:"Git & GitHub"
    },

    {
        icon:<LuGlobe/>,
        name:"Networking"
    },

    {
        icon:<FaFileExcel/>,
        name:"Excel"
    },

    {
        icon:<FaLinux/>,
        name:"Linux"
    },
    

];

function Skills(){

    return(

        <section id="skills" className="skills">

            <motion.div

                initial={{opacity:0,y:70}}

                whileInView={{opacity:1,y:0}}

                transition={{duration:.8}}

                viewport={{once:true}}

            >

                <h2 className="section-title">

                    Skills

                </h2>

                <div className="skills-grid">

                    {

                        skills.map((skill,index)=>(

                            <motion.div

                                className="skill-card"

                                key={index}

                                whileHover={{
                                    scale:1.08
                                }}

                            >

                                <div className="skill-icon">

                                    {skill.icon}

                                </div>

                                <h3>

                                    {skill.name}

                                </h3>

                            </motion.div>

                        ))

                    }

                </div>

            </motion.div>

        </section>

    )

}

export default Skills;