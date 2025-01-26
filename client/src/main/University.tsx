import React from 'react'
import {  GraduationCap, Building, Globe } from 'lucide-react'

const University: React.FC = () => {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-red-500 to-orange-600 p-12 md:p-8">
        <button
          className="absolute left-4 top-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          onClick={handleGoBack}
        >
         
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">University Selection</h1>
      </div>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/03212506/Study-in-Canada-Without-IELTS.jpg" 
            alt="University Selection" 
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 leading-relaxed">
            Selecting the right university is key to achieving your academic and professional goals. 
            Our university selection service connects you with top institutions worldwide through our direct partnerships.
          </p>
          <br />
          <div className="space-y-4 mb-6">
            {[
              { icon: GraduationCap, text: "Evaluating Accreditation and Course Offerings" },
              { icon: Building, text: "Analyzing Facilities and Campus Life" },
              { icon: Globe, text: "Connecting with Top Global Institutions" }
            ].map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-700">
                <Icon className="w-6 h-6 text-red-600" />
                <span className="text-base">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            By avoiding intermediaries, we ensure a transparent and cost-effective process, 
            helping you secure admission to reputable universities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default University
