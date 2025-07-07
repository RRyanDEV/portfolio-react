import { Card } from "flowbite-react";
import Typewriter from "typewriter-effect";
import userData from "@/data/user-data.json"; // Acesse o (.json), para colocar suas informações

export default function About() {
  return (
    <>
      <div
        id="section_about"
        className="flex max-sm:flex-col-reverse py-10 h-full items-center justify-center">
        <Card className="hidden-style max-sm:w-full max-sm:h-3/4 w-1/2">
          {userData.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <h5 className="text-2xl font-bold tracking-tight text-white">
                {item.name}
              </h5>
              <div className="text-md font-semibold text-white">
                <Typewriter
                  options={{
                    strings: ["Web FullStack Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="font-normal max-sm:text-sm font-mono text-gray-400">
                {item.bio}
                {/* 1317 caractecres */}
              </p>
            </div>
          ))}
        </Card>
        {/* <div className="bg-[url('../assets/ProfileImg.jpg')] h-[500px] w-[350px] max-sm:w-[250px] max-sm:h-[320px] max-sm:bg-center bg-cover bg-no-repeat"></div> */}
      </div>
    </>
  );
}
