import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../App.css"; // we'll create this next

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/91XXXXXXXXXX"  // <-- replace with your number
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="bi bi-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
