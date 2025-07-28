import { Badge, Card } from "flowbite-react";
import { FaFlagCheckered } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

export default function CertificationsCard({
  title,
  company,
  link,
  time,
  date,
  skills,
  languages,
}) {
  // Limita as habilidades a um máximo de 4
  const displayedSkills = skills ? skills.slice(0, 4) : [];
  // Limita as linguagens a um máximo de 3
  const displayedLanguages = languages ? languages.slice(0, 3) : [];

  return (
    <>
      <div className="align-marg-padd">
        <Card
          id="card-parent"
          className="max-sm:flex-col rounded-xl flex bg-gray-900/70 shadow-[0px_15px_15px_-5px_rgba(0,_0,_0,_0.5)] border-none"
        >
          <div
            id="parent-information"
            className="max-sm:flex-col flex flex-row w-full"
          >
            <div
              id="card-informations"
              className="max-sm:w-full flex-col w-4/12 "
            >
              <div id="title" className="flex flex-col gap-1">
                <a className="hover:animate-pulse cursor-pointer" href={link}>
                  <h1 className="text-white text-xl font-mono">{title}</h1>
                </a>
                <p className="text-gray-400">{company}</p>
              </div>
              <div
                id="subtitle"
                className="flex text-gray-400 item-center max-sm:mt-3 mt-5 gap-5"
              >
                <div id="time" className="flex items-center gap-1">
                  <MdOutlineTimer />
                  <p>{time}</p>
                </div>
                <div id="date" className="flex items-center gap-1">
                  <FaFlagCheckered />
                  <p>{date}</p>
                </div>
              </div>
            </div>
            <div
              id="tags"
              className="flex max-sm:w-full  gap-7 justify-center items-start flex-col p-5 max-sm:p-0 max-sm:mt-5 w-3/4"
            >
              <div
                id="skillsTags"
                className="max-sm:flex-col flex max-sm:gap-2 gap-5"
              >
                {displayedSkills.map((skill, index) => (
                  <Badge key={index} color="gray" className="font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
              <div
                id="langsTags"
                className="flex max-sm:w-full gap-5 items-center"
              >
                {displayedLanguages.map((lang, index) => (
                  <Badge key={index} color="gray" className="font-medium">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
