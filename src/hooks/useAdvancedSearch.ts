
import { useMemo, useState } from 'react';
import Fuse from 'fuse.js';
import { Resource } from '../data/resources';

interface SearchFilters {
  category: string;
  difficulty: string;
  type: string;
  isFree: string;
}

export const useAdvancedSearch = (resources: Resource[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    category: 'all',
    difficulty: 'all',
    type: 'all',
    isFree: 'all'
  });

  console.log('useAdvancedSearch received resources:', resources);
  const fuse = useMemo(() => {
    if (!resources || resources.length === 0) {
      return null;
    }
    
    return new Fuse(resources, {
      keys: [
        { name: 'name', weight: 0.4 },
        { name: 'description', weight: 0.3 },
        { name: 'tags', weight: 0.3 }
      ],
      threshold: 0.4,
      includeScore: true
    });
  }, [resources]);

  const filteredResources = useMemo(() => {
    if (!resources || resources.length === 0) {
      console.log('No resources available for filtering');
      return [];
    }

    let results = resources;

    if (searchTerm.trim() && fuse) {
      const fuseResults = fuse.search(searchTerm);
      results = fuseResults.map(result => result.item);
      console.log('Search results:', results);
    }
    if (filters.difficulty && filters.difficulty !== 'all') {
      results = results.filter(r => r.difficulty === filters.difficulty);
    }
    
    if (filters.type && filters.type !== 'all') {
      results = results.filter(r => r.type === filters.type);
    }
    
    if (filters.isFree && filters.isFree !== 'all') {
      const isFree = filters.isFree === 'free';
      results = results.filter(r => r.isFree === isFree);
    }

    console.log('Final filtered results:', results);
    return results;
  }, [resources, searchTerm, filters, fuse]);

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setFilters({
      category: 'all',
      difficulty: 'all',
      type: 'all',
      isFree: 'all'
    });
  };

  return {
    searchTerm,
    setSearchTerm,
    filters,
    updateFilter,
    filteredResources,
    clearAllFilters
  };
};
