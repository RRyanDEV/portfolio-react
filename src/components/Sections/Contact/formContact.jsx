import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "flowbite-react";

export default function FormContact() {
  return (
    <>
      <div
        id="form-body"
        className="bg-gray-900/70 max-sm:w-full p-4 shadow-[0px_15px_15px_-5px_rgba(0,_0,_0,_0.5)] rounded-2xl border-none"
      >
        <form action="https://formspree.io/f/xeokyakk" method="post">
          <div className="grid w-full items-center gap-3">
            <Label className="text-white" htmlFor="name">Name</Label>
            <Input className="max-sm:w-auto w-sm text-white" required placeholder="Enter your Name" name="name" type="name" id="name"/>
            <Label className="text-white" htmlFor="email">Email</Label>
            <Input className="max-sm:w-auto w-sm text-white" required placeholder="Enter your Email" name="email" type="email" id="email"/>
            <div className="grid w-full gap-3">
            <Label className="text-white" htmlFor="message">Your message</Label>
            <Textarea className="h-30 text-white" required placeholder="Type your message here." name="message" id="message" />
            </div>
          <Button className="hover:bg-white/85 bg-white text-black" type="submit">Send Message</Button>
          </div>
        </form>
      </div>
    </>
  );
}
