'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-20 px-8 bg-black text-white sm:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square"
          >
            <Image
              src="https://aresintegrated.s3.us-east-1.amazonaws.com/washington-dc-city-aerial-view.jpg"
              alt="Ares Integrated Resources"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">About Us</h2>
            <div className="prose dark:prose-invert">
              <p className="text-lg text-white">
               
Ares Integrated Resources is a dedicated government contracting procurement company committed to providing exceptional metal manufacturing, fencing solutions, and small arms/ammo supply to government agencies. With a team of skilled professionals, we aim to deliver reliable and compliant solutions that meet the specific requirements of each government contract.
              </p>
            </div>
            <Link 
              href="/services"
              className="inline-block  p-4 bg-white  text-black rounded-md hover:opacity-90 transition-opacity"
            >
              Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 