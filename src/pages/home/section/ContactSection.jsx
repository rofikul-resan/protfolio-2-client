import { Button } from "@nextui-org/react";
import { VscSend } from "react-icons/vsc";

const ContactSection = () => {
  return (
    <div className=" px-10">
      <div className=" p-10  bg-[#100d25] rounded-2xl">
        <div className="mb-10">
          <p className="uppercase text-success">Get in touch</p>
          <h2 className="text-4xl font-bold">Contact.</h2>
        </div>
        <div className="  w-full">
          <form>
            <div className="mb-4 space-y-4 ">
              <label className=" font-semibold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                className="rounded-lg px-4 py-4 w-full  bg-[#151030] placeholder-gray-500 placeholder:capitalize focus:outline-none"
                id="name"
                type="text"
                placeholder="What's your name?"
              />
            </div>
            <div className="mb-4 space-y-4 ">
              <label className=" font-semibold mb-2" htmlFor="email">
                Your Email
              </label>
              <input
                className="rounded-lg px-4 py-4 w-full  bg-[#151030] placeholder-gray-500 placeholder:capitalize focus:outline-none"
                id="name"
                type="email"
                placeholder="What's your Email?"
              />
            </div>
            <div className="mb-4 space-y-4 ">
              <label className=" font-semibold mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                className="rounded-lg px-4 py-4 w-full  bg-[#151030] placeholder-gray-500 placeholder:capitalize focus:outline-none min-h-52"
                id="name"
                type="text"
                placeholder="What's you went to say?"
              ></textarea>
            </div>
            <div>
              <Button
                className="bg-cardBg shadow-lg shadow-[#050816] text-white px-8 py-4 rounded-lg"
                endContent={<VscSend />}
              >
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
