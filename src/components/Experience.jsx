/* eslint-disable react/no-unknown-property */
import { ContactShadows, Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Sitting",
      options: ["Sitting", "Typing", "Falling", "Standing", "Looking"],
    },
  });

  // make a function for when, Looking is selected, the head follows the mouse or looks at objects surrounding  it 

  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position-y={-1}>
        <ContactShadows 
          opacity={0.42}
          scale={10}
          blur={0.2}
          far={10}
          resolution={256}
          color="#000000"
          />
        <Avatar animation={animation} />
        
        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        )}
        {/* below is the floor for the avatar */}
        <mesh receiveShadow scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};
