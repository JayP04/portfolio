'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import ProjectTimeline from '@/components/ProjectTimeline';
import ContactForm from '@/components/ContactForm';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Home() {
  // Featured projects (2-3 highlights)
  const featuredProjects = [
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
      title: 'SafeChain',
      description: 'Decentralized disaster communication app with WiFi-based messaging and peer device visualization.',
      detailedDescription: 'Led front-end development and WiFi-based messaging implementation for a decentralized disaster communication application. Built real-time peer device visualization using Leaflet.js mapping library and implemented local message storage with IPFS synchronization for offline-first architecture. Integrated WebSocket connections for instant communication and deployed smart contracts on Polygon network for decentralized message verification.',
      technologies: ['ReactJS', 'NodeJS', 'PostgreSQL', 'WebSockets', 'IPFS', 'Polygon', 'Leaflet.js'],
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
      technologies: ['ReactJS', 'NodeJS', 'Solidity', 'IPFS'],
      githubUrl: 'https://github.com/JayP04/Decenentralized-Property-ledger',
      featured: true,
    },
  ];

  // // All projects timeline (oldest to newest) - Featured projects removed
  // const timelineProjects = [
  //   {
  //     date: 'Dec 2024',
  //     title: 'WaitForIt.io',
  //     description: 'Time-capsule platform where users create memory capsules for delayed delivery.',
  //     detailedDescription: 'Built a unique time-capsule platform enabling users to create memory capsules for scheduled future delivery. Implemented MongoDB for flexible document storage of media and metadata, integrated Supabase for user authentication and real-time database features. Developed Express.js backend with scheduled job processing for automated capsule delivery at specified dates. Created an emotional and intuitive user experience for preserving memories.',
  //     technologies: ['NextJS', 'NodeJS', 'MongoDB', 'Supabase'],
  //     githubUrl: 'https://github.com/yourusername/waitforit',
  //     liveUrl: 'https://waitforit.io',
  //   },
  // ];

  const experiences = [
    {
      role: 'Android App Developer',
      company: 'CyPhyLabs, Tunnels to Towers Foundation',
      period: 'Jun 2024 – Feb 2025',
      description: 'Developed Android app for 5000+ users using Kotlin and XML with PostgreSQL. Led UI design for admin team of 4, creating cross-platform notification features. Secured $100K+ order for 150+ smart mirrors benefitting 400+ disabled veterans.',
    },
    {
      role: 'UI/UX Researcher',
      company: 'Center for Design Research, T-Mobile',
      period: 'Aug 2023 – Sep 2024',
      description: 'Led team of 10 designing pocket-sized AI device for clinical note transcription. Improved nurse-to-patient ratios from 1:10 to 1:3, reducing documentation workload by 24%. Collaborated with T-Mobile stakeholders on product design and market alignment.',
    },
    // {
    //   role: 'Freelance Web Developer',
    //   company: 'Independent',
    //   period: '2023 – Present',
    //   description: 'Created custom websites for 3+ local vendors and small businesses. Implemented e-commerce solutions, booking systems, and content management platforms. Managed full project lifecycle from consultation through deployment and maintenance.',
    // },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl font-display font-light text-coffee-900 mb-6">
                Hey, I'm <span className="font-semibold">Jay</span>
              </h1>
              <p className="text-xl text-warm-gray leading-relaxed mb-8">
                Computer Science student at the University of Kansas, building the future one project at a time. 
                I specialize in full-stack development, blockchain technology, and creating products that actually 
                solve real problems.
              </p>

              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jaypatel2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive text-coffee-900 hover:text-terracotta-500 transition-colors"
                >
                  <FaLinkedin size={28} />
                </a>
                <a
                  href="https://github.com/JayP04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive text-coffee-900 hover:text-terracotta-500 transition-colors"
                >
                  <FaGithub size={28} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-terracotta-400 to-coffee-900 rounded-3xl transform rotate-6" />
                <div className="relative bg-cream-100 rounded-3xl overflow-hidden border-4 border-coffee-900">
                  {/* Replace with actual image */}
                  <Image
                    src="/profile.jpg" 
                    alt="Jay"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6 bg-cream-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-display font-light text-coffee-900 mb-4">
              Work <span className="font-semibold">Experience</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream-50 border-2 border-coffee-900/10 rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-coffee-900 mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-terracotta-500 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm font-mono text-warm-gray mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                <p className="text-warm-gray leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-display font-light text-coffee-900 mb-4">
              Featured <span className="font-semibold">Projects</span>
            </h2>
            <p className="text-warm-gray text-lg mb-12 max-w-2xl">
              A selection of projects I'm most proud of. Each one taught me something valuable 
              about building software that matters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* More Projects
      <section className="py-20 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-display font-light text-coffee-900 mb-4">
              More <span className="font-semibold">Projects</span>
            </h2>
            <p className="text-warm-gray text-lg">
              Other projects I've built while learning and exploring new technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {timelineProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Skills & Education */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-display font-light text-coffee-900 mb-8">
                <span className="font-semibold">Education</span>
              </h2>
              <div className="bg-cream-100 border-2 border-coffee-900/10 rounded-2xl p-8">
                <h3 className="text-2xl font-display font-semibold text-coffee-900 mb-2">
                  University of Kansas
                </h3>
                <p className="text-terracotta-500 font-medium mb-4">B.S. in Computer Science with CyberSecurity Certification</p>
                <p className="text-sm font-mono text-warm-gray mb-4">Expected May 2026</p>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-warm-gray">Honors:</span>
                    <span className="ml-2">Class Honor Roll - All Semesters</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-4xl font-display font-light text-coffee-900 mb-8">
                <span className="font-semibold">Skills</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-coffee-900 mb-3">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'JavaScript', 'TypeScript', 'Kotlin', 'SQL', 'Solidity'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cream-100 border border-coffee-900/10 rounded-full text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-coffee-900 mb-3">Frameworks</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Node.js', 'Flask', 'React Native'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cream-100 border border-coffee-900/10 rounded-full text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-coffee-900 mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {['PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'IPFS', 'Blockchain'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cream-100 border border-coffee-900/10 rounded-full text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="connect" className="py-20 px-6 bg-cream-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-5xl font-display font-light text-coffee-900 mb-4">
              Let's <span className="font-semibold">Connect</span>
            </h2>
            <p className="text-warm-gray text-lg max-w-2xl">
              Have a project in mind? Want to collaborate? Or just want to chat about tech? 
              Drop me a message and I'll get back to you soon.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-coffee-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-warm-gray text-sm">
              © 2025 Jay. Built with Next.js and care.
            </p>
            <div className="flex gap-6">
              <a
                href="https://linkedin.com/in/jaypatel2004/"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive text-warm-gray hover:text-terracotta-500 transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/JayP04"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive text-warm-gray hover:text-terracotta-500 transition-colors text-sm"
              >
                GitHub
              </a>
              <a
                href="mailto:jayrpatel2004@gmail.com"
                className="interactive text-warm-gray hover:text-terracotta-500 transition-colors text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

