import React from 'react';

const ProcessStep: React.FC<{ 
  title: string; 
  description: string;
  step: number;
}> = ({ title, description, step }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute left-1/2 top-10 -z-10 h-full w-0.5 -translate-x-1/2 bg-primary-light bg-opacity-30"></div>
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-primary text-white shadow-medium">
        <span className="text-2xl font-bold">{step}</span>
      </div>
      <h3 className="mb-2 text-xl font-medium">{title}</h3>
      <p className="text-center text-text-secondary">{description}</p>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <section id="process" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Как это работает</h2>
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2 lg:grid-cols-3">
          <ProcessStep
            title="Свяжитесь с нами"
            description="Напишите нам в Telegram для бронирования визарана"
            step={1}
          />
          
          <ProcessStep
            title="Выберите дату"
            description="Выберите удобную дату и время отправления"
            step={2}
          />
          
          <ProcessStep
            title="Получите инструкции"
            description="Мы отправим вам подробную инструкцию по подготовке"
            step={3}
          />
          
          <ProcessStep
            title="Сбор"
            description="Автобус заберет вас в указанном месте в Дананге"
            step={4}
          />
          
          <ProcessStep
            title="Продление визы"
            description="По инструкции проходите все этапы и получаете визу"
            step={5}
          />
          
          <ProcessStep
            title="Готово!"
            description="Получите новую визу и вернитесь в Дананг в тот же день"
            step={6}
          />
        </div>
      </div>
    </section>
  );
};

export default Process;