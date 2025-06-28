export interface Resource {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
  difficulty?: string;
  type?: string;
  isFree?: boolean;
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
    id: 'aiTechTools',
    title: 'AI & Tech Tools',
    description: 'Cutting-edge AI tools and technology platforms to supercharge your productivity',
    icon: '🤖',
    gradient: 'from-blue-500 to-purple-600',
    resources: [
      {
        id: 'chatgpt',
        name: 'ChatGPT',
        description: 'ChatGPT is an AI chatbot by OpenAI for writing, coding, and Q&A; it\'s the world\'s most popular AI app with ~200 million users.',
        url: 'https://openai.com/chatgpt',
        tags: ['Free', 'Paid', 'AI', 'Students', 'Professionals'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'dalle3',
        name: 'DALL·E 3',
        description: 'DALL·E 3 is OpenAI\'s advanced text-to-image generation model (launched 2023), enabling creation of detailed images from text prompts.',
        url: 'https://openai.com/dall-e-3',
        tags: ['Free', 'Paid', 'AI', 'Creators'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'googleColab',
        name: 'Google Colab',
        description: 'Google Colaboratory (Colab) offers free cloud-hosted Jupyter notebooks with GPU/TPU support, ideal for machine learning and data science education.',
        url: 'https://colab.research.google.com',
        tags: ['Free', 'AI', 'Education', 'Students'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'copilot',
        name: 'GitHub Copilot',
        description: 'GitHub Copilot is an AI pair-programmer (by GitHub/OpenAI) that autocompletes code and suggests functions in IDEs like VS Code.',
        url: 'https://github.com/features/copilot',
        tags: ['Paid', 'Developers', 'AI', 'Coding'],
        difficulty: 'intermediate',
        type: 'tool',
        isFree: false
      },
      {
        id: 'huggingFaceHub',
        name: 'Hugging Face Hub',
        description: 'Hugging Face Hub is an open platform hosting 1.7M+ machine learning models, 400k datasets, and demo apps for AI practitioners to share and collaborate.',
        url: 'https://huggingface.co',
        tags: ['Free', 'AI', 'Developers', 'MachineLearning'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: true
      },
      {
        id: 'figma',
        name: 'Figma',
        description: 'Figma is a collaborative web-based design and prototyping tool used by designers and developers; it offers a free tier (including free access for students/educators).',
        url: 'https://www.figma.com',
        tags: ['Free', 'Paid', 'Design', 'Students', 'Creators'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'claude',
        name: 'Claude',
        description: 'Claude is Anthropic\'s AI assistant capable of complex reasoning, analysis, coding, and creative tasks with strong safety features and contextual understanding.',
        url: 'https://claude.ai',
        tags: ['Free', 'Paid', 'AI', 'Students', 'Professionals'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'gemini',
        name: 'Google Gemini',
        description: 'Google Gemini is a multimodal AI model that can understand and generate text, images, audio, and code across various applications and platforms.',
        url: 'https://gemini.google.com',
        tags: ['Free', 'Paid', 'AI', 'Students', 'Professionals'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'midjourney',
        name: 'Midjourney',
        description: 'Midjourney is an AI art generator that creates stunning, artistic images from text prompts using advanced diffusion models.',
        url: 'https://www.midjourney.com',
        tags: ['Paid', 'AI', 'Creators', 'Artists'],
        difficulty: 'intermediate',
        type: 'tool',
        isFree: false
      },
      {
        id: 'replit',
        name: 'Replit',
        description: 'Replit is a cloud-based IDE that supports 50+ programming languages, offering real-time collaboration, hosting, and AI-powered coding assistance.',
        url: 'https://replit.com',
        tags: ['Free', 'Paid', 'Coding', 'Students', 'Developers'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'codepen',
        name: 'CodePen',
        description: 'CodePen is an online code editor and social development environment for front-end designers and developers to showcase HTML, CSS, and JavaScript.',
        url: 'https://codepen.io',
        tags: ['Free', 'Paid', 'Coding', 'Developers', 'Frontend'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'notion',
        name: 'Notion',
        description: 'Notion is an all-in-one workspace that combines notes, documents, databases, and project management with AI-powered features for productivity.',
        url: 'https://www.notion.so',
        tags: ['Free', 'Paid', 'Productivity', 'Students', 'Professionals'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'canva',
        name: 'Canva',
        description: 'Canva is a user-friendly graphic design platform with AI-powered tools, templates, and collaborative features for creating visual content.',
        url: 'https://www.canva.com',
        tags: ['Free', 'Paid', 'Design', 'Students', 'Creators'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'obsidian',
        name: 'Obsidian',
        description: 'Obsidian is a powerful knowledge management app that uses linked notes and graph visualization to help organize and connect ideas.',
        url: 'https://obsidian.md',
        tags: ['Free', 'Paid', 'Productivity', 'Students', 'Researchers'],
        difficulty: 'intermediate',
        type: 'app',
        isFree: true
      },
      {
        id: 'synthesia',
        name: 'Synthesia',
        description: 'Synthesia is an AI video generation platform that creates professional videos with AI avatars and voiceovers from text scripts.',
        url: 'https://www.synthesia.io',
        tags: ['Paid', 'AI', 'Video', 'Creators', 'Businesses'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: false
      },
      {
        id: 'deepseek',
        name: 'DeepSeek',
        description: 'DeepSeek is an AI platform offering free access to its advanced AI models (like DeepSeek-V3 and R1). It is marketed as an "all-in-one AI tool" for tasks such as chat and code generation, providing an intelligent model for free use.',
        url: 'https://deepseek.com/',
        tags: ['Free', 'Students', 'Researchers', 'Developers'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'grok',
        name: 'Grok (xAI)',
        description: 'Grok is an AI chatbot developed by xAI (Elon Musk\'s AI company) that provides real-time, unfiltered answers. It supports advanced reasoning, coding assistance, and image processing capabilities in a conversational interface.',
        url: 'https://x.ai/grok',
        tags: ['Free (with X Premium)', 'Developers', 'Professionals'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: false
      },
      {
        id: 'runwayml',
        name: 'RunwayML',
        description: 'RunwayML provides AI-powered tools for image and video generation, branding itself as "tools for human imagination." Its platform includes fast, controllable AI models that let users create high-fidelity visual content in real time.',
        url: 'https://runwayml.com/',
        tags: ['Free (limited)', 'Paid', 'Students', 'Creators', 'Designers'],
        difficulty: 'intermediate',
        type: 'tool',
        isFree: true
      },
      {
        id: 'filmora',
        name: 'Filmora (Wondershare)',
        description: 'Filmora is a video editing software with AI-powered features for creating and enhancing videos. It offers intuitive editing tools that help beginners and experts produce high-quality visual content with minimal effort.',
        url: 'https://filmora.wondershare.com/',
        tags: ['Free (trial)', 'Paid', 'Students', 'Creators'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'opusclip',
        name: 'OpusClip',
        description: 'OpusClip is an AI-driven video editing tool for social media. It can automatically convert long videos into multiple short, engaging clips with captions and formatting, publishing them to platforms in one click.',
        url: 'https://www.opus.pro/',
        tags: ['Free (limited)', 'Paid', 'Creators', 'Influencers'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'kaggle',
        name: 'Kaggle',
        description: 'Kaggle (by Google) is a platform and community for data science and machine learning. It offers datasets, interactive notebooks, courses, and competitions where learners and professionals can explore data and build models (Kaggle has over 461k datasets).',
        url: 'https://www.kaggle.com/',
        tags: ['Free', 'Students', 'DataScientists', 'Researchers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'github',
        name: 'GitHub',
        description: 'GitHub is a web-based platform for version control and collaboration on software projects. Developers can host code repositories, review code, and manage projects together. It is called "the world\'s most widely adopted AI-powered developer platform".',
        url: 'https://github.com/',
        tags: ['Free', 'Paid (Premium plans)', 'Students', 'Developers'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'github_student_pack',
        name: 'GitHub Student Developer Pack',
        description: 'The GitHub Student Developer Pack provides students with free access to a bundle of developer tools and services (normally paid) for learning and projects. It includes premium offerings from GitHub and partners to help students "ship software like a pro".',
        url: 'https://education.github.com/pack',
        tags: ['Free', 'Students', 'Developers'],
        difficulty: 'beginner',
        type: 'service',
        isFree: true
      },
      {
        id: 'vscode',
        name: 'Visual Studio Code',
        description: 'Visual Studio Code (VS Code) is a free, open-source code editor by Microsoft. It is lightweight yet powerful, with AI-enhanced features (like IntelliSense and GitHub Copilot support) and a vast extension ecosystem, described as "Your code editor. Redefined with AI".',
        url: 'https://code.visualstudio.com/',
        tags: ['Free', 'Students', 'Developers'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'ifttt',
        name: 'IFTTT',
        description: 'IFTTT (If This Then That) is a web automation service. It connects apps, devices, and services through simple conditional statements called Applets. Users can set up free automated workflows (e.g. posting social media updates, managing calendars) without coding.',
        url: 'https://ifttt.com/',
        tags: ['Free', 'Paid (Pro)', 'Students', 'Professionals'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'zapier',
        name: 'Zapier',
        description: 'Zapier is a no-code automation platform that connects thousands of web apps. Users create "Zaps" to automatically pass data and trigger actions between services (like Gmail, Slack, Airtable) without writing code, streamlining workflows. It offers free basic usage with paid plans for more integrations.',
        url: 'https://zapier.com/',
        tags: ['Free (basic)', 'Paid', 'Students', 'Professionals'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'ibm_watsonx',
        name: 'IBM watsonx.ai',
        description: 'IBM watsonx.ai is an AI development studio offering tools to build and deploy machine learning models. It provides an integrated environment (APIs, notebooks, tooling) for data scientists to create AI applications in enterprises.',
        url: 'https://www.ibm.com/products/watsonx-ai',
        tags: ['Paid', 'Researchers', 'Developers', 'Enterprises'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: false
      },
      {
        id: 'aws_sagemaker',
        name: 'Amazon SageMaker',
        description: 'Amazon SageMaker is a fully-managed machine learning platform on AWS. It enables developers to build, train, and deploy ML models at scale, offering integrated tools for data preparation, model tuning, and hosting, all in the AWS cloud.',
        url: 'https://aws.amazon.com/sagemaker/',
        tags: ['Paid', 'Students', 'Researchers', 'Developers'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: false
      },
      {
        id: 'google_cloud_ai',
        name: 'Google Cloud AI Platform',
        description: 'Google Cloud AI Platform (Vertex AI) provides cloud-based tools and services for machine learning development. It supports AutoML, custom TensorFlow models, and data labeling, allowing innovators to train and deploy ML models using Google\'s scalable infrastructure.',
        url: 'https://cloud.google.com/ai-platform',
        tags: ['Paid', 'Students', 'Researchers', 'Developers'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: false
      },
      {
        id: 'gitlab',
        name: 'GitLab',
        description: 'GitLab is a web-based DevOps and version control platform similar to GitHub. It provides Git repository hosting, CI/CD pipelines, issue tracking, and project management in one application. It helps teams plan, build, and deploy software collaboratively.',
        url: 'https://gitlab.com/',
        tags: ['Free', 'Paid', 'Students', 'Developers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'bitbucket',
        name: 'Bitbucket',
        description: 'Bitbucket (by Atlassian) is a code hosting and collaboration tool. It offers Git and Mercurial repository hosting, pull requests, and integrates with Jira and Confluence. It is often used by enterprise teams as an alternative to GitHub.',
        url: 'https://bitbucket.org/',
        tags: ['Free', 'Paid', 'Students', 'Developers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'miro',
        name: 'Miro',
        description: 'Miro is an online collaborative whiteboard tool. It enables teams to brainstorm, create mind maps, and prototype designs together in real-time. A free tier is available for individuals and educators, making it useful for planning and visual collaboration.',
        url: 'https://miro.com/',
        tags: ['Free', 'Paid', 'Students', 'Educators', 'Designers'],
        difficulty: 'beginner',
        type: 'tool',
        isFree: true
      },
      {
        id: 'jupyter',
        name: 'Jupyter Notebook',
        description: 'Jupyter Notebook is an open-source web application that lets users create and share documents with live code (Python, R, etc.), equations, visualizations, and narrative text. It is widely used in data science and education for interactive computational work.',
        url: 'https://jupyter.org/',
        tags: ['Free', 'Students', 'Researchers', 'DataScientists'],
        difficulty: 'intermediate',
        type: 'tool',
        isFree: true
      },
      {
        id: 'wolframalpha',
        name: 'Wolfram|Alpha',
        description: 'Wolfram|Alpha is an AI-powered computational knowledge engine that answers factual and mathematical queries. It can compute answers and provide data across science, engineering, and many disciplines by using curated algorithms and data.',
        url: 'https://www.wolframalpha.com/',
        tags: ['Free (basic)', 'Paid', 'Students', 'Researchers'],
        difficulty: 'intermediate',
        type: 'tool',
        isFree: true
      },
      {
        id: 'arduino',
        name: 'Arduino',
        description: 'Arduino is an open-source electronics platform with easy-to-use hardware and software. It provides microcontroller boards and an IDE for building interactive projects. The global Arduino community shares tutorials and projects for makers learning electronics and programming.',
        url: 'https://www.arduino.cc/',
        tags: ['Free (hardware costs)', 'Students', 'Makers', 'Engineers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
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
        url: 'https://en.unesco.org/themes/girls-youth-skills/global-youth-grant-scheme',
        tags: ['Free', 'Youth', 'Grants', 'Research'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'globalInnovationFund',
        name: 'Global Innovation Fund (GIF)',
        description: 'The Global Innovation Fund is a nonprofit investment fund that provides grants or investments (up to ~$1M+) in social-impact innovations benefiting people in developing countries.',
        url: 'https://globalinnovation.fund',
        tags: ['Grant', 'SocialImpact', 'DevelopingCountries', 'Entrepreneurs'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true
      },
      {
        id: 'helloTomorrowChallenge',
        name: 'Hello Tomorrow Global Challenge',
        description: 'Hello Tomorrow runs an international startup competition (Deep Tech Global Challenge) awarding equity-free prize funds (e.g. €100K grand prize) to early-stage deep-tech entrepreneurs worldwide.',
        url: 'https://hello-tomorrow.org/global-challenge/',
        tags: ['Free', 'Founders', 'DeepTech', 'Competition'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true
      },
      {
        id: 'kickstarter',
        name: 'Kickstarter',
        description: 'Kickstarter is a leading global crowdfunding platform for creative and tech projects; over 23M backers have pledged $8.2B to fund 265K+ projects since 2009.',
        url: 'https://www.kickstarter.com',
        tags: ['Free', 'Founders', 'Crowdfunding', 'Creators'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'indiegogo',
        name: 'Indiegogo',
        description: 'Indiegogo is a worldwide crowdfunding marketplace where entrepreneurs launch campaigns to raise funds for innovative products, design, and tech projects.',
        url: 'https://www.indiegogo.com',
        tags: ['Free', 'Founders', 'Crowdfunding'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'xprize',
        name: 'XPRIZE Foundation',
        description: 'XPRIZE is a nonprofit running global incentive competitions that award large cash prizes to teams (innovators/entrepreneurs) solving grand challenges in energy, environment, health, and more.',
        url: 'https://www.xprize.org',
        tags: ['Free', 'Innovators', 'Competitions', 'Prize'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true
      },
      {
        id: 'ycombinator',
        name: 'Y Combinator',
        description: 'Y Combinator is the world\'s most successful startup accelerator, providing $250K funding, mentorship, and network access to early-stage startups twice yearly.',
        url: 'https://www.ycombinator.com',
        tags: ['Paid', 'Accelerator', 'Startups', 'Entrepreneurs'],
        difficulty: 'advanced',
        type: 'service',
        isFree: false
      },
      {
        id: 'techstars',
        name: 'Techstars',
        description: 'Techstars is a global startup accelerator providing funding, mentorship, and a worldwide network to help entrepreneurs succeed across 150+ countries.',
        url: 'https://www.techstars.com',
        tags: ['Paid', 'Accelerator', 'Startups', 'Entrepreneurs'],
        difficulty: 'advanced',
        type: 'service',
        isFree: false
      },
      {
        id: 'seedcamp',
        name: 'Seedcamp',
        description: 'Seedcamp is Europe\'s seed fund, investing in early-stage tech startups and providing mentorship, network access, and follow-on funding support.',
        url: 'https://seedcamp.com',
        tags: ['Paid', 'Europe', 'Startups', 'VentureCapital'],
        difficulty: 'advanced',
        type: 'service',
        isFree: false
      },
      {
        id: 'grantsGov',
        name: 'Grants.gov',
        description: 'Grants.gov is the official U.S. government portal providing access to over 1,000 federal grant programs across all government agencies.',
        url: 'https://www.grants.gov',
        tags: ['Free', 'Government', 'Grants', 'US', 'Nonprofits'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'sbir',
        name: 'SBIR Program',
        description: 'The Small Business Innovation Research (SBIR) program provides R&D funding to small businesses to develop innovative technologies with commercial potential.',
        url: 'https://www.sbir.gov',
        tags: ['Free', 'SmallBusiness', 'Research', 'Innovation', 'US'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true
      },
      {
        id: 'horizonEurope',
        name: 'Horizon Europe',
        description: 'Horizon Europe is the EU\'s research and innovation program (2021-2027) with €95.5B budget supporting breakthroughs, discoveries and world-firsts.',
        url: 'https://ec.europa.eu/info/research-and-innovation/funding/funding-opportunities/funding-programmes-and-open-calls/horizon-europe_en',
        tags: ['Free', 'EU', 'Research', 'Innovation', 'Scientists'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true
      },
      {
        id: 'ashoka',
        name: 'Ashoka U',
        description: 'Ashoka U supports social entrepreneurs and changemakers through fellowships, funding, and programs that promote social innovation globally.',
        url: 'https://www.ashoka.org/en/programs/ashoka-u',
        tags: ['Free', 'SocialEntrepreneurship', 'Fellowship', 'Students'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'echoing',
        name: 'Echoing Green',
        description: 'Echoing Green provides seed funding and support to emerging social entrepreneurs tackling the world\'s biggest problems through innovative solutions.',
        url: 'https://www.echoinggreen.org',
        tags: ['Free', 'SocialEntrepreneurship', 'Fellowship', 'Changemakers'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'mozilla',
        name: 'Mozilla Foundation Grants',
        description: 'Mozilla Foundation offers grants and awards supporting internet health, open source technology, and digital literacy initiatives worldwide.',
        url: 'https://foundation.mozilla.org/en/funding/',
        tags: ['Free', 'OpenSource', 'DigitalRights', 'Technology'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'stem_action_grants',
        name: 'Society for Science – STEM Action Grants',
        description: 'The STEM Action Grants program (Society for Science) provides small grants (up to $5,000) to nonprofits led by social entrepreneurs. It aims to increase STEM participation in communities by funding innovative education initiatives.',
        url: 'https://www.societyforscience.org/stem-outreach-programs/stem-action-grants/',
        tags: ['Free (grant)', 'Students', 'Educators', 'Nonprofits'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'estem_innovation_grants',
        name: 'Pratt & Whitney Global E‑STEM Innovation Grants',
        description: 'This program (by Pratt & Whitney and NAAEE) funds nonprofits to run innovative environmental STEM education projects. It provides up to $15,000 for new or enhanced programs engaging students (11–18) in environmental problem-solving.',
        url: 'https://naaee.org/programs/e-stem/e-stem-awards',
        tags: ['Free (grant)', 'Students', 'Educators', 'Nonprofits'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'google_founders_fund',
        name: 'Google for Startups Founders Fund',
        description: 'Google for Startups runs the Founders Fund, which gives equity-free cash awards (with mentorship and cloud credits) to startup founders. Across multiple rounds, it has provided over $58M to support founders around the world.',
        url: 'https://startup.google.com/programs/founders-funds/',
        tags: ['Free (equity-free)', 'Founders', 'Entrepreneurs'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true
      },
      {
        id: 'thiel_fellowship',
        name: 'Thiel Fellowship',
        description: 'The Thiel Fellowship (by Peter Thiel) offers $200,000 grants to young entrepreneurs (usually under 23) to skip or drop out of college and work on innovative projects full-time. It supports fellows for two years as they build new technologies and companies.',
        url: 'https://thielfellowship.org/',
        tags: ['Paid (grant)', 'Students', 'Founders'],
        difficulty: 'advanced',
        type: 'service',
        isFree: false
      },
      {
        id: 'mit_solve',
        name: 'MIT Solve',
        description: 'MIT Solve is an open innovation platform that issues global challenges and provides funding, mentorship, and resources to social entrepreneurs. It has supported hundreds of "Solvers" developing tech-based solutions to issues like education, health, and climate.',
        url: 'https://solve.mit.edu/',
        tags: ['Free (challenge prize)', 'Innovators', 'Entrepreneurs', 'Researchers'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true
      },
      {
        id: 'ashoka_changemakers',
        name: 'Ashoka Changemakers',
        description: 'Ashoka Changemakers is a global network that hosts innovation challenges and contests for social entrepreneurs. It provides opportunities for innovators to gain support, visibility, and prizes by co-creating large-scale social change.',
        url: 'https://www.ashoka.org/changemakers',
        tags: ['Free', 'Innovators', 'Social Entrepreneurs'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'kiva',
        name: 'Kiva',
        description: 'Kiva is a microfinance platform that connects individual lenders to entrepreneurs worldwide. It provides crowdfunding-based loans (0% interest) to small business owners and social innovators, allowing anyone to support projects by lending capital to people who lack access to traditional credit.',
        url: 'https://www.kiva.org/',
        tags: ['Free (loan)', 'Entrepreneurs', 'Innovators'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'fulbright',
        name: 'Fulbright Program',
        description: 'The Fulbright Program offers international scholarships for students, researchers, and professionals to study or conduct research abroad. It provides full funding (tuition, travel, living expenses) for merit-based exchange projects, fostering cross-cultural innovation.',
        url: 'https://foreign.fulbrightonline.org/',
        tags: ['Free (scholarship)', 'Students', 'Researchers'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true
      },
      {
        id: 'erasmus_youth',
        name: 'Erasmus+ Youth',
        description: 'Erasmus+ is the European Union\'s program for education, training, and youth. It provides grants for youth exchanges, study abroad, internships, and volunteer projects (e.g. European Solidarity Corps), giving young people opportunities to gain international experience.',
        url: 'https://erasmus-plus.ec.europa.eu/',
        tags: ['Free (grant)', 'Students', 'Volunteers'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'unicef_innovation',
        name: 'UNICEF Innovation Fund',
        description: 'The UNICEF Innovation Fund invests in early-stage open-source technology projects that benefit children (using AI, blockchain, VR, etc.). It provides seed funding to startups and non-profits building solutions for education, health, and humanitarian challenges.',
        url: 'https://www.unicef.org/innovation/innovation-fund',
        tags: ['Free (seed funding)', 'Founders', 'Social Innovators'],
        difficulty: 'advanced',
        type: 'service',
        isFree: true
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
        url: 'https://www.spaceappschallenge.org',
        tags: ['Free', 'Students', 'Innovators', 'SpaceTech'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'mlh',
        name: 'Major League Hacking',
        description: 'Major League Hacking (MLH) is the official student hackathon league, organizing 300+ hackathons per year for 500K+ student developers worldwide.',
        url: 'https://mlh.io',
        tags: ['Free', 'Students', 'Hackathons', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'angelhack',
        name: 'AngelHack',
        description: 'AngelHack runs global hackathon series and innovation programs since 2011, partnering with tech companies to engage developers (300K+ in community) in collaborative projects.',
        url: 'https://angelhack.com',
        tags: ['Free', 'Developers', 'Hackathons', 'Innovation'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'devpost',
        name: 'Devpost',
        description: 'Devpost is the home for hackathons, powering online and in-person hackathons worldwide with project submissions, judging tools, and community features.',
        url: 'https://devpost.com',
        tags: ['Free', 'Hackathons', 'Developers', 'Projects'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'hackerearth',
        name: 'HackerEarth Challenges',
        description: 'HackerEarth hosts programming challenges, hackathons, and coding competitions connecting developers globally while helping them improve skills and find opportunities.',
        url: 'https://www.hackerearth.com/challenges/',
        tags: ['Free', 'Programming', 'Competitions', 'Developers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'ethglobal',
        name: 'ETHGlobal',
        description: 'ETHGlobal organizes Ethereum hackathons worldwide, bringing developers together to build decentralized applications and advance blockchain technology.',
        url: 'https://ethglobal.com',
        tags: ['Free', 'Blockchain', 'Ethereum', 'Web3', 'Developers'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: true
      },
      {
        id: 'hack2skill',
        name: 'Hack2skill',
        description: 'Hack2skill is an upskilling platform organizing hackathons and tech camps focused on emerging technologies like Blockchain, Web3, and DeepTech.',
        url: 'https://hack2skill.com',
        tags: ['Free', 'India', 'Upskilling', 'EmergingTech'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'unstop',
        name: 'Unstop',
        description: 'Unstop (formerly Dare2Compete) is India\'s largest platform for competitions, hackathons, scholarships, and internships for students and professionals.',
        url: 'https://unstop.com',
        tags: ['Free', 'India', 'Students', 'Competitions'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'googleSummerOfCode',
        name: 'Google Summer of Code',
        description: 'Google Summer of Code is a global online program funding students to work on open source projects with mentoring organizations over the summer.',
        url: 'https://summerofcode.withgoogle.com',
        tags: ['Paid', 'Students', 'OpenSource', 'Mentorship'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: false
      },
      {
        id: 'globalGameJam',
        name: 'Global Game Jam',
        description: 'Global Game Jam is the world\'s largest game creation event, where participants create games in 48 hours at sites around the globe.',
        url: 'https://globalgamejam.org',
        tags: ['Free', 'GameDevelopment', 'Creativity', 'Community'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'codingNinjas',
        name: 'Coding Ninjas Events',
        description: 'Coding Ninjas organizes hackathons, coding competitions, and tech events to help students and professionals enhance their programming skills.',
        url: 'https://www.codingninjas.com/events',
        tags: ['Free', 'Programming', 'Students', 'SkillDevelopment'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'hacktoberfest',
        name: 'Hacktoberfest',
        description: 'Hacktoberfest is an annual month-long celebration of open source software encouraging contributions to open source projects worldwide.',
        url: 'https://hacktoberfest.com',
        tags: ['Free', 'OpenSource', 'Community', 'Global'],
        difficulty: 'beginner',
        type: 'service',
        isFree: true
      },
      {
        id: 'startup_weekend',
        name: 'Techstars Startup Weekend',
        description: 'Startup Weekend (by Techstars) is a 54-hour global event where entrepreneurs pitch ideas, form teams, and launch startups over a weekend. Held in hundreds of cities, it provides hands-on experiential learning and networking for aspiring founders.',
        url: 'https://www.techstars.com/communities/startup-weekend',
        tags: ['Paid (entry fee)', 'Students', 'Entrepreneurs'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: false
      },
      {
        id: 'hackster',
        name: 'Hackster.io',
        description: 'Hackster.io is a community dedicated to learning hardware and electronics. It hosts projects, tutorials, and contests for topics like Arduino, Raspberry Pi, IoT, and robotics. Makers and innovators share their hardware projects and learn from others globally.',
        url: 'https://www.hackster.io/',
        tags: ['Free', 'Students', 'Makers', 'Engineers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'techcrunch_disrupt',
        name: 'TechCrunch Disrupt',
        description: 'TechCrunch Disrupt is a major technology conference series featuring startup battles, hackathons, and panel discussions. It brings together entrepreneurs, investors, and developers, and includes a Startup Battlefield competition for new startups.',
        url: 'https://techcrunch.com/events/disrupt-sf-2024/',
        tags: ['Paid (registration)', 'Entrepreneurs', 'Developers'],
        difficulty: 'advanced',
        type: 'service',
        isFree: false
      },
      {
        id: 'web_summit',
        name: 'Web Summit',
        description: 'Web Summit is one of the world\'s largest technology conferences held annually in Europe. It features keynote speeches, startup pitch contests, and networking for founders and tech leaders, drawing tens of thousands of attendees worldwide.',
        url: 'https://websummit.com/',
        tags: ['Paid (tickets)', 'Entrepreneurs', 'Technologists'],
        difficulty: 'advanced',
        type: 'service',
        isFree: false
      },
      {
        id: 'hackmit',
        name: 'HackMIT',
        description: 'HackMIT is a student-run hackathon at MIT, and one of the largest collegiate hackathons in the U.S. It gathers hundreds of students for a 24-hour coding event to create innovative tech projects, network, and learn from invited speakers.',
        url: 'https://hackmit.org/',
        tags: ['Free', 'Students', 'Developers'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'mlh_fellowship',
        name: 'MLH Fellowship',
        description: 'The MLH Fellowship is a 12-week program by Major League Hacking. It connects students with real-world software projects and mentors. Fellows spend the summer building projects that drive open-source software they can showcase, advancing their skills in a collaborative environment.',
        url: 'https://fellowship.mlh.io/',
        tags: ['Free (stipend)', 'Students', 'Developers'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
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
        url: 'https://www.coursera.org',
        tags: ['Free', 'Paid', 'Students', 'LifelongLearning'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'edx',
        name: 'edX',
        description: 'edX is a nonprofit online learning destination (founded by Harvard/MIT) providing MOOCs and interactive online courses across subjects like engineering, data science, humanities and AI.',
        url: 'https://www.edx.org',
        tags: ['Free', 'Paid', 'Students', 'LifelongLearning'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'khanAcademy',
        name: 'Khan Academy',
        description: 'Khan Academy is a free, nonprofit educational platform offering video lessons and exercises from kindergarten through early college, empowering learners to study at their own pace.',
        url: 'https://www.khanacademy.org',
        tags: ['Free', 'Students', 'Education', 'Teachers'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'freecodecamp',
        name: 'freeCodeCamp',
        description: 'freeCodeCamp is a nonprofit open source curriculum where millions of people worldwide learn to code for free through interactive coding lessons, projects, and certifications.',
        url: 'https://www.freecodecamp.org',
        tags: ['Free', 'Students', 'Coding', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'udemy',
        name: 'Udemy',
        description: 'Udemy is a massive online course marketplace with ~260,000 courses and 80 million students globally; it covers topics from programming and marketing to design (many affordable or free courses).',
        url: 'https://www.udemy.com',
        tags: ['Paid', 'Students', 'Professionals', 'OnDemand'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: false
      },
      {
        id: 'udacity',
        name: 'Udacity',
        description: 'Udacity is an online education platform offering technology-focused \'Nanodegree\' programs; it has over 17 million registered learners in 240+ countries, focusing on career-ready tech skills.',
        url: 'https://www.udacity.com',
        tags: ['Paid', 'Students', 'Professionals', 'TechEducation'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: false
      },
      {
        id: 'pluralsight',
        name: 'Pluralsight',
        description: 'Pluralsight is a technology learning platform offering expert-authored courses, hands-on labs, and skill assessments for software development, IT ops, and creative skills.',
        url: 'https://www.pluralsight.com',
        tags: ['Paid', 'Developers', 'IT', 'ProfessionalDevelopment'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: false
      },
      {
        id: 'codecademy',
        name: 'Codecademy',
        description: 'Codecademy offers interactive coding lessons and projects in 15+ programming languages, with hands-on learning and real-world projects for aspiring developers.',
        url: 'https://www.codecademy.com',
        tags: ['Free', 'Paid', 'Coding', 'Students', 'Interactive'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'brilliant',
        name: 'Brilliant',
        description: 'Brilliant makes learning STEM subjects interactive through problem-solving and visual learning, covering math, science, computer science, and data analysis.',
        url: 'https://brilliant.org',
        tags: ['Paid', 'STEM', 'Students', 'Interactive', 'Math'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: false
      },
      {
        id: 'datacamp',
        name: 'DataCamp',
        description: 'DataCamp provides interactive courses in data science, analytics, and AI, teaching R, Python, SQL, and other data skills through hands-on exercises.',
        url: 'https://www.datacamp.com',
        tags: ['Paid', 'DataScience', 'Python', 'R', 'Analytics'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: false
      },
      {
        id: 'linkedin',
        name: 'LinkedIn Learning',
        description: 'LinkedIn Learning offers professional development courses taught by industry experts, covering business, technology, and creative skills with certificates.',
        url: 'https://www.linkedin.com/learning/',
        tags: ['Paid', 'Professionals', 'Business', 'Technology'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: false
      },
      {
        id: 'mitopencourseware',
        name: 'MIT OpenCourseWare',
        description: 'MIT OpenCourseWare provides free access to course materials from virtually all MIT courses, including lecture notes, exams, and videos.',
        url: 'https://ocw.mit.edu',
        tags: ['Free', 'MIT', 'Engineering', 'Science', 'Mathematics'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: true
      },
      {
        id: 'w3schools',
        name: 'W3Schools',
        description: 'W3Schools is a comprehensive web development learning platform offering tutorials, references, and exercises for HTML, CSS, JavaScript, and more.',
        url: 'https://www.w3schools.com',
        tags: ['Free', 'WebDevelopment', 'Programming', 'Tutorials'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'sololearn',
        name: 'SoloLearn',
        description: 'SoloLearn is a mobile-first platform for learning programming languages through bite-sized lessons, coding challenges, and community interaction.',
        url: 'https://www.sololearn.com',
        tags: ['Free', 'Paid', 'Mobile', 'Programming', 'Community'],
        difficulty: 'beginner',
        type: 'app',
        isFree: true
      },
      {
        id: 'futurelearn',
        name: 'FutureLearn',
        description: 'FutureLearn is a UK-based platform offering courses from leading universities and cultural institutions, with social learning and diverse subjects.',
        url: 'https://www.futurelearn.com',
        tags: ['Free', 'Paid', 'Universities', 'SocialLearning', 'UK'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'codeorg',
        name: 'Code.org',
        description: 'Code.org is a nonprofit platform dedicated to expanding access to computer science in schools. It provides free coding lessons and resources for K–12 students (and teachers), and organizes the annual "Hour of Code" to introduce millions of students to programming.',
        url: 'https://code.org/',
        tags: ['Free', 'Students', 'Educators', 'Beginners'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'leetcode',
        name: 'LeetCode',
        description: 'LeetCode is a programming practice platform focusing on coding interview problems. It offers a large collection of algorithmic challenges, contests, and discussion forums, helping users improve problem-solving skills and prepare for technical interviews.',
        url: 'https://leetcode.com/',
        tags: ['Free (limited)', 'Paid (Premium)', 'Students', 'Developers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'fastai',
        name: 'fast.ai',
        description: 'fast.ai provides free online courses on deep learning and machine learning with a practical focus. Its courses emphasize coding and real-world projects using frameworks like PyTorch, aiming to make AI accessible and useful for students and developers.',
        url: 'https://www.fast.ai/',
        tags: ['Free', 'Students', 'Developers', 'Researchers'],
        difficulty: 'advanced',
        type: 'platform',
        isFree: true
      },
      {
        id: 'microsoft_learn',
        name: 'Microsoft Learn',
        description: 'Microsoft Learn is Microsoft\'s free online platform for learning technical skills. It offers interactive modules and learning paths covering Microsoft technologies such as Azure, Power Platform, and .NET. Users learn through hands-on labs and get digital certifications.',
        url: 'https://docs.microsoft.com/learn',
        tags: ['Free', 'Students', 'IT Professionals', 'Developers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'google_garage',
        name: 'Google Digital Garage',
        description: 'Google Digital Garage provides free online training in digital skills and career development. It offers courses and certifications in data, technology, and professional development (e.g. "Fundamentals of Digital Marketing"), helping people build skills for today\'s job market.',
        url: 'https://learndigital.withgoogle.com/digitalgarage',
        tags: ['Free', 'Students', 'Professionals'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'ibm_skillsbuild',
        name: 'IBM SkillsBuild',
        description: 'IBM SkillsBuild (formerly IBM Skills) is a free learning platform offering courses and credentials in technology and professional skills. It covers topics like cybersecurity, cloud, and AI, targeting students and adult learners to gain industry-aligned skills.',
        url: 'https://skillsbuild.org/',
        tags: ['Free', 'Students', 'Professionals'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'alison',
        name: 'Alison',
        description: 'Alison is an online learning platform offering free courses and certificates in many subjects (IT, business, languages, etc.). It focuses on workplace skills and vocational training, providing open access to courses with optional paid certificates.',
        url: 'https://alison.com/',
        tags: ['Free (courses)', 'Paid (certificates)', 'Students', 'Professionals'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'codechef',
        name: 'CodeChef',
        description: 'CodeChef is a competitive programming platform offering coding challenges and contests for all levels of programmers.',
        url: 'https://www.codechef.com/',
        tags: ['Free', 'Competitive Programming', 'Students', 'Developers'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'codeforces',
        name: 'Codeforces',
        description: 'Codeforces hosts competitive programming contests and a large problem archive to practice algorithms and data structures.',
        url: 'https://codeforces.com/',
        tags: ['Free', 'Competitive Programming', 'Students', 'Developers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'hackerrank',
        name: 'HackerRank',
        description: 'HackerRank offers coding challenges across various domains and is widely used for interview preparation.',
        url: 'https://www.hackerrank.com/',
        tags: ['Free', 'Paid', 'Coding Practice', 'Interview Prep'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'mdn',
        name: 'MDN Web Docs',
        description: 'MDN Web Docs provides in-depth documentation and learning resources for web technologies including HTML, CSS, and JavaScript.',
        url: 'https://developer.mozilla.org/',
        tags: ['Free', 'Web Development', 'Documentation', 'Standards'],
        difficulty: 'beginner',
        type: 'docs',
        isFree: true
      },
      {
        id: 'googlecloudtraining',
        name: 'Google Cloud Training',
        description: 'Google Cloud Training offers learning resources and certification prep for Google Cloud technologies.',
        url: 'https://cloud.google.com/training',
        tags: ['Free', 'Paid', 'Cloud Computing', 'Google Cloud'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: false
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
        url: 'https://summerofcode.withgoogle.com',
        tags: ['Paid', 'Students', 'OpenSource', 'Mentorship'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: false
      },
      {
        id: 'outreachy',
        name: 'Outreachy',
        description: 'Outreachy provides paid, remote open-source internships to people from underrepresented groups in tech, fostering diversity by working on programming, UX, documentation or design projects.',
        url: 'https://www.outreachy.org',
        tags: ['Paid', 'OpenSource', 'Diversity', 'Students'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: false
      },
      {
        id: 'firstTimersOnly',
        name: 'First Timers Only',
        description: 'First Timers Only is a community initiative and guide to help newcomers make a welcoming first contribution to open source, by highlighting easy starter issues and tutorials.',
        url: 'https://www.firsttimersonly.com',
        tags: ['Free', 'OpenSource', 'Beginners', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'goodFirstIssues',
        name: 'Good First Issues',
        description: 'Good First Issues curates easy-to-solve issues for new open source contributors, making it simple to find beginner-friendly projects across GitHub.',
        url: 'https://goodfirstissues.com',
        tags: ['Free', 'OpenSource', 'Beginners', 'GitHub'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'upForGrabs',
        name: 'Up For Grabs',
        description: 'Up For Grabs aggregates projects with tasks specifically marked for new contributors, making open source contribution accessible for developers at any level.',
        url: 'https://up-for-grabs.net',
        tags: ['Free', 'OpenSource', 'Community', 'Beginners'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'openSourceFriday',
        name: 'Open Source Friday',
        description: 'Open Source Friday is a movement encouraging developers and companies to contribute to open source projects every Friday, supported by GitHub.',
        url: 'https://opensourcefriday.com',
        tags: ['Free', 'OpenSource', 'Community', 'GitHub'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'girlsWhoCode',
        name: 'Girls Who Code',
        description: 'Girls Who Code is a nonprofit closing the gender gap in technology through education programs, community building, and career support for women in tech.',
        url: 'https://girlswhocode.com',
        tags: ['Free', 'Women', 'Education', 'Community', 'Tech'],
        difficulty: 'beginner',
        type: 'service',
        isFree: true
      },
      {
        id: 'codeForAmerica',
        name: 'Code for America',
        description: 'Code for America engages volunteers to build technology solutions for government and community challenges, promoting civic technology and digital equity.',
        url: 'https://codeforamerica.org',
        tags: ['Free', 'CivicTech', 'Community', 'Government', 'US'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'contributorCovenant',
        name: 'Contributor Covenant',
        description: 'Contributor Covenant provides a code of conduct for open source projects, fostering welcoming and inclusive communities for all contributors.',
        url: 'https://www.contributor-covenant.org',
        tags: ['Free', 'OpenSource', 'Community', 'Inclusion'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'linuxFoundation',
        name: 'Linux Foundation',
        description: 'Linux Foundation supports the growth of Linux and collaborative development, offering training, certification, and resources for open source technologies.',
        url: 'https://www.linuxfoundation.org',
        tags: ['Free', 'Paid', 'Linux', 'OpenSource', 'Training'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'apacheSoftware',
        name: 'Apache Software Foundation',
        description: 'Apache Software Foundation provides organizational, legal, and financial support for over 350 open source projects, promoting community-driven development.',
        url: 'https://www.apache.org',
        tags: ['Free', 'OpenSource', 'Community', 'Software'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'mozilla',
        name: 'Mozilla Contributors',
        description: 'Mozilla Contributors program welcomes volunteers to contribute to Firefox, Thunderbird, and other Mozilla projects through coding, testing, and community support.',
        url: 'https://www.mozilla.org/contribute/',
        tags: ['Free', 'OpenSource', 'Community', 'Firefox'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'first_contributions',
        name: 'First Contributions',
        description: 'First Contributions is an open-source project that helps beginners make their first contribution to a software project. It provides a step-by-step tutorial on using Git and GitHub, guiding new developers through their first pull request to open source.',
        url: 'https://github.com/firstcontributions/first-contributions',
        tags: ['Free', 'Beginners', 'OpenSource'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'eclipse_mentorship',
        name: 'Eclipse Foundation Mentorship',
        description: 'The Eclipse Foundation runs an annual mentorship program where students work on open-source projects (particularly in Java and IoT). Students receive stipends and mentorship from industry professionals while contributing to real-world software under the Eclipse umbrella.',
        url: 'https://projects.eclipse.org/projects/eclipse/mentorship',
        tags: ['Paid (stipend)', 'Students', 'OpenSource'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: false
      },
      {
        id: 'numfocus_fellowships',
        name: 'NumFOCUS Fellowships',
        description: 'NumFOCUS is a nonprofit supporting open-source scientific computing projects. It provides grants and fellowships to contributors of projects like NumPy, SciPy, and Jupyter. These awards fund developers and researchers working on open data science tools.',
        url: 'https://numfocus.org/programs/fellowship',
        tags: ['Paid (fellowship)', 'Developers', 'Researchers'],
        difficulty: 'advanced',
        type: 'service',
        isFree: false
      },
      {
        id: 'pycon_sprints',
        name: 'PyCon Code Sprints',
        description: 'PyCon (Python Conference) hosts post-conference Code Sprints where attendees collaborate on open-source Python projects. These sprints bring together Python enthusiasts to work with core developers and community members, contributing code and learning from each other.',
        url: 'https://us.pycon.org/2024/sprints/',
        tags: ['Free', 'Developers', 'OpenSource', 'Pythonistas'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'rails_girls_soc',
        name: 'Rails Girls Summer of Code',
        description: 'Rails Girls Summer of Code is a global fellowship program that funds female and non-binary contributors to spend the summer building open source projects (with a stipend). It provides mentorship to encourage diversity in tech and real-world software development experience.',
        url: 'https://railsgirlssummerofcode.org/',
        tags: ['Paid (stipend)', 'Students', 'Women in Tech', 'OpenSource'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: false
      },
      {
        id: 'un_volunteers',
        name: 'UN Volunteers (UNV)',
        description: 'The United Nations Volunteers program offers online and onsite volunteering opportunities for global development. Skilled tech volunteers can join UN and partner projects (in education, health, environment, etc.) to contribute their expertise to humanitarian and development missions.',
        url: 'https://www.unv.org/',
        tags: ['Free', 'Volunteers', 'Developers', 'NGOs'],
        difficulty: 'intermediate',
        type: 'service',
        isFree: true
      },
      {
        id: 'code_for_all',
        name: 'Code for All',
        description: 'Code for All is a global network of civic technology organizations (including Code for America and international brigades). Members share knowledge and collaborate on open-source civic projects (open data, e-government tools) to empower communities worldwide.',
        url: 'https://codeforall.org/',
        tags: ['Free', 'Volunteers', 'CivicTech', 'Community'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'hot_osm',
        name: 'Humanitarian OpenStreetMap Team (HOT)',
        description: 'The Humanitarian OpenStreetMap Team is a volunteer organization that uses OpenStreetMap data for disaster response and humanitarian projects. Volunteers around the world map roads, buildings, and resources in crisis areas to support NGOs and improve emergency response.',
        url: 'https://www.hotosm.org/',
        tags: ['Free', 'Volunteers', 'GIS', 'Humanitarian'],
        difficulty: 'beginner',
        type: 'service',
        isFree: true
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
        url: 'https://dev.to',
        tags: ['Free', 'Developers', 'Community', 'Networking'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'github',
        name: 'GitHub',
        description: 'GitHub is the world\'s largest developer platform and code hosting site (100M+ repositories) fostering a global community of coders contributing to open source; it emphasizes collaboration and inclusion.',
        url: 'https://github.com',
        tags: ['Free', 'Paid', 'Developers', 'OpenSource'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'stackExchange',
        name: 'Stack Exchange',
        description: 'Stack Exchange is a network of 182 expert Q&A communities (including Stack Overflow for programmers) where users ask and answer questions on diverse topics; the best answers are voted to the top.',
        url: 'https://stackexchange.com',
        tags: ['Free', 'Students', 'Professionals', 'Q&A'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'stackoverflow',
        name: 'Stack Overflow',
        description: 'Stack Overflow is the largest online community for developers to learn, share knowledge, and build careers, with over 50 million visitors monthly.',
        url: 'https://stackoverflow.com',
        tags: ['Free', 'Developers', 'Q&A', 'Programming'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'reddit',
        name: 'Reddit Programming Communities',
        description: 'Reddit hosts numerous programming communities like r/programming, r/learnprogramming, and language-specific subreddits for developers to discuss, learn, and share.',
        url: 'https://www.reddit.com/r/programming',
        tags: ['Free', 'Community', 'Programming', 'Discussion'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'discord',
        name: 'Programming Discord Servers',
        description: 'Discord hosts thousands of programming communities where developers chat in real-time, share projects, get help, and collaborate on coding challenges.',
        url: 'https://discord.com',
        tags: ['Free', 'Community', 'RealTime', 'Programming'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'hashnode',
        name: 'Hashnode',
        description: 'Hashnode is a blogging platform for developers to share technical articles, build their personal brand, and connect with the global developer community.',
        url: 'https://hashnode.com',
        tags: ['Free', 'Blogging', 'Developers', 'TechnicalWriting'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'indie-hackers',
        name: 'Indie Hackers',
        description: 'Indie Hackers is a community of entrepreneurs sharing the strategies and revenue numbers behind their companies and side projects.',
        url: 'https://www.indiehackers.com',
        tags: ['Free', 'Entrepreneurs', 'Startups', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'producthunt',
        name: 'Product Hunt',
        description: 'Product Hunt is a community for discovering and launching new products, where makers share their latest creations and users discover cool new tools.',
        url: 'https://www.producthunt.com',
        tags: ['Free', 'ProductLaunch', 'Community', 'Innovation'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'hackernews',
        name: 'Hacker News',
        description: 'Hacker News is a social news website focusing on computer science and entrepreneurship, run by startup accelerator Y Combinator.',
        url: 'https://news.ycombinator.com',
        tags: ['Free', 'TechNews', 'Startups', 'Discussion'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'behance',
        name: 'Behance',
        description: 'Behance is Adobe\'s creative community where designers, artists, and creatives showcase their work, discover inspiration, and connect with potential clients.',
        url: 'https://www.behance.net',
        tags: ['Free', 'Design', 'Creatives', 'Portfolio'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'dribbble',
        name: 'Dribbble',
        description: 'Dribbble is a community of designers sharing screenshots of their work, process, and projects, serving as inspiration and networking platform for creatives.',
        url: 'https://dribbble.com',
        tags: ['Free', 'Paid', 'Design', 'Inspiration', 'Networking'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'designerHangout',
        name: 'Designer Hangout',
        description: 'Designer Hangout is a Slack community of 35,000+ UX designers sharing resources, job opportunities, and career advice in a supportive environment.',
        url: 'https://designerhangout.co',
        tags: ['Free', 'UXDesign', 'Slack', 'Career', 'Networking'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'women-who-code',
        name: 'Women Who Code',
        description: 'Women Who Code is a global nonprofit empowering women in technology through community support, professional development, and job placement assistance.',
        url: 'https://www.womenwhocode.com',
        tags: ['Free', 'Women', 'Technology', 'Community', 'Career'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'techladies',
        name: 'TechLadies',
        description: 'TechLadies is Asia\'s largest community for women in tech, providing mentorship, networking, and career opportunities across the region.',
        url: 'https://www.techladies.co',
        tags: ['Free', 'Women', 'Asia', 'Mentorship', 'Career'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'elpha',
        name: 'Elpha',
        description: 'Elpha is a professional network for women in tech, offering career advice, job opportunities, and community support in a private, inclusive environment.',
        url: 'https://elpha.com',
        tags: ['Free', 'Women', 'Professional', 'Career', 'Networking'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'buildinpublic',
        name: 'Build in Public',
        description: 'Build in Public is a movement and community where entrepreneurs share their startup journey transparently, including failures, successes, and metrics.',
        url: 'https://buildinpublic.xyz',
        tags: ['Free', 'Entrepreneurs', 'Transparency', 'Startups'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'nomadlist',
        name: 'Nomad List',
        description: 'Nomad List is a global community of remote workers and digital nomads sharing experiences, city guides, and networking opportunities worldwide.',
        url: 'https://nomadlist.com',
        tags: ['Paid', 'RemoteWork', 'DigitalNomads', 'Travel', 'Community'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: false
      },
      {
        id: 'angellist',
        name: 'AngelList (Wellfound)',
        description: 'AngelList (now Wellfound) connects startups with talent and investors, offering job opportunities, funding connections, and startup ecosystem networking.',
        url: 'https://wellfound.com',
        tags: ['Free', 'Startups', 'Jobs', 'Investors', 'Networking'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'kaggle',
        name: 'Kaggle',
        description: 'Kaggle is a platform for data science competitions, datasets, and machine learning collaborations, hosting a community of over 8 million data scientists.',
        url: 'https://www.kaggle.com',
        tags: ['Free', 'DataScience', 'MachineLearning', 'Competitions', 'Community'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'reddit_learn',
        name: 'Reddit – r/learnprogramming',
        description: 'r/learnprogramming is a popular subreddit (online forum) where programmers (especially beginners) ask questions, share learning resources, and get coding advice. It\'s part of Reddit\'s community network, fostering peer-to-peer help among learners.',
        url: 'https://www.reddit.com/r/learnprogramming/',
        tags: ['Free', 'Students', 'Beginners'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'reddit_startups',
        name: 'Reddit – r/startups',
        description: 'r/startups is a subreddit community for entrepreneurs and startup enthusiasts. Members discuss starting and growing businesses, share funding tips, pitch ideas, and learn from the experiences of founders. It\'s a global forum for lean startup advice and networking.',
        url: 'https://www.reddit.com/r/startups/',
        tags: ['Free', 'Founders', 'Entrepreneurs'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'meetup',
        name: 'Meetup',
        description: 'Meetup is a platform for finding and organizing local in-person or virtual groups. Tech enthusiasts, developers, and innovators use it to create/join communities (e.g. coding workshops, AI study groups, hackathons) in hundreds of cities worldwide.',
        url: 'https://www.meetup.com/',
        tags: ['Free', 'Paid (organizers)', 'Students', 'Professionals'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'startup_grind',
        name: 'Startup Grind',
        description: 'Startup Grind is a global community of entrepreneurs that hosts events (meetups, conferences) and provides online resources. It connects founders worldwide through local chapters, offering mentorship and networking to help grow startup communities.',
        url: 'https://www.startupgrind.com/',
        tags: ['Free (events)', 'Entrepreneurs', 'Founders'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'digitalocean_community',
        name: 'DigitalOcean Community',
        description: 'DigitalOcean Community provides tutorials, Q&A, and forums focused on cloud computing and programming. Developers use it to learn about web infrastructure, Linux, and app deployment through community-contributed articles and answers.',
        url: 'https://www.digitalocean.com/community',
        tags: ['Free', 'Students', 'Developers'],
        difficulty: 'intermediate',
        type: 'platform',
        isFree: true
      },
      {
        id: 'freecodecamp_forum',
        name: 'freeCodeCamp Forum',
        description: 'The freeCodeCamp Forum is an online community for learners of freeCodeCamp. Members discuss coding challenges, seek help on projects, and share programming knowledge. It supports a large community of self-taught coders helping each other improve.',
        url: 'https://forum.freecodecamp.org/',
        tags: ['Free', 'Students', 'Coders'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'hackernoon',
        name: 'HackerNoon',
        description: 'HackerNoon is an independent tech media platform where developers and founders write articles and tutorials. It\'s a community-driven publication covering software development, startups, and industry trends, allowing innovators to share knowledge and stories.',
        url: 'https://hackernoon.com/',
        tags: ['Free', 'Developers', 'Startups'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'geeksforgeeks',
        name: 'GeeksforGeeks',
        description: 'GeeksforGeeks is a computer science portal and community that offers programming tutorials, coding problems, and interview preparation resources. It helps students and developers learn algorithms, data structures, and practice coding through a vast library of articles.',
        url: 'https://www.geeksforgeeks.org/',
        tags: ['Free', 'Students', 'Developers', 'Beginners'],
        difficulty: 'beginner',
        type: 'platform',
        isFree: true
      },
      {
        id: 'gdg',
        name: 'Google Developer Groups',
        description: 'Google Developer Groups (GDG) are local developer communities where developers meet to discuss and learn about Google technologies.',
        url: 'https://developers.google.com/community/gdg',
        tags: ['Free', 'Community', 'Google', 'Events'],
        difficulty: 'beginner',
        type: 'community',
        isFree: true
      },
      {
        id: 'devto',
        name: 'Dev.to',
        description: 'Dev.to is an online community where software developers share articles, tutorials, and discussions.',
        url: 'https://dev.to/',
        tags: ['Free', 'Community', 'Blogging', 'Developers'],
        difficulty: 'beginner',
        type: 'community',
        isFree: true
      }
    ]
  }
];
