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
            {required ? 'Required' : 'Recommended'}
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
        <h2 className="section-title text-center">What to Bring</h2>

        <div className="flex flex-col">
          <ChecklistItem
            icon={<Passport className="text-accent-DEFAULT" size={24} />}
            title="Passport"
            description="Original passport (valid for more than 6 months)"
            required={true}
          />
          <ChecklistItem
            icon={<Smartphone className="text-accent-DEFAULT" size={24} />}
            title="Phone"
            description="With Telegram access and local SIM card"
            required={true}
          />
          <ChecklistItem
            icon={<DollarSign className="text-accent-DEFAULT" size={24} />}
            title="Cash"
            description="140k VND - border fee payment. Not mandatory, but not paying can cause serious problems at the border. + Personal expenses for food."
            required={true}
          />
          <ChecklistItem
            icon={<BatteryFull className="text-accent-DEFAULT" size={24} />}
            title="Charger"
            description="For phone and other devices"
            required={false}
          />
          <ChecklistItem
            icon={<Water className="text-accent-DEFAULT" size={24} />}
            title="Water and Snacks"
            description="For the long journey or waiting"
            required={false}
          />
        </div>

        <div className="mt-8 rounded-xl bg-primary-light bg-opacity-10 p-6">
          <h3 className="mb-4 text-xl font-semibold">Important Notes:</h3>
          <ul className="list-inside list-disc space-y-2 text-text-secondary">
            <li>Make sure your passport is valid for at least 6 months from entry date.</li>
            <li>Prepare the exact amount for visa fees.</li>
            <li>Don't bring prohibited or valuable items.</li>
            <li>Dress comfortably, the trip may take several hours.</li>
            <li>If you have questions about the process — message our manager.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Checklist;