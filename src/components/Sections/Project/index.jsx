import CardProjectComponent from "./cardProject";
import ProjectData from "@/data/project-data.json";

export default function Projects() {
  const allProject = Object.keys(ProjectData).flatMap((category) =>
    ProjectData[category].map((project) => ({ ...project, category }))
  );
  return (
    <>
      <div className="pb-10 align-marg-padd">
        <div
          id="section_project"
          className="flex font-semibold py-10 text-white text-3xl justify-center w-full items-center"
        >
          <h3>Projects</h3>
        </div>
        <div
          id="projectSection"
          className="max-sm:flex-col justify-evenly max-sm:gap-10 flex"
        >
          {allProject.map((project) => (
            <CardProjectComponent
              key={project.id}
              name={project.name}
              description={project.description}
              linkGit={project.linkGit}
              buttonGit={project.buttonGit}
              linkDeploy={project.linkDeploy}
              buttonDeploy={project.buttonDeploy}
            />
          ))}
        </div>
      </div>
    </>
  );
}
