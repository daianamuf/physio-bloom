import { Outlet, useNavigation } from "react-router-dom";

import Loader from "./components/Loader";
import Footer from "./components/Footer";
import { Suspense, lazy } from "react";

const Nav = lazy(() => import("./components/Nav"));

function AppLayout() {
  const navigation = useNavigation;
  const isLoading = navigation.state === "loading";

  return (
    <div className="wrapper">
      <Suspense fallback={<Loader />}>
        <Nav />
      </Suspense>
      {isLoading && <Loader />}

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default AppLayout;
