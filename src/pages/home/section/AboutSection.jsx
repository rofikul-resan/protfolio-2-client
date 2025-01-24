import { BsArrowRight } from "react-icons/bs";
import SectionHeader from "../../../components/SectionHeader";
import Services from "../../../components/Services";
import SkillSection from "./SkillSection";

const AboutSection = () => {
  return (
    <section className="mt-10 px-10 ">
      <SectionHeader
        title={"Introduction"}
        headline={"About Me"}
        detail={
          "I'm a skilled software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"
        }
      />

      {/* tow div  one side my image and other side text about me and my education qualification */}
      <div className="grid grid-cols-2 justify-center mt-8 text-white">
        {/* about image */}
        <div
          className="
          h-full  rounded-xl mx-auto about-img overflow-hidden"
        >
          <img
            src="https://i.pinimg.com/1200x/3a/f8/e8/3af8e8bde9ec947056991a6c3b0c5c41.jpg"
            alt="my image"
            className="w-80  rounded-xl mx-auto "
          />
        </div>
        {/* about text */}
        <div className="space-y-3">
          <div>
            <h1 className="text-4xl">Rofikul Islam Resan</h1>
            <p>Full Stack Web Developer</p>
          </div>

          <div>
            <h1 className="text-2xl underline mb-2">Education Qualification</h1>
            <div className="ml-3">
              <p>Bachelor of Business Administration, 2022-Present</p>
              <p className="font-semibold italic">
                {" "}
                <a
                  href="http://www.nubd.info/college/college.php?code=2101"
                  className="hover:underline cursor-pointer text-success"
                >
                  {" "}
                  Govt. Edward College, Pabna, Bangladesh{" "}
                  <span>
                    <BsArrowRight className="inline" />
                  </span>
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl underline mb-2">Course</h1>
            <div className="ml-3">
              <p>Complete Web Development</p>
              <p className="font-semibold italic">
                {" "}
                <a
                  href="https://web.programming-hero.com/course-details"
                  className="hover:underline cursor-pointer text-success"
                >
                  {" "}
                  Programming Hero
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl underline mb-2">Programming Langues</h1>
            <div className="ml-3">
              <p>JavaScript - Intermitted</p>
              <p>TypeScript - Bigener</p>
              <p>Python - Bigener</p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-20 mt-20">
        <div>
          <h1 className="text-center text-4xl font-semibold text-success my-10">
            Services
          </h1>
          <Services />
        </div>
        <div>
          <h1 className="text-center text-4xl font-semibold text-success my-10">
            Skills
          </h1>
          <SkillSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
