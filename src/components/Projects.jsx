import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";


const imageModules = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,svg,gif,webp}', { eager: true });

function getProjectImages(projectFolder) {
    const basePath = `../assets/images/${projectFolder}/`;
    return Object.entries(imageModules)
        .filter(([path]) => path.startsWith(basePath))
        .map(([, module]) => module.default || module)
        .sort(); // optional
}

const projectsData = [
    ,
    {
        title: "FreelanceHub",
        subtitle: "A full-stack freelancing marketplace built with the MERN stack.",
        description: "Built and deployed a full-stack freelancing marketplace using React, Node.js, Express.js, MongoDB, Mongoose, Socket.IO, JWT, and Tailwind CSS. Implemented secure authentication using JWT and HTTP-only cookies, role-based authorization, protected REST APIs, authenticated Socket.IO connections, conversation-level access control, rate limiting, Helmet, CORS, and input validation.",
        tech: ["React", "Node.js", "Express", "MongoDB","Socket.IO", "RESTful APIs"],
        github: "https://github.com/muzzu007/FreeLancerHub",
        live: "https://you-freelancer.onrender.com/", // no live
        video: "videos/freelancer.mp4", // replace with actual demo
        folder: "freelancer",
    },
    {
        title: "Job Tracker",
        subtitle: "Full Stack MERN Application",
        description: "Built a complete Job Tracker using the MERN Stack featuring JWT Authentication, CRUD operations, Search, Filter and Responsive Design.",
        tech: ["React", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/muzzu007/job-tracker",
        live: "https://job-tracker-nu-amber.vercel.app/",
        video: "videos/jobtracker.mp4", // replace with your actual demo video
        folder: "job-tracker",
    },
    {
        title: "ConnectMe - Real-Time Chat Application",
        subtitle: "MERN Real-Time ChatApp",
        description: "Built with React, Clerk authentication, and Socket.IO. The project provides authenticated one-to-one messaging with real-time message delivery and demonstrates practical integration of frontend authentication, WebSockets, CORS, and client-server communication.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Clerk"],
        github: "https://github.com/muzzu007/ChatApp",
        live: "https://chat-connect-me.onrender.com/",
        video: "videos/connectMe.mp4", // replace with your actual demo video
        folder: "connect-me",
    },
    {
        title: "Inventory Management",
        subtitle: "Python + SQLite",
        description: "Inventory management system built using Python and SQLite.",
        tech: ["Python", "SQLite"],
        github: "https://github.com/muzzu007/Inventory-management-system",
        live: "", 
        video: "videos/Inventory.mp4", // replace with actual demo
        folder: "inventory-management",
    }
];

function Projects() {
    return (
        <section id="projects" className="py-28 px-[8%]">
            <h2 className="text-center text-4xl md:text-5xl text-white mb-16">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
                {projectsData.map((project, index) => {
                    const images = getProjectImages(project.folder);
                    const fullProject = { ...project, images };
                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <ProjectCard project={fullProject} />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;