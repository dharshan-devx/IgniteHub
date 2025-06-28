import React from 'react';
import { Trophy, Star, Heart, MessageSquare, Target, Award, Crown, Zap } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import PageHeader from '../components/layout/PageHeader';
import ContentContainer from '../components/layout/ContentContainer';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: 'engagement' | 'social' | 'milestone' | 'special';
  requirement: number;
  current: number;
  unlocked: boolean;
  unlockedAt?: Date;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

const Achievements: React.FC = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">Please log in to view your achievements.</p>
        </div>
      </div>
    );
  }

  const achievements: Achievement[] = [
    {
      id: 'first-favorite',
      title: 'First Love',
      description: 'Add your first resource to favorites',
      icon: <Heart className="w-6 h-6" />,
      category: 'milestone',
      requirement: 1,
      current: user.stats.resourcesBookmarked,
      unlocked: user.stats.resourcesBookmarked >= 1,
      rarity: 'common'
    },
    {
      id: 'favorite-collector',
      title: 'Collector',
      description: 'Save 10 resources to favorites',
      icon: <Heart className="w-6 h-6" />,
      category: 'engagement',
      requirement: 10,
      current: user.stats.resourcesBookmarked,
      unlocked: user.stats.resourcesBookmarked >= 10,
      rarity: 'rare'
    },
    {
      id: 'first-review',
      title: 'Voice of Experience',
      description: 'Write your first review',
      icon: <Star className="w-6 h-6" />,
      category: 'social',
      requirement: 1,
      current: user.stats.reviewsWritten,
      unlocked: user.stats.reviewsWritten >= 1,
      rarity: 'common'
    },
    {
      id: 'review-master',
      title: 'Review Master',
      description: 'Write 10 helpful reviews',
      icon: <MessageSquare className="w-6 h-6" />,
      category: 'social',
      requirement: 10,
      current: user.stats.reviewsWritten,
      unlocked: user.stats.reviewsWritten >= 10,
      rarity: 'epic'
    },
    {
      id: 'helpful-contributor',
      title: 'Helpful Contributor',
      description: 'Receive 50 helpful votes on your reviews',
      icon: <Trophy className="w-6 h-6" />,
      category: 'social',
      requirement: 50,
      current: user.stats.helpfulVotes,
      unlocked: user.stats.helpfulVotes >= 50,
      rarity: 'epic'
    },
    {
      id: 'community-champion',
      title: 'Community Champion',
      description: 'Earn 500 community points',
      icon: <Crown className="w-6 h-6" />,
      category: 'milestone',
      requirement: 500,
      current: user.stats.communityPoints,
      unlocked: user.stats.communityPoints >= 500,
      rarity: 'legendary'
    },
    {
      id: 'early-adopter',
      title: 'Early Adopter',
      description: 'One of the first 100 users to join IgniteHub',
      icon: <Zap className="w-6 h-6" />,
      category: 'special',
      requirement: 1,
      current: 1,
      unlocked: user.stats.badgesEarned.includes('Early Adopter'),
      rarity: 'legendary'
    },
    {
      id: 'resource-curator',
      title: 'Resource Curator',
      description: 'Submit 5 resources to the platform',
      icon: <Target className="w-6 h-6" />,
      category: 'engagement',
      requirement: 5,
      current: user.stats.resourcesSubmitted,
      unlocked: user.stats.resourcesSubmitted >= 5,
      rarity: 'rare'
    }
  ];

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const lockedAchievements = achievements.filter(a => !a.unlocked);

  const getRarityColor = (rarity: Achievement['rarity']) => {
    switch (rarity) {
      case 'common': return 'bg-gray-100 text-gray-700';
      case 'rare': return 'bg-blue-100 text-blue-700';
      case 'epic': return 'bg-purple-100 text-purple-700';
      case 'legendary': return 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getCategoryIcon = (category: Achievement['category']) => {
    switch (category) {
      case 'engagement': return <Target className="w-4 h-4" />;
      case 'social': return <MessageSquare className="w-4 h-4" />;
      case 'milestone': return <Trophy className="w-4 h-4" />;
      case 'special': return <Award className="w-4 h-4" />;
      default: return <Trophy className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        title="Achievements"
        subtitle={`${unlockedAchievements.length} of ${achievements.length} achievements unlocked`}
        gradient="from-yellow-500 to-orange-500"
      />

      <ContentContainer>
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{unlockedAchievements.length}</div>
              <div className="text-sm text-gray-600">Unlocked</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{user.stats.communityPoints}</div>
              <div className="text-sm text-gray-600">Points</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{user.stats.resourcesBookmarked}</div>
              <div className="text-sm text-gray-600">Favorites</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{user.stats.reviewsWritten}</div>
              <div className="text-sm text-gray-600">Reviews</div>
            </CardContent>
          </Card>
        </div>

        {/* Unlocked Achievements */}
        {unlockedAchievements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Unlocked Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unlockedAchievements.map((achievement) => (
                <Card key={achievement.id} className="hover:shadow-md transition-shadow border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                          {achievement.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{achievement.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className={getRarityColor(achievement.rarity)}>
                              {achievement.rarity}
                            </Badge>
                            <Badge variant="outline" className="flex items-center space-x-1">
                              {getCategoryIcon(achievement.category)}
                              <span>{achievement.category}</span>
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <Trophy className="w-6 h-6 text-yellow-500" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">{achievement.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-green-600 font-medium">✓ Completed</span>
                      <span className="text-gray-500">
                        {achievement.current}/{achievement.requirement}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Locked Achievements */}
        {lockedAchievements.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">In Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lockedAchievements.map((achievement) => (
                <Card key={achievement.id} className="hover:shadow-md transition-shadow opacity-75">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gray-100 rounded-lg text-gray-400">
                        {achievement.icon}
                      </div>
                      <div>
                        <CardTitle className="text-lg text-gray-700">{achievement.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getRarityColor(achievement.rarity)}>
                            {achievement.rarity}
                          </Badge>
                          <Badge variant="outline" className="flex items-center space-x-1">
                            {getCategoryIcon(achievement.category)}
                            <span>{achievement.category}</span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{achievement.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Progress</span>
                        <span className="text-gray-500">
                          {achievement.current}/{achievement.requirement}
                        </span>
                      </div>
                      <Progress 
                        value={(achievement.current / achievement.requirement) * 100} 
                        className="h-2"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </ContentContainer>
    </div>
  );
};

export default Achievements;