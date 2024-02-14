import Profile from "./profile";
import profilePic from "../images/profileUser.jpeg";


export default function ProfileContent() {
  return (
    <>
      <div id="mainContaier" className="flex flex-col h-full w-full pt-36">
        <Profile
          imgSrc={profilePic}
          imgAlt={"Foto de Perfil do Usuário"}
          cardTitle={"Ryan Gomes"}
          subtitle1={"Full-Stack Developer | REACT.JS | JS | TAILWINDCSS | MYSQL | PHP "}
          subtitle2={"Miguel Pereira, Rio de Janeiro, Brasil"}
          bio={"Já trabalho com hardware e agora estou entrando na área de software/desenvolvimento. Estudante e desenvolvedor Web Full-Stack. Devido isso resolvi abraçar a stack JS pois atua no Frontend / Backend."}/>
      </div>
    </>
  );
}
