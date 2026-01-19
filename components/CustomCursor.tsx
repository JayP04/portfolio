// 'use client';

// import { useEffect, useState } from 'react';

// interface CursorProps {
//   // Easy customization options
//   glowSize?: number;
//   glowColor?: string;
//   hoverScale?: number;
//   type?: 'glow' | 'trail' | 'none'; // Easy to switch cursor types
// }

// export default function CustomCursor({
//   glowSize = 20,
//   glowColor = 'rgba(212, 115, 94, 0.7)',
//   hoverScale = 1.5,
//   type = 'glow',
// }: CursorProps) {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     if (type === 'none') return;

//     const handleMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       // Detect if hovering over interactive elements
//       if (
//         target.tagName === 'A' ||
//         target.tagName === 'BUTTON' ||
//         target.closest('a') ||
//         target.closest('button') ||
//         target.classList.contains('interactive')
//       ) {
//         setIsHovering(true);
//       } else {
//         setIsHovering(false);
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('mouseover', handleMouseOver);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('mouseover', handleMouseOver);
//     };
//   }, [type]);

//   if (type === 'none') return null;

//   const currentSize = isHovering ? glowSize * hoverScale : glowSize;

//   return (
//     <div
//       className="cursor-glow"
//       style={{
//         left: `${position.x}px`,
//         top: `${position.y}px`,
//         width: `${currentSize}px`,
//         height: `${currentSize}px`,
//         background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
//         pointerEvents: 'none',
//         position: 'fixed',
//         transform: 'translate(-50%, -50%)',
//         zIndex: 9999,
//         transition: 'width 0.2s ease, height 0.2s ease',
//       }}
//     />
//   );
// }
'use client';

import { useEffect, useState } from 'react';

interface CursorProps {
  // Easy customization options
  glowSize?: number;
  glowColor?: string;
  hoverScale?: number;
  type?: 'glow' | 'trail' | 'none'; // Easy to switch cursor types
}

export default function CustomCursor({
  glowSize = 20,
  glowColor = 'rgba(212, 115, 94, 0.7)',
  hoverScale = 1.5,
  type = 'glow',
}: CursorProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (type === 'none') return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add current position to trail
      const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrail(prev => [...prev, newPoint].slice(-8)); // Keep last 8 points
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect if hovering over interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [type]);

  // Clean up old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(1)); // Remove oldest point
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  if (type === 'none') return null;

  const currentSize = isHovering ? glowSize * hoverScale : glowSize;

  return (
    <>
      {/* Trail glows - fade out as they age */}
      {trail.map((point, index) => {
        const opacity = (index + 1) / trail.length; // Fade based on position in array
        return (
          <div
            key={point.id}
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${currentSize * 0.6}px`,
              height: `${currentSize * 0.6}px`,
              background: `radial-gradient(circle, ${glowColor.replace(/[\d.]+\)$/, `${opacity * 0.3})`)} 0%, transparent 70%)`,
              pointerEvents: 'none',
              position: 'fixed',
              transform: 'translate(-50%, -50%)',
              zIndex: 9998,
            }}
          />
        );
      })}
      
      {/* Main cursor glow */}
      <div
        className="cursor-glow"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: `${currentSize}px`,
          height: `${currentSize}px`,
          background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
          pointerEvents: 'none',
          position: 'fixed',
          transform: 'translate(-50%, -50%)',
          zIndex: 9999,
          transition: 'width 0.2s ease, height 0.2s ease',
        }}
      />
    </>
  );
}
