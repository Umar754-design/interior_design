import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// MATERIAL DEFINITIONS BASED ON SELECTED FINISH
const FINISH_PALETTES = {
  parisian: {
    floor: '#1a1815',
    wall: '#1b1d22',
    accent: '#d4af37',
    furniturePrimary: '#ebe5da',
    furnitureSecondary: '#3d3126',
    metal: '#d4af37'
  },
  noir: {
    floor: '#0c0d10',
    wall: '#121418',
    accent: '#e5c07b',
    furniturePrimary: '#22252c',
    furnitureSecondary: '#15171c',
    metal: '#f3e5ab'
  },
  travertine: {
    floor: '#23201d',
    wall: '#1f1e1b',
    accent: '#c5a880',
    furniturePrimary: '#d8cfbe',
    furnitureSecondary: '#2b211a',
    metal: '#b58b4f'
  }
};

// 1. LIVING ROOM 3D ENVIRONMENT
function LivingRoomEnvironment({ finish }) {
  const p = FINISH_PALETTES[finish] || FINISH_PALETTES.parisian;

  return (
    <group position={[0, -1, 0]}>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color={p.floor} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Back Wall */}
      <mesh receiveShadow position={[0, 3, -4]}>
        <boxGeometry args={[12, 6, 0.3]} />
        <meshStandardMaterial color={p.wall} roughness={0.8} />
      </mesh>

      {/* Architectural Fireplace Monolith */}
      <group position={[0, 1.5, -3.8]}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[3.2, 3, 0.4]} />
          <meshStandardMaterial color={p.furnitureSecondary} roughness={0.4} />
        </mesh>
        {/* Fireplace Hearth Opening */}
        <mesh position={[0, -0.6, 0.15]}>
          <boxGeometry args={[1.8, 0.9, 0.3]} />
          <meshStandardMaterial color="#050608" roughness={0.9} />
        </mesh>
        {/* Emissive Fire Glow */}
        <mesh position={[0, -0.75, 0.2]}>
          <boxGeometry args={[1.4, 0.1, 0.15]} />
          <meshStandardMaterial color="#ff7b24" emissive="#ff5500" emissiveIntensity={3} />
        </mesh>
      </group>

      {/* Curved Sofa */}
      <group position={[0, 0, 0.5]}>
        <mesh position={[0, 0.35, 0]} castShadow receiveShadow>
          <boxGeometry args={[3.8, 0.5, 1.4]} />
          <meshStandardMaterial color={p.furniturePrimary} roughness={0.8} />
        </mesh>
        <mesh position={[0, 0.85, -0.5]} castShadow receiveShadow>
          <boxGeometry args={[3.8, 0.7, 0.4]} />
          <meshStandardMaterial color={p.furniturePrimary} roughness={0.8} />
        </mesh>
      </group>

      {/* Marble & Brass Coffee Table */}
      <group position={[0, 0, 2]}>
        <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.1, 1.1, 0.08, 32]} />
          <meshStandardMaterial color="#f0eee9" roughness={0.2} metalness={0.1} />
        </mesh>
        <mesh position={[0, 0.14, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.28, 16]} />
          <meshStandardMaterial color={p.metal} metalness={0.9} roughness={0.2} />
        </mesh>
      </group>
    </group>
  );
}

