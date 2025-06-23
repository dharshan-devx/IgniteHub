import React from 'react';
import { Search, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from './ui/select';

interface SearchFilters {
  category: string;
  difficulty: string;
  type: string;
  isFree: string;
}

interface AdvancedSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  filters: SearchFilters;
  onFilterChange: (key: keyof SearchFilters, value: string) => void;
  onClearAll: () => void;
  placeholder?: string;
}

const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
  searchTerm,
  onSearchChange,
  filters,
  onFilterChange,
  onClearAll,
  placeholder = 'Search resources...'
}) => {
  const hasActiveFilters =
    searchTerm || Object.values(filters).some(f => f && f !== 'all');

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          placeholder={placeholder}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Difficulty
          </label>
          <Select
            value={filters.difficulty}
            onValueChange={value => onFilterChange('difficulty', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any difficulty" />
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-lg z-50">
              <SelectItem value="all">Any difficulty</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type
          </label>
          <Select
            value={filters.type}
            onValueChange={value => onFilterChange('type', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-lg z-50">
              <SelectItem value="all">Any type</SelectItem>
              <SelectItem value="tool">Tool</SelectItem>
              <SelectItem value="platform">Platform</SelectItem>
              <SelectItem value="course">Course</SelectItem>
              <SelectItem value="app">App</SelectItem>
              <SelectItem value="software">Software</SelectItem>
              <SelectItem value="service">Service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Price
          </label>
          <Select
            value={filters.isFree}
            onValueChange={value => onFilterChange('isFree', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any price" />
            </SelectTrigger>
            <SelectContent className="bg-white border shadow-lg z-50">
              <SelectItem value="all">Any price</SelectItem>
              <SelectItem value="free">Free</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          {hasActiveFilters && (
            <button
              onClick={onClearAll}
              className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors flex items-center justify-center"
            >
              <X size={16} className="mr-1" />
              Clear All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearch;
