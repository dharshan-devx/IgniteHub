import { useState, useEffect } from 'react';
import { ResourceReview, mockReviews } from '../data/resources';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner';

export const useReviews = (resourceId?: string) => {
  const { user, isAuthenticated } = useAuth();
  const [reviews, setReviews] = useState<ResourceReview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userReview, setUserReview] = useState<ResourceReview | null>(null);

  useEffect(() => {
    loadReviews();
  }, [resourceId]);

  const loadReviews = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const filteredReviews = resourceId 
        ? mockReviews.filter(review => review.resourceId === resourceId)
        : mockReviews;
      
      setReviews(filteredReviews);
      
      // Find user's review if authenticated
      if (isAuthenticated && user && resourceId) {
        const existingReview = filteredReviews.find(review => review.userId === user.id);
        setUserReview(existingReview || null);
      }
    } catch (error) {
      toast.error('Failed to load reviews');
    } finally {
      setIsLoading(false);
    }
  };

  const submitReview = async (rating: number, reviewText: string, resourceId: string) => {
    if (!isAuthenticated || !user) {
      toast.error('Please log in to submit a review');
      return;
    }

    try {
      const newReview: ResourceReview = {
        id: `review-${Date.now()}`,
        resourceId,
        userId: user.id,
        rating,
        review: reviewText,
        helpful: 0,
        createdAt: new Date(),
        userName: user.name,
        userAvatar: user.avatar
      };

      // Update local state
      setReviews(prev => [newReview, ...prev]);
      setUserReview(newReview);
      
      // Save to localStorage (in real app, this would be an API call)
      const allReviews = [...mockReviews, newReview];
      localStorage.setItem('igniteHub_reviews', JSON.stringify(allReviews));
      
      toast.success('Review submitted successfully');
    } catch (error) {
      toast.error('Failed to submit review');
    }
  };

  const updateReview = async (reviewId: string, rating: number, reviewText: string) => {
    if (!isAuthenticated || !user) return;

    try {
      setReviews(prev => prev.map(review => 
        review.id === reviewId 
          ? { ...review, rating, review: reviewText }
          : review
      ));
      
      if (userReview?.id === reviewId) {
        setUserReview(prev => prev ? { ...prev, rating, review: reviewText } : null);
      }
      
      toast.success('Review updated successfully');
    } catch (error) {
      toast.error('Failed to update review');
    }
  };

  const deleteReview = async (reviewId: string) => {
    if (!isAuthenticated || !user) return;

    try {
      setReviews(prev => prev.filter(review => review.id !== reviewId));
      
      if (userReview?.id === reviewId) {
        setUserReview(null);
      }
      
      toast.success('Review deleted successfully');
    } catch (error) {
      toast.error('Failed to delete review');
    }
  };

  const markHelpful = async (reviewId: string) => {
    if (!isAuthenticated) {
      toast.error('Please log in to mark reviews as helpful');
      return;
    }

    try {
      setReviews(prev => prev.map(review => 
        review.id === reviewId 
          ? { ...review, helpful: review.helpful + 1 }
          : review
      ));
      
      toast.success('Marked as helpful');
    } catch (error) {
      toast.error('Failed to mark as helpful');
    }
  };

  const getAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
  };

  const getRatingDistribution = () => {
    const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach(review => {
      distribution[review.rating as keyof typeof distribution]++;
    });
    return distribution;
  };

  return {
    reviews,
    userReview,
    isLoading,
    submitReview,
    updateReview,
    deleteReview,
    markHelpful,
    getAverageRating,
    getRatingDistribution,
    refreshReviews: loadReviews
  };
};