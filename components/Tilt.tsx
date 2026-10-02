'use client';

import { useRef, type ReactNode, type PointerEvent } from 'react';

/**
 * Tilts its contents toward the cursor with a soft light glare. Pure CSS transforms
 * (no WebGL), written straight to the DOM so it never re-renders React.
 * Mouse only; touch and reduced-motion visitors get a static card.
 */
export default function Tilt({
  children,
  className = '',
  max = 6,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const el = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const enabled = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!el.current || e.pointerType !== 'mouse' || !enabled()) return;
    const rect = el.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      if (!el.current) return;
      el.current.style.transform = `perspective(900px) rotateX(${(0.5 - y) * max}deg) rotateY(${(x - 0.5) * max}deg) translateZ(0)`;
      el.current.style.setProperty('--glare-x', `${x * 100}%`);
      el.current.style.setProperty('--glare-y', `${y * 100}%`);
      el.current.style.setProperty('--glare-o', '1');
    });
  };

  const onLeave = () => {
    cancelAnimationFrame(frame.current);
    if (!el.current) return;
    el.current.style.transform = '';
    el.current.style.setProperty('--glare-o', '0');
  };

  return (
    <div
      ref={el}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`relative will-change-transform ${className}`}
      style={{ transition: 'transform 200ms ease-out, border-color 300ms, box-shadow 300ms, background-color 300ms' }}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
          style={{
            opacity: 'var(--glare-o, 0)',
            background:
              'radial-gradient(circle at var(--glare-x, 50%) var(--glare-y, 50%), rgba(255, 252, 249, 0.35), transparent 55%)',
          }}
        />
      )}
    </div>
  );
}
