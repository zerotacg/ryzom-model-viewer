import {useGLTF} from '@react-three/drei'
import {GroupProps} from "@react-three/fiber";

export type ModelDisplayProps = GroupProps & {
    url: string;
}

export default function ModelDisplay({url, ...props}: ModelDisplayProps) {
    const {nodes, materials} = useGLTF(url)

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
