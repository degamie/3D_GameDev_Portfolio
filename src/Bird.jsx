import React from 'react'

function Bird() {
    const {scene,animations}=useGLTF(BirdScene);
    return (
        <mesh position={[-5,2,1]}scale={[.00304,.04,.0067]}></mesh>
    )
}

export default Bird