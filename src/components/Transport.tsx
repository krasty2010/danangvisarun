import React from 'react';
import sleepbus1 from '../assets/sleepbus1.jpg';
import sleepbus2 from '../assets/sleepbus2.jpg';
import car from '../assets/car.jpg';
import vipCar from '../assets/vip_car.jpg';

const Transport: React.FC = () => {
  return (
    <section id="transport" className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Наш транспорт</h2>
        
        <div className="mx-auto max-w-6xl space-y-8">
        {/* Слип бас */}
            <div>
              <h3 className="mb-6 text-2xl font-semibold text-center">Слип бас</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                <div className="overflow-hidden rounded-2xl">
                  <img 
                    src={sleepbus1}
                    alt="Слип бас снаружи" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <img 
                    src={sleepbus2}
                    alt="Слип бас внутри" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
          </div>


          {/* Авто */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-center">Авто</h3>
            <div className="overflow-hidden rounded-2xl mx-auto max-w-2xl">
              <img 
                src={car}
                alt="Комфортабельный автомобиль" 
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* VIP-Авто */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold text-center">VIP-Авто</h3>
            <div className="overflow-hidden rounded-2xl mx-auto max-w-2xl">
              <img 
                src={vipCar}
                alt="VIP автомобиль" 
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
