/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
``;

const Games = ({ isMobile }) => {
    const game = useGLTF("./sorc/scene.gltf");
    return (
        <mesh>
            <primitive
                object={game.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -3, -2.2] : [0, -10, 0]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const GamesCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");

        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        return () => {
            mediaQuery.addEventListener("change", handleMediaQueryChange);
        };
    }, []);
    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position: [20, 5, 10], fov: 75 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Games isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default GamesCanvas;
