import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('igniteHub_favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('igniteHub_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (resourceId: string) => {
    setFavorites(prev =>
      prev.includes(resourceId)
        ? prev.filter(id => id !== resourceId)
        : [...prev, resourceId]
    );
  };

  const isFavorite = (resourceId: string) =>
    favorites.includes(resourceId);

  return { favorites, toggleFavorite, isFavorite };
};
