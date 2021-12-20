import React from "react";
// import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CharHalf from "../components/CharHalf";

export default function Characters(props) {
  let charArray = [
    { name: "Jinx", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Jinx.png" },
    { name: "Vi", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Vi.png" },
    { name: "Caitlyn", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Caitlyn.png" },
    { name: "Jayce", image: "http://ddragon.leagueoflegends.com/cdn/11.24.1/img/champion/Jayce.png" },
  ];

  return (
    <div>
      <div>
        <h1>This is the characters page</h1>
        {charArray.map((e, i) => (
          <span key={i} onClick={() => props.history.push(`/chars/${e.name}`)}>
            <img src={e.image} alt="" />
          </span>
        ))}
      </div>
      <main>
        <Switch>
          <Route path="/chars/:id" component={(props) => <CharHalf {...props} />}></Route>
        </Switch>
      </main>
    </div>
  );
}
