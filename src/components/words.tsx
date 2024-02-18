import {
  Points as PointsType,
  Material,
  BufferGeometry,
  NormalBufferAttributes,
  Vector3,
  Spherical,
  Mesh,
  MeshBasicMaterial,
} from "three";
import { Billboard, OrbitControls, Text } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { CSSProperties, Suspense, useMemo, useRef, useState } from "react";

const Words = ({
  count,
  radius,
  color = "white",
  spinSpeed = 0.01,
  opacity = 0,
  style,
}: {
  count: number;
  radius: number;
  color: string;
  spinSpeed?: number;
  opacity: number;
  style: CSSProperties;
}) => {
  const words = [
    "ciao",
    "hello",
    "namaste",
    "vanakkam",
    "bonjour",
    "hola",
    "halayaa",
    "hallo",
    "namaskara",
  ];
  const wordMap = useMemo(() => {
    const temp: [Vector3, string][] = [];
    const spherical = new Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i += 2) {
      for (let j = 0; j < count; j += 2) {
        temp.push([
          new Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          words[Math.floor(Math.random() * words.length)],
        ]);
      }
    }
    return temp;
  }, [count, radius]);

  const WordWrap = ({ pos, word, index } : { pos: any, word: any, index: any }) => {
    let ref = useRef<Mesh<
      BufferGeometry<NormalBufferAttributes>,
      Material | Material[]
    > | null>(null);
    useFrame((state, delta) => {
      if (ref.current)
        ref.current.material = new MeshBasicMaterial({ color: "black" });
    });
    return (
      <mesh key={index} position={pos}>
        <Billboard>
          <Text
            fontSize={1.5}
            children={word}
            color={color}
            fillOpacity={opacity}
          />
          <meshBasicMaterial attach="material" color="black" />
        </Billboard>
      </mesh>
    );
  }

  return (
    <Canvas camera={{ position: [0, 0, 20], far: 1000}} style={{ ...style, position: "absolute", top: 0, left: 0 }}>
      <fog attach="fog" args={["#012E4E", 0, 100]} />
      <OrbitControls />
      <Suspense fallback={null}>
        <group rotation={[0, 0, Math.PI / 4]}>
          {wordMap.map(([pos, word], index) => <WordWrap pos={pos} word={word} index={index} key={word+index} />)}
        </group>
      </Suspense>
    </Canvas>
  );
};

export default Words;
