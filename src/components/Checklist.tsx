import React from 'react';
import { Import as Passport, Smartphone, DollarSign, BatteryFull, Heater as Water } from 'lucide-react';

interface ChecklistItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  required: boolean;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ icon, title, description, required }) => {
  return (
    <div className="flex items-start rounded-xl bg-white p-4 shadow-sm mb-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
      <div className="mr-4 rounded-full bg-primary-light bg-opacity-20 p-3">
        {icon}
      </div>
      <div>
        <div className="flex items-center mb-1">
          <h4 className="mr-2 text-lg font-medium">{title}</h4>
          <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            required 
              ? 'bg-error-light text-error-dark' 
              : 'bg-success-light text-success-dark'
          }`}>
            {required ? 'Обязательно' : 'Рекомендуется'}
          </span>
        </div>
        <p className="text-text-secondary text-sm">{description}</p>
      </div>
    </div>
  );
};


const Checklist: React.FC = () => {
  return (
    <section id="checklist" className="section bg-gray-50">
      <div className="container-custom max-w-2xl mx-auto">
        <h2 className="section-title text-center">Что взять с собой</h2>

        {/* Список — сверху вниз */}
        <div className="flex flex-col">
          <ChecklistItem
            icon={<Passport className="text-accent-DEFAULT" size={24} />}
            title="Паспорт"
            description="Оригинал загранпаспорта (срок действия > 6 месяцев)"
            required={true}
          />
          <ChecklistItem
            icon={<Smartphone className="text-accent-DEFAULT" size={24} />}
            title="Телефон"
            description="С доступом к Telegram и местной SIM-картой"
            required={true}
          />
          <ChecklistItem
            icon={<DollarSign className="text-accent-DEFAULT" size={24} />}
            title="Наличные"
            description="140k VND - оплата пошлин на границе. Это не обязательно, но не оплатив можно сильно встрять на границе. + Личные расходы на покушать."
            required={true}
          />
          <ChecklistItem
            icon={<BatteryFull className="text-accent-DEFAULT" size={24} />}
            title="Зарядное устройство"
            description="Для телефона и других устройств"
            required={false}
          />
          <ChecklistItem
            icon={<Water className="text-accent-DEFAULT" size={24} />}
            title="Вода и перекус"
            description="Для долгой поездки или ожидания"
            required={false}
          />
        </div>

        {/* Дополнительные заметки */}
        <div className="mt-8 rounded-xl bg-primary-light bg-opacity-10 p-6">
          <h3 className="mb-4 text-xl font-semibold">Важные заметки:</h3>
          <ul className="list-inside list-disc space-y-2 text-text-secondary">
            <li>Убедитесь, что ваш паспорт действителен не менее 6 месяцев с даты въезда.</li>
            <li>Подготовьте точную сумму для визового сбора.</li>
            <li>Не берите с собой запрещенные или ценные предметы.</li>
            <li>Одевайтесь комфортно, поездка может занять несколько часов.</li>
            <li>Если у вас есть вопросы о процессе — напишите менеджеру.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Checklist;
