import Nav from "./components/Nav";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { Outlet, useNavigation } from "react-router-dom";

function AppLayout() {
  const navigation = useNavigation;
  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Nav />
      {isLoading && <Loader />}

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
