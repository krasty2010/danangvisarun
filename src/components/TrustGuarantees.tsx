import React from 'react';
import { ShieldCheck, Clock, CreditCard } from 'lucide-react';

const TrustGuarantees: React.FC = () => {
  return (
    <section className="bg-text-primary py-16 text-white">
      <div className="container-custom">
        <h2 className="mb-12 text-center font-montserrat text-3xl font-bold text-white md:text-4xl">
          Наши гарантии
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white bg-opacity-5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-DEFAULT">
              <ShieldCheck size={32} />
            </div>
            <h3 className="mb-3 text-xl font-semibold">100% гарантия (услуга быстрой Е-визы)</h3>
            <p className="text-gray-200">
              Мы гарантируем полный возврат средств, если ваша поездка будет отменена по нашей вине или в случае отказа в визе.
            </p>
          </div>
          
          <div className="rounded-xl bg-white bg-opacity-5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-DEFAULT">
              <Clock size={32} />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Точность и пунктуальность</h3>
            <p className="text-gray-200">
              Наши автобусы всегда отправляются вовремя, а процесс на границе максимально оптимизирован для экономии вашего времени.
            </p>
          </div>
          
          <div className="rounded-xl bg-white bg-opacity-5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-DEFAULT">
              <CreditCard size={32} />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Прозрачные цены</h3>
            <p className="text-gray-200">
              Никаких скрытых платежей или дополнительных сборов. Вы платите только ту сумму, которая указана при бронировании.
            </p>
          </div>
        </div>
        
        <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-white bg-opacity-10 p-6 text-center backdrop-blur-sm">
          <p className="text-lg">
            Более 4,200 клиентов уже доверились нам. Присоединяйтесь к ним и получите свою визу без стресса и хлопот!
          </p>
          <a 
            href="https://t.me/learnx1000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn mt-6 bg-white px-8 py-3 font-semibold text-text-primary hover:bg-gray-100"
          >
            Забронировать сейчас
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustGuarantees;