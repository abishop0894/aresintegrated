'use client';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Ares Integrated Resources has been instrumental in upgrading our K9 training facilities. Their expertise and professionalism are unmatched.",
    author: "Col. James Mitchell",
    position: "Director of Operations, Federal Law Enforcement"
  },
  {
    quote: "The construction quality and attention to security requirements exceeded our expectations. A reliable partner for sensitive government projects.",
    author: "Sarah Reynolds",
    position: "Chief of Infrastructure, State Defense Agency"
  },
  {
    quote: "Their metal fabrication work consistently meets our precise specifications. Excellent communication and timely delivery on every project.",
    author: "Dr. Michael Chen",
    position: "Technical Director, Defense Research Facility"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-8 sm:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Client Testimonials
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gray-50 dark:bg-gray-900 rounded-lg"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 