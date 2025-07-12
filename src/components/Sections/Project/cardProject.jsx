import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import * as motion from "motion/react-client";

export default function CardProjectComponent({
  name,
  description,
  buttonDeploy,
  buttonGit,
  linkDeploy,
  linkGit,
}) {
  return (
    <>
      <motion.div className="max-sm:h-3/4 max-w-sm" whileHover={{ scale: 1.1 }}>
        <Card
          className="flex max-w-sm min-lg:w-[270px] min-lg:h-[370px] bg-gray-900/70 p-4 shadow-[0px_15px_15px_-5px_rgba(0,_0,_0,_0.5)] rounded-2xl border-none"
          imgAlt="Imagem do Projeto"
        >
          <div id="info-proj" className="flex flex-col gap-5 h-[300px]">
            <h5 className="text-2xl font-bold tracking-tight text-white ">
              {name}
            </h5>
            <p className="font-normal text-gray-400">{description}</p>
          </div>
          <div id="buttonsGroup" className="flex flex-row gap-5">
            <a href={linkGit} target="_blank">
              <Button
                className="hover:bg-[#DFB5FF] text-black hover:animate-pulse bg-[#DFB5FF] hover:cursor-pointer"
                pill
              >
                {buttonGit}
              </Button>
            </a>
            <a href={linkDeploy} target="_blank">
              <Button
                className="hover:bg-[#DFB5FF] text-black hover:animate-pulse bg-[#DFB5FF] hover:cursor-pointer"
                pill
              >
                {buttonDeploy}
              </Button>
            </a>
          </div>
        </Card>
      </motion.div>
    </>
  );
}
