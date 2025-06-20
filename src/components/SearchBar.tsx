
import React from 'react';
import SearchInput from './ui/SearchInput';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange, placeholder }) => {
  return (
    <SearchInput
      value={searchTerm}
      onChange={onSearchChange}
      placeholder={placeholder}
    />
  );
};

export default SearchBar;
