import React from 'react';
import {useEffect, useRef} from 'react';


const Plane=(isRotating,props)=>{
  const ref=React.useRef;
  const {actions}=useAnimations(Animation,ref);
  useEffect(()=>{
    if(isRotating)actions['Take 001'].play();
    else actions['Take 001'].stop();
    console.log({isRotating});
  })
  return;
}
export default Plane;
    // <mesh {props} ref={ref}></mesh>
    // <div>Plane</div>


// import Plane from '../assets/3d/plane.glb';
// const Plane=()=>{
//     const{scene,animations}=useGLTF(planescene);
// }