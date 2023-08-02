import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = () => {
  return (
    <>
      <OrbitControls  />
       <group position={[0, -1, 0]}>

      <Avatar />  
      </group>
      <ambientLight intensity={3.14} />
    </>
  );
};