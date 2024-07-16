import NavigationBar from "../../components/NavigationBar";
import AboutSection from "./AboutSection";
import Banner from "./Banner";

const Home = () => {
  return (
    <main className="pb-10">
      <Banner />
      <NavigationBar />
      <div className="mx-auto max-w-[1400px]">
        <AboutSection />
      </div>
    </main>
  );
};

export default Home;
