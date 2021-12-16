import React from "react";
// import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CharHalf from "../components/CharHalf";

export default function Characters(props) {
  let array = ["jinx", "vi", "caitlyn", "jayce"];

  return (
    <div>
      <div>
        <h1>This is the characters page</h1>
        {array.map((e, i) => (
          <span key={i} onClick={() => props.history.push(`/chars/${e}`)}>
            {e}{" "}
          </span>
        ))}
      </div>
      <main>
        <Switch>
          <Route path="/chars/:id" component={(props) => <CharHalf {...props} array={array} />}></Route>
        </Switch>
      </main>
    </div>
  );
}
