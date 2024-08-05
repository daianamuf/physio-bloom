import { Outlet, useNavigation } from "react-router-dom";
import { lazy } from "react";

import Loader from "./components/Loader";

const Nav = lazy(() => import("./components/Nav"));
const Footer = lazy(() => import("./components/Footer"));

function AppLayout() {
  const navigation = useNavigation;
  const isLoading = navigation.state === "loading";

  return (
    <div className="wrapper">
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
