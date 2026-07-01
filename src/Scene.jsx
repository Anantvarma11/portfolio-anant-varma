import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Environment, Float, MeshTransmissionMaterial, Sparkles, Stars, Instance, Instances, Image } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Monolith = () => {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={[0, 0, 0]} scale={[3, 6, 3]}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshTransmissionMaterial 
          backside
          samples={3}
          resolution={256}
          thickness={2}
          chromaticAberration={0.1}
          anisotropy={0.2}
          distortion={0.3}
          distortionScale={0.5}
          temporalDistortion={0.1}
          clearcoat={1}
          attenuationDistance={1}
          attenuationColor="#4F46E5"
          color="#0a0a0a"
        />
      </mesh>
    </Float>
  );
};

const DataSlab = ({ position }) => {
  const mesh = useRef();
  useFrame((state, delta) => {
    mesh.current.rotation.y -= delta * 0.15;
    mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
  });
  return (
    <Float speed={2} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} scale={[4, 6, 0.4]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#111" 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#4F46E5" 
          emissiveIntensity={0.3} 
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  const { camera } = useThree();
  
  const curve = useMemo(() => {
    // A clean, cinematic camera journey
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 18),     // Hero (looking at Monolith)
      new THREE.Vector3(8, 3, 5),      // About (orbiting right side)
      new THREE.Vector3(-6, -2, -4),   // Skills (diving low left)
      new THREE.Vector3(0, 6, -10),    // Projects (rising up, looking at ARKA)
      new THREE.Vector3(6, -3, -18),   // Patents (sweeping right and down)
      new THREE.Vector3(-5, 1, -26),   // Experience
      new THREE.Vector3(0, 0, -35),    // Contact (final resting place deep in the void)
    ], false, 'chordal', 0.5);
  }, []);

  const progressRef = useRef({ val: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const lookAtTarget = useRef(new THREE.Vector3());

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '.scroll-container',
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        progressRef.current.val = self.progress;
      }
    });

    const onMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  useFrame(() => {
    const t = progressRef.current.val;
    
    // Position camera along the path
    const position = curve.getPointAt(t);
    // Look slightly ahead on the curve
    const lookAtPoint = curve.getPointAt(Math.min(1, t + 0.08));
    
    // Smooth cursor parallax
    const targetX = mouseRef.current.x * 1.5;
    const targetY = mouseRef.current.y * 1.5;
    
    camera.position.lerp(new THREE.Vector3(position.x + targetX, position.y + targetY, position.z), 0.05);
    
    // Smooth lookAt tracking
    lookAtTarget.current.lerp(lookAtPoint, 0.05);
    camera.lookAt(lookAtTarget.current);
  });

  return (
    <>
      <color attach="background" args={['#030303']} />
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={3} color="#4F46E5" />
      <directionalLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
      <pointLight position={[0, 4, -10]} intensity={5} color="#4F46E5" distance={20} />
      
      <Environment preset="night" />
      
      <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={150} scale={40} size={2} speed={0.2} opacity={0.15} color="#4F46E5" position={[0, 0, -15]} />

      {/* Floating Avatar in the Hero section background */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <Image 
          url="/avatar.png" 
          position={[5, 2, -5]} 
          scale={[6, 6]} 
          transparent 
          opacity={0.9}
        />
      </Float>

      {/* The Central Secure Core */}
      <Monolith />

      {/* ARKA Data Slab at Projects Position */}
      <DataSlab position={[0, 4, -14]} />
      
      {/* 3 Deliberately placed background monolithic slabs to give depth without clutter */}
      <DataSlab position={[15, -10, -25]} />
      <DataSlab position={[-12, 12, -35]} />
      <DataSlab position={[8, 0, -45]} />

      {/* Post Processing Pipeline */}
      <EffectComposer disableNormalPass multisampling={0}>
        <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} height={300} opacity={1.5} blendFunction={BlendFunction.SCREEN} />
        <Noise opacity={0.03} blendFunction={BlendFunction.OVERLAY} />
        <Vignette eskil={false} offset={0.1} darkness={1.1} />
        <ChromaticAberration offset={[0.001, 0.001]} blendFunction={BlendFunction.NORMAL} />
      </EffectComposer>
    </>
  );
};

export default Scene;
