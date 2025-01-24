import Banner from "./section/Banner";
import ProjectSection from "./section/ProjectSection";
import AboutSection from "./section/AboutSection";
import BlogSection from "./section/BlogSection";
import ReviewSection from "./section/ReviewSection";
import ContactSection from "./section/ContactSection";
import GitRepos from "./section/GitRepos";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto max-w-[1200px] space-y-40">
        <AboutSection />
        <ProjectSection />
        <GitRepos />
        <BlogSection />
        <ReviewSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Home;
