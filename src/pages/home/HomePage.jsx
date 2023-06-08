import React from "react";
import "./HomePage.css";
import Navbar from "../../components/navBar/Navbar";
import LandingPage from "../../components/landingPage/LandingPage";
import Footer from "../../components/footer/Footer";
const HomePage = () => {
  return (
    <main className="homeContainer">
      <div className="contentContainer">
        <Navbar />
        <LandingPage />
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;
