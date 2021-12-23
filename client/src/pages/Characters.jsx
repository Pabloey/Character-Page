import React from "react";
// import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CharHalf from "../components/CharHalf";
import "../styles/char.css";
import charBG from "../content/bokeh-bg.jpg";
import jinxI from "../content/Jinx.png";
import viI from "../content/Vi.png";
import caitlynI from "../content/Caitlyn.png";
import jayceI from "../content/Jayce.png";

export default function Characters(props) {

  let charArray = [
    { name: "Jinx", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Jinx.png" },
    { name: "Vi", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Vi.png" },
    { name: "Caitlyn", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Caitlyn.png" },
    { name: "Jayce", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Jayce.png" },
  ];

  let handleClick = async (e) => {
    props.history.push(`/chars/${e.name}`);
  };

  return (
    <div className="char-bg" style={{ backgroundImage: `url(${charBG})` }}>
      <div>
        <div className="char-list">
          {charArray.map((e, i) => (
            <span className={`char-img-cont char-img-${e.name}`} key={i}>
              <img className={`char-img`} src={e.image} alt="" onClick={() => handleClick(e)} />
            </span>
          ))}
        </div>
        <main className="char-half">
          <Switch>
            <Route path="/chars/:id" component={(props) => <CharHalf {...props} />}></Route>
          </Switch>
        </main>
      </div>
    </div>
  );
}
