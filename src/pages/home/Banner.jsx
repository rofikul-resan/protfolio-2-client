import { motion } from "framer-motion";

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
          <div className="grid grid-cols-2 w-11/12 mx-auto mt-14 gap-4 ">
            <motion.div
              initial={{ y: 1000, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 150,
                duration: 0.4,
              }}
              className="flex flex-col justify-center items-start py-10 mt-14"
            >
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-pink-600">
                "Hello World"
              </h1>
              <h2 className="text-2xl font-semibold text-white mt-5">
                I'm{" "}
                <span className="text-4xl text-orange-300">
                  Rofikul Islam Resan
                </span>
                ,
              </h2>
              <p className="text-white text-xl">a software developer</p>
              <p className=" text-white mt-10 font-roboto">
                I am a Dedicated{" "}
                <span className="text-orange-300 font-semibold text-xl">
                  Web Application developer
                </span>{" "}
                with a passion for hard work and a genuine love for what I do.
                Proficient in JavaScript and experience in REACT with a
                understanding of backend concepts. Seeking a challenging role to
                contribute and grow with a company.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto"
              animate={{
                x: 0,
                opacity: 1,
              }}
              whileHover={{ scale: 1.04 }}
              initial={{
                x: 1000,
                opacity: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.3,
                type: "spring",
                stiffness: 150,
              }}
            >
              <img
                src="/resan.png"
                alt="developer image"
                className="mx-auto w-[450px]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
