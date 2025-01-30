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
    "name": "Northwest Missouri State University",
    "location": "Maryville, Missouri, USA",
    "image": "https://example.com/northwestmissouri.jpg"
  },
  {
    "name": "Dallas Baptist University",
    "location": "Dallas, Texas, USA",
    "image": "https://example.com/dallasbaptist.jpg"
  },
  {
    "name": "Drury University (Undergraduate Only)",
    "location": "Springfield, Missouri, USA",
    "image": "https://example.com/drury.jpg"
  },
  {
    "name": "Troy University",
    "location": "Troy, Alabama, USA",
    "image": "https://example.com/troy.jpg"
  },
  {
    "name": "Southeast Missouri State University",
    "location": "Cape Girardeau, Missouri, USA",
    "image": "https://example.com/semo.jpg"
  },
  {
    "name": "Wichita State University",
    "location": "Wichita, Kansas, USA",
    "image": "https://example.com/wichita.jpg"
  },
  {
    "name": "University of California, Extension, Riverside (International Education Programs)",
    "location": "Riverside, California, USA",
    "image": "https://example.com/ucriverside.jpg"
  },
  {
    "name": "Rochester Institute of Technology (RIT)",
    "location": "Rochester, New York, USA",
    "image": "https://example.com/rit.jpg"
  },
  {
    "name": "Liberty University",
    "location": "Lynchburg, Virginia, USA",
    "image": "https://example.com/liberty.jpg"
  },
  {
    "name": "Anglia Ruskin University and ARU Writtle",
    "location": "London, Cambridge, England",
    "image": "https://example.com/aruwrittle.jpg"
  },
  {
    "name": "Robert Gordon University",
    "location": "Aberdeen, Scotland",
    "image": "https://example.com/robertgordon.jpg"
  },
  {
    "name": "Birmingham City University",
    "location": "Birmingham, England",
    "image": "https://example.com/birminghamcity.jpg",
    "note": "Applications Not accepted from Tamilnadu"
  },
  {
    "name": "University of Derby",
    "location": "Derby, England",
    "image": "https://example.com/derby.jpg"
  },
  {
    "name": "University of Wolverhampton",
    "location": "Wolverhampton, England",
    "image": "https://example.com/wolverhampton.jpg"
  },
  {
    "name": "London South Bank University (LSBU)",
    "location": "London, England",
    "image": "https://example.com/lsbu.jpg"
  },
  {
    "name": "University of Lincoln",
    "location": "Lincoln, England",
    "image": "https://example.com/lincoln.jpg"
  },
  {
    "name": "University of Stirling",
    "location": "Stirling, Scotland",
    "image": "https://example.com/stirling.jpg",
    "note": "Applications for UG Programs are not accepted from Punjab and Haryana"
  },
  {
    "name": "University of Roehampton (Through Oxford International Education Group - OIEG)",
    "location": "London, England",
    "image": "https://example.com/roehampton.jpg"
  },
  {
    "name": "Vancouver Island University",
    "location": "Nanaimo, British Columbia, Canada",
    "image": "https://example.com/vancouverisland.jpg"
  },
  {
    "name": "Thompson Rivers University (TRU)",
    "location": "Kamloops, British Columbia, Canada",
    "image": "https://example.com/thompsonrivers.jpg"
  },
  {
    "name": "University of the Fraser Valley",
    "location": "Abbotsford, British Columbia, Canada",
    "image": "https://example.com/fraservalley.jpg"
  },
  {
    "name": "Centennial College",
    "location": "Toronto, Ontario, Canada",
    "image": "https://example.com/centennial.jpg"
  },
  {
    "name": "Okanagan College",
    "location": "Kelowna, British Columbia, Canada",
    "image": "https://example.com/okanagan.jpg"
  },
  {
    "name": "Capilano University - MSquare",
    "location": "Vancouver, British Columbia, Canada",
    "image": "https://example.com/capilano.jpg"
  },
  {
    "name": "Conestoga College",
    "location": "Kitchener, Ontario, Canada",
    "image": "https://example.com/conestoga.jpg"
  },
  {
    "name": "George Brown College",
    "location": "Toronto, Ontario, Canada",
    "image": "https://example.com/georgebrown.jpg"
  },
  {
    "name": "Cape Breton University (MSquare)",
    "location": "Sydney, Nova Scotia, Canada",
    "image": "https://example.com/capebreton.jpg"
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




// ,
//   {
//     name: "University of Tokyo",
//     location: "Tokyo, Japan",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Yasuda_Auditorium_-_Tokyo_University_3.jpg/1200px-Yasuda_Auditorium_-_Tokyo_University_3.jpg",
//     programs: "210+ Programs",
//     students: "27,000+ Students"
//   }
// {
//   name: "Seoul National University",
//   location: "Seoul, South Korea",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "190+ Programs",
//   students: "25,000+ Students"
// },
// {
//   name: "University of California, Los Angeles",
//   location: "Los Angeles, USA",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "260+ Programs",
//   students: "34,000+ Students"
// },
// {
//   name: "Duke University",
//   location: "Durham, USA",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "170+ Programs",
//   students: "22,000+ Students"
// },
// {
//   name: "University of Amsterdam",
//   location: "Amsterdam, Netherlands",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "220+ Programs",
//   students: "30,000+ Students"
// },
// {
//   name: "University of Copenhagen",
//   location: "Copenhagen, Denmark",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "200+ Programs",
//   students: "28,000+ Students"
// },
// {
//   name: "University of Zurich",
//   location: "Zurich, Switzerland",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "180+ Programs",
//   students: "23,000+ Students"
// },
// {
//   name: "University of Sydney",
//   location: "Sydney, Australia",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "240+ Programs",
//   students: "36,000+ Students"
// },
// {
//   name: "University of Queensland",
//   location: "Brisbane, Australia",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "230+ Programs",
//   students: "34,000+ Students"
// },
// {
//   name: "Nanyang Technological University",
//   location: "Singapore",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "200+ Programs",
//   students: "29,000+ Students"
// },
// {
//   name: "University of Manchester",
//   location: "Manchester, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "250+ Programs",
//   students: "32,000+ Students"
// },
// {
//   name: "Technical University of Munich",
//   location: "Munich, Germany",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "170+ Programs",
//   students: "24,000+ Students"
// },
// {
//   name: "Ludwig Maximilian University of Munich",
//   location: "Munich, Germany",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "210+ Programs",
//   students: "28,000+ Students"
// },
// {
//   name: "University of Washington",
//   location: "Seattle, USA",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "240+ Programs",
//   students: "33,000+ Students"
// },
// {
//   name: "New York University",
//   location: "New York City, USA",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "230+ Programs",
//   students: "35,000+ Students"
// },
// {
//   name: "University of Wisconsin-Madison",
//   location: "Madison, USA",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "220+ Programs",
//   students: "30,000+ Students"
// },
// {
//   name: "University of Illinois at Urbana-Champaign",
//   location: "Champaign, USA",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "250+ Programs",
//   students: "32,000+ Students"
// },
// {
//   name: "Heidelberg University",
//   location: "Heidelberg, Germany",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "160+ Programs",
//   students: "20,000+ Students"
// },
// {
//   name: "KU Leuven",
//   location: "Leuven, Belgium",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "190+ Programs",
//   students: "26,000+ Students"
// },
// {
//   name: "University of Glasgow",
//   location: "Glasgow, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "210+ Programs",
//   students: "28,000+ Students"
// },
// {
//   name: "University of Helsinki",
//   location: "Helsinki, Finland",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "180+ Programs",
//   students: "24,000+ Students"
// },
// {
//   name: "University of Oslo",
//   location: "Oslo, Norway",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "170+ Programs",
//   students: "22,000+ Students"
// },
// {
//   name: "University of Barcelona",
//   location: "Barcelona, Spain",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "220+ Programs",
//   students: "30,000+ Students"
// },
// {
//   name: "University of Vienna",
//   location: "Vienna, Austria",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "200+ Programs",
//   students: "27,000+ Students"
// },
// {
//   name: "University of Warwick",
//   location: "Coventry, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "190+ Programs",
//   students: "25,000+ Students"
// },
// {
//   name: "University of Bristol",
//   location: "Bristol, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "210+ Programs",
//   students: "28,000+ Students"
// },
// {
//   name: "University of Auckland",
//   location: "Auckland, New Zealand",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "180+ Programs",
//   students: "26,000+ Students"
// },
// {
//   name: "University of Geneva",
//   location: "Geneva, Switzerland",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "160+ Programs",
//   students: "21,000+ Students"
// },
// {
//   name: "University of Leeds",
//   location: "Leeds, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "230+ Programs",
//   students: "31,000+ Students"
// },
// {
//   name: "University of Southampton",
//   location: "Southampton, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "200+ Programs",
//   students: "27,000+ Students"
// },
// {
//   name: "University of St Andrews",
//   location: "St Andrews, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "150+ Programs",
//   students: "19,000+ Students"
// },
// {
//   name: "University of Exeter",
//   location: "Exeter, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "180+ Programs",
//   students: "24,000+ Students"
// },
// {
//   name: "University of Birmingham",
//   location: "Birmingham, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "220+ Programs",
//   students: "29,000+ Students"
// },
// {
//   name: "University of Sheffield",
//   location: "Sheffield, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "200+ Programs",
//   students: "26,000+ Students"
// },
// {
//   name: "University of Nottingham",
//   location: "Nottingham, UK",
//   image: "/placeholder.svg?height=200&width=300",
//   programs: "210+ Programs",
//   students: "28,000+ Students"
// },