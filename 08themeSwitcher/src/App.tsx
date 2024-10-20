import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

  function lightTheme() {
    setThemeMode("light");
  }

  function darkTheme() {
    setThemeMode("dark");
  }

  useEffect(() => {
    const html = document.querySelector("html");
    html?.classList.remove("light", "dark");
    html?.classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
