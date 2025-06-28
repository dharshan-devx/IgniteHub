import React, { useState } from 'react';
import { Star, ThumbsUp, MoreVertical, Edit, Trash2 } from 'lucide-react';
import { ResourceReview } from '../../data/resources';
import { useAuth } from '../../contexts/AuthContext';
import { useReviews } from '../../hooks/useReviews';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

interface ReviewCardProps {
  review: ResourceReview;
  onEdit?: (review: ResourceReview) => void;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review, onEdit }) => {
  const { user } = useAuth();
  const { markHelpful, deleteReview } = useReviews();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleMarkHelpful = () => {
    markHelpful(review.id);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    await deleteReview(review.id);
    setIsDeleting(false);
  };

  const isOwnReview = user?.id === review.userId;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={review.userAvatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(review.userName)}&background=8B5CF6&color=fff`}
            alt={review.userName}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-medium text-gray-900">{review.userName}</h4>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={`${
                      star <= review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {isOwnReview && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreVertical size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit?.(review)}>
                <Edit size={16} className="mr-2" />
                Edit Review
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={handleDelete}
                disabled={isDeleting}
                className="text-red-600 focus:text-red-600"
              >
                <Trash2 size={16} className="mr-2" />
                Delete Review
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>

      <div className="flex items-center justify-between">
        <button
          onClick={handleMarkHelpful}
          className="flex items-center space-x-2 text-gray-500 hover:text-purple-600 transition-colors"
          disabled={isOwnReview}
        >
          <ThumbsUp size={16} />
          <span className="text-sm">
            Helpful ({review.helpful})
          </span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;