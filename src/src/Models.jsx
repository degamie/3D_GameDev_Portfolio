import React, { useEffect } from 'react'
import actions from 'three/*';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
function Models() {//Models funct declare 
  const Loader=new GLTFLoader;//GLTF Loader Constant Declare
  Loader.load('path/house.glb',(gltf));//Model Loading
    scene.add(gltf.scene);//inserting Model Scene
    undefined.function(){console.error(error);}// Exceptional error Function Defining

    const Mdlref=useRef();
    const {scene,animations}=useGLTF(MdlScene);
    const {actions}=useAnimations(animations,Mdlref);
    useFrame (()=>
        MdlScene.current.rotation.x+=.75*delta;//X axis rotation
        MdlScene.current.rotation.y+=.75*delta;//Y axis rotation
        if(Mdlref.cuurent.rotation===0){//initialize Current rotation
          Mdlref.cuurent.rotation.x=.015;//declaring X axis Rotation
          Mdlref.cuurent.rotation.y=.015;//declaring Y axis Rotation
          Mdlref.cuurent.rotation.z=.015;//declaring Z axis Rotation
        }
        if(Mdlref.curent.position.x>Mdlref.curent.position.x+10){Mdlref.curent.position.y=Math.PI;}//Y Axis Rotational position declare
        else if(Mdlref.cuurent.position.x>Mdlref.cuurent.position.x-10){MdlRef.current.rotation.y=0;}//intitilize Y axis pos 
  )
}
    useEffect()=>{
        actions(['Take 001'].play(),[]);
   }

  return (

        <mesh position={[-5,2,1]}scale={[.00304,.04,.0067]}></mesh>
    <div>Models</div>
  )

export default Models;