// 2. MASTER BEDROOM 3D ENVIRONMENT
function BedroomEnvironment({ finish }) {
  const p = FINISH_PALETTES[finish] || FINISH_PALETTES.parisian;

  return (
    <group position={[0, -1, 0]}>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color={p.floor} roughness={0.4} metalness={0.1} />
      </mesh>

      {/* Back Wall with Vertical Architectural Slat Accent */}
      <mesh receiveShadow position={[0, 3, -4]}>
        <boxGeometry args={[12, 6, 0.3]} />
        <meshStandardMaterial color={p.wall} roughness={0.85} />
      </mesh>

      {/* King Platform Bed Base */}
      <group position={[0, 0, -0.8]}>
        {/* Floating Wooden Plinth */}
        <mesh position={[0, 0.2, 0]} castShadow receiveShadow>
          <boxGeometry args={[3.4, 0.3, 3.6]} />
          <meshStandardMaterial color={p.furnitureSecondary} roughness={0.5} />
        </mesh>

        {/* Mattress & Luxury Duvet */}
        <mesh position={[0, 0.55, 0.1]} castShadow receiveShadow>
          <boxGeometry args={[3.1, 0.45, 3.3]} />
          <meshStandardMaterial color={p.furniturePrimary} roughness={0.9} />
        </mesh>

        {/* Textured Upholstered Headboard */}
        <mesh position={[0, 1.25, -1.6]} castShadow receiveShadow>
          <boxGeometry args={[4.2, 1.6, 0.3]} />
          <meshStandardMaterial color={p.furniturePrimary} roughness={0.8} />
        </mesh>

        {/* Pillows */}
        <mesh position={[-0.8, 0.9, -1.2]} rotation={[0.3, 0, 0]} castShadow>
          <boxGeometry args={[1.0, 0.3, 0.6]} />
          <meshStandardMaterial color="#ffffff" roughness={0.9} />
        </mesh>
        <mesh position={[0.8, 0.9, -1.2]} rotation={[0.3, 0, 0]} castShadow>
          <boxGeometry args={[1.0, 0.3, 0.6]} />
          <meshStandardMaterial color="#ffffff" roughness={0.9} />
        </mesh>

        {/* Floating Nightstands */}
        <mesh position={[-2.4, 0.45, -1.4]} castShadow receiveShadow>
          <boxGeometry args={[0.7, 0.25, 0.6]} />
          <meshStandardMaterial color={p.furnitureSecondary} roughness={0.4} />
        </mesh>
        <mesh position={[2.4, 0.45, -1.4]} castShadow receiveShadow>
          <boxGeometry args={[0.7, 0.25, 0.6]} />
          <meshStandardMaterial color={p.furnitureSecondary} roughness={0.4} />
        </mesh>

        {/* Designer Brass Wall Sconces */}
        <mesh position={[-2.4, 1.6, -1.8]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
          <meshStandardMaterial color={p.metal} metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[2.4, 1.6, -1.8]} castShadow>
          <cylinderGeometry args={[0.08, 0.08, 0.5, 16]} />
          <meshStandardMaterial color={p.metal} metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      {/* Plush Bedroom Area Rug */}
      <mesh receiveShadow position={[0, 0.02, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4.8, 4.6]} />
        <meshStandardMaterial color="#2e313b" roughness={0.95} />
      </mesh>
    </group>
  );
}

