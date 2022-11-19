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
      <HeroSection carsCollection={carsCollection} />
      <FeatureSection carsCollection={carsCollection} />
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Home;
