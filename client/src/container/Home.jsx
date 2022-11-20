import React from "react";
import {
  HeroSection,
  FeatureSection,
  AboutSection,
  ContactSection,
} from "../components";

const Home = ({ carsCollection, setSearchQuery }) => {
  return (
    <>
      <HeroSection
        carsCollection={carsCollection}
        setSearchQuery={setSearchQuery}
      />
      <FeatureSection carsCollection={carsCollection} />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
