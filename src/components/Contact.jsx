import "../css/Contact.css";

import { motion } from "framer-motion";

import {
FaEnvelope,
FaGithub,
FaLinkedin,
FaFileDownload,
FaInstagram
} from "react-icons/fa";

function Contact(){

return(

<section id="contact" className="contact">

<motion.div

initial={{opacity:0,y:80}}

whileInView={{opacity:1,y:0}}

transition={{duration:.8}}

viewport={{once:true}}

>

<h2 className="section-title">

Let's Connect

</h2>

<p className="contact-text">

I'm currently open to entry-level roles, project collaborations, or just connecting with other developers. Feel free to reach out!

</p>

<div className="contact-grid">

<a href="mailto:muzammil.dev.in@gmail.com">

<FaEnvelope/>

Email

</a>

<a
href="https://github.com/muzzu007"
target="_blank"
>

<FaGithub/>

GitHub

</a>

<a
href="https://linkedin.com/in/orgmuzzu"
target="_blank"
>

<FaLinkedin/>

LinkedIn

</a>




</div>

</motion.div>

</section>

)

}

export default Contact;