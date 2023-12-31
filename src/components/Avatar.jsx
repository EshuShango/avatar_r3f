/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 public/model/Portfolio_Avatar.glb 
*/
import React, { useRef, useEffect } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { useControls } from "leva";

export const Avatar = (props) => {
  const { animation } = props;
  const { headFollow, cursorFollow, wireframe } = useControls({
    headFollow: { value: false },
    cursorFollow: { value: false },
    wireframe: { value: false },
  });
  // group of objects that make up the Avatar
  const group = useRef();
  // load the model
  const { nodes, materials } = useGLTF("model/Portfolio_Avatar.glb");
  // load the animations
  const { animations: sitting } = useFBX("animations/Sitting.fbx");
  const { animations: typing } = useFBX("animations/Typing.fbx");
  const { animations: falling } = useFBX("animations/Falling.fbx");
  const { animations: standing } = useFBX("animations/Standing.fbx");
  const { animations: looking } = useFBX("animations/Looking.fbx");

  sitting[0].name = "Sitting";
  typing[0].name = "Typing";
  falling[0].name = "Falling";
  standing[0].name = "Standing";
  looking[0].name = "Looking";

  const { actions } = useAnimations(
    [sitting[0], standing[0], falling[0], looking[0], typing[0]],
    group
  );
  // play animation

  // console.warn(actions)
  useFrame((state) => {
    if (headFollow) {
      group.current.getObjectByName("Head").lookAt(state.camera.position);
    }
    if (cursorFollow) {
      const target = new THREE.Vector3(state.mouse.x, state.mouse.y, 1);
      group.current.getObjectByName("Spine2").lookAt(target);
      // use the 'target' vector as needed
    }
  });

  // console.warn(actions)
  useEffect(() => {
    const curAction = actions[animation];
    curAction
      ? curAction.reset().fadeIn(0.5).play()
      : (console.warn(`Animation '${animation}' not found in actions.`),
        console.log(curAction));
    return () => curAction.reset().fadeOut(0.5);
  }, [animation]);

  useEffect(() => {
    Object.values(materials).forEach((mat) => {
      mat.wireframe = wireframe;
    });
  });

  return (
    <group {...props} dispose={null} ref={group}>
      <group rotation-x={-Math.PI / 2}>
        <primitive object={nodes.Hips} />
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
        <skinnedMesh
          geometry={nodes.Wolf3D_Headwear.geometry}
          material={materials.Wolf3D_Headwear}
          skeleton={nodes.Wolf3D_Headwear.skeleton}
        />
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
      </group>
    </group>
  );
};

useGLTF.preload("model/Portfolio_Avatar.glb");
