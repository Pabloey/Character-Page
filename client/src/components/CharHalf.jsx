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
      <br />
      <div className="char-details">
        <img className="char-splash" src={character.image} alt="" />
        <div className="char-right-detail">
          <p className="char-name">{character.name}</p>
          <p className="char-lore">{character.lore}</p>
        </div>
        <p className="rec-build-text">Recommended Build</p>
        <div className="origin-tag">
          <span className="tag-box">Age: {character.age}</span>
          <span className="tag-box">Origin: {character.origin}</span>
          <span className="tag-box">Role: {character.role}</span>
        </div>
        <div className="item-cont">
          <span>
            <img className="item-image mythic" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${character.item1}`} alt={character.item1} />
          </span>
          <span>
            <img className="item-image" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${character.item2}`} alt={character.item1} />
          </span>
          <span>
            <img className="item-image" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${character.item3}`} alt={character.item1} />
          </span>
          <span>
            <img className="item-image" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${character.item4}`} alt={character.item1} />
          </span>
          <span>
            <img className="item-image" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${character.item5}`} alt={character.item1} />
          </span>
          <span>
            <img className="item-image" src={`http://ddragon.leagueoflegends.com/cdn/11.24.1/img/item/${character.item6}`} alt={character.item1} />
          </span>
        </div>
        <div className="skill-cont">
          <span>
            <img className="skill-image p-skill" src={abilities.pImage} alt="" />
          </span>
          <span>
            <img className="skill-image q-skill" src={abilities.qImage} alt="" />
          </span>
          <span>
            <img className="skill-image w-skill" src={abilities.wImage} alt="" />
          </span>
          <span>
            <img className="skill-image e-skill" src={abilities.eImage} alt="" />
          </span>
          <span>
            <img className="skill-image r-skill" src={abilities.rImage} alt="" />
          </span>
        </div>
      </div>
      {showForm ? (
        <Build {...props} switchForm={switchForm} setCharBuilds={setCharBuilds} items={items} setItems={setItems} />
      ) : (
        <div>
          <button className="submit-buttons" onClick={() => switchForm()}>
            Submit a build
          </button>
        </div>
      )}
      <BuildList {...props} setCharBuilds={setCharBuilds} charBuilds={charBuilds} items={items} />
    </div>
  );
}
