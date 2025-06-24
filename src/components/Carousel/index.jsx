import { Carousel } from "flowbite-react";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

export default function CarouselComponent() {
  return (
    <>
      <div id="carousel_Informations" className="flex h-full">
        <Carousel>
          <div id="section_about" className="flex items-center justify-center">
            <SlideOne
              // ! Edite aqui, caso queira mudar suas informações
              Title={"Ryan Gomes"}
              Subtitle={
                "Este sou eu, Ryan Gomes. Um Desenvolvedor Web Full-Stack em ascensão e um Entusiasta de Programação. Aquele que é obcecado pela ideia de melhorar e quer uma plataforma para crescer. Após dois anos como Técnico em Montagem e Manutençãode Computadores, decidi entrar para área de desenvolvimento com foco em Front-End. Possuo conhecimento em JavaScript, ReactJS, NextJS e TailwindCSS. Estou em busca crescer no campo do Desenvolvimento Web."
              }
            />
          </div>
            <SlideTwo />
        </Carousel>
      </div>
      ;
    </>
  );
}
