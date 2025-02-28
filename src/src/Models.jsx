import React, { useEffect } from 'react'

function Models() {
    const Mdlref=useRef();
    const {scene,animations}=useGLTF(MdlScene);
    const {actions}=useAnimations(animations,Mdlref);
    useEffect(()=>{
        actions['Take 001'].play()},[]);
  return (
  
        <mesh position={[-5,2,1]}scale={[.00304,.04,.0067]}></mesh>
    <div>Models</div>
  )
}

export default Models