import React from 'react'
import { FileText, Calendar, ClipboardCheck } from 'lucide-react'
import { motion } from 'framer-motion';

const Application: React.FC = () => {
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Profile Evaluation</h1>
          {/* <p className="text-xl md:text-2xl mx-auto opacity-90">
            Comprehensive support for your international education journey, from profile evaluation to pre-departure assistance.
          </p> */}
        </motion.div>
      </section>
      {/* <div className="relative bg-gradient-to-r from-teal-500 to-green-600 p-12 md:p-8">
        <button
          className="absolute left-4 top-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          onClick={handleGoBack}
        >
         
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Application Assistance</h1>
      </div> */}
      
      {/* Content Section */}
      <div className="p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://www.scnsoft.com/application-development/app-support/cover-pic-app-support-new-01.svg" 
            alt="Application Assistance" 
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 leading-relaxed">
            Filing university applications can be daunting, especially when dealing with different processes and deadlines. 
            Our application assistance service simplifies this journey by providing step-by-step guidance.
          </p>
          <br />
          <div className="space-y-4 mb-6">
            {[
              { icon: FileText, text: "Eligibility Checks and Document Preparation" },
              { icon: Calendar, text: "Guidance on Deadlines and Timely Submissions" },
              { icon: ClipboardCheck, text: "Scholarships, Financial Statements, and Interview Prep" }
            ].map(({ icon: Icon, text }, index) => (
              <div key={index} className="flex items-center space-x-3 text-gray-700">
                <Icon className="w-6 h-6 text-teal-600" />
                <span className="text-base">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            From scholarships and financial statements to certificates and interview preparation, our experts ensure that every detail is handled with precision for a seamless application experience.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Application
