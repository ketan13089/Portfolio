import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import {
    OrbitControls,
    PerspectiveCamera,
    Environment,
    SpotLight,
    Float
} from '@react-three/drei';
import * as THREE from 'three';

const Model = ({ mouse }) => {
    const modelRef = useRef();
    const gltf = useLoader(GLTFLoader, '/drone.glb');

    // Smooth model movement
    useFrame((state, delta) => {
        if (modelRef.current) {
            // Smooth rotation based on mouse position
            //modelRef.current.rotation.y += delta * 0.5;

            // Smooth position lerping
            modelRef.current.position.x = THREE.MathUtils.lerp(
                modelRef.current.position.x,
                mouse.x * 5,
                0.1
            );
            modelRef.current.position.y = THREE.MathUtils.lerp(
                modelRef.current.position.y,
                mouse.y * 2,
                0.1
            );
            const angle = Math.atan2(mouse.y, mouse.x); // Calculate the angle between mouse and model
            modelRef.current.rotation.y = angle; // Rotate the model to face the mouse
        }
    });

    return (
        // <Float
        //     speed={1.5}
        //     rotationIntensity={0.5}
        //     floatIntensity={1.5}
        // >
        //     <primitive
        //         ref={modelRef}
        //         object={gltf.scene}
        //         scale={0.5}
        //         castShadow
        //         receiveShadow
        //     />
        // </Float>
        <primitive
            ref={modelRef}
            object={gltf.scene}
            scale={0.5}
            castShadow
            receiveShadow
        />
    );
};

const Scene = ({ mouse }) => {
    return (
        <>
            {/* Camera */}
            <PerspectiveCamera makeDefault position={[6, 0, 6]} />
            <OrbitControls
                enableZoom={true}
                enablePan={true}
                enableRotate={false}
                minDistance={3}
                maxDistance={10}
                dampingFactor={0.05}
                autoRotate={true}
                autoRotateSpeed={0.5}
            />

           
            <ambientLight intensity={0.3} />
            <SpotLight
                position={[10, 10, 10]}
                angle={0.3}
                penumbra={1}
                intensity={2}
                castShadow
            />
            <SpotLight
                position={[-10, -10, -10]}
                angle={0.3}
                penumbra={1}
                intensity={1}
                castShadow
            />

           
            <Environment preset="city" />

            
            <Model mouse={mouse} />
        </>
    );
};

export default function KG() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMouse({
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative h-screen bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29]">
            
            <div className="absolute inset-0">
                <Canvas shadows>
                    <Scene mouse={mouse} />
                </Canvas>
            </div>

        
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-500">
                        Hey
                    </h1>
                    <p className="text-indigo-200 text-xl max-w-md mx-auto">
                        I'm Ketan...
                    </p>
                </div>
            </div>
        </section>
    );
}