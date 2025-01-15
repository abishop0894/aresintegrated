'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: "Metal Manufacturing",
    description: "Our metal manufacturing SC's cover a wide range of metal products, from aluminum to steel, meeting the stringent quality standards required for government projects. We ensure precise and compliant solutions to fulfill government contract specifications.",
    link: "/portfolio/k9"
  },
  {
    title: "Fencing Solutions",
    description: "Our fencing solutions SC's provide a comprehensive range of fencing products, including barbed wire, chain link, and other security solutions. We ensure that our fencing solutions meet the specific requirements of each government contract, providing durable and reliable solutions for various applications.",
    link: "/portfolio/general-construction"
  },
  {
    title: "Small Arms & Ammunition",
    description: "Our small arms and ammunition SC's offer a wide range of firearms and ammunition, meeting the stringent quality standards required for government projects. We ensure precise and compliant solutions to fulfill government contract specifications.",
    link: "/portfolio/small-arms-and-ammunition"
  },
  {
    title: "Compliance",
    description: "Regulatory Adherence- We assist government agencies in adhering to regulatory requirements and standards, ensuring compliance and conformity with government procurement policies and regulations.",
    link: "/portfolio/fabricated-metal"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-8 sm:px-20 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 bg-background border-l-2 border-white  shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
              <p className="text-white mb-4">{service.description}</p>
              <Link 
                href={service.link}
                className="text-sm font-medium text-white hover:opacity-70 transition-opacity inline-flex items-center"
              >
                Learn More
                <svg 
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
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
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 