import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Build } from "./Build";
import BuildList from "./BuildList";
import { BASE_URL } from "../globals";

//CharHalf is

export default function CharHalf(props) {
  //Tern op to flip submit form on and off
  const [showForm, setShowForm] = useState(false);

  const switchForm = () => {
    if (showForm) setShowForm(false);
    else setShowForm(true);
  };
  //This is pulling Character data, age, name, role, lore, origin and abilities.

  const [character, setCharacter] = useState({});
  const [abilities, setAbilities] = useState({});

  useEffect(() => {
    const getCharDetails = async () => {
      const response = await axios.get(`${BASE_URL}/chars/${props.match.params.id}`);
      const res = await axios.get(`${BASE_URL}/ability/${props.match.params.id}`);
      setCharacter(response.data.character);
      setAbilities(res.data.abilities);
    };
    getCharDetails();
  }, [props.match.params.id]);

  console.log(character);
  console.log(abilities);
  //--------------------------------------------------------------------------

  // This is pulling information from Riot's item api, statiting with setItems
  const [items, setItems] = useState({});

  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/item.json`);
      setItems(response.data.data);
    };
    getItemDetails();
  }, [props.match.params.id]);
  //--------------------------------------------------------------------------

  //Pulling builds from database and stating in charBuilds
  const [charBuilds, setCharBuilds] = useState([]);

  useEffect(() => {
    const getItemDetails = async () => {
      const response = await axios.get(`${BASE_URL}/chars/builds/${props.match.params.id}`);
      setCharBuilds(response.data.builds);
      return;
    };
    getItemDetails();
  }, [props.match.params.id]);
  //--------------------------------------------------------------------------

  //Displaying character details and submit build button and build list under.
  return (
    <div>
      <div className="char-details">
        <p>Name: {character.name}</p>
        <p>Age: {character.age}</p>
        <p>Origin: {character.origin}</p>
        <p>Lore: {character.lore}</p>
        <p>Role: {character.role}</p>
        <div></div>
      </div>
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
