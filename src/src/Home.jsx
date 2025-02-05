import React, { Suspense } from 'react'

function Home() {
  return (
    <div>Home</div>
    <section className="w-full h-screen relative">  </section>
        <canvas>camera={{near:.1,far:1000}}</canvas>
        <Suspense fallBack> {{Loader}}</Suspense>
        <hemisphereLight></hemisphereLight>
    )
}

export default Home
