'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: FiMail, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4"
            >
              Portfolio
            </motion.h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building digital solutions that drive business value. 
              Let&apos;s transform your ideas into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                <FiMail size={16} />
                your.email@example.com
              </a>
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              © {currentYear} Portfolio. Made with <FiHeart className="text-red-500" size={16} /> by Your Name
            </p>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
            >
              Back to Top ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
