const AboutSection = () => {
  return (
    <section className="mt-10 text-pink-300">
      <div className="w-fit mx-auto">
        <h1 className="text-4xl text-center mx-3">About Me</h1>
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
        <div>
          <h1 className="text-3xl">Rofikul Islam Resan</h1>
          <p>Full Stack Web Developer</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
