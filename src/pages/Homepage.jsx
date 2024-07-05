import { Suspense, lazy } from "react";
import Loader from "../components/Loader";

const Hero = lazy(() => import("../components/Hero"));
const Plan = lazy(() => import("../components/Plan"));

function Homepage() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Plan />
      </Suspense>
    </div>
  );
}

export default Homepage;
