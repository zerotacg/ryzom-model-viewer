import ModelUrl from '/ryzom/characters/shapes/ca_ship.shape.gltf?url'
import {useGLTF} from '@react-three/drei'
import {GroupProps} from "@react-three/fiber";

export default function ModelDisplay(props: GroupProps) {
    const {nodes, materials} = useGLTF(ModelUrl)

    return (
        <group
            {...props}
        >
            {Object.entries(nodes).map(([key, node]) =>
                <mesh
                    key={key}
                    geometry={
                        /// @ts-ignore
                        node.geometry
                    }
                    material={materials[key] || materials[""]}
                />
            )}
        </group>
    )
}
