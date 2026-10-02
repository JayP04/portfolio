export interface Project {
  date?: string;
  title: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  devpostUrl?: string;
  award?: string;
  featured?: boolean;
  inprogress?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  team?: string;
  location?: string;
  period: string;
  description?: string;
  bullets?: string[];
  achievements?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    title: 'CloudVault',
    description: 'Privacy-first photo storage app achieving 93% cost reduction vs Big Tech. Handles 500GB per user with zero egress fees.',
    detailedDescription: 'Designed and deployed privacy-first photo storage app using Next.js, Supabase, and Cloudflare R2, achieving 93% cost reduction vs Big Tech competitors while maintaining zero egress fees. Developed automated EXIF metadata extraction with multi-tier fallbacks and PostgreSQL Row-Level Security, enabling secure multi-user photo sharing with 30-day recovery protection. Solved production challenges including concurrent upload optimization, CORS configuration, and storage quota race conditions, delivering stable system handling 500GB per user across web and mobile PWA.',
    technologies: ['NextJS', 'Supabase', 'Cloudflare R2', 'PostgreSQL', 'PWA'],
    githubUrl: 'https://github.com/JayP04/CloudVault',
    liveUrl: 'https://cloud-vault-beta.vercel.app',
    featured: true,
    inprogress: true,
  },
  {
    date: 'Jan 2026',
    title: 'AI-Powered Tableau Dashboard Generator',
    description: 'Automate dashboard creation using AI to analyze data and recommend visualizations, charts, and KPIs.',
    detailedDescription: 'more details to come',
    technologies: ['Azure OpenAI', 'Tableau', 'Pydantic', 'Langgraph', 'Streamlit'],
    githubUrl: '',
    featured: false,
    inprogress: true,
  },
  {
    title: 'SafeChain',
    description: 'Decentralized disaster communication app with WiFi-based messaging and peer device visualization.',
    detailedDescription: 'Led front-end development and WiFi-based messaging implementation for a decentralized disaster communication application. Built real-time peer device visualization using Leaflet.js mapping library and implemented local message storage with IPFS synchronization for offline-first architecture. Integrated WebSocket connections for instant communication and deployed smart contracts on Polygon network for decentralized message verification.',
    technologies: ['React', 'NodeJS', 'PostgreSQL', 'WebSockets', 'IPFS', 'Pinata'],
    githubUrl: 'https://github.com/shivanshshrivas/SafeChain',
    devpostUrl: 'https://devpost.com/software/safe-chain-3zi5m6',
    award: 'Winner',
    featured: true,
  },
  {
    title: 'CodeLingo',
    description: 'Visual code-learning website with dynamic execution tracing for beginners.',
    detailedDescription: 'Created an interactive visual code-learning platform featuring dynamic execution tracing that helps beginners understand how code executes step-by-step. Implemented Firebase authentication for user management and progress tracking. Designed an intuitive front-end interface with real-time code visualization and integrated Flask backend for secure code execution in sandboxed environments. The platform provides an engaging learning experience with visual feedback at each execution step.',
    technologies: ['NextJS', 'React', 'Firebase', 'Flask', 'PostgreSQL'],
    githubUrl: 'https://github.com/an-siuu-man/code-lingo',
    devpostUrl: 'https://devpost.com/software/codelingo-lg9a4q',
    award: 'Winner',
    featured: true,
  },
  {
    date: 'Aug 2024',
    title: 'PropNFTs',
    description: 'dApp to tokenize property deeds as NFTs. Awarded $400+ scholarship for innovation and secure smart contract use.',
    detailedDescription: 'Built a decentralized application to tokenize property deeds as NFTs using Solidity smart contracts. Implemented secure file storage on IPFS for decentralized property document management. Created an intuitive React frontend for property owners to mint, transfer, and verify property deed NFTs. Awarded $400+ scholarship by Kansas Blockchain Fellowship for innovative use of blockchain technology and secure smart contract implementation.',
    technologies: ['React', 'NodeJS', 'Solidity', 'IPFS'],
    githubUrl: 'https://github.com/JayP04/Decenentralized-Property-ledger',
    devpostUrl: 'https://devpost.com/software/propnfts',
    award: '$400+ Scholarship',
    featured: true,
  },
  {
    date: 'Mar 2026',
    title: 'Xenmo',
    description: 'Cross-border P2P payment app on XRPL enabling instant currency conversion at ~$0.03 fees vs $12-50 through traditional services.',
    detailedDescription: 'Built a peer-to-peer cross-border payment web app on the XRP Ledger, enabling atomic cross-currency swaps (USD, INR, EUR, NGN) settling in 3-5 seconds at near-zero XRP fees. Implemented QR code payments for in-person transactions, conditional escrow with PREIMAGE-SHA-256 crypto-conditions for code-based remote transfers, and DEX order book integration with bid-ask spread liquidity for real-time exchange rates. Designed pathfinding-with-fallback payment engine using XRP auto-bridging, trust line security model for compliance-ready access control, and full transaction history with on-chain verification via XRPL Explorer.',
    technologies: ['NextJS', 'xrpl.js', 'Tailwind CSS', 'Gemini API'],
    githubUrl: 'https://github.com/JayP04/xenmo',
    devpostUrl: 'https://devpost.com/software/xenmo',
    liveUrl: 'https://xenmo.vercel.app',
    award: 'Winner ($1000 prize)',
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    role: 'Enterprise Blockchain Intern',
    company: 'UMB Bank',
    team: 'Enterprise Architecture Team',
    location: 'Kansas City, MO',
    period: 'Jul 2026 – Sep 2026',
    bullets: [
      'Engineered a real-time money movement blockchain on AWS EC2 using a 4-organization Hyperledger Fabric network.',
      'Cut entitlement-change latency from a 2-day batch cycle to under 250ms, validated for 24/7 operation.',
      'Developed Fabric chaincode for mint, transfer and burn with endorsement-based write validation and idempotency handling.',
      'Preserved privacy on a shared network by limiting visibility and syncing ledgers via hashed, salted block headers only.',
    ],
  },
  {
    role: 'Product Engineering Intern',
    company: 'Center for Design Research, T-Mobile',
    period: 'Aug 2023 – Jan 2024',
    description: 'Led team of 10 designing pocket-sized AI device for clinical note transcription. Improved nurse-to-patient ratios from 1:10 to 1:3, reducing documentation workload by 24%. Collaborated with T-Mobile stakeholders on product design and market alignment.',
    achievements: [{ label: 'Patent', url: '/files/Patent.pdf' }],
  },
  {
    role: 'Software Developer',
    company: 'Kansas Data Science Consortium (KDSC)',
    period: 'Jan 2025 – Present',
    description: 'Architecting 8-component microservices application generating Tableau dashboards from CSV files using Python, Azure OpenAI, LangGraph, and Pandas to automate visualization recommendations. Building data processing pipeline with Pandas for dataset analysis and developing Streamlit web interface for file upload and workbook generation.',
  },
];

