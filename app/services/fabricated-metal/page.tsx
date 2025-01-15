'use client';
import { motion } from 'framer-motion';
import MasonryGrid from '@/components/MasonryGrid';
import BackButton from '@/components/BackButton';
import { portfolioItems } from '@/app/lib/constants';
const pageData = {
  title: 'Fabricated Metal',
  description: portfolioItems[3].description,
  items: [
    {
      image: 'https://aresintegrated.s3.us-east-1.amazonaws.com/CFD-Custom-Metal-Fabricator-scaled.jpg',
      title: 'Metals',
      description: 'Custom metal fabrication and welding services'
    },
    {
      image: 'https://aresintegrated.s3.us-east-1.amazonaws.com/State-specific-welder-working-on-metal-fabrication.jpg',
      title: 'Training Facility',
      description: 'State-of-the-art K9 training'
    },
    {
      image: 'https://aresintegrated.s3.us-east-1.amazonaws.com/Blain-Stumpf-Temporary-Fence-Rentals-Service-Page-Image-Construction-Fencing.webp',
      title: 'Field Exercises',
      description: 'Real-world scenario training'
    },
    // Add more items as needed
  ]
};

export default function FabricatedMetalPortfolio() {
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