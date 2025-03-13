import React, { useRef, useState } from 'react'

function Contact() {
  const formRef=useRef(null);
  const [Form, setForm]=useState(name='',age='',gender='',email='',proffession='');
  const handleChang=()=>{};

  const HandleFocus=()=>{};

  const isLoading=()=>{}; 

  const handleSubmit=[handleSubmit];

  const HandleChange=(e)=>{//HandleChange Funct Declare
    setForm('...form,[e.target.name]:e.targetValue',useState(false));//Initializng SetForm 
  }
  return (
    <input typeOnChange={handleChange}
    OnFocus={HandleFocus}>
        <section className="relative flex-row flex-col max-container">
            <div className="flext-1 min-w -[50%] flex-col"></div>
            <h1 className="head-text">Keep In Touch</h1>
            <form >onsubmit={handleSubmit}</form>
            <form className="w-full flex flex-col gap-8 mt-15"></form>
            <label className="text-black 500 font-semibold"></label>
            <button
              type="submit"
              className='btn'
              onFocus={HandleFocus}
              disabled={isLoading}
              {isLoading ? 'Sending Data':'Send Acceptance'}
            ></button>
        </section>
        </input>
  )
}

export default Contact