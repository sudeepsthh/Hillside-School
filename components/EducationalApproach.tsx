import React from 'react';
import { BookOpen, Users, Monitor, Trophy } from 'lucide-react';

const EducationalApproach: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-royal-800" />,
      title: "Curriculum & Methodology",
      description: "We follow the National Curriculum Framework enriched with international practices. The medium of instruction is English, emphasizing both theoretical knowledge and practical application."
    },
    {
      icon: <Users className="w-8 h-8 text-royal-800" />,
      title: "Student Support",
      description: "Our dedicated faculty provides individual attention. We offer remedial classes for students needing extra support and counseling services for career guidance."
    },
    {
      icon: <Monitor className="w-8 h-8 text-royal-800" />,
      title: "Modern Facilities",
      description: "The school is equipped with science laboratories, computer labs with high-speed internet, a well-stocked library, and audio-visual rooms for interactive learning."
    },
    {
      icon: <Trophy className="w-8 h-8 text-royal-800" />,
      title: "ECA & CCA",
      description: "Education goes beyond books. We organize regular sports weeks, cultural programs, debate competitions, and field trips to ensure holistic development."
    }
  ];

  return (
    <section id="approach" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-royal-800 font-bold uppercase tracking-widest text-sm mb-3">Why Choose Us</h2>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
            Facilities & Features
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex p-6 bg-stone-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 mr-6">
                <div className="p-4 bg-white rounded-full shadow-sm text-royal-800">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalApproach;