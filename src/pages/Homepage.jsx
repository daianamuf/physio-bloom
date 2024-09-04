import { Suspense, lazy } from "react";
import Loader from "../components/Loader";
import { Helmet } from "react-helmet-async";

const Hero = lazy(() => import("../components/Hero"));
const Plan = lazy(() => import("../components/Plan"));

function Homepage() {
  return (
    <>
      <Helmet>
        <title>
          PhysioBloom - Recuperare Medicală și Pilates în Cluj, România
        </title>
        <meta
          name="description"
          content="PhysioBloom este un studio de recuperare medicală și pilates în Cluj-Napoca, România, specializat în recuperare, pilates pre și post-natal, pilates clinic și Peak Pilates."
        />
        <meta
          name="keywords"
          content="PhysioBloom, recuperare medicală, pilates pre și post-natal, pilates clinic, Peak Pilates, terapie fizică, Cluj, Cluj-Napoca, România, pilates, kinetoterapie, kineto"
        />
      </Helmet>
      <div>
        <Suspense fallback={<Loader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Loader />}>
          <Plan />
        </Suspense>
      </div>
    </>
  );
}

export default Homepage;
