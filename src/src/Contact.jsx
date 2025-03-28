import React, { useRef, useState } from 'react'
import.meta.enter.VITE_APP_EMAILJS_SERVICE_ID;
import.meta.enter.VITE_APP_EMAILJS_TEMPLATE_ID;

function Contact() {
  // const formRef=useRef(null);
  const defaultFormState = {
    name:'',age:'',gender:'',email:'',profession:'';
  }
  const [form, setForm]=useState(defaultFormState);
  // const emailjs = useState('')

  const sendForm = (form) => {
    defaultFormState();
    handleFocus();
    handleChange();
    handleSubmit(e);
    onsubmitPassword(Password);
    onsubmitUsername(UserName);

  }

  const handleFocus=()=>{
    sendForm(e);
    handleSubmit(e);
  };

  const handleSubmit = (e) =>{
    const form=event.currentTarget;
    const formElement=form.elements as typeof form.element & {
        usernameInput.{value:string};
   
}
const onsubmitUsername(UserName:String){//  Func declare
  const formsubmit=handleSubmit(e);//Calling handleSubmit method
}
//Password Submit Button
onsubmitPassword(PasswordInput.value);
    e.preventDefault();
    sendForm(this.state.form);
}//Handling The Password Form's btn
const onsubmitPassword(var Password){//  Func declare
  const formsubmit=handleSubmit(e);//Calling handleSubmit method
}

onsubmitUsername(formElements.usernameInput.value);
    e.preventDefault();
    sendForm(this.state.form);



  const handleChange=(e)=>{//HandleChange Funct Declare
    setForm({
      ...this.state.form,
      [e.target.name]:e.target.value
    });
  }
  return (
    <input typeOnChange={handleChange} onFocus={handleFocus}>
        <section className="relative flex-row flex-col max-container">
            <div className="flex-1 min-w -[50%] flex-col">
            <h3 className="head-text">Keep In Touch</h3>
            <form className="w-full flex flex-col gap-8 mt-15" onsubmit={handleSubmit}>
            <label className="text-black 500 font-semibold">
              Contact Number
            </label>
            <input></input>
            
            </form>
            <button
              type="submit"
              className='btn'
              onFocus={handleFocus}
              disabled={isLoading}
            >
              {isLoading ? 'Sending Data':'Send Acceptance'}
            </button>
            </div>
        </section>
        </input>
  )
}

export default Contact