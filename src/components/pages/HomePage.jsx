import React from 'react';
import FeaturedCategories from '../sections/FeaturedCategories';
import Footer from '../sections/Footer';
import Header from '../sections/Header';
import Home from '../sections/Home';
import LatestRecipies from '../sections/LatestRecipies';
import MostLikedRecipies from '../sections/MostLikedRecipies';
import RacipiesByCommunity from '../sections/RacipiesByCommunity';
import RandomRecipies from '../sections/RandomRecipies';

const HomePage = () => {
  return (
    <>
      <Home />
      <LatestRecipies />
      <FeaturedCategories />
      <RandomRecipies />
      <MostLikedRecipies />
      <RacipiesByCommunity />
    </>
  );
};

export default HomePage;
