'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BackButton() {
  return (
    <Link href="/portfolio">
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="inline-flex items-center space-x-2 text-white hover:opacity-80 transition-opacity"
      >
        <svg 
          className="w-5 h-5 rotate-180" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
        <span>Back to Portfolio</span>
      </motion.div>
    </Link>
  );
} 