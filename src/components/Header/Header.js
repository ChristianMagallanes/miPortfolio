import React from 'react';
import "./Header.css";
import perfil from "../../Assets/perfil2.png";

export const Header = () => {
  return (
    <header className="Encabezado">
        <div className="PhotoContent">
        <img className='PerfilPng' src={perfil} /> 
      </div>
      <div>
      <h1 className='Title1'>👨‍💻Web developer</h1>
      <h2 className='Title'>Front-End🎨</h2>
      </div>
      <div className='Btn-container'>
      <a className='Header-btn ov-btn-slide-left' href="#contacto">Contact</a>
      <a className='Header-btn ov-btn-slide-left' href="#projects">projects</a>
      </div>
    </header>
  )
}

export default Header;
