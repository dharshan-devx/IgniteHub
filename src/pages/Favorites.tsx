import React, { useState } from 'react';
import { Heart, Download, Upload, Plus, Folder, Search, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageHeader from '../components/layout/PageHeader';
import ContentContainer from '../components/layout/ContentContainer';
import ResourceCard from '../components/cards/ResourceCard';
import { useFavorites } from '../hooks/useFavorites';
import { useAuth } from '../contexts/AuthContext';
import { categories } from '../data/resources';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../components/ui/select';

const FavoritesPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { 
    favorites, 
    favoriteCategories, 
    createFavoriteCategory, 
    exportFavorites, 
    importFavorites 
  } = useFavorites();
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreateCategory, setShowCreateCategory] = useState(false);
  const [newCategoryData, setNewCategoryData] = useState({
    name: '',
    description: '',
    color: '#8B5CF6'
  });

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <PageHeader
          title="Sign In Required"
          subtitle="Please sign in to view your favorites"
          gradient="from-purple-600 to-pink-600"
        />
        <ContentContainer>
          <div className="text-center py-12">
            <Heart size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Sign in to save favorites
            </h3>
            <p className="text-gray-600 mb-6">
              Create an account to bookmark your favorite resources and organize them into collections.
            </p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Get Started
              </Button>
            </Link>
          </div>
        </ContentContainer>
      </div>
    );
  }

  // Get all favorited resources with their details
  const favoriteResources = favorites.map(fav => {
    const category = categories.find(cat => cat.id === fav.categoryId);
    const resource = category?.resources.find(res => res.id === fav.resourceId);
    return resource ? { ...resource, favoriteData: fav } : null;
  }).filter(Boolean);

  // Filter favorites based on search and category
  const filteredFavorites = favoriteResources.filter(resource => {
    if (!resource) return false;
    
    const matchesSearch = !searchTerm || 
      resource.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      resource.favoriteData.categoryId === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleCreateCategory = async () => {
    if (!newCategoryData.name.trim()) return;
    
    await createFavoriteCategory(
      newCategoryData.name,
      newCategoryData.description,
      newCategoryData.color
    );
    
    setNewCategoryData({ name: '', description: '', color: '#8B5CF6' });
    setShowCreateCategory(false);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      importFavorites(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="My Favorites"
        subtitle={`${favorites.length} saved resources organized for easy access`}
        gradient="from-red-500 to-pink-600"
      />

      <ContentContainer>
        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-4">
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search favorites..."
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="All categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.icon} {cat.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Dialog open={showCreateCategory} onOpenChange={setShowCreateCategory}>
                <DialogTrigger asChild>
                  <Button variant="outline">
                    <Plus size={16} className="mr-2" />
                    New Collection
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Collection</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="categoryName">Collection Name</Label>
                      <Input
                        id="categoryName"
                        value={newCategoryData.name}
                        onChange={(e) => setNewCategoryData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="e.g., AI Tools, Learning Resources"
                      />
                    </div>
                    <div>
                      <Label htmlFor="categoryDescription">Description (optional)</Label>
                      <Textarea
                        id="categoryDescription"
                        value={newCategoryData.description}
                        onChange={(e) => setNewCategoryData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe this collection..."
                        rows={3}
                      />
                    </div>
                    <div>
                      <Label htmlFor="categoryColor">Color</Label>
                      <Input
                        id="categoryColor"
                        type="color"
                        value={newCategoryData.color}
                        onChange={(e) => setNewCategoryData(prev => ({ ...prev, color: e.target.value }))}
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setShowCreateCategory(false)}>
                        Cancel
                      </Button>
                      <Button onClick={handleCreateCategory}>
                        Create Collection
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button variant="outline" onClick={exportFavorites}>
                <Download size={16} className="mr-2" />
                Export
              </Button>

              <Button variant="outline" asChild>
                <label className="cursor-pointer">
                  <Upload size={16} className="mr-2" />
                  Import
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleImport}
                    className="hidden"
                  />
                </label>
              </Button>
            </div>
          </div>
        </div>

        {/* Custom Collections */}
        {favoriteCategories.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">My Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteCategories.map(category => (
                <Card key={category.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: category.color }}
                      />
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {category.description && (
                      <p className="text-gray-600 text-sm mb-3">{category.description}</p>
                    )}
                    <p className="text-sm text-gray-500">
                      {category.resourceIds.length} resources
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Favorites Grid */}
        {filteredFavorites.length > 0 ? (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {searchTerm || selectedCategory !== 'all' 
                ? `Filtered Results (${filteredFavorites.length})`
                : 'All Favorites'
              }
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFavorites.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  categoryId={resource.favoriteData.categoryId}
                />
              ))}
            </div>
          </div>
        ) : favorites.length > 0 ? (
          <div className="text-center py-12">
            <Filter size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No favorites match your filters
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search terms or category filter.
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No favorites yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start exploring resources and save your favorites for easy access later.
            </p>
            <Link to="/resources">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Explore Resources
              </Button>
            </Link>
          </div>
        )}
      </ContentContainer>
    </div>
  );
};

export default FavoritesPage;