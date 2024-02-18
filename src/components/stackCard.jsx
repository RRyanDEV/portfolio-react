export default function StackCard({ key, src, stack, ...props }) {
  return (
    <>
      <div key={key}>
        <a href={src}
          className="text-white text-2xl max-sm:text-3xl flex justify-center" target="_blank">
          <button className="flex z-10 hover:text-green-500 justify-center flex-col m-2 p-2 rounded-lg">
            {stack}
          </button>
        </a>
      </div>
    </>
  );
}
