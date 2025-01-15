'use client';
import { motion } from 'framer-motion';
import MasonryGrid from '@/components/MasonryGrid';

import BackButton from '@/components/BackButton';
import { portfolioItems } from '@/app/lib/constants';
const pageData = {
  title: 'Small Arms and Ammunition',
  description: portfolioItems[2].description,
  items: [
    {
      image: 'https://aresintegrated.s3.us-east-1.amazonaws.com/istockphoto-1247574554-612x612.jpg',
      title: '.22 Caliber',
      description: 'Ammunition for .22 caliber handguns'
    },
    {
      image: 'https://aresintegrated.s3.us-east-1.amazonaws.com/380acp-1.jpg',
      title: '.380 Caliber',
      description: 'Ammunition for 9mm caliber handguns'
    },
    {
      image: 'https://aresintegrated.s3.us-east-1.amazonaws.com/bullets.jpg',
      title: '9mm, .40, .45 Caliber and more',
      description: 'Ammunition for all small arms'
    },
    // Add more items as needed
  ]
};

export default function SmallArmsAndAmmunitionPortfolio() {
  return (
    <>
 
    <div className="min-h-screen py-20 px-8 pt-[15vh] sm:px-20 bg-black text-white">
      <div className="max-w-7xl mx-auto">
         <div className="mb-8">
          <BackButton />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold"
          >
            {pageData.title}
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg"
          >
            {pageData.description}
          </motion.p>
        </div>
        
        <MasonryGrid items={pageData.items} />
      </div>
    </div>
    </>
  );
}
