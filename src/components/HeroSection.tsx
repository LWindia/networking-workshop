import React from "react";
import { Play, ArrowRight, Calendar, Users, Menu, X } from "lucide-react";
import CountdownTimer from "./CountdownTimer";
import { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="relative h-screen w-full flex flex-col overflow-hidden"
      style={{
        backgroundImage: "url(/images/networking.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Enhanced overlay with better depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/75 to-slate-900/85"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20"></div>

      {/* Enhanced Sticky Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <a href="#home" className="flex items-center space-x-3">
                <img src="/images/LW@4x1.png" alt="LinuxWorld" className="h-8 md:h-9 w-auto object-contain" />
                <span className="text-white font-bold text-lg font-display">LinuxWorld</span>
              </a>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:text-violet-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#course" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:text-violet-300 relative group">
                Course
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#mentor" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:text-violet-300 relative group">
                Mentor
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#benefits" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:text-violet-300 relative group">
                Benefits
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#registration" className="text-white/80 hover:text-white font-medium transition-all duration-300 hover:text-violet-300 relative group">
                Register
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Desktop CTA Button */}
            <a href="https://rzp.io/rzp/epawaY9" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/25 relative overflow-hidden group">
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-4 border-t border-white/10">
              <a href="#home" className="block text-white/80 hover:text-white font-medium transition-colors duration-300 py-2">Home</a>
              <a href="#course" className="block text-white/80 hover:text-white font-medium transition-colors duration-300 py-2">Course</a>
              <a href="#mentor" className="block text-white/80 hover:text-white font-medium transition-colors duration-300 py-2">Mentor</a>
              <a href="#benefits" className="block text-white/80 hover:text-white font-medium transition-colors duration-300 py-2">Benefits</a>
              <a href="#registration" className="block text-white/80 hover:text-white font-medium transition-colors duration-300 py-2">Register</a>
              <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Container with enhanced animations */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 pt-16">
        <div className="text-center w-full max-w-7xl mx-auto">
          {/* Enhanced Main Headline with better typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.85] tracking-tight drop-shadow-2xl px-4 animate-fade-in-up">
            <span className="block font-display">Master</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-purple-300 to-indigo-300 drop-shadow-lg whitespace-nowrap font-display animate-gradient-x">
              Networking
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 drop-shadow-xl font-display">
              over 2 Days
            </span>
          </h1>

          {/* Enhanced Subtitle with better contrast */}
          <p className="text-xl md:text-2xl text-white mb-6 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg px-4 animate-fade-in-up animation-delay-200">
            Live intensive workshop with <span className="text-violet-200 font-semibold bg-violet-900/40 px-3 py-1.5 rounded-lg border border-violet-400/30 backdrop-blur-sm">Vimal Daga</span>
          </p>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-md px-4 animate-fade-in-up animation-delay-400">
            Master core networking concepts, IP addressing, NAT, and real-world troubleshooting 
            in a single power-packed session
          </p>

          {/* Enhanced CTA Buttons with micro-interactions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 px-4 animate-fade-in-up animation-delay-600">
            <a href="https://rzp.io/rzp/epawaY9" target="_blank" rel="noopener noreferrer" className="group relative bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/50 min-w-[220px] border border-violet-400/30 overflow-hidden">
              <div className="flex items-center justify-center space-x-3 relative z-10">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Register Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a href="#course" className="group bg-white/25 backdrop-blur-md border border-white/40 text-white font-semibold py-4 px-8 rounded-xl text-lg hover:bg-white/35 transition-all duration-300 min-w-[220px] shadow-lg hover:shadow-xl hover:scale-105">
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>View Details</span>
              </div>
            </a>
          </div>

          {/* Enhanced Countdown Timer */}
          <div className="mb-10 px-4 animate-fade-in-up animation-delay-800">
            <CountdownTimer />
          </div>

          {/* Enhanced Workshop Info with better visibility */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-white px-4 animate-fade-in-up animation-delay-1000">
            <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Calendar className="w-5 h-5 text-violet-300" />
              <span className="text-sm font-semibold">Sept 20–21 • 2.5 hours each day</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/15 backdrop-blur-sm rounded-full px-5 py-3 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <Users className="w-5 h-5 text-indigo-300" />
              <span className="text-sm font-semibold">Limited Seats</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
