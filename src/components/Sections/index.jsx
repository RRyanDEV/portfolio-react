import About from "./About";
import CarouselCertifications from "./Certifications/Carousel";
import Contact from "./Contact";
import Projects from "./Project";
import Skills from "./Technologies";

export default function Sections() {
  return (
    <>
      <div id="informations" className="flex flex-col justify-between">
        <div id="information_item">
          <About />
        </div>
        <div id="information_item">
          <Skills />
        </div>
        <div id="information_item">
          <CarouselCertifications />
        </div>
        <div id="information-item">
          <Projects />
        </div>
        <div id="information_item">
          <Contact />
        </div>
      </div>
    </>
  );
}
