import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const MainLayout = () => {
  return (
    <main className="pb-10">
      <NavigationBar />
      <div>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default MainLayout;
