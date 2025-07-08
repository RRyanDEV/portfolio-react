import { Tooltip } from "flowbite-react";
import { FaInfoCircle } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { LuBlocks } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import FlagToggle from "../FlagChange";

export default function NavegationBar() {
  return (
    <>
      <nav className="align-marg-padd h-12 flex justify-between items-center rounded-b-xl bg-gray-900/50 shadow-lg ring-1 ring-black/5">
        <div
          id="navContent"
          className="flex flex-row w-full items-center justify-between"
        >
          <div
            className="text-white justify-center max-sm:text-xs flex max-sm:gap-2 gap-5 flex-row"
            id="navegationItems"
          >
            <div className="underline-effect flex items-center gap-2">
              <FaInfoCircle className="text-md" />
              <a href="#section_about">About</a>
            </div>
            <div className="underline-effect flex items-center gap-2">
              <PiCertificateFill className="text-md" />
              <a href="#section_cert">Certifications</a>
            </div>
            <div className="underline-effect flex items-center gap-2">
              <LuBlocks className="text-md" />
              <a href="#">Projects</a>
            </div>
            <div className="underline-effect flex items-center gap-2">
              <IoMdContact className="text-md" />
              <a href="#section_contact">Contact</a>
            </div>
          </div>
          <div className="flex items-center flex-row" id="optionNav">
            <Tooltip content="Translate" placement="bottom">
              <FlagToggle />
            </Tooltip>
          </div>
        </div>
      </nav>
    </>
  );
}
