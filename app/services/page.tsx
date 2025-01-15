  'use client';
  import { motion } from 'framer-motion';
  import Link from 'next/link';
  import HeroSection from '@/components/HeroSection';
  import Image from 'next/image';
  export default function Portfolio() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-black text-white"
      >
        <HeroSection
          title="Our Portfolio"
          subtitle="Explore our diverse range of projects and achievements"
          fullScreen={false}
        />

        <div className="lg:max-w-7xl w-full lg:mx-auto bg-black text-white">
          <div className="grid grid-cols-1 py-[2vh] px-[2vw]   md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Link href={`/services/${item.slug}`}>
                  <div className="relative w-full h-[300px] overflow-hidden group">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover z-0"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                      <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    );
  }

  const portfolioItems = [
    {
      title: "K9 Training Program",
      image: "https://aresintegrated.s3.us-east-1.amazonaws.com/washington-dc-city-aerial-view.jpg",
      slug: "k9",
      description: "Professional K9 training services"
    },
    {
      title: "Construction Projects",
      image: "https://aresintegrated.s3.us-east-1.amazonaws.com/washington-dc-city-aerial-view.jpg",
      slug: "general-construction",
      description: "Major construction achievements"
    },
    {
      title: "Small Arms Solutions",
      image: "https://aresintegrated.s3.us-east-1.amazonaws.com/washington-dc-city-aerial-view.jpg",
      slug: "small-arms-and-ammunition",
      description: "Specialized arms and ammunition projects"
    },
    {
      title: "Metal Fabrication",
      image: "https://aresintegrated.s3.us-east-1.amazonaws.com/washington-dc-city-aerial-view.jpg",
      slug: "fabricated-metal",
      description: "Custom metal fabrication work"
    }
  ];
