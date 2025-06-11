import { Kbd, Tooltip } from "flowbite-react";
import { FaCode, FaInfoCircle } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import FlagToggle from "../FlagChange";
import ThemeToggle from "../Mode";

export default function NavegationBar() {
  return (
    <>
      <nav className="h-12 flex justify-between max-sm:mx-2 max-sm:px-2.5 mx-5 px-5 items-center rounded-b-xl bg-gray-900/50 shadow-lg ring-1 ring-black/5">
        <div
          id="navContent"
          className="flex flex-row w-full items-center justify-between"
        >
          <div
            className="text-white justify-center max-sm:text-xs flex gap-5 flex-row"
            id="navegationItems"
          >
            <div className="underline-effect flex items-center gap-2">
              <FaInfoCircle className="text-md" />
              <a href="#">
                About
              </a>
            </div>
            <div className="underline-effect flex items-center gap-2">
              <FaCode className="text-md" />
              <a href="#">Project</a>
            </div>
            <div className="underline-effect flex items-center gap-2">
              <IoMdContact className="text-md" />
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="flex items-center flex-row" id="optionNav">
            <ThemeToggle />
            <Tooltip content="Translate" placement="bottom">
              <FlagToggle />
            </Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
}
