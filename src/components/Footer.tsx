import React from 'react';
import { Bus, Mail, MessageCircle, Instagram, Facebook, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-text-primary pt-16 text-white">
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center">
              <Bus className="mr-2 text-primary-light" size={28} />
              <span className="text-2xl font-bold text-white">Best Border Bus</span>
            </div>
            <p className="mb-6 text-gray-300">
              Быстрое и комфортное оформление визарана во Вьетнаме. Мы делаем процесс легким и приятным для наших клиентов.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1NzybR2Yh2/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-opacity-20"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/vietnam_samurai/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-opacity-20"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://t.me/learnx1000" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-10 hover:bg-opacity-20"
                aria-label="Telegram"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-semibold">Быстрые ссылки</h3>
            <ul className="space-y-3">
              <li>
                <a href="#process" className="text-gray-300 hover:text-white">Процесс</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Услуги и цены</a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-300 hover:text-white">Отзывы</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white">Контакты</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-semibold">Услуги</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Визаран на автобусе</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Визаран на машине</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Комбо-пакет</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Экспресс-визаран</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">VIP-Авто</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white">Групповые скидки</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-xl font-semibold">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MessageCircle className="mr-3 shrink-0 text-primary-light" size={20} />
                <a 
                  href="https://t.me/learnx1000" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white"
                >
                  @learnx1000
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-3 shrink-0 text-primary-light" size={20} />
                <a 
                  href="tel:+84927947684" 
                  className="text-gray-300 hover:text-white"
                >
                  +84 (927) 947-684
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 shrink-0 text-primary-light" size={20} />
                <a 
                  href="mailto:info@bestborderbus.com" 
                  className="text-gray-300 hover:text-white"
                >
                  info@bestborderbus.com
                </a>
              </li>
            </ul>
            
            <div className="mt-6 rounded-lg bg-white bg-opacity-10 p-4">
              <p className="text-sm text-gray-300">
                Мы работаем ежедневно<br />
                с 9:00 до 22:00 (GMT+7)
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 py-8 text-center text-sm text-gray-400">
          <p>© {currentYear} Best Border Bus. Все права защищены.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-300">Политика конфиденциальности</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;