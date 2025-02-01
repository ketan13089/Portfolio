import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three-stdlib';
import {
    OrbitControls,
    PerspectiveCamera,
    Environment,
    SpotLight,
    Stars,
} from '@react-three/drei';
import * as THREE from 'three';

import { 
    Github, 
    Linkedin, 
    Twitter, 
  } from 'lucide-react';

const Model = ({ mouse }) => {
    const modelRef = useRef();
    const gltf = useLoader(GLTFLoader, '/drone.glb');

    useFrame((state, delta) => {
        if (modelRef.current) {
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

            {/* Lights */}
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

            {/* Stars background */}
            <Stars
                radius={70}
                depth={30}
                count={10000}
                factor={4}
                saturation={0}
                fade
                speed={2}
            />

            {/* Model */}
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
                    <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-500">
                        <span>Hola</span>
                    </h1>
                    <p className="text-indigo-200 text-xl max-w-3xl mx-auto">
                        I'm Ketan... <br />
Passionate software developer skilled in React, Java, Python, and Spring Boot. I love solving problems and building efficient, scalable applications. Let’s connect!.
                    </p>

                    <div className="flex justify-center space-x-6 mt-10">
                        {[
                            { Icon: Github, href: 'https://github.com/ketan13089', label: 'GitHub' },
                            { Icon: Linkedin, href: 'https://linkedin.com/in/ketan-ghumare/', label: 'LinkedIn' },
                            { Icon: Twitter, href: 'https://x.com/ketan_ghumare', label: 'Twitter' }
                        ].map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                className="transform hover:scale-105 text-indigo-300 hover:text-indigo-100 transition-all duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}