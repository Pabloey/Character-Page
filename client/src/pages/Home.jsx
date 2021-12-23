import React from "react";
import "../styles/home.css";
import myVideo from "../content/arcane-teaser.mp4";

export default function Home() {
  return (
    <div>
      <br />
      <video className="video-bg" autoPlay loop muted>
        <source src={myVideo} type="video/mp4" />
      </video>
      <div className="home-text">
        <div className="overlay"></div>
        <p className="top-text">Welcome to the world of Arcane</p>
        <br />
        <span>
          <h4 className="bottom-text">A Netflix series by Riot Games based on their popular game, League of Legends</h4>
          <h6 className="bottom-text">Here you'll learn about your favorite characters in the show or you can recommend a build</h6>
        </span>
      </div>
    </div>
  );
}
