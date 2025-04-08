import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Model() {  // ✅ Ensure this is a default export
  const { scene } = useGLTF("/models/crystal_planet.glb"); // ✅ Ensure correct model path

  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}
