import "../css/About.css";

import { motion } from "framer-motion";

import { FaCode } from "react-icons/fa";

function About() {

    return (

        <section id="about" className="about">

            <motion.div

                className="about-container"

                initial={{ opacity: 0, y: 80 }}

                whileInView={{ opacity: 1, y: 0 }}

                transition={{ duration: .8 }}

                viewport={{ once: true }}

            >

                <h2 className="section-title">

                    About Me

                </h2>

                <div className="about-content">

                    <div className="about-icon">

                        <FaCode />

                    </div>

                    <div className="about-text">

                        <h3>

                            Hi, I'm Muzammil👋

                        </h3>

                        <p>

                            I'm a BCA graduate who enjoys
                            building web applications and exploring backend logic.

                        </p>

                        <p>

                            I focus on working with relational databases, 
                            and creating responsive web interfaces.
                            Currently looking for entry-level opportunities in software development.

                        </p>



                    </div>

                    

                </div>

                <div className="about-stats">

                    <div className="about-card">

                        <h3>1+</h3>

                        <p>Years Learning</p>

                    </div>

                    <div className="about-card">

                        <h3>3+</h3>

                        <p>Projects</p>

                    </div>

                    <div className="about-card">

                        <h3>10+</h3>

                        <p>Technologies</p>

                    </div>

                </div>

            </motion.div>

        </section>

    )

}

export default About;