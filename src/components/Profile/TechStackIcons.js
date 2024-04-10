// Linguagens de Programação
import { IoLogoJavascript } from "react-icons/io5";
import { FaPhp } from "react-icons/fa";

// Linguagens de Marcação / Estilo
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { FaMarkdown } from "react-icons/fa";

// Framkeworks e Bibliotecas
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { TbBrandNextjs } from "react-icons/tb";

// Virtualização e Deploy
import { FaDocker } from "react-icons/fa";

// Sistemas Operacionais
import { FaWindows } from "react-icons/fa";
import { SiMacos } from "react-icons/si";

// Banco de Dados
import { SiMysql } from "react-icons/si";

// Hospedagem em Nuvem
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { BiLogoNetlify } from "react-icons/bi";

// Terminal
import { FaNpm } from "react-icons/fa";
import { FaYarn } from "react-icons/fa";
import { SiGnubash } from "react-icons/si";

// Softwares e Ferramentas
import { FaGitAlt } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import SvgIcon from "../ImageComponents/SvgIcon";
import ObsIcon from "../ImageComponents/ObsIcon";

export const techStackIcons = [
  {
    stack: <FaHtml5 />,
    nome: "HTML5",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
  },
  {
    stack: <IoLogoCss3 />,
    nome: "CSS3",
    url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    stack: <FaSass />,
    nome: "Sass",
    url: "https://sass-lang.com",
  },
  {
    stack: <FaMarkdown />,
    nome: "Markdown",
    url: "https://www.markdownguide.org/basic-syntax/",
  },
  {
    stack: <SiTailwindcss />,
    nome: "TailwindCSS",
    url: "https://tailwindcss.com",
  },
  {
    stack: <FaReact />,
    nome: "ReactJS",
    url: "https://react.dev",
  },
  {
    stack: <TbBrandNextjs />,
    nome: "NextJS",
    url: "https://nextjs.org",
  },
  {
    stack: <IoLogoJavascript />,
    nome: "JavaScipt",
    url: "https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript",
  },
  {
    stack: <FaPhp />,
    nome: "PHP",
    url: "https://www.php.net",
  },
  {
    stack: <SiMysql />,
    nome: "MySQL",
    url: "https://www.mysql.com",
  },
  {
    stack: <FaNode />,
    nome: "NodeJS",
    url: "https://nodejs.org/en",
  },
  {
    stack: <FaDocker />,
    nome: "Docker",
    url: "https://www.docker.com",
  },
  {
    stack: <FaWindows />,
    nome: "Windows",
    url: "https://www.microsoft.com/pt-br/software-download/windows11",
  },
  {
    stack: <SiMacos />,
    nome: "MacOS",
    url: "https://www.apple.com/br/macos/sonoma/",
  },
  {
    stack: <FaGithubSquare />,
    nome: "GitHub Pages",
    url: "https://pages.github.com",
  },
  {
    stack: <IoLogoVercel />,
    nome: "Vercel",
    url: "https://vercel.com",
  },
  {
    stack: <BiLogoNetlify />,
    nome: "Netlify",
    url: "https://www.netlify.com",
  },
  {
    stack: <FaNpm />,
    nome: "NPM",
    url: "https://www.npmjs.com",
  },
  {
    stack: <FaYarn />,
    nome: "Yarn",
    url: "https://www.yarnpkg.com",
  },
  {
    stack: <SiGnubash />,
    nome: "Bash",
    url: "https://git-scm.com/download/win",
  },
  {
    stack: <FaGitAlt />,
    nome: "Git",
    url: "https://git-scm.com/download/win",
  },
  {
    stack: <SiVisualstudiocode />,
    nome: "Visual Studio Code",
    url: "https://code.visualstudio.com",
  },
  {
    stack: <SiAdobephotoshop />,
    nome: "Adobe Photoshop",
    url: "https://www.adobe.com/br/products/photoshop.html",
  },
  {
    stack: (
      <SvgIcon className="fill-white hover:fill-green-500">
        <ObsIcon />
      </SvgIcon>
    ),
    nome: "OBS Studio",
    url: "https://obsproject.com/pt-br",
  },
];
