import Image from "next/image";

export default function CardProfile({
  imgSrc,
  imgAlt,
  cardTitle,
  subtitle1,
  subtitle2,
  bio,
  ...props
}) {
  return (
    <>
      <div
        id="containerUser"
        className="flex bg-gray-900 flex-col items-center"
      >
        <Image
          className="w-40 h-40 absolute top-16 rounded-full border-4"
          src={imgSrc}
          alt={imgAlt}
        ></Image>
        <div id="texts" className="flex items-center mb-6 pt-20 flex-col">
          <div id="title" className="flex text-3xl m-6">
            <h1 className="text-white">{cardTitle}</h1>
          </div>
          <div
            id="subtitles"
            className="flex flex-col items-center text-center space-y-2 text-gray-400"
          >
            <p>{subtitle1}</p>
            <p>{subtitle2}</p>
            <p>{bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}
