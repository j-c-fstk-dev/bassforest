import React, { useState } from 'react';
import { SectionId, FAQItem } from '../types';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Is this a real festival?",
      answer: "Yes. Bass Forest is a fully virtual electronic music event featuring live artist performances broadcast globally for 12–24 hours."
    },
    {
      question: "Where do donations go?",
      answer: "Donations are routed through Monthly Earth Day and allocated to aligned tree planting organizations."
    },
    {
      question: "Are the trees actually planted?",
      answer: "Yes. Donations support real planting efforts coordinated through Monthly Earth Day and participating reforestation partners."
    },
    {
      question: "Do artists get paid?",
      answer: "Artist participation models vary. Compensation depends on sponsorship and grant funding and is communicated directly with selected performers."
    },
    {
      question: "Can I perform?",
      answer: "Yes. Artist submissions are open, with a mix of invited and community-selected performers."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={SectionId.FAQ} className="py-24 bg-forest-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-forest-900/20 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">FAQ</h2>
          <p className="text-gray-400">Common questions about the mission and event.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-forest-900/40 border-neon-green/50' 
                  : 'bg-transparent border-white/10 hover:border-white/30'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg font-bold ${openIndex === index ? 'text-neon-green' : 'text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-neon-green w-5 h-5 flex-shrink-0" />
                ) : (
                  <Plus className="text-gray-400 w-5 h-5 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="p-6 pt-0 text-gray-300 leading-relaxed border-t border-white/5 mt-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;