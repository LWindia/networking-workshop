import React, { useState, useEffect } from "react";
import { Timer, Sparkles } from "lucide-react";
import type { TimeLeft } from "../types";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Countdown to start of workshop: Sept 20, 2025 (2-day workshop, 2.5 hours each day)
    const targetDate = new Date("2025-09-20T09:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      }
    }, 1000);

    // Trigger visibility animation
    setTimeout(() => setIsVisible(true), 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-6 px-4">
      <div className="flex items-center space-x-3 text-white">
        <div className="relative">
          <Timer className="w-6 h-6 text-violet-300 animate-pulse" />
          <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-1 -right-1 animate-spin" />
        </div>
        <span className="text-lg font-bold tracking-wide drop-shadow-md bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
          WORKSHOP STARTS IN
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:space-x-4">
        {[ 
          { label: "Days", value: timeLeft.days, color: "from-violet-500 to-purple-500" },
          { label: "Hours", value: timeLeft.hours, color: "from-purple-500 to-indigo-500" },
          { label: "Minutes", value: timeLeft.minutes, color: "from-indigo-500 to-blue-500" },
          { label: "Seconds", value: timeLeft.seconds, color: "from-blue-500 to-cyan-500" }
        ].map((unit, index) => (
          <div key={unit.label} className="text-center group">
            <div className={`bg-gradient-to-br ${unit.color} backdrop-blur-md border border-white/30 rounded-2xl p-4 sm:p-6 min-w-[84px] sm:min-w-[100px] shadow-2xl sm:hover:shadow-3xl transition-all duration-500 sm:hover:scale-110 sm:hover:-translate-y-2 relative overflow-hidden`}>
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 drop-shadow-lg animate-count-up">
                  {unit.value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-white/90 font-bold tracking-wider uppercase drop-shadow-sm">
                  {unit.label}
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Progress bar */}
      <div className="w-full max-w-md">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 rounded-full animate-pulse"></div>
        </div>
        <p className="text-center text-white/70 text-sm mt-2 font-medium">
          Don't miss this exclusive opportunity!
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
