import ForkIcon from "../Icons/ForkIcon";
import GithubIcon from "../Icons/GithubIcon";
import LinkIcon from "../Icons/LinkIcon";
import StarIcon from "../Icons/StarIcon";
import WatchIcon from "../Icons/WatchIcon";

const RepoCard = ({ repo }) => {
  const date = new Date(repo.repoDate).toLocaleDateString("pt-br");
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 flex flex-col my-5 z-10 justify-between max-sm:p-3 rounded-lg h-48 ">
      {/* Estilo dos Cards */}
      <div className="flex m-0 p-0 text-black flex-col">
        <div className="flex p-2 border-gray-900 rounded-t-lg bg-green-500 font-medium w-full">
          <h2 className="">{repo.name}</h2>
        </div>
        <div className="flex flex-col bg-white justify-between text-left h-36 px-2">
          <div className="pt-2 font-serif text-gray-900">
            <p>{repo.description}</p>
          </div>
          <p className="font-medium text-red-600">Último commit em {date}</p>
        </div>
      </div>
      <div>
        <div className="flex bg-green-500 rounded-b-lg items-center justify-between">
          <div className="flex items-center text-white ml-2 m-1 space-x-3">
            <WatchIcon className="mr-1" /> {repo.watchers}{" "}
            {/* Icone de vistos c/ quantidade */}
            <ForkIcon className="mr-1" /> {repo.forks}{" "}
            {/* Icone de Fork c/ quantidade */}
            <StarIcon className="mr-1" /> {repo.stargazers_count}{" "}
            {/* Icone de Estrela c/ quantidade */}
          </div>
          <div className="flex mr-2 items-center space-x-3">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <GithubIcon height={20} width={20} className="hover:pointer" />
            </a>
            {repo.homepage && (
              <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <LinkIcon height={20} width={20} className="hover:pointer" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
