import { motion } from 'framer-motion';
import { 
  BookOpen, Search, Book, FileSignature, LifeBuoy, 
  LucideHome as HomeIcon, FileType, Plane as LucidePlane, 
  DollarSign as CurrencyIcon, Target, ClipboardCheck,
  School, GraduationCap, Users, Globe, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: GraduationCap,
    title: "Profile Evaluation",
    description: "Unlock your true potential with a comprehensive profile assessment, tailored to recommend top-tier universities based on your GPA, test scores, and unique talents.",
    color: "from-blue-50 to-indigo-50"
  },
  {
    icon: Target,
    title: "Career Counseling",
    description: "Discover your dream career with expert guidance, helping you navigate paths that align seamlessly with your aspirations and ambitions.",
    color: "from-purple-50 to-pink-50"
  },
  {
    icon: Book,
    title: "Course & Country Selection",
    description: "Find the perfect match for your goals with personalized recommendations for courses and destinations that fit your expectations and interests.",
    color: "from-green-50 to-emerald-50"
  },
  {
    icon: School,
    title: "University Selection",
    description: "Gain access to prestigious universities through verified partnerships, ensuring transparent processes and cost-effective solutions.",
    color: "from-orange-50 to-amber-50"
  },
  {
    icon: ClipboardCheck,
    title: "Application Assistance",
    description: "Simplify your journey with expert support for applications, interviews, and documentation, ensuring every step is smooth and stress-free.",
    color: "from-teal-50 to-cyan-50"
  },
  {
    icon: FileType,
    title: "Admission & Scholarship Support",
    description: "Transform dreams into reality with strategic assistance in securing admissions and scholarships, helping you overcome financial barriers.",
    color: "from-rose-50 to-red-50"
  },
  {
    icon: FileSignature,
    title: "Visa Assistance",
    description: "Navigate the complexities of visa applications with confidence through step-by-step expert guidance for your chosen destination.",
    color: "from-blue-50 to-sky-50"
  },
  {
    icon: HomeIcon,
    title: "Accommodation Assistance",
    description: "Feel at home with personalized help in finding safe, affordable housing and connecting with supportive local communities.",
    color: "from-violet-50 to-purple-50"
  },
  {
    icon: LucidePlane,
    title: "Travel & Pre-Departure Support",
    description: "Prepare for your journey with organized travel plans and detailed pre-departure briefings to ensure a seamless transition abroad.",
    color: "from-emerald-50 to-green-50"
  }
];

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

export function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 gradient-bgnope text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6 text-left relative z-10"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl mx-auto opacity-90">
            Comprehensive support for your international education journey, from profile evaluation to pre-departure assistance.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
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
                <Link to="/basic" className="block">
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

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Begin Your Educational Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with our experts and take the first step towards your international education goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold 
              hover:bg-blue-700 transition-colors duration-300 shadow-lg"
          >
            Contact Us Today
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

export default Services;