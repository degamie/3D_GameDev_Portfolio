import React, { useLayoutEffect } from 'react'
class HomeInfo extends Home{
  function HomeInfo()  {//Home Info Funct 
  const [name,SetName]=useState(" ");//name val declare
  const [age,Setage]=useState(" ");//age val declare
  const [gender,Setgender]=useState(" ");//gender val declare
  const [Proffession,SetProffession]=useState(" ");//Proffession val declare
  const val=0;
  useLayoutEffect(()={
   console.Log("Home Info Val",val); 
    ([val]);
  });
  setTimeout(()=>{
    setVal("GameDev Portfolio");
  }3000);
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