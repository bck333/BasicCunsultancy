'use client'

import { MapPin, GraduationCap, Users } from 'lucide-react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { useState } from 'react'

interface UniversityCardProps {
  name: string
  location: string
  image: string
  programs: string
  students: string
}

export function UniversityCard({ name, location, image, programs, students }: UniversityCardProps) {
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
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  }

  const imageVariants: Variants = {
    hover: { 
      scale: 1.1,
      transition: { duration: 0.5 }
    }
  }

  const infoVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  }

  // const buttonVariants: Variants = {
  //   hover: { 
  //     scale: 1.05,
  //     backgroundColor: "#1E3A8A",
  //     transition: { duration: 0.2 }
  //   },
  //   tap: { scale: 0.95 }
  // }

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
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
      aria-label={`Information about ${name}`}
    >
      <motion.div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={`Campus of ${name}`}
          className="w-full h-full object-cover"
          variants={imageVariants}
          animate={controls}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      <div className="p-6">
        <motion.h3 
          className="text-2xl font-bold mb-4 text-blue-900"
          variants={infoVariants}
          custom={0}
        >
          {name}
        </motion.h3>
        <div className="space-y-3 text-gray-700">
          {[
            { Icon: MapPin, text: location },
            // { Icon: GraduationCap, text: programs },
            // { Icon: Users, text: students }
          ].map(({ Icon, text }, index) => (
            <motion.p 
              key={index}
              className="flex items-center"
              variants={infoVariants}
              custom={index + 1}
            >
              <Icon className="w-5 h-5 mr-3 text-blue-600" aria-hidden="true" />
              {text}
            </motion.p>
          ))}
        </div>
        {/* <motion.button 
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="mt-6 w-full bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
          aria-label={`Learn more about ${name}`}
        >
          Learn More
        </motion.button> */}
      </div>
    </motion.div>
  )
}

