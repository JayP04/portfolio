'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Hero from '@/components/hero/Hero';
import Highlights from '@/components/Highlights';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Skills from '@/components/Skills';
import { projects, experiences } from '@/lib/data';
import { useCan3D } from '@/lib/useCan3D';

// WebGL is loaded on its own after the page renders, so it never delays the first paint
const ScrollRing = dynamic(() => import('@/components/hero/ScrollRing'), { ssr: false });

function SectionHeading({ index, light, bold, children }: { index: string; light: string; bold: string; children?: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-14"
    >
      <p className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-terracotta-500">
        <span>{index}</span>
        <span className="h-px w-10 bg-terracotta-500/50" />
      </p>
      <h2 className="text-5xl md:text-6xl font-display font-light text-coffee-900 mb-4">
        {light} <span className="font-semibold">{bold}</span>
      </h2>
      {children && <p className="text-warm-gray text-lg max-w-2xl">{children}</p>}
    </motion.div>
  );
}

export default function Home() {
  const { can3D, reducedMotion } = useCan3D();

  return (
    <main className="min-h-screen">
      <Hero />
      {can3D && <ScrollRing reducedMotion={reducedMotion} />}

      <Highlights />

      {/* Experience */}
      <section id="experience" className="py-24 px-6 bg-cream-100">
        <div className="max-w-5xl mx-auto">
          <SectionHeading index="01" light="Work" bold="Experience" />
          <ExperienceTimeline experiences={experiences} />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading index="02" light="Featured" bold="Projects">
            A selection of projects I&apos;m most proud of. Each one taught me something valuable about building
            software that matters.
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} index={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <SectionHeading index="03" light="Tools &" bold="Skills" />
          <Skills />
        </div>
      </section>

      {/* Contact */}
      <section id="connect" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-16">
          <div>
            <SectionHeading index="04" light="Let's" bold="Connect">
              Hiring for blockchain, software or product? Want to collaborate, or just chat about tech? Drop me a
              message and I&apos;ll get back to you soon.
            </SectionHeading>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-coffee-900">
                <FaEnvelope className="text-terracotta-500" />
                <span className="font-mono text-sm">jayrpatel2004 [at] gmail [dot] com</span>
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jaypatel2004/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-flex items-center gap-2 text-coffee-900 hover:text-terracotta-500 transition-colors"
                >
                  <FaLinkedin size={20} /> LinkedIn
                </a>
                <a
                  href="https://github.com/JayP04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-flex items-center gap-2 text-coffee-900 hover:text-terracotta-500 transition-colors"
                >
                  <FaGithub size={20} /> GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-coffee-900/10 bg-cream-100 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-coffee-900/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-warm-gray text-sm">© 2026 Jay Patel. Built with Next.js and care.</p>
          <a href="#about" className="interactive text-sm font-mono text-warm-gray hover:text-terracotta-500 transition-colors">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}
