import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const imageModules = import.meta.glob("../assets/images/**/*.{png,jpg,jpeg,svg,gif,webp}", { eager: true });

function getProjectImages(projectFolder) {
  const basePath = `../assets/images/${projectFolder}/`;
  return Object.entries(imageModules)
    .filter(([path]) => path.startsWith(basePath))
    .map(([, module]) => module.default || module)
    .sort();
}

const projectsData = [
  {
    title: "Game Terminal POS App",
    subtitle: "React Native (Expo + EAS) • In Production",
    description:
      "Supervised Game Terminal; spotted manual playtime/payment tracking pain. Built a React Native POS app: timers, pay/pending states, revenue reports & push notifications.",
    tech: ["React Native", "Expo", "EAS", "Push Notifications", "REST APIs"],
    github: "",
    live: "",
    video: "",
    videoOrientation: "portrait",
    folder: "game-terminal",
  },
  {
    title: "ANHAN — Brand Storefront",
    subtitle: "Founder Project • Catalogue + WhatsApp Ordering",
    description:
      "Built ANHAN's storefront — a menswear parent brand with sub‑brands beepkickz, rich mane & man xcess. Catalogue‑first, no login, orders via WhatsApp. Deployed on Vercel.",
    tech: ["React", "Vite", "Tailwind CSS", "Vercel", "WhatsApp Order Flow"],
    github: "",
    live: "https://anhan-studio.vercel.app", // 👈 replace with your live URL
    video: "",
    folder: "anhan",
  },
  {
    title: "FreelanceHub",
    subtitle: "Full-Stack MERN Freelancing Marketplace",
    description:
      "Freelancing marketplace — React, Node, Express, MongoDB, Socket.IO, JWT, Tailwind. JWT + HTTP‑only cookie auth, role‑based access, protected REST APIs, rate limiting & validation.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "RESTful APIs"],
    github: "https://github.com/muzzu007/FreeLancerHub",
    live: "https://you-freelancer.onrender.com/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7499121770675785729?compact=1",
    folder: "freelancer",
  },



  {
    title: "Job Tracker",
    subtitle: "Full Stack MERN Application",
    description:
      "Built a complete Job Tracker using the MERN Stack featuring JWT Authentication, CRUD operations, Search, Filter, and Responsive Design.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/muzzu007/job-tracker",
    live: "https://job-tracker-nu-amber.vercel.app/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7499119283155918849?compact=1",
    folder: "job-tracker",
  },
  {
    title: "ConnectMe — Real-Time Chat",
    subtitle: "MERN Real-Time Chat Application",
    description:
      "React + Clerk auth + Socket.IO real‑time chat app with authenticated one‑to‑one messaging, WebSocket delivery and CORS handling for client‑server communication",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Clerk"],
    github: "https://github.com/muzzu007/ChatApp",
    live: "https://chat-connect-me.onrender.com/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7499117991591047168?compact=1",
    folder: "connect-me",
  },
  {
    title: "Inventory Management",
    subtitle: "Python + SQLite",
    description: "Inventory management system built using Python and SQLite.",
    tech: ["Python", "SQLite"],
    github: "https://github.com/muzzu007/Inventory-management-system",
    live: "",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7499107867543916545?compact=1",
    folder: "inventory-management",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-28 px-[8%]">
      <h2 className="text-center text-4xl md:text-5xl text-white mb-16">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectsData.map((project, index) => {
          const images = getProjectImages(project.folder);
          const fullProject = { ...project, images };
          return (
            <motion.div
              key={project.folder || index}
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