
import React, { Suspense, useState } from 'react'
import HomeInfo from "./assets/3d/PLANE.glb/HomeInfo";
class Home extends HomeInfo,AuthProvider{
function LoginButton(){//Login button Declare//Funct
  Home home=new Home();//Obj declare
  const getToken(newtoken){
    console.log(newtoken);
  }
  const setToken(newToken){
    setToken(newToken);
  }
  const {loginWithRedirect}=useAuth0();//UseAtuh Method Declare
  return (//Printing OnClick Buttton
    <button className="btn btn-primary btn-block" onClick={()=>loginWithRedirect()}>;
    </button>
  Login//Login Redirection 
)
}
function Header(){//Header Funct declare
  const captalize=(s)=>{//Captalize Const Declare
    if(typeof s!='string')return ' ';//printing initial Base Cond
    return s.charAt(0).toUpperCase+s.slice(1);//printing the upper Case Input Line 
  }
}

function Home() { //Home  Funct Declare
  Plane=(currentStage)=>{ //Plane Funct Declare
    //Fethcing the Current Stage
    const [currentStage,getCurrentStage]=useState(0);getCurrentStage={getCurrentStage};
    const [currentStage,setCurrentStage]=useState(1);

    setCurrentStage={setCurrentStage};
  }
  return (    
    <><Plane planeScale={planeScale, planePosition} rotation={0, 20, 0}></Plane><div>{currentStage === 1 && <HomeInfo currentStage currentStage />}</div></>
  
  )
}

    function AdjustPlaneForScreen(){
      let screenScale=0;let screenPos=0;
        if(window.ForScreenSize()){
          screenScale=[1.5,1.5,1.5];
          screenPos=[0,-1.5,0];
          
        }
        else {
          screenScale=[3,3,3];
          screenPos=[0,-2.4,2.4];
        }console.log(screenPos,rot);
    }
  }
    // <><Suspense fallBack> {{ Loader }}</Suspense><hemisphereLight></hemisphereLight></>

    // <div>Home</div>
    // <section className="w-full h-screen relative">  </section>
    // <canvas className={'w-full h-screen bg-transparent}>camera={{near:.1,far:1000} ${isRotating ?cursor-grabbing,cursor,-grab'}></canvas>
    // <canvas>camera={{near:.1,far:1000}}</canvas>

export default Home;
