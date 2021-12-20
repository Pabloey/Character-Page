import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./BuildList";
import { Build } from "./Build";
import { Switch, Route } from "react-router-dom";

export default function CharHalf(props) {
  const [character, setCharacter] = useState({});
  const [showForm, setShowForm] = useState(false);

  const switchForm = () => {
    if (showForm) setShowForm(false);
    else setShowForm(true);
  };

  console.log(showForm);
  useEffect(() => {
    const getCharDetails = async () => {
      const response = await axios.get(`http://localhost:3001/api/chars/${props.match.params.id}`);
      setCharacter(response.data.character);
    };
    getCharDetails();
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Name: {character.name}</h1>
      <h3>Age: {character.age}</h3>
      <h3>Origin: {character.origin}</h3>
      <h4>Lore: {character.lore}</h4>
      <h3>Role: {character.role}</h3>
      <img src={character.image} alt={character.name} />
      <br/>
      {showForm ? <Build {...props} switchForm={switchForm} /> : <button onClick={() => switchForm()}>Submit a build</button>}
      {/* // <Switch>
      //   <Route exact path="/chars/:id" component={(props) => <BuildList {...props} />}></Route>
      //   <Route path="/chars/:id/build" component={(props) => <Build {...props} />}></Route>
      // </Switch> */}
    </div>
  );
}
