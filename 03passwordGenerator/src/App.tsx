import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 16);
    window.navigator.clipboard.writeText(password.slice(0, 16));
  }, [password]);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    }

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, charAllowed, numAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen bg-black text-white flex justify-center items-start">
        <div className="bg-blue-950 gap-8 mt-10 w-1/3 flex flex-col justify-center items-center px-8 py-5 rounded-2xl">
          <h1 className="text-2xl font-bold">Password Generator</h1>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full flex justify-between items-center bg-white rounded-full"
            action=""
          >
            <input
              className="w-full rounded-full text-xl pl-4 py-2 text-orange-500 focus:outline-none"
              type="text"
              placeholder="password"
              value={password}
              ref={passwordRef}
            />
            <button
              type="submit"
              onClick={copyToClipboard}
              className="px-4 py-2 text-xl text-center bg-orange-500 font-bold rounded-e-full hover:bg-orange-400"
            >
              Copy
            </button>
          </form>

          <div className="w-full flex justify-center items-center gap-10">
            <div className="flex justify-center items-center gap-1">
              <input
                type="range"
                id="length"
                min={8}
                max={20}
                value={length}
                readOnly
                onChange={(e) => {
                  setLength(Number(e.target.value));
                }}
                className=" text-2xl"
              />
              <label className="text-xl" htmlFor="length">
                Length: {length}
              </label>
            </div>

            <div className="flex justify-center items-center gap-1">
              <input
                className="w-4 h-4"
                type="checkbox"
                name="num"
                id="num"
                onChange={() => {
                  setNumAllowed((prev) => !prev);
                }}
              />
              <label className="text-lg" htmlFor="num">
                Number
              </label>
            </div>

            <div className="flex justify-center items-center gap-1">
              <input
                className="w-4 h-4"
                type="checkbox"
                name="char"
                id="char"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label className="text-lg" htmlFor="char">
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
