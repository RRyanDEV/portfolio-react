import { Card } from "flowbite-react";

export default function SlideOne({ Title, Subtitle, ...props }) {
  return (
    <>
      <div
        id="section_about"
        className="flex items-center w-3/4 justify-center">
        <Card className="w-1/2">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Title}
          </h5>
          <p className="font-normal font-mono text-gray-700 dark:text-gray-400">
            {Subtitle}
          </p>
        </Card>
      </div>
    </>
  );
}
