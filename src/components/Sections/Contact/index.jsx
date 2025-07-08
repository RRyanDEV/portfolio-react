import CardContact from "./cardContact";
import FormContact from "./formContact";

export default function Contact() {
  return (
    <>
      <div className="align-marg-padd pb-10">
        <div
          id="section_contact"
          className="flex font-semibold pt-10 text-white text-3xl justify-center w-full items-center"
        >
          <h3>Contact Me</h3>
        </div>
        <div id="contact-parent" className="flex h-full justify-around items-center flex-row max-sm:flex-col">
          <div
            id="cards-parent"
            className="flex flex-col gap-5 justify-center py-10 px-5">
            <CardContact
              title={"Github"}
              subtitle={"RRyanDEV"}
              link={"https://github.com/RRyanDEV"}
              categories="git"
            />
            <CardContact
              title={"Telegram"}
              subtitle={"@ryaanreeal"}
              link={"https://t.me/ryaanreeal"}
              categories="tel"
            />
            <CardContact
              title={"Linkedin"}
              subtitle={"Ryan Gomes"}
              link={"https://www.linkedin.com/in/rryandev/"}
              categories="linked"
            />
            <CardContact
              title={"Location"}
              subtitle={"Miguel Pereira, RJ"}
              link={
                "https://www.google.com.br/maps/place/Miguel+Pereira,+RJ,+26900-000/@-22.4934992,-43.5943074,12z/data=!3m1!4b1!4m6!3m5!1s0x993e4359b05c31:0x10de71f20e815167!8m2!3d-22.4549559!4d-43.4705587!16s%2Fg%2F11bxfyh7y5?hl=pt-BR&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
              }
              categories="location"
            />
          </div>
        <FormContact />
        </div>
      </div>
    </>
  );
}
