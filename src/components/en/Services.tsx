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
          Popular
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
          Book Now
        </a>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <h2 className="section-title">Our Services & Prices</h2>
        
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            title="Sleep Bus"
            price="800k VND"
            icon={<Bus size={32} className="text-accent-DEFAULT" />}
            features={[
              "Comfortable sleeping bus",
              "Wi-Fi and air conditioning",
              "Light Russian breakfast",
              "4-5 hours one way",
              "Scheduled departures",
              "Border assistance"
            ]}
          />
          
          <ServiceCard
            title="Private Car"
            price="720-900k VND"
            icon={<Car size={32} className="text-accent-DEFAULT" />}
            features={[
              "Comfortable and spacious 7-seat SUV",
              "Individual schedule",
              "Air conditioning",
              "Fastest option",
              "4 hours one way",
              "Personal manager for support"
            ]}
            highlighted={true}
          />
          
          <ServiceCard
            title="Combo 'Transport + Visa'"
            price="3720k - 3900k VND"
            icon={<CreditCard size={32} className="text-accent-DEFAULT" />}
            features={[
              "Round-trip transport",
              "Premium 24/7 support",
              "Personal guide",
              "Expedited processing",
              "Visa guarantee"
            ]}
          />
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-xl bg-white p-8 shadow-medium">
          <h3 className="mb-6 text-center text-2xl font-semibold">Express Visa (90 days)</h3>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h4 className="mb-2 text-xl font-medium">3 hours (same-day visa run)</h4>
              <p className="text-2xl font-bold text-accent-dark">$120</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h4 className="mb-2 text-xl font-medium">1 day</h4>
              <p className="text-2xl font-bold text-accent-dark">$110</p>
            </div>
            <div className="rounded-lg bg-gray-50 p-4 text-center">
              <h4 className="mb-2 text-xl font-medium">2 days</h4>
              <p className="text-2xl font-bold text-accent-dark">$100</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://t.me/learnx1000" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary inline-block"
            >
              Inquire and Book
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;