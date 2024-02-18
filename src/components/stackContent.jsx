// Imports FrontEnd / BackEnd
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import StackCard from "./stackCard";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { FaMarkdown } from "react-icons/fa";

export default function StacksContent({ titleStack, EndTitleStack, ...props }) {
  const techStack = [
    {
      stack: <FaHtml5 />,
      url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      stack: <IoLogoCss3 />,
      url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
    {
      stack: <FaSass />,
      url: "https://sass-lang.com",
    },
    {
      stack: <FaMarkdown />,
      url: "https://www.markdownguide.org/basic-syntax/",
    },
    {
      stack: <SiTailwindcss />,
      url: "https://tailwindcss.com",
    },
    {
      stack: <FaReact />,
      url: "https://react.dev",
    },
    {
      stack: <TbBrandNextjs />,
      url: "https://nextjs.org",
    },
    {
      stack: <IoLogoJavascript />,
      url: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
    },
    {
      stack: <FaPhp />,
      url: "https://www.php.net",
    },
    {
      stack: <SiMysql />,
      url: "https://www.mysql.com",
    },
    {
      stack: <FaNode />,
      url: "https://nodejs.org/en",
    },
    {
      stack: <FaDocker />,
      url: "https://www.docker.com",
    },
  ];

  return (
    <>
      <div className="text-white flex flex-col items-center mt-8">
        <h1 className="font-customFont text-2xl mb-3">Conhecimentos</h1>

        <div
          id="Stack"
          className="shadow-[inset_0px_0px_3.0px_0px_#1A202C] grid grid-cols-12 grid-rows-1 gap-6 max-sm:grid-cols-4 max-sm:mt-3 max-sm:mb-10 mb-5 text-white-500 text-3xl"
        >
          {techStack.map(({ stack, url }, i) => (
            <StackCard key={i} src={url} stack={stack} />
          ))}
        </div>
      </div>
    </>
  );
}
