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
    "id": "aiTechTools",
    "title": "AI & Tech Tools",
    "description": "Cutting-edge AI tools and technology platforms to supercharge your productivity",
    "icon": "🤖",
    "gradient": "from-blue-500 to-purple-600",
    "resources": [
      {
        "id": "chatgpt",
        "name": "ChatGPT",
        "description": "ChatGPT is an AI chatbot by OpenAI for writing, coding, and Q&A; it's the world's most popular AI app with ~200 million users.",
        "detailedDescription": "ChatGPT is a state-of-the-art conversational AI developed by OpenAI that can assist with a wide range of tasks including writing, coding, analysis, creative projects, and learning. Built on the GPT architecture, it uses advanced language models to understand context and provide human-like responses across multiple domains.",
        "url": "https://openai.com/chatgpt",
        "tags": ["Free", "Paid", "AI", "Students", "Professionals"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 15420,
        "featured": true,
        "dateAdded": "2024-01-15",
        "features": [
          "Natural language conversations",
          "Code generation and debugging",
          "Creative writing assistance",
          "Data analysis and interpretation",
          "Multiple language support",
          "Context-aware responses",
          "Image analysis (GPT-4V)",
          "Web browsing capabilities",
          "Plugin ecosystem"
        ],
        "pricing": {
          "free": "Limited usage with GPT-3.5",
          "paid": ["ChatGPT Plus: $20/month for GPT-4 access", "ChatGPT Team: $25/user/month", "ChatGPT Enterprise: Custom pricing"]
        },
        "requirements": ["Web browser", "Internet connection", "OpenAI account"],
        "alternatives": ["Claude", "Gemini", "Copilot", "Perplexity"]
      },
      {
        "id": "dalle3",
        "name": "DALL·E 3",
        "description": "DALL·E 3 is OpenAI's advanced text-to-image generation model (launched 2023), enabling creation of detailed images from text prompts.",
        "detailedDescription": "DALL·E 3 represents the latest advancement in AI-powered image generation from OpenAI. It can create highly detailed, contextually accurate images from natural language descriptions, with improved understanding of nuance and detail compared to previous versions.",
        "url": "https://openai.com/dall-e-3",
        "tags": ["Free", "Paid", "AI", "Creators"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 8920,
        "featured": true,
        "dateAdded": "2024-01-20",
        "features": [
          "Text-to-image generation",
          "High-resolution outputs",
          "Style consistency",
          "Improved prompt adherence",
          "Safety filters",
          "Commercial usage rights"
        ],
        "pricing": {
          "free": "Limited generations via ChatGPT or Microsoft Copilot",
          "paid": ["ChatGPT Plus: $20/month includes DALL·E 3", "API usage: $0.040-0.120 per image"]
        },
        "requirements": ["OpenAI account or Microsoft account", "Internet connection"],
        "alternatives": ["Midjourney", "Stable Diffusion", "Adobe Firefly", "Leonardo AI"]
      },
      {
        "id": "googleColab",
        "name": "Google Colab",
        "description": "Google Colaboratory (Colab) offers free cloud-hosted Jupyter notebooks with GPU/TPU support, ideal for machine learning and data science education.",
        "detailedDescription": "Google Colaboratory is a free cloud service that supports free GPU and TPU access for machine learning and data science projects. It provides a Jupyter notebook environment that runs entirely in the cloud, making it perfect for education, research, and prototyping.",
        "url": "https://colab.research.google.com",
        "tags": ["Free", "AI", "Education", "Students", "DataScientists"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 12340,
        "featured": true,
        "dateAdded": "2024-01-25",
        "features": [
          "Free GPU and TPU access",
          "Pre-installed ML libraries",
          "Google Drive integration",
          "Collaborative editing",
          "Easy sharing and publishing",
          "No setup required",
          "Jupyter notebook interface"
        ],
        "pricing": {
          "free": "Free tier with usage limits",
          "paid": ["Colab Pro: $9.99/month", "Colab Pro+: $49.99/month"]
        },
        "requirements": ["Google account", "Web browser", "Basic Python knowledge"],
        "alternatives": ["Jupyter Notebook", "Kaggle Kernels", "Azure Notebooks", "Paperspace Gradient"]
      },
      {
        "id": "copilot",
        "name": "GitHub Copilot",
        "description": "GitHub Copilot is an AI pair-programmer (by GitHub/OpenAI) that autocompletes code and suggests functions in IDEs like VS Code.",
        "detailedDescription": "GitHub Copilot is an AI-powered code completion tool that helps developers write code faster and with fewer errors. Trained on billions of lines of code, it provides intelligent suggestions for entire functions, complex algorithms, and boilerplate code across dozens of programming languages.",
        "url": "https://github.com/features/copilot",
        "tags": ["Paid", "Developers", "AI", "Coding"],
        "difficulty": "intermediate",
        "type": "tool",
        "isFree": false,
        "rating": 4.5,
        "reviewCount": 9870,
        "featured": true,
        "dateAdded": "2024-02-01",
        "features": [
          "Real-time code suggestions",
          "Multi-language support",
          "IDE integration",
          "Context-aware completions",
          "Function generation",
          "Code explanation",
          "Test generation",
          "Documentation writing"
        ],
        "pricing": {
            "free": "Free for verified students and maintainers of popular open source projects.",
            "paid": ["Individual: $10/month", "Business: $19/user/month", "Enterprise: $39/user/month"]
        },
        "requirements": ["Compatible IDE (VS Code, JetBrains, etc.)", "GitHub account", "Internet connection"],
        "alternatives": ["Tabnine", "Codeium", "Amazon CodeWhisperer", "Replit Ghostwriter"]
      },
      {
        "id": "huggingFaceHub",
        "name": "Hugging Face Hub",
        "description": "Hugging Face Hub is an open platform hosting 1.7M+ machine learning models, 400k datasets, and demo apps for AI practitioners to share and collaborate.",
        "detailedDescription": "Hugging Face Hub is the largest open-source platform for machine learning models, datasets, and applications. It serves as a central repository where researchers and developers can discover, use, and contribute to the latest advances in AI and machine learning.",
        "url": "https://huggingface.co",
        "tags": ["Free", "AI", "Developers", "MachineLearning", "Researchers"],
        "difficulty": "advanced",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 6540,
        "featured": true,
        "dateAdded": "2024-02-05",
        "features": [
          "Pre-trained model repository",
          "Dataset hosting and discovery",
          "Model inference API",
          "Spaces for ML demos",
          "Transformers library integration",
          "Version control for ML",
          "Community collaboration tools"
        ],
        "pricing": {
          "free": "Free access to public models and datasets",
          "paid": ["Pro: $9/month", "Enterprise Hub: Custom pricing"]
        },
        "requirements": ["Python knowledge", "Machine learning basics", "Internet connection"],
        "alternatives": ["TensorFlow Hub", "PyTorch Hub", "Kaggle", "Papers with Code"]
      },
      {
        "id": "figma",
        "name": "Figma",
        "description": "Figma is a collaborative web-based design and prototyping tool used by designers and developers; it offers a free tier (including free access for students/educators).",
        "detailedDescription": "Figma is a cloud-based design tool that enables real-time collaboration for UI/UX design, prototyping, and design systems. It has revolutionized the design workflow by making design accessible through web browsers while maintaining professional-grade capabilities.",
        "url": "https://www.figma.com",
        "tags": ["Free", "Paid", "Design", "Students", "Creators"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 18920,
        "featured": true,
        "dateAdded": "2024-02-10",
        "features": [
          "Real-time collaboration",
          "Vector graphics editing",
          "Prototyping and animations",
          "Design systems and components",
          "Developer handoff tools",
          "Plugin ecosystem",
          "Version history",
          "Cross-platform compatibility"
        ],
        "pricing": {
          "free": "Free for up to 3 projects; free for students/educators",
          "paid": ["Professional: $12/editor/month", "Organization: $45/editor/month", "Enterprise: $75/editor/month"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Adobe XD", "Sketch", "InVision", "Framer"]
      },
      {
        "id": "claude",
        "name": "Claude",
        "description": "Claude is Anthropic's AI assistant capable of complex reasoning, analysis, coding, and creative tasks with strong safety features and contextual understanding.",
        "detailedDescription": "Claude is an AI assistant created by Anthropic to be helpful, harmless, and honest. It excels at analysis, writing, math, coding, and creative tasks while maintaining strong safety principles and constitutional AI training.",
        "url": "https://claude.ai",
        "tags": ["Free", "Paid", "AI", "Students", "Professionals"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 7890,
        "featured": true,
        "dateAdded": "2024-02-15",
        "features": [
          "Long-form conversations",
          "Document analysis",
          "Code generation and review",
          "Creative writing",
          "Mathematical reasoning",
          "Safety-focused responses",
          "Large context window",
          "Ethical AI principles"
        ],
        "pricing": {
          "free": "Limited usage",
          "paid": ["Claude Pro: $20/month for increased usage", "Claude 3 API: Pay-per-use"]
        },
        "requirements": ["Web browser", "Internet connection", "Anthropic account"],
        "alternatives": ["ChatGPT", "Gemini", "Perplexity", "Character.AI"]
      },
      {
        "id": "gemini",
        "name": "Google Gemini",
        "description": "Google Gemini is a multimodal AI model that can understand and generate text, images, audio, and code across various applications and platforms.",
        "detailedDescription": "Google Gemini is Google's most capable AI model, designed to be multimodal from the ground up. It can seamlessly understand and operate across text, code, audio, image, and video, making it highly versatile for various applications.",
        "url": "https://gemini.google.com",
        "tags": ["Free", "Paid", "AI", "Students", "Professionals"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.4,
        "reviewCount": 5670,
        "featured": false,
        "dateAdded": "2024-02-20",
        "features": [
          "Multimodal understanding",
          "Code generation and debugging",
          "Image and video analysis",
          "Real-time information access",
          "Google Workspace integration",
          "Advanced reasoning capabilities",
          "Multiple model sizes"
        ],
        "pricing": {
          "free": "Gemini with usage limits",
          "paid": ["Gemini Advanced: $19.99/month (includes 2TB storage)"]
        },
        "requirements": ["Google account", "Web browser", "Internet connection"],
        "alternatives": ["ChatGPT", "Claude", "Copilot", "Perplexity"]
      },
      {
        "id": "midjourney",
        "name": "Midjourney",
        "description": "Midjourney is an AI art generator that creates stunning, artistic images from text prompts using advanced diffusion models.",
        "detailedDescription": "Midjourney is an independent research lab that produces an AI program that creates images from textual descriptions. Known for its artistic and dreamlike aesthetic, it has become one of the most popular AI art generation tools among artists, designers, and creative professionals.",
        "url": "https://www.midjourney.com",
        "tags": ["Paid", "AI", "Creators", "Artists"],
        "difficulty": "intermediate",
        "type": "tool",
        "isFree": false,
        "rating": 4.8,
        "reviewCount": 11230,
        "featured": true,
        "dateAdded": "2024-02-25",
        "features": [
          "High-quality artistic output",
          "Style variations and remixing",
          "Upscaling capabilities",
          "Community gallery",
          "Discord integration",
          "Advanced prompt engineering",
          "Consistent character generation"
        ],
        "pricing": {
          "paid": ["Basic: $10/month", "Standard: $30/month", "Pro: $60/month", "Mega: $120/month"]
        },
        "requirements": ["Discord account", "Internet connection"],
        "alternatives": ["DALL-E 3", "Stable Diffusion", "Adobe Firefly", "Leonardo AI"]
      },
      {
        "id": "replit",
        "name": "Replit",
        "description": "Replit is a cloud-based IDE that supports 50+ programming languages, offering real-time collaboration, hosting, and AI-powered coding assistance.",
        "detailedDescription": "Replit is a comprehensive cloud development environment that allows you to code, collaborate, and deploy projects entirely in the browser. With support for over 50 programming languages and built-in AI assistance, it's perfect for learning, prototyping, and building applications.",
        "url": "https://replit.com",
        "tags": ["Free", "Paid", "Coding", "Students", "Developers"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 8760,
        "featured": true,
        "dateAdded": "2024-03-01",
        "features": [
          "Multi-language support",
          "Real-time collaboration",
          "Instant deployment",
          "AI-powered coding assistance",
          "Package management",
          "Database integration",
          "Version control",
          "Mobile app development"
        ],
        "pricing": {
          "free": "Free tier with limitations",
          "paid": ["Replit Core: $20/month", "Teams: $20/user/month"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["CodePen", "Glitch", "StackBlitz", "CodeSandbox"]
      },
      {
        "id": "codepen",
        "name": "CodePen",
        "description": "CodePen is an online code editor and social development environment for front-end designers and developers to showcase HTML, CSS, and JavaScript.",
        "detailedDescription": "CodePen is a social development environment primarily for front-end designers and developers. It's a place to build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration. Users create 'Pens', which are snippets of HTML, CSS, and JavaScript, in a live-updating online editor.",
        "url": "https://codepen.io",
        "tags": ["Free", "Paid", "Coding", "Developers", "Frontend"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 15200,
        "featured": true,
        "dateAdded": "2024-03-05",
        "features": [
            "Live code preview",
            "Project and Pen hosting",
            "Asset hosting",
            "Collaborative mode",
            "Template creation",
            "Community showcase"
        ],
        "pricing": {
            "free": "Free plan with public Pens and projects",
            "paid": ["PRO: Starts at $8/month for private Pens, asset hosting, and more"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["JSFiddle", "CodeSandbox", "StackBlitz", "Replit"]
      },
      {
        "id": "notion",
        "name": "Notion",
        "description": "Notion is an all-in-one workspace that combines notes, documents, databases, and project management with AI-powered features for productivity.",
        "detailedDescription": "Notion is a versatile productivity application that provides a unified workspace for notes, knowledge bases, task management, and databases. Its block-based system allows users to create customized layouts and systems for personal organization or team collaboration, enhanced by integrated AI features for writing and summarization.",
        "url": "https://www.notion.so",
        "tags": ["Free", "Paid", "Productivity", "Students", "Professionals"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 25500,
        "featured": true,
        "dateAdded": "2024-03-10",
        "features": [
            "Connected workspace",
            "Flexible databases (tables, boards, lists)",
            "Template gallery",
            "Real-time collaboration",
            "Notion AI assistant",
            "API for integrations"
        ],
        "pricing": {
            "free": "Free for personal use with limits",
            "paid": ["Plus: $8/user/month", "Business: $15/user/month", "Enterprise: Custom pricing"]
        },
        "requirements": ["Web browser", "Desktop or mobile app", "Internet connection"],
        "alternatives": ["Coda", "Airtable", "Obsidian", "ClickUp"]
      },
      {
        "id": "canva",
        "name": "Canva",
        "description": "Canva is a user-friendly graphic design platform with AI-powered tools, templates, and collaborative features for creating visual content.",
        "detailedDescription": "Canva is an online design and visual communication platform that makes it easy to create stunning graphics, presentations, videos, and more. With its drag-and-drop interface, vast library of templates and stock assets, and AI-powered 'Magic Studio' features, it empowers both non-designers and professionals to produce high-quality content.",
        "url": "https://www.canva.com",
        "tags": ["Free", "Paid", "Design", "Students", "Creators"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 31000,
        "featured": true,
        "dateAdded": "2024-03-12",
        "features": [
            "Drag-and-drop editor",
            "Extensive template library",
            "Stock photos, videos, and graphics",
            "AI-powered design tools (Magic Studio)",
            "Brand Kits for consistency",
            "Team collaboration features"
        ],
        "pricing": {
            "free": "Free plan with extensive features",
            "paid": ["Canva Pro: $14.99/month", "Canva for Teams: $29.99/month for 5 people"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Adobe Express", "Figma", "Visme", "Piktochart"]
      },
      {
        "id": "obsidian",
        "name": "Obsidian",
        "description": "Obsidian is a powerful knowledge management app that uses linked notes and graph visualization to help organize and connect ideas.",
        "detailedDescription": "Obsidian is a private and flexible knowledge base that works on top of a local folder of plain text files. It allows users to create a 'second brain' by connecting notes through bidirectional links, visualizing these connections in a graph view, and customizing their workflow with a vast ecosystem of community plugins.",
        "url": "https://obsidian.md",
        "tags": ["Free", "Paid", "Productivity", "Students", "Researchers"],
        "difficulty": "intermediate",
        "type": "app",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 8500,
        "featured": false,
        "dateAdded": "2024-03-15",
        "features": [
            "Local-first file storage",
            "Bidirectional linking",
            "Graph view for visualizing connections",
            "Markdown support",
            "Extensive plugin ecosystem",
            "Customizable themes"
        ],
        "pricing": {
            "free": "Free for personal use",
            "paid": ["Commercial License: $50/user/year", "Optional Add-ons: Sync ($8/month), Publish ($16/month)"]
        },
        "requirements": ["Desktop app (Windows, macOS, Linux)", "Mobile app"],
        "alternatives": ["Roam Research", "Logseq", "Notion", "TiddlyWiki"]
      },
      {
        "id": "synthesia",
        "name": "Synthesia",
        "description": "Synthesia is an AI video generation platform that creates professional videos with AI avatars and voiceovers from text scripts.",
        "detailedDescription": "Synthesia allows users to create professional-quality videos by simply typing in text. The platform generates a video featuring a realistic AI avatar speaking the script in one of over 120 languages. It's widely used for corporate training, marketing, and communication videos, eliminating the need for cameras and microphones.",
        "url": "https://www.synthesia.io",
        "tags": ["Paid", "AI", "Video", "Creators", "Businesses"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": false,
        "rating": 4.6,
        "reviewCount": 5200,
        "featured": false,
        "dateAdded": "2024-03-18",
        "features": [
            "AI avatars and voices",
            "Text-to-video generation",
            "120+ languages and accents",
            "Screen recorder",
            "Video templates",
            "Custom avatars (Enterprise)"
        ],
        "pricing": {
            "paid": ["Creator: $22/month", "Business: Custom pricing"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["HeyGen", "D-ID", "RunwayML", "Colossyan"]
      },
      {
        "id": "deepseek",
        "name": "DeepSeek",
        "description": "DeepSeek is an AI platform offering free access to its advanced AI models (like DeepSeek-V3 and R1). It is marketed as an 'all-in-one AI tool' for tasks such as chat and code generation, providing an intelligent model for free use.",
        "detailedDescription": "DeepSeek is an AI research company that offers open access to its advanced large language models. The platform provides a free, powerful AI chatbot and code assistant built on its proprietary models, which are particularly strong in coding and reasoning tasks. It aims to provide a high-performance alternative to other leading AI tools.",
        "url": "https://deepseek.com/",
        "tags": ["Free", "AI", "Students", "Researchers", "Developers"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.3,
        "reviewCount": 1800,
        "featured": false,
        "dateAdded": "2024-03-20",
        "features": [
          "Advanced AI chat capabilities",
          "Proficient code generation model",
          "Free access to powerful proprietary models",
          "API access for developers",
          "Clean, simple user interface"
        ],
        "pricing": {
          "free": "Free usage of the web-based chat tool",
          "paid": ["API usage is metered with a generous free tier"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["ChatGPT (free tier)", "Claude (free tier)", "Perplexity", "Phind"]
      },
      {
        "id": "grok",
        "name": "Grok (xAI)",
        "description": "Grok is an AI chatbot developed by xAI (Elon Musk's AI company) that provides real-time, unfiltered answers. It supports advanced reasoning, coding assistance, and image processing capabilities in a conversational interface.",
        "detailedDescription": "Grok is an AI developed by xAI, designed to have a bit of wit and a rebellious streak. Its key advantage is its real-time knowledge of the world via the X (formerly Twitter) platform. It aims to answer questions with a touch of humor and is positioned as a less-filtered alternative to other AI chatbots.",
        "url": "https://x.ai/grok",
        "tags": ["Paid", "AI", "Developers", "Professionals"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": false,
        "rating": 4.2,
        "reviewCount": 4800,
        "featured": false,
        "dateAdded": "2024-03-22",
        "features": [
          "Real-time information from the X platform",
          "Unfiltered, witty responses",
          "Conversational 'Fun Mode'",
          "Code generation",
          "Integrated into X platform"
        ],
        "pricing": {
          "paid": ["Included with X Premium+ subscription (approx. $16/month)"]
        },
        "requirements": ["An X (Twitter) account with a Premium+ subscription"],
        "alternatives": ["ChatGPT", "Gemini", "Perplexity", "Claude"]
      },
      {
        "id": "runwayml",
        "name": "RunwayML",
        "description": "RunwayML provides AI-powered tools for image and video generation, branding itself as 'tools for human imagination.' Its platform includes fast, controllable AI models that let users create high-fidelity visual content in real time.",
        "detailedDescription": "RunwayML is a comprehensive AI-powered creative suite for artists, designers, and filmmakers. It offers a wide array of 'AI Magic Tools,' including state-of-the-art text-to-video (Gen-2), video-to-video, image generation, and advanced video editing features like inpainting and motion tracking, all within a web-based interface.",
        "url": "https://runwayml.com/",
        "tags": ["Free", "Paid", "AI", "Students", "Creators", "Designers"],
        "difficulty": "intermediate",
        "type": "tool",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 7100,
        "featured": false,
        "dateAdded": "2024-03-25",
        "features": [
          "Text-to-Video generation (Gen-2)",
          "Video-to-Video and Image-to-Video",
          "AI video editing tools (inpainting, slow-mo)",
          "Text-to-Image and Image-to-Image",
          "Real-time collaboration",
          "AI training capabilities"
        ],
        "pricing": {
          "free": "Free plan with limited credits",
          "paid": ["Standard: $12/user/month", "Pro: $28/user/month", "Unlimited: $76/user/month"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Pika Labs", "Synthesia", "Adobe Firefly", "Kaiber"]
      },
      {
        "id": "filmora",
        "name": "Filmora (Wondershare)",
        "description": "Filmora is a video editing software with AI-powered features for creating and enhancing videos. It offers intuitive editing tools that help beginners and experts produce high-quality visual content with minimal effort.",
        "detailedDescription": "Wondershare Filmora is a user-friendly yet powerful video editing software designed for a wide range of users. It balances a simple, intuitive interface with a rich set of features, including AI-powered tools like AI Copilot Editing, AI Smart Cutout, and text-based editing, making video creation faster and more accessible.",
        "url": "https://filmora.wondershare.com/",
        "tags": ["Free", "Paid", "Students", "Creators", "Video"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 12500,
        "featured": false,
        "dateAdded": "2024-03-28",
        "features": [
          "Intuitive timeline editing",
          "AI Copilot for editing suggestions",
          "AI Smart Cutout and masking",
          "Text-based video editing",
          "Large library of effects, transitions, and titles",
          "Screen recording and webcam capture"
        ],
        "pricing": {
          "free": "Free trial with a watermark on exports",
          "paid": ["Subscription plans (from ~$29.99/quarter) and Perpetual License available"]
        },
        "requirements": ["Desktop app (Windows, macOS)"],
        "alternatives": ["CapCut", "DaVinci Resolve", "Adobe Premiere Pro", "Final Cut Pro"]
      },
      {
        "id": "opusclip",
        "name": "OpusClip",
        "description": "OpusClip is an AI-driven video editing tool for social media. It can automatically convert long videos into multiple short, engaging clips with captions and formatting, publishing them to platforms in one click.",
        "detailedDescription": "OpusClip is a generative AI video repurposing tool that transforms long videos into short, viral-ready clips with a single click. Its AI analyzes videos to identify the most compelling hooks, extracts relevant segments, and reformats them with dynamic captions, auto-reframing, and a virality score, streamlining content creation for social media.",
        "url": "https://www.opus.pro/",
        "tags": ["Free", "Paid", "AI", "Creators", "Influencers"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 6200,
        "featured": false,
        "dateAdded": "2024-04-01",
        "features": [
          "AI-powered video clipping",
          "Virality score analysis",
          "Auto-reframing for mobile",
          "Dynamic animated captions",
          "Trend analysis",
          "One-click posting to social platforms"
        ],
        "pricing": {
          "free": "Free plan with limited monthly credits",
          "paid": ["Starter: $9/month", "Pro: $29/month"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Vizard", "Clipchamp", "Kapwing", "Descript"]
      },
      {
        "id": "kaggle",
        "name": "Kaggle",
        "description": "Kaggle (by Google) is a platform and community for data science and machine learning. It offers datasets, interactive notebooks, courses, and competitions where learners and professionals can explore data and build models (Kaggle has over 461k datasets).",
        "detailedDescription": "Kaggle is an online community and platform for data scientists and machine learning practitioners. It allows users to find and publish datasets, explore and build models in a web-based data science environment, work with other data scientists, and enter competitions to solve real-world data science challenges.",
        "url": "https://www.kaggle.com/",
        "tags": ["Free", "AI", "Students", "DataScientists", "Researchers"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 14000,
        "featured": true,
        "dateAdded": "2024-04-05",
        "features": [
          "Data science competitions",
          "Vast repository of public datasets",
          "Free cloud-based notebooks (Kernels) with GPU/TPU",
          "Community forums and discussions",
          "Free micro-courses on data science topics"
        ],
        "pricing": {
          "free": "Completely free to use"
        },
        "requirements": ["Google account", "Web browser", "Internet connection"],
        "alternatives": ["Hugging Face", "Google Colab", "DrivenData", "Zindi"]
      },
      {
        "id": "github",
        "name": "GitHub",
        "description": "GitHub is a web-based platform for version control and collaboration on software projects. Developers can host code repositories, review code, and manage projects together. It is called 'the world's most widely adopted AI-powered developer platform'.",
        "detailedDescription": "GitHub is the leading development platform for building, shipping, and maintaining software. It provides distributed version control using Git, plus project management, issue tracking, CI/CD automation via GitHub Actions, and a collaborative environment for code review. It's the home for millions of open-source projects.",
        "url": "https://github.com/",
        "tags": ["Free", "Paid", "Students", "Developers", "Coding"],
        "difficulty": "beginner",
        "type": "platform",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 28000,
        "featured": true,
        "dateAdded": "2024-04-08",
        "features": [
          "Git version control hosting",
          "Pull requests for code review",
          "Integrated issue tracking",
          "GitHub Actions for CI/CD",
          "Package registry",
          "AI-powered assistance with GitHub Copilot"
        ],
        "pricing": {
          "free": "Free plan with unlimited public/private repositories",
          "paid": ["Team: $4/user/month", "Enterprise: $21/user/month"]
        },
        "requirements": ["Git knowledge", "Internet connection"],
        "alternatives": ["GitLab", "Bitbucket", "SourceForge", "Azure DevOps"]
      },
      {
        "id": "github_student_pack",
        "name": "GitHub Student Developer Pack",
        "description": "The GitHub Student Developer Pack provides students with free access to a bundle of developer tools and services (normally paid) for learning and projects. It includes premium offerings from GitHub and partners to help students 'ship software like a pro'.",
        "detailedDescription": "The GitHub Student Developer Pack is a unique offering for students that bundles dozens of free developer tools and services from GitHub's partners. It includes everything from cloud hosting credits and free domain names to access to pro-level design and development software, providing immense value for students learning to code.",
        "url": "https://education.github.com/pack",
        "tags": ["Free", "Students", "Developers", "Education"],
        "difficulty": "beginner",
        "type": "service",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 11500,
        "featured": false,
        "dateAdded": "2024-04-10",
        "features": [
          "Free access to dozens of developer tools",
          "Cloud hosting credits (e.g., Azure, DigitalOcean)",
          "Free domain names",
          "Access to premium learning resources",
          "Includes GitHub Pro for free"
        ],
        "pricing": {
          "free": "Completely free for verified students"
        },
        "requirements": ["Verifiable student status", "GitHub account"],
        "alternatives": ["There are no direct alternatives to this specific bundle"]
      },
      {
        "id": "vscode",
        "name": "Visual Studio Code",
        "description": "Visual Studio Code (VS Code) is a free, open-source code editor by Microsoft. It is lightweight yet powerful, with AI-enhanced features (like IntelliSense and GitHub Copilot support) and a vast extension ecosystem, described as 'Your code editor. Redefined with AI'.",
        "detailedDescription": "Visual Studio Code is a free, lightweight, and highly popular source-code editor developed by Microsoft. It offers comprehensive support for debugging, embedded Git control, syntax highlighting, intelligent code completion (IntelliSense), snippets, and code refactoring. Its functionality can be vastly extended through a rich marketplace of extensions.",
        "url": "https://code.visualstudio.com/",
        "tags": ["Free", "Students", "Developers", "Coding"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.9,
        "reviewCount": 26000,
        "featured": true,
        "dateAdded": "2024-04-12",
        "features": [
          "Intelligent Code Completion (IntelliSense)",
          "Built-in debugger and terminal",
          "Integrated Git version control",
          "Extensive extension marketplace",
          "Highly customizable and themeable",
          "Support for all major programming languages"
        ],
        "pricing": {
          "free": "Completely free and open-source"
        },
        "requirements": ["Desktop app (Windows, macOS, Linux)"],
        "alternatives": ["JetBrains IDEs (IntelliJ, WebStorm)", "Sublime Text", "Atom", "Neovim"]
      },
      {
        "id": "ifttt",
        "name": "IFTTT",
        "description": "IFTTT (If This Then That) is a web automation service. It connects apps, devices, and services through simple conditional statements called Applets. Users can set up free automated workflows (e.g. posting social media updates, managing calendars) without coding.",
        "detailedDescription": "IFTTT (If This Then That) is a simple automation platform that connects different apps, services, and devices. Users create 'Applets' based on the conditional statement 'if this, then that'. It's widely used for personal productivity, social media automation, and controlling smart home devices without any coding.",
        "url": "https://ifttt.com/",
        "tags": ["Free", "Paid", "Productivity", "Students", "Professionals"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.4,
        "reviewCount": 9500,
        "featured": false,
        "dateAdded": "2024-04-15",
        "features": [
          "Simple 'if this, then that' logic",
          "Wide range of service integrations (Applets)",
          "Strong focus on smart home devices",
          "No-code, user-friendly interface",
          "Mobile apps for on-the-go automation"
        ],
        "pricing": {
          "free": "Free plan for 2 Applets",
          "paid": ["Pro: $2.50/month", "Pro+: $5/month"]
        },
        "requirements": ["Web browser or mobile app", "Internet connection"],
        "alternatives": ["Zapier", "Make (Integromat)", "Home Assistant", "n8n"]
      },
      {
        "id": "zapier",
        "name": "Zapier",
        "description": "Zapier is a no-code automation platform that connects thousands of web apps. Users create 'Zaps' to automatically pass data and trigger actions between services (like Gmail, Slack, Airtable) without writing code, streamlining workflows. It offers free basic usage with paid plans for more integrations.",
        "detailedDescription": "Zapier is a powerful online automation tool that connects business and productivity apps. Users can create automated workflows, called 'Zaps,' that can be simple or multi-step with complex logic. With integrations for over 6,000 apps, it's a leader in business process automation, saving time and reducing manual work.",
        "url": "https://zapier.com/",
        "tags": ["Free", "Paid", "Productivity", "Students", "Professionals"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 16000,
        "featured": true,
        "dateAdded": "2024-04-18",
        "features": [
          "Multi-step automations ('Zaps')",
          "Integrations with thousands of apps",
          "Conditional logic and filters",
          "Data formatting tools",
        "Intuitive no-code workflow builder"
        ],
        "pricing": {
          "free": "Free plan with limited Zaps and tasks",
          "paid": ["Starter: $19.99/month", "Professional: $49/month"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Make (Integromat)", "IFTTT", "n8n", "Workato"]
      },
      {
        "id": "ibm_watsonx",
        "name": "IBM watsonx.ai",
        "description": "IBM watsonx.ai is an AI development studio offering tools to build and deploy machine learning models. It provides an integrated environment (APIs, notebooks, tooling) for data scientists to create AI applications in enterprises.",
        "detailedDescription": "IBM watsonx is an enterprise-ready AI and data platform designed for building, scaling, and governing AI. It consists of three main components: watsonx.ai for building generative AI models, watsonx.data for a fit-for-purpose data store, and watsonx.governance for responsible and transparent AI workflows.",
        "url": "https://www.ibm.com/products/watsonx-ai",
        "tags": ["Paid", "AI", "Researchers", "Developers", "Enterprises"],
        "difficulty": "advanced",
        "type": "platform",
        "isFree": false,
        "rating": 4.2,
        "reviewCount": 2100,
        "featured": false,
        "dateAdded": "2024-04-20",
        "features": [
          "Studio for generative AI and machine learning",
          "Access to IBM and open-source foundation models",
          "Data lakehouse integration (watsonx.data)",
          "AI governance and risk management tools",
          "Enterprise-level security and scalability"
        ],
        "pricing": {
          "free": "Free trial available",
          "paid": ["Pay-as-you-go and subscription plans based on usage"]
        },
        "requirements": ["IBM Cloud account", "Technical expertise"],
        "alternatives": ["Amazon SageMaker", "Google Cloud AI", "Microsoft Azure AI", "DataRobot"]
      },
      {
        "id": "aws_sagemaker",
        "name": "Amazon SageMaker",
        "description": "Amazon SageMaker is a fully-managed machine learning platform on AWS. It enables developers to build, train, and deploy ML models at scale, offering integrated tools for data preparation, model tuning, and hosting, all in the AWS cloud.",
        "detailedDescription": "Amazon SageMaker is a comprehensive cloud machine learning platform from Amazon Web Services (AWS). It provides developers and data scientists with the ability to build, train, and deploy machine learning models at scale. It covers the entire ML workflow, from data labeling to model deployment and monitoring.",
        "url": "https://aws.amazon.com/sagemaker/",
        "tags": ["Paid", "AI", "Students", "Researchers", "Developers"],
        "difficulty": "advanced",
        "type": "platform",
        "isFree": false,
        "rating": 4.4,
        "reviewCount": 4500,
        "featured": false,
        "dateAdded": "2024-04-22",
        "features": [
          "Fully managed ML infrastructure",
          "Integrated Jupyter notebooks (SageMaker Studio)",
          "One-click model deployment",
          "Automatic model tuning (Hyperparameter Tuning)",
          "Data labeling services (Ground Truth)"
        ],
        "pricing": {
          "free": "Includes a free tier for a limited time",
          "paid": ["Pay-as-you-go based on resource usage"]
        },
        "requirements": ["AWS account", "Machine learning knowledge"],
        "alternatives": ["Google Cloud AI (Vertex AI)", "Microsoft Azure Machine Learning", "IBM watsonx.ai"]
      },
      {
        "id": "google_cloud_ai",
        "name": "Google Cloud AI Platform",
        "description": "Google Cloud AI Platform (Vertex AI) provides cloud-based tools and services for machine learning development. It supports AutoML, custom TensorFlow models, and data labeling, allowing innovators to train and deploy ML models using Google's scalable infrastructure.",
        "detailedDescription": "Google Cloud's AI Platform, now unified under Vertex AI, is a managed machine learning platform that allows developers to accelerate the deployment and maintenance of AI models. It offers tools for every step of the ML lifecycle, including access to Google's powerful foundation models like Gemini, and AutoML for building models with minimal code.",
        "url": "https://cloud.google.com/vertex-ai",
        "tags": ["Paid", "AI", "Students", "Researchers", "Developers"],
        "difficulty": "advanced",
        "type": "platform",
        "isFree": false,
        "rating": 4.4,
        "reviewCount": 4800,
        "featured": false,
        "dateAdded": "2024-04-25",
        "features": [
          "Unified MLOps platform (Vertex AI)",
          "AutoML for low-code model creation",
          "Access to Google's foundation models (Gemini)",
          "Serverless training and deployment",
          "Integration with Google Cloud services"
        ],
        "pricing": {
          "free": "Includes a generous free tier",
          "paid": ["Pay-as-you-go pricing for different services"]
        },
        "requirements": ["Google Cloud Platform account", "Machine learning knowledge"],
        "alternatives": ["Amazon SageMaker", "Microsoft Azure Machine Learning", "IBM watsonx.ai"]
      },
      {
        "id": "gitlab",
        "name": "GitLab",
        "description": "GitLab is a web-based DevOps and version control platform similar to GitHub. It provides Git repository hosting, CI/CD pipelines, issue tracking, and project management in one application. It helps teams plan, build, and deploy software collaboratively.",
        "detailedDescription": "GitLab is a complete DevOps platform delivered as a single application, fundamentally changing how Development, Security, and Ops teams collaborate. From project planning and source code management to CI/CD, monitoring, and security, GitLab provides a unified workflow for the entire software development lifecycle.",
        "url": "https://gitlab.com/",
        "tags": ["Free", "Paid", "Coding", "Students", "Developers"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 10500,
        "featured": false,
        "dateAdded": "2024-04-28",
        "features": [
          "Single application for the entire DevOps lifecycle",
          "Integrated CI/CD pipelines",
          "Source code management and issue tracking",
          "Built-in security scanning (SAST, DAST)",
          "Package and container registry"
        ],
        "pricing": {
          "free": "Free tier with core features and 5GB storage",
          "paid": ["Premium: $29/user/month", "Ultimate: $99/user/month"]
        },
        "requirements": ["Git knowledge", "Internet connection"],
        "alternatives": ["GitHub", "Bitbucket", "Jenkins", "Azure DevOps"]
      },
      {
        "id": "bitbucket",
        "name": "Bitbucket",
        "description": "Bitbucket (by Atlassian) is a code hosting and collaboration tool. It offers Git and Mercurial repository hosting, pull requests, and integrates with Jira and Confluence. It is often used by enterprise teams as an alternative to GitHub.",
        "detailedDescription": "Bitbucket is a Git-based code hosting and collaboration tool built for teams. Developed by Atlassian, its primary strength lies in its seamless integration with other Atlassian products like Jira and Trello, providing a powerful, unified workflow for planning projects and managing code.",
        "url": "https://bitbucket.org/",
        "tags": ["Free", "Paid", "Coding", "Students", "Developers"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.5,
        "reviewCount": 8900,
        "featured": false,
        "dateAdded": "2024-05-01",
        "features": [
          "Git and Mercurial repository hosting",
          "Best-in-class Jira and Trello integration",
          "Built-in CI/CD (Bitbucket Pipelines)",
          "Code review via pull requests",
          "IP allowlisting and merge checks"
        ],
        "pricing": {
          "free": "Free for up to 5 users",
          "paid": ["Standard: $3/user/month", "Premium: $6/user/month"]
        },
        "requirements": ["Git knowledge", "Internet connection"],
        "alternatives": ["GitHub", "GitLab", "SourceForge", "Azure DevOps"]
      },
      {
        "id": "miro",
        "name": "Miro",
        "description": "Miro is an online collaborative whiteboard tool. It enables teams to brainstorm, create mind maps, and prototype designs together in real-time. A free tier is available for individuals and educators, making it useful for planning and visual collaboration.",
        "detailedDescription": "Miro is an online, collaborative whiteboard platform that enables distributed teams to work effectively together, from brainstorming with digital sticky notes to planning and managing agile workflows. Its infinite canvas allows teams to create diagrams, mind maps, and user story maps in real-time.",
        "url": "https://miro.com/",
        "tags": ["Free", "Paid", "Students", "Educators", "Designers"],
        "difficulty": "beginner",
        "type": "tool",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 19500,
        "featured": false,
        "dateAdded": "2024-05-05",
        "features": [
          "Infinite virtual whiteboard canvas",
          "Real-time collaboration with cursors",
          "Vast template library (Miroverse)",
          "Digital sticky notes and diagramming tools",
          "Video chat and voting tools",
          "Integrations with tools like Jira and Slack"
        ],
        "pricing": {
          "free": "Free plan with 3 editable boards",
          "paid": ["Starter: $8/member/month", "Business: $16/member/month"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Mural", "FigJam", "Microsoft Whiteboard", "Whimsical"]
      },
      {
        "id": "jupyter",
        "name": "Jupyter Notebook",
        "description": "Jupyter Notebook is an open-source web application that lets users create and share documents with live code (Python, R, etc.), equations, visualizations, and narrative text. It is widely used in data science and education for interactive computational work.",
        "detailedDescription": "The Jupyter Notebook is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text. Its cell-based execution model is ideal for interactive data science, scientific computing, and machine learning, making it a standard tool in academia and industry.",
        "url": "https://jupyter.org/",
        "tags": ["Free", "Students", "Researchers", "DataScientists", "Coding"],
        "difficulty": "intermediate",
        "type": "tool",
        "isFree": true,
        "rating": 4.7,
        "reviewCount": 13200,
        "featured": false,
        "dateAdded": "2024-05-08",
        "features": [
          "Interactive code execution in cells",
          "Support for many programming languages via kernels",
          "Inline visualizations and markdown text",
          "Easy to share and reproduce work",
          "Completely free and open-source",
          "Large ecosystem of extensions"
        ],
        "pricing": {
          "free": "The software is completely free"
        },
        "requirements": ["Python installation (e.g., Anaconda)", "Web browser"],
        "alternatives": ["Google Colab", "RStudio", "Zeppelin", "VS Code Notebooks"]
      },
      {
        "id": "wolframalpha",
        "name": "Wolfram|Alpha",
        "description": "Wolfram|Alpha is an AI-powered computational knowledge engine that answers factual and mathematical queries. It can compute answers and provide data across science, engineering, and many disciplines by using curated algorithms and data.",
        "detailedDescription": "Unlike a search engine, Wolfram|Alpha is a computational knowledge engine. It doesn't search the web but instead computes answers to queries using its vast repository of built-in data, algorithms, and methods. It's exceptionally powerful for mathematics, science, and data-based factual questions.",
        "url": "https://www.wolframalpha.com/",
        "tags": ["Free", "Paid", "Students", "Researchers", "Education"],
        "difficulty": "intermediate",
        "type": "tool",
        "isFree": true,
        "rating": 4.6,
        "reviewCount": 11800,
        "featured": false,
        "dateAdded": "2024-05-12",
        "features": [
          "Solves complex mathematical problems",
          "Provides curated data on a wide range of topics",
          "Performs unit conversions and calculations",
          "Generates data visualizations and plots",
          "Step-by-step solutions for problems (Pro version)"
        ],
        "pricing": {
          "free": "Free for basic queries",
          "paid": ["Pro plans start at ~$5/month for step-by-step solutions and advanced features"]
        },
        "requirements": ["Web browser", "Internet connection"],
        "alternatives": ["Symbolab", "Mathway", "ChatGPT (for math)", "Google Search (for facts)"]
      },
      {
        "id": "arduino",
        "name": "Arduino",
        "description": "Arduino is an open-source electronics platform with easy-to-use hardware and software. It provides microcontroller boards and an IDE for building interactive projects. The global Arduino community shares tutorials and projects for makers learning electronics and programming.",
        "detailedDescription": "Arduino is an open-source electronics platform based on easy-to-use hardware and software. It's intended for anyone making interactive projects. Arduino boards can read inputs - a light on a sensor, a finger on a button - and turn it into an output - activating a motor, turning on an LED. It's a cornerstone of the maker movement and a great entry point into electronics and IoT.",
        "url": "https://www.arduino.cc/",
        "tags": ["Free", "Hardware", "Students", "Makers", "Engineers"],
        "difficulty": "intermediate",
        "type": "platform",
        "isFree": true,
        "rating": 4.8,
        "reviewCount": 16700,
        "featured": false,
        "dateAdded": "2024-05-15",
        "features": [
          "Open-source hardware and software",
          "Simple, cross-platform IDE",
          "Large and active community",
          "Extensive library of code and tutorials",
          "Wide range of compatible boards and shields (add-ons)"
        ],
        "pricing": {
          "free": "Software (IDE) is free",
          "paid": ["Hardware boards and kits must be purchased"]
        },
        "requirements": ["Arduino board", "USB cable", "Desktop computer with Arduino IDE"],
        "alternatives": ["Raspberry Pi", "ESP32/ESP8266", "Micro:bit", "Teensy"]
      }
    ]
  },
  {
    id: 'grantsFunding',
    title: 'Grants & Funding',
    description: 'Funding opportunities, grants, and accelerators for startups and projects',
    icon: '💰',
    gradient: 'from-emerald-500 to-teal-600',
    resources: [
      {
        id: 'unescoGlobalYouthGrant',
        name: 'UNESCO Global Youth Grant Scheme',
        description: 'The UNESCO Global Youth Grant Scheme provides funding and capacity-building for youth-led research projects and grassroots initiatives addressing global challenges.',
        detailedDescription: 'UNESCO\'s Global Youth Grant Scheme empowers young people aged 18-35 to lead research and innovation projects that address pressing global challenges. The program provides both financial support and capacity-building opportunities to help youth make meaningful contributions to sustainable development.',
        url: 'https://en.unesco.org/themes/girls-youth-skills/global-youth-grant-scheme',
        tags: ['Free', 'Youth', 'Grants', 'Research'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true,
        rating: 4.3,
        reviewCount: 890,
        dateAdded: '2024-01-15',
        features: [
          'Funding for youth-led projects',
          'Capacity-building workshops',
          'Mentorship opportunities',
          'Global networking',
          'Research support',
          'Impact measurement tools'
        ],
        pricing: {
          free: 'Grant funding available up to $25,000'
        },
        requirements: ['Age 18-35', 'Project proposal', 'UNESCO member state citizenship'],
        alternatives: ['UN Youth Climate Summit', 'Global Youth Climate Action Fund', 'Youth Climate Leaders']
      },
      {
        id: 'globalInnovationFund',
        name: 'Global Innovation Fund (GIF)',
        description: 'The Global Innovation Fund is a nonprofit investment fund that provides grants or investments (up to ~$1M+) in social-impact innovations benefiting people in developing countries.',
        detailedDescription: 'The Global Innovation Fund backs innovations that improve the lives of the world\'s poorest people. They provide patient capital and support to help scale breakthrough innovations that can reach millions of people in developing countries.',
        url: 'https://globalinnovation.fund',
        tags: ['Grant', 'SocialImpact', 'DevelopingCountries', 'Entrepreneurs'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true,
        rating: 4.6,
        reviewCount: 1240,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'Stage-appropriate funding',
          'Technical assistance',
          'Impact measurement',
          'Global network access',
          'Scaling support',
          'Due diligence support'
        ],
        pricing: {
          free: 'Investment funding from $230K to $15M+'
        },
        requirements: ['Social impact focus', 'Developing country benefit', 'Scalable innovation'],
        alternatives: ['Acumen Fund', 'Grameen Foundation', 'Ashoka Changemakers', 'Skoll Foundation']
      },
      {
        id: 'helloTomorrowChallenge',
        name: 'Hello Tomorrow Global Challenge',
        description: 'Hello Tomorrow runs an international startup competition (Deep Tech Global Challenge) awarding equity-free prize funds (e.g. €100K grand prize) to early-stage deep-tech entrepreneurs worldwide.',
        detailedDescription: 'Hello Tomorrow Global Challenge is one of the world\'s largest deep tech startup competitions, bringing together entrepreneurs, investors, and corporations to accelerate breakthrough technologies that can positively impact society.',
        url: 'https://hello-tomorrow.org/global-challenge/',
        tags: ['Free', 'Founders', 'DeepTech', 'Competition'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true,
        rating: 4.7,
        reviewCount: 2340,
        featured: true,
        dateAdded: '2024-01-25',
        features: [
          'Equity-free prizes',
          'Global exposure',
          'Investor connections',
          'Mentorship program',
          'Corporate partnerships',
          'Summit participation'
        ],
        pricing: {
          free: 'Competition entry and prizes up to €100K'
        },
        requirements: ['Deep tech startup', 'Early stage', 'Breakthrough technology'],
        alternatives: ['XPRIZE', 'Techstars', 'Plug and Play', 'MIT $100K']
      },
      {
        id: 'kickstarter',
        name: 'Kickstarter',
        description: 'Kickstarter is a leading global crowdfunding platform for creative and tech projects; over 23M backers have pledged $8.2B to fund 265K+ projects since 2009.',
        detailedDescription: 'Kickstarter is a funding platform for creative projects where creators set a funding goal and deadline. If the project reaches its funding goal, all backers\' credit cards are charged when time expires. If the project falls short, no one is charged.',
        url: 'https://www.kickstarter.com',
        tags: ['Free', 'Founders', 'Crowdfunding', 'Creators'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 15670,
        featured: true,
        dateAdded: '2024-02-01',
        features: [
          'All-or-nothing funding',
          'Global reach',
          'Project discovery',
          'Backer rewards system',
          'Marketing tools',
          'Community engagement',
          'Mobile app',
          'Creator resources'
        ],
        pricing: {
          free: 'Free to launch campaigns',
          paid: ['5% platform fee + payment processing on successful campaigns']
        },
        requirements: ['Creative project', 'Compelling campaign', 'Reward tiers'],
        alternatives: ['Indiegogo', 'GoFundMe', 'Fundrazr', 'Crowdfunder']
      },
      {
        id: 'indiegogo',
        name: 'Indiegogo',
        description: 'Indiegogo is a worldwide crowdfunding marketplace where entrepreneurs launch campaigns to raise funds for innovative products, design, and tech projects.',
        detailedDescription: 'Indiegogo offers both fixed and flexible funding options, allowing entrepreneurs to keep funds raised even if they don\'t reach their goal. It\'s known for supporting innovative technology products and creative projects from around the world.',
        url: 'https://www.indiegogo.com',
        tags: ['Free', 'Founders', 'Crowdfunding'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.2,
        reviewCount: 8930,
        dateAdded: '2024-02-05',
        features: [
          'Flexible funding options',
          'Global marketplace',
          'InDemand for ongoing sales',
          'Manufacturing support',
          'Marketing tools',
          'Analytics dashboard'
        ],
        pricing: {
          free: 'Free to launch campaigns',
          paid: ['5% platform fee + payment processing']
        },
        requirements: ['Product or project', 'Campaign materials', 'Funding goal'],
        alternatives: ['Kickstarter', 'GoFundMe', 'Fundrazr', 'StartEngine']
      }
    ]
  },
  {
    id: 'hackathonsEvents',
    title: 'Hackathons & Events',
    description: 'Coding competitions, hackathons, and tech events to showcase your skills',
    icon: '🏆',
    gradient: 'from-orange-500 to-red-600',
    resources: [
      {
        id: 'nasaSpaceApps',
        name: 'NASA Space Apps Challenge',
        description: 'The NASA International Space Apps Challenge is an annual global hackathon where teams of coders, scientists, designers, and makers use open NASA data to address Earth and space challenges.',
        detailedDescription: 'NASA Space Apps Challenge is the largest global hackathon, bringing together diverse teams to solve challenges using NASA\'s open data. Participants work on real problems that NASA and its partners face, from Earth science to space exploration.',
        url: 'https://www.spaceappschallenge.org',
        tags: ['Free', 'Students', 'Innovators', 'SpaceTech'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true,
        rating: 4.8,
        reviewCount: 5670,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Global participation',
          'NASA data access',
          'Expert mentorship',
          'Awards and recognition',
          'Virtual and in-person events',
          'International collaboration'
        ],
        pricing: {
          free: 'Free participation worldwide'
        },
        requirements: ['Team formation', 'Basic technical skills', 'Registration'],
        alternatives: ['ESA Space App Camp', 'SpaceX Hyperloop', 'Space Settlement Contest']
      },
      {
        id: 'mlh',
        name: 'Major League Hacking',
        description: 'Major League Hacking (MLH) is the official student hackathon league, organizing 300+ hackathons per year for 500K+ student developers worldwide.',
        detailedDescription: 'Major League Hacking is the official student hackathon league that empowers hackers to learn, build, and share their creations. MLH runs the most developer-focused hackathons worldwide, fostering innovation and community among student developers.',
        url: 'https://mlh.io',
        tags: ['Free', 'Students', 'Hackathons', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 12340,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'Student-focused events',
          'Global hackathon network',
          'Mentorship programs',
          'Swag and prizes',
          'Career opportunities',
          'Community building',
          'Educational workshops'
        ],
        pricing: {
          free: 'All events free for students'
        },
        requirements: ['Student status', 'Age verification', 'Code of conduct agreement'],
        alternatives: ['HackClub', 'Devpost', 'HackerEarth', 'AngelHack']
      },
      {
        id: 'angelhack',
        name: 'AngelHack',
        description: 'AngelHack runs global hackathon series and innovation programs since 2011, partnering with tech companies to engage developers (300K+ in community) in collaborative projects.',
        detailedDescription: 'AngelHack is a global hackathon organization that brings together developers, designers, and entrepreneurs to build innovative solutions. They partner with leading tech companies to provide real-world challenges and opportunities.',
        url: 'https://angelhack.com',
        tags: ['Free', 'Developers', 'Hackathons', 'Innovation'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 7890,
        dateAdded: '2024-01-25',
        features: [
          'Corporate partnerships',
          'Global events',
          'Accelerator programs',
          'Mentorship network',
          'Prize competitions',
          'Post-event support'
        ],
        pricing: {
          free: 'Free hackathon participation'
        },
        requirements: ['Registration', 'Team formation', 'Project submission'],
        alternatives: ['Junction', 'TechCrunch Disrupt', 'Startup Weekend', 'HackZurich']
      },
      {
        id: 'devpost',
        name: 'Devpost',
        description: 'Devpost is the home for hackathons, powering online and in-person hackathons worldwide with project submissions, judging tools, and community features.',
        detailedDescription: 'Devpost is the leading platform for hackathons and developer competitions. It provides tools for organizers to run events and for participants to showcase their projects, connect with teammates, and discover opportunities.',
        url: 'https://devpost.com',
        tags: ['Free', 'Hackathons', 'Developers', 'Projects'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 18920,
        featured: true,
        dateAdded: '2024-02-01',
        features: [
          'Hackathon discovery',
          'Project portfolio',
          'Team formation',
          'Submission management',
          'Judging tools',
          'Community features',
          'Prize tracking'
        ],
        pricing: {
          free: 'Free for participants and basic organizer features'
        },
        requirements: ['Account creation', 'Project submission', 'Team collaboration'],
        alternatives: ['HackerEarth', 'ChallengePost', 'HackClub', 'Kaggle Competitions']
      },
      {
        id: 'hackerearth',
        name: 'HackerEarth Challenges',
        description: 'HackerEarth hosts programming challenges, hackathons, and coding competitions connecting developers globally while helping them improve skills and find opportunities.',
        detailedDescription: 'HackerEarth is a comprehensive platform for technical recruitment and developer engagement. It hosts various coding challenges, hackathons, and competitions that help developers showcase their skills and connect with potential employers.',
        url: 'https://www.hackerearth.com/challenges/',
        tags: ['Free', 'Programming', 'Competitions', 'Developers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 9870,
        dateAdded: '2024-02-05',
        features: [
          'Coding competitions',
          'Hackathon hosting',
          'Skill assessments',
          'Leaderboards',
          'Corporate challenges',
          'Career opportunities',
          'Practice problems'
        ],
        pricing: {
          free: 'Free participation in challenges',
          paid: ['Premium features for organizers']
        },
        requirements: ['Programming knowledge', 'Account registration', 'Problem-solving skills'],
        alternatives: ['CodeChef', 'Codeforces', 'TopCoder', 'AtCoder']
      }
    ]
  },
  {
    id: 'learningCourses',
    title: 'Learning Platforms & Courses',
    description: 'Online learning platforms and educational resources for skill development',
    icon: '📚',
    gradient: 'from-yellow-500 to-orange-600',
    resources: [
      {
        id: 'coursera',
        name: 'Coursera',
        description: 'Coursera is a leading global online learning platform offering courses and full degree programs from top universities and companies; access to many courses is free (pay for certificates).',
        detailedDescription: 'Coursera partners with top universities and organizations worldwide to offer courses, specializations, and degree programs online. With over 4,000 courses from institutions like Stanford, Yale, and Google, learners can gain new skills and advance their careers.',
        url: 'https://www.coursera.org',
        tags: ['Free', 'Paid', 'Students', 'LifelongLearning'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 45670,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'University partnerships',
          'Professional certificates',
          'Degree programs',
          'Hands-on projects',
          'Peer interaction',
          'Mobile learning',
          'Financial aid available',
          'Career services'
        ],
        pricing: {
          free: 'Audit courses for free',
          paid: ['Coursera Plus: $59/month', 'Individual courses: $39-79', 'Specializations: $39-79/month']
        },
        requirements: ['Internet connection', 'Web browser or mobile app'],
        alternatives: ['edX', 'Udacity', 'Khan Academy', 'LinkedIn Learning']
      },
      {
        id: 'edx',
        name: 'edX',
        description: 'edX is a nonprofit online learning destination (founded by Harvard/MIT) providing MOOCs and interactive online courses across subjects like engineering, data science, humanities and AI.',
        detailedDescription: 'edX is a nonprofit online learning platform founded by Harvard and MIT. It offers high-quality courses from the world\'s best universities and institutions to learners everywhere, with a mission to increase access to high-quality education for everyone.',
        url: 'https://www.edx.org',
        tags: ['Free', 'Paid', 'Students', 'LifelongLearning'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 32890,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'University-level courses',
          'MicroMasters programs',
          'Professional education',
          'Interactive learning',
          'Global community',
          'Mobile accessibility',
          'Open source platform'
        ],
        pricing: {
          free: 'Free access to course content',
          paid: ['Verified certificates: $50-300', 'MicroMasters: $600-1,500']
        },
        requirements: ['Internet connection', 'Basic computer skills'],
        alternatives: ['Coursera', 'Udacity', 'FutureLearn', 'Khan Academy']
      },
      {
        id: 'khanAcademy',
        name: 'Khan Academy',
        description: 'Khan Academy is a free, nonprofit educational platform offering video lessons and exercises from kindergarten through early college, empowering learners to study at their own pace.',
        detailedDescription: 'Khan Academy is a nonprofit organization with the mission of providing a free, world-class education for anyone, anywhere. The platform offers practice exercises, instructional videos, and a personalized learning dashboard.',
        url: 'https://www.khanacademy.org',
        tags: ['Free', 'Students', 'Education', 'Teachers'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 28930,
        featured: true,
        dateAdded: '2024-01-25',
        features: [
          'Personalized learning',
          'Progress tracking',
          'Interactive exercises',
          'Video lessons',
          'Teacher tools',
          'Mobile apps',
          'Offline access',
          'Multilingual support'
        ],
        pricing: {
          free: 'Completely free for all users'
        },
        requirements: ['Internet connection', 'Web browser or mobile app'],
        alternatives: ['Coursera', 'edX', 'Brilliant', 'Codecademy']
      },
      {
        id: 'freecodecamp',
        name: 'freeCodeCamp',
        description: 'freeCodeCamp is a nonprofit open source curriculum where millions of people worldwide learn to code for free through interactive coding lessons, projects, and certifications.',
        detailedDescription: 'freeCodeCamp is a nonprofit organization that consists of an interactive learning web platform, online community forum, chat rooms, online publications, and local organizations that intend to make learning web development accessible to anyone.',
        url: 'https://www.freecodecamp.org',
        tags: ['Free', 'Students', 'Coding', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.9,
        reviewCount: 67890,
        featured: true,
        dateAdded: '2024-02-01',
        features: [
          'Interactive coding lessons',
          'Real-world projects',
          'Free certifications',
          'Community support',
          'Open source curriculum',
          'Mobile responsive',
          'Forum discussions',
          'Local study groups'
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
        description: 'Udemy is a massive online course marketplace with ~260,000 courses and 80 million students globally; it covers topics from programming and marketing to design (many affordable or free courses).',
        detailedDescription: 'Udemy is an online learning and teaching marketplace with over 213,000 courses and 57 million students. Learn programming, marketing, data science and more from expert instructors.',
        url: 'https://www.udemy.com',
        tags: ['Paid', 'Students', 'Professionals', 'OnDemand'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: false,
        rating: 4.4,
        reviewCount: 89760,
        featured: true,
        dateAdded: '2024-02-05',
        features: [
          'Lifetime access to courses',
          'Mobile and TV access',
          'Certificates of completion',
          'Q&A with instructors',
          'Downloadable resources',
          'Regular sales and discounts',
          'Business solutions',
          'Multiple languages'
        ],
        pricing: {
          paid: ['Individual courses: $10-200', 'Udemy Business: $360/user/year']
        },
        requirements: ['Internet connection', 'Web browser or mobile app'],
        alternatives: ['Coursera', 'Pluralsight', 'LinkedIn Learning', 'Skillshare']
      }
    ]
  },
  {
    id: 'openSourceVolunteer',
    title: 'Open Source & Volunteer Projects',
    description: 'Open source projects and volunteer opportunities to contribute to meaningful causes',
    icon: '🤝',
    gradient: 'from-green-500 to-blue-600',
    resources: [
      {
        id: 'googleSummerOfCode',
        name: 'Google Summer of Code',
        description: 'Google Summer of Code is a global online program that brings new contributors (students) into open-source software development by funding a summer coding project under mentor guidance.',
        detailedDescription: 'Google Summer of Code is a global program focused on bringing more student developers into open source software development. Students work with an open source organization on a 3-month programming project during their break from school.',
        url: 'https://summerofcode.withgoogle.com',
        tags: ['Paid', 'Students', 'OpenSource', 'Mentorship'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: false,
        rating: 4.9,
        reviewCount: 8920,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Paid internship program',
          'Mentor guidance',
          'Real-world projects',
          'Global participation',
          'Career development',
          'Open source contribution',
          'Certificate of completion'
        ],
        pricing: {
          free: 'Students receive stipends for participation'
        },
        requirements: ['University student status', 'Programming skills', 'Application process'],
        alternatives: ['Outreachy', 'MLH Fellowship', 'Linux Foundation Mentorship', 'Season of Docs']
      },
      {
        id: 'outreachy',
        name: 'Outreachy',
        description: 'Outreachy provides paid, remote open-source internships to people from underrepresented groups in tech, fostering diversity by working on programming, UX, documentation or design projects.',
        detailedDescription: 'Outreachy provides internships in open source and open science to people subject to systemic bias and impacted by underrepresentation in the technical industry where they are living.',
        url: 'https://www.outreachy.org',
        tags: ['Paid', 'OpenSource', 'Diversity', 'Students'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: false,
        rating: 4.7,
        reviewCount: 3450,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'Paid remote internships',
          'Diversity and inclusion focus',
          'Mentorship program',
          'Multiple project types',
          'Career development',
          'Community support',
          'Travel funding available'
        ],
        pricing: {
          free: 'Interns receive $7,000 stipend'
        },
        requirements: ['Underrepresented in tech', 'Application process', 'Contribution period'],
        alternatives: ['Google Summer of Code', 'MLH Fellowship', 'Rails Girls Summer of Code']
      },
      {
        id: 'firstTimersOnly',
        name: 'First Timers Only',
        description: 'First Timers Only is a community initiative and guide to help newcomers make a welcoming first contribution to open source, by highlighting easy starter issues and tutorials.',
        detailedDescription: 'First Timers Only is an initiative to help newcomers make their first contribution to open source. It features projects that have issues specifically labeled for beginners and provides guidance on how to get started.',
        url: 'https://www.firsttimersonly.com',
        tags: ['Free', 'OpenSource', 'Beginners', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 5670,
        featured: true,
        dateAdded: '2024-01-25',
        features: [
          'Beginner-friendly projects',
          'Detailed contribution guides',
          'Mentorship opportunities',
          'Community support',
          'Learning resources',
          'Progress tracking',
          'Safe learning environment'
        ],
        pricing: {
          free: 'Completely free resource'
        },
        requirements: ['Basic Git knowledge', 'GitHub account', 'Programming basics'],
        alternatives: ['Good First Issues', 'Up For Grabs', 'CodeTriage', 'Awesome for Beginners']
      },
      {
        id: 'goodFirstIssues',
        name: 'Good First Issues',
        description: 'Good First Issues curates easy-to-solve issues for new open source contributors, making it simple to find beginner-friendly projects across GitHub.',
        detailedDescription: 'Good First Issues is a curated list of issues from popular open source projects that are perfect for new contributors. The platform makes it easy to find your first contribution to open source.',
        url: 'https://goodfirstissues.com',
        tags: ['Free', 'OpenSource', 'Beginners', 'GitHub'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.5,
        reviewCount: 3890,
        dateAdded: '2024-02-01',
        features: [
          'Curated beginner issues',
          'Multiple programming languages',
          'Difficulty filtering',
          'Project descriptions',
          'Direct GitHub links',
          'Regular updates'
        ],
        pricing: {
          free: 'Free access to all issues'
        },
        requirements: ['GitHub account', 'Basic programming knowledge'],
        alternatives: ['First Timers Only', 'Up For Grabs', 'CodeTriage', 'Contributor Ninja']
      },
      {
        id: 'upForGrabs',
        name: 'Up For Grabs',
        description: 'Up For Grabs aggregates projects with tasks specifically marked for new contributors, making open source contribution accessible for developers at any level.',
        detailedDescription: 'Up For Grabs is a list of projects which have curated tasks specifically for new contributors. These are a great way to get started with a project, or to help share the load of working on open source projects.',
        url: 'https://up-for-grabs.net',
        tags: ['Free', 'OpenSource', 'Community', 'Beginners'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 2890,
        dateAdded: '2024-02-05',
        features: [
          'Project aggregation',
          'Language filtering',
          'Tag-based search',
          'Project statistics',
          'Contribution guidelines',
          'Community maintained'
        ],
        pricing: {
          free: 'Free access to all projects'
        },
        requirements: ['Programming knowledge', 'Git basics', 'GitHub account'],
        alternatives: ['Good First Issues', 'First Timers Only', 'CodeTriage', 'Open Source Friday']
      }
    ]
  },
  {
    id: 'onlineCommunities',
    title: 'Online Communities & Networks',
    description: 'Professional networks and communities for collaboration and career growth',
    icon: '🌐',
    gradient: 'from-indigo-500 to-purple-600',
    resources: [
      {
        id: 'devCommunity',
        name: 'DEV Community',
        description: 'DEV Community (dev.to) is a social platform for developers (3.27M+ members) to share articles, ask questions, and network, with tags and challenges to help coders grow their careers.',
        detailedDescription: 'DEV Community is a network of software developers getting together to help one another out. The software industry relies on collaboration and networked learning. We provide a place for that to happen.',
        url: 'https://dev.to',
        tags: ['Free', 'Developers', 'Community', 'Networking'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 18920,
        featured: true,
        dateAdded: '2024-01-15',
        features: [
          'Article publishing',
          'Community discussions',
          'Tag-based content',
          'Reading lists',
          'Job postings',
          'Podcast hosting',
          'Live streaming',
          'Developer challenges'
        ],
        pricing: {
          free: 'Completely free platform'
        },
        requirements: ['Internet connection', 'DEV account for posting'],
        alternatives: ['Medium', 'Hashnode', 'CodeNewbie Community', 'IndieHackers']
      },
      {
        id: 'github',
        name: 'GitHub',
        description: 'GitHub is the world\'s largest developer platform and code hosting site (100M+ repositories) fostering a global community of coders contributing to open source; it emphasizes collaboration and inclusion.',
        detailedDescription: 'GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 73 million developers.',
        url: 'https://github.com',
        tags: ['Free', 'Paid', 'Developers', 'OpenSource'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.8,
        reviewCount: 89760,
        featured: true,
        dateAdded: '2024-01-20',
        features: [
          'Git repositories',
          'Issue tracking',
          'Pull requests',
          'GitHub Actions (CI/CD)',
          'Project management',
          'Community features',
          'GitHub Pages',
          'Security features'
        ],
        pricing: {
          free: 'Unlimited public repositories',
          paid: ['GitHub Pro: $4/month', 'GitHub Team: $4/user/month', 'GitHub Enterprise: $21/user/month']
        },
        requirements: ['Git knowledge', 'Internet connection', 'GitHub account'],
        alternatives: ['GitLab', 'Bitbucket', 'SourceForge', 'Codeberg']
      },
      {
        id: 'stackExchange',
        name: 'Stack Exchange',
        description: 'Stack Exchange is a network of 182 expert Q&A communities (including Stack Overflow for programmers) where users ask and answer questions on diverse topics; the best answers are voted to the top.',
        detailedDescription: 'Stack Exchange is a network of question-and-answer websites on topics in diverse fields, each site covering a specific topic, where questions, answers, and users are subject to a reputation award process.',
        url: 'https://stackexchange.com',
        tags: ['Free', 'Students', 'Professionals', 'Q&A'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.6,
        reviewCount: 45670,
        featured: true,
        dateAdded: '2024-01-25',
        features: [
          'Expert Q&A communities',
          'Reputation system',
          'Tag-based organization',
          'Community moderation',
          'Knowledge sharing',
          'Professional networking',
          'Mobile apps'
        ],
        pricing: {
          free: 'Full access to all communities'
        },
        requirements: ['Internet connection', 'Account for participation'],
        alternatives: ['Quora', 'Reddit', 'Discord communities', 'Slack workspaces']
      },
      {
        id: 'stackoverflow',
        name: 'Stack Overflow',
        description: 'Stack Overflow is the largest online community for programmers to learn, share knowledge, and build careers, with over 50 million visitors monthly.',
        detailedDescription: 'Stack Overflow is the largest, most trusted online community for developers to learn, share their programming knowledge, and build their careers. More than 50 million professional and aspiring programmers visit Stack Overflow each month.',
        url: 'https://stackoverflow.com',
        tags: ['Free', 'Developers', 'Q&A', 'Programming'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.7,
        reviewCount: 67890,
        featured: true,
        dateAdded: '2024-02-01',
        features: [
          'Programming Q&A',
          'Reputation system',
          'Tag-based organization',
          'Job board',
          'Developer survey',
          'Teams collaboration',
          'Code snippets',
          'Community wiki'
        ],
        pricing: {
          free: 'Full access to Q&A platform',
          paid: ['Stack Overflow for Teams: $5/user/month']
        },
        requirements: ['Internet connection', 'Programming knowledge helpful'],
        alternatives: ['Reddit r/programming', 'Dev.to', 'Quora', 'GitHub Discussions']
      },
      {
        id: 'reddit',
        name: 'Reddit Programming Communities',
        description: 'Reddit hosts numerous programming communities like r/programming, r/learnprogramming, and language-specific subreddits for developers to discuss, learn, and share.',
        detailedDescription: 'Reddit\'s programming communities offer a diverse range of discussions, from beginner questions to advanced technical topics. Popular subreddits include r/programming, r/learnprogramming, and language-specific communities.',
        url: 'https://www.reddit.com/r/programming',
        tags: ['Free', 'Community', 'Programming', 'Discussion'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true,
        rating: 4.4,
        reviewCount: 23450,
        dateAdded: '2024-02-05',
        features: [
          'Topic-based communities',
          'Voting system',
          'Discussion threads',
          'AMAs with experts',
          'Resource sharing',
          'News and updates',
          'Mobile apps'
        ],
        pricing: {
          free: 'Free access to all communities'
        },
        requirements: ['Reddit account', 'Internet connection'],
        alternatives: ['Discord servers', 'Slack communities', 'Telegram groups', 'Stack Overflow']
      }
    ]
  }
];