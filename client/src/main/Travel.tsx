import React from 'react'
import { Briefcase, Globe, Map, Users } from 'lucide-react'
import { motion } from 'framer-motion';

const Travel: React.FC = () => {
  const handleGoBack = () => {
    window.history.back()
  }

  const travelFeatures = [
    {
      title: 'Travel Arrangements',
      description:
        'We organize your flights, transfers, and travel documents to ensure a smooth journey to your destination.',
      icon: Globe,
    },
    {
      title: 'Cultural & Legal Briefings',
      description:
        'Detailed information on local laws, cultural norms, and emergency contacts to keep you safe and informed.',
      icon: Map,
    },
    {
      title: 'Packing & Currency Exchange',
      description:
        'Get expert tips on packing essentials and assistance with currency exchange for hassle-free preparation.',
      icon: Briefcase,
    },
    {
      title: 'Immigration Guidance',
      description:
        'We provide complete guidance on immigration requirements and ensure all your documents are in order.',
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-20 gradient-bgnope text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6 text-left relative z-10"
          onClick={handleGoBack}
        >
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Travel & Pre-Departure Support</h1>
        <p className="text-white mt-2 text-lg">
          Start your journey abroad with confidence through our comprehensive travel and preparation services.
        </p>
        </motion.div>
      </section>
      {/* <div className="relative bg-gradient-to-r from-teal-600 to-cyan-600 p-12 md:p-8">
        <button
          className="absolute left-4 top-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          onClick={handleGoBack}
        >
         
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Travel & Pre-Departure Support</h1>
        <p className="text-white mt-2 text-lg">
          Start your journey abroad with confidence through our comprehensive travel and preparation services.
        </p>
      </div> */}

      {/* Content Section */}
      <div className="p-6 md:p-8 max-w-6xl mx-auto">
        {/* Intro Section */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Your journey abroad begins with careful planning and preparation. Our travel and pre-departure support
          service ensures a stress-free start by organizing travel arrangements and providing essential information. We
          offer detailed briefings on local laws, cultural norms, and emergency contacts to ensure your safety.
          Additionally, we assist with currency exchange, packing tips, and immigration requirements, helping you
          confidently step into your new life abroad.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {travelFeatures.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-start"
            >
              <Icon className="w-8 h-8 text-teal-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Travel
