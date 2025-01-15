  'use client';
  import { motion } from 'framer-motion';
  import Link from 'next/link';
  import HeroSection from '@/components/HeroSection';
  import Image from 'next/image';
  export  function Portfolio() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-black text-white"
      >
        <HeroSection
          title="Our Services"
          subtitle="Explore our diverse range of offerings"
          fullScreen={false}
        />

        <div className="lg:max-w-7xl w-full lg:mx-auto bg-black text-white">
          <div className="grid grid-cols-1 py-[6vh] px-[6vw]   md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.slug}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <Link href={`/services/${item.slug}`}>
                  <div className="relative w-full h-[300px] rounded-lg overflow-hidden group">
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

  export const portfolioItems = [
    {
      title: "K9 Training and Procurement",
      image: "https://aresintegrated.s3.us-east-1.amazonaws.com/Cropped2-035-ENU0051-Aggression-Control_c.jpg",
      slug: "k9",
      description: "Our K9 training services provide a diverse array of solutions, such as obedience, tracking, and search and rescue, specifically designed to fulfill the requirements of government contracts."
    },
    {
      title: "General Construction (FL Only)",
      image: "https://aresintegrated.s3.us-east-1.amazonaws.com/Construction6.jpg",
      slug: "general-construction",
      description: "Our general construction services offer a wide range of durable solutions, including fencing and security, tailored to meet the specific requirements of government contracts."
    },
    {
      title: "Small Arms Ammunition",
      image: "https://aresintegrated.s3.us-east-1.amazonaws.com/fives.jpg",
      slug: "small-arms-and-ammunition",
      description: "Our small arms ammunition services provide a comprehensive selection of ammunition that meet stringent quality standards and comply with all specifications."
    },
    {
      title: "Metal Fabrication and Fencing",
      image: "https://aresintegrated.s3.us-east-1.amazonaws.com/ST612LWEC-4.jpg",
      slug: "fabricated-metal",
      description: "Our fabricated metal services offer a wide range of durable and reliable products, including metal fabrication and welding, tailored to meet the specific requirements of government contracts."
    }
  ];

  /*
    {
    title: "K9 Procurement, Training, and Equipping",
    description: "Our K9 Training SC's provide a comprehensive range of K9 training services, including obedience, tracking, and search and rescue. We ensure that our K9 training services meet the specific requirements of each government contract, providing durable and reliable solutions for various applications.",
    link: "/services/k9"
  },
  {
    title: "General Construction",
    description: "Our general construction SC's provide a comprehensive range of construction services, including fencing, security solutions, and other construction solutions. We ensure that our general construction services meet the specific requirements of each government contract, providing durable and reliable solutions for various applications.",
    link: "/services/general-construction"
  },
  {
    title: "Small Arms & Ammunition",
    description: "Our small arms and ammunition SC's offer a wide range of firearms and ammunition, meeting the stringent quality standards required for government projects. We ensure precise and compliant solutions to fulfill government contract specifications.",
    link: "/services/small-arms-and-ammunition"
  },
  {
    title: "Fabricated Metal",
    description: "Our fabricated metal SC's provide a comprehensive range of fabricated metal products, including metal fabrication, welding, and other metal fabrication solutions. We ensure that our fabricated metal products meet the specific requirements of each government contract, providing durable and reliable solutions for various applications.",
    link: "/services/fabricated-metal"
  }
  */