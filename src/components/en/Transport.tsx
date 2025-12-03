import React from 'react';
import sleepbus1 from '../../assets/sleepbus1.jpg';
import sleepbus2 from '../../assets/sleepbus2.jpg';
import car from '../../assets/car.jpg';
import vipCar from '../../assets/vip_car.jpg';

const Transport: React.FC = () => {
  return (
    <section id="transport" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Our Transport</h2>
        
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Sleep Bus */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-center">Sleep Bus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src={sleepbus1}
                  alt="Sleep bus exterior" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src={sleepbus2}
                  alt="Sleep bus interior" 
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Car */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-center">Car</h3>
            <div className="overflow-hidden rounded-2xl mx-auto max-w-2xl">
              <img 
                src={car}
                alt="Comfortable car" 
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* VIP Car */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-center">VIP Car</h3>
            <div className="overflow-hidden rounded-2xl mx-auto max-w-2xl">
              <img 
                src={vipCar}
                alt="VIP car" 
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transport;