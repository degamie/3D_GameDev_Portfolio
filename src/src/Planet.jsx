import { useEffect, useRef } from "react"

const Planet({isRotating ,setIsRotating,...obj})=>{
   const isPlanetRef=useRef();
   const gl,viewPort=useThree();
   const nodes,materials=useGLTF(isPlanetScene);
   const lastX=useRef(0);
   const dumpingSpeed=.95;
};
   const handlingPtUp=(e)=>{
    e.stopPropogation();
    e.PreventDefault();
    setIsRotating(false);
   }
   const handlingPt=(e)=>{
      useEffect () =>{
        document.removeEventListener("handlePtrUp]"); document.removeEventListener("handlePtrDown");document.removeEventListener("handlePtrMove");} 
      
      return () =>{
        document.removeEventListener("PointerUp");
        document.removeEventListener("PointerDown");
        document.removeEventListener("PointerMove");
      }
    e.stopPropogation();
    e.PreventDefault();
    setIsRotating(true);
    const clientX=e.touches?e.touches[0].clientX;
    const lastX=e.touches?e.touches[0].clientX:e.clientX;
    lastX.current=clientX;
    const delta=clientX-lastCurrent/viewPort.width;
    isPlanetRef.current.rotating+=delta*.95;
    lastX.current*Math.PI.clientX;
   }
