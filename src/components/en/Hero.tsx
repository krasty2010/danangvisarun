import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-light via-primary-dark to-primary-light bg-[length:200%_200%] animate-[pulse_6s_ease-in-out_infinite] opacity-20"></div>

      <div className="absolute -right-20 -top-20 -z-10 h-96 w-96 rounded-full bg-primary-light opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 -z-10 h-96 w-96 rounded-full bg-accent-DEFAULT opacity-30 blur-3xl"></div>
      
      <div className="container-custom flex min-h-[calc(100vh-80px)] flex-col items-center justify-center py-16 text-center">
        <h1 className="mb-6 font-bold leading-tight tracking-tight">
          Vietnam Visa Run — <br className="hidden sm:block" />
          <span className="gradient-text">Easy, Fast, Guaranteed</span>
        </h1>
        
        <p className="mb-8 max-w-2xl text-lg text-text-secondary">
          Trusted by 4200+ clients. 45/90 day extension — from 3 hours
        </p>
        
        <a 
          href="https://t.me/learnx1000" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary mb-12 flex items-center space-x-2 text-lg"
        >
          <span>Book via Telegram</span>
          <ArrowRight size={20} />
        </a>
        
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="card flex flex-col items-center p-8 text-center">
            <div className="mb-4 rounded-full bg-primary-light bg-opacity-20 p-4">
              <img 
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/caradvice/private/zuhnuu7fvdxgyurs0uav" 
              alt="Comfort" 
              className="h-16 w-16 rounded-full object-cover object-[80%_center]"
              />
            </div>
            <h3 className="mb-2 text-xl font-medium">Comfort</h3>
            <p className="text-text-secondary">Modern air-conditioned buses</p>
          </div>
          
          <div className="card flex flex-col items-center p-8 text-center">
            <div className="mb-4 rounded-full bg-primary-light bg-opacity-20 p-4">
              <img 
                src="https://cs14.pikabu.ru/post_img/big/2023/02/22/6/1677054163114860712.jpg" 
                alt="Speed" 
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-medium">Speed</h3>
            <p className="text-text-secondary">Streamlined visa run process at every step</p>
          </div>
          
          <div className="card flex flex-col items-center p-8 text-center">
            <div className="mb-4 rounded-full bg-primary-light bg-opacity-20 p-4">
              <img 
                src="https://png.pngtree.com/thumb_back/fw800/background/20221128/pngtree-smiling-male-support-operator-wearing-headset-and-assisting-customers-photo-image_42525746.jpg" 
                alt="Support" 
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-medium">Support</h3>
            <p className="text-text-secondary">Manager who will support you at every stage of your visa extension</p>
          </div>
          
          <div className="card flex flex-col items-center p-8 text-center">
            <div className="mb-4 rounded-full bg-primary-light bg-opacity-20 p-4">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3565/3565871.png" 
                alt="Guarantee" 
                className="h-16 w-16 rounded-full object-cover"
              />
            </div>
            <h3 className="mb-2 text-xl font-medium">Guarantee</h3>
            <p className="text-text-secondary">100% money back for fast 90-day visa service in case of negative result</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;