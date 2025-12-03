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
    question: 'Как долго длится визаран?',
    answer: 'Обычный визаран по времени длится 10-12 часов, авто едет чуть быстрее.',
  },
  {
    id: 2,
    question: 'Что делать, если на границе откажут в визе?',
    answer: 'Такие случаи крайне редки при правильно подготовленных документах. Но если это произойдет, мы предоставим вам полную поддержку и предложим альтернативные варианты решения проблемы. При отказе вы получаете компенсацию согласно нашей политике.',
  },
  {
    id: 3,
    question: 'Нужно ли мне заранее подготавливать какие-то документы?',
    answer: 'Обычно достаточно иметь при себе действующий загранпаспорт со сроком действия более 6 месяцев. После бронирования мы отправим вам подробную инструкцию с перечнем необходимых документов в зависимости от типа визы, которую вы хотите получить.',
  },
  {
    id: 4,
    question: 'Какие типы виз можно получить через визаран?',
    answer: 'Срок визы варьируется от 30 до 90 дней (из простых вариантов) в зависимости от вашего паспорта, уточняйте детали в чате, что есть на сайте или пишите менеджеру в телеграм. Сейчас мы не занимаемся выдачей бизнес, студенческих и рабочих виз. Но если вам сильно нужно - то напишите менеджеру. ',
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
        <h2 className="section-title">Часто задаваемые вопросы</h2>
        
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
            Не нашли ответ на свой вопрос? Свяжитесь с нами через Telegram, и мы с радостью поможем!
          </p>
          <a 
            href="https://t.me/learnx1000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary mt-4"
          >
            Задать вопрос
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;