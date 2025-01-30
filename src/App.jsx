import Navbar from "./component/Navbar";
// import HeroSection from "./component/HeroSection";
import FeatureSection from "./component/FeaturesSection";

import Footer from "./component/Footer";
import Hero from "./component/Hero";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* <HeroSection /> */}
        <Hero/>
        <FeatureSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
