"use client"

import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { vertexShader, fragmentShader, atmosphereVertexShader, atmosphereFragmentShader } from './Shaders'

const GlobeMesh: React.FC = () => {
  const globeRef = useRef<THREE.Mesh>(null)
  const outerGlowRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)
  const { mouse } = useThree()
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const texture = useLoader(THREE.TextureLoader, "https://i.postimg.cc/0Ndr7GpN/earth-world-map-3d-model-low-poly-max-obj-fbx-c4d-ma-blend.jpg")

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y -= 0.002
      globeRef.current.rotation.z -= 0.002
    }
    if (outerGlowRef.current) {
      const scale = Math.random() * (1.013 - 1.01) + 1.015
      outerGlowRef.current.scale.set(scale, scale, scale)
    }
    setRotation({ y: mouse.x * 0.1, x: -mouse.y * 0.1 })
  })

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x = rotation.x
      groupRef.current.rotation.y = rotation.y
    }
  }, [rotation])

  return (
    <group ref={groupRef}>
      <Sphere args={[5, 50, 50]} ref={globeRef}>
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            globeTexture: { value: texture }
          }}
        />
      </Sphere>
      <Sphere args={[5, 50, 50]} ref={outerGlowRef} scale={[1.01, 1.01, 1.01]}>
        <shaderMaterial
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  )
}

const Globe: React.FC = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <GlobeMesh />
      </Canvas>
    </div>
  )
}

export default Globe

