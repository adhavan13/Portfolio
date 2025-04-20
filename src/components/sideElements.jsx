// Component for side social links and email
// Add this as a new component file or integrate directly into your HomePage

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SideElements = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled beyond the initial viewport height
      const scrolled = window.scrollY > window.innerHeight * 0.7;
      setIsScrolled(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      {/* Left side - Social Icons */}
      <div className="hidden md:flex fixed left-0 bottom-0 z-10 flex-col items-center">
        <div className="flex flex-col gap-6 mb-6">
          <a 
            href="#" 
            className={`w-6 h-6 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* GitHub placeholder - replace with your actual SVG */}
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </a>
          <a 
            href="#" 
            className={`w-6 h-6 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* LeetCode placeholder - replace with your actual SVG */}
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </a>
          <a 
            href="#" 
            className={`w-6 h-6 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
          >
            {/* Third icon placeholder - replace with your actual SVG */}
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </a>
        </div>
        <div 
          className={`w-px h-24 bg-black transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        ></div>
      </div>
      
      {/* Right side - Email */}
      <div className="hidden md:block fixed right-8 bottom-0 z-10">
        <a
          href="#"
          className={`transition-opacity duration-300 block ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex flex-col items-center">
            <div 
              className="text-black text-sm transform rotate-90 origin-bottom-right"
              style={{
                writingMode: "vertical-rl",
                letterSpacing: "2px",
              }}
            >
              adhavankannan@gmail.com
            </div>
            <div className="w-px h-24 bg-black mt-4"></div>
          </div>
        </a>
      </div>
    </>
  );
};

export default SideElements;