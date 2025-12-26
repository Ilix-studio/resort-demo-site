import { HeroSection } from "./HomeComponents/HeroSection";
import { HighlightsSection } from "./HomeComponents/HighlightsSection";
import { IntroductionSection } from "./HomeComponents/IntroductionSection";
import { Navbar } from "./HomeComponents/Navbar";
import { ParallaxExperienceSection } from "./HomeComponents/ParallaxExperienceSection";
import { ParallaxCulinarySection } from "./HomeComponents/ParallaxCulinarySection";
import { ParallaxAdventuresSection } from "./HomeComponents/ParallaxAdventuresSection";
import { Footer } from "./HomeComponents/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <IntroductionSection />
      <HighlightsSection />
      <ParallaxExperienceSection />
      <ParallaxCulinarySection />
      <ParallaxAdventuresSection />
      <Footer />
    </main>
  );
};

export default Home;
