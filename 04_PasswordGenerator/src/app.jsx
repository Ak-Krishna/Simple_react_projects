import { useCallback, useEffect, useRef, useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";

export function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [Password,setPassword]=useState("");

  const passwordRef=useRef(null);

  //function for generating password
  const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if(numberAllowed) str+="0123456789";
  if(charAllowed) str+="[{!@#$%&)}]";

  for (let i = 1; i <=length; i++) {
  let char=Math.floor(Math.random()*str.length+1);
  pass+=str.charAt(char);
}
console.log(pass);
setPassword(pass);
  
  },[length,numberAllowed,charAllowed,setPassword])

  //function for copy text from input field
  const copytoClipboard=useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,999);
  window.navigator.clipboard.writeText(Password);
  console.log("text copied")
  },[Password])
  //function for calling function
  useEffect(()=>{
  passwordGenerator();
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <div className="w-full max-w-md mx-auto shadow-md px-4 rounded-lg py-3 my-3 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" className="w-full p-1 px-3 outline-none" readOnly value={Password} ref={passwordRef} onClick={copytoClipboard} />
        <button className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0" onClick={copytoClipboard}>
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input type="range" id="range" className="cursor-pointer" value={length} min={6} max={100}
          onChange={(e)=>setLength(e.target.value)}
          />
          <label htmlFor="range">length {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          id="numberInput"
          defaultChecked={numberAllowed}
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
  );
}
