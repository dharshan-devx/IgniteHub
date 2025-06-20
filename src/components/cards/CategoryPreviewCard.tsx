
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  resources: any[];
}

interface CategoryPreviewCardProps {
  category: Category;
  animationDelay?: number;
}

const CategoryPreviewCard: React.FC<CategoryPreviewCardProps> = ({ category, animationDelay = 0 }) => {
  return (
    <Link
      to={`/resources/${category.id}`}
      className="group block h-full"
      style={{ animationDelay: `${animationDelay * 0.1}s` }}
    >
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-purple-200 transform hover:scale-105 h-full flex flex-col min-h-[400px]">
        <div className={`w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
          <span className="text-3xl">{category.icon}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors flex-shrink-0">
          {category.title}
        </h3>
        
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {category.description}
        </p>
        
        <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 flex-shrink-0">
          <span>Explore {category.resources.length} resources</span>
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
        </div>
      </div>
    </Link>
  );
};

export default CategoryPreviewCard;
