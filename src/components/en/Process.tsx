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
        <h2 className="section-title">How It Works</h2>
        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2 lg:grid-cols-3">
          <ProcessStep
            title="Contact Us"
            description="Message us on Telegram to book your visa run"
            step={1}
          />
          
          <ProcessStep
            title="Choose Date"
            description="Select a convenient date and departure time"
            step={2}
          />
          
          <ProcessStep
            title="Get Instructions"
            description="We'll send you detailed preparation instructions"
            step={3}
          />
          
          <ProcessStep
            title="Pickup"
            description="Bus will pick you up at the designated location in Da Nang"
            step={4}
          />
          
          <ProcessStep
            title="Visa Extension"
            description="Follow instructions through all stages and get your visa"
            step={5}
          />
          
          <ProcessStep
            title="Done!"
            description="Get your new visa and return to Da Nang the same day"
            step={6}
          />
        </div>
      </div>
    </section>
  );
};

export default Process;