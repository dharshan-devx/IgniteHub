export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
  difficulty?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  type?: 'course' | 'tutorial' | 'article' | 'video' | 'book' | 'tool' | 'website' | 'platform' | 'app' | 'service';
  isFree?: boolean;
  rating?: number;
  reviewCount?: number;
  featured?: boolean;
  dateAdded?: string;
  location?: string;
  detailedDescription?: string;
  features?: string[];
  pricing?: {
    free?: string;
    paid?: string[];
  };
  screenshots?: string[];
  requirements?: string[];
  alternatives?: string[];
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
    description: 'Cutting-edge AI tools and technologies to supercharge your projects and workflows.',
    icon: '🤖',
    gradient: 'from-blue-600 to-purple-600',
    resources: [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: 'Advanced AI chatbot for conversations, writing, coding, and problem-solving.',
        detailedDescription: 'ChatGPT is a state-of-the-art conversational AI developed by OpenAI. It can assist with a wide range of tasks including writing, coding, analysis, creative projects, and learning. The tool uses advanced language models to understand context and provide human-like responses.',
        url: 'https://chat.openai.com',
        tags: ['AI', 'Chatbot', 'Writing', 'Coding', 'Assistant'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true,
        rating: 4.8,
        reviewCount: 15420,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Natural language conversations',
          'Code generation and debugging',
          'Creative writing assistance',
          'Data analysis and interpretation',
          'Multiple language support',
          'Context-aware responses'
        ],
        pricing: {
          free: 'Limited usage with GPT-3.5',
          paid: ['ChatGPT Plus: $20/month for GPT-4 access', 'ChatGPT Team: $25/user/month', 'ChatGPT Enterprise: Custom pricing']
        },
        requirements: ['Web browser', 'Internet connection', 'OpenAI account'],
        alternatives: ['Claude', 'Gemini', 'Copilot', 'Perplexity']
      },
      {
        id: 'github-copilot',
        name: 'GitHub Copilot',
        description: 'AI-powered code completion and programming assistant integrated into your IDE.',
        detailedDescription: 'GitHub Copilot is an AI pair programmer that helps you write code faster and with less work. It draws context from comments and code to suggest individual lines and whole functions instantly. Copilot is powered by OpenAI Codex and works with dozens of programming languages.',
        url: 'https://github.com/features/copilot',
        tags: ['AI', 'Coding', 'IDE', 'Programming', 'Productivity'],
        difficulty: 'intermediate',
        type: 'tool',
        isFree: false,
        rating: 4.6,
        reviewCount: 8930,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'Real-time code suggestions',
          'Multi-language support',
          'IDE integration',
          'Context-aware completions',
          'Function generation',
          'Code explanation'
        ],
        pricing: {
          paid: ['Individual: $10/month', 'Business: $19/user/month', 'Enterprise: $39/user/month']
        },
        requirements: ['Compatible IDE (VS Code, JetBrains, etc.)', 'GitHub account', 'Internet connection'],
        alternatives: ['Tabnine', 'Codeium', 'Amazon CodeWhisperer', 'Replit Ghostwriter']
      },
      {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'AI-powered image generation tool for creating stunning artwork and designs.',
        detailedDescription: 'Midjourney is an independent research lab that produces an AI program that creates images from textual descriptions. It\'s known for its artistic and dreamlike aesthetic, making it popular among artists, designers, and creative professionals.',
        url: 'https://midjourney.com',
        tags: ['AI', 'Image Generation', 'Art', 'Design', 'Creative'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: false,
        rating: 4.7,
        reviewCount: 12450,
        featured: true,
        dateAdded: '2024-01-25',
        features: [
          'Text-to-image generation',
          'High-quality artistic output',
          'Style variations',
          'Upscaling capabilities',
          'Community gallery',
          'Discord integration'
        ],
        pricing: {
          paid: ['Basic: $10/month', 'Standard: $30/month', 'Pro: $60/month', 'Mega: $120/month']
        },
        requirements: ['Discord account', 'Internet connection'],
        alternatives: ['DALL-E 2', 'Stable Diffusion', 'Adobe Firefly', 'Leonardo AI']
      },
      {
        id: 'notion-ai',
        name: 'Notion AI',
        description: 'AI writing assistant integrated into Notion for enhanced productivity and content creation.',
        detailedDescription: 'Notion AI is built directly into Notion, helping you write better, think bigger, and work faster. It can help with brainstorming, writing, editing, summarizing, and translating content within your Notion workspace.',
        url: 'https://notion.so/product/ai',
        tags: ['AI', 'Writing', 'Productivity', 'Note-taking', 'Collaboration'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: false,
        rating: 4.4,
        reviewCount: 6780,
        dateAdded: '2024-02-01',
        features: [
          'AI writing assistance',
          'Content summarization',
          'Brainstorming support',
          'Translation capabilities',
          'Integrated with Notion workspace',
          'Template generation'
        ],
        pricing: {
          paid: ['Notion AI add-on: $10/member/month']
        },
        requirements: ['Notion account', 'Internet connection'],
        alternatives: ['Jasper', 'Copy.ai', 'Writesonic', 'Grammarly']
      },
      {
        id: 'claude',
        name: 'Claude',
        description: 'Advanced AI assistant by Anthropic for safe, helpful, and honest conversations.',
        detailedDescription: 'Claude is an AI assistant created by Anthropic to be helpful, harmless, and honest. It excels at analysis, writing, math, coding, and creative tasks while maintaining strong safety principles.',
        url: 'https://claude.ai',
        tags: ['AI', 'Assistant', 'Writing', 'Analysis', 'Safety'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true,
        rating: 4.5,
        reviewCount: 4320,
        dateAdded: '2024-02-10',
        features: [
          'Long-form conversations',
          'Document analysis',
          'Code generation',
          'Creative writing',
          'Mathematical reasoning',
          'Safety-focused responses'
        ],
        pricing: {
          free: 'Limited usage',
          paid: ['Claude Pro: $20/month for increased usage']
        },
        requirements: ['Web browser', 'Internet connection', 'Anthropic account'],
        alternatives: ['ChatGPT', 'Gemini', 'Perplexity', 'Character.AI']
      }
    ]
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Competitions',
    description: 'Discover exciting hackathons and coding competitions to showcase your skills and win prizes.',
    icon: '🏆',
    gradient: 'from-orange-500 to-red-600',
    resources: [
      {
        id: 'devpost',
        name: 'Devpost',
        description: 'The home for hackathons - discover, participate in, and host virtual and in-person hackathons.',
        detailedDescription: 'Devpost is the leading platform for hackathons and developer competitions. It connects developers, designers, and entrepreneurs with opportunities to build innovative projects, learn new skills, and win prizes.',
        url: 'https://devpost.com',
        tags: ['Hackathons', 'Competitions', 'Networking', 'Projects', 'Prizes'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 8920,
        featured: true,
        dateAdded: '2024-01-18',
        features: [
          'Global hackathon directory',
          'Project submission platform',
          'Team formation tools',
          'Prize tracking',
          'Portfolio building',
          'Networking opportunities'
        ],
        pricing: {
          free: 'Full access to participate in hackathons'
        },
        requirements: ['Web browser', 'Internet connection', 'Devpost account'],
        alternatives: ['HackerEarth', 'MLH', 'AngelHack', 'Junction']
      },
      {
        id: 'mlh',
        name: 'Major League Hacking (MLH)',
        description: 'The official student hackathon league with events worldwide and year-round opportunities.',
        detailedDescription: 'Major League Hacking (MLH) is the official student hackathon league. Each year, MLH powers over 200 weekend-long invention competitions that inspire innovation, cultivate communities and teach computer science skills to more than 65,000 students around the world.',
        url: 'https://mlh.io',
        tags: ['Student Hackathons', 'Community', 'Learning', 'Networking', 'Global'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 12340,
        featured: true,
        dateAdded: '2024-01-22',
        features: [
          'Student-focused hackathons',
          'Global event network',
          'Mentorship programs',
          'Swag and prizes',
          'Community building',
          'Career opportunities'
        ],
        pricing: {
          free: 'All events and resources are free for students'
        },
        requirements: ['Student status (for most events)', 'Internet connection'],
        alternatives: ['HackClub', 'Devpost', 'HackerEarth', 'AngelHack']
      },
      {
        id: 'kaggle-competitions',
        name: 'Kaggle Competitions',
        description: 'Data science and machine learning competitions with real-world problems and cash prizes.',
        detailedDescription: 'Kaggle Competitions is the world\'s largest community of data scientists and machine learners. Compete in machine learning competitions, learn from others, and advance your career in data science.',
        url: 'https://kaggle.com/competitions',
        tags: ['Data Science', 'Machine Learning', 'AI', 'Competitions', 'Cash Prizes'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 15670,
        featured: true,
        dateAdded: '2024-01-28',
        features: [
          'Real-world ML problems',
          'Cash and medal prizes',
          'Learning resources',
          'Community discussions',
          'Kernel sharing',
          'Career advancement'
        ],
        pricing: {
          free: 'Full access to competitions and datasets'
        },
        requirements: ['Kaggle account', 'Programming knowledge (Python/R)', 'Internet connection'],
        alternatives: ['DrivenData', 'CodaLab', 'AIcrowd', 'Zindi']
      },
      {
        id: 'topcoder',
        name: 'Topcoder',
        description: 'Competitive programming platform with algorithmic challenges and development competitions.',
        detailedDescription: 'Topcoder is a crowdsourcing marketplace that connects businesses with hard-to-find expertise. The platform also hosts competitive programming contests and provides a community for developers to improve their skills.',
        url: 'https://topcoder.com',
        tags: ['Competitive Programming', 'Algorithms', 'Development', 'Crowdsourcing', 'Skills'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: true,
        rating: 4.3,
        reviewCount: 7890,
        dateAdded: '2024-02-05',
        features: [
          'Algorithmic competitions',
          'Development challenges',
          'Skill-based matching',
          'Global leaderboards',
          'Prize money',
          'Professional opportunities'
        ],
        pricing: {
          free: 'Access to competitions and community features'
        },
        requirements: ['Programming skills', 'Topcoder account', 'Internet connection'],
        alternatives: ['Codeforces', 'AtCoder', 'HackerRank', 'LeetCode']
      },
      {
        id: 'junction',
        name: 'Junction',
        description: 'Europe\'s leading hackathon organizing community with events across multiple cities.',
        detailedDescription: 'Junction is a community that organizes hackathons and other tech events across Europe and beyond. They focus on bringing together diverse talent to solve real-world challenges with technology.',
        url: 'https://junction.fi',
        tags: ['European Hackathons', 'Community', 'Innovation', 'Networking', 'Tech Events'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 3450,
        dateAdded: '2024-02-12',
        location: 'Europe',
        features: [
          'Multi-city events',
          'Corporate partnerships',
          'Diverse challenges',
          'Networking opportunities',
          'Mentorship',
          'Post-event support'
        ],
        pricing: {
          free: 'Free participation in most events'
        },
        requirements: ['Registration for specific events', 'Travel to event locations'],
        alternatives: ['HackZurich', 'TechCrunch Disrupt', 'Startup Weekend', 'AngelHack']
      }
    ]
  },
  {
    id: 'funding',
    title: 'Funding & Grants',
    description: 'Find funding opportunities, grants, and investment resources for your startup or project.',
    icon: '💰',
    gradient: 'from-green-500 to-emerald-600',
    resources: [
      {
        id: 'ycombinator',
        name: 'Y Combinator',
        description: 'World\'s most successful startup accelerator providing funding, mentorship, and network access.',
        detailedDescription: 'Y Combinator is a startup accelerator that has funded over 4,000 companies including Airbnb, Dropbox, Stripe, and Reddit. They provide seed funding, advice, and connections in exchange for equity.',
        url: 'https://ycombinator.com',
        tags: ['Accelerator', 'Seed Funding', 'Mentorship', 'Network', 'Startup'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: false,
        rating: 4.9,
        reviewCount: 2340,
        featured: true,
        dateAdded: '2024-01-20',
        location: 'San Francisco, CA',
        features: [
          '$500K seed funding',
          '3-month program',
          'Extensive mentor network',
          'Demo Day presentation',
          'Alumni network access',
          'Follow-on funding connections'
        ],
        pricing: {
          paid: ['7% equity for $500K investment']
        },
        requirements: ['Early-stage startup', 'Strong founding team', 'Scalable business model'],
        alternatives: ['Techstars', '500 Startups', 'Seedcamp', 'Antler']
      },
      {
        id: 'techstars',
        name: 'Techstars',
        description: 'Global startup accelerator network providing mentorship-driven programs and funding.',
        detailedDescription: 'Techstars is a global network that helps entrepreneurs succeed. They run accelerator programs in dozens of cities worldwide, providing mentorship, funding, and access to a vast network of successful entrepreneurs.',
        url: 'https://techstars.com',
        tags: ['Accelerator', 'Global Network', 'Mentorship', 'Funding', 'Community'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: false,
        rating: 4.7,
        reviewCount: 1890,
        featured: true,
        dateAdded: '2024-01-25',
        location: 'Global',
        features: [
          '$120K investment',
          '3-month accelerator program',
          'Mentor network of 10,000+',
          'Global alumni network',
          'Industry-specific programs',
          'Corporate partnerships'
        ],
        pricing: {
          paid: ['6% equity for $120K investment']
        },
        requirements: ['Scalable startup', 'Committed founding team', 'Market opportunity'],
        alternatives: ['Y Combinator', '500 Startups', 'Plug and Play', 'MassChallenge']
      },
      {
        id: 'kickstarter',
        name: 'Kickstarter',
        description: 'Crowdfunding platform for creative projects, products, and innovative ideas.',
        detailedDescription: 'Kickstarter is a funding platform for creative projects. Everything from films, games, and music to art, design, and technology. Kickstarter is full of ambitious, innovative, and imaginative projects that are brought to life through the direct support of others.',
        url: 'https://kickstarter.com',
        tags: ['Crowdfunding', 'Creative Projects', 'Product Launch', 'Community', 'Innovation'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 8760,
        featured: true,
        dateAdded: '2024-02-01',
        features: [
          'All-or-nothing funding',
          'Global reach',
          'Project discovery',
          'Backer rewards system',
          'Marketing tools',
          'Community engagement'
        ],
        pricing: {
          free: 'Free to launch campaigns',
          paid: ['5% platform fee + payment processing fees on successful campaigns']
        },
        requirements: ['Creative project', 'Compelling campaign', 'Reward tiers'],
        alternatives: ['Indiegogo', 'GoFundMe', 'Fundrazr', 'Crowdfunder']
      },
      {
        id: 'grants-gov',
        name: 'Grants.gov',
        description: 'Official U.S. government portal for finding and applying for federal grants.',
        detailedDescription: 'Grants.gov is the official website of the U.S. government for finding and applying for federal grants. It provides access to over 1,000 grant programs from 26 federal grant-making agencies.',
        url: 'https://grants.gov',
        tags: ['Government Grants', 'Federal Funding', 'Research', 'Non-profit', 'Education'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: true,
        rating: 4.2,
        reviewCount: 3450,
        dateAdded: '2024-02-08',
        location: 'United States',
        features: [
          'Federal grant database',
          'Application management',
          'Eligibility checking',
          'Deadline tracking',
          'Status monitoring',
          'Resource library'
        ],
        pricing: {
          free: 'Free access to all grant opportunities'
        },
        requirements: ['U.S. eligibility', 'SAM.gov registration', 'Detailed applications'],
        alternatives: ['Foundation Directory Online', 'GrantSpace', 'Candid', 'GrantWatch']
      },
      {
        id: 'angel-list',
        name: 'AngelList',
        description: 'Platform connecting startups with angel investors and venture capital firms.',
        detailedDescription: 'AngelList is a platform for startups, angel investors, and job-seekers looking to work at startups. It allows startups to raise money, recruit talent, and connect with investors.',
        url: 'https://angel.co',
        tags: ['Angel Investment', 'Venture Capital', 'Startup Jobs', 'Networking', 'Fundraising'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.3,
        reviewCount: 5670,
        dateAdded: '2024-02-15',
        features: [
          'Investor matching',
          'Fundraising tools',
          'Startup profiles',
          'Job board',
          'Syndicates',
          'Market insights'
        ],
        pricing: {
          free: 'Basic startup and investor profiles',
          paid: ['Premium features and enhanced visibility']
        },
        requirements: ['Startup or investor profile', 'Verification process'],
        alternatives: ['Crunchbase', 'SeedInvest', 'EquityNet', 'Gust']
      }
    ]
  },
  {
    id: 'learning',
    title: 'Learning Platforms',
    description: 'Top educational platforms and courses to develop new skills and advance your career.',
    icon: '📚',
    gradient: 'from-indigo-500 to-blue-600',
    resources: [
      {
        id: 'coursera',
        name: 'Coursera',
        description: 'Online learning platform offering courses, specializations, and degrees from top universities.',
        detailedDescription: 'Coursera partners with top universities and organizations worldwide to offer courses online for anyone to take. With over 4,000 courses and specializations, learners can gain new skills and advance their careers.',
        url: 'https://coursera.org',
        tags: ['Online Courses', 'University Partners', 'Certificates', 'Degrees', 'Skills'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 23450,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'University-level courses',
          'Professional certificates',
          'Degree programs',
          'Hands-on projects',
          'Peer interaction',
          'Mobile learning'
        ],
        pricing: {
          free: 'Audit courses for free',
          paid: ['Coursera Plus: $59/month', 'Individual courses: $39-79', 'Specializations: $39-79/month']
        },
        requirements: ['Internet connection', 'Web browser or mobile app'],
        alternatives: ['edX', 'Udacity', 'Khan Academy', 'LinkedIn Learning']
      },
      {
        id: 'freecodecamp',
        name: 'freeCodeCamp',
        description: 'Free coding bootcamp with interactive lessons, projects, and certifications.',
        detailedDescription: 'freeCodeCamp is a non-profit organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning web development accessible to anyone.',
        url: 'https://freecodecamp.org',
        tags: ['Coding', 'Web Development', 'Free', 'Certifications', 'Projects'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 18920,
        featured: true,
        dateAdded: '2024-01-18',
        features: [
          'Interactive coding lessons',
          'Real-world projects',
          'Free certifications',
          'Community support',
          'Open source',
          'Mobile responsive'
        ],
        pricing: {
          free: 'Completely free platform'
        },
        requirements: ['Web browser', 'Internet connection'],
        alternatives: ['Codecademy', 'The Odin Project', 'Khan Academy', 'Udemy']
      },
      {
        id: 'udemy',
        name: 'Udemy',
        description: 'Marketplace for online learning with courses on technology, business, and personal development.',
        detailedDescription: 'Udemy is an online learning and teaching marketplace with over 213,000 courses and 57 million students. Learn programming, marketing, data science and more.',
        url: 'https://udemy.com',
        tags: ['Online Courses', 'Technology', 'Business', 'Personal Development', 'Skills'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: false,
        rating: 4.5,
        reviewCount: 34560,
        featured: true,
        dateAdded: '2024-01-22',
        features: [
          'Lifetime access to courses',
          'Mobile and TV access',
          'Certificates of completion',
          'Q&A with instructors',
          'Downloadable resources',
          'Regular sales and discounts'
        ],
        pricing: {
          paid: ['Individual courses: $10-200', 'Udemy Business: $360/user/year']
        },
        requirements: ['Internet connection', 'Web browser or mobile app'],
        alternatives: ['Coursera', 'Pluralsight', 'LinkedIn Learning', 'Skillshare']
      },
      {
        id: 'khan-academy',
        name: 'Khan Academy',
        description: 'Free educational platform offering courses in math, science, programming, and more.',
        detailedDescription: 'Khan Academy is a non-profit educational organization created to provide "a free, world-class education for anyone, anywhere". The platform features thousands of educational videos and exercises.',
        url: 'https://khanacademy.org',
        tags: ['Free Education', 'Math', 'Science', 'Programming', 'K-12'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 15670,
        featured: true,
        dateAdded: '2024-01-25',
        features: [
          'Personalized learning',
          'Progress tracking',
          'Interactive exercises',
          'Video lessons',
          'Teacher tools',
          'Mobile apps'
        ],
        pricing: {
          free: 'Completely free for all users'
        },
        requirements: ['Internet connection', 'Web browser or mobile app'],
        alternatives: ['Coursera', 'edX', 'Brilliant', 'Codecademy']
      },
      {
        id: 'pluralsight',
        name: 'Pluralsight',
        description: 'Technology skills platform with courses in software development, IT, and data science.',
        detailedDescription: 'Pluralsight is an American publicly held online education company that offers a variety of video training courses for software developers, IT administrators, and creative professionals.',
        url: 'https://pluralsight.com',
        tags: ['Technology', 'Software Development', 'IT', 'Data Science', 'Cloud'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: false,
        rating: 4.4,
        reviewCount: 8930,
        dateAdded: '2024-02-01',
        features: [
          'Skill assessments',
          'Learning paths',
          'Hands-on labs',
          'Analytics and insights',
          'Offline viewing',
          'Team management tools'
        ],
        pricing: {
          paid: ['Personal: $29/month', 'Premium: $45/month', 'Enterprise: Custom pricing']
        },
        requirements: ['Internet connection', 'Web browser or mobile app'],
        alternatives: ['LinkedIn Learning', 'Udemy', 'A Cloud Guru', 'CBT Nuggets']
      }
    ]
  },
  {
    id: 'communities',
    title: 'Communities & Networking',
    description: 'Join vibrant communities of developers, entrepreneurs, and innovators to learn and grow together.',
    icon: '👥',
    gradient: 'from-pink-500 to-rose-600',
    resources: [
      {
        id: 'github',
        name: 'GitHub',
        description: 'World\'s largest platform for version control, collaboration, and open source development.',
        detailedDescription: 'GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 73 million developers.',
        url: 'https://github.com',
        tags: ['Version Control', 'Open Source', 'Collaboration', 'Code Hosting', 'Development'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 45670,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Git repositories',
          'Issue tracking',
          'Pull requests',
          'GitHub Actions (CI/CD)',
          'Project management',
          'Community features'
        ],
        pricing: {
          free: 'Unlimited public repositories',
          paid: ['GitHub Pro: $4/month', 'GitHub Team: $4/user/month', 'GitHub Enterprise: $21/user/month']
        },
        requirements: ['Git knowledge', 'Internet connection', 'GitHub account'],
        alternatives: ['GitLab', 'Bitbucket', 'SourceForge', 'Codeberg']
      },
      {
        id: 'stackoverflow',
        name: 'Stack Overflow',
        description: 'The largest online community for programmers to learn, share knowledge, and build careers.',
        detailedDescription: 'Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers. More than 50 million professional and aspiring programmers visit Stack Overflow each month.',
        url: 'https://stackoverflow.com',
        tags: ['Q&A', 'Programming', 'Community', 'Knowledge Sharing', 'Problem Solving'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 28930,
        featured: true,
        dateAdded: '2024-01-18',
        features: [
          'Q&A platform',
          'Reputation system',
          'Tag-based organization',
          'Job board',
          'Developer survey',
          'Teams collaboration'
        ],
        pricing: {
          free: 'Full access to Q&A platform',
          paid: ['Stack Overflow for Teams: $5/user/month']
        },
        requirements: ['Internet connection', 'Programming knowledge helpful'],
        alternatives: ['Reddit r/programming', 'Dev.to', 'Quora', 'GitHub Discussions']
      },
      {
        id: 'discord-dev-communities',
        name: 'Discord Developer Communities',
        description: 'Real-time chat communities for developers across various programming languages and technologies.',
        detailedDescription: 'Discord hosts thousands of developer communities where programmers can chat in real-time, share code, get help, and network with peers. Popular servers include The Programmer\'s Hangout, Reactiflux, and many language-specific communities.',
        url: 'https://discord.com',
        tags: ['Real-time Chat', 'Community', 'Networking', 'Programming', 'Support'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 12340,
        dateAdded: '2024-01-22',
        features: [
          'Real-time messaging',
          'Voice channels',
          'Screen sharing',
          'Bot integrations',
          'Community moderation',
          'Mobile and desktop apps'
        ],
        pricing: {
          free: 'Full access to communities',
          paid: ['Discord Nitro: $9.99/month for enhanced features']
        },
        requirements: ['Discord account', 'Internet connection'],
        alternatives: ['Slack communities', 'Telegram groups', 'IRC channels', 'Matrix']
      },
      {
        id: 'dev-to',
        name: 'DEV Community',
        description: 'A constructive and inclusive social network for software developers to share knowledge.',
        detailedDescription: 'DEV is a community of software developers getting together to help one another out. The software industry relies on collaboration and networked learning. We provide a place for that to happen.',
        url: 'https://dev.to',
        tags: ['Blogging', 'Community', 'Knowledge Sharing', 'Networking', 'Learning'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 9870,
        featured: true,
        dateAdded: '2024-01-25',
        features: [
          'Article publishing',
          'Community discussions',
          'Tag-based content',
          'Reading lists',
          'Job postings',
          'Podcast hosting'
        ],
        pricing: {
          free: 'Completely free platform'
        },
        requirements: ['Internet connection', 'DEV account for posting'],
        alternatives: ['Medium', 'Hashnode', 'CodeNewbie Community', 'IndieHackers']
      },
      {
        id: 'indie-hackers',
        name: 'Indie Hackers',
        description: 'Community of entrepreneurs building profitable online businesses and sharing their journeys.',
        detailedDescription: 'Indie Hackers is a community where the founders of profitable businesses and side projects can share their stories transparently, and where entrepreneurs can come to read and learn from those examples.',
        url: 'https://indiehackers.com',
        tags: ['Entrepreneurship', 'Startups', 'Side Projects', 'Revenue', 'Community'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 6540,
        featured: true,
        dateAdded: '2024-02-01',
        features: [
          'Founder interviews',
          'Community discussions',
          'Product launches',
          'Milestone sharing',
          'Networking events',
          'Resource library'
        ],
        pricing: {
          free: 'Full access to community and content'
        },
        requirements: ['Internet connection', 'Indie Hackers account'],
        alternatives: ['Product Hunt', 'Hacker News', 'Reddit r/entrepreneur', 'Founder Groups']
      }
    ]
  },
  {
    id: 'open-source',
    title: 'Open Source Projects',
    description: 'Contribute to meaningful open source projects and build your portfolio while helping others.',
    icon: '🔓',
    gradient: 'from-teal-500 to-cyan-600',
    resources: [
      {
        id: 'first-timers-only',
        name: 'First Timers Only',
        description: 'Curated list of beginner-friendly open source projects perfect for first-time contributors.',
        detailedDescription: 'First Timers Only is an initiative to help newcomers make their first contribution to open source. It features projects that have issues specifically labeled for beginners and provides guidance on how to get started.',
        url: 'https://firsttimersonly.com',
        tags: ['Beginner Friendly', 'First Contribution', 'Learning', 'Community', 'Mentorship'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 3450,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'Beginner-friendly projects',
          'Detailed contribution guides',
          'Mentorship opportunities',
          'Community support',
          'Learning resources',
          'Progress tracking'
        ],
        pricing: {
          free: 'Completely free resource'
        },
        requirements: ['Basic Git knowledge', 'GitHub account', 'Programming basics'],
        alternatives: ['Good First Issues', 'Up For Grabs', 'CodeTriage', 'Awesome for Beginners']
      },
      {
        id: 'hacktoberfest',
        name: 'Hacktoberfest',
        description: 'Annual month-long celebration of open source software encouraging global participation.',
        detailedDescription: 'Hacktoberfest is a month-long celebration of open source software run by DigitalOcean. During the month of October, participants are encouraged to make four pull requests to open source projects to earn limited edition swag.',
        url: 'https://hacktoberfest.com',
        tags: ['Open Source', 'Global Event', 'Contributions', 'Swag', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 8920,
        featured: true,
        dateAdded: '2024-01-25',
        features: [
          'Global participation',
          'Swag rewards',
          'Project discovery',
          'Community events',
          'Contribution tracking',
          'Learning resources'
        ],
        pricing: {
          free: 'Free participation and rewards'
        },
        requirements: ['GitHub account', 'Basic programming knowledge', 'October participation'],
        alternatives: ['Google Summer of Code', 'Outreachy', 'MLH Fellowship', 'Season of Docs']
      },
      {
        id: 'awesome-lists',
        name: 'Awesome Lists',
        description: 'Curated lists of awesome resources, tools, and projects across various technologies.',
        detailedDescription: 'Awesome Lists is a collection of curated lists about all kinds of interesting topics. From programming languages to databases, from design to DevOps, there\'s an awesome list for almost everything.',
        url: 'https://awesome.re',
        tags: ['Curated Lists', 'Resources', 'Tools', 'Learning', 'Discovery'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 5670,
        dateAdded: '2024-02-01',
        features: [
          'Comprehensive resource lists',
          'Community curation',
          'Regular updates',
          'Easy navigation',
          'Contribution guidelines',
          'Quality standards'
        ],
        pricing: {
          free: 'All lists are freely accessible'
        },
        requirements: ['Internet connection', 'GitHub for contributions'],
        alternatives: ['GitHub Topics', 'Libraries.io', 'Open Source Guides', 'Choose an Open Source License']
      },
      {
        id: 'google-summer-of-code',
        name: 'Google Summer of Code',
        description: 'Global program offering stipends to university students for open source development.',
        detailedDescription: 'Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3-month programming project during their break from school.',
        url: 'https://summerofcode.withgoogle.com',
        tags: ['Student Program', 'Stipend', 'Mentorship', 'Open Source', 'Google'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.9,
        reviewCount: 4320,
        featured: true,
        dateAdded: '2024-02-05',
        features: [
          'Paid internship program',
          'Mentor guidance',
          'Real-world projects',
          'Global participation',
          'Career development',
          'Open source contribution'
        ],
        pricing: {
          free: 'Students receive stipends for participation'
        },
        requirements: ['University student status', 'Programming skills', 'Application process'],
        alternatives: ['Outreachy', 'MLH Fellowship', 'Linux Foundation Mentorship', 'Season of Docs']
      },
      {
        id: 'mozilla-open-source',
        name: 'Mozilla Open Source',
        description: 'Contribute to Mozilla\'s mission of keeping the internet open and accessible to all.',
        detailedDescription: 'Mozilla is a global community of technologists, thinkers, and builders working together to keep the Internet alive and accessible. Join thousands of contributors working on Firefox, Thunderbird, and other Mozilla projects.',
        url: 'https://mozilla.org/contribute',
        tags: ['Mozilla', 'Firefox', 'Web Standards', 'Privacy', 'Internet Health'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 2890,
        dateAdded: '2024-02-10',
        features: [
          'Multiple project options',
          'Mentorship programs',
          'Community events',
          'Impact on web standards',
          'Learning opportunities',
          'Global community'
        ],
        pricing: {
          free: 'Volunteer contribution opportunities'
        },
        requirements: ['Programming or design skills', 'Mozilla account', 'Commitment to open web'],
        alternatives: ['Apache Foundation', 'Linux Foundation', 'GNOME', 'KDE']
      }
    ]
  }
];