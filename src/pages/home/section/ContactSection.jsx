import SendAnimation from "../../../components/SendAnimation";

const ContactSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 px-10">
      <div className=" p-10  bg-[#100d25] rounded-2xl">
        <div className="mb-10">
          <p className="uppercase text-success">Get in touch</p>
          <h2 className="text-4xl font-bold">Contact.</h2>
        </div>
        <div className=" max-w-[400px] w-full">
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
              <button className="bg-cardBg shadow-lg shadow-[#050816] text-white px-8 py-4 rounded-lg">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* animation side */}
      <div>
        <SendAnimation />
      </div>
    </div>
  );
};

export default ContactSection;
