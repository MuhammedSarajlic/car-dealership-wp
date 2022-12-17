import React from "react";
import {
  HeroSection,
  FeatureSection,
  AboutSection,
  ContactSection,
} from "../components";

const Home = ({ carsCollection, setSearchQuery, searchQuery }) => {
  return (
    <>
      <HeroSection
        carsCollection={carsCollection}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <FeatureSection carsCollection={carsCollection} />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
