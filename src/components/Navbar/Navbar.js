import { FaGithub, FaLinkedin, FaInstagram, FaArrowRight, FaDownload } from 'react-icons/fa';
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="nav">
            
               <div className='Links-container'>
                <p className='Fa-link1'>social networks<FaArrowRight /></p>
                <a className='Fa-link' href="https://github.com/ChristianMagallanes" target="_blank"><FaGithub /></a>
                <a className='Fa-link' href="https://www.linkedin.com/in/christian-magallanes/" target="_blank"><FaLinkedin /></a>
                <a className='Fa-link' href="#" target="_blank"><FaInstagram /></a>
               </div>
                
                <div className='Cv-container'>
                    <a className='Fa-cv ov-btn-grow-skew' href="https://drive.google.com/file/d/1B8kFx5nsYl_CetR5xxhufB07PxT6Iyby/view?usp=sharing" target="_blank">download CV  <FaDownload /> <br></br></a>
                </div>
        </nav>
    );
}

export default Navbar;
