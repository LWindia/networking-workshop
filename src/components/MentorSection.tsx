import React from 'react';
import { Award, Users, BookOpen, Star } from 'lucide-react';
import { useAdvancedScrollAnimation } from '../hooks/useScrollAnimation';

const MentorSection: React.FC = () => {
  const { isVisible: headerVisible, elementRef: headerRef } = useAdvancedScrollAnimation<HTMLDivElement>('fadeInUp');
  const { isVisible: contentVisible, elementRef: contentRef } = useAdvancedScrollAnimation<HTMLDivElement>('fadeInUp');

  const achievements = [
    { icon: Users, label: "Students Trained", value: "10 Lakh +" },
    { icon: BookOpen, label: "Tools & Technology", value: "153+" },
    { icon: Award, label: "Years of Experience", value: "23+" },
    { icon: Star, label: "Average Rating", value: "4.9/5" }
  ];

  return (
    <section id="mentor" className="py-16 md:py-20 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-10 md:mb-12 transform transition-all duration-1000 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-6 py-3 mb-8">
            <Award className="w-5 h-5 text-emerald-400" />
            <span className="text-emerald-300 font-bold text-lg">WORLD-CLASS MENTOR</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Learn from <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Vimal Daga</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Renowned technology mentor, entrepreneur, and community leader with 23+ years of industry experience
          </p>
        </div>

        {/* Mentor Profile */}
        <div 
          ref={contentRef}
          className={`transform transition-all duration-1000 ${
            contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="grid lg:grid-cols-12 items-center gap-8 md:gap-10 mb-12">
            {/* Left: Image Column */}
            <div className="lg:col-span-5">
              <div className="mx-auto w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden">
                <img
                  src="/images/Vimal Sir's .jpg"
                  alt="Vimal Daga"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Content Column */}
            <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-7">
              <h3 className="text-3xl font-bold text-white mb-3">Vimal Daga</h3>
              <p className="text-white/80 leading-relaxed mb-0">
                Mr. Vimal Daga is a renowned technology mentor, entrepreneur, and community leader with 23+ years of industry experience, known for empowering thousands of learners and professionals across India to master cutting-edge fields like Artificial Intelligence, Cloud Computing, DevOps, and Full-Stack Development. Founder of LinuxWorld Informatics and the driving force behind initiatives such as JAZBAA and world record–setting training programs, he blends deep technical expertise with a passion for innovation and hands-on learning. Through his workshops, bootcamps, and mentorship, Vimal Daga inspires individuals to build real-world solutions, cultivate problem-solving mindsets, and achieve global career success in emerging technologies
              </p>
            </div>
          </div>

          {/* Achievements - Full Width Single Row */}
          <div className="mt-6 md:mt-8">
            <h4 className="text-xl font-semibold text-white text-center mb-4">Achievements & Impact</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:p-5 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-2.5">
                    <achievement.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg md:text-xl font-bold text-white mb-1">{achievement.value}</div>
                  <div className="text-white/60 text-xs md:text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 md:mt-10">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-5 animate-pulse">
              <Star className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-bold">LIMITED SEATS</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">
              Learn from the Best in the Industry
            </h3>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Don't miss this opportunity to learn networking from Vimal Daga himself
            </p>
            
            <a href="https://rzp.io/rzp/epawaY9" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold py-3 px-7 rounded-xl text-base transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
              Join the Workshop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
