'use client';
import { motion } from 'framer-motion';






const features = [
  {
    title: "Quality Assurance",
    description: "Quality is our top priority. We ensure that all products and services meet the highest standards of quality and performance."
  },
  {
    title: "Regulatory Compliance",
    description: "We take compliance seriously. It is the foundation of our business."
  },
  {
    title: "On-time Delivery",
    description: "We understand the importance of timely delivery. We ensure that all products and services are delivered on time, every time."
  },
  {
    title: "Specialized Expertise",
    description: "We have a team of specialized experts who are dedicated to providing the highest quality products and services."
  },
  {
    title: "Compliance Consulting",
    description: "As experts in compliance, we can help you navigate relevant regulations and standards."
  },
  {
    title: "Government Contract Fulfillment",
    description: "Our team is made up of seasoned professionals with extensive military and government experience."
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-8 sm:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-background rounded-lg border-2  border-white shadow-sm"
            >
              <h3 className="text-xl text-white font-semibold mb-3">{feature.title}</h3>
              <p className="text-white">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 