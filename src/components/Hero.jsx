import "../css/Hero.css";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {

    return (

        <section className="hero">

            <motion.div
                className="hero-content"

                initial={{ opacity: 0, y: 50 }}

                animate={{ opacity: 1, y: 0 }}

                transition={{ duration: .8 }}
            >

                <p className="hello">
                    👋 Hello, I'm
                </p>

                <h1>

                    <span>Muzammil</span>

                </h1>

                <TypeAnimation

                    sequence={[

                        "Python",
                        2000,
                        
                        "SQL",
                        2000,
                        
                        
                        "React.js",
                        2000,
                        
                        "JavaScript",
                        2000,
                        
                        "Node.js",
                        2000,
                        
                        "Express.js",
                        2000,
                        
                        "MongoDB",
                        2000,
                        
                        "AI-Assisted Coding",
                        2000,

                        "Git & Github",
                        2000,

                        "HTML & CSS",
                        2000,

                        "Networking",
                        2000,

                        "Linux",
                        2000,



                    ]}

                    wrapper="h2"

                    speed={50}

                    repeat={Infinity}

                    className="typing"

                />

                <p className="hero-description">

                    Interested in building modern applications,
                    solving problems, and learning new technologies.

                </p>

                <div className="hero-buttons">

                    <a href="#projects">

                        <button className="primary-btn">

                            View Projects

                        </button>

                    </a>

                    <a href="#contact">

                        <button className="secondary-btn">

                            Contact Me

                        </button>

                    </a>

                    

                </div>

            </motion.div>

        </section>

    );

}

export default Hero;