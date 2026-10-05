'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaGraduationCap, FaFileAlt, FaArrowRight } from 'react-icons/fa';
// FaAward is used by the commented-out Alexis F. Dillard Award card
import { hackathonWins, patent } from '@/lib/data';
import Tilt from './Tilt';

function Card({ delay, span, className, children }: { delay: number; span: string; className: string; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={span}
    >
      <Tilt max={4} className={`h-full rounded-3xl p-8 ${className}`}>
        {children}
      </Tilt>
    </motion.div>
  );
}

export default function Highlights() {
  return (
    <section aria-label="Highlights" className="px-6 pb-20">
      <div className="max-w-7xl mx-auto grid grid-flow-row-dense gap-4 md:grid-cols-2 lg:grid-cols-12">
        <Card delay={0} span="lg:col-span-4" className="bg-coffee-900 text-cream-50">
          <div className="flex items-start justify-between mb-6">
            <div>
              <p className="font-display text-7xl font-semibold leading-none">{hackathonWins.length}</p>
              <p className="mt-2 text-sm font-mono uppercase tracking-wider text-cream-200/80">Hackathon wins</p>
            </div>
            <FaTrophy size={28} className="text-terracotta-400" />
          </div>
          <ul className="flex flex-wrap gap-2">
            {hackathonWins.map((win) => (
              <li
                key={win.name}
                className="inline-flex items-center gap-2 rounded-full border border-cream-50/20 px-3 py-1 text-sm"
              >
                {win.name}
                {'prize' in win && win.prize && (
                  <span className="rounded-full bg-terracotta-500 px-2 py-0.5 text-xs font-semibold">{win.prize}</span>
                )}
              </li>
            ))}
          </ul>
        </Card>

        <Card delay={0.1} span="md:col-span-2 lg:col-span-5" className="bg-terracotta-500 text-cream-50 hover:bg-terracotta-600 !p-0">
          <a
            href={patent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive group flex h-full flex-col justify-between gap-8 p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-mono uppercase tracking-wider text-cream-50/80">Patent · Co-inventor</p>
              <FaFileAlt size={24} className="text-cream-50/90 shrink-0" />
            </div>
            <div>
              <p className="font-display text-2xl md:text-3xl font-semibold leading-tight text-cream-50">{patent.title}</p>
              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-mono text-cream-50/80">
                <span>{patent.number}</span>
                <span>{patent.assignee}</span>
                <span>Published {patent.published}</span>
                <span className="ml-auto inline-flex items-center gap-2 text-cream-50 group-hover:underline underline-offset-4">
                  Read it <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </a>
        </Card>

        {/* Alexis F. Dillard Award card: hidden for now
        <Card delay={0.15} span="lg:col-span-6" className="bg-terracotta-500 text-cream-50 flex flex-col justify-between gap-8">
          <FaAward size={28} className="text-cream-50/90" />
          <div>
            <p className="font-display text-3xl font-semibold leading-tight">Alexis F. Dillard Award</p>
            <p className="mt-2 text-sm font-mono uppercase tracking-wider text-cream-50/80">University of Kansas</p>
          </div>
        </Card>
        */}

        <Card delay={0.15} span="lg:col-span-3" className="border-2 border-coffee-900/10 bg-cream-100 flex flex-col justify-between gap-8">
          <FaGraduationCap size={30} className="text-coffee-900" />
          <div>
            <p className="font-display text-3xl font-semibold leading-tight text-coffee-900">B.S. Computer Science</p>
            <p className="mt-2 text-sm font-mono uppercase tracking-wider text-warm-gray">University of Kansas · 2026</p>
          </div>
        </Card>
      </div>
    </section>
  );
}
