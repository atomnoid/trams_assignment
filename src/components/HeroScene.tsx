'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 7)

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffddff, 1.2)
    keyLight.position.set(2, 4, 4)
    scene.add(keyLight)

    const rimLight = new THREE.DirectionalLight(0x8b5cf6, 0.28)
    rimLight.position.set(-2, -1, -2)
    scene.add(rimLight)

    const blobGeo = new THREE.IcosahedronGeometry(1.4, 4)
    const blobMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea,
      emissive: 0xec4899,
      emissiveIntensity: 0.28,
      roughness: 0.2,
      metalness: 0.75,
      transparent: true,
      opacity: 0.92,
    })
    const blobMesh = new THREE.Mesh(blobGeo, blobMat)
    blobMesh.position.set(0, 0.5, 0)
    scene.add(blobMesh)

    const particleGroup = new THREE.Group()
    const particleMat = new THREE.MeshStandardMaterial({
      color: 0xec4899,
      emissive: 0xfb7185,
      emissiveIntensity: 0.8,
      roughness: 0.4,
    })

    Array.from({ length: 28 }).forEach(() => {
      const particleGeo = new THREE.SphereGeometry(0.05, 12, 12)
      const particle = new THREE.Mesh(particleGeo, particleMat)
      particle.position.set(
        (Math.random() - 0.5) * 7,
        (Math.random() - 0.45) * 3,
        (Math.random() - 0.5) * 6,
      )
      particleGroup.add(particle)
    })
    scene.add(particleGroup)

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(12, 12),
      new THREE.MeshStandardMaterial({
        color: 0x111827,
        roughness: 0.8,
        opacity: 0.14,
        transparent: true,
      }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -1.8
    scene.add(floor)

    const clock = new THREE.Clock()
    let frameId = 0

    const animate = () => {
      const t = clock.getElapsedTime()
      blobMesh.rotation.x = t * 0.35
      blobMesh.rotation.y = t * 0.45
      blobMesh.position.y = Math.sin(t * 0.65) * 0.24
      renderer.render(scene, camera)
      frameId = window.requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      if (!containerRef.current) return
      const newWidth = containerRef.current.clientWidth
      const newHeight = containerRef.current.clientHeight
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      containerRef.current?.removeChild(renderer.domElement)
      blobGeo.dispose()
      blobMat.dispose()
      particleGroup.children.forEach((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose()
        }
      })
      particleMat.dispose()
      floor.geometry.dispose()
      ;(floor.material as THREE.Material).dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={containerRef} className="pointer-events-none absolute inset-0 -z-10 opacity-90" />
}
