import {useGLTF} from '@react-three/drei'
import {GroupProps} from "@react-three/fiber";

export type ModelDisplayProps = GroupProps & {
    url: string;
}

export default function ModelDisplay({url, ...props}: ModelDisplayProps) {
    const {nodes, materials} = useGLTF(url)

    // alternatively a primitive could be used, but switching doesn't work with that
    // <primitive object={gltf.scene} scale={0.4} />

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
