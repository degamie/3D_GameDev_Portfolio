import React, { Suspense } from 'react'
class Home extends Contact{//Home Class inheriting Contact
  Home home=null;//Home Obj initialize
Home(Header, Home home) {//Home param Constructor
  this.Header=Header;//Binding Header
  this.home=home;//Binding home obj.
}
Oninit(){}//To be ImpLemented

  return (
    <div>Home</div>
    <section className="w-full h-screen relative">  </section>
    <canvas className={'w-full h-screen bg-transparent}>camera={{near:.1,far:1000} ${isRotating ?cursor-grabbing,cursor,-grab'}></canvas>
        <canvas>camera={{near:.1,far:1000}}</canvas>
        <Suspense fallBack> {{Loader}}</Suspense>
        <hemisphereLight></hemisphereLight>
    )
}//Home class inheriting Contactex
export default Home;
