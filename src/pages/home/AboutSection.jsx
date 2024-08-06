const AboutSection = () => {
  return (
    <section className="mt-10 text-pink-300">
      <div className="w-fit mx-auto">
        <h1 className="text-4xl text-center mx-3">About Myself</h1>
        <div className="w-full h-1 bg-orange-600 mt-1 rounded-full"></div>
      </div>

      {/* tow div  one side my image and other side text about me and my education qualification */}
      <div className="grid grid-cols-2 justify-center mt-8">
        {/* about image */}
        <div className="mt-20 w-72 h-72 overflow-hidden rounded-3xl mx-auto">
          <img
            src="https://i.pinimg.com/originals/34/bd/b1/34bdb174b8f21b2908cbcf570c099c59.jpg"
            alt="my image"
            className="w-72 rounded-3xl mx-auto "
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
                  className="hover:underline cursor-pointer"
                >
                  {" "}
                  Govt. Edward College, Pabna, Bangladesh
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
                  className="hover:underline cursor-pointer"
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
              <p>Python - Bigener</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
