import CardProfile from "./CardProfile";
import profilePic from "../images/profileUser.jpeg";

export default function Navbar() {
  return (
    <>
      <div id="mainContaier" className="flex flex-col h-full w-full pt-36">
        <CardProfile
          imgSrc={profilePic}
          imgAlt={"Foto de Perfil do Usuário"}
          cardTitle={"Ryan Gomes"}
          subtitle1={"Web Full-Stack Developer | PHP | MySQL | TailwindCSS "}
          subtitle2={"Miguel Pereira, Rio de Janeiro, Brasil"}
          bio={"...bio..."}
        ></CardProfile>
      </div>
    </>
  );
}
