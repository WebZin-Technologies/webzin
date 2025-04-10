import React from 'react';
import { FaCalendarAlt, FaUser} from 'react-icons/fa';
import '../../Components/Blogs Css/Blog.css';
import BlogXBanner from '../../Assets/BlogXBanner';

const BlogTemplate = () => {
  return (
    <div className="min-h-screen bg-white text-black">
           {/* Thumbnail Image */}
      <div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-4 md:py-6">
        <div className="w-full max-w-4xl overflow-hidden rounded-xl shadow-md">
          <div className="aspect-w-16 aspect-h-9 relative"> {/* Fixed 16:9 ratio */}
            <img 
              src={BlogXBanner} 
              alt="Blog banner" 
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-5 leading-snug">
          {/* Blog title goes here */}
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 text-gray-500 gap-2">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="mr-2 text-[#4328c7]" />
            <span className="text-base">{/* Date goes here */}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="mr-2 text-[#4328c7]" />
            <span className="text-base">{/* Author name goes here */}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {[/* Array of tags goes here */].map(
            (tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-purple-100 text-[#4328c7] text-sm font-medium rounded-full hover:bg-purple-200 transition"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div className="space-y-6 text-gray-800 leading-relaxed mb-16">

        <h3 className="text-xl md:text-2xl font-semibold text-[#4328c7] mt-8 mb-3">
          {/* Subheading goes here */}
          </h3>
          
          <p className='text-md'>
            {/* Blog content goes here */}
          </p>

          
        </div>

        {/* About Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-[#4328c7] mb-3">
            {/* Company/author name goes here */}
          </h3>
          <p className="text-gray-600 text-sm">
            {/* Description goes here */}
          </p>
        </div>

        {/* CTA Buttons - Improved alignment and size */}
        <div className="flex justify-start gap-3 mt-6">
          <button className="px-4 py-2 bg-[#4328c7] text-white text-sm font-medium rounded-md hover:bg-[#371fad] transition">
            About Us
          </button>
          <button className="px-4 py-2 bg-[#4328c7] text-white text-sm font-medium rounded-md hover:bg-[#371fad] transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;