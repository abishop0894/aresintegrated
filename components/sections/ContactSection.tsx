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
                Email: contact@aresintegrated.com
              </p>
              <p className="text-white">
                Phone: (555) 123-4567
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
              className="w-full px-8 py-3 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
} 