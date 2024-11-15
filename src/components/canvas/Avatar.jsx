import React, { useEffect, useRef, useMemo } from "react";
import { useGLTF, useFBX, useAnimations } from "@react-three/drei";

export default function Avatar(props) {
  const group = useRef();

  // Memoize GLTF loading to prevent reloading on every render
  const { nodes, materials } = useMemo(
    () => useGLTF("../../models/65a93fb9ac2d7748c2c1f3b4.glb"),
    []
  );

  // Memoize FBX loading to prevent reloading on every render
  const typingAnimation = useMemo(
    () => useFBX("../../animations/Typing.fbx"),
    []
  );

  // Rename animation clip for consistency
  typingAnimation.animations[0].name = "Typing";

  // Initialize animations and memoize the results
  const { actions, mixer } = useAnimations(typingAnimation.animations, group);

  // Play the animation once the component is mounted
  useEffect(() => {
    const typingAction = actions["Typing"];
    if (typingAction) {
      typingAction.reset().play();
    }

    // Clean up action when component is unmounted
    return () => typingAction && typingAction.stop();
  }, [actions]);

  // Update animation mixer per frame
  useEffect(() => {
    const handleFrame = (state, delta) => mixer.update(delta);
    return props.gl && props.gl.addEventListener("update", handleFrame);
  }, [mixer, props.gl]);

  return (
    <group
      position={[0.65, 0.13, -0.1]} // Inline positions to reduce re-renders
      {...props}
      ref={group}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, -1]}>
        <primitive object={nodes.Armature} />
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <skinnedMesh
          geometry={nodes["hair-60"].geometry}
          material={materials.M_Hair_60}
          skeleton={nodes["hair-60"].skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
      </group>
    </group>
  );
}

// Preload the GLTF model
useGLTF.preload("../../models/65a93fb9ac2d7748c2c1f3b4.glb");
