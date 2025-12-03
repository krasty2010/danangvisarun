import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: 'How long does a visa run take?',
    answer: 'A typical visa run takes 10-12 hours, cars are slightly faster.',
  },
  {
    id: 2,
    question: 'What if I get denied a visa at the border?',
    answer: 'Such cases are extremely rare with properly prepared documents. But if this happens, we will provide you with full support and offer alternative solutions. In case of denial, you receive compensation according to our policy.',
  },
  {
    id: 3,
    question: 'Do I need to prepare any documents in advance?',
    answer: 'Usually it\'s enough to have a valid passport with more than 6 months validity. After booking, we\'ll send you detailed instructions with a list of required documents depending on the type of visa you want to get.',
  },
  {
    id: 4,
    question: 'What types of visas can I get through a visa run?',
    answer: 'Visa duration varies from 30 to 90 days (simple options) depending on your passport, check details in the chat on the site or message our manager on Telegram. Currently we don\'t handle business, student and work visas. But if you really need it - message our manager.',
  }
];

const FaqItem: React.FC<{ item: FaqItem; isOpen: boolean; toggle: () => void }> = ({ 
  item, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full items-center justify-between text-left font-medium focus:outline-none"
        onClick={toggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg">{item.question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isOpen && (
        <div className="mt-2 text-text-secondary">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]);
  
  const toggleItem = (id: number) => {
    setOpenItems((prev) => 
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };
  
  return (
    <section id="faq" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Frequently Asked Questions</h2>
        
        <div className="mx-auto max-w-3xl">
          {faqItems.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={openItems.includes(item.id)}
              toggle={() => toggleItem(item.id)}
            />
          ))}
        </div>
        
        <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-white p-6 text-center shadow-soft">
          <p className="text-text-secondary">
            Didn't find the answer to your question? Contact us via Telegram, and we'll be happy to help!
          </p>
          <a 
            href="https://t.me/learnx1000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary mt-4"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;