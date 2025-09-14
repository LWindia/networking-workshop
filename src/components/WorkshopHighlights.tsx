import React from 'react';
import { Clock, BookOpen, Users, Award, Zap, Target } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import type { WorkshopHighlight } from '../types';

const WorkshopHighlights: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const highlights: WorkshopHighlight[] = [
    {
      id: 'intensive',
      title: '2-Day Intensive',
      description: 'Focused learning: 3 hours each day covering essential networking concepts',
      icon: 'clock'
    },
    {
      id: 'hands-on',
      title: 'Hands-On Learning',
      description: 'Real-world scenarios and practical exercises to build confidence',
      icon: 'book'
    },
    {
      id: 'expert',
      title: 'Expert Mentorship',
      description: 'Direct access to world-class guidance from industry leaders',
      icon: 'users'
    },
    {
      id: 'certificate',
      title: 'Official Certificate',
      description: 'LinuxWorld certificate to validate your participation and skills',
      icon: 'award'
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'clock': return Clock;
      case 'book': return BookOpen;
      case 'users': return Users;
      case 'award': return Award;
      default: return Clock;
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={elementRef}
          className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium tracking-wide">TRAINING HIGHLIGHTS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              What Makes This <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Special</span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
              Experience learning like never before with our unique approach to networking education
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => {
              const IconComponent = getIcon(highlight.icon);
              
              return (
                <div
                  key={highlight.id}
                  className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-500 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-emerald-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-300 transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  {/* Subtle hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-2xl transition-all duration-300"></div>
                </div>
              );
            })}
          </div>

          {/* Bottom Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Target className="w-6 h-6 text-emerald-400" />
                <span className="text-emerald-300 font-medium">Results-Driven Approach</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Transform Your Understanding in Just Two Sessions
              </h3>
              <p className="text-white/70 mb-6">
                Our intensive format ensures maximum knowledge retention and practical application
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/20">
                  Interactive Sessions
                </span>
                <span className="bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/20">
                  Real-World Scenarios
                </span>
                <span className="bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/20">
                  Immediate Application
                </span>
                <span className="bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/20">
                  Expert Guidance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopHighlights;
