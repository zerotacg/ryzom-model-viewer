import './App.css'
import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import Container from 'react-bootstrap/Container';
import ModelDisplay from "./ModelDisplay.tsx";

function App() {
    return (
        <Container fluid="md" className="h-100">
            <div className="h-100">
                <Canvas className="h-100">
                    <ambientLight intensity={Math.PI / 2}/>
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI}/>
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI}/>
                    <Suspense fallback={null}>
                        <ModelDisplay rotation={[-90, 0, 0]}/>
                    </Suspense>
                    <OrbitControls enablePan={true}
                                   enableZoom={true}
                                   enableRotate={true}/>
                </Canvas>
            </div>
        </Container>
    )
}

export default App
