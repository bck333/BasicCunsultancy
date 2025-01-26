import { ArrowLeft, CheckCircle, Award, Globe } from 'lucide-react'
import React from 'react'

const Profile: React.FC = () => {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-violet-600 p-12 md:p-8">
        <button
          className="absolute left-4 top-4 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          onClick={handleGoBack}
        >
        
          <span className="sr-only">Go back</span>
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">Profile Evaluation</h1>
      </div>
      
      {/* Content Section */}
      <div className="p-6 md:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            // src="https://msinaustralia.com/wp-content/uploads/2020/01/Ms-in-Germany-9-oi9790nrhxt0xmk9i64ztfh2rbliwohfedngs5m468.png" 
            src="https://www.rightfitplus.com/wp-content/uploads/2018/09/personality-profile-assessment-icon-update.png" 
            alt="Profile Evaluation" 
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 leading-relaxed">
            Profile evaluation serves as the gateway to understanding your eligibility for global education opportunities. 
            Our experts thoroughly analyze every aspect of your academic and extracurricular profile, including:
          </p>
          <br/>
          <div className="space-y-4 mb-6">
          {[
            { icon: Award, text: "Academic Performance (GPA)" },
            { icon: Globe, text: "Standardized Test Scores (GRE, TOEFL, IELTS)" },
            { icon: CheckCircle, text: "Leadership Roles and Extracurricular Activities" }
          ].map(({ icon: Icon, text }, index) => (
            <div key={index} className="flex items-center space-x-3 text-gray-700">
              <Icon className="w-6 h-6 text-blue-600" />
              <span className="text-base">{text}</span>
            </div>
          ))}
        </div>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            By leveraging years of experience and industry insights, we help you understand where you stand and guide 
            you on strengthening your profile to secure admissions to world-class institutions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile