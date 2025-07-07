import Technologies from "@/components/Sections/Technologies/technologies";

export default function Skills() {
  return (
    <>
      <div
        id="titleSkills"
        className="flex font-semibold text-white text-3xl justify-center w-full items-center"
      >
        <h3>Skills</h3>
      </div>
      <div
        id="Technologies"
        className="max-sm:flex-col max-sm:gap-10 flex p-10 justify-between align-margin-padd"
      >
        <Technologies
          titleTech={"Frontend"}
          categories="front-end-technologies"
        />
        <Technologies
          titleTech={"Backend"}
          categories="back-end-technologies"
        />
        <Technologies
          titleTech={"Tools and Others"}
          categories="tools-and-others"
        />
      </div>
    </>
  );
}
