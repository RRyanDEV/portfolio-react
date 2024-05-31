import Image from "next/image";
import ButtonsContent from "../ButtonsComponent";

export default function ProfileComponent({
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
        className="flex flex-col items-center"
      >
        <Image
          className="w-40 h-40 absolute z-10 top-16 rounded-full border-4"
          src={imgSrc}
          alt={imgAlt}
        />
        <div id="texts" className="flex items-center mb-6 pt-20 flex-col">
          <div id="title" className="flex text-3xl m-6">
            <h1 className="font-customFont dark:text-white">{cardTitle}</h1>
          </div>
          <div
            id="subtitles"
            className="flex flex-col items-center text-center space-y-7 dark:text-gray-400"
          >
            <p>{subtitle1}</p>
            <p>{subtitle2}</p>
            <p className="w-3/4">{bio}</p>
          </div>
        </div>
        <ButtonsContent />
      </div>
    </>
  );
}
