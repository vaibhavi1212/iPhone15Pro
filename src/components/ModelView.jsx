import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import Loader from "./Loader";
import IPhone from "./IPhone";
import { Suspense } from "react";
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
    // Reuse the vector to avoid creating a new instance on every render
    const targetVector = new THREE.Vector3(0, 0, 0);

    return (
      <View index={index} id={gsapType} className={`w-full h-full  absolute ${index === 2 ? 'right-[-100%]' : ''}`}>
        {/* Add lighting */}
        <ambientLight intensity={0.3} />

        {/* Perspective Camera */}
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        {/* Custom Lights Component */}
        <Lights />

        {/* Orbit Controls */}
        <OrbitControls
          makeDefault
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={targetVector} // Reuse the vector for target
          onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />

        {/* Group to hold the model */}
        <group ref={groupRef} name={index === 1 ? 'small' : 'large'} position={[0, 0, 0]}>
          {/* Suspense for lazy loading */}
          <Suspense fallback={<Loader />}>
            <IPhone scale={index === 1 ? [15, 15, 15] : [17, 17, 17]} item={item} size={size} />
          </Suspense>
        </group>
      </View>
    );
  };
  
export default ModelView;
