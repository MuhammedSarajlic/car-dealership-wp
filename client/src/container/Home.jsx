import React from "react";
import {
  HeroSection,
  FeatureSection,
  AboutSection,
  ContactSection,
  FooterSection,
} from "../components";

const Home = ({ carsCollection }) => {
  return (
    <>
      <HeroSection />
      <FeatureSection carsCollection={carsCollection} />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
