'use client';
import { motion } from 'framer-motion';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
// import TestimonialsSection from '@/components/sections/TestimonialsSection';
import ContactSection from '@/components/sections/ContactSection';
import FAQSection from '@/components/sections/FAQSection';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      <HeroSection
        title="Your Trusted Government Contracting Partner"
        subtitle="Welcome to Ares Integrated Resources, your trusted SAM.gov registered contractor specializing in metal manufacturing (aluminum, steel), fencing solutions (barbed wire, chain link), and small arms/ammo supply. With a focus on quality, compliance, and on-time government contract fulfillment, we offer specialized solutions to meet the unique needs of government agencies."
        ctaText="View Our Services"
        ctaLink="/services"
        fullScreen={true}
      />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
     
      <ContactSection />
      <FAQSection />
    </motion.div>
  );
}
