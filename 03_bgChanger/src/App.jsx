import { useState } from "react";
import "./index.css";
import Button from "./Components/Button";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="flex flex-wrap justify-center top-60 right-40 text-white text-xl" >Chai aur Code | BackGround Changer</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white py-3 rounded-xl px-3">
          <Button color="red" setColor={setColor} />
          <Button color="green" setColor={setColor} />
          <Button color="yellow" setColor={setColor} />
          <Button color="purple" setColor={setColor} />
          <Button color="black" setColor={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
