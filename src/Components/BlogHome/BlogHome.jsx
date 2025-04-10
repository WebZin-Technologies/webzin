import React from 'react';
import './BlogHome.css';
import BlogOneBanner from '../../Assets/BlogOneBanner.png';
import { FiArrowRight } from 'react-icons/fi';

function BlogHome() {
  const blogData = [
    {
      id: 1,
      title: "Why Every Small Business Needs a Website in 2025 ",
      excerpt: "Discover why a website is a must-have for small businesses in 2025—and how to get one affordably",
      thumbnail: BlogOneBanner,
      link: "/blog/small-business-website-2025"
    },
    // {
    //   id: 2,
    //   title: "",
    //   excerpt: "",
    //   thumbnail: ,
    //   link: "/blog"
    // },
  ];

  return (
    <div className="blog-container">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-[#4328c7] section-title">Our Latest Blogs</h1>
        </div>

      <div className="blog-grid">
        {blogData.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="card-image">
              <img src={post.thumbnail} alt={post.title} />
            </div>
            <div className="card-content">
              <h3>{post.title}</h3>
              <p className="excerpt">{post.excerpt}</p>
              <a href={post.link} className="read-more">
                Read more <FiArrowRight />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogHome;