"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function FloatingShapes() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const materialColor = mounted && resolvedTheme === "light" ? "#0066cc" : "#0070f3";

  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
         <mesh position={[2, 1, 0]} rotation={[0.4, 0.2, 0.5]}>
           <torusGeometry args={[0.8, 0.3, 16, 32]} />
           <meshStandardMaterial color={materialColor} roughness={0.2} metalness={0.8} />
         </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
         <mesh position={[-2, -1, -1]} rotation={[0.1, 0.5, 0.1]}>
           <boxGeometry args={[1.2, 1.2, 1.2]} />
           <meshStandardMaterial color={materialColor} roughness={0.4} metalness={0.6} wireframe />
         </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
         <mesh position={[0, -2, -2]} rotation={[0.5, 0.1, 0.8]}>
           <octahedronGeometry args={[0.8]} />
           <meshStandardMaterial color={materialColor} roughness={0.1} metalness={0.9} />
         </mesh>
      </Float>
      
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Environment preset="city" />
    </>
  );
}

export default function ShapesScene() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <FloatingShapes />
      </Canvas>
    </div>
  );
}
