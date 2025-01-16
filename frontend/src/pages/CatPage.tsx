import React from "react";
import CatDetails from "../components/CatDetails";
import Header from "../components/GeneralUI/Header";
import Footer from "../components/GeneralUI/Footer";

const CatPage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Cat Details</h1>
      <CatDetails />
      <Footer />
    </div>
  );
};

export default CatPage;
