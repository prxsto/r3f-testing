import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
// could also have used "import { DoubleSide } from "three""

export default function CustomObject() {
  const geometryRef = useRef();

  const vertCount = 10 * 3; // keep outside, since using in buffattribute
  const positions = useMemo(() => {
    const positions = new Float32Array(vertCount * 3);

    for (let i = 0; i < vertCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 3;
    }

    return positions;
  }, []);

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, [positions]);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach={"attributes-position"}
          count={vertCount}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <meshStandardMaterial color={"red"} side={THREE.DoubleSide} />
    </mesh>
  );
}
