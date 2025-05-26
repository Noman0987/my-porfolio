import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const color = new THREE.Color();

function Particles({
  pointCount = 1000,
  particleSize = 0.05,
  color = new THREE.Color('#8b7bf3'), // Updated particle color
  mousePosition // Accept mouse position prop
}) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < pointCount; i++) {
      const theta = Math.random() * Math.PI * 2; // Angle
      const radius = 1 + Math.random() * 4; // Distance from center
      const x = radius * Math.cos(theta);
      const y = radius * Math.sin(theta);
      const z = (Math.random() - 0.5) * 2; // Z-depth

      temp.push({
        position: new THREE.Vector3(x, y, z),
        rotation: new THREE.Euler(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI),
        scale: Math.random() * 0.2 + 0.05,
        velocity: new THREE.Vector3(Math.random() * 0.01 - 0.005, Math.random() * 0.01 - 0.005, Math.random() * 0.01 - 0.005)
      });
    }
    return temp;
  }, [pointCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    particles.forEach((particle, i) => {
      // Base movement
      particle.position.add(particle.velocity);

      // Keep particles within bounds (simple reset)
      if (particle.position.length() > 6) {
        particle.position.set(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ).normalize().multiplyScalar(5);
      }

      // Interaction with mouse position
      if (mousePosition) {
        const mouseVec = new THREE.Vector3(mousePosition[0] * 5, mousePosition[1] * 5, 0);
        const direction = new THREE.Vector3().subVectors(particle.position, mouseVec);
        const distance = direction.length();
        const repulsionForce = 0.005 / (distance * distance); // Inverse square law repulsion

        if (distance < 2) { // Only apply repulsion if close to mouse
          direction.normalize().multiplyScalar(repulsionForce);
          particle.position.add(direction);
        }
      }

      // Update instance matrix
      dummy.position.copy(particle.position);
      dummy.rotation.copy(particle.rotation);
      dummy.scale.set(particle.scale, particle.scale, particle.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, pointCount]}>
      <sphereGeometry args={[particleSize, 8, 8]} />
      <meshBasicMaterial color={color} />
    </instancedMesh>
  );
}

function ThreeScene({ mousePosition }) {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <Particles mousePosition={mousePosition} />
      {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />*/}
    </Canvas>
  );
}

export default ThreeScene; 