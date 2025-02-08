import React, { useState,useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, Linkedin, Twitter } from 'lucide-react';
import rohit from "../assets/rohit.png";
import bhavani from "../assets/b.png";
import r from "../assets/r.png";
import g from "../assets/g.png";
import k from "../assets/k.png";
import uday from "../assets/uday.png";
import saha from "../assets/saha.png";
import c from "../assets/c.png";
import p from "../assets/p.png";
import s from "../assets/s.png";
import b from "../assets/b.png";
import bnth from "../assets/nth.png";
import shaik from "../assets/shaik.png";

const StudentTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
    const reviews = [
      {
        id: 1,
        name: "Haik Saleem",
        message: "I had an excellent experience with Basic Consultancy and their team throughout my study abroad visa process. From start to finish, they demonstrated professionalism and transparency, ensuring everything was handled seamlessly. A special thanks to Vinod Anna, who was incredibly honest, kind, and patient in addressing every single query I had during the application process. The entire Basic Consultancy team was highly responsible, supportive, and proactive right from the beginning. I highly recommend Basic Consultancy for anyone seeking assistance with study abroad programs or other visa services. I am deeply grateful to Vinod Anna and his team for their exceptional support, which gave me complete confidence in my visa application process.",
        location: "Hyderabad, Telangana, India",
        socialLinks: {},
        image: shaik
      },
      {
        id: 2,
        name: "Sunny Goud",
        message: "Basic Consultants made my dream come true with their expert guidance. My UK visa was approved quickly, thanks to the entire team, especially Vinod Sir. I had a great experience throughout the entire process. The team provided proper guidance, and I highly appreciate Basic Consultants for being the best UK consultancy for abroad education in Hyderabad.",
        location: "Hyderabad, Telangana, India",
        socialLinks: {},
        image: s
      },
      {
        id: 3,
        name: "Bindu Reddy",
        message: "I'm so excited to announce that my Ireland visa application was approved. A huge thank you to Basic Consultancy, especially Vinod Anna. From the very beginning, he was incredibly helpful—explaining everything clearly, answering all my questions patiently, and making the entire process smooth. After a 50-day wait, my visa was finally approved. I highly recommend Basic Consultancy for any visa applications!",
        location: "Hyderabad, Telangana, India",
        socialLinks: {},
        image: b
      },
      {
        id: 4,
        name: "Shravya Gaddam",
        message: "Basic Consultancy exceeded my expectations with their professionalism and expertise. Their team provided clear, well-structured advice tailored to my needs, making the entire process smooth and stress-free. They were always available to answer my questions and ensured that every detail was handled efficiently. If you're looking for a trustworthy and knowledgeable consultancy service, Basic Consultancy is the perfect choice!",
        location: "Hyderabad, Telangana, India",
        socialLinks: {},
        image: s
      },
      {
        id: 5,
        name: "Banavath Prasad",
        message: "Vinod Anna and his team provided exceptional support throughout every stage of my visa process. They were highly cooperative, professional, and demonstrated excellent skills. I truly appreciate their dedication and expertise. Highly recommend!",
        location: "Hyderabad, Telangana, India",
        socialLinks: {},
        image:bnth
      },
      {
        id: 6,
        name: "Ram Praneeth",
        message: "I had an excellent experience with Basic Consultancy. The team, especially Mr. Vinod, is professional, responsive, and truly understands the needs of their clients. From the start, they provided clear guidance, timely updates, and personalized support that made the entire process smooth and stress-free. Their expertise and dedication make them the perfect choice for USA aspirants. Highly recommend for anyone seeking top-notch consultancy services.",
        location: "Hyderabad, Telangana, India",
        socialLinks: {},
        image: r
      },
      {
        id: 7,
        name: "Ruchitha Reddy",
        message: "After a journey of anticipation and hard work, I am thrilled to have received my visa for Ireland. This significant step wouldn’t have been possible without the guidance and dedication of Vinod Anna and Amar Anna from Basic Consultancy. From navigating through detailed documentation to addressing each aspect of the visa process, their support made all the difference. After a 45-day wait through VFS Global, the result feels even sweeter, marking the culmination of a beautiful journey. I’m deeply grateful to them for their assistance, which has made this dream a reality.",
        location: "Hyderabad, Telangana, India",
        socialLinks: {},
        image: r
      },
      {
        id: 8,
        name: "Udaykumar Reddy",
        message: "I'm thrilled to share that I received my Ireland visa today! I submitted my application through VFS Global on October 28, and it took about a month to process. I would like to express my heartfelt gratitude to Vinod and Amar Anna from Basic Consultancy for their pivotal role in guiding me through the entire process. Their unwavering support and encouragement, especially during moments of doubt, made all the difference. I deeply appreciate their dedication and moral support throughout this journey.",
        location: "Hyderabad, Telangana, India",
        socialLinks: {},
        image: uday
      },    
    {
      id: 9,
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
      id: 10,
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
      id: 11,
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
      id: 12,
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
      id: 13,
      name: "kollu sudheer",
      message: "Basic Consultancy is undoubtedly one of the best consultancies in Hyderabad for students aspiring to study abroad. Their team is professional, efficient, and dedicated to guiding students on the right path to secure their visas. I am extremely happy with their support and assistance throughout my study visa process. Special thanks to Vinod Anna and his team for their invaluable guidance, accurate information, and prompt communication, which were instrumental in making my dream of studying abroad a reality. Their attention to detail and commitment ensured a smooth and successful application process. I highly recommend Basic Co",
      location: "Hyderabad, Telengana, India",
      socialLinks: {
        // instagram: "https://instagram.com/sarah_worldwide",
        // linkedin: "https://linkedin.com/in/sarahmartinez",
        // twitter: "https://twitter.com/sarah_study_abroad"
      },
      image: k
    },
    {
      id: 14,
      name: "Pravalika 4156",
      message: "From the very beginning, the team at Basic Consultancy was professional, knowledgeable, and took the time to understand my unique situation. They guided me through the entire application process, providing me with all the necessary information, documents, Zoom meetings, and support I needed. Basic Consultancy is the best for the abroad education process. I am very thankful to Basic Consultancy and their team for their excellent service.",
      location: "Hyderabad, Telangana, India",
      socialLinks: {},
      image: p
    },
    {
      id: 10,
      name: "Pidikiti Sumanth Kumar",
      message: "I am greatly thankful to Basic Consultancy, Vinod brother, and the team. Choosing Basic Consultancy was a wise decision for abroad application guidance. Their knowledgeable staff offered invaluable assistance and support, ensuring that I had everything I needed for a successful application. Highly satisfied with their professionalism. Excellent service and trustworthy consultancy with utmost guidance and hospitality. The way they guide and provide career guidance is exceptional. In one word, the most reliable consultant in every aspect. They helped me a lot to get my Ireland visa. My sincere gratitude to Vinod brother and the team for making my dream come true. I sincerely recommend Basic Consultancy to those who aspire to pursue their dreams abroad.",
      location: "Hyderabad, Telangana, India",
      socialLinks: {},
      image: p
    },
    {
      id: 11,
      name: "Sahasra Sampangi",
      message: "I sincerely thank the entire team of Basic Consultancy from the bottom of my heart for the assistance they provided me throughout the application process. From day one to the moment my visa was stamped, their support was exceptional. I am very grateful to Vinod Sir for patiently answering all my queries and doubts. The way they handled my entire process was extremely professional, and I am very happy with their service. Once again, thank you! Highly recommended for visa filing. #BASIC CONSULTANT.",
      location: "Hyderabad, Telangana, India",
      socialLinks: {},
      image: saha
    },
    {
      id: 16,
      name: "Chandana Sai51",
      message: "I’m very much thankful to Vinod Anna from Basic Consultants for guiding me in the proper way to get my UK visa approved. Vinod bro and his team have great knowledge of UK documentation and the process. I highly recommend Basic Consultants for your visa process.",
      location: "Hyderabad, Telangana, India",
      socialLinks: {},
      image: c
    }
  ];

  
    // const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrevious = () => {
      setCurrentIndex(current => (current === 0 ? reviews.length - 1 : current - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex(current => (current === reviews.length - 1 ? 0 : current + 1));
    };
  
    // Auto-slide effect
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 10000); // Change slide every 5 seconds
  
      return () => clearInterval(interval); // Cleanup interval on unmount
    }, [currentIndex]);
  
    return (
      <section className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-blue-900">
          Student Success Stories
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white shadow-2xl rounded-xl p-4 md:p-8">
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
                </div>
              </div>
            </div>
          </div>
  
          {/* Navigation Buttons */}
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