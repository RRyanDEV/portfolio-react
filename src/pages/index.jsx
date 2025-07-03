import NavegationBar from "@/components/NavegationBar";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Technologies";
import Welcome from "@/components/Sections/Welcome";

export default function Home() {
  return (
    <>
      <div className="flex flex-col bg-gray-700 h-screen">
        <NavegationBar />
        <div className="flex justify-center items-center min-lg:h-full h-3/4">
          <Welcome />
        </div>
      </div>
      <div id="informations" className="flex flex-col justify-between">
        <div id="information_Item" className="h-screen bg-gray-900">
          <About />
        </div>
        <div id="information_Item" className="bg-gray-900">
          <Skills />
        </div>
        <div id="information_Item" className="h-screen bg-blue-800">
          {/* <Certifications /> */}
        </div>
        <div id="information_Item" className="h-screen bg-green-800">
          {/* <Projects /> */}
        </div>
        <div id="information_Item" className="h-screen bg-purple-700">
          {/* <Contact /> */}
        </div>
      </div>
    </>
  );
}
