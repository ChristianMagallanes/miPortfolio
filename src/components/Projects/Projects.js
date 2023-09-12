import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaDownload } from 'react-icons/fa';
import project1 from "../../Assets/prueba.png";
import "./projects.css";
export const Projects = () => {
    return (
        <div id="projects" className="Projects">
            
            <h2 className="ProjectsTitle">Projects</h2>
            <div className='Mockup-container'>
                <div className='Mockup-data'>
                    
                    <h3>Canelones gaming</h3>
                    <p className='Mockup-p'>Canelones Gaming es un sitio web dedicado a la venta de computadoras gaming y consolas. Su diseño, desarrollado con HTML, CSS, Bootstrap y SASS, ofrece una experiencia de usuario atractiva y fácil de usar. Los productos se muestran con detalles completos, y los usuarios pueden explorar y comprar cómodamente. Además, el sitio incluye contenido informativo sobre tecnología y videojuegos.   </p>

                   <div className='Fa-linkc'>
                   <a className='Fa-link' href="https://github.com/ChristianMagallanes" target="_blank"><FaGithub /></a>
                    <a className='Fa-link' href="https://github.com/ChristianMagallanes" target="_blank"><FaGithub /></a>
                   </div>
                    
                </div>
            <img className='Mockup' src={project1} /> 
            </div>
        </div>
    )
}
export default Projects;