'use client'
import { SetStateAction, useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I know if therapy is right for me?',
      answer: '',
    },
    {
      question: 'How long does each therapy session last?',
      answer: 'Typically, individual therapy sessions last about 50 minutes. However, the length of sessions can vary based on your needs and the type of therapy. Couples or family therapy sessions may be longer.',
    },
    {
      question: 'How often should I attend therapy?',
      answer: '',
    },
    {
      question: 'Is therapy confidential?',
      answer: '',
    },
    {
      question: 'Do you offer online therapy sessions?',
      answer: '',
    },
    {
      question: 'What are your fees, and do you accept insurance?',
      answer: '',
    },
  ];

  return (
    <div className="bg-sky-100 py-8 px-4">
      <h2 className="text-2xl font-bold mb-6">Heres What You Need To Know</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-sky-950 font-medium">{faq.question}</h3>
              <span className="text-sky-700">
                {activeIndex === index ? '↓' : '→'}
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-sky-700 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
