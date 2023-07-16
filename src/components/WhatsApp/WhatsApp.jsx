import React from 'react';
import { Link } from "react-router-dom"

const WhatsApp = () => {
  const whatsAppUrl = `https://wa.me/5491155746175?text=Hello%Lighting.%20Looking%20for%20this%20`;

  return (
    <div className="whatsapp">
      <Link to={`${whatsAppUrl}`}  target="_blank">
        <img src="https://img.freepik.com/iconos-gratis/whatsapp_318-219850.jpg?size=626&ext=jpg&ga=GA1.2.1817757320.1689435098&semt=ais" width="60" height="60" loading="lazy" alt="Whatsapp" />
         
      </Link>
  </div>
  
)
}
export default WhatsApp
