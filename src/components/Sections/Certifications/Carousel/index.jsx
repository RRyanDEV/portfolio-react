import CertificationsCard from "..";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../ui/carousel";
import certificationsData from "@/data/cert-data.json";

export default function CarouselCertifications() {
  const allCertifications = Object.keys(certificationsData).flatMap(
    (category) =>
      certificationsData[category].map((certitification) => ({ ...certitification, category }))
  );
  return (
    <>
      <div
        id="section_cert"
        className="flex font-semibold pt-10 text-white text-3xl justify-center w-full items-center"
      >
        <h3>Certifications</h3>
      </div>
      <div id="parent" className="flex flex-col items-center py-20 ">
        <Carousel orientation="vertical">
          <CarouselContent className="max-sm:h-[405px] -mt-1 h-[220px]">
            {allCertifications.map((certitification) => (
              <CarouselItem key={certitification.id} className="pt-1 md:basis-1/2">
                <div className="p-1">
                  <CertificationsCard
                    title={certitification.title}
                    link={certitification.link}
                    company={certitification.company}
                    time={certitification.time}
                    date={certitification.date}
                    skills={certitification.skills}
                    languages={certitification.languages}
                    category={certitification.category}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>  
    </>
  );
}
