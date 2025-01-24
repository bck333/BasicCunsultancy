// import { motion } from 'framer-motion';
// import { Search } from 'lucide-react';
// const universities = [
//   {
//     name: 'University of Excellence',
//     location: 'New York, USA',
//     image: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     name: 'Global Institute',
//     location: 'London, UK',
//     image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     name: 'Tech University',
//     location: 'San Francisco, USA',
//     image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80',
//   },
// ];

// export function Universities() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//     {/* Hero Section */}
//     <div className="relative overflow-hidden gradient-bgnope text-white py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-5xl font-bold mb-6 animate-slideDown">
//         Partner Universities        </h1>
//         <p className="text-xl mb-8 animate-fadeIn max-w-2xl">
//         Explore our network of prestigious universities worldwide.
//         Find the perfect institution for your academic journey.        </p>
//         <div className="relative w-full max-w-2xl animate-slideUp">
//           <input
//             type="text"
//             placeholder="Search articles..."
//             className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//           <Search className="absolute right-4 top-3 text-gray-400" />
//         </div>
//       </div>
//     </div>
//           <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="max-w-6xl mx-auto py-[5%] px-[1%]"
//       >
//         <h1 className="text-4xl font-bold mb-12 text-center">Partner Universities</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {universities.map((university, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="bg-white rounded-lg overflow-hidden shadow-lg"
//             >
//               <img
//                 src={university.image}
//                 alt={university.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-2">{university.name}</h3>
//                 <p className="text-gray-600">{university.location}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }



