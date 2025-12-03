import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <h2 className="section-title">Свяжитесь с нами</h2>

        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl bg-gradient-primary p-8 text-white">
            <h3 className="mb-6 text-2xl font-semibold text-center">Контактная информация</h3>

            <div className="mb-8 space-y-6">
              <div className="flex items-start space-x-4">
                <MessageCircle size={24} className="mt-1" />
                <div>
                  <h4 className="text-lg font-medium">Telegram</h4>
                  <a
                    href="https://t.me/learnx1000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white underline hover:text-gray-100"
                  >
                    @learnx1000
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone size={24} className="mt-1" />
                <div>
                  <h4 className="text-lg font-medium">Телефон</h4>
                  <a
                    href="tel:+84927947684"
                    className="text-white underline hover:text-gray-100"
                  >
                    +84 (927) 947-684
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-white bg-opacity-20 p-6 backdrop-blur-sm">
              <h4 className="mb-4 text-xl font-medium text-center">Время работы</h4>
              <ul className="space-y-2">
                <li className="flex justify-center gap-x-2">
                  <span>Ежедневно:</span>
                  <span>9:00 - 22:00</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-center">* Все указано по вьетнамскому времени (GMT+7)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
