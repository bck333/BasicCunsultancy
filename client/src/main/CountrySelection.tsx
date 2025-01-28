import React from 'react'
import {MapPin, BookOpen, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion';

const CountrySelection: React.FC = () => {
  const handleGoBack = () => {
    window.history.back()
  }

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
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Course & Country Selection</h1>
        {/* <p className="text-xl md:text-2xl mx-auto opacity-90">
            Comprehensive support for your international education journey, from profile evaluation to pre-departure assistance.
          </p> */}
        </motion.div>
      </section>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://blockchainsimplified.com/images/candidate-staffing.jpg?v=2" 
            alt="Course & Country Selection" 
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 leading-relaxed">
            With thousands of courses available across the globe, selecting the right one can be overwhelming. 
            Our course and country selection service simplifies this process by offering expert recommendations based on your interests, career goals, and financial plans.
          </p>
          <br />
          <div className="space-y-4 mb-6">
            {[
              { icon: BookOpen, text: "Analyzing Course Curricula and Requirements" },
              { icon: MapPin, text: "Evaluating Study Destinations (Culture, Costs, Prospects)" },
              { icon: Briefcase, text: "Considering Post-Study Work Opportunities" }
            ].map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-700">
                <Icon className="w-6 h-6 text-purple-600" />
                <span className="text-base">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Additionally, we guide you in choosing the ideal study destination by evaluating factors such as culture, 
            cost of living, and career prospects in each country.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CountrySelection
