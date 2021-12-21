import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Build } from "./Build";
import BuildList from "./BuildList";

//CharHalf is

export default function CharHalf(props) {
  //Pulling builds from database and stating in charBuilds
  const [charBuilds, setCharBuilds] = useState([]);

  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`http://localhost:3001/api/chars/builds/${props.match.params.id}`);
      setCharBuilds(response.data.builds);
      return;
    };
    getItemDetails();
  }, [props.match.params.id]);
  //---------------------------------------------------------------------------

  //Tern op to flip submit form on and off
  const [showForm, setShowForm] = useState(false);

  const switchForm = () => {
    if (showForm) setShowForm(false);
    else setShowForm(true);
  };
  //---------------------------------------------------------------------------

  //This is pulling Character data, age, name, role, lore, origin
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getCharDetails = async () => {
      const response = await axios.get(`http://localhost:3001/api/chars/${props.match.params.id}`);
      setCharacter(response.data.character);
    };
    getCharDetails();
  }, [props.match.params.id]);
  //---------------------------------------------------------------------------

  // This is pulling information from Riot's item api, statiting with setItems
  const [items, setItems] = useState({});

  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`http://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/item.json`);
      setItems(response.data.data);
    };
    getItemDetails();
  }, [props.match.params.id]);
  //---------------------------------------------------------------------------

  return (
    <div>
      <h1>Name: {character.name}</h1>
      <h3>Age: {character.age}</h3>
      <h3>Origin: {character.origin}</h3>
      <h4>Lore: {character.lore}</h4>
      <h3>Role: {character.role}</h3>
      <br />
      {showForm ? (
        <Build {...props} switchForm={switchForm} setCharBuilds={setCharBuilds} items={items} setItems={setItems} />
      ) : (
        <div>
          <button onClick={() => switchForm()}>Submit a build</button>
        </div>
      )}
      <BuildList {...props} setCharBuilds={setCharBuilds} charBuilds={charBuilds} items={items} />
    </div>
  );
}
