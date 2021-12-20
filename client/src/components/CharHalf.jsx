import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Item from "./Item";
import { Build } from "./Build";
import { Switch, Route } from "react-router-dom";

export default function CharHalf(props) {
  const [character, setCharacter] = useState({});
  const charId = props.match.params.id;

  useEffect(() => {
    const getCharDetails = async () => {
      const response = await axios.get(`http://localhost:3001/api/chars/${charId}`);
      setCharacter(response.data.character);
    };
    getCharDetails();
  }, [charId]);

  return (
    <div>
      <h1>Name: {character.name}</h1>
      <h3>Age: {character.age}</h3>
      <h3>Origin: {character.origin}</h3>
      <h4>Lore: {character.lore}</h4>
      <h3>Role: {character.role}</h3>
      <img src={character.image} alt={character.name} />
      <Switch>
        <Route exact path="/chars/:id" component={(props) => <Item {...props} charId={charId} />}></Route>
        <Route path="/chars/:id/build" component={(props) => <Build {...props} charId={charId} />}></Route>
      </Switch>
    </div>
  );
}
