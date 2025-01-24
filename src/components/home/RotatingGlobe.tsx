'use client'

import { useEffect, useRef } from 'react'

export function RotatingGlobe() {
  const globeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const globe = globeRef.current
    if (!globe) return

    let rotation = 0
    const animate = () => {
      rotation += 0.5
      globe.style.transform = `rotateY(${rotation}deg)`
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="relative w-[300px] h-[300px]">
      <div
        ref={globeRef}
        className="absolute inset-0 rounded-full bg-blue-500 overflow-hidden"
        style={{
          backgroundImage: "url('/earth-texture.jpg')",
          backgroundSize: 'cover',
          transformStyle: 'preserve-3d',
        }}
      />
    </div>
  )
}

