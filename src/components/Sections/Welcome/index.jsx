import { FaArrowAltCircleDown } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Welcome() {
  return (
    <>
      <div id="top" className="flex flex-col items-center max-sm:w-full w-3/4 text-center justify-center h-3/4 max-sm:gap-3 gap-7 text-white">
        <div className="text-6xl max-sm:text-2xl" id="title">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Welcome to My Portfolio",
                  "Bem vindo ao meu portfólio",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div
          id="arrow"
          className="flex rounded-full animate-bounce max-sm:text-2xl text-3xl justify-center">
          <a href="#About">
            <FaArrowAltCircleDown />
          </a>
        </div>
      </div>
    </>
  );
}
