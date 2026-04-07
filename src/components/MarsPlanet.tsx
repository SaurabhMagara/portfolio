"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Float, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Mars() {
  const marsRef = useRef<THREE.Mesh>(null);
  
  // Local high-res Mars color map (downloaded from solarsystemscope.com)
  const colorMap = useTexture("/textures/mars.jpg");

  useFrame(() => {
    if (marsRef.current) {
      marsRef.current.rotation.y += 0.002; // Rotate relatively slowly
    }
  });

  return (
    <mesh ref={marsRef}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  );
}

export default function MarsPlanet() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.1} />
        {/* Slightly reddish light to emphasize the Mars feel */}
        <directionalLight position={[5, 3, 5]} intensity={1.8} color="#ffdecc" />
        
        {/* Space VFX */}
        <Sparkles count={300} scale={10} size={1.5} speed={0.4} color="#ffccaa" opacity={0.5} />
        
        <React.Suspense fallback={null}>
          <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
            <Mars />
          </Float>
        </React.Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={true} 
          autoRotateSpeed={0.3} 
        />
      </Canvas>
    </div>
  );
}
