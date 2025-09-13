import React from 'react';
import { useScrollProgress } from '../hooks/useScrollAnimation';

const ScrollProgressIndicator: React.FC = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-slate-800/50">
      <div 
        className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressIndicator;
