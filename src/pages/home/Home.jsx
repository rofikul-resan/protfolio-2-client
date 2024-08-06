import AboutSection from "./AboutSection";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto max-w-[1400px]">
        <AboutSection />
      </div>
    </div>
  );
};

export default Home;
