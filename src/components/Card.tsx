import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

export function Card({ title, description, image }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <motion.button
          whileHover={{ x: 10 }}
          className="flex items-center text-blue-600 font-semibold"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}