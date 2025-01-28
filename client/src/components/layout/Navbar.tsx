'use client'

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, GraduationCap, Phone } from 'lucide-react'
import basicImage from '../../asset/basic.png'
 
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Globe },
    { path: '/about', label: 'About', icon: GraduationCap },
    { 
      path: '/basic', 
      label: 'Services',
      icon: Globe,
      subItems: [
        // { path: '/services/profile-evaluation', label: 'Profile Evaluation' },
        // { path: '/services/career-counseling', label: 'Career Counseling' },
        // { path: '/services/university-selection', label: 'University Selection' },
      ]
    },
    { path: '/resume', label: 'Resume', icon: GraduationCap },
    { path: '/universities', label: 'Universities', icon: GraduationCap },
    { path: '/blogs', label: 'Blogs', icon: GraduationCap },
    { path: '/contact', label: 'Contact', icon: Phone },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <motion.img
                src={basicImage}
                alt="Basic Consultants Logo"
                className="h-12 w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              <motion.span 
                className="hidden md:block text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {/* Basic Consultants */}
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1
                    ${location.pathname === item.path 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 hover:bg-blue-50'
                    }`}
                >
                  <motion.div
                    className="flex items-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {/* {item.subItems && (
                      <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-300" />
                    )} */}
                  </motion.div>
                </Link>
                {/* {item.subItems && (
                  <motion.div
                    className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
                    initial={false}
                  >
                    <div className="relative bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50" />
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 relative z-10 transition-colors duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )} */}
              </div>
            ))}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </motion.button> */}
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                      ${location.pathname === item.path 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-700 hover:bg-blue-50'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                  {/* {item.subItems && (
                    <div className="pl-6 mt-1 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <motion.div
                          key={subItem.path}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + ((subIndex + 1) * 0.05) }}
                        >
                          <Link
                            to={subItem.path}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  )} */}
                </motion.div>
              ))}
              {/* <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg text-sm font-medium shadow-lg"
              >
                Get Started
              </motion.button> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

