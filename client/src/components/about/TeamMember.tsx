import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="text-center">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </motion.div>
  );
}
