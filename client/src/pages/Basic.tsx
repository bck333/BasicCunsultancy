import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X, BookOpen, ArrowRight, Briefcase, Globe, Coins, Plane, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { section } from 'framer-motion/client';


const iconMap = {
  'AGENDA': BookOpen,
  'SERVICES PROVIDED BY BASIC CONSULTANTS': Briefcase,
  'ZERO PROCESSING FEE': Coins,
  'FREE EDUCATION IN EUROPE': Globe,
  'LOW BUDGET COUNTRIES': Coins,
  'NO VISA INTERVIEW COUNTRIES': Plane,
  'GOVERNMENT FUNDED SCHOLARSHIPS FOR ABROAD STUDIES': Award
};

const Basic = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const dashboardItems = [
    { title: 'ZERO PROCESSING FEE', description: 'Processing fee waivers for select countries.' },
    { title: 'FREE EDUCATION IN EUROPE', description: 'Access free education opportunities in Europe.' },
    { title: 'LOW BUDGET COUNTRIES', description: 'Cost-effective study abroad options.' },
    { title: 'NO VISA INTERVIEW COUNTRIES', description: 'Hassle-free visa processes.' },
    { title: 'GOVERNMENT FUNDED SCHOLARSHIPS FOR ABROAD STUDIES', description: 'Fully funded scholarships exploration.' },
    { title: 'CENTRAL GOVERNMENT SCHOLARSHIPS', description: 'Support for deserving students.' },
  ];

  const tooltipContent = {
    'ZERO PROCESSING FEE': [
      {
        name: "USA",
        description: "World-class education with various scholarships and funding opportunities.",
        eligibility: {
          bachelors: "12th pass and any English exam (IELTS 6, PTE 58, Duolingo 110, TOEFL 78).",
          masters: "Bachelor's degree (55%) and any English exam.",
          intake: "Spring (January), Summer (April), Fall (August).",
          fee: "Minimum ₹10 lakhs per year."
        }
      },
      {
        name: "UK",
        description: "Prestigious universities with shorter course durations and cost-effective programs.",
        eligibility: {
          bachelors: "12th pass; eligibility depends on English marks.",
          masters: "Bachelor's degree (55%); eligibility depends on English marks.",
          intake: "Spring (January), Summer (April), Fall (September).",
          fee: "Minimum ₹12 lakhs per year."
        }
      },
      {
        name: "Ireland",
        description: "A hub for technology and innovation with strong post-study work opportunities.",
        eligibility: {
          bachelors: "12th pass and any English exam (IELTS 6, PTE 58, Duolingo 110, TOEFL 78).",
          masters: "Bachelor's degree (55%) and any English exam.",
          intake: "January, April, September.",
          fee: "₹10 lakhs per year."
        }
      },
      {
        name: "Canada",
        description: "Welcoming culture, affordable education, and high quality of life.",
        eligibility: {
          bachelors: "12th pass (60%) and center-based English exams only (IELTS 6.5, PTE 58, TOEFL 78).",
          masters: "Bachelor's degree (55%) and center-based English exams only.",
          intake: "Spring (January), Summer (April), Fall (August).",
          fee: "₹10 lakhs per year."
        }
      },
      {
        name: "Australia",
        description: "Research-focused education and excellent post-study work options.",
        eligibility: {
          bachelors: "12th pass (60%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78).",
          masters: "Bachelor's degree (55%) and center-based English exams.",
          intake: "February, June.",
          fee: "₹15 lakhs per year."
        }
      },
      {
        name: "New Zealand",
        description: "Scenic beauty combined with a robust education system and research opportunities.",
        eligibility: {
          bachelors: "12th pass (60%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78, Duolingo 115).",
          masters: "Bachelor's degree (55%) and center-based English exams.",
          intake: "February, June.",
          fee: "₹18 lakhs per year."
        }
      }
    ],
    'FREE EDUCATION IN EUROPE': [
      {
        name: "Germany",
        description: "Offers free or low-cost education at public universities for international students.",
        eligibility: {
          masters: "Bachelor's degree (80%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78).",
          intake: "Spring (March), Fall (September).",
          fee: "Free."
        }
      },
      {
        name: "Luxembourg",
        description: "Affordable education with multilingual programs and a strong academic reputation.",
        eligibility: {
          masters: "Bachelor's degree (80%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78).",
          intake: "Varies.",
          fee: "Free."
        }
      },
      {
        name: "Estonia",
        description: "Emerging as an education hub with scholarships and modern academic facilities.",
        eligibility: {
          masters: "Bachelor's degree (70%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78).",
          intake: "Varies.",
          fee: "Free."
        }
      },
      {
        name: "France",
        description: "Affordable tuition with numerous scholarships for international students.",
        eligibility: {
          masters: "Bachelor's degree (80%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78).",
          intake: "Varies.",
          fee: "Free."
        }
      },
      {
        name: "Finland",
        description: "Innovative education system offering scholarships for international students.",
        eligibility: {
          masters: "Bachelor's degree (80%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78).",
          intake: "Varies.",
          fee: "₹10 lakhs per year."
        }
      },
      {
        name: "Norway",
        description: "Free education at public universities, even for non-EU students.",
        eligibility: {
          masters: "Bachelor's degree (80%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78).",
          intake: "Varies.",
          fee: "Free."
        }
      },
      {
        name: "Austria",
        description: "Affordable tuition fees with a focus on cultural and academic development.",
        eligibility: {
          masters: "Bachelor's degree (70%).",
          intake: "Summer (April), Fall (September).",
          fee: "Free."
        }
      },
      {
        name: "Italy",
        description: "Rich cultural heritage and affordable education options for international students.",
        eligibility: {
          bachelors: "12th pass (60%).",
          masters: "Bachelor's degree (65%).",
          intake: "Spring (January), Fall (September).",
          fee: "Free."
        }
      }
    ],
    'LOW BUDGET COUNTRIES': [
      {
        name: "Latvia",
        description: "Affordable tuition and living costs with diverse study programs.",
        eligibility: {
          bachelors: "12th pass (60%).",
          masters: "Bachelor's degree (55%).",
          intake: "Spring (March), Fall (September).",
          fee: "₹3.5 lakhs per year.",
          budget: "₹4 lakhs from admission to visa."
        }
      },
      {
        name: "Lithuania",
        description: "Low-cost education and a growing reputation for quality academic programs.",
        eligibility: {
          bachelors: "12th pass (60%).",
          masters: "Bachelor's degree (55%).",
          intake: "Spring (March), Fall (September).",
          fee: "₹3.5 lakhs per year.",
          budget: "₹4 lakhs from admission to visa."
        }
      },
      {
        name: "Portugal",
        description: "Affordable tuition with a focus on cultural and academic experiences.",
        eligibility: {
          bachelors: "12th pass (60%).",
          masters: "Bachelor's degree (55%).",
          intake: "Spring (March), Fall (September).",
          fee: "₹3.5 lakhs per year.",
          budget: "₹4 lakhs from admission to visa."
        }
      },
      {
        name: "Poland",
        description: "Cost-effective education with a strong academic tradition.",
        eligibility: {
          bachelors: "12th pass (60%).",
          masters: "Bachelor's degree (55%).",
          intake: "Spring (March), Fall (September).",
          fee: "₹3.5 lakhs per year.",
          budget: "₹4 lakhs from admission to visa."
        }
      },
      {
        name: "Slovakia",
        description: "Low living costs and affordable tuition fees for international students.",
        eligibility: {
          bachelors: "12th pass (60%).",
          masters: "Bachelor's degree (55%).",
          intake: "Spring (March), Fall (September).",
          fee: "₹3.5 lakhs per year.",
          budget: "₹4 lakhs from admission to visa."
        }
      },
      {
        name: "Hungary",
        description: "Affordable programs with high academic standards and research opportunities.",
        eligibility: {
          bachelors: "12th pass (60%).",
          masters: "Bachelor's degree (55%).",
          intake: "Spring (March), Fall (September).",
          fee: "₹3.5 lakhs per year.",
          budget: "₹4 lakhs from admission to visa."
        }
      },
      {
        name: "Slovenia",
        description: "Affordable education with a focus on quality and research.",
        eligibility: {
          bachelors: "12th pass (60%).",
          masters: "Bachelor's degree (55%).",
          intake: "Spring (March), Fall (September).",
          fee: "₹3.5 lakhs per year.",
          budget: "₹4 lakhs from admission to visa."
        }
      }
    ],
    'NO VISA INTERVIEW COUNTRIES': [
      {
        name: "Malta",
        description: "Simplified visa process and high-quality education in a beautiful environment.",
        eligibility: {
          bachelors: "12th pass.",
          masters: "Bachelor's degree (55%).",
          intake: "Every two months.",
          fee: "₹7 lakhs per year.",
          budget: "₹7.5 lakhs from admission to visa."
        }
      },
      {
        name: "Ireland",
        description: "No visa interview required, with strong post-study work opportunities.",
        eligibility: {
          bachelors: "12th pass and any English exam (IELTS 6, PTE 58, Duolingo 110, TOEFL 78).",
          masters: "Bachelor's degree (55%) and any English exam.",
          intake: "January, April, September.",
          fee: "₹10 lakhs per year."
        }
      },
      {
        name: "Italy",
        description: "Streamlined visa process and affordable tuition for international students.",
        eligibility: {
          bachelors: "12th pass (60%).",
          masters: "Bachelor's degree (65%).",
          intake: "Spring (January), Fall (September).",
          fee: "Free.",
          budget: "₹1 lakh from admission to visa."
        }
      },
      {
        name: "Sweden",
        description: "No visa interview and access to high-quality academic programs.",
        eligibility: {
          masters: "Bachelor's degree (60%).",
          intake: "Fall (August).",
          fee: "₹8 lakhs per year.",
          budget: "₹9 lakhs from admission to visa."
        }
      },
      {
        name: "Luxembourg",
        description: "Simplified visa requirements and multilingual study options.",
        eligibility: {
          masters: "Bachelor's degree (80%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78).",
          intake: "Varies.",
          fee: "Free.",
          budget: "₹1.5 lakhs from admission to visa."
        }
      },
      {
        name: "Finland",
        description: "No visa interview, with scholarships for international students.",
        eligibility: {
          masters: "Bachelor's degree (80%) and center-based English exams (IELTS 6.5, PTE 58, TOEFL 78).",
          intake: "Varies.",
          fee: "₹10 lakhs per year.",
          budget: "₹1.5 lakhs from admission to visa."
        }
      },
      {
        name: "Austria",
        description: "Streamlined visa process and affordable education.",
        eligibility: {
          masters: "Bachelor's degree (70%).",
          intake: "Summer (April), Fall (September).",
          fee: "Free.",
          budget: "₹1.5 lakhs from admission to visa."
        }
      },
      {
        name: "Canada",
        description: "Simplified visa process with a strong academic and cultural environment.",
        eligibility: {
          bachelors: "12th pass (60%) and center-based English exams only (IELTS 6.5, PTE 58, TOEFL 78).",
          masters: "Bachelor's degree (55%) and center-based English exams only.",
          intake: "Spring (January), Summer (April), Fall (August).",
          fee: "₹10 lakhs per year."
        }
      }
    ],
    //   'ZERO PROCESSING FEE': [
    //   { name: "USA", description: "World-class education with various scholarships and funding opportunities." },
    //   { name: "UK", description: "Prestigious universities with shorter course durations and cost-effective programs." },
    //   { name: "Ireland", description: "A hub for technology and innovation with strong post-study work opportunities." },
    //   { name: "Canada", description: "Welcoming culture, affordable education, and high quality of life." },
    //   { name: "Australia", description: "Research-focused education and excellent post-study work options." },
    //   { name: "New Zealand", description: "Scenic beauty combined with a robust education system and research opportunities." }
    // ],
    // 'FREE EDUCATION IN EUROPE': [
    //   { name: "Germany", description: "Offers free or low-cost education at public universities for international students." },
    //   { name: "Luxembourg", description: "Affordable education with multilingual programs and a strong academic reputation." },
    //   { name: "Estonia", description: "Emerging as an education hub with scholarships and modern academic facilities." },
    //   { name: "France", description: "Affordable tuition with numerous scholarships for international students." },
    //   { name: "Finland", description: "Innovative education system offering scholarships for international students." },
    //   { name: "Norway", description: "Free education at public universities, even for non-EU students." },
    //   { name: "Austria", description: "Affordable tuition fees with a focus on cultural and academic development." },
    //   { name: "Italy", description: "Rich cultural heritage and affordable education options for international students." }
    // ],
    // 'LOW BUDGET COUNTRIES': [
    //   { name: "Latvia", description: "Affordable tuition and living costs with diverse study programs." },
    //   { name: "Lithuania", description: "Low-cost education and a growing reputation for quality academic programs." },
    //   { name: "Portugal", description: "Affordable tuition with a focus on cultural and academic experiences." },
    //   { name: "Poland", description: "Cost-effective education with a strong academic tradition." },
    //   { name: "Slovakia", description: "Low living costs and affordable tuition fees for international students." },
    //   { name: "Hungary", description: "Affordable programs with high academic standards and research opportunities." },
    //   { name: "Slovenia", description: "Affordable education with a focus on quality and research." }
    // ],
    // 'NO VISA INTERVIEW COUNTRIES': [
    //   { name: "Malta", description: "Simplified visa process and high-quality education in a beautiful environment." },
    //   { name: "Ireland", description: "No visa interview required, with strong post-study work opportunities." },
    //   { name: "Italy", description: "Streamlined visa process and affordable tuition for international students." },
    //   { name: "Sweden", description: "No visa interview and access to high-quality academic programs." },
    //   { name: "Luxembourg", description: "Simplified visa requirements and multilingual study options." },
    //   { name: "Finland", description: "No visa interview, with scholarships for international students." },
    //   { name: "Austria", description: "Streamlined visa process and affordable education." },
    //   { name: "Canada", description: "Simplified visa process with a strong academic and cultural environment." }
    // ],
    'GOVERNMENT FUNDED SCHOLARSHIPS FOR ABROAD STUDIES': [
      {
        name: "Telangana Government",
        description: "Various scholarships for economically weaker sections."
      },
      {
        name: "Telangana Overseas Scholarship Scheme",
        description: "Eligibility: Economically weaker sections (EWS). Amount: Up to ₹20 Lakhs."
      },
      {
        name: "Post Matric Scholarships",
        description: "Eligibility: SC, ST, and OBC students. Amount: Up to ₹20 Lakhs."
      },
      {
        name: "Andhra Pradesh Government Scholarships",
        description: "Various options for financially disadvantaged students in Andhra Pradesh."
      },
      {
        name: "Ambedkar Overseas Vidya Nidhi",
        description: "Eligibility: SC, ST, and OBC students. Amount: Up to ₹15 lakh for the entire course."
      },
      {
        name: "Chief Minister’s Overseas Scholarship Scheme",
        description: "Eligibility: Economically disadvantaged students. Amount: Up to ₹20 lakh."
      }
    ],
    'CENTRAL GOVERNMENT SCHOLARSHIPS': [
      {
        name: "National Overseas Scholarship Scheme",
        description: "Eligibility: SC, ST, and OBC candidates for postgraduate studies. Amount: Up to ₹15 lakh for tuition and living expenses."
      },
      {
        name: "Central Sector Scheme of Scholarships for College and University Students",
        description: "Eligibility: Economically weaker students pursuing higher education. Amount: Varies; typically ₹10,000 per annum."
      }
    ]
  };


  const handleItemClick = (title: any) => {
    setActiveTooltip(activeTooltip === title ? null : title);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <section className="relative py-20 gradient-bgnope text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6 text-left relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <div className="flex justify-end">
            <Link to="/services" className="block">
              <button
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </motion.div>
      </section>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1
            }
          }
        }}
        className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto p-6"
      >
        {dashboardItems.map((item, index) => {
          const IconComponent = iconMap[item.title] || Info;
          return (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleItemClick(item.title)}
              className="relative p-6 bg-white rounded-2xl shadow-lg cursor-pointer group overflow-hidden"
            >
              <div className="flex items-center mb-4">
                <IconComponent
                  className="mr-4 text-blue-600 group-hover:text-blue-800 transition-colors"
                  size={32}
                />
                <h2 className="text-xl font-bold text-blue-700">{item.title}</h2>
              </div>
              <p className="text-gray-600">{item.description}</p>
              <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-blue-100 opacity-10 rounded-full group-hover:opacity-20 transition-opacity"></div>
            </motion.div>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {activeTooltip && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25
              }}
              className="bg-white dark:bg-gray-800 w-full max-w-md rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="bg-blue-50 dark:bg-blue-900/30 p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Info className="text-blue-600 dark:text-blue-400" size={24} />
                  <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300">
                    {activeTooltip}
                  </h2>
                </div>
                <button
                  onClick={() => setActiveTooltip(null)}
                  className="text-gray-500 hover:text-gray-800 dark:hover:text-white transition-colors group"
                >
                  <X
                    size={24}
                    className="group-hover:rotate-90 transition-transform"
                  />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-grow">
                <ul className="space-y-4">
                  {tooltipContent[activeTooltip].map((content, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                        {content.name}
                      </div>
                      {content.description && (
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {content.description}
                        </p>
                      )}
                      {content.eligibility && (
                        <div className="mt-2 text-sm text-gray-700 dark:text-gray-400 space-y-1">
                          <div>
                            <span className="font-semibold">Eligibility for Bachelors:</span>{" "}
                            {content.eligibility.bachelors || "N/A"}
                          </div>
                          <div>
                            <span className="font-semibold">Eligibility for Masters:</span>{" "}
                            {content.eligibility.masters || "N/A"}
                          </div>
                          <div>
                            <span className="font-semibold">Intake:</span>{" "}
                            {content.eligibility.intake || "N/A"}
                          </div>
                          <div>
                            <span className="font-semibold">Fee:</span>{" "}
                            {content.eligibility.fee || "N/A"}
                          </div>
                          {content.eligibility.budget && (
                            <div>
                              <span className="font-semibold">Budget:</span>{" "}
                              {content.eligibility.budget}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div >
  );
};

export default Basic;