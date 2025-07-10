import {
  FaGithub,
  FaLinkedin,
  FaQuestionCircle,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import * as motion from "motion/react-client";

const categoryIcons = {
  git: FaGithub,
  linked: FaLinkedin,
  tel: FaTelegram,
  location: FaMapLocation,
  default: FaQuestionCircle,
};

export default function CardContact({ title, subtitle, link, categories }) {
  const IconComponent = categoryIcons[categories] || categoryIcons.default;
  return (
    <>
      <motion.div
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div
          id="contact-item-body"
          className="bg-gray-900/70 p-4 shadow-[0px_15px_15px_-5px_rgba(0,_0,_0,_0.5)] rounded-2xl border-none"
        >
          <div className="flex items-center gap-3">
            <IconComponent className="h-8 w-8 text-[#DFB5FF]" />
            <div id="desc" className="flex flex-col">
              <h1 className="text-white font-semibold">{title}</h1>
              <a
                className="font-medium text-gray-400 hover:animate-pulse"
                href={link}
              >
                {subtitle}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
