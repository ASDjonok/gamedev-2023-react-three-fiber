import logo from './logo.svg';
import './App.css';
import {Canvas} from "@react-three/fiber";

function App() {
  return (
    <div className="App">
      <Canvas>
          <mesh position={[4, 1, 0]}>
              <boxGeometry/>
              <meshStandardMaterial/>
          </mesh>
      </Canvas>
    </div>
  );
}

export default App;
