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
import  us1 from '../assets/UNITED STATES/Northwest Missouri State University - Maryville, Missouri.jpg';
import  us2 from '../assets/UNITED STATES/Dallas Baptist University - Dallas, Texas.jpeg';
import  us3 from '../assets/UNITED STATES/Drury University Springfield, Missouri.webp';
import  us4 from '../assets/UNITED STATES/Troy University - Troy, Alabama.webp';
import  us5 from '../assets/UNITED STATES/Southeast Missouri State University - Cape Girardeau, Missouri.avif';
import  us6 from '../assets/UNITED STATES/Wichita State University - Wichita, Kansas.webp';
import  us7 from '../assets/UNITED STATES/University of California, Extension, Riverside (International Education Programs) - Riverside, California.jpeg';
import  us8 from '../assets/UNITED STATES/ochester Institute of Technology (RIT) - Rochester, New York.jpg';
import  us9 from '../assets/UNITED STATES/Liberty University - Lynchburg, Virginia.jpeg';
import  en1 from '../assets/UK/Anglia Ruskin University and ARU Writtle - London, Cambridge.png';
import  en2 from '../assets/UK/Robert Gordon University - Aberdeen, Scotland.jpeg';
import  en3 from '../assets/UK/Birmingham City University - Birmingham, England.jpeg';
import  en4 from '../assets/UK/University of Derby - Derby, England.jpg';
import  en5 from '../assets/UK/University of Wolverhampton - Wolverhampton, England.avif';
import  en6 from '../assets/UK/London South Bank University (LSBU) - London, England.jpg';
import  en7 from '../assets/UK/University of Lincoln - Lincoln, England.jpeg';
import  en8 from '../assets/UK/University of Stirling - Stirling, Scotland.png';
import  en9 from '../assets/UK/University of Roehampton.webp';
import  cn1 from '../assets/Canada/Vancouver Island University - Nanaimo, British Columbia.jpg';
import  cn2 from '../assets/Canada/Thompson Rivers University (TRU) - Kamloops, British Columbia.jpg';
import  cn3 from '../assets/Canada/University of the Fraser Valley - Abbotsford, British Columbia.jpg';
import  cn4 from '../assets/Canada/Centennial College - Toronto, Ontario.jpeg';
import  cn5 from '../assets/Canada/Okanagan College - Kelowna, British Columbia.jpeg';
import  cn6 from '../assets/Canada/Capilano University - MSquare - Vancouver, British Columbia.jpg';
import  cn7 from '../assets/Canada/Conestoga College - Kitchener, Ontario.jpg';
import  cn8 from '../assets/Canada/George Brown College - Toronto, Ontario.jpeg';
import  cn9 from '../assets/Canada/Cape Breton University (MSquare) - Sydney, Nova Scotia.jpeg';
import  sz1 from '../assets/Switzerland/EU Business School - Geneva, Montreux.jpg';
import  sz2 from '../assets/Switzerland/Business & Hotel Management School (BHMS) University Centre - Lucerne.jpg';
import  sz3 from '../assets/Switzerland/Rushford Business School - Lucerne.jpg';
import  sz4 from '../assets/Switzerland/Swiss Hotel Management School (SHMS) - Montreux, Leysin.jpg';
import  sz5 from '../assets/Switzerland/César Ritz Colleges - Le Bouveret, Brig.jpg';
import  sz6 from '../assets/Switzerland/HIM Business School - Montreux.jpg';
import  sz7 from '../assets/Switzerland/Culinary Arts Academy - Le Bouveret.jpg';
import  fr1 from '../assets/France/Le Cordon Bleu - Paris.jpg';
import  fr2 from '../assets/France/Toulouse Business School - Toulouse, Paris.jpeg';
import  fr3 from '../assets/France/New York Film Academy - Paris.jpg';
import  fr4 from '../assets/France/Institut Superieur de Gestion (ISG) - Paris.jpg';
import  fr5 from '../assets/France/Association Leonard De Vinci - Paris.jpg';
import  fr6 from '../assets/France/Istituto Marangoni - Paris.jpg';
import  fr8 from '../assets/France/ESC Clermont - Clermont-Ferrand.jpg';
import nl1 from '../assets/Netherlands/TIO University of Applied Sciences - Utrecht.jpg';
import nl2 from '../assets/Netherlands/Wittenborg University of Applied Sciences - Apeldoorn.jpg';
import nl3 from '../assets/Netherlands/SRH Haarlem University of Applied Sciences - Haarlem.jpg';
import nl4 from '../assets/Netherlands/IC University of Applied Sciences - Amsterdam.jpg';
import nl5 from '../assets/Netherlands/Cambridge Education Group - CEG - OnCampus Amsterdam.jpg';
import gy1 from '../assets/Germany/Steinbeis University - Schools of Next Practices - Stuttgart.jpg';
import gy2 from '../assets/Germany/Arden University - Berlin.jpg';
import gy3 from '../assets/Germany/European University OR EU Business School - Munich.jpg';
import gy4 from '../assets/Germany/IU International University of Applied Sciences - Bad Honnef.jpg';
import iy1 from '../assets/Italy/POLIMI Graduate School of Management - Milan.jpg';
import iy2 from '../assets/Italy/International Education Partners (IEP Italy) - All across Italy.jpg';
import iy3 from '../assets/Italy/New York Film Academy - Florence.jpeg';
import ir1 from '../assets/IRELAND/Maynooth University - Maynooth.jpg';
import ir2 from '../assets/IRELAND/University of Limerick - Limerick.webp';
import ir3 from '../assets/IRELAND/University of Galway - Galway.jpg';
import ir4 from '../assets/IRELAND/Shannon College of Hotel Management - Co. Clare.jpg';
import ir5 from '../assets/IRELAND/National College of Ireland - Dublin.jpg';
import ir6 from '../assets/IRELAND/Dublin Business School (DBS) - Dublin.jpg';
import ir7 from '../assets/IRELAND/Dublin City University - Dublin.jpg';

