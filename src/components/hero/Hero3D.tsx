"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Line, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function makePositions(count: number, radius: number) {
  const arr = new Float32Array(count * 3);
  let seed = 12345;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  for (let i = 0; i < count; i += 1) {
    const theta = rand() * Math.PI * 2;
    const phi = Math.acos(2 * rand() - 1);
    const r = radius * (0.75 + rand() * 0.25);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

function makeEdges(count: number) {
  const pts: THREE.Vector3[] = [];
  let seed = 777;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  for (let i = 0; i < count; i += 1) {
    const ra = 1 + rand() * 1.2;
    const rb = 1 + rand() * 1.2;
    const a = new THREE.Vector3().setFromSphericalCoords(
      ra,
      rand() * Math.PI,
      rand() * Math.PI * 2
    );
    const b = new THREE.Vector3().setFromSphericalCoords(
      rb,
      rand() * Math.PI,
      rand() * Math.PI * 2
    );
    pts.push(a, b);
  }
  return pts;
}

const POSITIONS_GOLD = makePositions(900, 1.7);
const POSITIONS_BRASS = makePositions(240, 2.6);
const EDGES = makeEdges(60);

function NodeSphere({
  positions,
  color,
  speed,
}: {
  positions: Float32Array;
  color: string;
  speed: number;
}) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * speed;
    }
  });

  return (
    <group ref={group}>
      <Points positions={positions}>
        <PointMaterial
          transparent
          color={color}
          size={0.06}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
}

function EdgeField() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.x += delta * 0.03;
      group.current.rotation.z -= delta * 0.02;
    }
  });

  return (
    <group ref={group}>
      {Array.from({ length: EDGES.length / 2 }, (_, i) => (
        <Line
          key={i}
          points={[EDGES[i * 2], EDGES[i * 2 + 1]]}
          color="#d4a458"
          transparent
          opacity={0.15}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div
      className="relative h-[320px] w-full sm:h-[460px]"
      role="img"
      aria-label="Interactive 3D network sphere representing connected digital systems"
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 55 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <NodeSphere positions={POSITIONS_GOLD} color="#d4a458" speed={0.05} />
        <NodeSphere positions={POSITIONS_BRASS} color="#b8863f" speed={-0.035} />        <EdgeField />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}