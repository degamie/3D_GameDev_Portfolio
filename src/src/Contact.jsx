import React, { useRef, useState } from 'react'
import.meta.enter.VITE_APP_EMAILJS_SERVICE_ID;
import.meta.enter.VITE_APP_EMAILJS_TEMPLATE_ID;

class Contact extends HomeInfo{
  public Contact contact=new Contact();
Contact() {
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
      const response=await fetch("api/submit-form"{
        method:"POST",
        body:JSON.stringify(formData),
        headers:{
          content-type:"application/json",
        }
      })
          const output=await response.json();
       catch(error){
        console.log("Excpetional Error Occurs");
       }
     
}
}
const onsubmitUsername(UserName:String){//  Func declare
  onsubmitUsername(formElements.usernameInput.value);
  const formsubmit=handleSubmit(e);//Calling handleSubmit method

//Password Submit Button

    e.preventDefault();
    sendForm(this.state.form);
  }
//Handling The Password Form's btn
const onsubmitPassword(var Password){//  Func declare
  onsubmitPassword(PasswordInput.value);
  const formsubmit=handleSubmit(e);//Calling handleSubmit method
    e.preventDefault();
    sendForm(this.state.form);
    handleChange(e);//Handling the Password Change
  const length =Password.length();//Length Val Declare
    try{//Trying The Exception
      if(Password===null)return null;//base Cond
      while(length!==null){//Iterarting through password's Length
        length+=new Password;//Updating the Password
        else if(length>0){length++; }//Password's Val Incr
       }else return password;//Printing Password
    }
    throw(Exception E){//Throwing an Excption
      E.log("Password Not Found");//Printng aExftion
    }
  }


  const handleChange=(e)=>{//HandleChange Funct Declare
    handleSubmit(e);
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

};
export default Contact