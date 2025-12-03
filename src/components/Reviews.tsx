import React from 'react';
import review1 from '../assets/review1.jpg';
import review2 from '../assets/review2.jpg';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="section">
      <div className="container-custom">
        <h2 className="section-title">Отзывы наших клиентов</h2>
        
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img 
                src={review1}
                alt="Отзыв клиента" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img 
                src={review2}
                alt="Отзыв клиента" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://t.me/visarunDanang/2981" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Больше отзывов в Telegram
            </a>
          </div>
        </div>
        
        <div className="mx-auto mt-16 max-w-3xl rounded-xl bg-gradient-primary p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-semibold">Вы уже воспользовались нашими услугами?</h3>
          <p className="mb-6">Мы будем благодарны за ваш отзыв! Поделитесь своим опытом и помогите другим сделать правильный выбор.</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a 
              href="https://t.me/learnx1000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-white px-8 py-3 font-semibold text-text-primary hover:bg-gray-100"
            >
              Оставить отзыв
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;