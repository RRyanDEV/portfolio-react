import NavegationBar from "@/components/NavegationBar";

export default function Home() {
  return (
    <>
      <div className="h-screen" id="parentHome">
        <NavegationBar />
        <h1 className="text-8xl bg-gradient-to-br from-slate-600 to-emerald-500 bg-clip-text text-transparent">Hi, I'm Ryan Gomes</h1>
      </div>
    </>
  );
}
