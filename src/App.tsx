import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'

import Box from './components/Box'

import './App.css'

function App() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} color="pink" />
      <directionalLight color="yellow" position={[3, 4, 5]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}

export default App
