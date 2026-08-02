import "../css/Projects.css";
import LandingPage from "../assets/images/job-tracker/Landing-Page.png";
import DashboardPage from "../assets/images/job-Tracker/Dashboard-Page.png";
import Bill from "../assets/images/inventory-management/billing.png";
import Sales from "../assets/images/inventory-management/sales.png";
import Reports from "../assets/images/inventory-management/reports.png";
import Inventory from "../assets/images/inventory-management/inventory.png";
import Game from "../assets/images/space-shooter-2d/gameplay.png"
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";




const projects = [

{
    title: "Job Tracker",
    subtitle: "Full Stack MERN Application",
    description:
        "Built a complete Job Tracker using the MERN Stack featuring JWT Authentication, CRUD operations, Search, Filter and Responsive Design.",
    tech: ["React","Node.js","Express","MongoDB"],
    github: "https://github.com/muzzu007/job-tracker",
    demo: "https://job-tracker-nu-amber.vercel.app/",
    images: [
        LandingPage,
        DashboardPage,
       
    ]
},

{
    title:"Inventory Management",

    subtitle:"Python + SQLite",

    description:
        "Inventory management system built using Python and SQLite.",

    tech:["Python","SQLite"],

    github:"https://github.com/muzzu007/Inventory-management-system",


    images:[
        Bill,
        Inventory,
        Sales,
        Reports

    ]

},

{
    title:"2D Space Shooter Game",

    subtitle:"Godot GDScript",

    description:
        "A 2D Space Shooter Game made in Godot engine with GDScript language",

    tech:["Godot Engine","GDscript"],

    github:"https://github.com/muzzu007/space-shooter-2d",


    images:[Game]

}

];

function Projects(){
    
return(

<section id="projects" className="projects">

<h2 className="section-title">

Featured Projects

</h2>

<div className="projects-wrapper">

{

projects.map((project,index)=>(

<ProjectCard

key={index}

project={project}

/>

))
}

</div>

</section>

)

}

export default Projects;