import React, { useState } from 'react';
import { Star, Edit, Trash2, Calendar } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useReviews } from '../hooks/useReviews';
import { categories } from '../data/resources';
import PageHeader from '../components/layout/PageHeader';
import ContentContainer from '../components/layout/ContentContainer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';

const MyReviews: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { reviews } = useReviews();
  
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">Please log in to view your reviews.</p>
        </div>
      </div>
    );
  }

  const userReviews = reviews.filter(review => review.userId === user?.id);

  // Get resource details for each review
  const reviewsWithResources = userReviews.map(review => {
    let resource = null;
    let category = null;
    
    for (const cat of categories) {
      const found = cat.resources.find(r => r.id === review.resourceId);
      if (found) {
        resource = found;
        category = cat;
        break;
      }
    }
    
    return { review, resource, category };
  }).filter(item => item.resource);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="My Reviews"
        subtitle={`${userReviews.length} reviews you've written`}
        gradient="from-yellow-500 to-orange-500"
      />

      <ContentContainer>
        {reviewsWithResources.length > 0 ? (
          <div className="space-y-6">
            {reviewsWithResources.map(({ review, resource, category }) => (
              <Card key={review.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center space-x-2">
                        <Link 
                          to={`/resource/${resource.id}`}
                          className="text-purple-600 hover:text-purple-700"
                        >
                          {resource.name}
                        </Link>
                        <Badge variant="outline">{category?.title}</Badge>
                      </CardTitle>
                      
                      <div className="flex items-center space-x-4 mt-2">
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
                        
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          {new Date(review.createdAt).toLocaleDateString()}
                        </div>
                        
                        <Badge variant="secondary">
                          {review.helpful} helpful votes
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit size={14} className="mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 size={14} className="mr-1" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {review.review}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Review ID: {review.id}</span>
                    <Link 
                      to={`/resource/${resource.id}`}
                      className="text-purple-600 hover:text-purple-700"
                    >
                      View Resource →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Star size={64} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No reviews yet
            </h3>
            <p className="text-gray-600 mb-6">
              Start exploring resources and share your experiences with the community.
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

export default MyReviews;