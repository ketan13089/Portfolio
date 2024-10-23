import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

const SpaceBackground = () => {
  return (
    <Canvas className="canvas" style={{ height: '100vh', width: '100%' }} camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {/* Add stars to create a space environment */}
      <Stars
        radius={100}       // Radius of the inner sphere
        depth={50}         // Depth of the star field
        count={5000}       // Number of stars
        factor={4}         // Size factor
        saturation={0}     // Star color saturation
        fade={true}        // Fades out at the edge of the field
      />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default SpaceBackground;
