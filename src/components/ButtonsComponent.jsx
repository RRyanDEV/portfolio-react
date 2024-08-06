export default function ButtonsContent() {
  return (
    <>
      <div id="buttons" className="font-customFont z-10">
        <div
          id="gridBtn"
          className="grid grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:mt-3 max-sm:mb-10"
        >
          <a target="_blank" href="Currículo_Ryan.pdf" download="Currículo_Ryan">
            <button className="w-60 hover:text-white bg-violet-700 text-white  hover:bg-violet-700/50 font-medium rounded-lg text-sm p-3 text-center justify-center items-center">
              Download Currículo
            </button>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/rryandev/">
            <button
              type="button"
              className="w-60 text-white bg-green-700 hover:bg-green-700/50 font-medium rounded-lg text-sm p-3 text-center justify-center items-center"
            >
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
