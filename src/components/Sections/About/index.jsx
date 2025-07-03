import { Card } from "flowbite-react";
import userData from "@/data/user-data.json";
// Acesse o (.json), para colocar suas informações

export default function About() {
  return (
    <>
      <div
        id="section_about"
        className="flex max-sm:flex-col-reverse h-full items-center justify-center"
      >
        <Card className="hidden-style max-sm:w-full max-sm:h-3/4 w-1/2">
          {userData.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <h5 className="text-2xl font-bold tracking-tight text-white">
                {item.name}
              </h5>
              <p className="font-normal max-sm:text-sm font-mono text-gray-400">
                {item.bio}
              </p>
            </div>
          ))}
        </Card>
       <h1>OALSDLSDPFJASDGNAKSDLGNASDKBG</h1>
      </div>
    </>
  );
}
