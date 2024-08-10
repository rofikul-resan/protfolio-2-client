import AboutSection from "./AboutSection";
import Banner from "./Banner";
import SkillSection from "./SkillSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto max-w-[1400px]">
        <AboutSection />
        <SkillSection />
      </div>
    </div>
  );
};

export default Home;
