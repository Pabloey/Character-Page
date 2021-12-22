import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Build } from "./Build";
import BuildList from "./BuildList";
import { BASE_URL } from "../globals";

//CharHalf is

export default function CharHalf(props) {
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

  //Tern op to flip submit form on and off
  const [showForm, setShowForm] = useState(false);

  const switchForm = () => {
    if (showForm) setShowForm(false);
    else setShowForm(true);
  };
  //--------------------------------------------------------------------------

  //This is pulling Character data, age, name, role, lore, origin
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const getCharDetails = async () => {
      const response = await axios.get(`${BASE_URL}/chars/${props.match.params.id}`);
      setCharacter(response.data.character);
    };
    getCharDetails();
  }, [props.match.params.id]);
  //--------------------------------------------------------------------------

  //This is pulling ability information
  const [abilities, setAbilities] = useState({});

  useEffect(() => {
    const getAbility = async () => {
      const response = await axios.get(`${BASE_URL}/ability/${props.match.params.id}`);
      setAbilities(response.data.abilities);
    };
    getAbility();
  }, [props.match.params.id]);

  console.log(character)
  console.log(abilities);

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

  //Displaying character details and submit build button and build list under.
  return (
    <div>
      <div className="char-details">
        <h1>Name: {character.name}</h1>
        <h3>Age: {character.age}</h3>
        <h3>Origin: {character.origin}</h3>
        <h4>Lore: {character.lore}</h4>
        <h3>Role: {character.role}</h3>
      </div>
      <div>
        <span></span>
      </div>
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
