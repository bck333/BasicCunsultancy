// Home Component
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, ChevronLeft } from 'lucide-react';
import { ServiceCard } from '../components/home/ServiceCard';
import { UniversityCard } from '../components/home/UniversityCard';
import { ReviewCard } from '../components/home/ReviewCard';

export function Home() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Sample data for demonstration
  const reviews = [
    { name: 'John Doe', location: 'USA', message: 'Amazing guidance!', image: '/path/to/image1.jpg' },
    { name: 'Jane Smith', location: 'Canada', message: 'Highly recommend!', image: '/path/to/image2.jpg' },
  ];

  const universities = [
    { name: 'University A', location: 'USA', programs: '50+', students: '20K+' },
    { name: 'University B', location: 'UK', programs: '30+', students: '15K+' },
  ];

  const services = [
    { icon: Search, title: 'Consultation', description: 'Expert guidance on programs and applications.' },
    { icon: Search, title: 'Visa Assistance', description: 'Hassle-free visa application process.' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services', 'universities', 'reviews'];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <main className="overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-900">EduConsult</div>
            <div className="hidden md:flex space-x-8">
              {['Services', 'Universities', 'Success Stories', 'Contact'].map((item) => (
                <button
                  key={item}
                  className="text-gray-600 hover:text-blue-900 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-bold text-gray-900">
                Shape Your Future with Global Education
              </h1>
              <p className="text-xl text-gray-600">
                Expert guidance for your international academic journey. Transform your aspirations into achievements.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                  Explore Programs
                </button>
                <button className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Free Consultation
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 p-8">
                <img
                  src="/api/placeholder/600/600"
                  alt="Students"
                  className="rounded-xl object-cover w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Student Success Stories
          </h2>
          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReviewIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <img
                      src={reviews[currentReviewIndex].image}
                      alt={reviews[currentReviewIndex].name}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {reviews[currentReviewIndex].name}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {reviews[currentReviewIndex].location}
                    </p>
                    <p className="text-gray-700 text-lg">
                      {reviews[currentReviewIndex].message}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
              <button
                onClick={prevReview}
                className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextReview}
                className="p-2 rounded-full bg-blue-900 text-white hover:bg-blue-800"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
