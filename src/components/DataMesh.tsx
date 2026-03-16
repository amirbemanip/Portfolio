import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const DataMesh = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  // Create a complex particle system forming a data mesh
  const count = 5000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const color1 = new THREE.Color('#00F0FF'); // Cyan
    const color2 = new THREE.Color('#7000FF'); // Deep Purple

    for (let i = 0; i < count; i++) {
      // Create a swirling galaxy / abstract data cloud shape
      const theta = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 0.5) * 15;
      
      const x = r * Math.cos(theta);
      const y = (Math.random() - 0.5) * 10;
      const z = r * Math.sin(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Mix colors based on distance from center
      const mixedColor = color1.clone().lerp(color2, Math.random() + (r / 15));
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }
    
    return [positions, colors];
  }, [count]);

  const geometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geom;
  }, [positions, colors]);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Smooth, eerie rotation
    meshRef.current.rotation.y = time * 0.05;
    meshRef.current.rotation.z = Math.sin(time * 0.05) * 0.1;
    
    // Wave effect
    const posAttribute = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArray = posAttribute.array;
    for(let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = posArray[i3];
      const z = posArray[i3 + 2];
      posArray[i3 + 1] += Math.sin(time + x * 0.5 + z * 0.5) * 0.01;
    }
    posAttribute.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial 
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};
