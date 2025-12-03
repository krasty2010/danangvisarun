import React from 'react';
import { Check, Bus, Car, CreditCard, Clock } from 'lucide-react';

const ServiceCard: React.FC<{
  title: string;
  price: string;
  icon: React.ReactNode;
  features: string[];
  highlighted?: boolean;
}> = ({ title, price, icon, features, highlighted = false }) => {
  return (
    <div 
      className={`card relative overflow-hidden p-8 ${
        highlighted ? 'border-2 border-accent-DEFAULT' : ''
      }`}
    >
      {highlighted && (
        <div className="absolute -right-12 -top-12 rotate-45 bg-accent-DEFAULT px-12 py-2 text-center text-sm font-medium text-white">
          Популярное
        </div>
      )}
      <div className="mb-6 flex items-center justify-center">
        <div className="rounded-full bg-primary-light bg-opacity-20 p-4">
          {icon}
        </div>
      </div>
      <h3 className="mb-2 text-center text-2xl font-semibold">{title}</h3>
      <p className="mb-6 text-center text-3xl font-bold text-accent-dark">{price}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 mt-1 text-success-DEFAULT" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <a 
          href="https://t.me/learnx1000" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={highlighted ? "btn-primary w-full" : "btn-outline w-full"}
        >
          Забронировать
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <h2 className="section-title">Наши услуги и цены</h2>
        
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Слип бас"
            price="800k VND"
            icon={<Bus size={32} className="text-accent-DEFAULT" />}
            features={[
              "Комфортабельный спальный автобус",
              "Wi-Fi и кондиционер",
              "Небольшой русский завтрак",
              "4-5 часов в одну сторону",
              "Рейсы по расписанию",
              "Помощь на границе"
            ]}
          />
          
          <ServiceCard
            title="Частный автомобиль"
            price="720-900k VND"
            icon={<Car size={32} className="text-accent-DEFAULT" />}
            features={[
              "Комфортный и просторный джип на 7 мест",
              "Индивидуальное расписание",
              "Кондиционер",
              "Самый быстрый вариант",
              "4 часа в одну сторону",
              "Персональный менеджер для поддержки"
            ]}
            highlighted={true}
          />
          
          <ServiceCard
            title="Комбо «Транспорт + Виза»"
            price="3720k - 3900k VND"
            icon={<CreditCard size={32} className="text-accent-DEFAULT" />}
            features={[
              "Транспорт туда и обратно",
              "Премиум поддержка 24/7",
              "Персональный гид",
              "Ускоренное оформление",
              "Гарантия получения визы"
            ]}
          />
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl bg-white p-8 shadow-medium">
          <h3 className="mb-6 text-center text-2xl font-semibold">Ускоренная виза (90 дней)</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h4 className="mb-2 text-xl font-medium">3 часа (визаран одним днем)</h4>
              <p className="text-2xl font-bold text-accent-dark">120$</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h4 className="mb-2 text-xl font-medium">1 день</h4>
              <p className="text-2xl font-bold text-accent-dark">110$</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h4 className="mb-2 text-xl font-medium">2 дня</h4>
              <p className="text-2xl font-bold text-accent-dark">100$</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://t.me/learnx1000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-block"
            >
              Уточнить и забронировать
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;