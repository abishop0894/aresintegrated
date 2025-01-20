'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface MasonryItem {
  image: string;
  title: string;
  description: string;
}

interface Props {
  items: MasonryItem[];
}

export default function MasonryGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative aspect-[3/4] group"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            loading="eager"
            className="object-cover object-center rounded-lg"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-6">
            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-white/80">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 