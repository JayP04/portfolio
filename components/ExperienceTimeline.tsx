'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import type { Experience } from '@/lib/data';

export default function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <ol className="relative border-l-2 border-coffee-900/10 ml-2 md:ml-4 space-y-10">
      {experiences.map((exp, index) => (
        <motion.li
          key={exp.role}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="relative pl-8 md:pl-12"
        >
          <span className="absolute -left-[9px] top-8 h-4 w-4 rounded-full border-4 border-cream-100 bg-terracotta-500" />

          <div className="group rounded-2xl border-2 border-coffee-900/10 bg-cream-50 p-6 md:p-8 transition-all duration-300 hover:border-terracotta-500/40 hover:shadow-[0_12px_40px_-12px_rgba(62,39,35,0.25)]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-2xl font-display font-semibold text-coffee-900">{exp.role}</h3>
                <p className="text-terracotta-500 font-medium">
                  {exp.company}
                  {exp.team && <span className="text-warm-gray font-normal"> · {exp.team}</span>}
                </p>
              </div>
              <div className="md:text-right shrink-0">
                <p className="text-sm font-mono text-coffee-900">{exp.period}</p>
                {exp.location && <p className="text-xs font-mono text-warm-gray mt-1">{exp.location}</p>}
              </div>
            </div>

            {exp.description && <p className="text-warm-gray leading-relaxed">{exp.description}</p>}

            {exp.bullets && (
              <ul className="space-y-2">
                {exp.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-warm-gray leading-relaxed">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta-500" />
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {exp.achievements?.length ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.achievements.map((a) => (
                  <a
                    key={a.label}
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive inline-flex items-center gap-1.5 text-xs font-mono text-warm-gray underline-offset-4 hover:text-terracotta-500 hover:underline"
                  >
                    {a.label}
                    <FaExternalLinkAlt size={9} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
