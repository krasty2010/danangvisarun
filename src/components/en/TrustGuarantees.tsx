import React from 'react';
import { ShieldCheck, Clock, CreditCard } from 'lucide-react';

const TrustGuarantees: React.FC = () => {
  return (
    <section className="bg-text-primary py-16 text-white">
      <div className="container-custom">
        <h2 className="mb-12 text-center font-montserrat text-3xl font-bold text-white md:text-4xl">
          Our Guarantees
        </h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl bg-white bg-opacity-5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-DEFAULT">
              <ShieldCheck size={32} />
            </div>
            <h3 className="mb-3 text-xl font-semibold">100% Guarantee (Express E-visa Service)</h3>
            <p className="text-gray-200">
              We guarantee a full refund if your trip is cancelled due to our fault or in case of visa denial.
            </p>
          </div>
          
          <div className="rounded-xl bg-white bg-opacity-5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-DEFAULT">
              <Clock size={32} />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Accuracy and Punctuality</h3>
            <p className="text-gray-200">
              Our buses always depart on time, and the border process is maximally optimized to save your time.
            </p>
          </div>
          
          <div className="rounded-xl bg-white bg-opacity-5 p-6 backdrop-blur-sm">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent-DEFAULT">
              <CreditCard size={32} />
            </div>
            <h3 className="mb-3 text-xl font-semibold">Transparent Pricing</h3>
            <p className="text-gray-200">
              No hidden fees or additional charges. You pay only the amount specified when booking.
            </p>
          </div>
        </div>
        
        <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-white bg-opacity-10 p-6 text-center backdrop-blur-sm">
          <p className="text-lg">
            More than 4,200 clients have already trusted us. Join them and get your visa without stress and hassle!
          </p>
          <a 
            href="https://t.me/learnx1000" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn mt-6 bg-white px-8 py-3 font-semibold text-text-primary hover:bg-gray-100"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustGuarantees;