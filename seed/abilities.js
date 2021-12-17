const db = require('../db')
const { Ability, Character } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'));

const main = async () => {
  const jinx = await Character.find({ name: "Jinx" });
  const vi = await Character.find({ name: "Vi" });
  const caitlyn = await Character.find({ name: "Caitlyn" });
  const jayce = await Character.find({ name: "Jayce" });
}