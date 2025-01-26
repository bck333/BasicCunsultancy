import React from 'react'
import {DollarSign, Award, BookOpen } from 'lucide-react'

const Admission: React.FC = () => {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-12 md:p-8">
        <button
          className="absolute left-4 top-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          onClick={handleGoBack}
        >
        
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Admission & Scholarship Support</h1>
      </div>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://fddiadmissions.qualcampus.com/wp-content/uploads/2023/09/Admission.png" 
            alt="Admission and Scholarship Support" 
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 leading-relaxed">
            For many students, financial constraints can be a significant hurdle in studying abroad. 
            Our admission and scholarship support service ensures you receive the necessary guidance to overcome these challenges.
          </p>
          <br />
          <div className="space-y-4 mb-6">
            {[
              { icon: Award, text: "Identifying Merit-Based Scholarships" },
              { icon: DollarSign, text: "Guidance on Fee Waivers and Financial Aid" },
              { icon: BookOpen, text: "Profile Evaluation to Increase Scholarship Chances" }
            ].map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-700">
                <Icon className="w-6 h-6 text-purple-600" />
                <span className="text-base">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            By carefully analyzing your profile and achievements, we increase your chances of securing scholarships that reduce financial stress and make your dreams a reality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Admission
