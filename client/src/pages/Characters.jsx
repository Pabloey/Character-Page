import React from "react";
// import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CharHalf from "../components/CharHalf";
import "../styles/char.css";

export default function Characters(props) {
  let charArray = [
    { name: "Jinx", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Jinx.png" },
    { name: "Vi", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Vi.png" },
    { name: "Caitlyn", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Caitlyn.png" },
    { name: "Jayce", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Jayce.png" },
  ];

  return (
    <div>
      <div className="char-list">
        {charArray.map((e, i) => (
          <span key={i}>
            <img className="char-img" src={e.image} alt="" onClick={() => props.history.push(`/chars/${e.name}`)} />
          </span>
        ))}
      </div>
      <main className="char-half">
        <Switch>
          <Route path="/chars/:id" component={(props) => <CharHalf {...props} />}></Route>
        </Switch>
      </main>
    </div>
  );
}
