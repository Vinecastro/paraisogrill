import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
  <p>Nos acompanhe pelas redes sociais:</p>
  <div className="socials">
    <a href="https://www.instagram.com/paraisogrill_01/" target="_blank" rel="noopener noreferrer">
      <FaInstagram className="icon" /> Instagram
    </a>
    <a href="https://api.whatsapp.com/send/?phone=5511974592803&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
      <FaWhatsapp className="icon" /> WhatsApp
    </a>
  </div>
</footer>

  );
}

export default Footer;
