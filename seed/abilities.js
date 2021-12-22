const db = require('../db')
const { Ability, Character } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main = async () => {
  const jinx = await Character.find({ name: "Jinx" });
  const vi = await Character.find({ name: "Vi" });
  const caitlyn = await Character.find({ name: "Caitlyn" });
  const jayce = await Character.find({ name: "Jayce" });
  const abilities = [
    {
      passive: "Get Excited!",
      qSkill: "Switcheroo!",
      wSkill: "Zap!",
      eSkill: "Flame Chompers!",
      rSkill: "Super Mega Death Rocket!",
      ability_id: jinx[0]._id
    },
    {
      passive: "Blast Shield",
      qSkill: "Vault Breaker",
      wSkill: "Denting Blows",
      eSkill: "Relentless Force",
      rSkill: "Cease and Desist",
      ability_id: vi[0]._id
    },
    {
      passive: "Headshot",
      qSkill: "Piltover Peacemaker",
      wSkill: "Yordle Snap Trap",
      eSkill: "90 Caliber Net",
      rSkill: "Ace in the Hole",
      ability_id: caitlyn[0]._id
    },
    {
      passive: "Hextech Capacitor",
      qSkill: "To the Skies!",
      wSkill: "Lightning Field",
      eSkill: "Thunder Blow!",
      rSkill: "Transform Mercury Cannon",
      ability_id: jayce[0]._id
    },
  ]
  await Ability.insertMany(abilities)
  console.log('abilities created')
};

const run = async () => {
  await main();
  db.close;
}

run();