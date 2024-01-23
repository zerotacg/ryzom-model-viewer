import './App.css'
import {Grid, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import ModelDisplay from "./ModelDisplay.tsx";

function App() {
    return (
        <Container fluid className="h-100">
            <Row className="h-100">
                <Col md={2}>
                    <Nav defaultActiveKey="/" className="flex-column">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                </Col>
                <Col>
                    <Canvas className="h-100">
                        <ambientLight intensity={Math.PI / 2}/>
                        <directionalLight position={[10, 0, 0]} intensity={Math.PI * 2}/>
                        <Suspense fallback={null}>
                            <ModelDisplay rotation={[-Math.PI / 2, 0, 0]}/>
                        </Suspense>
                        <OrbitControls enablePan={true}
                                       enableZoom={true}
                                       enableRotate={true}/>
                        <Grid infiniteGrid/>
                    </Canvas>
                </Col>
            </Row>
        </Container>
    )
}

export default App
