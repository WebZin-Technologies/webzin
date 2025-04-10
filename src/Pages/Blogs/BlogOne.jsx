import React from 'react';
import { FaCalendarAlt, FaUser} from 'react-icons/fa';
import '../../Components/Blogs Css/Blog.css';
import BlogOneBanner from '../../Assets/BlogOneBanner.png';

const BlogTemplate = () => {
  return (
    <div className="min-h-screen bg-white text-black ">
     {/* Thumbnail Image */}
<div className="w-full flex justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-4 md:py-6">
  <div className="w-full max-w-4xl overflow-hidden rounded-xl shadow-md">
    <div className="aspect-w-16 aspect-h-9 relative"> {/* Fixed 16:9 ratio */}
      <img 
        src={BlogOneBanner} 
        alt="Blog banner" 
        className="w-full h-full object-cover rounded-xl"
        loading="lazy"
      />
    </div>
  </div>
</div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-16">

        {/* Blog Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-5 leading-snug">
        Why Every Small Business Needs a Website in 2025 {/* Blog title goes here */}
        </h1>

        {/* Meta Info Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-5 text-gray-500 gap-2">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="mr-2 text-[#4328c7]" />
            <span className="text-base">April 9 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="mr-2 text-[#4328c7]" />
            <span className="text-base">Risnan Rv</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {["#SmallBusiness", "#WebDesign2025", "#DigitalMarketing", "#Entrepreneurship", "#WebDevelopment", "#WebZin", "#OnlinePresence", "#AffordableWebsites"].map(
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
        <h3 className="text-xl md:text-2xl font-semibold text-[#4328c7] mt-8 mb-3">
            {/* Subheading goes here */}
          </h3>
          <p>
            {/* Blog content goes here */}
          </p>
        
        <h3 className="text-xl md:text-2xl font-semibold text-[#4328c7] mt-8 mb-3">
        The Digital Age is Now — Is Your Business Ready?
          </h3>
        <div className="space-y-6 text-gray-800 leading-relaxed mb-16">
          <p>
          <p className='text-xl'>
  As we step deeper into 2025, one truth becomes more obvious every day: if your business isn’t online, it’s invisible.<br />
  Whether you’re a boutique owner, a freelancer, a home baker, or running a local service — having a website is no longer a luxury. It's a necessity.<br /><br />
  In this blog, we’ll break down exactly why a website is essential for small businesses in 2025,<br />
  and more importantly — how you can get one affordably and professionally with WebZin.
</p>

          </p>

          <h3 className="text-xl md:text-2xl font-semibold text-[#4328c7] mt-8 mb-3">
          Why Having a Website is Non-Negotiable in 2025
          </h3>
          <p className='text-xl'>
  <strong>1. Customers Search Online First</strong><br />
  Today’s customers Google before they go. Whether they’re looking for a local plumber or a nearby coffee shop, their first stop is often an online search.<br />
  If your business isn’t showing up, you’re handing business to your competitors.<br /><br />

  <strong>2. Social Media ≠ A Website</strong><br />
  Yes, social media is great for engagement — but it’s not your digital home.<br />
  You don’t own your Facebook or Instagram page — algorithms change, accounts get banned.<br />
  A website gives you full control over your brand and message.<br /><br />

  <strong>3. Builds Trust & Credibility</strong><br />
  A clean, well-designed website makes your business look more professional and trustworthy.<br />
  Would you hire a service that doesn’t even have a proper website? Neither would your customers.<br /><br />

  <strong>4. Showcase Products, Services, and Testimonials</strong><br />
  Your website is your 24/7 storefront. Whether it's showing off your product gallery, listing your services,<br />
  sharing your story, or highlighting customer reviews — it works even when you're asleep.<br /><br />

  <strong>5. Enables Online Sales & Bookings</strong><br />
  With a dynamic website, you can let customers buy products, schedule appointments, or request quotes directly online —<br />
  saving you time and boosting your income.<br /><br />

  <strong>6. Compete With Big Brands</strong><br />
  You may be small, but with the right website, you can look just as professional as big businesses.<br />
  A sleek website levels the playing field and helps you stand out.
</p>

          
          
          <h3 className="text-xl md:text-2xl font-semibold text-[#4328c7] mt-8 mb-3">
          “But I Can’t Afford a Website...” Think Again.
          </h3>
          <p className='text-xl'>
  This is the most common myth we hear from small business owners.<br />
  The truth? You don’t need to spend lakhs to get a stunning, functional website anymore.<br /><br />

  At WebZin, we specialize in:<br />
  • Affordable E-commerce websites<br />
  • Simple yet beautiful static & dynamic websites<br />
  • Logo design, UI design, and brand identity<br />
  • Ongoing support & maintenance<br /><br />

  All customized to your needs — without breaking the bank.<br /><br />
  Whether you’re just starting or ready to scale, we have flexible packages designed with small businesses in mind.
</p>

          <h3 className="text-xl md:text-2xl font-semibold text-[#4328c7] mt-8 mb-3">
          Real Talk: A Website Is an Investment, Not an Expense
          </h3>
          <p className='text-xl'>
  Let’s put it simply — a website earns you more than it costs.<br /><br />
  ✅ It brings in leads<br />
  ✅ Converts visitors into customers<br />
  ✅ Saves you time<br />
  ✅ Gives your brand a 24/7 presence<br />
  ✅ Sets you apart from your competition<br /><br />
  Still not convinced?<br />
  Think of the last service you hired — did you check their website before making a decision?<br />
  That’s what your customers are doing too.
</p>

        </div>

        {/* About Section */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-[#4328c7] mb-3">
            WebZin
          </h3>
          <p className=" text-lg">
  At WebZin, we believe that every idea deserves a powerful online presence.<br />
  From stunning e-commerce platforms to sleek static websites, our mission is to bring your vision to life<br />
  with clean code, creative design, and reliable support.<br /><br />
  Whether you're a startup, a small business, or an individual with a dream, WebZin is here to turn your digital goals into reality —<br />
  because your vision deserves the perfect code.
</p>

        </div>

        {/* CTA Buttons - Improved alignment and size */}
        <div className="flex justify-start mb-5 gap-3 mt-6">
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