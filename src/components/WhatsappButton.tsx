// components/WhatsappButton.tsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

const WhatsappButton = () => {
  const phoneNumber = "+1158365945"; 
  const message = "Hola, ¿en qué puedo ayudarte?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 p-3 bg-green-500 rounded-full shadow-lg transition-all hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="w-12 h-12 text-white" />
    </a>
  );
};

export default WhatsappButton;
