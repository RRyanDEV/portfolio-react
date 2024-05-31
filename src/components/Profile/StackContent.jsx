import { techStackIcons } from "./TechStackIcons";
import StackCard from "../StackCardComponent";

export default function StacksContent() {
  return (
    <>
      <div className="text-white font-customFont flex flex-col items-center max-sm:m-0 mt-14">
        <h1 className="text-2xl mb-3">Conhecimentos</h1>
        <div
          id="Stack"
          className="shadow-[inset_0px_0px_3.0px_0px_#1A202C] grid grid-cols-8 grid-rows-3 gap-6 max-sm:grid-cols-3 max-sm:p-2 max-sm:items-center  w-4/5 max-sm:mt-3 max-sm:mb-10 mb-5 text-white-500 text-3xl"
        >
          {Array.from(techStackIcons).map(({ stack, nome, url }, i) => (
            <StackCard key={i} src={url} nome={nome}>
              {stack}
            </StackCard>
          ))}
        </div>
      </div>
    </>
  );
}
