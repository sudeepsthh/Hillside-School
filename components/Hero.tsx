import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { HERO_STATS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Hillside School Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-900/95 via-royal-800/85 to-slate-900/50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h2 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">
            Pokhara-12, Kaski
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Welcome to <br />
            Hillside <span className="text-gold-500">English School</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-light leading-relaxed border-l-4 border-gold-500 pl-6">
            "Empowering minds, inspiring futures"
            <br className="hidden md:block" /> committed to academic excellence and holistic development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-white text-royal-900 px-8 py-3 rounded-sm font-bold text-lg hover:bg-gray-100 transition-all flex items-center justify-center">
              Admissions Open
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border border-white/30 hover:border-white text-white px-8 py-3 rounded-sm font-medium text-lg hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm">
              <BookOpen size={20} className="mr-2" />
              Academic Programs
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            {HERO_STATS.map((stat, index) => (
                <div key={index} className="text-white">
                    <div className="text-3xl md:text-4xl font-serif font-bold text-gold-500 mb-1">{stat.value}</div>
                    <div className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wide">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;