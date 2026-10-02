'use client';

import { useEffect, useState } from 'react';

/**
 * Whether this device should get the WebGL experience. `null` until checked on the client,
 * so callers can avoid flashing the fallback before deciding.
 */
export function useCan3D() {
  const [state, setState] = useState<{ can3D: boolean | null; reducedMotion: boolean }>({
    can3D: null,
    reducedMotion: false,
  });

  useEffect(() => {
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    setState({
      // Phones and data-saver visitors get the lightweight photo frame instead
      can3D: window.matchMedia('(min-width: 768px) and (pointer: fine)').matches && !saveData,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });
  }, []);

  return state;
}
