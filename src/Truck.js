import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import TruckModel from '/public/Truck.glb'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(TruckModel)
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.mesh_0.geometry} material={materials['metal(Clone)']} />
      <mesh castShadow receiveShadow geometry={nodes.mesh_0_1.geometry} material={materials['dark(Clone)']} />
      <mesh castShadow receiveShadow geometry={nodes.mesh_0_2.geometry} material={materials['metalGreen(Clone)']} />
      <mesh castShadow receiveShadow geometry={nodes.mesh_0_3.geometry} material={materials['lightRed(Clone)']} />
      <mesh castShadow receiveShadow geometry={nodes.mesh_0_4.geometry} material={materials['glass(Clone)']} />
      <mesh castShadow receiveShadow geometry={nodes.mesh_0_5.geometry} material={materials['metalLight(Clone)']} />
    </group>
  )
}

useGLTF.preload(TruckModel)
