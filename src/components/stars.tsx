import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState, useRef, CSSProperties } from "react";
import { Points, PointMaterial, OrbitControls } from "@react-three/drei";
import {
  Points as PointsType,
  Material,
  BufferGeometry,
  NormalBufferAttributes,
} from "three";
import * as random from "maath/random";
import Fog from "./fog";

const Stars = ({ style }: { style: CSSProperties }) => {
  const StarWrap = () => {
    const ref = useRef<PointsType<
      BufferGeometry<NormalBufferAttributes>,
      Material | Material[]
    > | null>(null);
    const [sphere] = useState<Float32Array>(
      random.inSphere(new Float32Array(5000), { radius: 20 }) as Float32Array
    );
    useFrame((state, delta) => {
      ref.current!.rotation.x -= delta / 15;
      ref.current!.rotation.y -= delta / 20;
    });
    return (
      <group rotation={[0, 0, Math.PI / 8]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#ffa0e0"
            size={0.05}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    )
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 0], far: 1000 }}
      style={{
        ...style,
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {/* <OrbitControls /> */}
      {/* <fog attach="fog" args={["#012E4E", 0, 100]} /> */}
      <Suspense fallback={null}>
        <StarWrap />
      </Suspense>
    </Canvas>
  );
};

export default Stars;
