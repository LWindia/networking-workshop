import React from 'react';
import { TrendingUp, Lightbulb, Target, Zap, BarChart3, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const WhyJoinSection: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  const benefits = [
    {
      icon: Target,
      title: 'Accelerated Learning',
      description: 'Master networking fundamentals in just one intensive day with our proven methodology',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: TrendingUp,
      title: 'Career Advancement',
      description: 'Boost your professional profile with in-demand networking skills valued by employers',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10'
    },
    {
      icon: Lightbulb,
      title: 'Real-World Application',
      description: 'Learn practical troubleshooting techniques you can apply immediately in your work',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10'
    },
    {
      icon: Zap,
      title: 'Expert Mentorship',
      description: 'Get direct access to industry insights from a world-record holding networking expert',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-violet-500/10'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={elementRef}
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <BarChart3 className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 text-sm font-medium tracking-wide">TRANSFORM YOUR CAREER</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Join</span> This Workshop?
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Take your networking knowledge and career to the next level
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              
              return (
                <div 
                  key={index}
                  className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105 ${
                    isVisible ? `animate-slide-up delay-${index * 150}` : ''
                  }`}
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 ${benefit.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-white/60 text-lg leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Success Statistics */}
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12">
            <div className="text-center mb-12">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-4">
                Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">10 Lakhs+</span> Successful Learners
              </h3>
              <p className="text-white/60 text-lg">Trusted by learners worldwide</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[ 
                { number: '10 Lakhs+', label: 'Students Trained', color: 'text-blue-400' },
                { number: '98%', label: 'Success Rate', color: 'text-emerald-400' },
                { number: '200+', label: 'Companies Served', color: 'text-violet-400' },
                { number: '4.9/5', label: 'Average Rating', color: 'text-amber-400' }
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                  <div className={`text-4xl font-black ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-white/60 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;
