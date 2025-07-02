import { Card } from "flowbite-react";

export default function SlideOne({ Title, Subtitle, ...props }) {
  return (
    <>
      <div
        id="section_about"
        className="flex max-sm:flex-col-reverse items-center justify-center">
        <Card className="hidden-style max-sm:w-full max-sm:h-3/4 w-1/2">
          <div id="text" className="flex flex-col gap-2">
            <h5 className="text-2xl font-bold tracking-tight text-white">
              {Title}
            </h5>
            <p className="font-normal max-sm:text-sm font-mono text-gray-400">
              {Subtitle}
            </p>
          </div>
        </Card>
         {/* Aqui entra minha foto de apresentação */}
      </div>
    </>
  );
}
