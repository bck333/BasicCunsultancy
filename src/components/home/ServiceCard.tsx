'use client'

import { type LucideIcon } from 'lucide-react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useState } from 'react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  }

  const iconVariants: Variants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 200 }
    },
    hover: { 
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 }
    }
  }

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.3, duration: 0.5 }
    }
  }

  return (
    <motion.div
      className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => {
        setIsHovered(true)
        controls.start("hover")
      }}
      onHoverEnd={() => {
        setIsHovered(false)
        controls.start("visible")
      }}
      role="article"
      aria-label={title}
    >
      <motion.div
        className="mb-6"
        variants={iconVariants}
        animate={controls}
      >
        <Icon className="w-16 h-16 text-blue-600" aria-hidden="true" />
      </motion.div>
      <motion.h3 
        className="text-2xl font-bold mb-3 text-blue-900"
        variants={textVariants}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-gray-700 leading-relaxed"
        variants={textVariants}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
          aria-label={`Learn more about ${title}`}
        >
          Learn More →
        </a>
      </motion.div>
    </motion.div>
  )
}

