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
        <h2 className="section-title">Useful guides</h2>
        
        <div className="mx-auto grid max-w-5xl gap-6">
          <GuideCard
            title="Comprehensive Guide to Crossing the Vietnam‑Laos Border (Lao Bao)"
            description="Step-by-step walkthrough for crossing the Lao Bao border: visa processing, passport control, river crossing, and key tips for a smooth experience without hidden fees."
            link="https://vc.ru/migration/1079752-comprehensive-guide-to-crossing-the-vietnam-laos-border-lao-bao"
            readTime="15 min"
            date="March 2024"
            views="2.5K"
          />
          
          <GuideCard
            title="How to Get a Visa in Vietnam If You're Already Inside the Country"
            description="An updated (as of December 2024) breakdown of three ways to extend your visa while in Vietnam: regular exit and re-entry, express visa processing through agents, and self-application (rarely successful)."
            link="https://vc.ru/migration/1684287-how-to-get-a-visa-in-vietnam-if-youre-already-inside-the-country"
            readTime="20 min"
            date="February 2024"
            views="3.8K"
          />
          
          <GuideCard
            title="90-Day Vietnam Visa: Express Processing + Visa Run (Full Guide)"
            description="A complete guide to getting a 90-day Vietnam visa via express processing: available service packages, pricing, required documents, and a clear step-by-step process for a successful visa run."
            link="https://vc.ru/migration/1684306-90-day-vietnam-visa-express-processing-visa-run-full-guide"
            readTime="12 min"
            date="March 2024"
            views="1.9K"
          />
        </div>
      </div>
    </section>
  );
};

export default Guides;