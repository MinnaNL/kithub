import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/GeneralUI/Header";
import Footer from "../components/GeneralUI/Footer";
import WelcomeCard from "../components/WelcomeCard";

const introText =
  "Welcome to KitHub, your one-stop destination for finding a feline friend in need of a loving home! We are a dedicated cat adoption service that connects kind-hearted individuals with cats of all ages.";

const LandingPage: React.FC = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to KitHub</h1>
      <WelcomeCard intro={introText} />
      <p></p>
      <Link to="/cats">See our cats</Link>
      <Footer />
    </div>
  );
};

export default LandingPage;
