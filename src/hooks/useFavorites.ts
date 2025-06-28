import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

export interface FavoriteResource {
  id: string;
  resourceId: string;
  categoryId: string;
  addedAt: Date;
  notes?: string;
  tags?: string[];
}

export interface FavoriteCategory {
  id: string;
  name: string;
  description?: string;
  color: string;
  resourceIds: string[];
  createdAt: Date;
}

export const useFavorites = () => {
  const { user, isAuthenticated } = useAuth();
  const [favorites, setFavorites] = useState<FavoriteResource[]>([]);
  const [favoriteCategories, setFavoriteCategories] = useState<FavoriteCategory[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load favorites from localStorage
  useEffect(() => {
    if (isAuthenticated && user) {
      const savedFavorites = localStorage.getItem(`igniteHub_favorites_${user.id}`);
      const savedCategories = localStorage.getItem(`igniteHub_favorite_categories_${user.id}`);
      
      if (savedFavorites) {
        try {
          const parsed = JSON.parse(savedFavorites);
          setFavorites(parsed.map((fav: any) => ({
            ...fav,
            addedAt: new Date(fav.addedAt)
          })));
        } catch (error) {
          console.error('Error loading favorites:', error);
        }
      }
      
      if (savedCategories) {
        try {
          const parsed = JSON.parse(savedCategories);
          setFavoriteCategories(parsed.map((cat: any) => ({
            ...cat,
            createdAt: new Date(cat.createdAt)
          })));
        } catch (error) {
          console.error('Error loading favorite categories:', error);
        }
      }
    } else {
      setFavorites([]);
      setFavoriteCategories([]);
    }
  }, [isAuthenticated, user]);

  // Save favorites to localStorage
  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem(`igniteHub_favorites_${user.id}`, JSON.stringify(favorites));
    }
  }, [favorites, isAuthenticated, user]);

  // Save favorite categories to localStorage
  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem(`igniteHub_favorite_categories_${user.id}`, JSON.stringify(favoriteCategories));
    }
  }, [favoriteCategories, isAuthenticated, user]);

  const addToFavorites = async (resourceId: string, categoryId: string, notes?: string) => {
    if (!isAuthenticated) {
      toast.error('Please log in to save favorites');
      return;
    }

    setIsLoading(true);
    try {
      const newFavorite: FavoriteResource = {
        id: `fav-${Date.now()}`,
        resourceId,
        categoryId,
        addedAt: new Date(),
        notes
      };

      setFavorites(prev => [...prev, newFavorite]);
      toast.success('Added to favorites');
    } catch (error) {
      toast.error('Failed to add to favorites');
    } finally {
      setIsLoading(false);
    }
  };

  const removeFromFavorites = async (resourceId: string) => {
    if (!isAuthenticated) return;

    setIsLoading(true);
    try {
      setFavorites(prev => prev.filter(fav => fav.resourceId !== resourceId));
      toast.success('Removed from favorites');
    } catch (error) {
      toast.error('Failed to remove from favorites');
    } finally {
      setIsLoading(false);
    }
  };

  const isFavorite = (resourceId: string): boolean => {
    return favorites.some(fav => fav.resourceId === resourceId);
  };

  const createFavoriteCategory = async (name: string, description?: string, color: string = '#8B5CF6') => {
    if (!isAuthenticated) {
      toast.error('Please log in to create categories');
      return;
    }

    const newCategory: FavoriteCategory = {
      id: `cat-${Date.now()}`,
      name,
      description,
      color,
      resourceIds: [],
      createdAt: new Date()
    };

    setFavoriteCategories(prev => [...prev, newCategory]);
    toast.success('Category created');
    return newCategory;
  };

  const deleteFavoriteCategory = async (categoryId: string) => {
    setFavoriteCategories(prev => prev.filter(cat => cat.id !== categoryId));
    toast.success('Category deleted');
  };

  const addToFavoriteCategory = async (resourceId: string, categoryId: string) => {
    setFavoriteCategories(prev => prev.map(cat => 
      cat.id === categoryId 
        ? { ...cat, resourceIds: [...cat.resourceIds, resourceId] }
        : cat
    ));
  };

  const removeFromFavoriteCategory = async (resourceId: string, categoryId: string) => {
    setFavoriteCategories(prev => prev.map(cat => 
      cat.id === categoryId 
        ? { ...cat, resourceIds: cat.resourceIds.filter(id => id !== resourceId) }
        : cat
    ));
  };

  const exportFavorites = () => {
    const data = {
      favorites,
      categories: favoriteCategories,
      exportedAt: new Date(),
      user: user?.name
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ignitehub-favorites-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success('Favorites exported successfully');
  };

  const importFavorites = async (file: File) => {
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      
      if (data.favorites && Array.isArray(data.favorites)) {
        setFavorites(data.favorites.map((fav: any) => ({
          ...fav,
          addedAt: new Date(fav.addedAt)
        })));
      }
      
      if (data.categories && Array.isArray(data.categories)) {
        setFavoriteCategories(data.categories.map((cat: any) => ({
          ...cat,
          createdAt: new Date(cat.createdAt)
        })));
      }
      
      toast.success('Favorites imported successfully');
    } catch (error) {
      toast.error('Failed to import favorites');
    }
  };

  return {
    favorites,
    favoriteCategories,
    isLoading,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    createFavoriteCategory,
    deleteFavoriteCategory,
    addToFavoriteCategory,
    removeFromFavoriteCategory,
    exportFavorites,
    importFavorites
  };
};