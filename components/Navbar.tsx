'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Hamburger from 'hamburger-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full h-fit py-2 z-50 backdrop-blur-sm transition-colors duration-5000 ${
      hasScrolled ? 'bg-white/80' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-20">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl">
            <Image src="https://aresintegrated.s3.us-east-1.amazonaws.com/logo_high_res-removebg-preview.png" alt="Ares Logo" width={40} height={40} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:opacity-70 transition-opacity">
              Home
            </Link>
            <Link href="/portfolio" className="hover:opacity-70 transition-opacity">
              Portfolio
            </Link>
          </div>

          {/* Mobile Menu Button */}
             <div className="md:hidden">
             <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>
      
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="py-4 space-y-4">
                <Link 
                  href="/" 
                  className="block hover:opacity-70 font-bold transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/portfolio" 
                  className="block hover:opacity-70 font-bold transition-opacity"
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
} 