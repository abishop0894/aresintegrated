'use client';
import { motion } from 'framer-motion';
import MasonryGrid from '@/components/MasonryGrid';
import SmallHeader from '@/components/SmallHeader';
import BackButton from '@/components/BackButton';
import { portfolioItems } from '@/app/lib/constants';
const pageData = {
  title: 'General Construction',
  description: portfolioItems[1].description,
  items: [
    {
      image: 'https://aresintegrated.s3.us-east-1.amazonaws.com/closeup-contractor-construction-site-pointing-plan-wooden-sleeper.jpg',
      title: 'Handler Training',
      description: 'Comprehensive K9 handler certification program'
    },
    {
      image: 'https://aresintegrated.s3.us-east-1.amazonaws.com/construction-plans-with-yellow-helmet-drawing-tools-bluep.jpg',
      title: 'Training Facility',
      description: 'State-of-the-art K9 training grounds'
    },
    {
      image: 'https://aresintegrated.s3.us-east-1.amazonaws.com/construction-silhouette.jpg',
      title: 'Field Exercises',
      description: 'Real-world scenario training'
    },
    // Add more items as needed
  ]
};

export default function GeneralConstructionPortfolio() {
  return (
    <>
     <SmallHeader />
    <div className="min-h-screen py-20 px-8 sm:px-20 bg-black text-white">
     
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
    </div></>
  );
}
