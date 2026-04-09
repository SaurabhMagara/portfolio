"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef<THREE.Mesh>(null);
  
  // Local high-res Earth color map
  const colorMap = useTexture("/textures/earth.jpg");

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.0015; // Slightly slower rotation than Mars for realism
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshStandardMaterial map={colorMap} roughness={0.7} metalness={0.2} />
    </mesh>
  );
}

export default function EarthPlanet() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        {/* Crisp white light for Earth */}
        <directionalLight position={[5, 3, 5]} intensity={2.0} color="#ffffff" />
        
        {/* Space VFX - updated color to be more cyan/blue for Earth context */}
        <Sparkles count={300} scale={10} size={1.5} speed={0.4} color="#00f0ff" opacity={0.4} />
        
        <React.Suspense fallback={null}>
          <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
            <Earth />
          </Float>
        </React.Suspense>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate={true} 
          autoRotateSpeed={0.2} 
        />
      </Canvas>
    </div>
  );
}
