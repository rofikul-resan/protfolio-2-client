import AboutSection from "./AboutSection";
import Banner from "./Banner";
import BlogSection from "./BlogSection";
import ProjectSection from "./ProjectSection";
import ReviewSection from "./ReviewSection";
import SkillSection from "./SkillSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto max-w-[1400px] space-y-10">
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <BlogSection />
        <ReviewSection />
      </div>
    </div>
  );
};

export default Home;
