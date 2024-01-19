/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import { Avatar } from "../Avatar/Avatar";

import CanvasLoader from "../Loader";
``;

const AvatarCanvas = () => {
    return (
        <Canvas shadows camera={{ position: [1, 2, 5], fov: 30 }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <group position-y={-1}>
                    <Avatar />
                    <ambientLight intensity={1} />
                </group>
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default AvatarCanvas;
