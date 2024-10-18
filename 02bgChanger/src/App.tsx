import { useState } from "react";
import "./App.css";
import ColorButton from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen bg-black text-white flex justify-center items-end"
        style={{ backgroundColor: color }}
      >
        <div className=" fixed bottom-12 flex justify-center items-center gap-3 bg-white text-black px-4 py-2 rounded-full">
          <ColorButton
            color="black"
            text="Black"
            clickFunc={() => setColor("black")}
          />

          <ColorButton
            color="green"
            text="green"
            clickFunc={() => setColor("green")}
          />

          <ColorButton
            color="blue"
            text="blue"
            clickFunc={() => setColor("blue")}
          />

          <ColorButton
            color="lavender"
            text="lavender"
            clickFunc={() => setColor("lavender")}
            textColor="black"
          />
        </div>
      </div>
    </>
  );
}

export default App;
