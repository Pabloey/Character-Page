import React from "react";
import "../styles/about.css";
import riotLogo from "../content/riot-pairedlogo-white-rgb.png";

export default function About() {
  return (
    <div>
      <div className="about-bg"></div>
      <div className="about-cont">
        <div className="left-cont">
          <h1>Website Developer</h1>
          <h2>Pablo Yocupicio</h2>
          <a href="mailto:pabloewhy@gmail.com" class="fa fa-google" target="_blank" rel="noreferrer noopener">
            <span class="text-inside"> Google</span>
          </a>
          <a href="https://github.com/Pabloey" class="fa fa-github" target="_blank" rel="noreferrer noopener">
            <span class="text-inside"> Github</span>
          </a>
          <a href="https://www.linkedin.com/in/pablo-yocupicio-17842810a/" class="fa fa-linkedin" target="_blank" rel="noreferrer noopener">
            <span class="text-inside"> LinkedIn</span>
          </a>
          <a href="https://codepen.io/Pabloey" class="fa fa-codepen" target="_blank" rel="noreferrer noopener">
            <span class="text-inside"> CodePen</span>
          </a>
        </div>
        <div className="right-cont">
          <h1>Arcane Developer</h1>
          <a href="https://www.leagueoflegends.com/en-us/?utm_source=riotbar&utm_medium=productcard%2Bwww.riotgames.com&utm_campaign=lol&utm_content=lol_keyart01" target="_blank" rel="noreferrer">
            <img className="lol-logo" src="https://www.riotgames.com/darkroom/original/9a50f5b3bdcfb815580ef103ec9b6ee2:d49b78b12cf185e10127cdf81b144a00/lol-logo-rendered-hi-res.png" alt="League of Legends Logo" />
          </a>
          <a href="https://www.riotgames.com/en" target="_blank" rel="noreferrer">
            <img className="riot-logo" src={riotLogo} alt="Riot Game's logo" />
          </a>
          <p className="riot-text">All images, information, names relating to characters are owned by Riot Games.</p>
        </div>
      </div>
    </div>
  );
}
