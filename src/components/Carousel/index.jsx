import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

export default function CarouselComponent() {
  return (
    <>
      <div id="carousel_Informations" className="flex items-center h-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <SlideOne
                // ! Edite aqui, caso queira mudar suas informações
                Title={"Ryan Gomes"}
                Subtitle={
                  "Este sou eu, Ryan Gomes. Um Desenvolvedor Web Full-Stack em ascensão e um Entusiasta de Programação. Aquele que é obcecado pela ideia de melhorar e quer uma plataforma para crescer. Atuo atualmente como Técnico em Montagem e Manutenção de Computadores de forma autônoma. Me formei como Técnico em Informática para Internet. Entrei para área de desenvolvimento com foco em Front-End. Possuo conhecimento em JavaScript, ReactJS, NextJS e TailwindCSS. Estou em busca crescer no campo do Desenvolvimento Web."
                }
              />
            </CarouselItem>
            <CarouselItem>
              <SlideTwo />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
