import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Scene = ({ children }: Props) => {
    return (
        <Canvas eventPrefix="client" camera={{ position: [0, 0, 4], fov: 40 }}>
            <ambientLight intensity={0.7} />
            <spotLight
                intensity={0.5}
                angle={0.1}
                penumbra={1}
                position={[10, 15, -5]}
                castShadow
            />
            <ContactShadows
                resolution={512}
                position={[0, -0.8, 0]}
                opacity={1}
                scale={10}
                blur={2}
                far={0.8}
            />
            {children}
        </Canvas>
    );
};

export default Scene;
