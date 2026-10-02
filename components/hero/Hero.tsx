'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';

// Same sizes for both photo layouts so the browser downloads one image, not two
const PHOTO_SIZES = '(max-width: 768px) 90vw, 450px';

export default function Hero() {
  const reducedMotion = useReducedMotion();

  // Staggered fade-up for the hero text; skipped entirely for reduced-motion visitors
  const fade = (i: number) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section id="about" className="relative pt-36 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1.15fr_1fr] gap-16 items-center">
        <div>
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 rounded-full border border-coffee-900/15 bg-cream-100 px-4 py-1.5 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-terracotta-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-terracotta-500" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-coffee-900">Open to full-time roles</span>
          </motion.div>

          <motion.h1 {...fade(1)} className="font-display text-coffee-900 leading-[0.9] mb-6">
            <span className="block text-2xl md:text-3xl font-light italic text-warm-gray mb-3">Hey, I&apos;m</span>
            <span className="block text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight">Jay Patel</span>
          </motion.h1>

          <motion.p {...fade(2)} className="font-display text-2xl md:text-3xl text-coffee-900 mb-6">
            Blockchain, software <span className="text-terracotta-500">&amp;</span> product.
          </motion.p>

          <motion.p {...fade(3)} className="text-lg text-warm-gray leading-relaxed mb-10 max-w-xl">
            I just graduated in Computer Science from the University of Kansas, most recently building a real-time
            money movement blockchain at UMB Bank. Now I&apos;m looking for a full-time role where I can ship
            products across blockchain and software.
          </motion.p>

          <motion.div {...fade(4)} className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="interactive group inline-flex items-center gap-2 rounded-full bg-coffee-900 px-6 py-3 text-cream-50 font-medium transition-colors hover:bg-terracotta-500"
            >
              See my work
              <FaArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#connect"
              className="interactive inline-flex items-center rounded-full border-2 border-coffee-900 px-6 py-2.5 font-medium text-coffee-900 transition-colors hover:border-terracotta-500 hover:text-terracotta-500"
            >
              Get in touch
            </a>
            <div className="flex gap-4 ml-2">
              <a
                href="https://www.linkedin.com/in/jaypatel2004/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="interactive text-coffee-900 hover:text-terracotta-500 transition-colors"
              >
                <FaLinkedin size={26} />
              </a>
              <a
                href="https://github.com/JayP04"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="interactive text-coffee-900 hover:text-terracotta-500 transition-colors"
              >
                <FaGithub size={26} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          {...(reducedMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.94 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] },
              })}
          className="relative w-full aspect-square max-w-md mx-auto"
        >
          {/* Small screens: static photo frame (no WebGL). Decided in CSS so it renders on the server. */}
          <div className="md:hidden h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-terracotta-400 to-coffee-900 rounded-3xl rotate-6" />
            <div className="relative h-full bg-cream-100 rounded-3xl overflow-hidden border-4 border-coffee-900">
              <Image src="/profile.jpg" alt="Jay Patel" fill sizes={PHOTO_SIZES} className="object-cover" priority />
            </div>
          </div>

          {/* Larger screens: circular photo; the orbiting blocks are drawn by <ScrollRing> from this anchor */}
          <div className="hidden md:block absolute inset-0">
            <div data-ring-anchor className="absolute inset-0" />
            <div className="absolute inset-[16%] z-10 rounded-full overflow-hidden border-4 border-coffee-900 shadow-2xl">
              <Image src="/profile.jpg" alt="" fill sizes={PHOTO_SIZES} className="object-cover" priority />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
