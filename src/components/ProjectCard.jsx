import { useState } from "react";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ProjectCard({project}){

const [currentImage,setCurrentImage]=useState(0);

function nextImage(){

setCurrentImage(

(prev)=>

(prev+1)%project.images.length

);

}

function prevImage(){

setCurrentImage(

(prev)=>

(prev===0

? project.images.length-1

: prev-1)

);

}

return(

<div className="project-card">

<div className="project-image">

<img
    src={project.images[currentImage]}
    alt={project.title}
/>

<button

className="arrow left"

onClick={prevImage}

>

<FaChevronLeft/>

</button>

<button

className="arrow right"

onClick={nextImage}

>

<FaChevronRight/>

</button>

<div className="slider-dots">

{

project.images.map((_,index)=>(

<span

key={index}

className={

index===currentImage

?

"dot active"

:

"dot"

}

/>

))

}

</div>

</div>

<div className="project-content">

<h3>{project.title}</h3>

<h4>{project.subtitle}</h4>

<p>{project.description}</p>

<div className="tech-stack">

{

project.tech.map((tech,index)=>(

<span key={index}>

{tech}

</span>

))

}



</div>

<div className="project-buttons">

{project.demo && (
    <a href={project.demo} target="_blank" rel="noreferrer">
        <button>
            <FaExternalLinkAlt />
            Live Demo
        </button>
    </a>
)}

<a href={project.github} target="_blank">

<button>

<FaGithub/>

GitHub

</button>

</a>

</div>


</div>

</div>

)

}

export default ProjectCard;