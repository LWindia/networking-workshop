import React, { Suspense, lazy } from 'react';
import { PageLoader } from './components/LoadingComponents';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';

// Lazy load components for better performance
const HeroSection = lazy(() => import('./components/HeroSection'));
const MentorSection = lazy(() => import('./components/MentorSection'));
const CourseContent = lazy(() => import('./components/CourseContent'));
const WorkshopHighlights = lazy(() => import('./components/WorkshopHighlights'));
const RegistrationSection = lazy(() => import('./components/RegistrationSection'));
const Footer = lazy(() => import('./components/Footer'));
const StickyRegisterButton = lazy(() => import('./components/StickyRegisterButton'));

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      
      {/* Main Content */}
      <Suspense fallback={<PageLoader />}>
        <div id="home">
          <HeroSection />
        </div>
        <div id="course">
          <CourseContent />
        </div>
        <div id="mentor">
          <MentorSection />
        </div>
        <WorkshopHighlights />
        <div id="registration">
          <RegistrationSection />
        </div>
        <Footer />
        <StickyRegisterButton />
      </Suspense>
    </div>
  );
}

export default App;
