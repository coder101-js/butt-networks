import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="Footer bg-gray-500 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Butt Networks</h2>
          <p className="text-gray-300">
            Building modern full-stack web applications with powerful, scalable technologies.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> shahnawazsaddamb@gmail.com
          </p>
          <p className="text-gray-300 flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaPhone /> +92 300 4907243
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Me</h2>
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-300">
            <a href="https://github.com/ShahanwazSaddam144/Butt-Networks" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Butt Networks. All rights reserved.
      </div>
    </footer>
  )
};

export default Footer;