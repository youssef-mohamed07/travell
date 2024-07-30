import React from "react";
import Hero from "../components/Hero";

import AboutUs from "../components/About";
import ContactUs from "../components/ContactUs";
import Destinations from "../components/Packges";
import Packages from "../components/Packages";

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations/>
      <Packages/>

      <AboutUs />
      <ContactUs />
    </>
  );
};

export default Home;
