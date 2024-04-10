import profilePic from "../../images/profileUser.jpeg";
import ProfileComponent from "./ProfileComponent";

export default function ProfileContent() {
  return (
    <>
      <div id="mainContaier" className="flex flex-col pt-36">
        <ProfileComponent
          imgSrc={profilePic}
          imgAlt={"Foto de Perfil do Usuário"}
          cardTitle={"Ryan Gomes"}
          subtitle1={
            "Web Full-Stack Developer | REACT.JS | JS | TAILWINDCSS | MYSQL | PHP "
          }
          subtitle2={"Miguel Pereira, Rio de Janeiro, Brasil"}
          bio={
            "Já trabalho com hardware e agora estou entrando na área de software/desenvolvimento. Estudante e desenvolvedor Web Full-Stack. Devido isso resolvi abraçar a stack JS pois atua no Frontend / Backend."
          }
        />
      </div>
    </>
  );
}