export const hackathonWins = [
  { name: 'Xenmo', prize: '$1,000' },
  { name: 'SafeChain' },
  { name: 'CodeLingo' },
  { name: 'CCAD AI' },
];

export const patent = {
  title: 'AI-Enhanced Communications Between Healthcare Workers for Patient Care and Documentation',
  number: 'US 2026/0031245 A1',
  assignee: 'T-Mobile Innovations',
  published: 'Jan 2026',
  url: '/files/Patent.pdf',
};

export type SkillCategory = 'blockchain' | 'frontend' | 'backend' | 'ai' | 'cloud' | 'languages';

export const skills: { id: SkillCategory; group: string; blurb: string; items: string[] }[] = [
  {
    id: 'blockchain',
    group: 'Blockchain',
    blurb: 'Permissioned networks, smart contracts and payments on public ledgers.',
    items: ['Hyperledger Fabric', 'Solidity', 'XRPL / xrpl.js', 'Polygon', 'IPFS', 'Chaincode'],
  },
  {
    id: 'languages',
    group: 'Languages',
    blurb: 'What I write day to day.',
    items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Solidity', 'C', 'C++', 'Kotlin', 'HTML'],
  },
  {
    id: 'frontend',
    group: 'Frontend',
    blurb: 'Fast, accessible product UIs for web and mobile.',
    items: ['React', 'Next.js', 'React Native', 'Tailwind CSS', 'PWA'],
  },
  {
    id: 'backend',
    group: 'Backend & Data',
    blurb: 'APIs, databases and the pipelines between them.',
    items: ['Node.js', 'Express.js', 'Flask', 'REST APIs', 'WebSockets', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'Pandas'],
  },
  {
    id: 'ai',
    group: 'AI',
    blurb: 'LLM-powered tools and agent workflows.',
    items: ['Azure OpenAI', 'LangGraph', 'Pydantic', 'Gemini API', 'Streamlit'],
  },
  {
    id: 'cloud',
    group: 'Cloud & Practices',
    blurb: 'Shipping and running it.',
    items: ['AWS EC2', 'Docker', 'Vercel', 'Cloudflare R2', 'Git / GitHub', 'CI/CD', 'pytest', 'Agile/Scrum'],
  },
];
