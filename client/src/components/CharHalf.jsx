import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Build } from "./Build";
import BuildList from "./BuildList";

export default function CharHalf(props) {
  const [character, setCharacter] = useState({});
  const [showForm, setShowForm] = useState(false);

  const switchForm = () => {
    if (showForm) setShowForm(false);
    else setShowForm(true);
  };

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
      <br />
      {showForm ? <Build {...props} switchForm={switchForm} /> : <button onClick={() => switchForm()}>Submit a build</button>}
      <BuildList {...props} />
    </div>
  );
}
