import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../../hooks/useFavorites';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';

interface FavoriteButtonProps {
  resourceId: string;
  categoryId: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'icon' | 'button';
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  resourceId, 
  categoryId, 
  size = 'md',
  variant = 'icon'
}) => {
  const { isAuthenticated } = useAuth();
  const { isFavorite, addToFavorites, removeFromFavorites, isLoading } = useFavorites();
  
  const favorited = isFavorite(resourceId);

  const handleToggle = () => {
    if (!isAuthenticated) {
      // Could trigger login modal here
      return;
    }

    if (favorited) {
      removeFromFavorites(resourceId);
    } else {
      addToFavorites(resourceId, categoryId);
    }
  };

  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 24 : 20;

  if (variant === 'button') {
    return (
      <Button
        onClick={handleToggle}
        variant={favorited ? 'default' : 'outline'}
        size={size}
        disabled={isLoading}
        className={favorited ? 'bg-red-500 hover:bg-red-600 text-white' : ''}
      >
        <Heart 
          size={iconSize} 
          className={`mr-2 ${favorited ? 'fill-current' : ''}`} 
        />
        {favorited ? 'Favorited' : 'Add to Favorites'}
      </Button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      disabled={isLoading}
      className={`p-2 rounded-full transition-colors ${
        favorited 
          ? 'text-red-500 bg-red-50 hover:bg-red-100' 
          : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
      }`}
      title={favorited ? 'Remove from favorites' : 'Add to favorites'}
    >
      <Heart 
        size={iconSize} 
        className={favorited ? 'fill-current' : ''} 
      />
    </button>
  );
};

export default FavoriteButton;