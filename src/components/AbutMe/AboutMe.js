
import ReactDOM from 'react-dom'
import { FaReact } from 'react-icons/fa';
import { DiJavascript1 } from "react-icons/di";
import { MdCss, MdHtml } from "react-icons/md";
import { BiLogoSass } from "react-icons/bi";
import skill from "../AbutMe/img.gif";
import "./Aboutme.css";

export const AboutMe = () => {

    return (
        <section className="Data">

            <h3 className="skills-title">skills + certificados</h3>

            <div className="skills">


                <div className='Skill-container'><FaReact className='ICON' /></div>
                <div className='Skill-container'><DiJavascript1 className='ICON' /></div>
                <div className='Skill-container'><MdCss className='ICON' /></div>
                <div className='Skill-container'><MdHtml className='ICON' /></div>
                <div className='Skill-container'><BiLogoSass className='ICON' /></div>


            </div>
            <div className='Certificados-container'>
                
                <div className='Certificado'>

                </div>
                <div className='Certificado'>

                </div>
            </div>
        </section>
    )
}

export default AboutMe;