import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';


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
    name: "Stanford University",
    location: "Stanford, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "180+ Programs",
    students: "22,000+ Students"
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
  {
    name: "University of Chicago",
    location: "Chicago, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "160+ Programs",
    students: "19,000+ Students"
  },
  {
    name: "Imperial College London",
    location: "London, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "250+ Programs",
    students: "21,000+ Students"
  },
  {
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    image: "/placeholder.svg?height=200&width=300",
    programs: "140+ Programs",
    students: "15,000+ Students"
  },
  {
    name: "University of Pennsylvania",
    location: "Philadelphia, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "170+ Programs",
    students: "24,000+ Students"
  },
  {
    name: "UCL (University College London)",
    location: "London, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "280+ Programs",
    students: "26,000+ Students"
  },
  {
    name: "National University of Singapore",
    location: "Singapore",
    image: "/placeholder.svg?height=200&width=300",
    programs: "190+ Programs",
    students: "28,000+ Students"
  },
  {
    name: "Princeton University",
    location: "Princeton, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "130+ Programs",
    students: "16,000+ Students"
  },
  {
    name: "Cornell University",
    location: "Ithaca, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "220+ Programs",
    students: "23,000+ Students"
  },
  {
    name: "Yale University",
    location: "New Haven, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "140+ Programs",
    students: "17,000+ Students"
  },
  {
    name: "Columbia University",
    location: "New York City, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "200+ Programs",
    students: "25,000+ Students"
  },
  {
    name: "Tsinghua University",
    location: "Beijing, China",
    image: "/placeholder.svg?height=200&width=300",
    programs: "230+ Programs",
    students: "32,000+ Students"
  },
  {
    name: "University of Edinburgh",
    location: "Edinburgh, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "260+ Programs",
    students: "27,000+ Students"
  },
  {
    name: "University of Michigan",
    location: "Ann Arbor, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "240+ Programs",
    students: "31,000+ Students"
  },
  {
    name: "Peking University",
    location: "Beijing, China",
    image: "/placeholder.svg?height=200&width=300",
    programs: "210+ Programs",
    students: "29,000+ Students"
  },
  {
    name: "Johns Hopkins University",
    location: "Baltimore, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "180+ Programs",
    students: "21,000+ Students"
  },
  {
    name: "University of California, Berkeley",
    location: "Berkeley, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "270+ Programs",
    students: "33,000+ Students"
  },
  {
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    image: "/placeholder.svg?height=200&width=300",
    programs: "250+ Programs",
    students: "35,000+ Students"
  },
  {
    name: "Australian National University",
    location: "Canberra, Australia",
    image: "/placeholder.svg?height=200&width=300",
    programs: "190+ Programs",
    students: "20,000+ Students"
  },
  {
    name: "McGill University",
    location: "Montreal, Canada",
    image: "/placeholder.svg?height=200&width=300",
    programs: "220+ Programs",
    students: "28,000+ Students"
  },
  {
    name: "University of British Columbia",
    location: "Vancouver, Canada",
    image: "/placeholder.svg?height=200&width=300",
    programs: "240+ Programs",
    students: "32,000+ Students"
  },
  {
    name: "University of Hong Kong",
    location: "Hong Kong",
    image: "/placeholder.svg?height=200&width=300",
    programs: "200+ Programs",
    students: "24,000+ Students"
  },
  {
    name: "King's College London",
    location: "London, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "230+ Programs",
    students: "26,000+ Students"
  },
  {
    name: "London School of Economics and Political Science",
    location: "London, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "160+ Programs",
    students: "18,000+ Students"
  },
  {
    name: "University of Tokyo",
    location: "Tokyo, Japan",
    image: "/placeholder.svg?height=200&width=300",
    programs: "210+ Programs",
    students: "27,000+ Students"
  },
  {
    name: "Seoul National University",
    location: "Seoul, South Korea",
    image: "/placeholder.svg?height=200&width=300",
    programs: "190+ Programs",
    students: "25,000+ Students"
  },
  {
    name: "University of California, Los Angeles",
    location: "Los Angeles, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "260+ Programs",
    students: "34,000+ Students"
  },
  {
    name: "Duke University",
    location: "Durham, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "170+ Programs",
    students: "22,000+ Students"
  },
  {
    name: "University of Amsterdam",
    location: "Amsterdam, Netherlands",
    image: "/placeholder.svg?height=200&width=300",
    programs: "220+ Programs",
    students: "30,000+ Students"
  },
  {
    name: "University of Copenhagen",
    location: "Copenhagen, Denmark",
    image: "/placeholder.svg?height=200&width=300",
    programs: "200+ Programs",
    students: "28,000+ Students"
  },
  {
    name: "University of Zurich",
    location: "Zurich, Switzerland",
    image: "/placeholder.svg?height=200&width=300",
    programs: "180+ Programs",
    students: "23,000+ Students"
  },
  {
    name: "University of Sydney",
    location: "Sydney, Australia",
    image: "/placeholder.svg?height=200&width=300",
    programs: "240+ Programs",
    students: "36,000+ Students"
  },
  {
    name: "University of Queensland",
    location: "Brisbane, Australia",
    image: "/placeholder.svg?height=200&width=300",
    programs: "230+ Programs",
    students: "34,000+ Students"
  },
  {
    name: "Nanyang Technological University",
    location: "Singapore",
    image: "/placeholder.svg?height=200&width=300",
    programs: "200+ Programs",
    students: "29,000+ Students"
  },
  {
    name: "University of Manchester",
    location: "Manchester, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "250+ Programs",
    students: "32,000+ Students"
  },
  {
    name: "Technical University of Munich",
    location: "Munich, Germany",
    image: "/placeholder.svg?height=200&width=300",
    programs: "170+ Programs",
    students: "24,000+ Students"
  },
  {
    name: "Ludwig Maximilian University of Munich",
    location: "Munich, Germany",
    image: "/placeholder.svg?height=200&width=300",
    programs: "210+ Programs",
    students: "28,000+ Students"
  },
  {
    name: "University of Washington",
    location: "Seattle, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "240+ Programs",
    students: "33,000+ Students"
  },
  {
    name: "New York University",
    location: "New York City, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "230+ Programs",
    students: "35,000+ Students"
  },
  {
    name: "University of Wisconsin-Madison",
    location: "Madison, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "220+ Programs",
    students: "30,000+ Students"
  },
  {
    name: "University of Illinois at Urbana-Champaign",
    location: "Champaign, USA",
    image: "/placeholder.svg?height=200&width=300",
    programs: "250+ Programs",
    students: "32,000+ Students"
  },
  {
    name: "Heidelberg University",
    location: "Heidelberg, Germany",
    image: "/placeholder.svg?height=200&width=300",
    programs: "160+ Programs",
    students: "20,000+ Students"
  },
  {
    name: "KU Leuven",
    location: "Leuven, Belgium",
    image: "/placeholder.svg?height=200&width=300",
    programs: "190+ Programs",
    students: "26,000+ Students"
  },
  {
    name: "University of Glasgow",
    location: "Glasgow, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "210+ Programs",
    students: "28,000+ Students"
  },
  {
    name: "University of Helsinki",
    location: "Helsinki, Finland",
    image: "/placeholder.svg?height=200&width=300",
    programs: "180+ Programs",
    students: "24,000+ Students"
  },
  {
    name: "University of Oslo",
    location: "Oslo, Norway",
    image: "/placeholder.svg?height=200&width=300",
    programs: "170+ Programs",
    students: "22,000+ Students"
  },
  {
    name: "University of Barcelona",
    location: "Barcelona, Spain",
    image: "/placeholder.svg?height=200&width=300",
    programs: "220+ Programs",
    students: "30,000+ Students"
  },
  {
    name: "University of Vienna",
    location: "Vienna, Austria",
    image: "/placeholder.svg?height=200&width=300",
    programs: "200+ Programs",
    students: "27,000+ Students"
  },
  {
    name: "University of Warwick",
    location: "Coventry, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "190+ Programs",
    students: "25,000+ Students"
  },
  {
    name: "University of Bristol",
    location: "Bristol, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "210+ Programs",
    students: "28,000+ Students"
  },
  {
    name: "University of Auckland",
    location: "Auckland, New Zealand",
    image: "/placeholder.svg?height=200&width=300",
    programs: "180+ Programs",
    students: "26,000+ Students"
  },
  {
    name: "University of Geneva",
    location: "Geneva, Switzerland",
    image: "/placeholder.svg?height=200&width=300",
    programs: "160+ Programs",
    students: "21,000+ Students"
  },
  {
    name: "University of Leeds",
    location: "Leeds, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "230+ Programs",
    students: "31,000+ Students"
  },
  {
    name: "University of Southampton",
    location: "Southampton, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "200+ Programs",
    students: "27,000+ Students"
  },
  {
    name: "University of St Andrews",
    location: "St Andrews, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "150+ Programs",
    students: "19,000+ Students"
  },
  {
    name: "University of Exeter",
    location: "Exeter, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "180+ Programs",
    students: "24,000+ Students"
  },
  {
    name: "University of Birmingham",
    location: "Birmingham, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "220+ Programs",
    students: "29,000+ Students"
  },
  {
    name: "University of Sheffield",
    location: "Sheffield, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "200+ Programs",
    students: "26,000+ Students"
  },
  {
    name: "University of Nottingham",
    location: "Nottingham, UK",
    image: "/placeholder.svg?height=200&width=300",
    programs: "210+ Programs",
    students: "28,000+ Students"
  },
];

export function Universities() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter universities based on the search term
  const filteredUniversities = universities.filter((university) =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    university.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden gradient-bgnope text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 animate-slideDown">
            Partner Universities
          </h1>
          <p className="text-xl mb-8 animate-fadeIn max-w-2xl">
            Explore our network of prestigious universities worldwide.
            Find the perfect institution for your academic journey.
          </p>
          <div className="relative w-full max-w-2xl animate-slideUp">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search universities..."
              className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto py-[5%] px-[1%]"
      >
        <h1 className="text-4xl font-bold mb-12 text-center">Partner Universities</h1>
        {filteredUniversities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredUniversities.map((university, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{university.name}</h3>
                  <p className="text-gray-600">{university.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No universities found.</p>
        )}
      </motion.div>
    </div>
  );
}
