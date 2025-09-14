import React from 'react';
import { CreditCard, Clock, Shield, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const RegistrationSection: React.FC = () => {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section id="registration" className="py-24 bg-gradient-to-b from-slate-950 to-indigo-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div 
          ref={elementRef}
          className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-6 py-3 mb-8 animate-pulse">
              <Zap className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-bold text-lg"> LIMITED SEATS AVAILABLE</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">Spot</span> Today
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12">
              Don't miss this opportunity to master networking with industry experts
            </p>
          </div>

          {/* External Quick Registration CTA — removed per request */}

          {/* No Form: Simple Info Card with CTA */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center">
            {/* Chips Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 text-white/90">
                <Clock className="w-5 h-5 text-violet-300" />
                <span>Sept 20–21 • 3 hours each day</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 text-white/90">
                <Clock className="w-5 h-5 text-violet-300" />
                <span>Total Duration: 6 hours</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/10 text-white/90">
                <Shield className="w-5 h-5 text-violet-300" />
                <span>Secure payment via Razorpay</span>
              </div>
            </div>

            {/* Pricing */}
            <div className="mb-8">
              <div className="text-white/60 text-lg mb-3">Training Fee</div>
              <div className="flex items-end justify-center gap-3 mb-3">
                <span className="text-white/40 text-2xl line-through">₹4,999</span>
                <span className="text-5xl md:text-6xl font-black text-white">₹699</span>
                <span className="text-white/70 mb-1">+ taxes</span>
              </div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-400/20 font-semibold">Special Pricing</div>
            </div>

            {/* Primary CTA */}
            <a
              href="https://rzp.io/rzp/epawaY9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold py-4 px-10 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
            >
              <CreditCard className="w-5 h-5" />
              <span>Proceed to Payment - ₹699 + taxes</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
