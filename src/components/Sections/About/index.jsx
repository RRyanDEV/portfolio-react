import { Card } from "flowbite-react";
import Typewriter from "typewriter-effect";
import userData from "@/data/user-data.json"; // Acesse o (.json), para colocar suas informações

export default function About() {
  return (
    <>
      <div
        id="section_about"
        className="flex max-sm:flex-col-reverse font-sig py-10 h-full items-center justify-center"
      >
        <Card className="hidden-style max-sm:w-full max-sm:h-3/4 w-1/2">
          {userData.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <h5 className="text-3xl font-bold text-justify text-white">
                {item.name}
              </h5>
              <div className="text-md text-white">
                <Typewriter
                  options={{
                    strings: [`${item.developer}`],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <p className="text-justify text-[16.5px] max-sm:text-sm text-gray-400">
                {item.bio}
              </p>
            </div>
          ))}
        </Card>
        <div className="bg-[url('../assets/image/profile-img.png')] opacity-80 bg-gray-900/50 shadow-lg rounded-2xl h-[500px] w-[350px] max-sm:w-[250px] max-sm:h-[320px] max-sm:bg-center bg-cover bg-no-repeat"></div>
      </div>
    </>
  );
}
