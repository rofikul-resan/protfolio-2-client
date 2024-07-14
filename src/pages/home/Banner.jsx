import { Image } from "@nextui-org/react";

const Banner = () => {
  return (
    <section>
      <div className="relative">
        <Image
          src="/banner-bg.jpg"
          width={"700"}
          alt="background code window image  "
          className="w-full h-screen "
        />
        {/* add a black color overlay */}
        <div className="absolute inset-0 bg-black/70 z-10 h-full">
          {/* separated in tow div for one side text and other side image */}
          <div className="grid grid-cols-2 mt-80 ">
            <div className="flex flex-col justify-center items-start p-10">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Hello in MY World
              </h1>
              <p className="text-xl text-white mt-5">
                I&apos m a software developer with a passion for creating
                innovative{" "}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
