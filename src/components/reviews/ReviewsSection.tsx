import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { useReviews } from '../../hooks/useReviews';
import { ResourceReview } from '../../data/resources';
import ReviewCard from './ReviewCard';
import ReviewForm from './ReviewForm';
import { Button } from '../ui/button';

interface ReviewsSectionProps {
  resourceId: string;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ resourceId }) => {
  const { reviews, userReview, getAverageRating, getRatingDistribution } = useReviews(resourceId);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [editingReview, setEditingReview] = useState<ResourceReview | null>(null);

  const averageRating = getAverageRating();
  const ratingDistribution = getRatingDistribution();

  const handleReviewSubmit = () => {
    setShowReviewForm(false);
    setEditingReview(null);
  };

  const handleEditReview = (review: ResourceReview) => {
    setEditingReview(review);
    setShowReviewForm(true);
  };

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Reviews & Ratings</h2>
          {!userReview && !showReviewForm && (
            <Button
              onClick={() => setShowReviewForm(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <MessageSquare size={16} className="mr-2" />
              Write Review
            </Button>
          )}
        </div>

        {reviews.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    className={`${
                      star <= Math.round(averageRating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600">Based on {reviews.length} reviews</p>
            </div>

            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 w-8">{rating}★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width: `${reviews.length > 0 ? (ratingDistribution[rating as keyof typeof ratingDistribution] / reviews.length) * 100 : 0}%`
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">
                    {ratingDistribution[rating as keyof typeof ratingDistribution]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <MessageSquare size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No reviews yet</h3>
            <p className="text-gray-600">Be the first to review this resource!</p>
          </div>
        )}
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <ReviewForm
          resourceId={resourceId}
          existingReview={editingReview || undefined}
          onSubmit={handleReviewSubmit}
          onCancel={() => {
            setShowReviewForm(false);
            setEditingReview(null);
          }}
        />
      )}

      {/* User's Review */}
      {userReview && !showReviewForm && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Review</h3>
          <ReviewCard review={userReview} onEdit={handleEditReview} />
        </div>
      )}

      {/* All Reviews */}
      {reviews.filter(review => review.id !== userReview?.id).length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            All Reviews ({reviews.filter(review => review.id !== userReview?.id).length})
          </h3>
          <div className="space-y-4">
            {reviews
              .filter(review => review.id !== userReview?.id)
              .map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;