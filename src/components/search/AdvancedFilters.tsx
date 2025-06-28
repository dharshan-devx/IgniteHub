import React from 'react';
import { Calendar, MapPin, Star, Tag, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';

interface AdvancedFiltersProps {
  filters: {
    tags: string[];
    dateRange: { start: string; end: string };
    location: string;
    minRating: number;
    difficulty: string;
    type: string;
    isFree: string;
  };
  onFilterChange: (key: string, value: any) => void;
  onClearFilters: () => void;
  availableTags: string[];
}

const AdvancedFilters: React.FC<AdvancedFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  availableTags
}) => {
  const handleTagToggle = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    onFilterChange('tags', newTags);
  };

  const hasActiveFilters = 
    filters.tags.length > 0 ||
    filters.dateRange.start ||
    filters.dateRange.end ||
    filters.location ||
    filters.minRating > 0 ||
    filters.difficulty !== 'all' ||
    filters.type !== 'all' ||
    filters.isFree !== 'all';

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Advanced Filters</h3>
        {hasActiveFilters && (
          <Button variant="outline" size="sm" onClick={onClearFilters}>
            <X size={16} className="mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tags Filter */}
        <div>
          <Label className="flex items-center mb-2">
            <Tag size={16} className="mr-1" />
            Tags
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full justify-start">
                {filters.tags.length > 0 
                  ? `${filters.tags.length} tags selected`
                  : 'Select tags'
                }
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                {availableTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={`px-3 py-2 text-sm rounded-md transition-colors ${
                      filters.tags.includes(tag)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Date Range Filter */}
        <div>
          <Label className="flex items-center mb-2">
            <Calendar size={16} className="mr-1" />
            Date Range
          </Label>
          <div className="space-y-2">
            <Input
              type="date"
              value={filters.dateRange.start}
              onChange={(e) => onFilterChange('dateRange', { ...filters.dateRange, start: e.target.value })}
              placeholder="Start date"
            />
            <Input
              type="date"
              value={filters.dateRange.end}
              onChange={(e) => onFilterChange('dateRange', { ...filters.dateRange, end: e.target.value })}
              placeholder="End date"
            />
          </div>
        </div>

        {/* Location Filter */}
        <div>
          <Label className="flex items-center mb-2">
            <MapPin size={16} className="mr-1" />
            Location
          </Label>
          <Input
            value={filters.location}
            onChange={(e) => onFilterChange('location', e.target.value)}
            placeholder="Enter location"
          />
        </div>

        {/* Rating Filter */}
        <div>
          <Label className="flex items-center mb-2">
            <Star size={16} className="mr-1" />
            Minimum Rating
          </Label>
          <Select 
            value={filters.minRating.toString()} 
            onValueChange={(value) => onFilterChange('minRating', parseInt(value))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">Any rating</SelectItem>
              <SelectItem value="1">1+ stars</SelectItem>
              <SelectItem value="2">2+ stars</SelectItem>
              <SelectItem value="3">3+ stars</SelectItem>
              <SelectItem value="4">4+ stars</SelectItem>
              <SelectItem value="5">5 stars</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Difficulty Filter */}
        <div>
          <Label className="mb-2 block">Difficulty</Label>
          <Select 
            value={filters.difficulty} 
            onValueChange={(value) => onFilterChange('difficulty', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any difficulty</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type Filter */}
        <div>
          <Label className="mb-2 block">Type</Label>
          <Select 
            value={filters.type} 
            onValueChange={(value) => onFilterChange('type', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Any type" />
            </SelectTrigger>
            <SelectContent>
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
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="border-t pt-4">
          <Label className="mb-2 block">Active Filters:</Label>
          <div className="flex flex-wrap gap-2">
            {filters.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs"
              >
                {tag}
                <button
                  onClick={() => handleTagToggle(tag)}
                  className="hover:text-purple-900"
                >
                  <X size={12} />
                </button>
              </span>
            ))}
            {filters.location && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                📍 {filters.location}
                <button
                  onClick={() => onFilterChange('location', '')}
                  className="hover:text-blue-900"
                >
                  <X size={12} />
                </button>
              </span>
            )}
            {filters.minRating > 0 && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs">
                ⭐ {filters.minRating}+ stars
                <button
                  onClick={() => onFilterChange('minRating', 0)}
                  className="hover:text-yellow-900"
                >
                  <X size={12} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedFilters;