/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
    value: "Sitting",
    options: ["Sitting", "Typing", "Falling", "Standing", "Looking"],
    },
  });
  return (
    <>
      <OrbitControls  />
       <group position-y={-1}>

      <Avatar animation={animation}/>  
      </group>
      <ambientLight intensity={3.14} />
    </>
  );
};
//! Something is wrong with the model. It is not loading correctly.