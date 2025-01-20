import { Button } from "@nextui-org/react";
import { motion } from "framer-motion";
import { LuClipboardList } from "react-icons/lu";

const Banner = () => {
  return (
    <section>
      <div className="relative">
        <img
          src="/banner-bg.jpg"
          alt="background code window image  "
          className="w-full h-screen "
        />
        {/* add a black color overlay */}
        <div className="absolute inset-0 bg-black/70 z-10 h-full">
          {/* separated in tow div for one side text and other side image */}
          <div className=" w-9/12 mx-auto mt-14  max-w-screen-2xl  ">
            <motion.div
              initial={{ y: -1000, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
                duration: 0.4,
              }}
              className="flex flex-col justify-center items-start py-10 mt-14"
            >
              <h1 className="text-5xl font-bold gradient-text italic">
                "Hello World"
              </h1>
              <h2 className="text-4xl font-semibold text-white mt-5">
                I'm{" "}
                <span className="text-5xl text-primary font-black">
                  Rofikul Islam Resan
                </span>
              </h2>
              <p className="text-white  text-xl">
                a{" "}
                <span className="uppercase font-semibold text-3xl text-subHeading ">
                  Web developer
                </span>
              </p>
              <p className=" text-white mt-10 font-roboto w-10/12 text-xl">
                My passion for hard work and love for what I do make me a
                dedicated <strong>Web Application developer</strong>. I have
                experience in <strong>JavaScript, React JS, Next JS</strong> and
                an understanding of <strong>backend concepts</strong> involving{" "}
                <strong>Node JS, and Express JS.</strong> In an ideal world, I
                would like to be a part of an organization that is challenging,
                and growing, and where I can contribute significantly.
              </p>
              <Button
                variant="shadow"
                color="success"
                className="mt-8"
                endContent={<LuClipboardList />}
              >
                Get resume
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
