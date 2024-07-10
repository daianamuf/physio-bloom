import { Outlet, useNavigation } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "./components/Loader";

const Nav = lazy(() => import("./components/Nav"));
const Footer = lazy(() => import("./components/Footer"));

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

      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default AppLayout;
