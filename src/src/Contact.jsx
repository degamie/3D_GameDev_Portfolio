import React, { useState } from 'react'

function Contact() {
  const [Form, setForm]=useState(name='',age='',gender='',email='',proffession='');
  const handleChange()=>{};
  const HandleFocus()=>{};
  const isLoading()=>{}; 
  return (
    <input typeOnChange={handleChange}
    OnFocus={HandleFocus}>
        <section className="relative flex-row flex-col max-container">
            <div className="flext-1 min-w -[50%] flex-col"></div>
            <h1 className="head-text">Keep In Touch</h1>
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