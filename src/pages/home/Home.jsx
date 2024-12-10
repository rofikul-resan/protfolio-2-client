import Banner from "./section/Banner";
import ProjectSection from "./section/ProjectSection";
import SkillSection from "./section/SkillSection";
import AboutSection from "./section/AboutSection";
import BlogSection from "./section/BlogSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto max-w-[1400px] space-y-10">
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <BlogSection />
      </div>
    </div>
  );
};

export default Home;
