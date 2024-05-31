export default function StackCard({nome, src, children, ...props }) {
  return (
    <>
      <div>
        <a
          href={src}
          className="text-white text-2xl max-sm:text-3xl flex flex-col items-center justify-center"
          target="_blank"
        >
          <button className="flex z-10 hover:animate-pulse hover:text-green-500 justify-center flex-col m-2 mb-0 p-2 rounded-lg">
            {children}
          </button>
          <p className="text-sm mb-2">{nome}</p>
        </a>
      </div>
    </>
  );
}
