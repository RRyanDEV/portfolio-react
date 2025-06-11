import NavegationBar from "@/components/NavegationBar";
import About from "@/components/SectionAbout";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen dark:bg-gray-700" id="parentHome">
        <NavegationBar />
        <div id="welcome" className="align-margin-padd mt-28 mb-10 max-sm:text-6xl text-7xl">
          <h1>Welcome to My Portfolio</h1>
        </div>
        <About />
      </div>
    </>
  );
}
