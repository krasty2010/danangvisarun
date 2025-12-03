import React from 'react';
import { BookOpen, Clock, Users } from 'lucide-react';

interface GuideCardProps {
  title: string;
  description: string;
  link: string;
  readTime: string;
  date: string;
  views: string;
}

const GuideCard: React.FC<GuideCardProps> = ({ title, description, link, readTime, date, views }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="card block transition-all duration-300 hover:-translate-y-1"
    >
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold line-clamp-2">{title}</h3>
        <p className="text-text-secondary line-clamp-3">{description}</p>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-text-light">
        <div className="flex items-center">
          <Clock size={16} className="mr-1" />
          {readTime}
        </div>
        <div className="flex items-center">
          <BookOpen size={16} className="mr-1" />
          {date}
        </div>
        <div className="flex items-center">
          <Users size={16} className="mr-1" />
          {views}
        </div>
      </div>
    </a>
  );
};

const Guides: React.FC = () => {
  return (
    <section id="guides" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Полезные гайды</h2>
        
        <div className="mx-auto grid max-w-5xl gap-6">
          <GuideCard
            title="Детальная инструкция: прохождение границы Вьетнам-Лаос (Лао Бао)"
            description="Подробное руководство по прохождению границы Лао Бао, включая все необходимые документы, процедуры и важные моменты, о которых нужно знать."
            link="https://vc.ru/migration/710473-detalnaya-instrukciya-prohozhdenie-granicy-vietnam-laos-lao-bao"
            readTime="15 мин"
            date="Март 2024"
            views="2.5K"
          />
          
          <GuideCard
            title="Как сделать продление вьетнамской визы: пошаговое руководство для беспроблемного процесса"
            description="Полное руководство по процессу визарана, от подготовки документов до получения новой визы. Все этапы и нюансы процедуры."
            link="https://vc.ru/id1556153/632488-kak-sdelat-prodlenie-vetnamskoi-vizy-poshagovoe-rukovodstvo-dlya-besproblemnogo-processa"
            readTime="20 мин"
            date="Февраль 2024"
            views="3.8K"
          />
          
          <GuideCard
            title="Просрочка визы во Вьетнаме: как быстро выйти из ситуации, если вы в Дананге"
            description="Что делать, если вы просрочили визу во Вьетнаме? Пошаговая инструкция по решению проблемы и минимизации последствий."
            link="https://vc.ru/migration/1847288-prosrochka-vizy-vo-vetname-kak-bystro-vyiti-iz-situacii-esli-vy-v-danange"
            readTime="12 мин"
            date="Март 2024"
            views="1.9K"
          />
        </div>
      </div>
    </section>
  );
};

export default Guides;