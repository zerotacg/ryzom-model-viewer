import { Html, useProgress } from '@react-three/drei'

export default function LoaderProgress() {
    const { progress } = useProgress()

    return (<Html center>{progress} % loaded</Html>);
}
