// 'use client';

// import { motion } from 'framer-motion';
// import ProjectCard from './ProjectCard';

// interface TimelineProject {
//   date: string;
//   title: string;
//   description: string;
//   technologies: string[];
//   githubUrl?: string;
//   liveUrl?: string;
//   devpostUrl?: string;
//   award?: string;
//   featured?: boolean;
// }

// interface ProjectTimelineProps {
//   projects: TimelineProject[];
// }

// export default function ProjectTimeline({ projects }: ProjectTimelineProps) {
//   return (
//     <div className="relative">
//       {/* Timeline line */}
//       <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-terracotta-500 via-coffee-900/20 to-transparent" />

//       <div className="space-y-12">
//         {projects.map((project, index) => (
//           <motion.div
//             key={project.title}
//             className="relative pl-12"
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//           >
//             {/* Timeline dot */}
//             <div className="absolute left-0 top-8 w-3 h-3 -ml-[5px]">
//               <div className="w-full h-full bg-terracotta-500 rounded-full" />
//               <div className="absolute inset-0 bg-terracotta-500 rounded-full animate-ping opacity-75" />
//             </div>

//             {/* Date */}
//             <div className="mb-3">
//               <span className="text-sm font-mono text-warm-gray">{project.date}</span>
//               {project.featured && (
//                 <span className="ml-3 text-xs text-terracotta-500 font-semibold">
//                   ⭐ Featured
//                 </span>
//               )}
//             </div>

//             {/* Project Card */}
//             <ProjectCard {...project} />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface TimelineProject {
  date: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  devpostUrl?: string;
  award?: string;
  featured?: boolean;
}

interface ProjectTimelineProps {
  projects: TimelineProject[];
}

export default function ProjectTimeline({ projects }: ProjectTimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-terracotta-500 via-coffee-900/20 to-transparent" />

      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="relative pl-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-8 w-3 h-3 -ml-[5px]">
              <div className="w-full h-full bg-terracotta-500 rounded-full" />
              <div className="absolute inset-0 bg-terracotta-500 rounded-full animate-ping opacity-75" />
            </div>

            {/* Date */}
            <div className="mb-3">
              <span className="text-sm font-mono text-warm-gray">{project.date}</span>
            </div>

            {/* Project Card */}
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
