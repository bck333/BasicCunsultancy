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

const LandingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };


  const universities = [
    {
      name: "Harvard University",
      location: "Cambridge, USA",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
      programs: "150+ Programs",
      students: "20,000+ Students"
    },
    {
      name: "Oxford University",
      location: "Oxford, UK",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80",
      programs: "350+ Programs",
      students: "25,000+ Students"
    },
    {
      name: "University of Toronto",
      location: "Toronto, Canada",
      image: "https://www.universitymagazine.ca/wp-content/uploads/2022/01/What-is-the-University-of-Toronto-Acceptance-Rate.jpg",
      programs: "200+ Programs",
      students: "30,000+ Students"
    },
    {
      name: "Massachusetts Institute of Technology",
      location: "Cambridge, USA",
      image: "/placeholder.svg?height=200&width=300",
      programs: "120+ Programs",
      students: "18,000+ Students"
    },
    {
      name: "University of Cambridge",
      location: "Cambridge, UK",
      image: "/placeholder.svg?height=200&width=300",
      programs: "300+ Programs",
      students: "23,000+ Students"
    },
    {
      name: "California Institute of Technology",
      location: "Pasadena, USA",
      image: "/placeholder.svg?height=200&width=300",
      programs: "100+ Programs",
      students: "5,000+ Students"
    },
  ];
  const reviews = [
    {
      id: 1,
      name: "Emily Johnson",
      message: "Amazing support throughout my study abroad journey to the UK! The consultants made everything so smooth and stress-free.",
      location: "Studied in London, UK",
      socialLinks: {
        instagram: "https://instagram.com/emily_travels",
        linkedin: "https://linkedin.com/in/emilyjohnson",
        twitter: "https://twitter.com/emily_abroad"
      },
      image: "/api/placeholder/200/200" // Placeholder for student image
    },
    {
      id: 2,
      name: "Michael Chen",
      message: "Helped me navigate the complex application process for studying in Canada. Couldn't have done it without their expertise!",
      location: "Studied in Toronto, Canada",
      socialLinks: {
        instagram: "https://instagram.com/michael_explorer",
        linkedin: "https://linkedin.com/in/michaelchen",
        twitter: "https://twitter.com/michael_global"
      },
      image: "/api/placeholder/200/200"
    },
    {
      id: 3,
      name: "Sarah Martinez",
      message: "Professional, caring, and incredibly knowledgeable. They found the perfect university program for my academic goals.",
      location: "Studied in Sydney, Australia",
      socialLinks: {
        instagram: "https://instagram.com/sarah_worldwide",
        linkedin: "https://linkedin.com/in/sarahmartinez",
        twitter: "https://twitter.com/sarah_study_abroad"
      },
      image: "/api/placeholder/200/200"
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
      longDescription: "Profile evaluation serves as the gateway to understanding your eligibility for global education opportunities. Our experts thoroughly analyze every aspect of your academic and extracurricular profile, including GPA, standardized test scores (like GRE, TOEFL, IELTS), and leadership roles. Additionally, we evaluate your personal interests and career aspirations to create a tailored list of potential universities. By leveraging years of experience and industry insights, we help you understand where you stand among peers and guide you on how to further strengthen your profile to secure admissions to world-class institutions.",
      color: "from-blue-50 to-indigo-50"
    },
    {
      icon: Target,
      title: "Career Counseling",
      description: "Discover your dream career with expert guidance, helping you navigate paths that align seamlessly with your aspirations and ambitions.",
      longDescription: "Choosing the right career is one of the most critical decisions in life, and our career counseling service ensures you make informed choices. Our experts assess your interests, strengths, and long-term goals to help you explore suitable career paths. We provide a clear understanding of the opportunities and challenges in each field, guiding you to make confident decisions. Whether you're confused about your options or need clarity on your aspirations, our professional approach ensures you get a comprehensive outlook for a successful career.",
      color: "from-purple-50 to-pink-50"
    },
    {
      icon: Book,
      title: "Course & Country Selection",
      description: "Find the perfect match for your goals with personalized recommendations for courses and destinations that fit your expectations and interests.",
      longDescription: "With thousands of courses available across the globe, selecting the right one can be overwhelming. Our course and country selection service simplifies this process by offering expert recommendations based on your interests, career goals, and financial plans. We analyze course curricula, program requirements, and post-study work opportunities to match your expectations. Additionally, we guide you in choosing the ideal study destination by evaluating factors such as culture, cost of living, and career prospects in each country.",
      color: "from-green-50 to-emerald-50"
    },
    {
      icon: School,
      title: "University Selection",
      description: "Gain access to prestigious universities through verified partnerships, ensuring transparent processes and cost-effective solutions.",
      longDescription: "Selecting the right university is key to achieving your academic and professional goals. Our university selection service connects you with top institutions worldwide through our direct partnerships. We carefully evaluate factors such as accreditation, facilities, course offerings, and placement opportunities to ensure you choose the best fit for your aspirations. By avoiding intermediaries, we ensure a transparent and cost-effective process, helping you secure admission to reputable universities.",
      color: "from-orange-50 to-amber-50"
    },
    {
      icon: ClipboardCheck,
      title: "Application Assistance",
      description: "Simplify your journey with expert support for applications, interviews, and documentation, ensuring every step is smooth and stress-free.",
      longDescription: "Filing university applications can be daunting, especially when dealing with different processes and deadlines. Our application assistance service simplifies this journey by providing step-by-step guidance. We help with eligibility checks, document preparation, and error-free application submissions. From scholarships and financial statements to certificates and interview preparation, our experts ensure that every detail is handled with precision for a seamless application experience.",
      color: "from-teal-50 to-cyan-50"
    },
    {
      icon: FileType,
      title: "Admission & Scholarship Support",
      description: "Transform dreams into reality with strategic assistance in securing admissions and scholarships, helping you overcome financial barriers.",
      longDescription: "For many students, financial constraints can be a significant hurdle in studying abroad. Our admission and scholarship support service ensures you receive the necessary guidance to overcome these challenges. We help you identify merit-based scholarships, fee waivers, and financial aid opportunities available at universities. By carefully analyzing your profile and achievements, we increase your chances of securing scholarships that reduce financial stress and make your dreams a reality.",
      color: "from-rose-50 to-red-50"
    },
    {
      icon: FileSignature,
      title: "Visa Assistance",
      description: "Navigate the complexities of visa applications with confidence through step-by-step expert guidance for your chosen destination.",
      longDescription: "Obtaining a visa is often the most critical step in the study abroad process. Our visa assistance service ensures you are fully prepared by guiding you through every stage of the application. We help with accurate documentation, certificate attestation, and financial proofing. Additionally, we provide detailed visa interview preparation to boost your confidence and ensure a smooth approval process. Our expertise covers the unique requirements of each country's visa procedures, minimizing delays or rejections.",
      color: "from-blue-50 to-sky-50",
      visaInfo: [
        {
          title: "Study Visa",
          description: "A visa that allows international students to pursue educational goals in a foreign country, enabling them to immerse themselves in a new culture while obtaining knowledge and skills.",
          longDescription: "A Study Visa is a document that allows international students to pursue their educational goals in a foreign country. It grants them the opportunity to immerse themselves in a new culture while acquiring knowledge and skills. A Study Visa opens doors to global learning opportunities, enabling students to explore diverse educational environments, engage with international communities, and shape their future through academic pursuits abroad."
        },
        {
          title: "H-1B Visa",
          description: "A non-immigrant work visa granted to foreign professionals with specialized skills, allowing them to work temporarily in the United States.",
          longDescription: "The H-1B Visa is a non-immigrant work visa granted to foreign professionals with specialized skills and expertise, allowing them to work temporarily in the United States. It enables foreign workers to contribute to the U.S. economy in fields such as technology, engineering, medical professions, and more. H-1B visa holders can expand their professional horizons by working in the United States, collaborating with top companies, and making significant contributions to their respective fields."
        },
        {
          title: "PR Visa (Permanent Residency)",
          description: "A Permanent Residency Visa grants foreign nationals the right to reside permanently in a foreign country, with access to benefits and privileges such as healthcare, social services, and the potential for citizenship.",
          longDescription: "A Permanent Residency (PR) Visa is an immigration status that grants foreign nationals the right to live permanently in a foreign country, with access to benefits and privileges available to citizens. A PR visa enables individuals to settle in a new country, work, and enjoy the long-term stability and rights that come with permanent residence. Additionally, it often provides a pathway to citizenship, offering greater opportunities for personal and professional growth."
        },
        {
          title: "Work Visa",
          description: "A Work Visa allows individuals to legally work in a foreign country for a specific period, granting them employment rights and access to the country's workforce and economy.",
          longDescription: "A Work Visa allows individuals to legally work in a foreign country for a specified period, granting them employment rights and the opportunity to contribute to the host country's workforce and economy. This visa type enables individuals to pursue their career goals in international settings, gain valuable experience, and improve their professional prospects, while also experiencing the cultural and lifestyle benefits of living abroad."
        },
        {
          title: "Tourist Visa",
          description: "A Tourist Visa is a travel permit that allows individuals to visit a foreign country for recreation, tourism, and exploration.",
          longDescription: "A Tourist Visa is a travel permit that allows individuals to visit a foreign country for leisure purposes, including sightseeing, experiencing new cultures, and enjoying local attractions. This visa allows travelers to explore new destinations, take part in cultural activities, and immerse themselves in different landscapes, creating unforgettable memories while adhering to the host country's immigration rules."
        },
        {
          title: "Investor Visa",
          description: "An Investor Visa permits individuals to invest capital in a foreign country, contributing to its economy, generating business opportunities, and potentially gaining access to permanent residency or citizenship.",
          longDescription: "An Investor Visa allows individuals to invest a significant amount of capital in a foreign country, thereby contributing to its economy and generating business opportunities. This visa type is ideal for entrepreneurs and investors who wish to grow their businesses internationally while gaining access to new markets and expanding their global presence. In many cases, the Investor Visa also offers a pathway to permanent residency or citizenship, providing long-term benefits in the host country."
        },
        {
          title: "Business Visa",
          description: "A Business Visa enables individuals to engage in business-related activities, such as attending conferences, meetings, and negotiations, in foreign countries.",
          longDescription: "A Business Visa allows individuals to travel to foreign countries for professional purposes, including attending business meetings, conferences, and negotiations. This visa is designed for entrepreneurs, executives, and professionals looking to expand their networks, explore new business opportunities, and collaborate with international counterparts. A Business Visa opens doors to cross-border collaborations and economic growth, empowering individuals to grow their businesses on a global scale."
        }
      ]
    },
    {
      icon: HomeIcon,
      title: "Accommodation Assistance",
      description: "Feel at home with personalized help in finding safe, affordable housing and connecting with supportive local communities.",
      longDescription: "Finding the right accommodation in a foreign country can be challenging, especially for first-time travelers. Our accommodation assistance service helps you secure safe, affordable housing in student-friendly communities. We leverage our network of alumni and local contacts to recommend the best options for your needs. From understanding rental agreements to connecting you with local support groups, we ensure a smooth and comfortable transition to your new environment.",
      color: "from-violet-50 to-purple-50"
    },
    {
      icon: LucidePlane,
      title: "Travel & Pre-Departure Support",
      description: "Prepare for your journey with organized travel plans and detailed pre-departure briefings to ensure a seamless transition abroad.",
      longDescription: "Your journey abroad begins with careful planning and preparation. Our travel and pre-departure support service ensures a stress-free start by organizing travel arrangements and providing essential information. We offer detailed briefings on local laws, cultural norms, and emergency contacts to ensure your safety. Additionally, we assist with currency exchange, packing tips, and immigration requirements, helping you confidently step into your new life abroad.",
      color: "from-emerald-50 to-green-50"
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
              <div
                key={index}
                className="group relative cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => handleServiceClick(service)}
                onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service)}
              >
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative"
                >
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
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {isModalOpen && selectedService && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white/95 backdrop-blur rounded-xl max-w-2xl w-full max-h-[85vh] overflow-hidden shadow-2xl transform scale-100 transition-all duration-300 animate-in zoom-in-95"
            onClick={e => e.stopPropagation()}
          >
            {/* Header with gradient background */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 relative">
              <h2 className="text-2xl font-bold text-white mb-2">
                {selectedService.title}
              </h2>
              <div className="absolute top-4 right-4">
                <button
                  onClick={closeModal}
                  className="rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content area with custom scrollbar */}
            <div className="p-8 overflow-y-auto max-h-[60vh] custom-scrollbar">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {selectedService?.longDescription}
                </p>
                {selectedService?.visaInfo?.length > 0 && (
                  <div className="mt-8 bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Visa Information</h3>
                    <ul className="space-y-3">
                      {selectedService.visaInfo.map((visa, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <div>
                            <h4 className="text-lg font-medium text-blue-800">{visa.title}</h4>
                            <p className="text-gray-600">{visa.description}</p>
                            <p className="text-gray-500">{visa.longDescription}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )
      }

      <style  >{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #CBD5E0 transparent;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #CBD5E0;
          border-radius: 3px;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes zoom-in-95 {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }

        .animate-in {
          animation-duration: 300ms;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          animation-fill-mode: forwards;
        }

        .fade-in {
          animation-name: fade-in;
        }

        .zoom-in-95 {
          animation-name: zoom-in-95;
        }
      `}</style>

      {/* {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold">{selectedService.title}</h2>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              <p className="text-gray-600">{selectedService.longDescription}</p>
            </div>
          </div>
        </div>
      )} */}

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

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Student Success Stories</h2>
        <div className="relative h-96">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentReviewIndex
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-full'
                }`}
            >
              <div className="bg-white shadow-2xl rounded-xl p-8 flex items-center max-w-4xl mx-auto">
                <div className="w-1/3 mr-8">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="rounded-full w-48 h-48 object-cover mx-auto shadow-lg"
                  />
                </div>
                <div className="w-2/3">
                  <p className="text-xl italic mb-4 text-gray-700">"{review.message}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-xl text-blue-900">{review.name}</p>
                      <p className="text-gray-600">{review.location}</p>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={review.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-800 transition"
                      >
                        <Instagram size={24} />
                      </a>
                      <a
                        href={review.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-900 transition"
                      >
                        <Linkedin size={24} />
                      </a>
                      <a
                        href={review.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-600 transition"
                      >
                        <Twitter size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div >
  )
}

export default LandingPage

