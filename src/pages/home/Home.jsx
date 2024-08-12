import AboutSection from "./AboutSection";
import Banner from "./Banner";
import ProjectSection from "./ProjectSection";
import SkillSection from "./SkillSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto max-w-[1400px] space-y-10">
        <AboutSection />
        <SkillSection />
        <ProjectSection />
      </div>
    </div>
  );
};

export default Home;
