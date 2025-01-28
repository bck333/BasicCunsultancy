import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { ContactInfo } from '../components/contact/ContactInfo';
import { z } from 'zod';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import axiosInstance from '../components/api/axiosInstance';

const registerSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  dob: z.string().nonempty('Date of birth is required'),
  country: z.string().min(2, 'College name must be at least 2 characters'),
  collegeName: z.string().min(2, 'College name must be at least 2 characters'),
  state: z.string().min(2, 'State must be at least 2 characters'),
});

export function Contact() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  type RegisterForm = z.infer<typeof registerSchema>;

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setIsSubmitting(true);
    try {
      // Use axiosInstance to handle baseURL
      const response = await axiosInstance.post('/api/users', {
        username: data.username,
        email: data.email,
        phone: data.phone,
        country: data.country,
        dob: data.dob,
        collegeName: data.collegeName,
        state: data.state,
      });

      if (response.status === 201) {
        toast.success('Registration successful!');
        reset();
      } else {
        throw new Error('Unexpected response from the server');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mx-auto opacity-90">
          We’d love to hear from you! Visit us at our offices in India or Portugal, or reach out using the contact form below. We’re here to answer any questions and assist in bringing your ideas to life.          </p>
        </motion.div>
      </section>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 ">Full Name</label>
                <input {...register('username')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                // placeholder="John Doe"
                />
                {errors.username && (
                  <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 ">Email</label>
                <input {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                // placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 ">Mobile</label>
                <input {...register('phone')}
                  type="tel"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                // placeholder="How can we help?"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 ">Date Of Birth</label>
                <input {...register('dob')}
                  type="date"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {errors.dob && (
                  <p className="mt-1 text-sm text-red-600">{errors.dob.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 ">Country in Which You Are Intereste</label>
                <input {...register('country')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {errors.country && (
                  <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 ">Qualification</label>
                <input {...register('collegeName')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                />
                {errors.collegeName && (
                  <p className="mt-1 text-sm text-red-600">{errors.collegeName.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 ">State</label>
                <input {...register('state')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                // placeholder="How can we help?"
                />
                {errors.state && (
                  <p className="mt-1 text-sm text-red-600">{errors.state.message}</p>
                )}
              </div>

              {/* <div>
                <label htmlFor="message" className="block text-gray-700 ">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div> */}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit" disabled={isSubmitting}
                className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition duration-300 flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Send Request
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <ContactInfo
                icon={MapPin}
                title="Our Location"
                content={`Plot no:152,
H.No: 3-2-354, SBH Bank Colony,
L.B Nagar, Hyderabad, Telangana
Postal code: 500074`}
              />
              <div>
                <p
                  onClick={() =>
                    window.open(
                      'https://www.google.com/maps?q=Plot+no:152,H.No:+3-2-354,+SBH+Bank+Colony,+L.B+Nagar,+Hyderabad,+Telangana,+500074',
                      '_blank'
                    )
                  }
                  className="text-blue-600 px-4 py-2 rounded-lg text-right cursor-pointer hover:text-blue-700 transition-all"
                >
                  See Our Location
                </p>
              </div>
            </div>


            <div className='shadow-lg'>
              <ContactInfo
                icon={Phone}
                title="Phone Number"
                content="+91 94410 69883/+91 93905 92117"
              />
            </div>
            <div className='shadow-lg'>

              <ContactInfo
                icon={Mail}
                title="Email Address"
                content="
vinod@basicconsultants.org"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Office Hours</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </motion.div>

        </div>
        <div className='py-3'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.3345242132887!2d78.54529657516396!3d17.34762878353281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb996783fb4ed3%3A0xaf2469c5f40d9b96!2sBasic%20Consultants!5e0!3m2!1sen!2sin!4v1736786173012!5m2!1sen!2sin" width="100%" height="400" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
}