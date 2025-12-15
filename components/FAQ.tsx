import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can I use my own drawing?",
      answer: "Yes! Our 'Upload Mode' is built exactly for that. You can upload sketches, Pinterest screenshots, or iPad drawings. Our AI automatically removes backgrounds and preps them for wrapping."
    },
    {
      question: "Does it work on dark skin tones?",
      answer: "Yes. Our lighting engine automatically adapts to all skin tones (Fitzpatrick Scale 1-6) to ensure the ink looks realistic and blends naturally with your specific complexion."
    },
    {
      question: "Is this a monthly subscription?",
      answer: "No. You pay $9.90 once and you own your designs and account forever. No hidden fees, no recurring charges."
    }
  ];

  return (
    <section className="py-24 bg-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="text-3xl font-serif text-white mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-lg transition-all duration-300 ${
                openIndex === index ? 'bg-white/5 border-ink-gold/50' : 'bg-transparent border-white/10 hover:border-white/20'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`font-medium ${openIndex === index ? 'text-ink-gold' : 'text-white'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-ink-gold flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;