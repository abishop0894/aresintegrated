'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
const images = [
  'https://aresintegrated.s3.us-east-1.amazonaws.com/low-angle-shot-high-residential-buildings-cloudy-sky.jpg',
  'https://aresintegrated.s3.us-east-1.amazonaws.com/low-angle-shot-texas-capitol-building-blue-beautiful-sky-austin-city-texas.jpg',
  'https://aresintegrated.s3.us-east-1.amazonaws.com/washington-dc-city-aerial-view.jpg'
];

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  fullScreen?: boolean;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink
}: HeroProps) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative top-0 left-0 h-screen w-full overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentImage === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image 
            src={image}
            alt="Hero Image"
            fill
            className="absolute inset-0 z-10"
            loading="eager"
            
          />
        </motion.div>
      ))}
      
      <div className="absolute inset-0 bg-black/80 z-20" />
      
      <div className="relative z-30 h-full max-w-7xl mx-auto px-8 sm:px-20 flex items-center">
        <div className="max-w-2xl space-y-6">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-6xl font-bold text-white"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-white/80"
          >
            {subtitle}
          </motion.p>
          {ctaText && ctaLink && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Link 
                href={ctaLink}
                className="inline-block px-8 py-3 bg-white text-black rounded-md hover:bg-white/90 transition-colors"
              >
                {ctaText}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
} 