const universities = [
  {
    "name": "Northwest Missouri State University",
    "location": "Maryville, Missouri, USA",
    "image": us1
  },
  {
    "name": "Dallas Baptist University",
    "location": "Dallas, Texas, USA",
    "image": us2
  },
  {
    "name": "Drury University (Undergraduate Only)",
    "location": "Springfield, Missouri, USA",
    "image": us3
  },
  {
    "name": "Troy University",
    "location": "Troy, Alabama, USA",
    "image": us4
  },
  {
    "name": "Southeast Missouri State University",
    "location": "Cape Girardeau, Missouri, USA",
    "image": us5
  },
  {
    "name": "Wichita State University",
    "location": "Wichita, Kansas, USA",
    "image": us6
  },
  {
    "name": "University of California, Extension, Riverside (International Education Programs)",
    "location": "Riverside, California, USA",
    "image": us7
  },
  {
    "name": "Rochester Institute of Technology (RIT)",
    "location": "Rochester, New York, USA",
    "image": us8
  },
  {
    "name": "Liberty University",
    "location": "Lynchburg, Virginia, USA",
    "image": us9
  },
  {
    "name": "Anglia Ruskin University and ARU Writtle",
    "location": "London, Cambridge, England",
    "image":en1
  },
  {
    "name": "Robert Gordon University",
    "location": "Aberdeen, Scotland",
    "image": en2
  },
  {
    "name": "Birmingham City University",
    "location": "Birmingham, England",
    "image": en3,
    "note": "Applications Not accepted from Tamilnadu"
  },
  {
    "name": "University of Derby",
    "location": "Derby, England",
    "image": en4
  },
  {
    "name": "University of Wolverhampton",
    "location": "Wolverhampton, England",
    "image": en5
  },
  {
    "name": "London South Bank University (LSBU)",
    "location": "London, England",
    "image": en6
  },
  {
    "name": "University of Lincoln",
    "location": "Lincoln, England",
    "image": en7
  },
  {
    "name": "University of Stirling",
    "location": "Stirling, Scotland",
    "image": en8,
    "note": "Applications for UG Programs are not accepted from Punjab and Haryana"
  },
  {
    "name": "University of Roehampton (Through Oxford International Education Group - OIEG)",
    "location": "London, England",
    "image": en9,
  },
  {
    "name": "Vancouver Island University",
    "location": "Nanaimo, British Columbia, Canada",
    "image": cn1
  },
  {
    "name": "Thompson Rivers University (TRU)",
    "location": "Kamloops, British Columbia, Canada",
    "image": cn2,
  },
  {
    "name": "University of the Fraser Valley",
    "location": "Abbotsford, British Columbia, Canada",
    "image": cn3
  },
  {
    "name": "Centennial College",
    "location": "Toronto, Ontario, Canada",
    "image": cn4
  },
  {
    "name": "Okanagan College",
    "location": "Kelowna, British Columbia, Canada",
    "image": cn5
  },
  {
    "name": "Capilano University - MSquare",
    "location": "Vancouver, British Columbia, Canada",
    "image": cn6
  },
  {
    "name": "Conestoga College",
    "location": "Kitchener, Ontario, Canada",
    "image": cn7
  },
  {
    "name": "George Brown College",
    "location": "Toronto, Ontario, Canada",
    "image": cn8
  },
  {
    "name": "Cape Breton University (MSquare)",
    "location": "Sydney, Nova Scotia, Canada",
    "image": cn9
  },
  {
    "name": "EU Business School",
    "location": "Geneva, Montreux, Switzerland",
    "image": sz1
  },
  {
    "name": "Business & Hotel Management School (BHMS) University Centre, Switzerland",
    "location": "Lucerne, Switzerland",
    "image": sz2
  },
  {
    "name": "Rushford Business School",
    "location": "Lucerne, Switzerland",
    "image": sz3
  },
  {
    "name": "Swiss Hotel Management School (SHMS)",
    "location": "Montreux, Leysin, Switzerland",
    "image":sz4
  },
  {
    "name": "César Ritz Colleges",
    "location": "Le Bouveret, Brig, Switzerland",
    "image": sz5
  },
  {
    "name": "HIM Business School",
    "location": "Montreux, Switzerland",
    "image": sz6
  },
  {
    "name": "Culinary Arts Academy",
    "location": "Le Bouveret, Switzerland",
    "image": sz7,
  },
  {
    "name": "Le Cordon Bleu",
    "location": "Paris, France",
    "image": fr1
  },
  {
    "name": "Toulouse Business School",
    "location": "Toulouse, Paris, France",
    "image": fr2
  },
  {
    "name": "New York Film Academy",
    "location": "Paris, France",
    "image": fr3
  },
  {
    "name": "Institut Superieur de Gestion (ISG)",
    "location": "Paris, France",
    "image": fr4
  },
  {
    "name": "Association Leonard De Vinci (ESILV Engineering School & EMLV Management School)",
    "location": "Paris, France",
    "image": fr5
  },
  {
    "name": "Istituto Marangoni",
    "location": "Paris, France",
    "image": fr6
  },
  // {
  //   "name": "University of Europe for Applied Sciences",
  //   "location": "Paris, France",
  //   "image": 
  // },
  {
    "name": "ESC Clermont",
    "location": "Clermont-Ferrand, France",
    "image": fr8
  },
  {
    "name": "TIO University of Applied Sciences (TIO Business School)",
    "location": "Utrecht, Netherlands",
    "image": nl1
  },
  {
    "name": "Wittenborg University of Applied Sciences",
    "location": "Apeldoorn, Netherlands",
    "image": nl2
  },
  {
    "name": "SRH Haarlem University of Applied Sciences (Formerly Haarlem Campus, Institute for Higher Education)",
    "location": "Haarlem, Netherlands",
    "image": nl3
  },
  {
    "name": "IC University of Applied Sciences - Amsterdam (Through GUS)",
    "location": "Amsterdam, Netherlands",
    "image": nl4
  },
  // {
  //   "name": "EIT InnoEnergy",
  //   "location": "All Locations",
  //   "image": "https://example.com/eit_innoenergy.jpg"
  // },
  {
    "name": "Cambridge Education Group - CEG - OnCampus Amsterdam",
    "location": "Amsterdam, Netherlands",
    "image": nl5
  },
  {
    "name": "Steinbeis University - Schools of Next Practices",
    "location": "Stuttgart, Germany",
    "image": gy1
  },
  {
    "name": "Arden University",
    "location": "Berlin, Germany",
    "image": gy2
  },
  {
    "name": "European University / EU Business School",
    "location": "Munich, Germany",
    "image": gy3
  },
  {
    "name": "IU International University of Applied Sciences (Formerly IUBH, Internationale Hochschule Bad Honnef)",
    "location": "Bad Honnef, Germany",
    "image": gy4
  },
  {
    "name": "POLIMI Graduate School of Management (Also Known as MIP Politecnico di Milano)",
    "location": "Milan, Italy",
    "image": iy1
  },
  {
    "name": "International Education Partners (IEP Italy)",
    "location": "All across Italy",
    "image": iy2
  },
  {
    "name": "New York Film Academy",
    "location": "Florence, Italy",
    "image": iy3
  },
  // {
  //   "name": "Istituto Superiore di Design, Napoli",
  //   "location": "Napoli, Italy",
  //   "image": "https://example.com/istituto_superiore_di_design_napoli.jpg"
  // },
  {
    "name": "Maynooth University",
    "location": "Maynooth, Ireland",
    "image": ir1
  },
  {
    "name": "University of Limerick",
    "location": "Limerick, Ireland",
    "image": ir2
  },
  {
    "name": "University of Galway",
    "previous_name": "National University of Ireland, Galway (NUI Galway)",
    "location": "Galway, Ireland",
    "image": ir3
  },
  {
    "name": "Shannon College of Hotel Management",
    "location": "Co. Clare, Ireland",
    "image": ir4
  },
  {
    "name": "National College of Ireland",
    "location": "Dublin, Ireland",
    "image": ir5
  },
  {
    "name": "Dublin Business School (DBS)",
    "location": "Dublin, Ireland",
    "note": "No commission for applications from Punjab, Haryana, Gujarat, Andhra Pradesh, Telangana, and Rajasthan (W.e.f. November 2023)",
    "image": ir6
  },
  {
    "name": "Dublin City University",
    "location": "Dublin, Ireland",
    "image": ir7
  }
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