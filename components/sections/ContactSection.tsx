'use client';
import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="py-20 px-8 sm:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <h3 className="text-xl text-white font-semibold">Get in Touch</h3>
            <p className="text-white">
              Interested in working with us? Contact our team to discuss your requirements.
            </p>
            <div className="space-y-4">
              <p className="text-white">
                Email: jmacielair@aresintegratedresources.com
              </p>
              <p className="text-white">
                Phone: (808) 219-6282
              </p>
            </div>
          </motion.div>
          <motion.form
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-md bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-md bg-background"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full p-3 border rounded-md bg-background"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-start py-3 bg-foreground items-center space-x-2 text-background rounded-md hover:opacity-90 transition-opacity"
            >
             <span>Send Message </span>
             <svg 
                className="w-5 h-5" 
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
             
             
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 