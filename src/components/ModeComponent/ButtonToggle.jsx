import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

export default function ButtonToggle() {
  let [darkMode, setDarkMode] = useState("false");
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
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
        className="z-10 absolute max-sm:right-3 right-10 top-5 dark:text-white text-black text-xl px-5 py-3 rounded"
      >
        {darkMode ? <IoSunny /> : <FaMoon />}
      </button>
    </>
  );
}
