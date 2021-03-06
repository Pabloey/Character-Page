const db = require('../db')
const { Character } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main = async () => {
  const characters = [
    {
      name: "Jinx",
      age: "18",
      origin: "Zaun",
      lore: "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake. Jinx despises boredom and gleefully brings her own chaotic brand of pandemonium wherever she goes.",
      role: "Marksman",
      image: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_37.jpg",
      item1: "6672.png",
      item2: "3006.png",
      item3: "3085.png",
      item4: "3031.png",
      item5: "3072.png",
      item6: "3036.png",
    },
    {
      name: "Vi",
      age: "23",
      origin: "Zaun",
      lore: "Once a criminal from the mean streets of Zaun, Vi is a hotheaded, impulsive, and fearsome woman with only a very loose respect for authority figures. Growing up all but alone, Vi developed finely honed survival instincts as well as a wickedly abrasive sense of humor. She wields mighty hextech gauntlets gauntlets that can punch through walls—and suspects—with equal ease.",
      role: "Fighter",
      image: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Vi_29.jpg",
      item1: "6632.png",
      item2: "3047.png",
      item3: "3053.png",
      item4: "6333.png",
      item5: "3026.png",
      item6: "3075.png",
    },
    {
      name: "Caitlyn",
      age: "23",
      origin: "Piltover",
      lore: "Renowned as its finest peacekeeper, Caitlyn is also Piltover best shot at ridding the city of its elusive criminal elements. She is often paired with Vi, acting as a cool counterpoint to her partner’s more impetuous nature. Even though she carries a one-of-a-kind hextech rifle, Caitlyn’s most powerful weapon is her superior intellect, allowing her to lay elaborate traps for any lawbreakers foolish enough to operate in the City of Progress.",
      role: "Marksman",
      image: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_28.jpg",
      item1: "6671.png",
      item2: "3006.png",
      item3: "6676.png",
      item4: "3031.png",
      item5: "3094.png",
      item6: "3072.png",
    },
    {
      name: "Jayce",
      age: "23",
      origin: "Piltover",
      lore: "Jayce is a brilliant inventor who has pledged his life to the defense of Piltover and its unyielding pursuit of progress. With his transforming hextech hammer in hand, Jayce uses his strength, courage, and considerable intelligence to protect his hometown. While revered throughout the city as a hero, he hasn't taken well to the attention heroism brings. Still, Jayce's heart is in the right place, and even those who envy his natural skills are grateful for his protection in the City of Progress.",
      role: "Fighter",
      image: "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jayce_24.jpg",
      item1: "6692.png",
      item2: "3158.png",
      item3: "3004.png",
      item4: "3142.png",
      item5: "6694.png",
      item6: "3026.png",
    }
  ]
  await Character.insertMany(characters);
  console.log('characters created')
};

const run = async () => {
  await main();
  db.close;
}

run();