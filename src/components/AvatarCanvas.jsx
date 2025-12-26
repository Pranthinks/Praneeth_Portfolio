import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';

// Avatar Model - Simple Idle + Lip Sync
function AvatarModel({ modelPath, shouldPlayIntro }) {
  const avatarRef = useRef();
  const gltf = useGLTF(modelPath);
  
  // Animation
  const mixer = useRef(null);
  const hasPlayedIntro = useRef(false);
  
  // Lip sync
  const audioRef = useRef(null);
  const visemesRef = useRef([]);
  const morphMeshes = useRef([]);
  const expressionCache = useRef({});
  const currentPhoneme = useRef(null);

  const visemeMap = {
    A: "expression_aa.json",
    B: "expression_bb.json", 
    C: "expression_cc.json",
    D: "expression_dd.json",
    E: "expression_ee.json",
    F: "expression_ff.json",
    G: "expression_gg.json",
    H: "expression_hh.json",
    X: null
  };

  // Find morph meshes
  useEffect(() => {
    if (gltf.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.morphTargetDictionary) {
          morphMeshes.current.push(child);
          console.log("Found mesh:", child.name, "with", Object.keys(child.morphTargetDictionary).length, "morph targets");
        }
      });
    }
  }, [gltf]);

  // Load idle animation only
  useEffect(() => {
    const fbxLoader = new FBXLoader();

    fbxLoader.load("/animations/Talking.fbx", (anim) => {
      if (gltf.scene && anim.animations[0]) {
        mixer.current = new THREE.AnimationMixer(gltf.scene);
        const action = mixer.current.clipAction(anim.animations[0]);
        action.loop = THREE.LoopRepeat;
        action.play();
        console.log("Idle animation loaded");
      }
    });

    return () => {
      if (mixer.current) mixer.current.stopAllAction();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [gltf]);

  // Play introduction when triggered
  useEffect(() => {
    if (shouldPlayIntro && !hasPlayedIntro.current) {
      playIntro();
    }
  }, [shouldPlayIntro]);

  // Play introduction
  const playIntro = async () => {
    if (hasPlayedIntro.current) return;
    hasPlayedIntro.current = true;

    try {
      // Load visemes
      const res = await fetch('/Visemes.json');
      const data = await res.json();
      visemesRef.current = data.mouthCues || [];
      console.log("Loaded visemes:", visemesRef.current.length);

      // Play audio
      audioRef.current = new Audio('/Introduction.wav');
      audioRef.current.onended = () => {
        console.log("Introduction finished");
        resetMouth();
        currentPhoneme.current = null;
      };
      
      await audioRef.current.play();
      console.log("Playing introduction");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Apply mouth shape - FIXED to handle mesh name mismatch
  const applyMouthShape = async (phoneme) => {
    const file = visemeMap[phoneme];
    if (!file) {
      resetMouth();
      return;
    }

    // Load expression if not cached
    if (!expressionCache.current[phoneme]) {
      try {
        const res = await fetch(`/rhubarb/${file}`);
        if (!res.ok) {
          console.error(`Failed to fetch ${file}`);
          return;
        }
        expressionCache.current[phoneme] = await res.json();
        console.log(`Loaded expression for ${phoneme}`);
      } catch (error) {
        console.error(`Failed to load ${phoneme}:`, error);
        return;
      }
    }

    const expression = expressionCache.current[phoneme];
    
    // FIX: Apply to all meshes regardless of expression mesh name
    let appliedCount = 0;
    morphMeshes.current.forEach(mesh => {
      if (!mesh.morphTargetDictionary || !mesh.morphTargetInfluences) return;
      
      // Get morph data - try all keys in the expression file
      let morphData = null;
      for (const key of Object.keys(expression)) {
        morphData = expression[key];
        break; // Use the first (and usually only) mesh data
      }
      
      if (morphData) {
        Object.keys(morphData).forEach(morphName => {
          const index = mesh.morphTargetDictionary[morphName];
          if (index !== undefined) {
            mesh.morphTargetInfluences[index] = morphData[morphName];
            appliedCount++;
          }
        });
      }
    });
    
    if (appliedCount === 0) {
      console.warn(`No morphs applied for ${phoneme} - check if morph target names match`);
    } else {
      console.log(`✓ Applied ${appliedCount} morphs for ${phoneme}`);
    }
  };

  // Reset mouth
  const resetMouth = () => {
    morphMeshes.current.forEach(mesh => {
      if (mesh.morphTargetInfluences) {
        for (let i = 0; i < mesh.morphTargetInfluences.length; i++) {
          mesh.morphTargetInfluences[i] = 0;
        }
      }
    });
  };

  // Update loop
  useFrame((state, delta) => {
    if (avatarRef.current) {
      // Gentle rotation
      avatarRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      
      // Breathing
      const breathe = Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
      avatarRef.current.position.y = -2.2 + breathe;
    }
    
    // Update animation
    if (mixer.current) {
      mixer.current.update(delta);
    }
    
    // Handle lip sync
    if (audioRef.current && !audioRef.current.paused && visemesRef.current.length > 0) {
      const time = audioRef.current.currentTime;
      
      for (const cue of visemesRef.current) {
        if (time >= cue.start && time <= cue.end) {
          if (currentPhoneme.current !== cue.value) {
            currentPhoneme.current = cue.value;
            applyMouthShape(cue.value);
          }
          break;
        }
      }
    }
  });

  return (
    <primitive 
      ref={avatarRef} 
      object={gltf.scene} 
      scale={2.4}              
      position={[0, -1.3, 0]}
    />
  );
}

// Camera
function ResponsiveCamera() {
  const { size } = useThree();
  const cameraRef = useRef();
  
  useEffect(() => {
    if (cameraRef.current) {
      const isMobile = size.width < 768;
      const isTablet = size.width >= 768 && size.width < 1024;
      
      if (isMobile) {
        cameraRef.current.position.set(0, 0.1, 5);
        cameraRef.current.fov = 55;
      } else if (isTablet) {
        cameraRef.current.position.set(0, 0.1, 4.2);
        cameraRef.current.fov = 50;
      } else {
        cameraRef.current.position.set(0, 0.1, 3.5);
        cameraRef.current.fov = 48;
      }
      cameraRef.current.updateProjectionMatrix();
    }
  }, [size]);

  return (
    <PerspectiveCamera 
      ref={cameraRef}
      makeDefault 
      position={[0, 0.1, 3.5]}
      fov={48}
    />
  );
}

// Loading
function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" wireframe />
    </mesh>
  );
}

// Main
function AvatarCanvas() {
  const [isMounted, setIsMounted] = useState(false);
  const [playIntro, setPlayIntro] = useState(false);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleStartClick = () => {
    setPlayIntro(true);
    setShowButton(false);
  };

  if (!isMounted) return null;

  return (
    <div className="w-full h-full bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-2xl relative">
      <Canvas shadows dpr={[1, 2]}>
        <ResponsiveCamera />
        
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 10, 5]} intensity={1.3} castShadow />
        <pointLight position={[-5, 8, 3]} intensity={0.7} />
        <pointLight position={[5, 2, 5]} intensity={0.5} />
        <spotLight position={[0, 10, 4]} angle={0.6} intensity={0.8} penumbra={0.5} />
        <pointLight position={[0, 1.5, 4]} intensity={0.6} />
        
        <Suspense fallback={<LoadingFallback />}>
          <AvatarModel modelPath="/praneeth_avatar.glb" shouldPlayIntro={playIntro} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={2}
          maxDistance={6}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI / 2}
          target={[0, -0.1, 0]}
        />
      </Canvas>
      
      {/* Start Button */}
      {showButton && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <button
            onClick={handleStartClick}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl transform hover:scale-105 transition-all flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            Click to Meet Me
          </button>
        </div>
      )}
      
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-black/60 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm">
        🎮 Interactive 3D
      </div>
      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 sm:bottom-4 bg-black/60 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs backdrop-blur-sm">
        <span className="hidden sm:inline">Drag to rotate • Scroll to zoom</span>
        <span className="sm:hidden">Drag • Pinch</span>
      </div>
    </div>
  );
}

useGLTF.preload('/praneeth_avatar.glb');

export default AvatarCanvas;