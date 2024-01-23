import ModelUrl from '/ryzom/characters/shapes/ca_ship.shape.gltf?url'
import {useGLTF} from '@react-three/drei'

export default function ModelDisplay(props) {
    const {nodes, materials} = useGLTF(ModelUrl)

    return (
        <group
            {...props}
        >
            {Object.entries(nodes).map(([key, node]) =>
                <mesh
                    key={key}
                    geometry={node.geometry}
                    material={materials[key] || materials[""]}
                />
            )}
        </group>
    )
}
