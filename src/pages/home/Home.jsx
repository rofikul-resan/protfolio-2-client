import Banner from "./section/Banner";
import ProjectSection from "./section/ProjectSection";
import AboutSection from "./section/AboutSection";
import BlogSection from "./section/BlogSection";
import ReviewSection from "./section/ReviewSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto max-w-[1200px] space-y-10">
        <AboutSection />
        <ProjectSection />
        <BlogSection />
        <ReviewSection />
      </div>
    </div>
  );
};

export default Home;
