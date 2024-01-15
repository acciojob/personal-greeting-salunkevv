
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [val,setVal]=useState("");
  function func(e)
  {
    setVal(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name :</label><br/>
        <input onChange={func}/>
        <p>{val}</p>
    </div>
  )
}

export default App
