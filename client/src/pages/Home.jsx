import React from "react";
import "../styles/home.css";
import myVideo from "../content/arcane-teaser.mp4";

export default function Home() {
  return (
    <div>
      <video className="video-bg" autoPlay loop muted>
        <source src={myVideo} type="video/mp4" />
      </video>
      <div className="overlay"></div>
      <div className="home-text">
        <p className="top-text">Welcome to the world of Arcane</p>
        <br />
        <span>
          <h4>A Netflix series by Riot Games based on their popular game, League of Legends</h4>
          <h6>Here you'll learn about your favorite characters in the show or you can recommend a build</h6>
        </span>
      </div>
    </div>
  );
}
