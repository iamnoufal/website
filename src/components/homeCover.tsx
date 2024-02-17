"use client";

import Words from "./words";
import Stars from "./stars";

const HomeCover = () => {
  // return (
  //     <Canvas
  //       camera={{ position: [0, 0, 20], far: 1000 }}
  //       style={{ width: "100%", height: "100vh", position: "absolute", top: 0, left: 0 }}
  //     >
  //       <ambientLight intensity={0.5} />
  //       <pointLight position={[10, 10, 10]} />
  //       {/* <OrbitControls /> */}
  //       <fog attach="fog" args={["#012E4E", 0, 100]} />
  //       <Suspense fallback={null}>
  //         {/* <group>
  //           <mesh position={[0, 0, 0]}>
  //             <Text
  //               fontSize={2}
  //               color="white"
  //               anchorX="center"
  //               anchorY="middle"
  //             >
  //               Hello World
  //             </Text>
  //           </mesh>
  //         </group> */}
  //         <Stars />
  //         <Words count={8} radius={20} color="#fff" opacity={0.5} />
  //       </Suspense>
  //     </Canvas>
  // )
  return (
    <div>
      <Words count={8} radius={20} color="#fff" opacity={1} style={{ height: "100vh", width: '100%' }} />
      <Stars style={{ height: "200vh", width: '100%' }} />
    </div>
  )
}

export default HomeCover