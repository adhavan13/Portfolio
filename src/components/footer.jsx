import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      className="w-full py-12 border-t border-gray-200 mt-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
            <p className="text-gray-600 mb-4">Open for opportunities and interesting conversations</p>
            
            <a 
              href="mailto:your.email@example.com" 
              className="inline-flex items-center text-black hover:underline"
            >
              <Mail size={16} className="mr-2" />
              your.email@example.com
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-6">
              <motion.a 
                href="https://instagram.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Instagram size={20} />
              </motion.a>
              
              <motion.a 
                href="https://twitter.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Twitter size={20} />
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Linkedin size={20} />
              </motion.a>
              
              <motion.a 
                href="https://github.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={20} />
              </motion.a>
            </div>
            
            <p className="text-gray-500 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}