import ModelUrl from '/ryzom/characters/shapes/ca_ship.shape.gltf?url'
import MektoubUrl from '/ryzom/fauna/shapes/tr_mo_mektoub_selle.gltf?url'
import ZoneUrl from '/ryzom/matis/zones/12_AM.zonel.gltf?url'
import './App.css'
import {Grid, OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import {BrowserRouter, LinkProps, NavLink, Route, Routes} from 'react-router-dom';
import LoaderProgress from "./LoaderProgress.tsx";
import ModelDisplay from './ModelDisplay.tsx';

function Link(props: LinkProps) {
    return <NavLink {...props} className={({isActive}) => "nav-link" + isActive ? "active" : ""}/>;
}

function App() {
    return (
        <BrowserRouter basename="ryzom-model-viewer">
            <Container fluid className="h-100">
                <Row className="h-100">
                    <Col md={2}>
                        <Nav className="flex-column">
                            <Nav.Item>
                                <Link to="/">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/mektoub">Mektoub</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/zone">Zone</Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                        <Canvas className="h-100">
                            <ambientLight intensity={Math.PI / 2}/>
                            <directionalLight position={[10, 0, 0]} intensity={Math.PI * 2}/>
                            <Suspense fallback={<LoaderProgress />}>
                                <Routes>
                                    <Route path="/"
                                           element={<ModelDisplay url={ModelUrl} rotation={[-Math.PI / 2, 0, 0]}/>}/>
                                    <Route path="mektoub"
                                           element={<ModelDisplay url={MektoubUrl} rotation={[-Math.PI / 2, 0, 0]}/>}/>
                                    <Route path="zone"
                                           element={<ModelDisplay url={ZoneUrl} rotation={[-Math.PI / 2, 0, 0]}
                                                                  position={[-80, 0, -80]}/>}/>
                                </Routes>

                            </Suspense>
                            <OrbitControls enablePan={true}
                                           enableZoom={true}
                                           enableRotate={true}/>
                            <Grid infiniteGrid/>
                        </Canvas>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    )
}

export default App
