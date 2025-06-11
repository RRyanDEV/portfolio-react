import Typewriter from "typewriter-effect";

export default function About() {
  return (
    <>
      <div id="parentAbout" className="align-margin-padd">
        <h3 className="text-xl bg-gradient-to-br from-slate-600 to-emerald-500 bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: ["Hi, I'm RRyanDEV", "Web Fullstack Developer"],
              autoStart: true,
              loop: true,
              cursor: "|",
              cursorClassName: "pl-1.5 text-black",
            }}
          />
        </h3>
      </div>
    </>
  );
}
