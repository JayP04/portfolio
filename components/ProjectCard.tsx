'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlus } from 'react-icons/fa';
import { SiDevpost } from 'react-icons/si';
import type { Project } from '@/lib/data';
import Tilt from './Tilt';

interface ProjectCardProps extends Project {
  index: number;
}

export default function ProjectCard({
  index,
  date,
  title,
  description,
  technologies,
  detailedDescription,
  githubUrl,
  liveUrl,
  devpostUrl,
  award,
  inprogress,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const links = [
    githubUrl && { href: githubUrl, label: 'GitHub', icon: <FaGithub size={18} /> },
    devpostUrl && { href: devpostUrl, label: 'Devpost', icon: <SiDevpost size={18} /> },
    liveUrl && { href: liveUrl, label: 'Live site', icon: <FaExternalLinkAlt size={15} /> },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
    >
      <Tilt
        max={5}
        className={`group flex flex-col rounded-3xl border-2 bg-cream-100 p-6 ${
          isExpanded
            ? 'border-terracotta-500 shadow-[0_20px_50px_-20px_rgba(62,39,35,0.35)]'
            : 'border-coffee-900/10 hover:border-coffee-900/25 hover:shadow-[0_20px_50px_-24px_rgba(62,39,35,0.35)]'
        }`}
      >
      <div className="flex items-start justify-between gap-3 mb-5">
        <span className="font-mono text-xs text-warm-gray">
          {String(index + 1).padStart(2, '0')}
          {date && <span className="ml-2 text-warm-gray/70">/ {date}</span>}
        </span>
        <div className="flex flex-wrap justify-end gap-1.5">
          {award && (
            <span className="rounded-full bg-coffee-900 px-2.5 py-1 text-xs font-semibold text-cream-50">🏆 {award}</span>
          )}
          {inprogress && (
            <span className="rounded-full border border-coffee-900/20 bg-cream-50 px-2.5 py-1 text-xs font-semibold text-coffee-900">
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-terracotta-500 align-middle animate-pulse" />
              In progress
            </span>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-display font-semibold text-coffee-900 mb-2 transition-colors group-hover:text-terracotta-600">
        {title}
      </h3>
      <p className="text-warm-gray text-sm leading-relaxed mb-5">{description}</p>

      <AnimatePresence initial={false}>
        {isExpanded && detailedDescription && (
          <motion.div
            key="details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-coffee-800 text-sm leading-relaxed mb-5 border-l-2 border-terracotta-400 pl-4">
              {detailedDescription}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {technologies.map((tech) => (
          <span key={tech} className="rounded-full bg-coffee-900/[0.07] px-2.5 py-0.5 text-xs font-mono text-coffee-900">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-coffee-900/10 pt-4">
        <div className="flex gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on ${l.label}`}
              className="interactive text-coffee-900 transition-colors hover:text-terracotta-500"
            >
              {l.icon}
            </a>
          ))}
        </div>
        {detailedDescription && (
          <button
            type="button"
            onClick={() => setIsExpanded((v) => !v)}
            aria-expanded={isExpanded}
            className="interactive inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-coffee-900 hover:text-terracotta-500"
          >
            {isExpanded ? 'Less' : 'Details'}
            <FaPlus size={10} className={`transition-transform duration-300 ${isExpanded ? 'rotate-45' : ''}`} />
          </button>
        )}
      </div>
      </Tilt>
    </motion.div>
  );
}
