import React from 'react';
import { GraduationCap, Book, Users, Pencil } from 'lucide-react';

const AcademicSection: React.FC = () => {
  return (
    <section id="academics" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-royal-800 font-bold uppercase tracking-widest text-sm mb-2">Our Courses</h2>
           <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
             Academic Programs
           </h2>
           <p className="text-lg text-gray-600 leading-relaxed">
             From Montessori to Higher Secondary level, we offer a complete educational pathway focusing on academic and practical skills.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {/* Program 1 */}
           <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition-all border-t-4 border-royal-800">
              <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center mb-4 text-royal-800">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Pre-Primary</h3>
              <p className="text-sm text-gray-500 font-bold uppercase mb-3 tracking-wide">Playgroup - KG</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                A child-friendly Montessori environment fostering curiosity and social skills through play-based learning.
              </p>
           </div>

           {/* Program 2 */}
           <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition-all border-t-4 border-royal-800">
              <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center mb-4 text-royal-800">
                <Pencil size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Basic Level</h3>
              <p className="text-sm text-gray-500 font-bold uppercase mb-3 tracking-wide">Grades 1 - 8</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Strong foundation in core subjects including Mathematics, Science, English, and Nepali with computer education.
              </p>
           </div>

           {/* Program 3 */}
           <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition-all border-t-4 border-royal-800">
              <div className="w-12 h-12 bg-royal-100 rounded-full flex items-center justify-center mb-4 text-royal-800">
                <Book size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Secondary Level</h3>
              <p className="text-sm text-gray-500 font-bold uppercase mb-3 tracking-wide">Grades 9 - 10 (SEE)</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Focused preparation for the Secondary Education Examination (SEE) with extra coaching and lab works.
              </p>
           </div>

           {/* Program 4 */}
           <div className="bg-white p-6 rounded-sm shadow-sm hover:shadow-lg transition-all border-t-4 border-gold-500 bg-gradient-to-b from-white to-stone-50">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mb-4 text-gold-600">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Higher Secondary</h3>
              <p className="text-sm text-gray-500 font-bold uppercase mb-3 tracking-wide">+2 Science & Mgmt</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Affiliated with NEB. Streams include Science (Physics/Bio) and Management (Computer/Hotel Mgmt).
              </p>
              <a href="#" className="text-royal-800 text-xs font-bold uppercase hover:underline">View Streams &rarr;</a>
           </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicSection;