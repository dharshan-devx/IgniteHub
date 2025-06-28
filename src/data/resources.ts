export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  type?: 'tool' | 'platform' | 'course' | 'app' | 'software' | 'service';
  isFree?: boolean;
  rating?: number;
  reviewCount?: number;
  dateAdded?: string;
  location?: string;
  featured?: boolean;
}

export interface ResourceReview {
  id: string;
  resourceId: string;
  userId: string;
  rating: number;
  review: string;
  helpful: number;
  createdAt: Date;
  userName: string;
  userAvatar?: string;
}

export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  resources: Resource[];
}

export const categories: Category[] = [
  {
    id: 'ai-tools',
    title: 'AI & Tech Tools',
    description: 'Cutting-edge AI tools and technologies to supercharge your projects and boost productivity.',
    icon: '🤖',
    gradient: 'from-blue-500 to-purple-600',
    resources: [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: 'Advanced AI chatbot for conversations, coding help, writing assistance, and problem-solving.',
        url: 'https://chat.openai.com',
        tags: ['AI', 'Chatbot', 'Writing', 'Coding'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true,
        rating: 4.8,
        reviewCount: 1250,
        dateAdded: '2024-01-15',
        featured: true
      },
      {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        description: 'AI-powered code completion tool that helps you write code faster and with fewer errors.',
        url: 'https://github.com/features/copilot',
        tags: ['AI', 'Coding', 'Productivity', 'GitHub'],
        difficulty: 'intermediate',
        type: 'tool',
        isFree: false,
        rating: 4.6,
        reviewCount: 890,
        dateAdded: '2024-01-20'
      },
      {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'AI-powered image generation tool for creating stunning artwork and designs.',
        url: 'https://midjourney.com',
        tags: ['AI', 'Design', 'Art', 'Image Generation'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: false,
        rating: 4.7,
        reviewCount: 650,
        dateAdded: '2024-01-25'
      },
      {
        id: 'notion-ai',
        name: 'Notion AI',
        description: 'AI-powered writing assistant integrated into Notion for enhanced productivity.',
        url: 'https://notion.so/product/ai',
        tags: ['AI', 'Productivity', 'Writing', 'Organization'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: false,
        rating: 4.5,
        reviewCount: 420,
        dateAdded: '2024-02-01'
      },
      {
        id: 'claude',
        name: 'Claude AI',
        description: 'Anthropic\'s AI assistant for analysis, writing, math, coding, and creative tasks.',
        url: 'https://claude.ai',
        tags: ['AI', 'Assistant', 'Writing', 'Analysis'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true,
        rating: 4.7,
        reviewCount: 580,
        dateAdded: '2024-02-10'
      },
      {
        id: 'perplexity',
        name: 'Perplexity AI',
        description: 'AI-powered search engine that provides accurate answers with sources.',
        url: 'https://perplexity.ai',
        tags: ['AI', 'Search', 'Research', 'Information'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true,
        rating: 4.4,
        reviewCount: 320,
        dateAdded: '2024-02-15'
      }
    ]
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Events',
    description: 'Discover exciting hackathons, coding competitions, and tech events to showcase your skills.',
    icon: '🏆',
    gradient: 'from-green-500 to-blue-500',
    resources: [
      {
        id: 'devpost',
        name: 'Devpost',
        description: 'The home for hackathons. Find and participate in hackathons around the world.',
        url: 'https://devpost.com',
        tags: ['Hackathons', 'Competitions', 'Networking'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 780,
        dateAdded: '2024-01-10',
        featured: true
      },
      {
        id: 'mlh',
        name: 'Major League Hacking',
        description: 'The official student hackathon league with events worldwide.',
        url: 'https://mlh.io',
        tags: ['Hackathons', 'Students', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 920,
        dateAdded: '2024-01-12'
      },
      {
        id: 'hackathon-io',
        name: 'Hackathon.io',
        description: 'Discover and participate in hackathons, coding competitions, and innovation challenges.',
        url: 'https://hackathon.io',
        tags: ['Hackathons', 'Innovation', 'Challenges'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 340,
        dateAdded: '2024-01-18'
      },
      {
        id: 'eventbrite-tech',
        name: 'Eventbrite Tech Events',
        description: 'Find local tech meetups, conferences, and networking events in your area.',
        url: 'https://eventbrite.com',
        tags: ['Events', 'Networking', 'Conferences', 'Meetups'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.2,
        reviewCount: 450,
        dateAdded: '2024-01-25'
      },
      {
        id: 'ludum-dare',
        name: 'Ludum Dare',
        description: 'One of the world\'s largest and longest running game jam events.',
        url: 'https://ldjam.com',
        tags: ['Game Development', 'Game Jam', 'Competition'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 280,
        dateAdded: '2024-02-01'
      }
    ]
  },
  {
    id: 'funding',
    title: 'Funding & Grants',
    description: 'Find funding opportunities, grants, and investment platforms to fuel your startup dreams.',
    icon: '💰',
    gradient: 'from-yellow-500 to-orange-500',
    resources: [
      {
        id: 'ycombinator',
        name: 'Y Combinator',
        description: 'The most prestigious startup accelerator providing funding and mentorship.',
        url: 'https://ycombinator.com',
        tags: ['Accelerator', 'Funding', 'Startups', 'Mentorship'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: true,
        rating: 4.9,
        reviewCount: 560,
        dateAdded: '2024-01-05',
        featured: true
      },
      {
        id: 'techstars',
        name: 'Techstars',
        description: 'Global startup accelerator and venture capital firm.',
        url: 'https://techstars.com',
        tags: ['Accelerator', 'Venture Capital', 'Mentorship'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 430,
        dateAdded: '2024-01-08'
      },
      {
        id: 'kickstarter',
        name: 'Kickstarter',
        description: 'Crowdfunding platform for creative projects and innovative products.',
        url: 'https://kickstarter.com',
        tags: ['Crowdfunding', 'Creative Projects', 'Innovation'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.3,
        reviewCount: 1200,
        dateAdded: '2024-01-14'
      },
      {
        id: 'indiegogo',
        name: 'Indiegogo',
        description: 'Flexible crowdfunding platform for entrepreneurs and creators.',
        url: 'https://indiegogo.com',
        tags: ['Crowdfunding', 'Entrepreneurship', 'Innovation'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.1,
        reviewCount: 890,
        dateAdded: '2024-01-20'
      },
      {
        id: 'angel-list',
        name: 'AngelList',
        description: 'Platform connecting startups with investors and talent.',
        url: 'https://angel.co',
        tags: ['Investment', 'Startups', 'Networking', 'Jobs'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 670,
        dateAdded: '2024-01-28'
      }
    ]
  },
  {
    id: 'learning',
    title: 'Learning Platforms',
    description: 'Top-tier educational resources and courses to master new skills and technologies.',
    icon: '📚',
    gradient: 'from-purple-500 to-pink-500',
    resources: [
      {
        id: 'coursera',
        name: 'Coursera',
        description: 'Online courses from top universities and companies worldwide.',
        url: 'https://coursera.org',
        tags: ['Education', 'Courses', 'Certificates', 'Universities'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 2100,
        dateAdded: '2024-01-03',
        featured: true
      },
      {
        id: 'udemy',
        name: 'Udemy',
        description: 'Marketplace for online learning with courses on virtually any topic.',
        url: 'https://udemy.com',
        tags: ['Education', 'Skills', 'Professional Development'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: false,
        rating: 4.4,
        reviewCount: 1800,
        dateAdded: '2024-01-07'
      },
      {
        id: 'freecodecamp',
        name: 'freeCodeCamp',
        description: 'Learn to code for free with interactive coding challenges and projects.',
        url: 'https://freecodecamp.org',
        tags: ['Coding', 'Web Development', 'Free', 'Certificates'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 950,
        dateAdded: '2024-01-11'
      },
      {
        id: 'codecademy',
        name: 'Codecademy',
        description: 'Interactive coding lessons and hands-on projects for learning programming.',
        url: 'https://codecademy.com',
        tags: ['Coding', 'Interactive Learning', 'Programming'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.3,
        reviewCount: 1200,
        dateAdded: '2024-01-15'
      },
      {
        id: 'pluralsight',
        name: 'Pluralsight',
        description: 'Technology skills platform with expert-authored courses.',
        url: 'https://pluralsight.com',
        tags: ['Technology', 'Professional Development', 'Skills'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: false,
        rating: 4.2,
        reviewCount: 780,
        dateAdded: '2024-01-22'
      },
      {
        id: 'khan-academy',
        name: 'Khan Academy',
        description: 'Free world-class education for anyone, anywhere.',
        url: 'https://khanacademy.org',
        tags: ['Education', 'Free', 'Mathematics', 'Science'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 1500,
        dateAdded: '2024-02-01'
      }
    ]
  },
  {
    id: 'communities',
    title: 'Communities',
    description: 'Join vibrant communities of like-minded innovators, developers, and creators.',
    icon: '👥',
    gradient: 'from-indigo-500 to-purple-500',
    resources: [
      {
        id: 'discord-servers',
        name: 'Tech Discord Servers',
        description: 'Collection of the best Discord servers for developers and tech enthusiasts.',
        url: 'https://discord.com',
        tags: ['Community', 'Discord', 'Networking', 'Tech'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 680,
        dateAdded: '2024-01-16'
      },
      {
        id: 'reddit-programming',
        name: 'Reddit Programming Communities',
        description: 'Active programming and tech communities on Reddit.',
        url: 'https://reddit.com/r/programming',
        tags: ['Community', 'Reddit', 'Programming', 'Discussion'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.3,
        reviewCount: 1500,
        dateAdded: '2024-01-19'
      },
      {
        id: 'indie-hackers',
        name: 'Indie Hackers',
        description: 'Community of independent entrepreneurs building profitable businesses.',
        url: 'https://indiehackers.com',
        tags: ['Entrepreneurship', 'Community', 'Business', 'Indie'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 820,
        dateAdded: '2024-01-22',
        featured: true
      },
      {
        id: 'stack-overflow',
        name: 'Stack Overflow',
        description: 'The largest online community for programmers to learn and share knowledge.',
        url: 'https://stackoverflow.com',
        tags: ['Programming', 'Q&A', 'Community', 'Help'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 2500,
        dateAdded: '2024-01-25'
      },
      {
        id: 'dev-to',
        name: 'DEV Community',
        description: 'A constructive and inclusive social network for software developers.',
        url: 'https://dev.to',
        tags: ['Community', 'Blogging', 'Programming', 'Networking'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 950,
        dateAdded: '2024-02-01'
      },
      {
        id: 'hashnode',
        name: 'Hashnode',
        description: 'Blogging platform for developers to share knowledge and connect.',
        url: 'https://hashnode.com',
        tags: ['Blogging', 'Community', 'Writing', 'Tech'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.3,
        reviewCount: 420,
        dateAdded: '2024-02-05'
      }
    ]
  },
  {
    id: 'open-source',
    title: 'Open Source Projects',
    description: 'Contribute to meaningful open-source projects and build your developer portfolio.',
    icon: '🔓',
    gradient: 'from-green-400 to-blue-500',
    resources: [
      {
        id: 'github',
        name: 'GitHub',
        description: 'The world\'s largest platform for open-source collaboration and version control.',
        url: 'https://github.com',
        tags: ['Git', 'Open Source', 'Collaboration', 'Code'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 3200,
        dateAdded: '2024-01-01',
        featured: true
      },
      {
        id: 'first-timers-only',
        name: 'First Timers Only',
        description: 'Friendly open-source projects for first-time contributors.',
        url: 'https://firsttimersonly.com',
        tags: ['Open Source', 'Beginners', 'First Contribution'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 290,
        dateAdded: '2024-01-09'
      },
      {
        id: 'good-first-issues',
        name: 'Good First Issues',
        description: 'Curated list of good first issues for open-source contributions.',
        url: 'https://goodfirstissues.com',
        tags: ['Open Source', 'Issues', 'Contributions', 'Beginner'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 180,
        dateAdded: '2024-01-13'
      },
      {
        id: 'gitlab',
        name: 'GitLab',
        description: 'Complete DevOps platform with built-in Git repository management.',
        url: 'https://gitlab.com',
        tags: ['Git', 'DevOps', 'CI/CD', 'Open Source'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.3,
        reviewCount: 850,
        dateAdded: '2024-01-18'
      },
      {
        id: 'open-source-friday',
        name: 'Open Source Friday',
        description: 'GitHub\'s initiative to encourage open source contributions every Friday.',
        url: 'https://opensourcefriday.com',
        tags: ['Open Source', 'Community', 'Contributions'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.2,
        reviewCount: 320,
        dateAdded: '2024-01-26'
      },
      {
        id: 'hacktoberfest',
        name: 'Hacktoberfest',
        description: 'Annual event encouraging open source contributions throughout October.',
        url: 'https://hacktoberfest.com',
        tags: ['Open Source', 'Event', 'Contributions', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 750,
        dateAdded: '2024-02-01'
      }
    ]
  }
];

// Mock reviews data
export const mockReviews: ResourceReview[] = [
  {
    id: 'review-1',
    resourceId: 'chatgpt',
    userId: 'user-1',
    rating: 5,
    review: 'Absolutely game-changing tool for developers. Helps with coding, debugging, and learning new concepts.',
    helpful: 24,
    createdAt: new Date('2024-01-20'),
    userName: 'Alex Chen',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
  },
  {
    id: 'review-2',
    resourceId: 'chatgpt',
    userId: 'user-2',
    rating: 4,
    review: 'Great for brainstorming and getting unstuck on problems. Sometimes gives outdated info though.',
    helpful: 18,
    createdAt: new Date('2024-01-22'),
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face'
  },
  {
    id: 'review-3',
    resourceId: 'github-copilot',
    userId: 'user-3',
    rating: 5,
    review: 'Incredible productivity boost. Feels like having a senior developer pair programming with you.',
    helpful: 31,
    createdAt: new Date('2024-01-25'),
    userName: 'Mike Rodriguez',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
  }
];