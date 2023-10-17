import './App.css';
import {Canvas} from "@react-three/fiber";
import ModelViewer from "./ModelViewer";

function App() {
  return (
    <div className="App">

      <Canvas>
          <ModelViewer scale="40" modelPath={"Monkey.glb"} />

          <mesh position={[4, 1, 0]}>
              <boxGeometry/>
              <meshStandardMaterial/>
          </mesh>
      </Canvas>
    </div>
  );
}

export default App;
