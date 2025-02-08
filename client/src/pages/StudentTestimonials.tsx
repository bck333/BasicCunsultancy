import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import rohit from "../assets/rohit.png";
import bhavani from "../assets/b.png";
import r from "../assets/r.png";
import g from "../assets/g.png";
import k from "../assets/k.png";

const StudentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Rohit Kancha",
      message: "We had a great experience communicating with Vinod at Basic Consultancy. He helped my brother with his UK visa for master's studies, offering clear advice and handling everything efficiently. The process was smooth, and my brother received his visa without any issues. Highly recommend Vinod for visa assistance",
      location: "Hyderabad,Telengana, India.",
      socialLinks: {
        // instagram: "https://instagram.com/emily_travels",
        // linkedin: "https://linkedin.com/in/emilyjohnson",
        // twitter: "https://twitter.com/emily_abroad"
      },
      image: rohit // Placeholder for student image
    },
    {
      id: 2,
      name: "Bhavani Pareddy",
      message: "Basic Consultancy helped me a lot in my journey to study for a master’s degree abroad. They guided me through every step, from choosing the right university to completing my application and visa process. Vinod Anna gave me the best support with his helpful advice and friendly approach. He made everything easy and clear, which gave me confidence and peace of mind. I am very thankful to Basic Consultancy and Vinod for their support, and I recommend them to anyone who wants to study abroad.",
      location: "Telengana, India.",
      socialLinks: {
        // instagram: "https://instagram.com/michael_explorer",
        // linkedin: "https://linkedin.com/in/michaelchen",
        // twitter: "https://twitter.com/michael_global"
      },
      image: bhavani
    },
    {
      id: 3,
      name: "Roja reddy",
      message: "Basic Consultancy helped my friend a lot with their master’s journey abroad. They guided them in choosing the right university and made the application and visa process easy. The team was always ready to answer questions and give the right advice. Their support made everything simple and stress-free. Thanks to their help, my friend could achieve their dream of studying abroad without any problems. I highly recommend Basic Consultancy to anyone planning to study overseas.",
      location: "Hyderabad, Telengana, India",
      socialLinks: {
        // instagram: "https://instagram.com/sarah_worldwide",
        // linkedin: "https://linkedin.com/in/sarahmartinez",
        // twitter: "https://twitter.com/sarah_study_abroad"
      },
      image: r
    },
    {
      id: 4,
      name: "Gaddam Giri",
      message: "I am extremely satisfied with the services provided by Basic Consultancy. Their professionalism, expertise, and client-first approach truly stand out. A special thanks to Vinod Anna, whose guidance and unwavering support made the entire process smooth and hassle-free. His dedication and attention to detail are remarkable. I highly recommend Basic Consultancy to anyone seeking reliable and efficient services. Their commitment to delivering exceptional results is truly commendable!",
      location: "Hyderabad, Telengana, India",
      socialLinks: {
        // instagram: "https://instagram.com/sarah_worldwide",
        // linkedin: "https://linkedin.com/in/sarahmartinez",
        // twitter: "https://twitter.com/sarah_study_abroad"
      },
      image: g
    },
    {
      id: 5,
      name: "kollu sudheer",
      message: "Basic Consultancy is undoubtedly one of the best consultancies in Hyderabad for students aspiring to study abroad. Their team is professional, efficient, and dedicated to guiding students on the right path to secure their visas. I am extremely happy with their support and assistance throughout my study visa process. Special thanks to Vinod Anna and his team for their invaluable guidance, accurate information, and prompt communication, which were instrumental in making my dream of studying abroad a reality. Their attention to detail and commitment ensured a smooth and successful application process. I highly recommend Basic Co",
      location: "Hyderabad, Telengana, India",
      socialLinks: {
        // instagram: "https://instagram.com/sarah_worldwide",
        // linkedin: "https://linkedin.com/in/sarahmartinez",
        // twitter: "https://twitter.com/sarah_study_abroad"
      },
      image: k
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex(current => 
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(current => 
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-900">
        Student Success Stories
      </h2>
      
      <div className="relative max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-xl p-4 md:p-8">
          {/* Stack vertically on mobile, side by side on desktop */}
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 md:mr-8">
              <img 
                src={reviews[currentIndex].image} 
                alt={reviews[currentIndex].name} 
                className="rounded-full w-32 h-32 md:w-48 md:h-48 object-cover mx-auto shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg md:text-xl italic mb-4 text-gray-700">
                "{reviews[currentIndex].message}"
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <div>
                  <p className="font-semibold text-lg md:text-xl text-blue-900">
                    {reviews[currentIndex].name}
                  </p>
                  <p className="text-gray-600 text-sm md:text-base">
                    {reviews[currentIndex].location}
                  </p>
                </div>
                {/* <div className="flex space-x-4">
                  <a 
                    href={reviews[currentIndex].socialLinks.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:text-pink-800 transition"
                  >
                    <Instagram size={20} className="md:w-6 md:h-6" />
                  </a>
                  <a 
                    href={reviews[currentIndex].socialLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 transition"
                  >
                    <Linkedin size={20} className="md:w-6 md:h-6" />
                  </a>
                  <a 
                    href={reviews[currentIndex].socialLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 transition"
                  >
                    <Twitter size={20} className="md:w-6 md:h-6" /> 
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
        </div>

        <button 
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 bg-white p-1 md:p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} className="md:w-6 md:h-6" />
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 bg-white p-1 md:p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} className="md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
};

export default StudentTestimonials;