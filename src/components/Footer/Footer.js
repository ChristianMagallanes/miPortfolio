import React from 'react';
import './footer.css';
import ContactForm from './ContactForm'; // Asegúrate de que la ruta sea correcta

export const Footer = () => {
  return (
    <footer id="contacto" className="Footer-container">
     
      <ContactForm />
    </footer>
  );
}

export default Footer;
