import { motion } from 'framer-motion';
import { Award, Users, Globe, Clock, GraduationCap, BookOpen, Building2, Smile } from 'lucide-react';
import { Link } from 'react-router-dom'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const statsData = [
  { 
    icon: Award, 
    title: "Excellence", 
    description: "Committed to highest standards in education consulting", 
    color: "bg-gradient-to-br from-blue-50 to-blue-100" 
  },
  { 
    icon: Users, 
    title: "Experience", 
    description: "11+ years of expertise in international education", 
    color: "bg-gradient-to-br from-purple-50 to-purple-100" 
  },
  { 
    icon: Globe, 
    title: "Global Reach", 
    description: "Partnerships with top universities worldwide", 
    color: "bg-gradient-to-br from-green-50 to-green-100" 
  },
  { 
    icon: Clock, 
    title: "Support", 
    description: " student assistance and guidance", 
    color: "bg-gradient-to-br from-orange-50 to-orange-100" 
  }
];

const achievementData = [
  { icon: GraduationCap, value: "2000+", label: "Students Placed" },
  { icon: Building2, value: "100+", label: "Partner Universities" },
  { icon: BookOpen, value: "30+", label: "Countries" },
  { icon: Smile, value: "95%", label: "Success Rate" }
];

export function About() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center text-white overflow-hidden">
        <div className="absolute inset-0 gradient-bg">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            alt="About Us Background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <motion.div 
          {...fadeInUp}
          className="container mx-auto px-6 py-12 relative z-10"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            About Basic Consultants
          </h1>
          <p className="text-2xl md:text-3xl max-w-3xl leading-relaxed opacity-90">
            Helping students achieve their dreams of international education.
            We're committed to providing expert guidance and support throughout your
            academic journey abroad.
          </p>
        </motion.div>
      </section>

      {/* Achievement Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievementData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-4xl font-bold text-blue-900 mb-2">{item.value}</h3>
                <p className="text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl" />
              <h2 className="text-4xl font-bold text-blue-900 mb-8">Our Story</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Basic Consultants began with a simple mission: to help
                  students access quality education worldwide. What started as a small
                  consultancy has grown into a trusted name in international education.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Over the years, we've helped thousands of students from diverse
                  backgrounds achieve their dreams of studying abroad. Our experienced
                  team of counselors brings together years of expertise in
                  international education.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {statsData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`${item.color} p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300`}
                >
                  <item.icon className="w-12 h-12 text-blue-900 mb-4" />
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
            Let us help you achieve your international education goals with personalized guidance
          </p>
           <Link
                              to='/contact'
                            >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            Get Started Today
          </motion.button></Link>
        </div>
      </motion.section>
    </div>
  );
}

export default About;