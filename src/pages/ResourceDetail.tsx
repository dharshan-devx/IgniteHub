import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Star, Calendar, Tag } from 'lucide-react';
import { categories } from '../data/resources';
import PageHeader from '../components/layout/PageHeader';
import ContentContainer from '../components/layout/ContentContainer';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

const ResourceDetail: React.FC = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  
  // Find the resource across all categories
  let resource = null;
  let categoryId = '';
  
  for (const category of categories) {
    const found = category.resources.find(r => r.id === resourceId);
    if (found) {
      resource = found;
      categoryId = category.id;
      break;
    }
  }

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Resource not found</h1>
          <p className="text-gray-600 mb-4">
            The resource you're looking for doesn't exist.
          </p>
          <Link to="/resources">
            <Button>
              <ArrowLeft className="mr-2" size={16} />
              Back to Resources
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(cat => cat.id === categoryId);

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title={resource.name}
        subtitle={resource.description}
        gradient={category?.gradient || 'from-purple-600 to-pink-600'}
      >
        <Link
          to={`/resources/${categoryId}`}
          className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2" size={16} />
          Back to {category?.title}
        </Link>
      </PageHeader>

      <ContentContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Resource Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">{resource.name}</h1>
                  
                  {/* Rating */}
                  {resource.rating && (
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            size={20}
                            className={`${
                              star <= Math.round(resource.rating!)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-medium text-gray-900">
                        {resource.rating.toFixed(1)}
                      </span>
                      <span className="text-gray-600">
                        ({resource.reviewCount} reviews)
                      </span>
                    </div>
                  )}

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {resource.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                        ⭐ Featured
                      </Badge>
                    )}
                    {resource.difficulty && (
                      <Badge variant="secondary">
                        {resource.difficulty}
                      </Badge>
                    )}
                    {resource.type && (
                      <Badge variant="outline">
                        {resource.type}
                      </Badge>
                    )}
                    {resource.isFree && (
                      <Badge className="bg-green-100 text-green-800">
                        Free
                      </Badge>
                    )}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full"
                      >
                        <Tag size={14} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 pt-6 border-t">
                <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  <a href={resource.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={18} className="mr-2" />
                    Visit Resource
                  </a>
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Resource</h2>
              <p className="text-gray-700 leading-relaxed">
                {resource.description}
              </p>
              
              {resource.tags.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {resource.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3">
                {resource.dateAdded && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    Added {new Date(resource.dateAdded).toLocaleDateString()}
                  </div>
                )}
                
                <div className="flex items-center text-sm text-gray-600">
                  <Tag size={16} className="mr-2" />
                  {category?.title}
                </div>

                {resource.location && (
                  <div className="flex items-center text-sm text-gray-600">
                    📍 {resource.location}
                  </div>
                )}
              </div>
            </div>

            {/* Related Resources */}
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Resources</h3>
              <div className="space-y-3">
                {category?.resources
                  .filter(r => r.id !== resource.id)
                  .slice(0, 3)
                  .map((relatedResource) => (
                    <Link
                      key={relatedResource.id}
                      to={`/resource/${relatedResource.id}`}
                      className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <h4 className="font-medium text-gray-900 mb-1">
                        {relatedResource.name}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedResource.description}
                      </p>
                      {relatedResource.rating && (
                        <div className="flex items-center mt-2">
                          <Star size={14} className="text-yellow-400 fill-current mr-1" />
                          <span className="text-sm text-gray-600">
                            {relatedResource.rating.toFixed(1)}
                          </span>
                        </div>
                      )}
                    </Link>
                  ))}
              </div>
              
              <Link
                to={`/resources/${categoryId}`}
                className="block mt-4 text-center text-purple-600 hover:text-purple-700 font-medium"
              >
                View all in {category?.title}
              </Link>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
};

export default ResourceDetail;