
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import GradientButton from '../ui/GradientButton';
import { scrollToElement } from '../../utils/navigation';

const HeroSection: React.FC = () => {
  const handleExploreClick = () => {
    scrollToElement('resources-section');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Sparkles className="text-purple-500" size={20} />
              <span className="text-purple-700 font-medium">Welcome to IgniteHub</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Ignite Your Ideas ~{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Unlock Tools
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Curated resources for young builders, innovators, and creators :)
          </p>
          
          <GradientButton 
            onClick={handleExploreClick}
            size="large"
            icon={ArrowRight}
          >
            Explore Resources
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
