'use client'
import React, { useState, useEffect } from 'react'
import Globe from './Globe'
import Button from "./components/Botton"
import { Link } from 'react-router-dom'
import { UniversityCard } from '../components/home/UniversityCard'
import {
  Search, Book, FileSignature, Instagram, Linkedin, Twitter,
  LucideHome as HomeIcon, FileType, Plane as LucidePlane,
  Target, ClipboardCheck,
  School, GraduationCap, Users, ArrowRight, Settings
} from 'lucide-react';
import { motion } from 'framer-motion';
import rohit from "../assets/rohit.png";
import bhavani from "../assets/b.png";
import r from "../assets/r.png";
import g from "../assets/g.png";
import k from "../assets/k.png";

import  us4 from '../assets/UNITED STATES/Troy University - Troy, Alabama.webp';
import  en4 from '../assets/UK/University of Derby - Derby, England.jpg';
import  cn3 from '../assets/Canada/University of the Fraser Valley - Abbotsford, British Columbia.jpg';
import  sz1 from '../assets/Switzerland/EU Business School - Geneva, Montreux.jpg';
import gy2 from '../assets/Germany/Arden University - Berlin.jpg';
import ir2 from '../assets/IRELAND/University of Limerick - Limerick.webp';

import StudentTestimonials from './StudentTestimonials'

const LandingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const universities = [
    {
      "name": "Troy University",
      "location": "Troy, Alabama, USA",
      "image": us4
    },
    {
      "name": "University of Derby",
      "location": "Derby, England",
      "image": en4
    },     {
      "name": "University of the Fraser Valley",
      "location": "Abbotsford, British Columbia, Canada",
      "image": cn3
    },
    {
      "name": "EU Business School",
      "location": "Geneva, Montreux, Switzerland",
      "image": sz1
    },
    {
      "name": "Arden University",
      "location": "Berlin, Germany",
      "image": gy2
    },
    {
      "name": "University of Limerick",
      "location": "Limerick, Ireland",
      "image": ir2
    },
  ];
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
      location: "Hyderabad, Telengana,India",
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
      location: "Hyderabad, Telengana,India",
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
      location: "Hyderabad, Telengana,India",
      socialLinks: {
        // instagram: "https://instagram.com/sarah_worldwide",
        // linkedin: "https://linkedin.com/in/sarahmartinez",
        // twitter: "https://twitter.com/sarah_study_abroad"
      },
      image: k
    }
  ];

  // Filter universities based on the search term
  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const services = [
    {
      icon: GraduationCap,
      title: "Profile Evaluation",
      description: "Unlock your true potential with a comprehensive profile assessment, tailored to recommend top-tier universities based on your GPA, test scores, and unique talents.",
      color: "from-blue-50 to-indigo-50",
      link: "/profile"
    },
    {
      icon: Target,
      title: "Career Counseling",
      description: "Discover your dream career with expert guidance, helping you navigate paths that align seamlessly with your aspirations and ambitions.",
      color: "from-purple-50 to-pink-50",
      link: "/career"
    },
    {
      icon: Book,
      title: "Country Selection",
      description: "Find the perfect match for your goals with personalized recommendations for courses and destinations that fit your expectations and interests.",
      color: "from-green-50 to-emerald-50",
      link: "/course"
    },
    {
      icon: School,
      title: "University Selection",
      description: "Gain access to prestigious universities through verified partnerships, ensuring transparent processes and cost-effective solutions.",
      color: "from-orange-50 to-amber-50",
      link: "/universities"
    },
    {
      icon: ClipboardCheck,
      title: "Application Assistance",
      description: "Simplify your journey with expert support for applications, interviews, and documentation, ensuring every step is smooth and stress-free.",
      color: "from-teal-50 to-cyan-50",
      link: "/application"
    },
    {
      icon: FileType,
      title: "Admission & Scholarship Support",
      description: "Transform dreams into reality with strategic assistance in securing admissions and scholarships, helping you overcome financial barriers.",
      color: "from-rose-50 to-red-50",
      link: "/admission"
    },
    {
      icon: FileSignature,
      title: "Visa Assistance",
      description: "Navigate the complexities of visa applications with confidence through step-by-step expert guidance for your chosen destination.",
      color: "from-blue-50 to-sky-50",
      link: "/visa"
    },
    {
      icon: HomeIcon,
      title: "Accommodation Assistance",
      description: "Feel at home with personalized help in finding safe, affordable housing and connecting with supportive local communities.",
      color: "from-violet-50 to-purple-50",
      link: "/accommodation"
    },
    {
      icon: LucidePlane,
      title: "Travel & Pre-Departure Support",
      description: "Prepare for your journey with organized travel plans and detailed pre-departure briefings to ensure a seamless transition abroad.",
      color: "from-emerald-50 to-green-50",
      link: "/travel"
    }
  ];



  useEffect(() => {
    const reviewInterval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(reviewInterval);
  }, [reviews.length]);


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div>
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* White gradient background */}
        <div className="gradient-bg ">
          {/* Removed noise texture overlay div */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen w-full px-4 py-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2">
                <div className="relative max-w-[300px] md:max-w-[500px] mx-auto">
                  <Globe />
                  <div className="w-48 h-2.5 rounded-full bg-gray-300/30 mx-auto mt-4 blur-sm"></div>
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl text-white-900 font-bold tracking-tight leading-tight mb-6">
                  Your Journey to Global Education Starts Here
                </h2>
                <p className="text-white text-white-700 text-lg md:text-xl opacity-90 max-w-2xl mx-auto md:mx-0 mb-8">
                  Transform your future with world-class education opportunities abroad. Expert guidance for your international academic journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link
                    to='/contact'
                  ><Button
                    // onClick={handleClick}

                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                  >
                      Get Started
                    </Button></Link>
                  {/* <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-primary border-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Learn More
                </Button> */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <section className="py-20 px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <Link to={service.link} className="block">
                  <div className={`h-full bg-gradient-to-br ${service.color} rounded-2xl p-8 shadow-sm 
                hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                    <div className="flex items-center mb-4">
                      <service.icon className="w-12 h-12 text-blue-600 mr-4" />
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, number: "2000+", text: "Happy Students" },
              { icon: GraduationCap, number: "100+", text: "Partner Universities" },
              { icon: Settings, number: "30+", text: "Countries" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center"
              >
                <stat.icon className="w-12 h-12 mb-4" aria-hidden="true" />
                <motion.div
                  className="text-4xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-blue-900 text-white">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          aria-hidden="true"
        >
          <img
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Partner Universities</h2>
            <p className="text-xl max-w-2xl mb-8">
              Explore our network of prestigious universities worldwide.
              Find the perfect institution for your academic journey.
            </p>
            <motion.div
              className="max-w-2xl relative"
              animate={{ scale: isSearchFocused ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to='/universities'
              > <input
                  type="text"
                  // value={searchTerm}
                  // onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search universities..."
                  className="w-full px-6 py-4 rounded-lg text-gray-900 pr-12"
                  aria-label="Search Universities"
                // onFocus={() => setIsSearchFocused(true)}
                // onBlur={() => setIsSearchFocused(false)}
                /></Link>
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.length > 0 ? (
              filteredUniversities.map((university, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <UniversityCard {...university} />
                </motion.div>
              ))
            ) : (
              <p className="text-xl text-gray-700 col-span-full text-center">
                No universities match your search.
              </p>
            )}
          </div>
        </div>
      </section>

      <StudentTestimonials />

    </div>
  )
}

export default LandingPage

