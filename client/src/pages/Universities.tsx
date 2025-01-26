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
    image: "https://agevolution.canalrural.com.br/wp-content/uploads/2019/09/homeXL.jpg",
    programs: "180+ Programs",
    students: "22,000+ Students"
  },
  {
    name: "Massachusetts Institute of Technology",
    location: "Cambridge, USA",
    image: "https://web.mit.edu/files/images/201807/15656704711_00457bd2c9_b_1.jpg",
    programs: "120+ Programs",
    students: "18,000+ Students"
  },
  {
    name: "University of Cambridge",
    location: "Cambridge, UK",
    image: "https://i.ytimg.com/vi/LlCwHnp3kL4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC5wGXMIMI8HDKMDS_o8bQUorFEuQ",
    programs: "300+ Programs",
    students: "23,000+ Students"
  },
  {
    name: "California Institute of Technology",
    location: "Pasadena, USA",
    image: "https://univerlist.com/media/images/blog/Caltech.jpg",
    programs: "100+ Programs",
    students: "5,000+ Students"
  },
  {
    name: "University of Chicago",
    location: "Chicago, USA",
    image: "https://images.squarespace-cdn.com/content/v1/58ab5d7bebbd1ab59c820b77/e3b7bddc-9801-48bb-8ebe-8e3753182487/UofC-Southwest-Quad.jpg",
    programs: "160+ Programs",
    students: "19,000+ Students"
  },
  {
    name: "Imperial College London",
    location: "London, UK",
    image: "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1694176603297_mainnews2012_x1.jpg",
    programs: "250+ Programs",
    students: "21,000+ Students"
  },
  {
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    image: "https://ethz.ch/staffnet/en/news-and-events/internal-news/archive/2025/01/eths-new-directive-landscape/_jcr_content/pageimages/imageBig.imageformat.750x421.875.1114718559.jpg",
    programs: "140+ Programs",
    students: "15,000+ Students"
  },
  {
    name: "University of Pennsylvania",
    location: "Philadelphia, USA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcafKcrR6v-6l-Qfp2H8Uvxp9Vhnmm5pmnyg&s",
    programs: "170+ Programs",
    students: "24,000+ Students"
  },
  {
    name: "UCL (University College London)",
    location: "London, UK",
    image: "https://www.e-architect.com/wp-content/uploads/2018/04/ucl-college-london-buildings-refurbishment-w010518.jpg?ezimgfmt=rs:0x0/rscb1/ngcb1/notWebP",
    programs: "280+ Programs",
    students: "26,000+ Students"
  },
  {
    name: "National University of Singapore",
    location: "Singapore",
    image: "https://studyportals-cdn2.imgix.net/5fc5941cc623c.jpg",
    programs: "190+ Programs",
    students: "28,000+ Students"
  },
  {
    name: "Princeton University",
    location: "Princeton, USA",
    image: "https://images.squarespace-cdn.com/content/v1/607b0a89e200d928578629e7/ffeeb429-704f-4cad-983a-c9f5e9c1c1e3/Princeton1.jpg",
    programs: "130+ Programs",
    students: "16,000+ Students"
  },
  {
    name: "Cornell University",
    location: "Ithaca, USA",
    image: "https://townsquare.media/site/39/files/2024/11/attachment-will-barkoff-OmBRi7irZeE-unsplash.jpg?w=4000&q=75",
    programs: "220+ Programs",
    students: "23,000+ Students"
  },
  {
    name: "Yale University",
    location: "New Haven, USA",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQExIVFRUVFRUVFRcVFRYVFhcYFhUWFhYXFRcYHyggGBolHRcWITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0mICUtLS0zLSsvLSstLi0tNysrLS0tKy4vLS8tLystLSstLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKoBKQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EAEoQAAIBAgQCBwUDBwgJBQAAAAECEQADBBIhMQVBEyJRYXGBkQYyocHwQrHRBxQVI1KS4SRTVGOCorLxFjNDYnKDk8LSF2WUo9P/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QALxEAAgIBAwMBCAEEAwAAAAAAAAECEQMEEiETMUFhBSJRcYGRofAjFEKx4SQy0f/aAAwDAQACEQMRAD8A0TJQylNlKgyV27OVQmyUNkpxkobJRsFCZShslOslDKUbFoTKVApThShlKNgaFCtQKU2UqBSoK0KlKiUpopUclEAvkroSj5KkEqWCgASpZKOErzCI0mWVeX2mC8/GhKSStjRi26QHJXslM5K9ko2ShXJXslM5K9koBSFsleyUxkr2SgMhfJXslMZK7kpRhfJUgtGyV0JSsYEEqYSihKkEpRkDCVMJRFSiKlBjAwtEVamqUVUpR0RRaMq11UoyLSsZHkWjIteRKOq0jYx5FomWpIlEy0thK4pUGSmVE8q4UrSmZmhNkqDJTjJQylNYrQmyUM26dZKgUprFaEilDKU6yVApRsWhIpUClOG3UClGwUJlK5kpspUclGxaFslSCUfJXQlSyUBCUDEjr2V5m9b9Awn7xT1vUA9v41nPaEN+c2YJEAkR25Lx/wC1fSsetyf8aTj5Rr0eP+eKfgv+jod85VZuwE7xt30wEyhQTyUCTucoMa86Q9onCYe5ruMo8/4a1Z1107vnbYixPqV4uhspXMlNMATI1n6NcyVZjnvgpLyrEnDbJxfgWyVzJTWSvZKawUK5K90dNZK9kpbCLZK6EpjJXclLYyABKmEowSpBKFjAglTVKKEqYSlYyQNUqapRVSiKlK2OkQVKKqVJUoypSNjkUWjItdRKMi0jYTyJRMtSVanlpbGKlS3MR46aUYCvGwZ1kjvg/AQPhRhbHIelXJlUqFilQKU2VqBSnsroUKVApTZSoFKaxWhQpQylOFKgUprFaEylQKU4UqBSjYrQmUqOSmylRKUbFoWyULFXQiM7GAoJk07kqk9sU/klwd6fB1Pypck9sG/gh8cd00vU5ibrDB23tMAzJa6x2XMVljPj8aRwuOtXscpB6ttHJYj3hbt3CxUdnX+FZccRuCyMNICj3iToNguc9wAhRzI7K0HsThVTFpJnq3GZjBkG20+WlcDPnf8AT9P0/wAWdvFhSy7/AF/yay8ys7BSD1lyjVGECZAb3tQsZe2qH2+sE2iBPVuvIiNBbcT3iWT1rbcaxFi1azXckAHRsusECFB7yB5isdx3GWnwPSW8yNnFprWbMEMNMAzAgbiKw4dbmra+VVfT5mh6bG3uSrm/qWnDsOVtgEEHNdOvfdcg+kUzkpppYK2WJUR36TPxrmSvR6Gd6eD9DiauNZpfMXyVzJTWSvZK1WZ6FcleyUxcOUFv2QT27a11QD1hsdR4HWl3c0Nt4sWyV0JTPR13o6lhoXCVMJRglTCUrYyQAJU1SjBKmEpWx0gQSphKKEoipSNjA1SiKlTVKIq0rYxFVoyrXVWiqtJYxxFqcVNVqWWhYRXLUClHCHur2WrUypoWKVEpTJWolKaxaFSlRKU0UqJSjYtChSoFKbKVApTKQKFClQKU2yVApTJi0KFKiUpspUClGxaFclZv28vFMNCj3mAnsABMjvkCtbkrJflGH6hR/vH/ALfxqrUS/ikW6eN5UfPMZGRF0gJ0j6wSTzHaR861n5NiGvAtslq6Trrk1XzPWFY3ii6gf1Df4V/Gt/8AkstDpNv9ldn/AKq1ws6/iZ2YP3yw9vMWfzrCWd7dxTnH7QYsIbtHVGlYpcYbwusQF/WxlUQAFICgDuUgeVfRPbLhytiMPc528ka6da442rB3OHmx0qEzLhx4MV/Cs2ONQNCfJ9Ts9a1ZMf7NP8CH513o6HaxIt4ew1zRejtKpgne0DqB4GmLF+2/uOreB19N67Ps/NDoRhavnj6s5Gswz6rlXHxIdHXMlTxN0IbYOmd8g8cjN/20UrXQ3GOin424WxfPNbLn+60fcaHwHFK+HttMjqp5khV+8VR+2nEjZu3rZBIvYRVUDkwe6JPkT8Klwy2RgkKnLma0R/y74zEfu/fWHPqVjmn80bMOnc4NfI12SuhKZKVxQDInbQ92k6+RHrWzcZaABKkEo4SpBKWxkgISphKKEqYSlbGSBBKkEooWphKVsZIGqVMJRAlTC0tjEFSiqtSVamFpbDRxVqWWh4m0xHVbLodtCTGmvITWQ/QGJ7Lv/wAhKRyrwPGKfk1qsDXSKVt2XGpae+OXk2/lR7aEbnN5R+NOpCOJ0rXCtHy1wrTqQlC5WolKYK1ErR3C0LFaiUpkrUStNYKFSlQZKbK1ApTWI0KlKhkpkrVfxzEmzh7t1d1RiJ7dh8aO6uQbbdAOEYrpkL/1l1RtslxlG3cBWR/Kc5i2k6RMdpLD/wAaa9i+Mi1gmZxJFy4yqp6zKAhdtdgCx1qt/KHjEusChMJCEkR1usxj1FZc2RPF9jXgxPq8L4mTu4E3H7ujy6akZgmp5AacyK3v5Ora27pkgAWnkzpLXUO9Z/h5tuoUHq7ECI0IObxmNddqf4Jdt27j5i7ErkW3nZN2UwQsToDvJ1rjZNTCSlBeDtrQZY1JrufR8ZdsEEG5JmcoYNqBIhWkDxAFYz23waGLlkqxMq+UQOpkbQDSYPIUrxKwivAVramBkZ86knkDJgg6ctxXDePVT7JkyNh2+HKuY9TOLpG6Ghg0pWbDE4LpcHh1k6LaOkT/AKqNjvvVFieCsgJn94Ec4/CpfptehFpkMgDNmynLAgERtAHjvTGE4jZuMbVtrtvMpCNnJUvHulW3Hed9athmUuEZ5YcmNN+Cm4nwi+twBL72styRrnSdcrBDIVoPx76BgPa/HIxt3bC3csAx+rbUSNRKzAPKrX2re8gRycyFUYkgDcCNdATvt3VTYrizXoVREDyMSd/r41fH2lmxNpdvFlX9FhzJSf1o57W23xpRrdvK+ULlZgTLMwgxsBIJPYe2tN+jfzbDphS2cjR20HWILjJ2KGMdvvdtUGDulJckbHKdTB3IHZuKtcHxRSc10NtOp3neZ5/xrI/aOSbfU557l8tDCKXT8Gtttm3iQYYDad9O4jUdxqqwOLnGYiwTsLTL45NY8ooWFuNcY4gQFtsBknrZSYkjnoTG25rGcRvu2Ne+lxhmdIg/Ybol27iI8q7uL2hGeNS9fv6nIfs+SnJL4fY+pZK6EolnVQ3aAfUTRAtdPcc6gISpZKLkqQWlbCkBj40QLXyninCntY9rlzEtlV7jJ0jkBR+qIWSRoFvmI/YNfSzxWyi2ekuBTeyhJk5mgSAR40jlzRZs44HQtTC1MLUgtRslEQtTC1ILSvFcWLVtmKs3VMKnvtpsvYfxFK2NRSe2XF1sC2r2yys6knfRTJCiDLQDIIAidaoP9K739HvfuX//ADqrxPtO7IshLiBwArMz3ZAYnJIgGW+1PuqY5VVf6V3f5v8A+z+NZpZ1fD/Baocdj6g2NJGWxDwyyD+zzy8/HsmrDCBtZ3nUdndpyFYbh/EujZWVmygCeqSCh/aG503ia2eHxue3nRlbMOqyajYa6/UVRodRLMt0k16ePoX6vEsfur/f1A8U48lh8jIxOm0aztHb8Krl9rBH+q79Dy8I3qp4/wASQ5rgGa4pAYNMREyADvvryisw/FusxjWATpA0O47t9++k1WoyRl7kvwW6fBicffifRrHtRYYHRpEdWBPxirbC31uLmXbv3B76+OXMV0nWnKSREzljfUDUaRt21ecC43fsXFCjpVYtIUmWETKggbfLlVmm1WSXM+3yK9RpsSVQ7n0srUSlYC/7V3mbOhK2nMzvGWeU6GAJEQd9Jq4t+2Fu2v8AKCVJMKVU6wNSQNRVmL2jiyZekrt/kpy6HJjx9R1Ro3IG5FDLCQOZrJ4v2kwdzVcQRyIZXGm/MePrXRx6wSpTE2wQsamADKnY+B9e+uhuruYdrfg1TJVF7Zr/ACK//wAI/wAa0+nF7K2muG6j5FZiFdGYwCYUTqaqvb7EL+ZOuYS4BAkSQIJPlp60Jy91hhH3k/U+WWscQgRQdFbqp1mhpLSdlU89pAivcQtv0IJYA9IZUGQCN8zRJb4UxwtcrrbGi9EsgaAlmEk9p1FecfqbX+9duH1uH8awNWuTowltlaEMDjLiMdM68wdjOhMHbxq8scQDjM1uApEMBPu7CR3VT3MMXdoBjMZOwG+5Og2pl8SLWQshgjLlnRpXLJg/eK5uo01cpHb02rjkVSG8NiNS05esDlIk6882/Z8dKZXGGQZXQZs2keDAEa6UjjsUMgAtlTm6wLDQRoO2JJjxoOBwrOAzmFXSASxEA6kc+W3bWJwTW58HQ3c0aFrgdcpgsVOaOcnWfQfxoioYRVIXK4aZjUHkNuflNJYLCNbklztplO/PQEd/fS3FcTOhBXWCQJk/2DpvtWeMHuqDFnKK4Y9xf2lN5UtlQURQPsMCQMoMkdkfRqvwz5bbG22YQZWcrbQYWe/fWk24bcusB0i5QQo3AzNvA0pa5gLltss5gZAaeQiD6Gtcoxk+/JzpRceFF0aXhuEDdd3AJUlVkaCPgYp7C4DKSzASsCdCDMTBPLu/GqC3w1rbKrPGaCpncaTy+/Sr5NLchiVBjVonTVZ2Imdo231rnZk74l3LYy8PwNXsc1nJ1iLYYkcoM6ZgN15azG/KqM3ldj0enaJ2IYe6ewACnr2LRhDsAIKkDmOwqeY++qC02QvmKwqAgiJIEgdk8voTV2DdsryjXhUO/k+xYLHr+bredlEICxnSQskDv7qz3tzfXocLjQJCXlbfZbiMOXeErGpjHuKLasRbLEkFjyOuh0nYADsNF41xQ4hBY6QdFb2y6ZioADDeBoQO7lJNd3Br04qE/hX1ORl9lOMt8Hbtv0o+i472twVr3sQpPYnWPw0rOY/8qOHXS1ZuP3sQg9NTXzL8yboWvAzluBCoBmDl1/vCnW4SBcsZQWRspuTAI1BIInTQnTfQ13FGNWebblZ3jnG0xd5r72odgAVSIhRA6xk7b6VpbHtC+KwqLlm/hrtu8MujFVbrso+0MpaQNQROoPVqLWAt2r7uQhsm2QgbWGbLmgNy94b0vgsZbw6Pb6dA2cujKespEFdVBnaP7RpMqjKNWWYnOEtx96tXVZVcEQ4BXXeRIjt0owWvg2F48oGUYi4ALguhiHyhgDADToMxJ9a+0+zvG7WLt57bhiID7bxrsdqpvwXVxZZhaHiUUowf3Y62pGnlrRGuqBJIA01nTWAPvHrXVyuukMp8wYMfeKFgMPxLgDYwXba2si2yfzfZEIKqIXKJAJDzz8qy/wD6aYr9lf8Aqj8K+q49baIEOYJoMttTrrt1RIH31nf0/wD+33f+nc//ADrNkxQbtlsJtdj5Ff47fa4yjVA0g3OqeRgzA7vWrxeJYuxbi2WuKSSMrMkbfYklhruD8KwOFxBck6tzMhm1E6+O9XXCMfdBKhAyiT1GgjXWczKKyzxLDFPGlx3/AHg1xyvI6k2OLxtw5e6CJ6rAgjQ6huexnTTej41Fdf1d0KSSw2OywZBO0fHQ9tQvg3rmYG04AEyxLp7pgFQI15z50thMUrO6ultAywIbRj2ORpP4yaxPl7kufJdyuGMWZJDsQEQCTMy0wQDz1+VEw/HygYq9xFUlgohkzREMMwBG3addhUjbRAFZcq/ZEhgdN5IzNE9kVR8fxuTKJIJWQoABA2BYHbwjzqzBJuXAs+FyHt8aZicjZcxnKp8zpy8KtsNbe9bYuSCoJUvsNIju0PhtWHXFEmDMwd+yfhrNP4LiDKT1iDBEzIIIgir5ad7lKHDQkcyaal2LS/b6OespOmxnceFV9y6dCTXr6q2UrBk6kUpjnEabbidNCT8dq1zlKbuRnUVBUgzY5h49tHwvEffnSUI8yy+uxqnwKm4+QESATroNO+p3na21xIDQQpO8HeBVkXNKrKnV3Rq7GKEhkVmMW1kjIgAK821MkbgGgYi7dZbeXIFlikHNsRJBjaaq+H4vW43aF/u8vhVjh7jKlnLAORjJ8NdOZoyjwWY8lPsvqK428QZfPm7ZMeQ0ouAvu2is4Gp6zZATp2nU7d9JI5a4RALb6DWfCaaYFhJJJ1kBYAjT3vI8vvrm5e9HfwSioptmlwGS6FS9DXB1QdtBMZWHvR8qreL4NldjZu6qZChjOxkiBEQBMd1Z+9jQpi1bKS0zMvMRuO/sq54TfQgricocyQWVQ3Igk+8CezUGszwyx++u3wCs8MjcfyNYLHXboyaEqI0AEkSZ33iuX2diGYryAJ59ggaz3UbjPDJIu2SoLICbYIBYQPdXbnsOYpTB4W4iSbWsrCtIJ7NIAYD1qtbGt0a+RHklGVNfU9exZUZQxGUkEJmBJ5tMaAaaA0PhxYyzhmGQwVyqQeRidfWh9EXum2JUJ/rNgsLuSdSPCeW1ewFwXXuWsjG3BVhMqFA0OsHczoOfnVjglF18zNPK3PhjWI44l/pLZLwpATYENlEAgTMT9/jS2Fxb7BzBgTr8BMUimEPSXGUiFyqIaCCBsVMEHadeyj/m5J/WW4JPIj0B1FN08cVS7FSnNu2WuHxczLQo3JiT4CTJO3pQcbiLTIo3DAs8NsdgDEwRv56iqrFKiEybk9kqFPjprrBoFy0WIc5RzjafAAgT+FRYIp3ZsxZqjdWWWIwwVFcuWE5RoQNvHSdf3aBbUJBlt+8R3QRU7ONPuqP3jlnnK7+HOuXro6xdQNebQdOUCaaCadMbJley4yoLdx1xRAYKu8Kiz5k0rcxzsYNy4Z197LPoKXzKZI03J56edAe7CAiCQDy8x8662CacabPPZf8AtaQ0gDNBAmQssS25A5miX5tsUGUQQOqoG4nsqsuYls2kxII07RO/cR8aLjMVmYkbmNO2D/Gr6RXbos+GYtluwHIzKYMnx28jW/8AYDjty3ce2ltGa4A2oCnqBiQSIkaivlNm+RcU9h18NjWv4Rfazdt3oMAnkdjMgHwNVzTSdFsalSY9xPFYy1cdHZ7YLZlt9JNuJgDKTDAAAf2a+jexfGQmFBvHKGe44b7ChmJKzJ0Bntr4/wC03GGvXi8NAleQ0nQjz186sPZ/2oZLJtnVVzCNdmB38yTVcssnFNJWPHErcWz6/jvaW02ZEbaesBrmGwg8j2isj/p8e1fR/wAKyeK4+kg2yVEDcyQYEknmKr/0v32f3G/GuetVmt7l8qs0vT4klTMVgbgDglspkEEyBy5wDFa/DWrbw35rMGJsg5dp3cwPGOysfg7skkxOh2O/9kiPWrvhvFzbX3raydgCzHQ82JGnedOytGpxykrX79jLhlFdy3xzdZf5S1vJMAoDlJgjW3odx2+VWl9IyTdDr2MmYO37QGmsctx31iuI8SV2DRZXSCwc5m13bv76jiOLh1yNcGhzAzInaJjSsr0smo/+Iu68VZuXxxVGLe6IFvKCRqNAdiDvvGvlWXThgvXSxBCtLEtAUTyygmfUVRniP9YSJA3aP4+lRs8SCAhCZO+sx4VZj0ssae3uxJ51Jq0aHH8PtocuWCFhix0Yk6HTblSgw5todR1tDyG/afA+tIvxZ3AzDXtiJ13Pb41y5xCVyQxmJblpV+NZbW4rlKHgcuYmCswNtNNY8KRxLwAQeX1pO9Cw6iSSTrr1WWZP/ENR3UbG8LuyEAYaINyNwOXn51pcOSvfaFELbg98xl5fGoM+hYTOYT3zJ1+NGucIuqcx97smDquhAOsd9CTh9xVy5SCTJJ2HIfOnUBGxuxidCQvcZaOR7B31eW7hlFjTJ1QOwjvNZuzhbuYCDBZQZXfUgkfD1pi0l3o2fUlXCSSYAJYAd3umi0FWMo7dPAMBtxprAJ35eVWOPxBJVLrawCsAQFGg05nT41R4e29wG2FDPAGoOadTzGkwNO6i4nG9L1lB6iqp5Gc0fXgaoyYoy+Zox5ZwXPY02FxmGQDVRkgy4Gd2PLuWeY75qHtLbV7nTCSiwt2DmIgSHUEmV227u2srZR7lwW5GYkDcGSQTv26bV6zi2ZlQs+rQQSZEmCI7dT61lWjcZKSZper3Rpou14qLhCoQeiEIwbQroRoTpHZ3ctqfPtdkBD287HUbhZVSdSTI90bTNY/h7KhuCZhomCBALAGeU9lPpxEA+7O3ZTy0mNumrK46qa5TLPH8duXrJYSnujKpMQCpiY1pGzjLrW3Jdwyk6gtsJGoG+gry8TH7Eazy9a8OJb/q9/CrY4oxVKJXLJKTtsXTjLDqgHMADmJJJJiZ7zT/AAjidy5mRm21BOp1Ou0VR3wz3WYLEgD/AHZEc47qf4SHtsWYCCsbg6yO+o8ONrsKsk0xi/jzfuZANiy9bUyN9N+VO8QLoMgRJI5QBAHMRE9/KKqcLZZL3S5ljOXjXnOmnjT3Gcc11CFMNGhAIPPmT4UOhjSpDLUT8kLDBIbQjSQvynSpY/EjT7exG8xykcxSdqwcrIz6NlMhTMgzyPhSx4X/AFhbxtg/e1BYY7r3Alqnt2jt8lreYgiZiBrpB2Eaa1XYa6QwAOp2FWHDs9vc5lgjKQI333qeJCMCMkaaGdtQZHMbdtW1jXkyuYWziuro2+YEAADcf+QnwNJPfBVjm6w92Aq/hUfzG3uVk9pZvxrxwCfs/FvxqzqxE3olbuaAm4wktoBqOyRm02q8/SJKL+tcaQc2h7DoTVCuAUf5mjW7ZUZQdOw6j0NDrRDvRWWL7JIYk8ozRtzBp9sYYBGxMQNT9a1780WZyr5gH76mtmNgB4AAbR5VW3Buxo5mgAxJnLudR6GKF+c3P2P8VOC0R8T66GudGe6otgesVz8NuN9lvj865+iLnZ8QPnW7u2LH9NP7lxvnSzYXDf0uf+Q3zakWTI+9Eaf60Y9eCN2j94fKmDwnQCRArUGxhf6RcPhaj7ya4LOE/nbx/sqPlTXJ+UC36GVOFCOFIBzgqJ747qbXhi9nwq9axgju1yZBnZtOUmdPACnLVzAjaf7XSGnabr3kD6maXB+Ommw7Se3votrhxbRQzdwA/GtZbxeF5G35wPvpq3dQ+6VP/CQfuqLA3/cSkZUezV5xlFi5J0BYQNe+iY/g+JVrloKG6E28jSYIKgFRrsGcEct60pUDXYgz6UB7InMZJ6x1JPvHM3qQD5VZHDKKq/wXRcFzX79igThYYW1JuKy9Z8ynNGViDJA7QI0iD21Ufpkulu2qBDDLmLwCWaZuEwDAIHLbyrT4m2ensBCBmzhh2gZSYqnxGAtrYxCqo6l0SRzFs/gSY76s6FqyvqrdVfvcY4lxJryXrpALobLSk6L1RBnfRY211q+ve0Cphehawma9atvrllixXpCFI0YQCCebnsqm9n8NbNq6GXr9JlaCY/VkZNJ8++aW4jwPqyjZmGUCVgxIHbsN/WlcOEmi3JkuTlDyaPg3CnvMbqWSC7KHb9X1QJB32YyDIBgE1R4ng9vCXGtXXbMMucAe9Bzqx0IJkzPfV97LcStYO3hkuXkQhHzqzQNbjEmdp1Xeq323u/nV4XLILI1sKHAJElnIMjkAw17qXJGuYidSW1cdiswt3CQCgcsryskA9WCD2RIEedQvmyxJFo6kmS53OvZVVYwl1D0cSQwynTUBwuhPI/OnQY0MyNKpzqUKoWWVvsTKrv0a/wB4/OK7nPIKPBRUcwrsj6isznL4le+XxO5m7fuFRKk8z610nvr2albl8QOT+JHo/qa90NSmvZqHILOdCK90VSDiuZ6BD3R17IK9mrlSyHctd86GTXM1EAQ+NcNQJ+pqPnRIEmvZu+hxXMtEIXNXM1QiuxU4IdNRrxFcj6mjZC4PBX/nLf79DbhTj7dv9+rK/wAIO+bxpe5wzyrDHUN/3fgveP0K67gXH2l8iaEbJ7fv/CnjgwNzU0w68zV3X9fwLsKpkjn8G/CoEd59G/Crs4a3+0a42GtCOvPkaK1K9QdMpco7T6H8K4FXv9G+VXpwVk6C4PShPgk/nFHl/GotQvUPTYhZ4i6e7ccDsOZh6MDVnheOI3VuQD2gEeoikXwnY4PlQGw/aw9YrRj1Tj5BTRpGso+W5mJyyVZJ5xMEdsCg8Rwoe09tAVLzrkIlid2gSdtaQ4feFllLuMjEBtjEn3tvX+Fa29wxSsq0nfZQD6Ct0c0ZK0y+MLXYpsJhlsrkU5pJckiCWfUyPh5UYvXLmFj7X19fXYBrR7asTJVFJ7V4dW6LkWudHPc4M/KtFaUKAo0AAA8tBVVjuHFwBIMEESdiDINP9Gf2jQIiswtwtfNsjKQ14qY2h7bqfUmrPGcKtXGZ4ZGYliVbmSSdDpz7KjZwQV88kkz2c+34elNzyqTe/uLDGkmiku8Af7Dq3cRlPzmqzEWHt++rL3nb94SPjWwzV0NVLwRfbgDxLwYoN9RXc/dWlxfBrNzUA227U0Hmu3wqmxnBLyarFwd0K3psfWqngkuxS4NCecc64z9lANwg5SCp7GEH0NdzmqnEUOD3V4PS4uV3NQ2gGC9cnvpcP3xXc1TaEOD9aVGaELhrxuVNpAp8a9PbQekruehRAuldmhSP8jXM1DaQODXpoPSfU17PUogcGo5vr6NCz1zN3/A0NobLxuOP20N+Lsdz91VC14nWotPjXgZ5JFi2Pk66/XKuHHidqrmOtRpujEG9j9zGA0JsUO+lWqDUVjiTcxk4o/RqDYo0DlQRvTKCBuYwbx76atcRKiBbt+JWT50gN6k1MuOxFJjV3Htc0bKeWgj7q2WExLZF1Puj7vCsFZ3FbWweqPCtGFW3Y8ZOib3NSO/7/wDOhz9fXhUVPveK/Kojl9cjVxanwFz/AF9eNSDUI+6fD5CutsKAbC5jXjc5UMHU+Pyry8vH5moEKr13pfrWhD5V6oCw3S14XaCeX1yrg5+dEh3EWEuCHUN5TH13VT4v2fjW03kxlfUaj41dn6+FRnUePzqOKfcrkjG4q09sxcRl7919R86FPfW2xqg7isbxdQt7KoyiJhdBz5CqZ4kuxW0CLn6NeB7q840oAqmhRhW+pruf62oNcahQBmai/nQRXqlBDCurP1HwoSVJ9qFEJTXs1Rtmog/OpRAuao5vH1oQYzvyqU1KIf/Z",
    programs: "140+ Programs",
    students: "17,000+ Students"
  },
  {
    name: "Columbia University",
    location: "New York City, USA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDnN-4Xpqq-enZNiiD4_jRAyn1HB1ztmO1kg&s",
    programs: "200+ Programs",
    students: "25,000+ Students"
  },
  {
    name: "Tsinghua University",
    location: "Beijing, China",
    image: "https://i.ytimg.com/vi/VNWI-oEK7NU/sddefault.jpg",
    programs: "230+ Programs",
    students: "32,000+ Students"
  },
  {
    name: "University of Edinburgh",
    location: "Edinburgh, UK",
    image: "https://www.ed.ac.uk/sites/default/files/thumbnails/image/cam_about-us-1_old_college_0.jpg",
    programs: "260+ Programs",
    students: "27,000+ Students"
  },
  {
    name: "University of Michigan",
    location: "Ann Arbor, USA",
    image: "https://www-personal.umich.edu/~jensenl/visuals/album/annarbor/Img_5261.jpg",
    programs: "240+ Programs",
    students: "31,000+ Students"
  },
  {
    name: "Peking University",
    location: "Beijing, China",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/04/83/13/5e/peking-university-beijing.jpg",
    programs: "210+ Programs",
    students: "29,000+ Students"
  },
  {
    name: "Johns Hopkins University",
    location: "Baltimore, USA",
    image: "https://api.hub.jhu.edu/factory/sites/default/files/styles/landscape/public/gilman091018.jpg",
    programs: "180+ Programs",
    students: "21,000+ Students"
  },
  {
    name: "University of California, Berkeley",
    location: "Berkeley, USA",
    image: "https://www.igniteastar.com/wp-content/uploads/2021/07/campus-aerial-shot-750.jpg",
    programs: "270+ Programs",
    students: "33,000+ Students"
  },
  {
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    image: "https://i.ytimg.com/vi/WK8ipxOEu0g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCs3qnYlcPU_nzFVZVFnguf5stWFw",
    programs: "250+ Programs",
    students: "35,000+ Students"
  },
  {
    name: "Australian National University",
    location: "Canberra, Australia",
    image: "https://www.anao.gov.au/sites/default/files/styles/anao_report/public/anao_report/image/anu-governance-control-frameworks-anao.jpg?itok=SLiFVAIP",
    programs: "190+ Programs",
    students: "20,000+ Students"
  },
  {
    name: "McGill University",
    location: "Montreal, Canada",
    image: "https://www.usnews.com/object/image/00000156-6b7c-d0b3-ad56-ff7dbd8b0000/160808-mcgilluniversity-submitted.jpg?update-time=1470682544421&size=responsiveFlow970",
    programs: "220+ Programs",
    students: "28,000+ Students"
  },
  {
    name: "University of British Columbia",
    location: "Vancouver, Canada",
    image: "https://i.ytimg.com/vi/Dlq9Hb9MSfQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB0Nb8zelbG3lvyABxiKOZPvi46VQ",
    programs: "240+ Programs",
    students: "32,000+ Students"
  },
  {
    name: "University of Hong Kong",
    location: "Hong Kong",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTueoivbrtl0esJLnRQWvE6B-pqf3zKt_KJE4asm2xS8k2jb3prXwPExx_aKig0a377BIg&usqp=CAU",
    programs: "200+ Programs",
    students: "24,000+ Students"
  },
  {
    name: "King's College London",
    location: "London, UK",
    image: "https://assets.collegedunia.com/public/college_data/images/studyabroad/appImage/college_836_16-12:54_kings-colleg-london-5.jpeg",
    programs: "230+ Programs",
    students: "26,000+ Students"
  },
  {
    name: "London School of Economics and Political Science",
    location: "London, UK",
    image: "https://i.guim.co.uk/img/media/231e2c0107c3a69f5f6ed2a7ef6fdea014883046/0_88_2261_1356/master/2261.jpg?width=1200&quality=85&auto=format&fit=max&s=7b8bd79da158a3120cfe0c60effa8b47",
    programs: "160+ Programs",
    students: "18,000+ Students"
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