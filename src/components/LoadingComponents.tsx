import React from 'react';
import { Loader2 } from 'lucide-react';

interface SkeletonProps {
  className?: string;
  height?: string;
  width?: string;
  rounded?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  height = 'h-4', 
  width = 'w-full', 
  rounded = true 
}) => {
  return (
    <div 
      className={`skeleton ${height} ${width} ${rounded ? 'rounded' : ''} ${className}`}
    />
  );
};

const LoadingSpinner: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center justify-center">
      <Loader2 className={`${sizeClasses[size]} animate-spin text-violet-500`} />
    </div>
  );
};

const CardSkeleton: React.FC = () => {
  return (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 animate-pulse">
      <div className="flex items-center space-x-4 mb-4">
        <Skeleton height="h-12" width="w-12" className="rounded-xl" />
        <div className="flex-1">
          <Skeleton height="h-4" width="w-3/4" className="mb-2" />
          <Skeleton height="h-3" width="w-1/2" />
        </div>
      </div>
      <Skeleton height="h-3" width="w-full" className="mb-2" />
      <Skeleton height="h-3" width="w-5/6" className="mb-2" />
      <Skeleton height="h-3" width="w-4/6" />
    </div>
  );
};

const HeroSkeleton: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-6xl mx-auto">
        <Skeleton height="h-16" width="w-96" className="mb-6 mx-auto" />
        <Skeleton height="h-20" width="w-80" className="mb-4 mx-auto" />
        <Skeleton height="h-6" width="w-64" className="mb-8 mx-auto" />
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Skeleton height="h-12" width="w-48" className="rounded-xl" />
          <Skeleton height="h-12" width="w-48" className="rounded-xl" />
        </div>
        
        <div className="flex items-center space-x-4 mb-8 justify-center">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} height="h-20" width="w-20" className="rounded-xl" />
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-4">
          {[...Array(3)].map((_, i) => (
            <Skeleton key={i} height="h-8" width="w-32" className="rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-4 mx-auto animate-pulse">
          <img src="/images/LW@4x1.png" alt="LinuxWorld" className="h-16 w-auto object-contain" />
        </div>
        <LoadingSpinner size="lg" />
        <p className="text-white/70 mt-4 font-medium">Loading amazing content...</p>
      </div>
    </div>
  );
};

export { Skeleton, LoadingSpinner, CardSkeleton, HeroSkeleton, PageLoader };
