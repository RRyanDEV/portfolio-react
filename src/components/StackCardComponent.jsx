export default function StackCard({ nome, src, children, ...props }) {
  return (
    <>
      <div>
        <a
          href={src}
          className="text-white text-2xl max-sm:text-3xl flex flex-col items-center justify-center"
          target="_blank"
        >
          <button className="flex z-10 hover:animate-pulse  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 dark:bg-transparent bg-gray-800/95  hover:text-violet-700 justify-center flex-col m-2 mb-0 p-2 rounded-lg">
            {children}
          </button>
          <p className="text-sm dark:text-white text-black mb-2">{nome}</p>
        </a>
      </div>
    </>
  );
}