// 3. BESPOKE KITCHEN 3D ENVIRONMENT
function KitchenEnvironment({ finish }) {
  const p = FINISH_PALETTES[finish] || FINISH_PALETTES.parisian;

  return (
    <group position={[0, -1, 0]}>
      {/* Floor */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color={p.floor} roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Back Wall with Full-Height Walnut Cabinetry */}
      <group position={[0, 3, -3.8]}>
        <mesh receiveShadow>
          <boxGeometry args={[12, 6, 0.6]} />
          <meshStandardMaterial color={p.furnitureSecondary} roughness={0.5} />
        </mesh>
        {/* Recessed Niche in Back Wall */}
        <mesh position={[0, -0.2, 0.2]} receiveShadow>
          <boxGeometry args={[6, 1.6, 0.3]} />
          <meshStandardMaterial color="#1a1c22" roughness={0.3} />
        </mesh>
        {/* LED Under-Cabinet Light */}
        <mesh position={[0, 0.65, 0.3]}>
          <boxGeometry args={[5.8, 0.06, 0.1]} />
          <meshStandardMaterial color="#fceecb" emissive="#d4af37" emissiveIntensity={2} />
        </mesh>
      </group>

      {/* Waterfall Marble Kitchen Island */}
      <group position={[0, 0.7, 0.6]}>
        {/* Island Body */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={[4.2, 1.4, 1.6]} />
          <meshStandardMaterial color="#f0ede6" roughness={0.18} metalness={0.08} />
        </mesh>

        {/* Minimalist Induction Cooktop Glass */}
        <mesh position={[-0.8, 0.71, 0]}>
          <boxGeometry args={[1.2, 0.02, 0.8]} />
          <meshStandardMaterial color="#0c0d10" roughness={0.1} metalness={0.8} />
        </mesh>

        {/* Integrated Brass Prep Sink */}
        <mesh position={[1.1, 0.71, 0]}>
          <boxGeometry args={[0.9, 0.02, 0.7]} />
          <meshStandardMaterial color={p.metal} metalness={0.9} roughness={0.25} />
        </mesh>
      </group>

      {/* Minimalist Bar Stools */}
      {[-1.2, 0, 1.2].map((x, i) => (
        <group key={i} position={[x, 0, 1.9]}>
          <mesh position={[0, 0.5, 0]} castShadow>
            <cylinderGeometry args={[0.26, 0.26, 0.06, 24]} />
            <meshStandardMaterial color={p.furniturePrimary} roughness={0.7} />
          </mesh>
          <mesh position={[0, 0.24, 0]} castShadow>
            <cylinderGeometry args={[0.02, 0.02, 0.48, 12]} />
            <meshStandardMaterial color={p.metal} metalness={0.9} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* Dual Brass Cylindrical Pendant Lights */}
      {[-0.9, 0.9].map((x, i) => (
        <group key={i} position={[x, 3.2, 0.6]}>
          <mesh position={[0, 0, 0]} castShadow>
            <cylinderGeometry args={[0.08, 0.08, 0.65, 24]} />
            <meshStandardMaterial color={p.metal} metalness={0.95} roughness={0.15} />
          </mesh>
          <mesh position={[0, -0.35, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#fff3d1" emissive="#ffc86b" emissiveIntensity={3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// Lighting Rig matching Selected Lighting Mood
function LightingSetup({ mood }) {
  if (mood === 'golden') {
    return (
      <>
        <ambientLight intensity={0.4} color="#ffd8a8" />
        <directionalLight
          position={[7, 6, 4]}
          intensity={2.2}
          color="#ffb347"
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <pointLight position={[-3, 2, 2]} intensity={0.5} color="#d4af37" />
      </>
    );
  }

  if (mood === 'nocturne') {
    return (
      <>
        <ambientLight intensity={0.2} color="#4a5568" />
        <directionalLight
          position={[5, 6, 3]}
          intensity={0.6}
          color="#8fa3bf"
          castShadow
        />
        <pointLight position={[0, 2.5, 0]} intensity={1.6} color="#ffb74d" />
        <pointLight position={[-2, 1.2, -2]} intensity={1.2} color="#ff8c00" />
      </>
    );
  }

  // Default: Daylight
  return (
    <>
      <ambientLight intensity={0.5} color="#ffffff" />
      <directionalLight
        position={[6, 7, 5]}
        intensity={1.9}
        color="#fffaf0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-4, 3, 2]} intensity={0.4} color="#f0e6d2" />
    </>
  );
}

export default function Visualizer3DScene({ roomType, finish, lightingMood }) {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '520px', position: 'relative' }}>
      <Canvas
        shadows
        camera={{ position: [0, 2.2, 5.8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <LightingSetup mood={lightingMood} />

          {roomType === 'living' && <LivingRoomEnvironment finish={finish} />}
          {roomType === 'bedroom' && <BedroomEnvironment finish={finish} />}
          {roomType === 'kitchen' && <KitchenEnvironment finish={finish} />}

          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={4}
            maxDistance={8.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.15}
            autoRotate={false}
            dampingFactor={0.06}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
