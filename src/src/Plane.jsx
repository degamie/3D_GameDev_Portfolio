import {useRef} from 'react'
// import React from 'react'

const Plane({isRotating,..props}) {
  const ref=React.useRef;
  const {actions}=useAnimations(Animation,ref);
  return (
    <mesh {..props} ref={ref}></mesh>
    <div>Plane</div>
  )
}

export default Plane
// import Plane from '../assets/3d/plane.glb';
// const Plane=()=>{
//     const{scene,animations}=useGLTF(planescene);
// }