/* eslint-disable react/jsx-no-undef */
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const IncreaseCount= ()=>{
  setCount(prevCount=>prevCount+1);
  setCount(prevCount=>prevCount+1);
  setCount(prevCount=>prevCount+1);
  setCount(prevCount=>prevCount+1);
  console.log("clicked",count);
  }

  //function for decrease counter
  const DecreaseCout=()=>{
    (count>0)?setCount(count-1):0;
    console.log("clicked",count)
  }

  return (
    <div>
      <h1>Chai aur Code </h1>
      <h2>Counter App : {count}</h2>
      <br/>
      <button type="button" onClick={IncreaseCount} style={{margin:'2px'}} >Increase count</button>
      <button onClick={DecreaseCout}>Decrease count</button>
    </div>
  )
}

export default App
