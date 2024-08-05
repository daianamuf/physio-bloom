import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { lazy, useEffect } from "react";

import Loader from "./components/Loader";

const Nav = lazy(() => import("./components/Nav"));
const Footer = lazy(() => import("./components/Footer"));

function AppLayout() {
  const navigation = useNavigation;
  const isLoading = navigation.state === "loading";

  function useScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }

  useScrollToTop();

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
