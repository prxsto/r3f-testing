import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./experience";
import * as THREE from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));
const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [3, 2, 6],
};

root.render(
  <Canvas
    // dpr={[1, 2]} // clamp pixel ratio between 1 and 2 -- default
    gl={{
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      outputColorSpace: THREE.SRGBColorSpace,
    }}
    camera={cameraSettings}
  >
    <Experience />
  </Canvas>,
);
