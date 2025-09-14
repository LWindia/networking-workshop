import React, { useState, useEffect } from 'react';
import { ArrowUp, CreditCard, X, Zap, Users, Clock } from 'lucide-react';

const StickyRegisterButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when user scrolls down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToRegistration = () => {
    const element = document.getElementById('registration');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsExpanded(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsExpanded(false)}
          aria-hidden="true"
        />
      )}

      {/* Sticky Button Container */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Expanded Panel */}
        {isExpanded && (
          <div className="absolute bottom-20 right-0 w-80 bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">Quick Registration</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="w-8 h-8 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Close registration panel"
              >
                <X className="w-4 h-4 text-slate-600" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Limited Seats</div>
                  <div className="text-sm text-slate-500">Only 50 spots available</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Training Schedule</div>
                  <div className="text-sm text-slate-500">Sept 20–21 • 3 hours each day</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Pricing</div>
                  <div className="text-sm text-slate-500">₹699 + taxes (Cut price ₹4,999)</div>
                </div>
              </div>
            </div>
            <a
              href="https://rzp.io/rzp/epawaY9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25 flex items-center justify-center space-x-2"
            >
              <CreditCard className="w-5 h-5" />
              <span>Register Now - ₹699 + taxes</span>
            </a>
          </div>
        )}

        {/* Main Floating Button */}
        <div className="flex flex-col space-y-3">
          {/* Scroll to Top Button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-slate-800/90 hover:bg-slate-700/90 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:text-violet-300 transition-colors duration-300" />
          </button>

          {/* Registration Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-14 h-14 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50 group animate-pulse"
            aria-label="Open registration panel"
          >
            <CreditCard className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyRegisterButton;
