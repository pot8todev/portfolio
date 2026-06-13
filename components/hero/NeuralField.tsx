"use client";

/* eslint-disable react-hooks/refs --
   This component drives an imperative three.js scene: geometry buffers are
   created once (stored in a ref) and mutated in place every frame, the
   standard r3f pattern. That intentionally sits outside the React render
   model, so the compiler's ref-access rule does not apply here. */

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import * as THREE from "three";

const ACCENT = new THREE.Color("#2dd4ff");

type FieldProps = {
  count: number;
  connectDist: number;
  bounds: { x: number; y: number; z: number };
  animate: boolean;
};

type Store = {
  positions: Float32Array;
  velocities: Float32Array;
  linePositions: Float32Array;
  lineColors: Float32Array;
  maxSegments: number;
  pointGeo: THREE.BufferGeometry;
  lineGeo: THREE.BufferGeometry;
};

function createStore(
  count: number,
  bounds: { x: number; y: number; z: number },
): Store {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * bounds.x * 2;
    positions[i * 3 + 1] = (Math.random() - 0.5) * bounds.y * 2;
    positions[i * 3 + 2] = (Math.random() - 0.5) * bounds.z * 2;
    velocities[i * 3] = (Math.random() - 0.5) * 0.04;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.04;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.04;
  }
  const maxSegments = count * 8;
  const linePositions = new Float32Array(maxSegments * 2 * 3);
  const lineColors = new Float32Array(maxSegments * 2 * 3);

  const pointGeo = new THREE.BufferGeometry();
  pointGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
  lineGeo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

  return {
    positions,
    velocities,
    linePositions,
    lineColors,
    maxSegments,
    pointGeo,
    lineGeo,
  };
}

function Field({ count, connectDist, bounds, animate }: FieldProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  // Single mutable store, created once. Refs may be mutated freely.
  const store = useRef<Store | null>(null);
  if (store.current === null) {
    store.current = createStore(count, bounds);
  }
  const s = store.current;

  const rebuildLines = () => {
    let seg = 0;
    const cd2 = connectDist * connectDist;
    const { positions, linePositions, lineColors, maxSegments, lineGeo } = s;
    for (let i = 0; i < count; i++) {
      const ix = positions[i * 3];
      const iy = positions[i * 3 + 1];
      const iz = positions[i * 3 + 2];
      for (let j = i + 1; j < count; j++) {
        if (seg >= maxSegments) break;
        const dx = ix - positions[j * 3];
        const dy = iy - positions[j * 3 + 1];
        const dz = iz - positions[j * 3 + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < cd2) {
          const a = 1 - Math.sqrt(d2) / connectDist;
          const o = seg * 6;
          linePositions[o] = ix;
          linePositions[o + 1] = iy;
          linePositions[o + 2] = iz;
          linePositions[o + 3] = positions[j * 3];
          linePositions[o + 4] = positions[j * 3 + 1];
          linePositions[o + 5] = positions[j * 3 + 2];
          for (let k = 0; k < 2; k++) {
            lineColors[o + k * 3] = ACCENT.r * a;
            lineColors[o + k * 3 + 1] = ACCENT.g * a;
            lineColors[o + k * 3 + 2] = ACCENT.b * a;
          }
          seg++;
        }
      }
    }
    lineGeo.setDrawRange(0, seg * 2);
    (lineGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    (lineGeo.attributes.color as THREE.BufferAttribute).needsUpdate = true;
  };

  // Build the initial frame once (covers the reduced-motion static case too).
  const initialized = useRef(false);
  if (!initialized.current) {
    initialized.current = true;
    rebuildLines();
  }

  useFrame((state) => {
    if (!animate) return;
    const { positions, velocities, pointGeo } = s;
    for (let i = 0; i < count; i++) {
      positions[i * 3] += velocities[i * 3];
      positions[i * 3 + 1] += velocities[i * 3 + 1];
      positions[i * 3 + 2] += velocities[i * 3 + 2];
      for (let a = 0; a < 3; a++) {
        const b = a === 0 ? bounds.x : a === 1 ? bounds.y : bounds.z;
        if (positions[i * 3 + a] > b || positions[i * 3 + a] < -b) {
          velocities[i * 3 + a] *= -1;
        }
      }
    }
    (pointGeo.attributes.position as THREE.BufferAttribute).needsUpdate = true;
    rebuildLines();

    const group = groupRef.current;
    if (group) {
      const px = (state.pointer.x * viewport.width) / 14;
      const py = (state.pointer.y * viewport.height) / 14;
      group.rotation.y += (px * 0.15 - group.rotation.y) * 0.04;
      group.rotation.x += (-py * 0.15 - group.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={s.pointGeo}>
        <pointsMaterial
          size={0.05}
          color={ACCENT}
          transparent
          opacity={0.9}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments geometry={s.lineGeo}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function NeuralField() {
  const reduce = useReducedMotion();
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 55 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ pointerEvents: "none" }}
    >
      <Field
        count={110}
        connectDist={1.7}
        bounds={{ x: 7, y: 4, z: 3 }}
        animate={!reduce}
      />
    </Canvas>
  );
}
