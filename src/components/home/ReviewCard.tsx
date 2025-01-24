'use client'

import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

interface Review {
  id: number
  name: string
  message: string
  location: string
  image: string
  socialLinks: {
    instagram: string
    linkedin: string
    twitter: string
  }
}

interface ReviewCardProps {
  review: Review
  isActive: boolean
}

export function ReviewCard({ review, isActive }: ReviewCardProps) {
  const controls = useAnimation()

  useEffect(() => {
    if (isActive) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isActive, controls])

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } }
  }

  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  }

  return (
    <motion.div
      className={`absolute inset-0 ${isActive ? '' : 'pointer-events-none'}`}
      variants={cardVariants}
      initial="hidden"
      animate={controls}
      role="group"
      aria-label={`Review by ${review.name}`}
    >
      <motion.div 
        className="bg-gradient-to-br from-indigo-100 to-white shadow-2xl rounded-2xl p-8 flex flex-col md:flex-row items-center max-w-4xl mx-auto"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-8">
          <motion.img 
            src={review.image} 
            alt={`Picture of ${review.name}`} 
            className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg border-4 border-white"
            variants={imageVariants}
            whileHover="hover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <motion.p 
            className="text-xl italic mb-6 text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            "{review.message}"
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <p className="font-bold text-2xl text-indigo-900 mb-1">{review.name}</p>
              <p className="text-indigo-600 font-medium">{review.location}</p>
            </div>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              {['instagram', 'linkedin', 'twitter'].map((platform, index) => {
                const Icon = platform === 'instagram' ? Instagram : platform === 'linkedin' ? Linkedin : Twitter
                return (
                  <motion.a 
                    key={platform}
                    custom={index}
                    variants={socialIconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    href={review.socialLinks[platform as keyof typeof review.socialLinks]} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`${review.name}'s ${platform}`}
                    className={`text-indigo-500 hover:text-indigo-700 transition-colors duration-300`}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

