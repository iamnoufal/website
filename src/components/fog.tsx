const Fog = () => {
  return (
    <mesh>
      <fog attach="fog" args={["#012E4E", 0, 100]} />
    </mesh>
  )
}

export default Fog