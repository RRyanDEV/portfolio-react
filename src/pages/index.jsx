import Footer from "@/components/Footer";
import NavegationBar from "@/components/NavegationBar";
import Sections from "@/components/Sections";
import Welcome from "@/components/Sections/Welcome";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavegationBar />
        <div className="flex justify-center items-center min-lg:h-full h-3/4">
          <Welcome />
        </div>
      </div>
      <Sections />
      <Footer />
    </>
  );
}
