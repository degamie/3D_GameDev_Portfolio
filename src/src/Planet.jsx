import { useEffect, useRef } from "react"
class planet{
Planet(isRotating ,setIsRotating,obj){//Planet Constructor Declare
  const {scene,animations}=useGLTF(isPlanetScene);//SceneAnimation
  const PlanetRef=useRef();//PlanetRef Declare
  var lastX=useRef(0);
  var lastY=useRef(0);
  const dumpingSpeed=.95;
  const isPlanetRef=useRef();
  const gl,viewPort=useThree();
  const nodes,materials=useGLTF(isPlanetScene);
}
  //Implemnenting
  
  UseFrame=()=>{
    isPlanetRef.current.rotation.y+=rotationSpeed.current;
    if(isRotating){
      rotationSpeed.current=dampingFactor;
    }
    if(Math.abs(rotationSpeed.current<.001)){
      rotationSpeed.current;
    }
    else{
      const rotationxSpeed=isPlanetRef.current.rotation.x;
      const rotationySpeed=isPlanetRef.current.rotation.y;
    }
  }
  const handlingPt=(e)=>{
    useEffect (Canvas){
      Canvas=gl.domElement;
      document.addEventListener("handleKeyUP");

      document.addEventListener("handlePtrUp]"); document.addEventListener("handlePtrDown");document.addEventListener("handlePtrMove");} 
    
    return () =>{
      <meshRef>{PlanetRef}</meshRef>
      document.removeEventListener("PointerUp");
      document.removeEventListener("PointerDown");
      document.removeEventListener("PointerMove");
    }
const handleKeyUP=(e)=>{
  if(e.Key==='ArrowLeft' || e.Key==='ArrowRight'){
    setIsRotating(false);
  }
}
const handlingPtUp=(e)=>{
  e.stopPropogation();
  e.PreventDefault();
  setIsRotating(false);
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
}