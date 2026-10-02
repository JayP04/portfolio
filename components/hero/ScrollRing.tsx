'use client';

import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';

/**
 * One fixed, transparent WebGL layer over the page. In the hero, blocks orbit the photo
 * (found via [data-ring-anchor]). Scrolling past the hero unspools them into a vertical
 * chain in the right margin that fills in as a page-progress indicator.
 * Uses an orthographic camera so 1 world unit = 1 CSS pixel.
 */

const N = 10;
const BASE_COLORS = ['#D4735E', '#3E2723', '#E89580', '#5D4037', '#F5F0E8'];
const LIT = new THREE.Color('#D4735E');
const UNLIT = new THREE.Color('#E3D9CC');
const CONTENT_MAX = 1280; // max-w-7xl
const CHAIN_BLOCK = 20;

const smooth = (t: number) => t * t * (3 - 2 * t);
const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  const { size, invalidate } = useThree();
  const meshes = useRef<(THREE.Mesh | null)[]>([]);
  const pointer = useRef({ x: 0, y: 0 });
  const spin = useRef(0);
  const current = useRef(Array.from({ length: N }, () => new THREE.Vector3(0, 10000, 0)));
  const currentScale = useRef(Array.from({ length: N }, () => 0));

  const geometry = useMemo(() => new RoundedBoxGeometry(1, 1, 1, 3, 0.14), []);
  const materials = useMemo(
    () => Array.from({ length: N }, () => new THREE.MeshStandardMaterial({ roughness: 0.45, metalness: 0.1 })),
    []
  );
  const occluder = useRef<THREE.Mesh>(null);
  const occluderMaterial = useMemo(() => new THREE.MeshBasicMaterial({ colorWrite: false }), []);
  const line = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array((N + 1) * 3), 3));
    return new THREE.Line(g, new THREE.LineBasicMaterial({ color: '#3E2723', transparent: true, opacity: 0.3 }));
  }, []);

  useEffect(() => {
    const onScroll = () => invalidate();
    const onPointer = (e: PointerEvent) => {
      pointer.current = { x: (e.clientX / window.innerWidth) * 2 - 1, y: (e.clientY / window.innerHeight) * 2 - 1 };
      invalidate();
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', onPointer, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
    };
  }, [invalidate]);

  useEffect(
    () => () => {
      geometry.dispose();
      occluderMaterial.dispose();
      materials.forEach((m) => m.dispose());
      line.geometry.dispose();
      (line.material as THREE.Material).dispose();
    },
    [geometry, materials, line, occluderMaterial]
  );

  const tmp = useMemo(() => ({ v: new THREE.Vector3(), target: new THREE.Vector3(), euler: new THREE.Euler(), color: new THREE.Color() }), []);

  useFrame((_, delta) => {
    const anchor = document.querySelector('[data-ring-anchor]');
    if (!anchor) return;
    const rect = anchor.getBoundingClientRect();
    const w = size.width;
    const h = size.height;

    // Hero → chain progress, driven by how far the photo has scrolled
    const heroProgress = reducedMotion ? 0 : clamp01((h * 0.35 - rect.top) / (h * 0.65));
    const e = smooth(heroProgress);
    const scrollable = document.documentElement.scrollHeight - h;
    const pageProgress = scrollable > 0 ? window.scrollY / scrollable : 0;

    // Chain lives in the right margin; if the viewport is too narrow, blocks shrink away instead
    const margin = Math.max(0, (w - CONTENT_MAX) / 2);
    const hasRoom = margin >= 72;
    const chainX = w - margin / 2 - w / 2;
    const chainTop = h * 0.2;
    const chainGap = (h * 0.6) / (N - 1);

    // Ring geometry, in pixels relative to the photo
    const cx = rect.left + rect.width / 2 - w / 2;
    const cy = h / 2 - (rect.top + rect.height / 2);
    const radius = rect.width * 0.62;
    const ringBlock = rect.width * 0.11;

    if (!reducedMotion && heroProgress < 1) spin.current += delta * 0.25;
    // Tilted like a planet's ring: the near half sweeps across the bottom of the photo
    tmp.euler.set(0.55 + pointer.current.y * 0.2, spin.current, -0.15 + pointer.current.x * 0.2);

    if (occluder.current) {
      occluder.current.position.set(cx, cy, 0);
      occluder.current.scale.setScalar(rect.width * 0.34);
    }

    let moving = false;
    const positions = line.geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < N; i++) {
      const mesh = meshes.current[i];
      if (!mesh) continue;

      const a = (i / N) * Math.PI * 2;
      tmp.v.set(Math.cos(a) * radius, Math.sin(a * 2) * radius * 0.08, Math.sin(a) * radius).applyEuler(tmp.euler);
      const ringX = cx + tmp.v.x;
      const ringY = cy + tmp.v.y;
      const ringZ = tmp.v.z;

      const chainY = h / 2 - (chainTop + i * chainGap);
      const target = tmp.target.set(
        THREE.MathUtils.lerp(ringX, chainX, e),
        THREE.MathUtils.lerp(ringY, chainY, e),
        THREE.MathUtils.lerp(ringZ, 200, e)
      );
      const targetScale = THREE.MathUtils.lerp(ringBlock, hasRoom ? CHAIN_BLOCK : 0, e);

      // Ease toward the target so fast scrolls still look smooth
      const cur = current.current[i];
      if (cur.y > 5000) cur.copy(target);
      cur.lerp(target, reducedMotion ? 1 : 0.18);
      currentScale.current[i] = THREE.MathUtils.lerp(currentScale.current[i] || targetScale, targetScale, 0.18);
      if (cur.distanceToSquared(target) > 0.25 || Math.abs(currentScale.current[i] - targetScale) > 0.2) moving = true;

      mesh.position.copy(cur);
      mesh.scale.setScalar(currentScale.current[i]);
      const t = performance.now() / 1000 + i;
      const tumble = reducedMotion ? 0 : 1 - e;
      mesh.rotation.set(t * 0.4 * tumble + e * 0.6, t * 0.3 * tumble + e * 0.785, 0);

      // Colors: brand palette in the ring, progress fill in the chain
      const lit = clamp01(pageProgress * N - i + 0.5);
      tmp.color.copy(UNLIT).lerp(LIT, lit);
      (mesh.material as THREE.MeshStandardMaterial).color.set(BASE_COLORS[i % BASE_COLORS.length]).lerp(tmp.color, e);

      positions.setXYZ(i, cur.x, cur.y, cur.z - 1);
    }

    // Close the loop in ring mode; open it into a chain as we scroll
    const first = current.current[0];
    const last = current.current[N - 1];
    // Collapse the closing segment early so it never streaks across the page mid-transition
    const close = Math.min(1, e * 5);
    positions.setXYZ(N, THREE.MathUtils.lerp(first.x, last.x, close), THREE.MathUtils.lerp(first.y, last.y, close), THREE.MathUtils.lerp(first.z, last.z, close) - 1);
    positions.needsUpdate = true;
    (line.material as THREE.LineBasicMaterial).opacity = hasRoom || e < 1 ? 0.3 * (hasRoom ? 1 : 1 - e) : 0;

    // Keep animating only while the ring is spinning on screen or blocks are still settling
    const ringVisible = rect.bottom + radius > 0 && heroProgress < 1;
    if ((ringVisible && !reducedMotion) || moving) invalidate();
  });

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[400, 600, 500]} intensity={1.6} color="#FFF3E6" />
      <directionalLight position={[-500, -200, -300]} intensity={0.5} color="#E89580" />
      <mesh ref={occluder} material={occluderMaterial} renderOrder={-1}>
        <circleGeometry args={[1, 64]} />
      </mesh>
      <primitive object={line} />
      {Array.from({ length: N }, (_, i) => (
        <mesh key={i} ref={(m) => { meshes.current[i] = m; }} geometry={geometry} material={materials[i]} />
      ))}
    </>
  );
}

export default function ScrollRing({ reducedMotion = false }: { reducedMotion?: boolean }) {
  return (
    <div className="pointer-events-none fixed inset-0 z-40" aria-hidden>
      <Canvas
        orthographic
        camera={{ position: [0, 0, 1000], zoom: 1, near: 0.1, far: 3000 }}
        dpr={[1, 1.5]}
        frameloop="demand"
        // R3F re-enables pointer events on its wrapper; this layer must never block clicks on the page
        style={{ pointerEvents: 'none' }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
      >
        <Scene reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
