import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

// New component for an interactive animation
// This component will receive mouse position data and react to it
const InteractiveAnimation = ({ mousePosition }) => {
  const particlesRef = useRef();
  const { size, viewport } = useThree();

  const count = 10000; // Number of particles
  const particleSize = 0.05; // Size of each particle

  // Generate initial random positions
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Distribute particles randomly in a larger area
      positions[i * 3] = (Math.random() - 0.5) * 20; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // Z
    }
    return positions;
  }, [count]);

   const originalPositions = useMemo(() => Float32Array.from(positions), [positions]);

  useFrame((state) => {
    if (particlesRef.current && mousePosition) {
      const positionsArray = particlesRef.current.geometry.attributes.position.array;
      const tempVector = new THREE.Vector3();

      // Convert normalized mouse position (-1 to 1) to world coordinates
      // Adjust these multipliers based on the desired area of effect and scene scale
      const mouseX = mousePosition[0] * (viewport.width / 2);
      const mouseY = mousePosition[1] * (viewport.height / 2);
      const mouse3D = new THREE.Vector3(mouseX, mouseY, 0); // Assume interaction is on a plane at Z=0

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        tempVector.set(positionsArray[i3], positionsArray[i3 + 1], positionsArray[i3 + 2]);

        const distance = tempVector.distanceTo(mouse3D);

        // Calculate a force based on distance (closer particles are affected more)
        const force = (maxDistance - distance) / maxDistance; // maxDistance to be defined or calculated

        if (force > 0) {
             // Direction from particle to mouse
            tempVector.sub(mouse3D).normalize();

            // Apply a subtle push force away from the mouse (ripple effect)
            positionsArray[i3] += tempVector.x * force * 0.01; // Adjust multiplier for strength
            positionsArray[i3 + 1] += tempVector.y * force * 0.01; // Adjust multiplier for strength
            // Z position could also be affected

            // Optional: Gradually return particles to original positions
             positionsArray[i3] = THREE.MathUtils.lerp(positionsArray[i3], originalPositions[i3], 0.005); // Adjust speed
             positionsArray[i3 + 1] = THREE.MathUtils.lerp(positionsArray[i3 + 1], originalPositions[i3 + 1], 0.005); // Adjust speed
             positionsArray[i3 + 2] = THREE.MathUtils.lerp(positionsArray[i3 + 2], originalPositions[i3 + 2], 0.005); // Adjust speed
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
     // Add a subtle overall movement or rotation to the particle system (optional)
    if(particlesRef.current) {
        particlesRef.current.rotation.y += 0.0005;
    }
  });

   // You might need to adjust maxDistance based on your scene scale and particle distribution
   const maxDistance = 3; // Example max distance for ripple effect

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach='attributes-position'
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={'#00f2fe'}
        size={particleSize}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const ThreeScene = ({ mousePosition }) => {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={0.7} />
      <pointLight position={[-5, -5, 5]} intensity={0.4} /> {/* Adjusted z position */}
      {/* Render the new interactive animation component, passing the mouse position */}
      <InteractiveAnimation mousePosition={mousePosition} />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default ThreeScene; 