export default function ButtonsContent() {
  return (
    <>
      <div id="buttons" className="">
        <div
          id="gridBtn"
          class="grid grid-cols-2 gap-8 max-sm:grid-cols-1 max-sm:mt-3 max-sm:mb-10"
        >
          <a target="_blank" href="">
            <button className="w-60 hover:text-white bg-green-500 text-black  hover:bg-green-500/50 font-medium rounded-lg text-sm p-3 text-center justify-center items-center">
              Download Currículo
            </button>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/rryandev/">
            <button
              type="button"
              class="w-60 text-white bg-sky-800 hover:bg-sky-800/50 font-medium rounded-lg text-sm p-3 text-center justify-center items-center"
            >
              LinkedIn
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
