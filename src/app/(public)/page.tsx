import AboutUs from "@/components/home/about-us";
import HomeHero from "@/components/home/home-hero";
import QuickInfo from "@/components/home/quick-info";
import Services from "@/components/home/services";
import React from "react";

const Home = () => {
  return (
    <>
      <HomeHero />
      <QuickInfo />
      <AboutUs />
      <Services />
    </>
  );
};

export default Home;
