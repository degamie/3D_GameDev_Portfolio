import React, { useRef, useState } from 'react'

class Contact extends Home{//Class Declare
function Contact() {
  const formRef=useRef(null);
  const [Form, setForm]=useState(name='',age='',gender='',email='',proffession='');
  Contact(name,age,gender,email,proffession){//Paramertized Constructor
    this.name=name;//Name's Binding 
    this.age=age;//age's Binding 
    this.gender=gender;//gender's Binding 
    this.proffession=proffession;//proffession's Binding 
}
  const handleChange()=>{};
  const HandleFocus()=>{};
  const isLoading()=>{}; 
  const handleSubmit=[handleSubmit];
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
}

export default Contact