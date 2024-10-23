// src/components/Sphere.js
import React, { useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import { Sphere as DreiSphere, MeshDistortMaterial } from '@react-three/drei';

const Sphere = () => {
  const sphereRef = useRef();

  return (
    <Canvas style={{ height: '350px', width: '100%' }}>
      <ambientLight intensity={0} />
      <directionalLight position={[2, 6, 2]} intensity={2} />
      <DreiSphere ref={sphereRef} args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial 
          color="#ffb833" 
          attach="material" 
          emissive="red"
          emissiveIntensity={0.2}
          speed={1.5} 
        />
      </DreiSphere>
    </Canvas>
  );
};

export default Sphere;
