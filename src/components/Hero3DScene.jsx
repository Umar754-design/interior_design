import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Dust Motes / Light Particles
function DustMotes({ count = 80 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 12;
      p[i * 3 + 1] = Math.random() * 6;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [count]);

  const pointsRef = useRef();

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#f5ecc8"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

// Architectural Living Room Model
function LuxuryLivingRoom() {
  const groupRef = useRef();

  // Gentle idle breathing
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.03;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* --- FLOOR (Dark Polished Herringbone / Charcoal Parquet) --- */}
      <mesh receiveShadow position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[14, 14]} />
        <meshStandardMaterial
          color="#0f1115"
          roughness={0.25}
          metalness={0.15}
        />
      </mesh>

      {/* --- BACK WALL WITH ARCHITECTURAL RECESSED PANELS --- */}
      <mesh receiveShadow position={[0, 3.5, -4.5]}>
        <boxGeometry args={[14, 7, 0.4]} />
        <meshStandardMaterial color="#14171d" roughness={0.8} />
      </mesh>

      {/* Recessed Cove Lighting Strip */}
      <mesh position={[0, 6.8, -4.2]}>
        <boxGeometry args={[13, 0.1, 0.2]} />
        <meshStandardMaterial
          color="#f5ecc8"
          emissive="#d4af37"
          emissiveIntensity={1.8}
        />
      </mesh>

      {/* Architectural Fluted Wood Slat Accent Wall (Left) */}
      {[-3.8, -3.4, -3.0, -2.6, -2.2].map((x, i) => (
        <mesh key={i} position={[x, 3.5, -4.2]} castShadow receiveShadow>
          <boxGeometry args={[0.2, 7, 0.15]} />
          <meshStandardMaterial color="#2d2218" roughness={0.6} />
        </mesh>
      ))}

      {/* Large Minimalist Wall Art Canvas with Gold Leaf Foil */}
      <group position={[0.8, 3.8, -4.28]}>
        {/* Black Gallery Frame */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.2, 4.2, 0.08]} />
          <meshStandardMaterial color="#08090a" roughness={0.4} />
        </mesh>
        {/* Canvas Surface */}
        <mesh position={[0, 0, 0.05]}>
          <planeGeometry args={[3, 4]} />
          <meshStandardMaterial color="#1a1c23" roughness={0.9} />
        </mesh>
        {/* Gold Leaf Slash Accent */}
        <mesh position={[-0.2, 0.2, 0.07]} rotation={[0, 0, 0.35]}>
          <planeGeometry args={[0.45, 2.6]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.9}
            roughness={0.2}
            emissive="#aa8420"
            emissiveIntensity={0.25}
          />
        </mesh>
        <mesh position={[0.4, -0.4, 0.07]} rotation={[0, 0, -0.2]}>
          <planeGeometry args={[0.3, 1.8]} />
          <meshStandardMaterial
            color="#c5a880"
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>
      </group>

      {/* --- LARGE ARCHITECTURAL PANORAMIC WINDOW (Right Side) --- */}
      <group position={[5.5, 3.5, -1]}>
        {/* Window Framing */}
        <mesh position={[0, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <boxGeometry args={[8, 7, 0.2]} />
          <meshStandardMaterial color="#0c0d10" roughness={0.5} />
        </mesh>
        {/* Glass Glow */}
        <mesh position={[-0.1, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
          <planeGeometry args={[7.6, 6.6]} />
          <meshStandardMaterial
            color="#3a4b5c"
            emissive="#233544"
            emissiveIntensity={0.35}
            roughness={0.1}
            metalness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
      </group>

      {/* --- LUXURY BOUCLÉ CURVED DESIGNER SOFA --- */}
      <group position={[-0.2, 0, -1.2]}>
        {/* Sofa Base / Plinth in Dark Walnut */}
        <mesh position={[0, 0.12, 0]} castShadow receiveShadow>
          <boxGeometry args={[4.4, 0.24, 1.8]} />
          <meshStandardMaterial color="#1f1814" roughness={0.5} />
        </mesh>

        {/* Main Seat Cushion (Warm Cream Bouclé) */}
        <mesh position={[0, 0.45, 0.1]} castShadow receiveShadow>
          <boxGeometry args={[4.3, 0.45, 1.6]} />
          <meshStandardMaterial color="#ebe6dc" roughness={0.85} />
        </mesh>

        {/* Curved Backrest */}
        <mesh position={[0, 1.05, -0.6]} castShadow receiveShadow>
          <boxGeometry args={[4.3, 0.8, 0.45]} />
          <meshStandardMaterial color="#dfd9cd" roughness={0.85} />
        </mesh>

        {/* Left Armrest */}
        <mesh position={[-2.1, 0.85, 0.1]} castShadow receiveShadow>
          <boxGeometry args={[0.45, 0.55, 1.6]} />
          <meshStandardMaterial color="#dfd9cd" roughness={0.85} />
        </mesh>

        {/* Right Armrest */}
        <mesh position={[2.1, 0.85, 0.1]} castShadow receiveShadow>
          <boxGeometry args={[0.45, 0.55, 1.6]} />
          <meshStandardMaterial color="#dfd9cd" roughness={0.85} />
        </mesh>

        {/* Velvet Decorative Cushions */}
        <mesh position={[-1.2, 0.85, -0.25]} rotation={[0.2, 0.1, 0]} castShadow>
          <boxGeometry args={[0.6, 0.6, 0.2]} />
          <meshStandardMaterial color="#4a3b2c" roughness={0.7} />
        </mesh>
        <mesh position={[1.1, 0.85, -0.25]} rotation={[0.2, -0.15, 0]} castShadow>
          <boxGeometry args={[0.55, 0.55, 0.2]} />
          <meshStandardMaterial color="#c5a880" metalness={0.1} roughness={0.65} />
        </mesh>
      </group>

      {/* --- SCULPTURAL MARBLE & BRASS COFFEE TABLE --- */}
      <group position={[-0.2, 0, 1.1]}>
        {/* Brushed Brass Frame / Cylinder Legs */}
        <mesh position={[-1, 0.2, -0.4]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.4, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh position={[1, 0.2, -0.4]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.4, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0.2, 0.4]} castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.4, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.25} />
        </mesh>

        {/* Fluted White Carrara Marble Oval Top */}
        <mesh position={[0, 0.42, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.35, 1.35, 0.08, 32]} />
          <meshStandardMaterial
            color="#f0eee8"
            roughness={0.15}
            metalness={0.1}
          />
        </mesh>

        {/* Architectural Ceramic Vase on Table */}
        <mesh position={[0.3, 0.65, 0.1]} castShadow>
          <cylinderGeometry args={[0.1, 0.16, 0.4, 16]} />
          <meshStandardMaterial color="#22252a" roughness={0.9} />
        </mesh>

        {/* Dried Botanical Sprigs */}
        <mesh position={[0.3, 0.95, 0.1]} rotation={[0.1, 0.2, 0.1]}>
          <cylinderGeometry args={[0.01, 0.015, 0.4, 8]} />
          <meshStandardMaterial color="#c5a880" roughness={0.8} />
        </mesh>

        {/* Hardcover Architecture Art Monograph */}
        <mesh position={[-0.35, 0.48, -0.1]} rotation={[0, 0.35, 0]} castShadow>
          <boxGeometry args={[0.48, 0.05, 0.65]} />
          <meshStandardMaterial color="#0c0d10" roughness={0.4} />
        </mesh>
      </group>

      {/* --- ARCHED DESIGNER FLOOR LAMP (Flos Arco Style) --- */}
      <group position={[-3.2, 0, 0.5]}>
        {/* Solid Nero Marquina Marble Base Block */}
        <mesh position={[0, 0.3, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.45, 0.6, 0.3]} />
          <meshStandardMaterial color="#111215" roughness={0.2} metalness={0.2} />
        </mesh>

        {/* Sweeping Brass Arc Spine */}
        <mesh position={[0.8, 2.5, 0]} rotation={[0, 0, -0.45]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 3.8, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.18} />
        </mesh>
        <mesh position={[1.8, 3.8, 0]} rotation={[0, 0, -1.35]} castShadow>
          <cylinderGeometry args={[0.025, 0.025, 2.4, 16]} />
          <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.18} />
        </mesh>

        {/* Spun Brass Lamp Shade */}
        <mesh position={[2.7, 3.2, 0]} castShadow>
          <sphereGeometry args={[0.32, 24, 24, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial
            color="#d4af37"
            metalness={0.95}
            roughness={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Warm Emissive Bulb */}
        <mesh position={[2.7, 3.12, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#fff3d1"
            emissive="#ffc86b"
            emissiveIntensity={3.5}
          />
        </mesh>

        {/* Cast Spotlight from Lamp */}
        <spotLight
          position={[2.7, 3.0, 0]}
          target-position={[0, 0, 0]}
          angle={0.65}
          penumbra={0.8}
          intensity={2.2}
          color="#ffe4b0"
          castShadow
        />
      </group>

      {/* --- ARCHITECTURAL MINIMALIST PLANTER WITH MONSTERA FOLIAGE --- */}
      <group position={[3.2, 0, -2.4]}>
        {/* Fluted Ceramic Pot */}
        <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.42, 0.35, 1.1, 24]} />
          <meshStandardMaterial color="#191b20" roughness={0.85} />
        </mesh>
        {/* Soil */}
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.1, 16]} />
          <meshStandardMaterial color="#1a1410" roughness={0.9} />
        </mesh>

        {/* Sculptural Stems & Leaves */}
        {[-0.35, 0, 0.32].map((rot, i) => (
          <group key={i} position={[0, 1.1, 0]} rotation={[0.2 * (i - 1), rot, 0.3 * (i - 1)]}>
            {/* Stem */}
            <mesh position={[0, 0.5, 0]}>
              <cylinderGeometry args={[0.018, 0.025, 1.0, 8]} />
              <meshStandardMaterial color="#2d3b26" roughness={0.7} />
            </mesh>
            {/* Broad Fan Leaf */}
            <mesh position={[0, 1.0, 0.1]} rotation={[-0.4, 0, 0]} castShadow>
              <planeGeometry args={[0.55, 0.75]} />
              <meshStandardMaterial
                color="#1b2a1a"
                roughness={0.6}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
}

// Camera Mouse Parallax Rig
function CameraParallax() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    // Subtle, smooth camera damping based on normalized mouse pointer
    const targetX = pointer.x * 0.9;
    const targetY = 1.4 + pointer.y * 0.45;
    const targetZ = 6.2;

    camera.position.x += (targetX - camera.position.x) * 0.04;
    camera.position.y += (targetY - camera.position.y) * 0.04;
    camera.position.z += (targetZ - camera.position.z) * 0.04;

    camera.lookAt(0, 0.6, 0);
  });

  return null;
}

export default function Hero3DScene() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        minHeight: '550px',
        position: 'relative'
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 1.4, 6.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'auto'
        }}
      >
        <Suspense fallback={null}>
          <CameraParallax />

          {/* AMBIENT & DIRECTIONAL LIGHTING */}
          <ambientLight intensity={0.4} color="#f5ecc8" />

          {/* Warm Sunbeam through Right Window */}
          <directionalLight
            position={[8, 7, 3]}
            intensity={1.8}
            color="#fff2db"
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-near={0.5}
            shadow-camera-far={20}
            shadow-camera-left={-6}
            shadow-camera-right={6}
            shadow-camera-top={6}
            shadow-camera-bottom={-6}
            shadow-bias={-0.0005}
          />

          {/* Soft Fill Light from Front-Left */}
          <pointLight position={[-4, 3, 4]} intensity={0.6} color="#c5a880" />

          {/* Floating Subtle Ambient Particles */}
          <DustMotes count={70} />

          {/* Main 3D Living Room Environment */}
          <LuxuryLivingRoom />
        </Suspense>
      </Canvas>

      {/* Floating 3D Badge Indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '1.5rem',
          right: '1.5rem',
          background: 'rgba(8, 9, 11, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--gold-border)',
          borderRadius: '4px',
          padding: '0.45rem 0.9rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          pointerEvents: 'none'
        }}
      >
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--gold-primary)',
            boxShadow: '0 0 8px var(--gold-primary)'
          }}
        />
        <span
          style={{
            color: 'var(--gold-light)',
            fontSize: '0.68rem',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.14em',
            textTransform: 'uppercase'
          }}
        >
          Interactive 3D Spatial Canvas
        </span>
      </div>
    </div>
  );
}
