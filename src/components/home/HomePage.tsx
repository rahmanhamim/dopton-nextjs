import React from "react";
import HeroSection from "./HeroSection";
import MemberSection from "./MemberSection";
import OffersSection from "./OffersSection";
import SignUpSection from "./SignUpSection";
import TabsSection from "./TabsSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <SignUpSection />
      <TabsSection />
      <OffersSection />
      <MemberSection />
    </>
  );
};

export default HomePage;
