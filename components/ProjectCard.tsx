// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import { SiDevpost } from 'react-icons/si';

// interface ProjectCardProps {
//   title: string;
//   description: string;
//   technologies: string[];
//   githubUrl?: string;
//   liveUrl?: string;
//   devpostUrl?: string;
//   award?: string;
//   featured?: boolean;
// }

// export default function ProjectCard({
//   title,
//   description,
//   technologies,
//   githubUrl,
//   liveUrl,
//   devpostUrl,
//   award,
//   featured,
// }: ProjectCardProps) {
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const shouldShowBack = isHovered || isExpanded;

//   return (
//     <motion.div
//       className="relative interactive"
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => !isExpanded && setIsHovered(false)}
//       onClick={handleClick}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.5 }}
//     >
//       <div
//         className={`relative bg-cream-100 border-2 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden ${
//           shouldShowBack
//             ? 'border-terracotta-500 shadow-lg'
//             : 'border-coffee-900/10 hover:border-coffee-900/20'
//         }`}
//         style={{ minHeight: '280px' }}
//       >
//         {featured && (
//           <div className="absolute top-4 right-4 bg-terracotta-500 text-cream-50 px-3 py-1 rounded-full text-xs font-semibold">
//             ⭐ Featured
//           </div>
//         )}

//         {award && (
//           <div className="absolute top-4 right-4 bg-coffee-900 text-cream-50 px-3 py-1 rounded-full text-xs font-semibold">
//             🏆 {award}
//           </div>
//         )}

//         <AnimatePresence mode="wait">
//           {!shouldShowBack ? (
//             // Front of card
//             <motion.div
//               key="front"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="h-full flex flex-col"
//             >
//               <h3 className="text-2xl font-display font-semibold text-coffee-900 mb-3">
//                 {title}
//               </h3>
//               <p className="text-warm-gray leading-relaxed mb-6 flex-grow">
//                 {description}
//               </p>

//               <div className="flex gap-4 mt-auto">
//                 {githubUrl && (
//                   <a
//                     href={githubUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-coffee-900 hover:text-terracotta-500 transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <FaGithub size={24} />
//                   </a>
//                 )}
//                 {devpostUrl && (
//                   <a
//                     href={devpostUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-coffee-900 hover:text-terracotta-500 transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <SiDevpost size={24} />
//                   </a>
//                 )}
//                 {liveUrl && (
//                   <a
//                     href={liveUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-coffee-900 hover:text-terracotta-500 transition-colors"
//                     onClick={(e) => e.stopPropagation()}
//                   >
//                     <FaExternalLinkAlt size={20} />
//                   </a>
//                 )}
//               </div>
//             </motion.div>
//           ) : (
//             // Back of card - Technical details
//             <motion.div
//               key="back"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="h-full flex flex-col"
//             >
//               <h3 className="text-xl font-display font-semibold text-coffee-900 mb-4">
//                 Technical Stack
//               </h3>
//               <div className="flex flex-wrap gap-2 mb-6">
//                 {technologies.map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-3 py-1 bg-coffee-900/10 text-coffee-900 rounded-full text-sm font-mono"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="mt-auto pt-4 border-t border-coffee-900/10">
//                 <p className="text-xs text-warm-gray italic">
//                   Click again to close • Hover to view details
//                 </p>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.div>
//   );
// }

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  detailedDescription?: string;
  githubUrl?: string;
  liveUrl?: string;
  devpostUrl?: string;
  award?: string;
  featured?: boolean;
  inprogress?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  detailedDescription,
  githubUrl,
  liveUrl,
  devpostUrl,
  award,
  featured,
  inprogress,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="relative interactive"
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`relative bg-cream-100 border-2 rounded-2xl p-5 transition-all duration-300 cursor-pointer overflow-hidden ${
          isExpanded
            ? 'border-terracotta-500 shadow-lg'
            : 'border-coffee-900/10 hover:border-coffee-900/20'
        }`}
      >
        {featured && (
          <div className="absolute top-3 right-3 bg-terracotta-500 text-cream-50 px-2.5 py-1 rounded-full text-xs font-semibold">
            ⭐ Featured
          </div>
        )}
        
        {inprogress && (
          <div className="absolute top-3 right-3 bg-blue-600 text-cream-50 px-2.5 py-1 rounded-full text-xs font-semibold">
            🚧 In Progress
          </div>
        )}

        {award && (
          <div className="absolute top-3 right-3 bg-coffee-900 text-cream-50 px-2.5 py-1 rounded-full text-xs font-semibold">
            🏆 {award}
          </div>
        )}

        <AnimatePresence mode="wait">
          {!isExpanded ? (
            // Front of card
            <motion.div
              key="front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-display font-semibold text-coffee-900 mb-2">
                {title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">
                {description}
              </p>

              {/* Tech stack on front */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-coffee-900/10 text-coffee-900 rounded-full text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coffee-900 hover:text-terracotta-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {devpostUrl && (
                  <a
                    href={devpostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coffee-900 hover:text-terracotta-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <SiDevpost size={20} />
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coffee-900 hover:text-terracotta-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </div>
            </motion.div>
          ) : (
            // Back of card - Detailed info
            <motion.div
              key="back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              <h3 className="text-xl font-display font-semibold text-coffee-900 mb-3">
                {title}
              </h3>
              <p className="text-warm-gray text-sm leading-relaxed mb-4">
                {detailedDescription || description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 bg-coffee-900/10 text-coffee-900 rounded-full text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-3 border-t border-coffee-900/10">
                <p className="text-xs text-warm-gray italic">
                  Click to close
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

