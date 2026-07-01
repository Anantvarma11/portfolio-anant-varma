import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Lenis from 'lenis';
import Scene from './Scene';
import Overlay from './Overlay';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <>
      <div className="canvas-container">
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 35 }}
          gl={{ antialias: false, powerPreference: "high-performance" }}
          dpr={[1, 1.5]}
        >
          <Scene />
        </Canvas>
      </div>
      <Overlay />
    </>
  );
}

export default App;
