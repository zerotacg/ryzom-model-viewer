import {useGLTF} from '@react-three/drei'
import {GroupProps} from "@react-three/fiber";

export type ModelDisplayProps = GroupProps & {
    url: string;
}

export default function ModelDisplay({url, ...props}: ModelDisplayProps) {
    const {nodes, materials} = useGLTF(url)

    // alternatively a primitive could be used, but routing doesn't work with that
    // return (<primitive object={scene} scale={0.4} {...props} />);

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
