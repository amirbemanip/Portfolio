import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ShaderFluid } from './ShaderFluid';

export const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 100 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: false }}
      >
        <color attach="background" args={['#000000']} />
        <Suspense fallback={null}>
          <ShaderFluid />
        </Suspense>
      </Canvas>
    </div>
  );
};
