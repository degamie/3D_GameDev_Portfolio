import React from 'react'
import useFrame from '@react-three/fibre';
function MoonLight() {
    const Light={isRotating};
    const LightRef=useFrame();
    useFrame((_,delta)=>
        if(isRotating){
            lightRef.current.rotation.y+=.75*delta;
        }
    )
  return (
    <div>MoonLight</div>
  )
}

export default MoonLight