import React from "react";
import HomeContent from "./HomeContent";
import HomeHeroPage from "./HomeHeroPage";
import Page from "./Page";

const Home = () => {
  return (
    <Page title="Welcome!">
      <HomeHeroPage />
      <HomeContent />
    </Page>
  );
};

export default Home;
