import React from "react"

function Dashboard(){
    return(
        <React.Fragment>hii</React.Fragment>
    )
}



import React,{useState} from "react";


function App() {
  const [state, setState] = React.useState({

       names:"",
       email:"",
       profession:""

  })
  
  function handleSubmit(e){
    const value=e.target.value;
    setState({
      ...state,
      [e.target.name]:value
    });
  }
  function submit(e){
    e.preventDefault()
    console.log({state});
  }
    
  return(
    <div>
      <form>
        <input type="text" placeholder="name" name="names" value={state.names} onChange={handleSubmit}/>
        <input type="email" placeholder="email" name="email"value={state.email} onChange={handleSubmit}/>
        <input type="text" placeholder="profession" name="profession" value={state.profession} onChange={handleSubmit}/>

        <button onClick={submit}>submit</button>
        
      </form>

    </div>
  );
}

