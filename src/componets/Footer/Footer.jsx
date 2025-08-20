// components/Footer.js
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">React Jobs</h2>
          <p className="text-sm">
            Discover your next opportunity in the world of React development.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/jobs" className="hover:underline">Jobs</a></li>
            <li><a href="/add-job" className="hover:underline">Add Job</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-white text-lg">
            <a href="#" className="hover:text-gray-300" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-indigo-700 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} React Jobs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
