import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1A6DPMA7fN/", label: "Facebook" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/basic_consultants_india?utm_source=qr&igsh=MW4xZm5zcmpta3k2Mw==", label: "Instagram" },
  // { icon: Linkedin, href: "#", label: "LinkedIn" }
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Universities", href: "/universities" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blogs" }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "tween" }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="h-px w-4 bg-blue-500"/>
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <p>Plot no:152, H.No: 3-2-354, SBH Bank Colony, L.B Nagar, Hyderabad, Telangana, 500074</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <p>+91 94410 69883<br/>+91 93905 92117</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:vinod@basicconsultants.org" className="hover:text-white transition-colors duration-200">
                  vinod@basicconsultants.org
                </a>
              </div>
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <p className="text-gray-300 mb-6">Follow us on social media for updates and news about international education opportunities.</p>
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Basic Consultants. All rights reserved.
            </p>
            {/* <div className="flex space-x-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;