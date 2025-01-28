import React from 'react'
import {  Globe, Briefcase, MapPin, CreditCard, Users, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion';

const Visa: React.FC = () => {
  const handleGoBack = () => {
    window.history.back()
  }

  const visaDetails = [
    {
      title: 'Study Visa',
      description:
        'A visa that allows international students to pursue educational goals in a foreign country, enabling them to immerse themselves in a new culture while obtaining knowledge and skills.',
      icon: Users,
    },
    {
      title: 'H-1B Visa',
      description:
        'A non-immigrant work visa granted to foreign professionals with specialized skills, allowing them to work temporarily in the United States.',
      icon: Briefcase,
    },
    {
      title: 'PR Visa (Permanent Residency)',
      description:
        'A Permanent Residency Visa grants foreign nationals the right to reside permanently in a foreign country, with access to benefits and privileges such as healthcare, social services, and the potential for citizenship.',
      icon: MapPin,
    },
    {
      title: 'Work Visa',
      description:
        'A Work Visa allows individuals to legally work in a foreign country for a specific period, granting them employment rights and access to the country\'s workforce and economy.',
      icon: CreditCard,
    },
    {
      title: 'Tourist Visa',
      description:
        'A Tourist Visa is a travel permit that allows individuals to visit a foreign country for recreation, tourism, and exploration.',
      icon: Globe,
    },
    {
      title: 'Investor Visa',
      description:
        'An Investor Visa permits individuals to invest capital in a foreign country, contributing to its economy, generating business opportunities, and potentially gaining access to permanent residency or citizenship.',
      icon: DollarSign,
    },
    {
      title: 'Business Visa',
      description:
        'A Business Visa enables individuals to engage in business-related activities, such as attending conferences, meetings, and negotiations, in foreign countries.',
      icon: Briefcase,
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
         <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Visa Assistance</h1>
        <p className="text-white mt-2 text-lg">
          Guidance for all your visa needs, ensuring a seamless and stress-free process.
        </p>
        </motion.div>
      </section>

{/*       
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600 p-12 md:p-8">
        <button
          className="absolute left-4 top-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          onClick={handleGoBack}
        >
         
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Visa Assistance</h1>
        <p className="text-white mt-2 text-lg">
          Guidance for all your visa needs, ensuring a seamless and stress-free process.
        </p>
      </div> */}

      {/* Content Section */}
      <div className="p-6 md:p-8 max-w-6xl mx-auto">
        {/* Intro Section */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Obtaining a visa is often the most critical step in the study abroad process. Our visa assistance service
          ensures you are fully prepared by guiding you through every stage of the application. We help with accurate
          documentation, certificate attestation, and financial proofing. Additionally, we provide detailed visa
          interview preparation to boost your confidence and ensure a smooth approval process. Our expertise covers the
          unique requirements of each country's visa procedures, minimizing delays or rejections.
        </p>

        {/* Visa Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {visaDetails.map(({ title, description, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-start"
            >
              <Icon className="w-8 h-8 text-green-600 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
              <p className="text-sm text-gray-600 mt-2">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Visa
