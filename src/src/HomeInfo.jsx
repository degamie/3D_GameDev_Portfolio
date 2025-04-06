import React, { useLayoutEffect, useState } from 'react'
class HomeInfo extends Home{
  function HomeInfo()  {//Home Info Funct 
  const [name,SetName]=useState(" ");//name val declare
  const [age,Setage]=useState(" ");//age val declare
  const [gender,Setgender]=useState(" ");//gender val declare
  const [Proffession,SetProffession]=useState(" ");//Proffession val declare
  HomeInfo(name,age,gender,Proffession){//HomeInfo Parameterized Constructor
    this.name=Name;//Binding Name Var
    this.age=Age;//Binding Age Var
    this.gender=gender;//Binding gender Var
    this.Proffession=Proffession;//Binding Proffession Var
  }
  const express=require('express');
  const cors=require('cors');
  const app=express();
  app.use(cors());
  app.use('/login',(req,res{
    res.send({
      token:'portfolio99668';
    });
  }));

  const Authentication=()=>{ //Authentication Func declare
    const [user,setUser]={null};//initilizing User and its set Method
    const [token,setToken]=useState(localStorage.getItem("site")|| "");//token Declare
    const [navigate]=usenavigate();//User Navigation declare
    const [loginAction,setloginAction]=async(data)=>{//Syncing Login's data
      //Method To Be Implemented
    }
    const LoginAuthentication=()=>{//LoginAuthentication func declare
      Authentication();//Calling Authentication func decalre
      if(user===null)return null;//base cOnd
      else if(token>=)token++;//Incr token
      return token;//printing token
    }

  }
  const val=0;
  useLayoutEffect(()={
   console.log("Home Info Val",val); 
    // ([val]);
  });
  setTimeout(()=>{
    setVal("GameDev Portfolio");
  });
  const renderCnt={
    1:(
      <h1>1</h1>
    ),
    2:(
      <h1>2</h1>
    ),
    3:(
      <h1>3</h1>
    ),
    4:(
      <h1>4</h1>
    )

  }
}
  return (
    <div>GameDev HomeInfo</div>
  )
    
}


export default HomeInfo