import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import FeatureSection from "./component/FeaturesSection";

import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />

        <Footer />
      </div>
    </>
  );
};

export default App;
