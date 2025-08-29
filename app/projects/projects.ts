export const projects = [
  {
    title: "Droply | Modern Cloud Storage",
    slug: "Droply",
    tagline:
      "A secure, fast, and modern cloud storage platform designed for seamless image management.",
    overview:
      "Droply is a powerful cloud storage solution built with Next.js, tailored specifically for image storage and management. It provides secure authentication, optimized image handling, and a beautiful, responsive interface. With folder organization, file starring, trash restore, and dark mode, Droply delivers a smooth and modern file management experience.",
    features: [
      "🔐 Secure authentication powered by Clerk",
      "📸 Optimized image storage and delivery via ImageKit",
      "📁 File management with folders, starring, trash & restore",
      "🎨 Sleek, modern UI with HeroUI + Tailwind CSS",
      "🌙 Dark mode with custom lime accent theme",
      "📱 Fully responsive design across devices",
    ],
    techStack: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "HeroUI",
      "Clerk",
      "PostgreSQL (Neon)",
      "Drizzle ORM",
      "ImageKit",
      "Vercel",
    ],
    challenges: [
      "Implementing secure, scalable authentication with Clerk.",
      "Designing a clean, modern UI with dark mode support.",
      "Managing image uploads and optimizations using ImageKit.",
      "Ensuring smooth file operations like starring, trash, and restore.",
    ],
    learnings: [
      "Built a production-ready Next.js 15 project with App Router.",
      "Integrated Clerk for authentication and user management.",
      "Worked with Drizzle ORM and Neon for a type-safe database setup.",
      "Improved skills in responsive UI design with HeroUI + Tailwind.",
    ],
    feedback: false,
    links: {
      live: "https://droply-main-five.vercel.app",
      github: "https://github.com/PreetKot/Droply",
    },
  },
  
  {
    title: "QuickCourt | Real-Time Court Booking",
    slug: "QuickCourt",
    tagline:
      "A real-time multi-sport court discovery, booking, and engagement platform with payments and gamification.",
    overview:
      "QuickCourt is a modern platform that enables users to discover sports facilities, book courts in real-time, and engage with loyalty rewards. It features a transactional booking engine with overlap prevention, Razorpay payment integration, OTP-based authentication, and gamified user engagement with streaks, points, referrals, and badges. Owners can submit facilities for approval, while admins manage workflows through secure role-based access.",
    features: [
      "🏸 Real-time booking engine with slot locking & availability checks",
      "💳 Secure payments via Razorpay (orders, refunds, signature validation)",
      "🔐 OTP signup, JWT auth (access + refresh), role-based access (User / Owner / Admin)",
      "📊 Loyalty & rewards system: points, streaks, badges, referrals",
      "📱 Responsive React UI with Tailwind + shadcn/ui + Motion FX",
      "🗂 Facility submission with admin approval workflows",
      "⚡ Planned: Socket.IO real-time updates & leaderboards",
    ],
    techStack: [
      "React + Vite",
      "Tailwind CSS + shadcn/ui",
      "Framer Motion",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL (Neon)",
      "JWT Auth",
      "Razorpay",
      "Socket.IO (planned)",
    ],
    challenges: [
      "Designing a transactional booking system to prevent slot overlaps.",
      "Integrating secure Razorpay payment flows with signature verification.",
      "Building a scalable loyalty system with streaks, points, and badges.",
      "Managing multi-role workflows (Admin, Owner, User) with secure auth.",
    ],
    learnings: [
      "Implemented JWT rotation with access/refresh tokens.",
      "Worked with Prisma & Neon for scalable relational database design.",
      "Gained experience in secure payment integration with Razorpay.",
      "Designed gamification workflows (referrals, badges, streak tracking).",
    ],
    feedback: false,
    links: {
      live: "https://quick-court-ten.vercel.app/", // Add deployment link if available
      github: "https://github.com/PreetKot/QuickCourt", // Add repo link if public
    },
  },
   {
    title: "FinTrack | AI-Powered Personal Finance",
    slug: "FinTrack",
    tagline:
      "Transform your financial life with intelligent budgeting, expense tracking, and personalized AI insights.",
    overview:
      "FinTrack is a modern personal finance management app that leverages AI to help users track expenses, optimize budgets, and improve financial health. Built with Next.js and Tailwind CSS, it provides a beautiful, real-time dashboard with interactive charts, smart recommendations, and secure authentication. Users can manage income, expenses, and budgets seamlessly, with AI-driven insights tailored to their spending patterns.",
    features: [
      "🧠 AI-powered financial insights and personalized budgeting tips",
      "📊 Interactive dashboard with real-time charts & analytics",
      "💰 Smart budget management with progress indicators & alerts",
      "📈 Expense tracking with categories, receipts, and history",
      "💵 Income management with financial health scoring",
      "🔒 Secure Clerk authentication & end-to-end data privacy",
      "📱 Responsive design optimized for mobile & desktop",
    ],
    techStack: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Clerk",
      "Drizzle ORM",
      "NeonDB",
      "OpenAI API",
      "Recharts",
      "Lucide React",
      "shadcn/ui",
    ],
    challenges: [
      "Integrating OpenAI for personalized financial insights.",
      "Designing a clean, intuitive dashboard for real-time analytics.",
      "Structuring Drizzle ORM schemas for multi-income/expense tracking.",
      "Ensuring security and privacy with Clerk and encrypted storage.",
    ],
    learnings: [
      "Gained hands-on experience in AI integration with OpenAI API.",
      "Improved dashboard design skills with Recharts and Framer Motion.",
      "Mastered secure authentication & role management using Clerk.",
      "Enhanced TypeScript skills with strongly typed database models.",
    ],
    feedback: false,
    links: {
      live: "https://fin-track-rust.vercel.app/", // replace if deployed
      github: "https://github.com/PreetKot/FinTrack",
    },
  },
  {
    title: "AI Fitness Trainer | AI-Powered Health & Fitness",
    slug: "ai-fitness-trainer",
    tagline:
      "Transform your body with advanced AI technology — personalized workouts, nutrition tracking, and real-time progress monitoring.",
    overview:
      "AI Fitness Trainer is a next-generation fitness platform powered by artificial intelligence. It offers tailored workout plans, smart nutrition insights, and real-time analytics to help users achieve their health goals. With a cyberpunk-inspired UI, responsive design, and integrated AI chatbot, the app delivers an engaging and personalized fitness experience. Users can track workouts, monitor nutrition, and set goals with ease — all backed by secure authentication and real-time data management.",
    features: [
      "🤖 AI-powered assistant for contextual fitness & nutrition guidance",
      "🏋️ Workout management with routines, timers & progress tracking",
      "🥗 Nutrition tracking with calorie calculator & macro insights",
      "📊 Analytics dashboard with real-time charts & goal tracking",
      "🎨 Cyberpunk-themed responsive UI with animations & notifications",
      "🔒 Secure Clerk authentication & Convex real-time database",
      "🎙️ Voice AI integration with VAPI for interactive experiences",
    ],
    techStack: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "Tailwind CSS 4",
      "Radix UI",
      "Lucide React",
      "Chart.js",
      "Clerk",
      "Convex",
      "Google AI",
      "VAPI",
      "Framer Motion",
    ],
    challenges: [
      "Designing a cyberpunk-inspired UI while maintaining usability.",
      "Integrating AI responses for personalized workout and nutrition plans.",
      "Managing real-time user progress data with Convex.",
      "Implementing secure authentication and data protection with Clerk.",
    ],
    learnings: [
      "Gained expertise in integrating conversational AI for health apps.",
      "Improved UX design by balancing aesthetics with functionality.",
      "Learned Convex for real-time database and state synchronization.",
      "Enhanced front-end performance with Tailwind CSS 4 and Turbopack.",
    ],
    feedback: false,
    links: {
      live: "https://ai-fitness-trainer-gamma.vercel.app/", // replace if deployed
      github: "https://github.com/PreetKot/ai-fitness-trainer",
    },
  },
  {
    title: "Reflect | A Mindful Journaling App",
    slug: "reflect",
    tagline:
      "A minimal journaling app designed to help users practice mindfulness, track moods, and reflect on their emotional journey.",
    overview:
      "Reflect is a clean and distraction-free journaling platform built with Next.js and TypeScript. It empowers users to develop mindful writing habits through rich text journaling, mood tracking, and insightful analytics. With a privacy-first approach, Reflect ensures that users can safely record their thoughts, track emotional well-being, and gain long-term insights into their mental health journey.",
    features: [
      "📝 Rich Text Editor with distraction-free writing experience",
      "📅 Daily prompts for inspiration and self-reflection",
      "🙂 Mood tracking with every journal entry",
      "📚 Collections & categories for better organization",
      "🔍 Search and filter by mood or keyword",
      "📊 Mood timeline & journaling statistics",
      "🔐 Secure authentication powered by Clerk",
      "🛡️ Data privacy with rate-limiting and security protections",
    ],
    techStack: [
      "Next.js 15.3",
      "React 19",
      "TypeScript",
      "TailwindCSS",
      "Prisma ORM",
      "PostgreSQL",
      "Clerk",
      "Radix UI",
      "Recharts",
      "Arcjet",
    ],
    challenges: [
      "Designing a minimal interface that encourages mindful writing.",
      "Building a secure data model with Prisma and PostgreSQL.",
      "Integrating mood tracking seamlessly into the journaling workflow.",
      "Implementing privacy-first authentication and data protection.",
    ],
    learnings: [
      "Gained hands-on experience with Prisma and relational databases.",
      "Improved skills in building clean, distraction-free UI/UX.",
      "Learned to integrate security features with Arcjet.",
      "Enhanced knowledge of real-time analytics visualization with Recharts.",
    ],
    feedback: false,
    links: {
      live: "https://reflect-journal-app-git-master-preet-kotmires-projects.vercel.app/", // replace if deployed
      github: "https://github.com/PreetKot/Reflect-journal-app-",
    },
  },
  {
    title: "Persona-Driven Document Intelligence System",
    slug: "persona-driven-docs",
    tagline:
      "An AI-powered platform that tailors document understanding and responses based on user personas, enabling context-aware insights.",
    overview:
      "The Persona-Driven Document Intelligence System leverages advanced NLP and persona modeling to transform raw documents into meaningful, persona-specific insights. Built for adaptability, it dynamically adjusts the way information is extracted, summarized, and presented depending on the intended audience, making it ideal for businesses, researchers, and decision-makers who need context-driven document intelligence.",
    features: [
      "🤖 Persona-based document parsing and analysis",
      "📑 Automatic summarization tailored to user profiles",
      "🔍 Context-aware Q&A with persona-driven responses",
      "📊 Insight extraction and knowledge graph mapping",
      "🌐 Multi-format document support (PDF, Word, Web content)",
      "⚡ Fast and scalable backend for large datasets",
      "🔐 Secure handling of sensitive documents",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "LangChain",
      "OpenAI / LLM APIs",
      "PostgreSQL",
      "Prisma ORM",
      "TailwindCSS",
    ],
    challenges: [
      "Designing adaptive pipelines for different personas (e.g., business vs. technical).",
      "Balancing accuracy and speed in LLM-based document parsing.",
      "Building scalable APIs for handling large volumes of documents.",
      "Ensuring privacy and compliance in document intelligence workflows.",
    ],
    learnings: [
      "Strengthened knowledge of persona-driven UX design.",
      "Gained experience integrating LLMs with structured databases.",
      "Explored advanced prompt engineering for contextual outputs.",
      "Improved backend optimization for real-time AI-driven workflows.",
    ],
    feedback: false,
    links: { // replace if deployed
      github: "https://github.com/PreetKot/cpt-adobe-1b",
    },
  },
  {
  title: "NxtWatch | A YouTube Clone",
  slug: "nxtwatch",
  tagline:
    "A React.js-based video streaming platform replicating YouTube’s core features with authentication, theming, and API-driven content.",
  overview:
    "NxtWatch is a responsive YouTube clone built with React.js as part of the NxtWave CCBP curriculum. It provides a secure login system, protected routes, video listings across categories, detailed video playback, and interactive features like like/dislike and save. The app supports both light and dark themes, and is fully responsive across devices.",
  features: [
    "🔐 JWT-based authentication with secure login & protected routes",
    "🏠 Home, Trending, Gaming, Saved Videos & Video Details sections",
    "👍👎 Interactive video actions: Like, Dislike, Save/Unsave with persistent state",
    "🌐 API integration for video listings & details with loading/error handling",
    "🌙 Light & Dark mode toggle using Styled Components",
    "📱 Responsive design optimized for all devices",
  ],
  techStack: [
    "React.js",
    "React Router",
    "Styled Components",
    "REST APIs",
    "JWT Authentication",
  ],
  challenges: [
    "Implementing route protection with JWT authentication.",
    "Designing API-driven components with proper error/loading states.",
    "Adding mutual exclusivity in Like/Dislike toggles.",
    "Maintaining theme state across the application.",
  ],
  learnings: [
    "Strengthened knowledge of React hooks and conditional rendering.",
    "Improved skills in protected routing with React Router.",
    "Learned theme management with Styled Components.",
    "Handled API-driven workflows with robust error handling.",
  ],
  feedback: false,
  links: {
    live: "https://nxtwatch.ccbp.tech/login", // replace with repo if available
  },
},
{
  title: "NYC Airbnb Listings 2024 | Exploratory Data Analysis",
  slug: "nyc-airbnb-eda",
  tagline:
    "A comprehensive exploratory data analysis of New York City Airbnb listings, uncovering insights into pricing, availability, host activity, and neighborhood trends.",
  overview:
    "This project analyzes the Airbnb listings dataset for New York City to reveal patterns in pricing, geographical trends, host activity, and neighborhood characteristics. Using Python-based data analysis and visualization techniques, the study provides actionable insights for hosts, guests, and stakeholders in the short-term rental market.",
  features: [
    "🧹 Data Cleaning: Missing values, data type corrections, duplicates removal",
    "📊 Univariate Analysis: Price distribution, room types, minimum nights",
    "🔗 Bivariate & Multivariate Analysis: Price trends by neighborhood & room type",
    "🗺️ Geospatial Analysis: Heatmaps and interactive maps of listings",
    "👤 Host Analysis: Identifying top hosts and professional activity",
    "📅 Temporal Trends: Availability & reviews over time",
    "📈 Correlation Analysis: Relationships between numerical features",
    "⚠️ Outlier Detection: Identifying unusual pricing and listings",
  ],
  techStack: [
    "Python 3.x",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Folium",
    "Jupyter Notebook",
  ],
  challenges: [
    "Cleaning and preparing a large, messy real-world dataset.",
    "Visualizing geospatial data effectively with Folium.",
    "Identifying and interpreting outliers in price and availability.",
    "Balancing insights across multiple dimensions (host, geography, time).",
  ],
  learnings: [
    "Improved data wrangling skills with Pandas and NumPy.",
    "Enhanced visualization techniques using Seaborn and Matplotlib.",
    "Learned geospatial analysis with Folium for interactive mapping.",
    "Strengthened ability to derive insights from real-world datasets.",
  ],
  feedback: false,
  links: {
    github: "https://github.com/PreetKot/NYC-AirBNB-EDA", // replace with actual repo
  },
}
];
