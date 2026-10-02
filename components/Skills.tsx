'use client';

import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import { FaCubes, FaCode, FaDesktop, FaDatabase, FaBrain, FaCloud } from 'react-icons/fa';
import { skills, type SkillCategory } from '@/lib/data';

const icons: Record<SkillCategory, IconType> = {
  blockchain: FaCubes,
  languages: FaCode,
  frontend: FaDesktop,
  backend: FaDatabase,
  ai: FaBrain,
  cloud: FaCloud,
};

// Zig-zag bento: wide cards alternate sides on large screens
const spans: Record<SkillCategory, string> = {
  blockchain: 'lg:col-span-2',
  languages: '',
  frontend: '',
  backend: 'lg:col-span-2',
  ai: '',
  cloud: 'lg:col-span-2',
};

const blockchainWork = ['UMB Bank network', 'Xenmo', 'SafeChain', 'PropNFTs'];

export default function Skills() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((cat, i) => {
        const Icon = icons[cat.id];
        const featured = cat.id === 'blockchain';
        return (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={`group relative overflow-hidden rounded-3xl border-2 p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 ${spans[cat.id]} ${
              featured
                ? 'border-coffee-900 bg-coffee-900 text-cream-50 md:col-span-2'
                : 'border-coffee-900/10 bg-cream-50 hover:border-terracotta-500/40'
            }`}
          >
            <div className="flex items-start justify-between mb-5">
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-2xl transition-colors ${
                  featured ? 'bg-terracotta-500 text-cream-50' : 'bg-cream-200 text-coffee-900 group-hover:bg-terracotta-500 group-hover:text-cream-50'
                }`}
              >
                <Icon size={18} />
              </div>
              <span className={`font-mono text-xs ${featured ? 'text-cream-200/60' : 'text-warm-gray/70'}`}>
                {String(cat.items.length).padStart(2, '0')}
              </span>
            </div>

            <h3 className={`font-display text-2xl font-semibold mb-1 ${featured ? 'text-cream-50' : 'text-coffee-900'}`}>{cat.group}</h3>
            <p className={`text-sm mb-5 ${featured ? 'text-cream-200/80' : 'text-warm-gray'}`}>{cat.blurb}</p>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full px-3 py-1 text-sm font-mono ${
                    featured ? 'border border-cream-50/20 text-cream-50' : 'border border-coffee-900/10 bg-cream-100 text-coffee-900'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>

            {featured && (
              <p className="mt-6 border-t border-cream-50/15 pt-4 text-xs font-mono uppercase tracking-wider text-cream-200/70">
                Used in <span className="text-terracotta-400">{blockchainWork.join(' · ')}</span>
              </p>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
