import React, { useState } from 'react';
import './Faq.css';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'What services does WebZin offer?',
    answer: 'WebZin offers a wide range of web solutions including static and dynamic websites, e-commerce platforms, UI/UX design, web maintenance, and logo design.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'The timeline depends on the complexity and requirements of your project. Simple sites can be delivered in a week, while larger projects may take several weeks.',
  },
  {
    question: "Can I update my website content after it's live?",
    answer: 'Absolutely! We provide content management solutions and ongoing support so you can update your website anytime.',
  },
  {
    question: 'Do you offer custom designs or use templates?',
    answer: 'We specialize in custom designs tailored to your brand, but can also work with templates if you prefer.',
  },
  {
    question: 'How can I get started with WebZin?',
    answer: "Simply contact us through our website or the Get a Quote button, and we'll guide you through the process.",
  },
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <motion.section
      className="faq-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* FAQ Title */}
      <motion.h2
        className="faq-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frequently Asked Questions<br />(FAQ)
      </motion.h2>

      {/* FAQ List */}
      <div className="faq-list">
        {faqData.map((item, idx) => (
          <motion.div
            key={idx}
            className={`faq-item${openIndex === idx ? ' open' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* FAQ Question */}
            <button className="faq-question" onClick={() => toggleFaq(idx)}>
              <span>{item.question}</span>
              <span className="faq-icon">
                {openIndex === idx ? <FiMinus /> : <FiPlus />}
              </span>
            </button>

            {/* FAQ Answer */}
            <div
              className="faq-answer-wrapper"
              style={{ maxHeight: openIndex === idx ? '300px' : '0px' }}
            >
              <div className="faq-answer">{item.answer}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Faq;
