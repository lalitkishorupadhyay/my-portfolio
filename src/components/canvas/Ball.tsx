import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'

type BallProps = { color: string }

function BallMesh({ color }: BallProps) {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
      </mesh>
    </Float>
  )
}

type BallCanvasProps = { color: string; name: string }

export default function BallCanvas({ color, name }: BallCanvasProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-20 h-20 xs:w-24 xs:h-24">
        <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} enablePan={false} />
            <BallMesh color={color} />
          </Suspense>
        </Canvas>
      </div>
      <p className="text-[12px] text-white/60 text-center">{name}</p>
    </div>
  )
}
