import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';
import './footer.css';
import './footer.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const enviarWhatsapp = () => {
    const { name, email, service } = formData;
  
    // Verifica si "Seleccionar servicio" está seleccionado
    if (service === 'Seleccionar servicio') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, seleccione un servicio válido.',
      });
      return;
    }
  
    // Componer el mensaje de WhatsApp
    const mensaje = `Hola, soy ${name}. Estoy interesado en el servicio de ${service}. Mi correo electrónico es ${email}.`;
  
    // Reemplaza el siguiente número de teléfono con el número de WhatsApp al que deseas enviar el mensaje.
    const numeroTelefono = '1234567890';
  
    // Genera el enlace de WhatsApp con el mensaje
    const whatsappURL = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
  
    // Abre una nueva ventana o pestaña del navegador para enviar el mensaje de WhatsApp
    window.open(whatsappURL, '_blank');
  };

  return (
    <div>
      
      <form id="contactForm">
        <div>
        <h2>Contacto</h2>
          <label htmlFor="name">Nombre:</label>
          <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="service">Servicio:</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="Seleccionar servicio">Seleccionar servicio</option>
            <option value="landing">Landing Page</option>
            <option value="ecommerce">E-commerce</option>
            <option value="static">Sitio web estático pero funcional</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={enviarWhatsapp}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
