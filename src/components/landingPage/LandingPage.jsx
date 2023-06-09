import React from "react";
import "./LandingPage.css"; // Import your CSS file for styling
import Charts from "./Charts/Charts";
import tbVideo from "../../assets/tbVideo.mp4"
import {Link } from "react-router-dom"
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="upperContent">
        <div className="left">  
          <header>
            <h1>Welcome to the <span style={{
              color:"blue",
              fontWeight:900
              
            }} >SURVEY-ME</span> </h1>
            <p>Collect data door by door to make a difference!</p>
            <Link to="/auth" className="cta-button" >Get Started</Link>
          </header>
        </div>
        <div className="right">
          <video src={tbVideo} autoPlay loop={true} muted controls={false} />
        </div> 
      </div>

      <section className="charts-section">
        <h2>Past Survey Results</h2>
        <Charts />
      </section>
    </div>
  );
};

export default LandingPage;
