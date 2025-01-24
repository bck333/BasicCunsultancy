
import React, { useState } from 'react';
import { Search, ChevronRight, Calendar, User, MessageCircle, Heart, Bookmark, Share2, Filter } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  featured: boolean;
  comments: number;
  likes: number;
  readTime: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
}

// const Blogs: React.FC = () => {
    export function Blogs() {

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories: Category[] = [
    { id: 'all', name: 'All Posts' },
    { id: 'admissions', name: 'Admissions' },
    { id: 'visa-guidance', name: 'Visa Guidance' },
    { id: 'scholarships', name: 'Scholarships' },
    { id: 'student-life', name: 'Student Life Abroad' }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Top Universities in the USA for International Students",
      excerpt: "Discover the best universities in the USA that offer excellent programs and facilities for international students.",
      author: "Global Consultants Team",
      date: "Jan 10, 2025",
      category: "admissions",
      featured: true,
      comments: 30,
      likes: 150,
      readTime: "6 min read",
      image: "/api/placeholder/800/400"
    },
    {
      id: 2,
      title: "Your Step-by-Step Guide to Student Visa Applications",
      excerpt: "Learn how to successfully apply for a student visa with our comprehensive guide.",
      author: "Visa Experts",
      date: "Jan 12, 2025",
      category: "visa-guidance",
      featured: false,
      comments: 25,
      likes: 140,
      readTime: "8 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 3,
      title: "How to Find and Apply for Scholarships Abroad",
      excerpt: "A guide to finding and applying for scholarships to make studying abroad more affordable.",
      author: "Scholarship Team",
      date: "Jan 14, 2025",
      category: "scholarships",
      featured: true,
      comments: 40,
      likes: 200,
      readTime: "7 min read",
      image: "/api/placeholder/600/400"
    },
    {
      id: 4,
      title: "5 Tips to Adjust to Life as an International Student",
      excerpt: "Helpful tips to make your transition to studying and living abroad easier.",
      author: "Student Support Team",
      date: "Jan 16, 2025",
      category: "student-life",
      featured: false,
      comments: 35,
      likes: 170,
      readTime: "5 min read",
      image: "/api/placeholder/600/400"
    }
  ];

  const filteredPosts = activeFilter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden gradient-bgnope text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6 animate-slideDown">
            Study Abroad Blog
          </h1>
          <p className="text-xl mb-8 animate-fadeIn max-w-2xl">
            Stay updated with the latest information on studying abroad, admissions, visas, scholarships, and more!
          </p>
          <div className="relative w-full max-w-2xl animate-slideUp">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute right-4 top-3 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center gap-4 overflow-x-auto pb-4">
          <Filter className="w-5 h-5 text-gray-500" />
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap
                ${activeFilter === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPosts.map((post, index) => (
            <div
              key={post.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 animate-fadeInUp
                ${post.featured ? 'md:col-span-2 lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(post.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="bg-yellow-500 text-white text-sm px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                
                <button className="mt-4 w-full bg-gray-50 text-blue-600 py-2 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                  Read More
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

