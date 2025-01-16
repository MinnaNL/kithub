import React from "react";
import CatList from "../components/CatList";
import Header from "../components/GeneralUI/Header";
import Footer from "../components/GeneralUI/Footer";

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to KitHub</h1>
      <CatList />

      <Footer />
    </div>
  );
};

export default HomePage;
