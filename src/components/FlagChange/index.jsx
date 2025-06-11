import { useEffect, useState } from "react";
import Flag from "react-flagkit";


export default function FlagToggle() {
  let [language, setLanguage] = useState("false");
  useEffect(() => {
    if (language) {
      document.documentElement.classList.add("english");
    } else {
      document.documentElement.classList.remove("english");
    }
  }, [language]);

  return (
    <>
      <button
        onClick={() => {
          setLanguage(!language);
        }}
      >
        {language ? (
          <Flag className="cursor-pointer" country="US" size={20} />
        ) : (
          <Flag className="cursor-pointer" country="BR" size={20} />
        )}
      </button>
    </>
  );
}
