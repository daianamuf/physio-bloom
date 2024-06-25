import { useNavigation } from "react-router-dom";
import Loader from "../components/Loader";
import Hero from "../components/Hero";

function Homepage() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading && <Loader />}
      <Hero />
    </div>
  );
}

export default Homepage;
