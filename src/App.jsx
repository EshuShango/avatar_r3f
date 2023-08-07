// import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
// import { CanvasLoader } from "./utils/Loader";

function App() {
  return (
    <Canvas shadows camera={{ position: [0,-5,5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      {/* <Suspense fallback={<CanvasLoader /> }> */}
        <Experience />
      {/* </Suspense> */}
     
    </Canvas>
  );
}

export default App;
