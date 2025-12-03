import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const Map: React.FC = () => {
  const pickupPoints = [
    {
      id: 1,
      name: 'Ресторан IKRA',
      address: '45 Đ. Ng. Thì Sĩ',
      time: '06:40',
    },
    {
      id: 2,
      name: 'K-Market',
      address: '10A Phạm Văn Đồng',
      time: '06:30-6:40',
    },
  ];

  return (
    <section id="map" className="section">
      <div className="container-custom">
        <h2 className="section-title">Точки отправления в Дананге на Слип Басе</h2>
        
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="rounded-2xl bg-white p-6 shadow-medium">
              <h3 className="mb-6 text-xl font-semibold">Точки сбора</h3>
              
              <div className="space-y-4">
                {pickupPoints.map((point) => (
                  <div key={point.id} className="rounded-xl border border-gray-100 p-4 hover:border-primary-light">
                    <div className="mb-2 flex items-center">
                      <MapPin className="mr-2 text-accent-DEFAULT" size={20} />
                      <h4 className="font-medium">{point.name}</h4>
                    </div>
                    <p className="mb-1 text-sm text-text-secondary">{point.address}</p>
                    <p className="text-sm text-text-secondary">
                      <span className="font-medium">Время отправления:</span> {point.time}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 rounded-lg bg-primary-light bg-opacity-10 p-4 text-sm">
                <p className="flex items-start text-text-secondary">
                  <Navigation className="mr-2 mt-1 shrink-0 text-accent-DEFAULT" size={16} />
                  <span>При бронировании мы отправим вам точные координаты GPS и инструкции по прибытию.</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 h-[400px] overflow-hidden rounded-2xl shadow-medium md:order-2">
            <iframe 
              src="https://www.google.com/maps/d/u/0/embed?mid=1EttSs0-d32XBEKNfYmZVwYdotuTOiEs&ehbc=2E312F&noprof=1"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта точек отправления в Дананге"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;