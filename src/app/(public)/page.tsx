import AboutUs from "@/components/home/about-us";
import CTA from "@/components/home/CTA";
import FeaturedServices from "@/components/home/featured-services";
import HomeHero from "@/components/home/home-hero";
import QuickInfo from "@/components/home/quick-info";
import Testimonials from "@/components/home/testimonials";
import WhyChooseUs from "@/components/home/why-choose-us";
import React from "react";

const Home = () => {
  return (
    <>
      <HomeHero />
      <QuickInfo />
      <AboutUs />
      <FeaturedServices />
      <Testimonials />
      <WhyChooseUs />
      <CTA />
    </>
  );
};

export default Home;
