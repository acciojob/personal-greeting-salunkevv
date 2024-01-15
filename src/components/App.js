
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [flag,setFlag]=useState(false)
  let [val,setVal]=useState("");
  function func(e)
  {
    setFlag(true)
    setVal(e.target.value);
    
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input onChange={func}/>
        {flag &&
        <p>Hello {val}!</p>
}
    </div>
  )
}

export default App
