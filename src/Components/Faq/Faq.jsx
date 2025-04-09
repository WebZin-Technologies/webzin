import React, { useState } from 'react';
import './Faq.css';

function Faq() {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    {
      id: '1',
      question: "What services does WebZin offer?",
      answer: "WebZin provides E-Commerce Websites, Dynamic and Static Websites, Logo Creation, Web Maintenance & Support, and Web UI Design tailored to your business needs."
    },
    {
      id: '2',
      question: "How long does it take to build a website?",
      answer: "The timeline depends on the type and complexity of the website, but typically ranges from 5 to 15 days for most projects."
    },
    {
      id: '3',
      question: "Can I update my website content after it's live?",
      answer: "Yes, if it's a dynamic website, you'll be able to update your content easily. We also offer ongoing support for content changes."
    },
    {
      id: '4',
      question: "Do you offer custom designs or use templates?",
      answer: "We offer fully custom-designed websites tailored to your brand, but we can also work with templates if you prefer a quicker solution."
    },
    {
      id: '5',
      question: "How can I get started with WebZin?",
      answer: "Just contact us with your requirements, and we'll schedule a call to understand your vision. From there, we'll handle the design, development, and delivery!"
    }
  ];

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-section">
        <div className="text-center mb-12 relative">
      <h1 className="text-3xl font-bold text-[#4328c7] section-title inline-block relative">
 Frequently Asked Question <br /> (FAQ)
</h1>
</div>


      <div className="faq-items">
        {faqs.map((faq) => (
          <div 
            key={faq.id} 
            className={`faq-item ${activeId === faq.id ? 'active' : ''}`}
          >
            <div 
              className="faq-question" 
              onClick={() => toggleFaq(faq.id)}
            >
              <h3>{faq.question}</h3>
              <span className="toggle-icon">
                {activeId === faq.id ? '-' : '+'}
              </span>
            </div>
            {activeId === faq.id && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;