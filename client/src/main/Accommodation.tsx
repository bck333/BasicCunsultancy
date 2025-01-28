import React from 'react'
import { Home, Key, Users, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion';

const Accommodation: React.FC = () => {
  const handleGoBack = () => {
    window.history.back()
  }

  const accommodationFeatures = [
    {
      title: 'Safe & Secure Housing',
      description:
        'We prioritize your safety by recommending accommodations in secure and student-friendly communities.',
      icon: Home,
    },
    {
      title: 'Affordable Options',
      description:
        'Our network ensures you get affordable housing options that suit your budget and lifestyle.',
      icon: Key,
    },
    {
      title: 'Community Support',
      description:
        'We connect you with local support groups and alumni for a smooth transition into your new environment.',
      icon: Users,
    },
    {
      title: 'Guidance on Rental Agreements',
      description:
        'We assist in understanding rental agreements, ensuring you avoid potential issues during your stay.',
      icon: CheckCircle,
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Profile Evaluation</h1>
          {/* <p className="text-xl md:text-2xl mx-auto opacity-90">
            Comprehensive support for your international education journey, from profile evaluation to pre-departure assistance.
          </p> */}
        </motion.div>
      </section>
      {/* <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-12 md:p-8">
        <button
          className="absolute left-4 top-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          onClick={handleGoBack}
        >
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Accommodation Assistance</h1>
        <p className="text-white mt-2 text-lg">
          Helping you find the right place to stay while studying abroad.
        </p>
      </div> */}

      {/* Content Section */}
      <div className="p-6 md:p-8 max-w-6xl mx-auto">
        {/* Intro Section */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Finding the right accommodation in a foreign country can be challenging, especially for first-time
          travelers. Our accommodation assistance service helps you secure safe, affordable housing in
          student-friendly communities. We leverage our network of alumni and local contacts to recommend the best
          options for your needs. From understanding rental agreements to connecting you with local support groups, we
          ensure a smooth and comfortable transition to your new environment.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
          {accommodationFeatures.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-start"
            >
              <Icon className="w-8 h-8 text-blue-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Accommodation
