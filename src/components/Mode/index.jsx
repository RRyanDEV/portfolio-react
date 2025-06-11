import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
  let [darkMode, setDarkMode] = useState("false");
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => {
          setDarkMode(!darkMode);
        }}
        className="text-white text-xl pr-5 cursor-pointer"
        // TODO Adicionar efeito de FadeIn no botão de troca de tema.
      >
        {darkMode ? <FaMoon /> : <IoSunny />}
      </button>
    </>
  );
}
